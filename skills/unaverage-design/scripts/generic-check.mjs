#!/usr/bin/env node
// Generic check v2: measures known tells of generic AI design on a rendered page
// and computes the generic index (red tells plus clusters). Craft (H) is a separate gate
// and does not count in the index.
//
// Usage:
//   node generic-check.mjs <url|file.html> [--medium web|ui|slide|social|document] [--selector .slide]
//        [--allow-fonts "Typeface A,Typeface B"] [--brand-colors "#635bff,#0a2540"] [--intentional "A4,C13"]
//        [--deck talk|reading] [--viewport 1440x900] [--out report.json] [--md report.md]
//
// --medium        media-dependent thresholds (default: web, with --selector: slide)
// --selector      check a sequence (deck, carousel): every surface on its own plus the sequence tells F
// --allow-fonts   typefaces that brand or brief prescribe (they do not count as list typefaces)
// --brand-colors  brand colors; violet, gradients and glows in these colors do not count
// --intentional   tells that brief or brand explicitly ask for; they do not count in the index
//                 and appear in the report as "intentional"
// --deck          decks only: talk or reading (default reading), controls F6 and H4. Talk: every content text needs
//                 the talk body size (40 px at 1080 height of the stage's own layout, also when transform or zoom scale it);
//                 sources, labels, captions and page numbers may be small down to 18 px when the author marks them with
//                 class source or label (also caption, footnote, credit, src, data-role source or label, figcaption, cite, small, sup)
//
// Index: number of red tells (A to F, P) plus number of clusters. 0 to 1 clean, 2 borderline
// with a visual check, from 3 generic. Gate: index at most 2 (medium ui at most 1) and no cluster.
// The index measures closeness to templates, not originality; it does not replace looking.
// Clusters: Cream look, Neon dark, Broadsheet, Card kit, Stock hero, Glass look, Template display
// (only with a display typeface from L1 or L2), Template stack (list or default typeface carries the text
// plus 10 or more Lucide icons). New tells compared with v1: C14, D11, P4, F4, F6.
// Bot-protection, sign-in and error pages and too little text are flagged in the report (blocked, thin):
// a whole page under 30 DOM words for web, ui and document, without any DOM word for social and slide; with --selector
// each surface without any DOM word (a raster image or canvas; thin on the surface, thinSurfaces in the report), and a
// selector that matches no measurable surface. Their index is not meaningful.
// Word lists by language (E1, E3, E6, constant WORDS): a text node uses the list of its nearest lang attribute
// (the document language included); text without lang or in a language without its own list uses all lists.
// The skill's own markers [REQUIRED: ...] and [open: ...] and their German forms count on every page.
// If the pixel check cannot run (no Python 3 with pillow and numpy), the report says "pixelCheck": "not run"
// with the reason; tells B2, B4, B5, B7 and D11 (web only) then carry status "not run": unmeasured, never clean.
// Catalog v2 as of 2026-10-10 (E6 with labels such as "to be added"; exception only a mandatory line with its trigger
// or a field in final form), language-aware word lists as of 2026-10-16; calibration on 128 pages: README.md in this folder.
// As of 2026-10-29: H4 talk gate per content text block, words summed across inline markup and line breaks (see --deck),
// slides measured in the stage's layout px; D4 does not count scale or step rows (one unit, constant step left to right:
// 1 2 3, 01 02 03, 2024 2025 2026, 0% 25% 50%, 0 25 50 75 100%; with a unit or sign from 4 items or with 0 at either end).
// Hidden or empty surfaces are skipped with a warning.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
import { findChrome } from './chrome.mjs';
import { findPython } from './python.mjs';

const MEDIA = ['web', 'ui', 'slide', 'social', 'document'];
const USAGE = 'Usage: node generic-check.mjs <url|file.html> [--medium web|ui|slide|social|document] [--selector .slide] [--allow-fonts "A,B"] [--brand-colors "#hex"] [--intentional "A4,C13"] [--deck talk|reading] [--viewport 1440x900] [--out report.json] [--md report.md]';
const args = process.argv.slice(2);
const input = args[0];
if (!input || input.startsWith('--')) {
  console.error(USAGE);
  process.exit(1);
}
let brand = [], intentional = [];
let medium = null, selector = null, allowFonts = [], out = null, md = null, deck = 'reading', viewport = { width: 1440, height: 900 };
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--medium') medium = args[++i];
  else if (args[i] === '--selector') selector = args[++i];
  else if (args[i] === '--allow-fonts') allowFonts = args[++i].split(',').map(s => s.trim()).filter(Boolean);
  else if (args[i] === '--brand-colors') brand = args[++i].split(',').map(s => s.trim().toLowerCase().replace(/^#/, '')).map(s => /^[0-9a-f]{3}$/.test(s) ? s.split('').map(c => c + c).join('') : s).filter(s => /^[0-9a-f]{6}$/.test(s)).map(s => '#' + s);
  else if (args[i] === '--intentional') intentional = args[++i].split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
  else if (args[i] === '--deck') { const d = args[++i]; if (d !== 'talk' && d !== 'reading') { console.error(`Unknown deck type "${d}" (use talk or reading).\n${USAGE}`); process.exit(1); } deck = d; }
  else if (args[i] === '--out') out = args[++i];
  else if (args[i] === '--md') md = args[++i];
  else if (args[i] === '--viewport') { const [w, h] = args[++i].split('x').map(Number); viewport = { width: w, height: h }; }
  else if (args[i].startsWith('--')) { console.error(`Unknown option ${args[i]}.\n${USAGE}`); process.exit(1); }
}
if (!medium) medium = selector ? 'slide' : 'web';
if (!MEDIA.includes(medium)) { console.error(`Unknown medium "${medium}" (use ${MEDIA.join(', ')}).\n${USAGE}`); process.exit(1); }
// Too little text for a meaningful index. A post, slide, poster or card may carry 12 words or fewer (tell E1), so a
// surface (--selector) and a whole post or slide count only without any DOM word: a raster image or canvas. A whole
// web page, screen or document under 30 words is a loading page, a canvas page or an error.
const THIN_PAGE = medium === 'social' || medium === 'slide' ? 1 : 30;
const THIN_SURFACE = 1;
const CHROME = findChrome();

// Lists, as of October 2026. Review every six months (Anthropic frontend-design, Impeccable, own tests).
const L1 = ['inter', 'roboto', 'open sans', 'lato', 'montserrat', 'arial', 'helvetica', 'helvetica neue', 'poppins'];
const L2 = ['fraunces', 'instrument sans', 'instrument serif', 'geist', 'mona sans', 'plus jakarta sans', 'space grotesk', 'recoleta', 'dm sans', 'outfit', 'bricolage grotesque', 'syne', 'sora', 'playfair display', 'cormorant', 'cormorant garamond', 'newsreader', 'ibm plex sans', 'ibm plex serif', 'ibm plex mono', 'space mono', 'jetbrains mono'];
// Unchanged Tailwind and shadcn default colors (surfaces)
const TAILWIND = ['#6366f1', '#4f46e5', '#818cf8', '#8b5cf6', '#7c3aed', '#a855f7', '#9333ea', '#3b82f6', '#2563eb', '#0f172a', '#1e293b', '#64748b', '#94a3b8', '#f8fafc', '#f1f5f9', '#e2e8f0', '#09090b', '#18181b', '#27272a', '#71717a', '#f4f4f5', '#e4e4e7', '#111827', '#6b7280', '#f9fafb', '#e5e7eb', '#10b981', '#06b6d4', '#ec4899', '#f59e0b'];

// Word lists by language for tells E1, E3, E5 and E6, one key per language. A text node uses the list of its nearest
// lang attribute; text without lang or in a language without a key uses all lists. E5 is the union of all keys.
// Mirrors, kept identical: references/copy.md 5 (en) and references/markets/german.md 6 (de). New words only after a
// false-alarm test on human pages of that language (references/markets/README.md 5); candidates stay visual only.
// Fields: buzz (E1, regex fragments, Unicode word boundaries), negation (E3: short sentence of up to 8 words with
// the word plus one more word at the end), negationPair (E3, regex), placeholders (E5), gapUpper (E6, case-sensitive),
// gapColonWords (E6, word directly followed by a colon), gapPhrases (E6), gapColonOrAlone (E6, only alone in an
// element or after a colon), gapBrackets (E6, word inside square brackets). Lines with German strings end with the marker.
const WORDS = {
  en: {
    buzz: ['streamline', 'empower', 'supercharge', 'seamless(ly)?', 'elevate', 'unleash', 'next-gen', 'cutting-edge', 'world-class', 'effortless(ly)?', 'revolutioni[sz]e', 'game-?changer', 'next level', 'smarter', 'leverage', 'unlock',
      // added 2026-10-16 after the false-alarm test (calibration WP11); reimagine(d) stays on the visual list
      'frictionless', 'best-in-class', 'state-of-the-art', 'transformative', 'unparalleled', 'harness the power'],
    negation: ['no', 'not'],
    // E3 pairs, added 2026-10-16 after the false-alarm test: "Not (a|an|just) X. Y." and "It's not (just) X, it's Y"
    negationPair: "(?<![\\p{L}\\p{N}_])Not (?:a|an|just) [^.!?]{1,40}\\.\\s+\\p{Lu}|(?<![\\p{L}\\p{N}_])[Ii]t['\u2019]s not (?:just )?[^.!?,]{1,40}, it['\u2019]s(?![\\p{L}\\p{N}_])",
    placeholders: ['acme', 'nexus', 'john doe', 'jane doe', 'lorem ipsum', 'dolor sit amet'],
    // E6 entries new in 3.0, passed the false-alarm test on 2026-10-16
    gapUpper: ['TBA', 'TBC'],
    gapPhrases: ['to be added', 'to be confirmed', 'details to follow'],
    // 'coming soon' failed the false-alarm test on 2026-10-16 (human page aidesign-report); visual list in copy.md 5
    gapColonOrAlone: [],
    gapBrackets: ['title', 'role', 'date', 'day', 'place', 'location', 'city', 'company', 'photo', 'image', 'source', 'price', 'number', 'placeholder', 'required', 'address', 'contact', 'client', 'customer', 'amount', 'quote', 'insert', 'your'],
  },
  de: {
    buzz: ['nahtlos', 'revolutionär', 'mühelos'], // lang:de
    negation: ['kein', 'keine', 'nicht'], // lang:de
    negationPair: 'Nicht [^.]{2,40}\\. Sondern', // lang:de
    placeholders: ['max mustermann', 'erika mustermann'], // lang:de
    gapColonWords: ['offen', 'folgt'], // lang:de
    gapPhrases: ['wird ergänzt', 'Angabe folgt', 'folgt in Kürze'], // lang:de
    gapBrackets: ['namen', 'rolle', 'titel', 'datum', 'tag', 'ort', 'firma', 'foto', 'bild', 'quelle', 'preis', 'zahl', 'platzhalter', 'offen', 'pflicht', 'adresse', 'kontakt'], // lang:de
  },
};
// E6 on every page regardless of lang: the skill's own markers (counted first, then removed from the text, so that
// a marker counts once), TBD, TODO, underscore lines after a colon, square brackets with language-neutral words.
const GAP_ANY = {
  markers: '\\[(?:REQUIRED|PFLICHT|open|offen)\\s*:[^\\]]{0,200}\\]?', // lang:de
  upper: ['TBD', 'TODO'],
  brackets: ['name', 'logo', 'url', 'text', 'x,x', 'xx'],
};

// Hide consent banners only, never accept them. Never html, body or containers holding the main content.
const CONSENT_SEL = '[id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i], #onetrust-banner-sdk, #onetrust-consent-sdk, .ot-sdk-container, #didomi-host, #usercentrics-root, #CybotCookiebotDialog, .cc-window, .truste_box_overlay, [aria-label*="cookie" i], [aria-label*="consent" i]';

function analyze(scope, cfg) {
  // runs in the browser
  const { L1, L2, TAILWIND, foldH } = cfg;
  const LISTS = L1.concat(L2);
  // Normalize family names: next/font prefixes, hash, fallback, CamelCase, suffixes (Latin, Variable, VF, Text, Display, Pro, weights), "GeistSans" to "geist"
  const SUF = /\s?(latin ext|latin|cyrillic|greek|variable|var|vf|text|display|pro|std|lt|w0\d|web|webfont|regular|book|thin|light|medium|semibold|bold|black|heavy|italic|sc|\d{1,3}\s?pt)$/;
  const ALIAS = { 'playfair': 'playfair display', 'ibm plex': 'ibm plex sans', 'geist sans': 'geist' };
  const normFam = raw => {
    let f = String(raw || '').split(',')[0].replace(/["']/g, '').trim();
    f = f.replace(/^__+/, '').replace(/_[0-9a-f]{5,}$/i, '').replace(/[_ ]fallback$/i, '');
    f = f.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2').replace(/[_-]+/g, ' ').toLowerCase().replace(/\s+/g, ' ').trim();
    const cands = [f];
    let g = f;
    for (let i = 0; i < 4; i++) { const h = g.replace(SUF, '').trim(); if (h === g || !h) break; g = h; cands.push(g); }
    for (const c of cands.slice()) if (/sans$/.test(c)) cands.push(c.replace(/\s?sans$/, '').trim());
    for (const c of cands) { if (ALIAS[c]) return ALIAS[c]; const k = c.replace(/ /g, ''); const hit = LISTS.find(l => l.replace(/ /g, '') === k); if (hit) return hit; }
    return f;
  };
  const allowFonts = (cfg.allowFonts || []).map(normFam);
  const brandRgb = (cfg.brand || []).map(h => { const n = parseInt(h.replace('#', ''), 16); return { r: n >> 16, g: (n >> 8) & 255, b: n & 255 }; });
  const isBrand = c => brandRgb.some(m => Math.abs(m.r - c.r) + Math.abs(m.g - c.g) + Math.abs(m.b - c.b) < 60);
  const root = scope ? document.querySelectorAll(scope.sel)[scope.idx] : document.body;
  const rootRect = root.getBoundingClientRect();
  const W = scope ? rootRect.width : window.innerWidth;
  const top0 = scope ? rootRect.top : -window.scrollY;
  const inFold = r => scope ? true : (r.top - top0) < foldH;
  const rgb = s => { const m = s && s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(parseFloat); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const hex = c => '#' + [c.r, c.g, c.b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  const hsl = c => { const r = c.r / 255, g = c.g / 255, b = c.b / 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); const l = (mx + mn) / 2; let h = 0, s = 0; if (mx !== mn) { const d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); if (mx === r) h = ((g - b) / d + (g < b ? 6 : 0)); else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4; h *= 60; } return { h, s, l }; };
  const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
  const vis = (el, cs) => cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity) > 0.01;
  const isViolet = c => { if (!c || c.a < 0.2 || isBrand(c)) return false; const x = hsl(c); return x.h >= 250 && x.h <= 310 && x.s > 0.25 && x.l >= 0.15 && x.l <= 0.85; };
  const isCyan = c => { if (!c || c.a < 0.2 || isBrand(c)) return false; const x = hsl(c); return x.h >= 170 && x.h <= 197 && x.s >= 0.4; };
  const colorsIn = s => (s.match(/rgba?\([^)]+\)/g) || []).map(rgb).filter(Boolean);
  const isMono = cs => /mono|code|courier|consolas/i.test(cs.fontFamily) && !allowFonts.includes(normFam(cs.fontFamily));
  // Language of a text: primary subtag of the nearest lang attribute (the document language included), '' without one
  const langOf = el => { const h = el.closest('[lang]'); return h ? String(h.getAttribute('lang') || '').trim().toLowerCase().split(/[-_]/)[0] : ''; };

  const all = Array.from(root.querySelectorAll('*'));
  const info = [];
  for (const el of all) {
    const cs = getComputedStyle(el);
    if (!vis(el, cs)) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    info.push({ el, cs, r });
  }

  // Texts
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
  const texts = []; let n;
  while ((n = tw.nextNode())) {
    const el = n.parentElement; if (!el) continue; const cs = getComputedStyle(el); if (!vis(el, cs)) continue;
    if (/^(script|style|noscript|template)$/i.test(el.tagName)) continue;
    const r = el.getBoundingClientRect(); if (r.width < 1) continue;
    const t = n.textContent.replace(/\s+/g, ' ').trim();
    texts.push({ el, cs, r, t, size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight, 10) || 400, fam: normFam(cs.fontFamily), words: t.split(' ').filter(Boolean).length, chars: t.length, lang: langOf(el) });
  }
  const totalChars = texts.reduce((s, x) => s + x.chars, 0) || 1;
  const allText = texts.map(x => x.t).join(' ');
  const wordCount = texts.reduce((s, x) => s + x.words, 0);
  const totalWords = wordCount || 1;
  const bySize = {}; texts.forEach(x => { const k = Math.round(x.size); bySize[k] = (bySize[k] || 0) + x.chars; });
  const body = +Object.entries(bySize).sort((a, b) => b[1] - a[1])[0]?.[0] || 16;
  const largest = texts.reduce((m, x) => x.size > (m?.size || 0) ? x : m, null);
  const famShare = {}; texts.forEach(x => { famShare[x.fam] = (famShare[x.fam] || 0) + x.chars / totalChars; });
  const langChars = {}; texts.forEach(x => { const k = x.lang || 'none'; langChars[k] = (langChars[k] || 0) + x.chars; });
  const langShare = Object.fromEntries(Object.entries(langChars).sort((a, b) => b[1] - a[1]).map(([k, v]) => [k, +(v / totalChars).toFixed(3)]));
  const isCard = x => { const bg = rgb(x.cs.backgroundColor); const hasBg = bg && bg.a > 0.05; const bd = parseFloat(x.cs.borderTopWidth) > 0 && x.cs.borderTopStyle !== 'none'; const sh = x.cs.boxShadow !== 'none'; return (hasBg || bd || sh) && x.r.width >= 120 && x.r.height >= 80 && x.r.width < W * 0.9 && (x.el.innerText || '').trim().length > 10; };
  const cards = info.filter(isCard);
  const cardSet = new Set(cards.map(x => x.el));
  const headings = info.filter(x => /^h[1-3]$/.test(x.el.tagName.toLowerCase()));
  const h1 = info.find(x => x.el.tagName.toLowerCase() === 'h1') || (largest ? { el: largest.el.closest('h1,h2,p,div') || largest.el, cs: largest.cs, r: largest.r } : null);

  const S = {};
  const put = (id, name, value, status, note) => { S[id] = { id, name, value, status, note: note || '' }; };

  // A Typography
  const listed = f => LISTS.includes(f) && !allowFonts.includes(f);
  const shareL1 = Object.entries(famShare).filter(([f]) => L1.includes(f) && !allowFonts.includes(f)).reduce((s, [, v]) => s + v, 0);
  const shareL2 = Object.entries(famShare).filter(([f]) => L2.includes(f) && !allowFonts.includes(f)).reduce((s, [, v]) => s + v, 0);
  // Default stack without a typeface decision (Tailwind font-sans, system font); counts only in the cluster Template stack, not for A1
  const DEFAULTS = ['ui sans serif', 'system ui', 'apple system', 'blink mac system font', 'segoe ui', 'sans serif'];
  const shareDefault = Object.entries(famShare).filter(([f]) => DEFAULTS.includes(f) && !allowFonts.includes(f)).reduce((s, [, v]) => s + v, 0);
  const dispFam = largest ? largest.fam : '';
  const dispListed = listed(dispFam);
  const secondVoice = Object.entries(famShare).filter(([f, v]) => f !== dispFam && v >= 0.05).length > 0;
  // Decision E6: a list typeface as display is at most yellow; red only in the cluster Template display
  put('A1', 'Overused typeface as the voice', `Display: ${dispFam || '?'}; share L1 ${shareL1.toFixed(2)}, L2 ${shareL2.toFixed(2)}${secondVoice ? '; second voice' : ''}`, dispListed || shareL1 + shareL2 >= 0.05 ? 'yellow' : 'ok', dispListed ? 'Display from L1 or L2: allowed with exactly one deliberate axis (weight, size, tracking) and a reason; house typeface through --allow-fonts. Red only in the cluster Template display.' : '');
  const ratio = largest ? largest.size / body : 0;
  const ratioLim = { web: 2.0, slide: 1.8, social: 1.8, document: 1.5, ui: 1.2 }[cfg.medium] || 2.0;
  put('A2', 'Flat hierarchy', `scale ${ratio.toFixed(2)} (largest ${largest ? Math.round(largest.size) : '?'} px / body ${body} px)`, ratio < ratioLim ? 'yellow' : 'ok', ratio < ratioLim ? 'Visual check: is there a large form outside the DOM text (SVG, image, WebGL)?' : '');
  let accent = 0, accentItalicSerif = false;
  if (h1) {
    const pcs = h1.cs;
    h1.el.querySelectorAll('span,em,i,mark,strong,b').forEach(sp => {
      const c = getComputedStyle(sp); if (!(sp.textContent || '').trim()) return;
      const diff = c.color !== pcs.color || normFam(c.fontFamily) !== normFam(pcs.fontFamily) || c.fontStyle !== pcs.fontStyle || /text/.test(c.webkitBackgroundClip || c.backgroundClip || '');
      if (diff) { accent++; if (c.fontStyle === 'italic' && /serif|garamond|playfair|fraunces|instrument serif|newsreader|cormorant/i.test(c.fontFamily) && !/serif/i.test(pcs.fontFamily.replace(/sans-serif/i, ''))) accentItalicSerif = true; }
    });
  }
  put('A3', 'Accent word in the main headline', `${accent} accent spans${accentItalicSerif ? ', italic serif in a sans headline' : ''}`, accentItalicSerif ? 'red' : accent >= 1 ? 'yellow' : 'ok', accent ? 'Only with a reason from brand or content.' : '');
  // Eyebrows: short caps or tracked label directly above a heading
  let eyebrows = 0;
  const majors = headings.filter(x => /h[12]/i.test(x.el.tagName));
  const heads = majors.length ? majors : texts.filter(x => x.size >= body * 1.8).map(x => ({ el: x.el, r: x.r, cs: x.cs }));
  for (const h of heads) {
    const hs = parseFloat(h.cs.fontSize);
    const htxt = (h.el.innerText || h.el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    // Duplicates of the heading (split-text animation, outline layer) are not eyebrows
    const lab = texts.find(x => x.chars <= 40 && x.el !== h.el && !h.el.contains(x.el) && !htxt.includes(x.t.toLowerCase()) && x.size <= hs * 0.6 && (x.cs.textTransform === 'uppercase' || parseFloat(x.cs.letterSpacing) / x.size >= 0.05 || (x.t === x.t.toUpperCase() && /[A-ZÄÖÜ]{3}/.test(x.t))) && x.r.bottom <= h.r.top + 2 && h.r.top - x.r.bottom <= 48 && (x.r.left + x.r.width / 2) >= h.r.left - 20 && (x.r.left + x.r.width / 2) <= h.r.right + 20); // lang:de
    if (lab) eyebrows++;
  }
  const eyeShare = heads.length ? eyebrows / heads.length : 0;
  // Hero pill: badge or label with a fill or border up to 220 px above the H1, at most 6 words, no link (after Krebs, hero-eyebrow-pill)
  const h1Real = root.querySelector('h1');
  let heroPill = '';
  if (h1Real && h1Real.getBoundingClientRect().height > 0) {
    const hr = h1Real.getBoundingClientRect();
    const pill = info.find(x => {
      if (x.el.contains(h1Real) || h1Real.contains(x.el) || x.el.closest('nav,[role=navigation],a,button')) return false;
      const r = x.r; if (r.bottom > hr.top + 10 || r.bottom < hr.top - 220 || r.width < 40 || r.width > 600 || r.height < 16 || r.height > 56) return false;
      const cx = (r.left + r.right) / 2; const ov = Math.max(0, Math.min(r.right, hr.right) - Math.max(r.left, hr.left));
      if (!((cx >= hr.left && cx <= hr.right) || Math.abs(r.left - hr.left) <= 60 || ov >= Math.min(r.width, hr.width) * 0.5)) return false;
      const t = (x.el.textContent || '').trim(); if (t.length < 3 || t.length > 80 || t.split(/\s+/).length > 6 || t.split(/\s+/).some(w => w.length > 24)) return false;
      if (x.el.querySelector('select,option,[role=listbox],[role=menu]') || x.el.querySelectorAll('li,a,button').length >= 3) return false;
      const bg = rgb(x.cs.backgroundColor); const bw = parseFloat(x.cs.borderTopWidth) || 0; const bc = rgb(x.cs.borderTopColor);
      return (bg && bg.a >= 0.05) || (bw >= 1 && bc && bc.a > 0.15);
    });
    if (pill) heroPill = (pill.el.textContent || '').trim().slice(0, 40);
  }
  put('A4', 'Eyebrow above headings', `${eyebrows} of ${heads.length} headings${heroPill ? `; hero pill "${heroPill}"` : ''}`, eyeShare >= 0.3 && eyebrows >= 2 ? 'red' : (eyebrows >= 1 || heroPill) ? 'yellow' : 'ok', heroPill && eyebrows === 0 ? 'Badge above the H1 only with content (a real novelty, a date), not as a formula.' : '');
  const mono = texts.filter(x => isMono(x.cs)).reduce((s, x) => s + x.chars, 0) / totalChars;
  put('A5', 'Monospace as costume', `share ${mono.toFixed(2)}`, mono >= 0.05 ? 'yellow' : 'ok', mono >= 0.05 ? 'Ok only with a code or data reference or as the house typeface. Red only in the clusters Neon dark and Broadsheet.' : '');
  const numbered = texts.filter(x => x.chars <= 10 && /^(0\d|\d{2}\s?[\/.]|no\.?\s?\d+|\(\d{2}\))/i.test(x.t)).length;
  put('A6', 'Numbered section labels', `${numbered}`, numbered >= 1 ? 'yellow' : 'ok', numbered ? 'Ok only for a real sequence. Red only in the cluster Broadsheet.' : '');
  const track = largest ? (parseFloat(largest.cs.letterSpacing) || 0) / largest.size : 0;
  put('A7', 'Crushed display tracking', `${track.toFixed(3)} em`, track < -0.065 ? 'red' : track < -0.04 ? 'yellow' : 'ok');
  const dispBlock = largest ? (largest.el.closest('h1,h2,h3,p') || largest.el) : null;
  const h1Words = dispBlock ? texts.filter(x => dispBlock.contains(x.el) && x.size >= largest.size * 0.6).reduce((s2, x) => s2 + x.words, 0) : 0;
  put('A8', 'Overlong main headline', `${h1Words} words`, h1Words > 9 ? 'yellow' : 'ok', h1Words > 9 ? 'Visual check: a real headline, or a paragraph, statement, quote?' : '');
  const sizes = Object.keys(bySize).length;
  const sizeLim = { slide: 4, social: 4 }[cfg.medium];
  put('A9', 'Too many type sizes', `${sizes} sizes`, sizeLim && sizes > sizeLim ? 'yellow' : 'ok', sizeLim ? '' : 'No signal on the web (top references use more than 14 sizes); for decks F4 counts.');
  // Display values for Template display
  const dispLh = largest && largest.cs.lineHeight !== 'normal' ? parseFloat(largest.cs.lineHeight) / largest.size : null;
  const dispW = largest ? largest.weight : 0;

  // B Color
  let violet = 0, violetGrad = false, violetPrimary = false, cyan = 0; const violetHex = new Set();
  for (const x of info) {
    const tag = x.el.tagName.toLowerCase();
    const interactive = tag === 'button' || tag === 'a' || x.el.getAttribute('role') === 'button';
    const cols = [rgb(x.cs.backgroundColor), interactive ? rgb(x.cs.color) : null, parseFloat(x.cs.borderTopWidth) > 0 ? rgb(x.cs.borderTopColor) : null].filter(Boolean);
    const gcols = /gradient/.test(x.cs.backgroundImage) ? colorsIn(x.cs.backgroundImage) : [];
    if (gcols.some(isViolet)) { violet++; gcols.filter(isViolet).forEach(c => violetHex.add(hex(c))); if (inFold(x.r) && x.r.width * x.r.height > 20000) violetGrad = true; }
    if (cols.some(isViolet)) { violet++; cols.filter(isViolet).forEach(c => violetHex.add(hex(c))); if (interactive && isViolet(rgb(x.cs.backgroundColor)) && inFold(x.r)) violetPrimary = true; }
    if (cols.concat(gcols).some(isCyan)) cyan++;
  }
  put('B1', 'Violet or indigo accent or gradient', `${violet} surfaces${violetHex.size ? ' (' + [...violetHex].slice(0, 3).join(', ') + ')' : ''}${violetGrad ? ', gradient with violet' : ''}${violetPrimary ? ', violet primary action' : ''}`, (violetGrad || violetPrimary) ? 'red' : violet >= 1 ? 'yellow' : 'ok', violet ? 'Ok only with a brand reference (--brand-colors).' : '');
  // Page background
  const pageBg = (() => { for (const e of [root, document.body, document.documentElement, document.querySelector('main')].filter(Boolean)) { const c = rgb(getComputedStyle(e).backgroundColor); if (c && c.a > 0.9) return c; } return { r: 255, g: 255, b: 255, a: 1 }; })();
  const cream = Math.min(pageBg.r, pageBg.g, pageBg.b) >= 209 && pageBg.r >= pageBg.g && pageBg.g >= pageBg.b && (pageBg.r - pageBg.b) >= 6 && (pageBg.r - pageBg.b) <= 48;
  const serifDisplay = largest && /serif|garamond|playfair|fraunces|newsreader|cormorant|instrument serif|recoleta/i.test(largest.cs.fontFamily.replace(/sans-serif/ig, ''));
  const warmAccent = info.some(x => { const c = rgb(x.cs.backgroundColor) || null; if (!c || c.a < 0.5 || isBrand(c)) return false; const h = hsl(c); return h.h >= 8 && h.h <= 30 && h.s > 0.35 && h.l > 0.35 && h.l < 0.7; });
  put('B3', 'Cream background', `${hex(pageBg)}${cream ? ' (cream)' : ''}${cream && serifDisplay ? ', serif display' : ''}${cream && warmAccent ? ', warm accent' : ''}`, cream ? 'yellow' : 'ok', cream ? 'Ok with a material reference (paper, label). Red only in the cluster Cream look.' : '');
  put('B2', 'Cyan on dark', `${cyan} surfaces`, 'ok'); // status after the pixel measurement
  const tailwindHits = new Set();
  for (const x of info) { const c = rgb(x.cs.backgroundColor); if (c && c.a > 0.5 && x.r.width * x.r.height > 2000) { const hx = hex(c); if (TAILWIND.includes(hx) && !isBrand(c)) tailwindHits.add(hx); } }
  const radii = cards.map(x => Math.round(parseFloat(x.cs.borderTopLeftRadius) || 0));
  const radCount = {}; radii.forEach(r => radCount[r] = (radCount[r] || 0) + 1);
  const topRad = Object.entries(radCount).sort((a, b) => b[1] - a[1])[0];
  const stdRad = topRad && (topRad[0] === '8' || topRad[0] === '10' || topRad[0] === '12');
  put('B6', 'Unchanged Tailwind and shadcn values', `${tailwindHits.size} default colors${tailwindHits.size ? ' (' + [...tailwindHits].join(', ') + ')' : ''}${stdRad ? ', default radius ' + topRad[0] + ' px' : ''}`, tailwindHits.size >= 3 ? 'red' : tailwindHits.size >= 1 ? 'yellow' : 'ok');

  // C Surfaces and effects
  const vpA = (scope ? rootRect.width * rootRect.height : W * foldH);
  // A gradient over an image (darkening, mask) does not count
  const overImage = x => {
    if (/url\(/.test(x.cs.backgroundImage)) return true;
    const cx = x.r.left + x.r.width / 2, cy = x.r.top + x.r.height / 2;
    if (cx < 0 || cy < 0 || cx > window.innerWidth || cy > window.innerHeight) return false;
    const st = document.elementsFromPoint(cx, cy) || []; const i = st.indexOf(x.el); if (i < 0) return false;
    return st.slice(i + 1).some(e => !x.el.contains(e) && (/^(img|video|canvas|picture)$/i.test(e.tagName) || /url\(/.test(getComputedStyle(e).backgroundImage)));
  };
  const satStop = c => { const h = hsl(c); return h.s > 0.3 && h.l >= 0.2 && h.l <= 0.9 && c.a > 0.15 && !isBrand(c); };
  const grads = info.filter(x => /gradient/.test(x.cs.backgroundImage) && !/repeating/.test(x.cs.backgroundImage) && inFold(x.r) && x.r.width * x.r.height > vpA * 0.03 && colorsIn(x.cs.backgroundImage).some(satStop) && !overImage(x)).length;
  put('C1', 'Decorative gradients (first screen, colored)', `${grads}`, grads >= 3 ? 'red' : grads >= 1 ? 'yellow' : 'ok', grads ? 'Counts only stops with saturation above 0.3 and lightness 0.2 to 0.9; darkening over images and brand colors excluded.' : '');
  const gradTextEls = info.filter(x => /text/.test(x.cs.webkitBackgroundClip || x.cs.backgroundClip || '') && /gradient/.test(x.cs.backgroundImage) && (x.cs.webkitTextFillColor === 'rgba(0, 0, 0, 0)' || x.cs.color === 'rgba(0, 0, 0, 0)' || /transparent/.test(x.cs.webkitTextFillColor || '')) && (x.el.innerText || '').trim().length > 0);
  const gradInH1 = gradTextEls.some(x => x.el.closest('h1') || (largest && (x.el.contains(largest.el) || x.el === largest.el)));
  put('C2', 'Gradient text', `${gradTextEls.length}${gradInH1 ? ', in the main headline' : ''}`, gradTextEls.length >= 4 || gradInH1 ? 'red' : gradTextEls.length >= 1 ? 'yellow' : 'ok', gradTextEls.length ? 'Yellow only with a visible color source (image, logo, product).' : '');
  let glows = 0, halo = false;
  for (const x of info) {
    if (x.cs.boxShadow === 'none') continue;
    const parts = x.cs.boxShadow.split(/,(?![^(]*\))/);
    for (const p of parts) {
      const c = rgb(p); const nums = (p.replace(/rgba?\([^)]+\)/, '').match(/-?\d+(\.\d+)?px/g) || []).map(parseFloat);
      if (nums.length >= 3 && Math.abs(nums[0]) <= 2 && Math.abs(nums[1]) <= 2 && nums[2] >= 15 && c && hsl(c).s > 0.3 && c.a > 0.1 && !isBrand(c)) { glows++; if (inFold(x.r) && x.r.width > 200) halo = true; }
    }
  }
  const radialHalo = info.some(x => /radial-gradient/.test(x.cs.backgroundImage) && inFold(x.r) && x.r.width > 300 && colorsIn(x.cs.backgroundImage).some(c => hsl(c).s > 0.3 && c.a > 0.1 && !isBrand(c)));
  put('C3', 'Colored glows and halos', `${glows} glows${radialHalo ? ', radial color cloud in the hero' : ''}`, (glows >= 2 || halo || radialHalo) ? 'red' : glows === 1 ? 'yellow' : 'ok');
  const blurs = info.filter(x => /blur\(/.test(x.cs.backdropFilter || x.cs.webkitBackdropFilter || '') && !x.el.closest('nav,header,dialog,[role=dialog],[role=menu]') && !/(dialog|modal|nav|header|menu|popover|tooltip)/i.test(String(x.el.className || '')) && x.r.width * x.r.height > vpA * 0.02).length;
  put('C4', 'Glass and blur as decoration', `${blurs}`, blurs >= 1 ? 'yellow' : 'ok', blurs ? 'Red only in the cluster Glass look.' : '');
  const stripeEls = info.filter(x => { const l = parseFloat(x.cs.borderLeftWidth), t = parseFloat(x.cs.borderTopWidth), rr = parseFloat(x.cs.borderRightWidth); const c = rgb(x.cs.borderLeftColor); return l > 1 && t <= 1 && rr <= 1 && c && hsl(c).s > 0.25 && x.r.height > 30 && x.r.width > 100; });
  const stripesRound = stripeEls.filter(x => Math.max(parseFloat(x.cs.borderTopRightRadius) || 0, parseFloat(x.cs.borderBottomRightRadius) || 0, parseFloat(x.cs.borderTopLeftRadius) || 0) >= 4).length;
  put('C5', 'Colored side stripe', `${stripeEls.length}${stripesRound ? ', ' + stripesRound + ' of them on a rounded card' : ''}`, stripesRound >= 1 ? 'red' : stripeEls.length >= 1 ? 'yellow' : 'ok', stripeEls.length && !stripesRound ? 'Quote or margin line without a card: visual check.' : '');
  const radShare = topRad ? topRad[1] / (cards.length || 1) : 0;
  put('C6', 'SaaS card kit', `${cards.length} cards, most frequent radius ${topRad ? topRad[0] : '-'} px (${(radShare * 100).toFixed(0)}%)`, radShare >= 0.8 && cards.length >= 8 ? 'yellow' : 'ok', 'Red only in the cluster Card kit with icon tiles and a card grid.');
  const nested = cards.filter(x => { let p = x.el.parentElement; while (p && p !== root) { if (cardSet.has(p)) return true; p = p.parentElement; } return false; }).length;
  put('C7', 'Nested cards', `${nested}`, nested >= 3 ? 'yellow' : 'ok', nested ? 'Can be correct in product UI with real panels.' : '');
  // Icon tiles and icon circles above headings (also without a card)
  const stdIcon = el => {
    const svg = el.matches('svg') ? el : el.querySelector('svg');
    const cls = (el.getAttribute('class') || '') + ' ' + (svg ? svg.getAttribute('class') || '' : '') + ' ' + Array.from(el.querySelectorAll('i,span')).map(e => e.getAttribute('class') || '').join(' ');
    if (/lucide|tabler|feather|heroicon|phosphor|\bph-|\bbi-|\bfa-|\bfas\b|\bfa\b|material-symbols|material-icons|glyphicon/i.test(cls)) return true;
    if (svg && svg.getAttribute('data-slot') === 'icon') return true;
    return !!svg && svg.getAttribute('viewBox') === '0 0 24 24' && svg.getAttribute('fill') === 'none' && svg.getAttribute('stroke') === 'currentColor' && /^(1\.5|2)$/.test(svg.getAttribute('stroke-width') || '');
  };
  let tiles = 0, stdTiles = 0, cardTiles = 0;
  for (const h of headings.filter(x => /h[23]/i.test(x.el.tagName))) {
    const t = info.find(x => x.r.width <= 72 && x.r.width >= 28 && Math.abs(x.r.width - x.r.height) <= 6 && (x.el.querySelector('svg,img,i,[class*="icon" i]') || /url\(/.test(x.cs.maskImage || x.cs.webkitMaskImage || '')) && (rgb(x.cs.backgroundColor)?.a > 0.05 || parseFloat(x.cs.borderTopWidth) > 0) && x.r.bottom <= h.r.top + 2 && h.r.top - x.r.bottom <= 40 && (x.r.left + x.r.width / 2) >= h.r.left - 20 && (x.r.left + x.r.width / 2) <= h.r.right + 20 && x.r.left - h.r.left < 60);
    if (t) { tiles++; if (stdIcon(t.el)) stdTiles++; let p = t.el.parentElement; while (p && p !== root) { if (cardSet.has(p)) { cardTiles++; break; } p = p.parentElement; } }
  }
  // Card grid (for C8 and D3)
  const parents = new Map(); cards.forEach(c => { const p = c.el.parentElement; if (!p) return; if (!parents.has(p)) parents.set(p, []); parents.get(p).push(c); });
  let grids = 0; parents.forEach(list => { if (list.length < 3) return; const w0 = list[0].r.width; if (list.filter(c => Math.abs(c.r.width - w0) <= 4).length >= 3) grids++; });
  put('C8', 'Icon tile above heading', `${tiles}${tiles ? ` (standard set ${stdTiles}, in cards ${cardTiles})` : ''}`, tiles >= 3 && stdTiles >= 3 ? 'red' : tiles >= 1 ? 'yellow' : 'ok', tiles ? 'Own icons are brand; red only from 3 with a standard set (Lucide, Heroicons, Font Awesome and others); in a card grid the cluster Card kit counts.' : '');
  // Emoji as icons: flags, globes, color circles and squares excluded
  const EXCL = /[\u{1F1E6}-\u{1F1FF}\u{1F310}\u{1F30D}-\u{1F30F}\u{1F534}\u{1F535}\u{1F7E0}-\u{1F7EB}\u{26AA}\u{26AB}\u{2B24}\u{1F3F3}\u{1F3F4}\u{E0020}-\u{E007F}\u{200D}]/gu;
  const EMO = /\p{Emoji_Presentation}|\p{Extended_Pictographic}️/u;
  const emojiUI = texts.filter(x => EMO.test(x.t.replace(EXCL, '')) && x.el.closest('nav,button,a,h1,h2,h3,h4,li')).length;
  put('C9', 'Emoji as icons', `${emojiUI}`, emojiUI >= 3 ? 'red' : emojiUI >= 1 ? 'yellow' : 'ok', emojiUI ? 'Flags, globes and color dots do not count.' : '');
  const lucide = root.querySelectorAll('svg.lucide, svg[class*="lucide"]').length;
  const imgs = info.filter(x => /^(img|picture|video|canvas)$/.test(x.el.tagName.toLowerCase()) && x.r.width * x.r.height > 10000).length;
  put('C10', 'One icon set as imagery', `${lucide} Lucide icons, ${imgs} images`, lucide >= 10 && lucide > imgs ? 'red' : lucide >= 1 ? 'yellow' : 'ok', lucide ? 'Red from 10 Lucide icons when icons instead of images carry the imagery.' : '');
  const decoGrid = info.filter(x => /repeating-(linear|radial)-gradient/.test(x.cs.backgroundImage) || (/linear-gradient/.test(x.cs.backgroundImage) && /\d+px \d+px/.test(x.cs.backgroundSize) && parseFloat(x.cs.backgroundSize) <= 80)).length;
  put('C11', 'Decorative background grid', `${decoGrid}`, decoGrid >= 1 ? 'yellow' : 'ok', decoGrid ? 'Visual check: a map, plan or measurement reference?' : '');
  const bigSvg = info.filter(x => x.el.tagName.toLowerCase() === 'svg' && inFold(x.r) && x.r.width * x.r.height > 60000).map(x => x.el.querySelectorAll('path,circle,rect,ellipse,polygon,line').length);
  put('C12', 'Shape illustration in the hero', `${bigSvg.length} large SVG${bigSvg.length ? ' (' + bigSvg.join(', ') + ' primitives)' : ''}`, bigSvg.some(k => k >= 25) ? 'yellow' : 'ok', 'Visual check: an illustration built from basic shapes quickly looks generic.');
  const hard = info.filter(x => x.cs.boxShadow !== 'none' && x.cs.boxShadow.split(/,(?![^(]*\))/).some(p => { const nums = (p.replace(/rgba?\([^)]+\)/, '').match(/-?\d+(\.\d+)?px/g) || []).map(parseFloat); return nums.length >= 3 && nums[2] === 0 && (Math.abs(nums[0]) >= 2 || Math.abs(nums[1]) >= 2); })).length;
  put('C13', 'Hard offset shadows', `${hard}`, hard >= 6 ? 'red' : hard >= 1 ? 'yellow' : 'ok', hard ? 'Ok when brutalism is chosen deliberately (--intentional C13).' : '');
  // C14 Effect load without imagery (candidate K2): gradients, soft glows from 40 px, blurs, with an image area under 10%
  const effGrad = info.filter(x => /gradient/.test(x.cs.backgroundImage)).length;
  const effGlow = info.filter(x => { const m = x.cs.boxShadow !== 'none' && x.cs.boxShadow.match(/(-?\d+(?:\.\d+)?)px\s+(-?\d+(?:\.\d+)?)px\s+(\d+(?:\.\d+)?)px/); return m && parseFloat(m[3]) >= 40; }).length;
  const effBlur = info.filter(x => /blur\(/.test(x.cs.filter || '') || /blur\(/.test(x.cs.backdropFilter || x.cs.webkitBackdropFilter || '')).length;
  const effSum = effGrad + effGlow + effBlur;
  put('C14', 'Effect load without imagery', `${effSum} effects (${effGrad} gradients, ${effGlow} glows, ${effBlur} blurs), image area ${(cfg.foldImage * 100).toFixed(0)}%`, effSum >= 20 && cfg.foldImage < 0.1 && cfg.medium !== 'ui' ? 'yellow' : 'ok', effSum >= 20 && cfg.foldImage < 0.1 ? 'Visual check: do WebGL, video or product UI carry the image? Otherwise remove the effects or bind them to meaning.' : '');

  // Product interfaces built in HTML (UI mockups) count as an anchor
  const mockEls = info.filter(x => inFold(x.r) && x.r.width * x.r.height >= vpA * 0.08 && x.r.width * x.r.height <= vpA * 0.85 && ((rgb(x.cs.backgroundColor)?.a > 0.05) || parseFloat(x.cs.borderTopWidth) > 0 || x.cs.boxShadow !== 'none') && texts.filter(t => x.el.contains(t.el)).length >= 10).map(x => x.el).filter((e, i, arr) => !arr.some((o, j) => j !== i && o.contains(e)));
  const mockArea = Math.min(1, mockEls.reduce((s2, e) => { const r = e.getBoundingClientRect(); return s2 + r.width * Math.min(r.height, foldH); }, 0) / vpA);
  const anchorShare = Math.max(cfg.foldImage, mockArea);
  // D Layout
  const foldTexts = texts.filter(x => inFold(x.r));
  const foldChars = foldTexts.reduce((s, x) => s + x.chars, 0) || 1;
  const centered = foldTexts.filter(x => x.cs.textAlign === 'center').reduce((s, x) => s + x.chars, 0) / foldChars;
  const h1Centered = h1 && getComputedStyle(h1.el).textAlign === 'center';
  let buttons = 0;
  for (const x of info) { const tag = x.el.tagName.toLowerCase(); const bg = rgb(x.cs.backgroundColor); const bd = parseFloat(x.cs.borderTopWidth) > 0; const t = (x.el.innerText || '').trim(); if ((tag === 'button' || tag === 'a') && ((bg && bg.a > 0.05) || bd) && x.r.height >= 28 && x.r.height <= 72 && x.r.width <= 420 && t.length > 0 && t.length <= 40 && inFold(x.r) && !x.el.closest('nav,header')) buttons++; }
  if (cfg.medium === 'web') {
    put('D1', 'Centered hero', `centered ${(centered * 100).toFixed(0)}%${h1Centered ? ', H1 centered' : ''}`, centered >= 0.6 || (centered >= 0.4 && h1Centered) ? 'yellow' : 'ok', 'Red only in the cluster Stock hero.');
    put('D2', 'Two-button hero', `${buttons} buttons in the first screen (without navigation)`, buttons === 2 ? 'yellow' : 'ok', buttons === 2 ? 'Red only in the cluster Stock hero.' : '');
  }
  put('D3', 'Card grid as structure', `${grids}`, grids >= 3 || (grids >= 2 && tiles >= 2) ? 'red' : grids >= 1 ? 'yellow' : 'ok');
  // Stat banner. Scale and step rows do not count: same prefix and unit, and left to right an arithmetic progression
  // with a constant nonzero step (1 2 3 4 5, 01 02 03, 2024 2025 2026, 0% 25% 50% 75% 100%); KPI rows mix units or steps.
  // With a unit or sign a row needs 4 items or a 0 at either end, so that even KPI rows (+10% +20% +30%, 2x 3x 4x) still
  // count; an axis may carry its unit on one end item only (0 25 50 75 100%) or leave a 0 bare (0 1k 2k 3k)
  const numRe = /^(?=.*\d)[~+<>≈]?\s?[\d.,]+\s?(%|x|×|\+|k|K|M|Mio\.?|Mrd\.?|€|\$|h|s|ms|min)?\+?$/; // lang:de
  const stats = texts.filter(x => x.size >= 22 && x.chars <= 10 && numRe.test(x.t));
  // Number value: both separators, the last is the decimal; one separator before exactly 3 digits or repeated, thousands
  // (dec: a single separator is always the decimal, for axes such as 0.000 0.250 0.500; a row counts as a scale in either reading)
  const numVal = (s, dec) => { const seps = s.match(/[.,]/g) || []; let v = s; if (new Set(seps).size === 2) { const d = s[Math.max(s.lastIndexOf('.'), s.lastIndexOf(','))]; v = s.split(d === '.' ? ',' : '.').join('').replace(d, '.'); } else if (seps.length > 1 || (!dec && /^[1-9]\d{0,2}[.,]\d{3}$/.test(s))) v = s.replace(/[.,]/g, ''); else v = s.replace(',', '.'); const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
  const numOf = (t, dec) => { const m = t.match(/^([~+<>≈]?)\s?([\d.,]+)\s?(.*)$/); const v = m ? numVal(m[2], dec) : null; return v === null ? null : { v, unit: m[1] + '|' + m[3].toLowerCase() }; };
  const isScaleAs = (row, dec) => {
    const p = row.slice().sort((a, b) => a.r.left - b.r.left).map(o => numOf(o.t, dec)); if (p.some(q => !q)) return false;
    const units = new Set(p.filter(q => q.unit !== '|').map(q => q.unit)), bare = p.filter(q => q.unit === '|');
    if (units.size > 1 || (units.size && bare.length && !bare.every(q => q.v === 0) && !(p.length - bare.length === 1 && (p[0].unit !== '|' || p[p.length - 1].unit !== '|')))) return false;
    if (units.size && p.length < 4 && p[0].v !== 0 && p[p.length - 1].v !== 0) return false;
    const d = p[1].v - p[0].v; return d !== 0 && p.every((q, i) => !i || Math.abs(q.v - p[i - 1].v - d) <= Math.abs(d) * 1e-6);
  };
  const isScale = row => isScaleAs(row, false) || isScaleAs(row, true);
  let statRows = 0, scaleRows = 0, statInFold = false; const usedS = new Set();
  for (const s of stats) { if (usedS.has(s)) continue; const row = stats.filter(o => Math.abs(o.r.top - s.r.top) < 12); if (row.length >= 3 && row.length <= 6) { row.forEach(o => usedS.add(o)); if (isScale(row)) { scaleRows++; continue; } statRows++; if (inFold(s.r)) statInFold = true; } }
  put('D4', 'Stat banner', `${statRows} rows${scaleRows ? ` (${scaleRows} scale or step rows not counted)` : ''}${statInFold ? ', at least one in the first screen' : ''}`, statInFold && (anchorShare < 0.1) ? 'red' : statRows >= 1 ? 'yellow' : 'ok', statRows ? 'Every number needs a reference value and a period, third-party numbers a collected source.' : '');
  // Uniform sections (web only)
  if (cfg.medium === 'web') {
    const secs = Array.from(document.querySelectorAll('main > section, body > section, main > div > section, [class*="section"]')).filter(s => { const r = s.getBoundingClientRect(); return r.height > 250 && r.width > W * 0.6; });
    const uniq = []; secs.forEach(s => { if (!uniq.some(u => u.contains(s) || s.contains(u))) uniq.push(s); });
    const sig = uniq.map(s => { const h = s.querySelector('h2,h3'); const al = h ? getComputedStyle(h).textAlign : '-'; const hasImg = !!s.querySelector('img,picture,video,canvas'); const cols = (() => { let best = 1; s.querySelectorAll('div,ul').forEach(d => { const ch = Array.from(d.children).filter(c => c.getBoundingClientRect().width > 120); const tops = ch.map(c => Math.round(c.getBoundingClientRect().top / 20)); const same = tops.filter(t => t === tops[0]).length; if (same > best && same <= 6) best = same; }); return best; })(); return `${al}|${cols}|${hasImg}`; });
    const cnt = {}; sig.forEach(s => cnt[s] = (cnt[s] || 0) + 1);
    const top = Math.max(0, ...Object.values(cnt)) / (sig.length || 1);
    let run = 1, maxRun = sig.length ? 1 : 0; for (let i = 1; i < sig.length; i++) { run = sig[i] === sig[i - 1] ? run + 1 : 1; maxRun = Math.max(maxRun, run); }
    put('D5', 'Uniform sections', `${sig.length} sections, most frequent pattern ${(top * 100).toFixed(0)}%, longest identical run ${maxRun}`, sig.length >= 3 && (top >= 0.5 || maxRun >= 2) ? 'yellow' : 'ok', 'Repetition with content is a principle; visual check.');
  }
  // Spacing monotony
  const sp = {}; let spN = 0;
  for (const x of info) for (const p of ['paddingTop', 'paddingLeft', 'marginBottom', 'rowGap', 'columnGap']) { const v = parseFloat(x.cs[p]); if (v >= 8) { const k = Math.round(v / 4) * 4; sp[k] = (sp[k] || 0) + 1; spN++; } }
  const spVals = Object.entries(sp).sort((a, b) => b[1] - a[1]);
  const spDom = spN ? spVals[0][1] / spN : 0;
  put('D6', 'Monotonous spacing', `${spVals.length} spacing values, most frequent ${spVals[0] ? spVals[0][0] : '-'} px (${(spDom * 100).toFixed(0)}%)`, spN >= 10 && spDom > 0.6 && spVals.length <= 3 ? 'red' : spDom > 0.5 ? 'yellow' : 'ok');
  put('D7', 'No image anchor in the first screen', `image area ${(cfg.foldImage * 100).toFixed(0)}%, UI mockup ${(mockArea * 100).toFixed(0)}%, large SVG ${bigSvg.length}`, anchorShare < 0.25 ? 'yellow' : 'ok', anchorShare < 0.25 ? 'Visual check: WebGL, video, CSS visuals or a typographic statement do not count here.' : '');
  const foldWords = foldTexts.filter(x => x.size >= body - 0.5 && !(mockEls.some(m => m.contains(x.el)))).reduce((s, x) => s + x.words, 0);
  const wl = { web: [100, Infinity], ui: [400, Infinity], document: [700, Infinity], slide: [50, 80], social: [20, 60] }[cfg.medium] || [100, Infinity];
  put('D8', 'Text load in the first screen', `${foldWords} words`, foldWords > wl[1] ? 'red' : foldWords > wl[0] ? 'yellow' : 'ok', foldWords > wl[0] && (cfg.medium === 'web' || cfg.medium === 'ui') ? 'Check consent, menus, marquees and hidden slides.' : '');
  if (cfg.medium === 'web') {
    const txt = allText.toLowerCase();
    const has = { logos: info.some(x => { const imgsRow = Array.from(x.el.children).filter(c => /img|svg/i.test(c.tagName) || c.querySelector?.('img,svg')); return imgsRow.length >= 5 && x.r.height < 160; }), features: grids >= 1, testimonials: !!root.querySelector('blockquote') || /„[^“]{20,}“|"[^"]{20,}"/.test(allText), pricing: /(\/\s?(monat|month|mo)\b|pro monat|per month)/i.test(txt), faq: /\bfaq\b|häufige fragen|frequently asked/i.test(txt) || !!root.querySelector('details') }; // lang:de
    const k = Object.values(has).filter(Boolean).length;
    put('D9', 'Template section sequence', `${k} of 5 template blocks (${Object.entries(has).filter(([, v]) => v).map(([nm]) => nm).join(', ') || 'none'})`, k >= 5 ? 'red' : k >= 4 ? 'yellow' : 'ok');
  }
  let loops = 0; try { loops = document.getAnimations().filter(a => a.effect && a.effect.getTiming && a.effect.getTiming().iterations === Infinity).length; } catch (e) {}
  const transAll = info.filter(x => /(^|,\s*)all\b/.test(x.cs.transitionProperty) && parseFloat(x.cs.transitionDuration) > 0).length;
  put('D10', 'Decorative perpetual animation', `${loops} infinite animations, ${transAll} "transition: all"`, (loops >= 1 || transAll >= 5) ? 'yellow' : 'ok', loops ? 'Visual check: marquee, pulsing dots, cursor as decoration?' : '');

  // E Copy. Word lists by language (cfg.words): a text node uses the list of its language key, text without lang or in a
  // language without a key ('*') uses all lists, as before the split. Counting over all words of the page as before.
  const WL = cfg.words, GA = cfg.gapAny, LANGS = Object.keys(WL);
  const keyOf = x => LANGS.includes(x.lang) ? x.lang : '*';
  const langsOf = k => LANGS.includes(k) ? [k] : LANGS;
  const groups = {}; texts.forEach(x => { (groups[keyOf(x)] ||= []).push(x.t); });
  const groupText = Object.entries(groups).map(([k, v]) => [k, v.join(' ')]);
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const buzzRe = Object.fromEntries(LANGS.map(l => [l, new RegExp(`(?<![\\p{L}\\p{N}_])(?:${WL[l].buzz.join('|')})(?![\\p{L}\\p{N}_])`, 'giu')]));
  let buzz = 0;
  for (const [k, t] of groupText) for (const l of langsOf(k)) buzz += (t.match(buzzRe[l]) || []).length;
  const buzzRate = buzz / totalWords * 1000;
  put('E1', 'Marketing buzzwords', `${buzz} (${buzzRate.toFixed(1)} per 1,000 words)`, buzzRate >= 3 && buzz >= 3 ? 'red' : buzz >= 1 ? 'yellow' : 'ok');
  // Dashes: dashes between digits or between a letter and a digit (model numbers, ranges) do not count
  let dashes = 0;
  for (const x of texts) { const t = x.t; for (let i = 0; i < t.length; i++) { const ch = t[i]; if (ch !== '\u2014' && ch !== '\u2013') continue; const a = t[i - 1] || ' ', b = t[i + 1] || ' '; const model = (/\d/.test(a) && /\d/.test(b)) || (/\p{L}/u.test(a) && /\d/.test(b)) || (/\d/.test(a) && /\p{L}/u.test(b)); if (!model) dashes++; } }
  const dashPer500 = dashes / Math.max(1, allText.length) * 500;
  put('E2', 'Dash cadence', `${dashes} (${dashPer500.toFixed(2)} per 500 characters)`, dashes >= 8 && dashPer500 >= 1 ? 'red' : dashes >= 1 ? 'yellow' : 'ok', dashes ? 'Single dash allowed when deliberate (for example English typography); only the accumulated cadence is red. User rules apply separately.' : '');
  const negRe = Object.fromEntries(LANGS.map(l => [l, new RegExp(`\\b(${WL[l].negation.join('|')})\\s+\\S+\\.$`, 'i')]));
  const aph = texts.filter(x => langsOf(keyOf(x)).some(l => negRe[l].test(x.t)) && x.words <= 8).length + groupText.reduce((s2, [k, t]) => s2 + langsOf(k).filter(l => WL[l].negationPair).reduce((s3, l) => s3 + (t.match(new RegExp(WL[l].negationPair, 'gu')) || []).length, 0), 0);
  put('E3', 'Aphoristic cadence', `${aph}`, aph >= 3 ? 'red' : aph >= 2 ? 'yellow' : 'ok');
  const chrome = (allText.match(/ · /g) || []).length + texts.filter(x => /→|->/.test(x.t) && x.el.closest('a,button')).length;
  put('E4', 'Template chrome in text', `${chrome} (middle dots, arrows on links)`, chrome >= 1 ? 'yellow' : 'ok');
  const phNames = allText.match(new RegExp(`\\b(${LANGS.flatMap(l => WL[l].placeholders).join('|')})\\b`, 'gi')) || [];
  const phNums = allText.match(/(?<![\w.,])(99[.,]9\s?%|10\s?[x×](?!\w)|\d{1,3}[.,]000\s?\+|\d+\s?[KkM]\+)/g) || [];
  put('E5', 'Placeholder identities and fantasy numbers', `${phNames.length} placeholder names${phNames.length ? ' (' + [...new Set(phNames.map(s => s.toLowerCase()))].slice(0, 3).join(', ') + ')' : ''}, ${phNums.length} round numbers${phNums.length ? ' (' + [...new Set(phNums)].slice(0, 3).join(', ') + ')' : ''}`, phNames.length ? 'red' : phNums.length ? 'yellow' : 'ok', phNums.length && !phNames.length ? 'Round numbers only with a source, reference value and period.' : '');
  // E6: own markers first, on every page regardless of lang, then removed from the text so that a marker counts once
  const MARK = new RegExp(GA.markers, 'gi');
  const markers = allText.match(MARK) || [];
  const gapRe = ls => {
    const br = GA.brackets.concat(...ls.map(l => WL[l].gapBrackets || [])).map(esc).join('|');
    const parts = [':\\s*_{3,}', `\\[[^\\]]{0,30}\\b(?:${br})\\b[^\\]]{0,30}\\]`];
    for (const l of ls) {
      const cw = WL[l].gapColonWords || []; if (cw.length) parts.push(`\\b(?:${cw.map(esc).join('|')}):`);
      for (const p of WL[l].gapPhrases || []) parts.push(`\\b${esc(p)}\\b`);
    }
    return new RegExp(parts.join('|'), 'gi');
  };
  const upperRe = ls => new RegExp(`\\b(?:${GA.upper.concat(...ls.map(l => WL[l].gapUpper || [])).map(esc).join('|')})\\b`, 'g');
  let blanks = [];
  for (const [k, t] of groupText) { const s = t.replace(MARK, ' '); blanks = blanks.concat(s.match(gapRe(langsOf(k))) || [], s.match(upperRe(langsOf(k))) || []); }
  // Phrases that count only alone in an element or after a colon (list currently empty)
  for (const x of texts) { const tt = x.t.replace(MARK, ' ').trim(); for (const l of langsOf(keyOf(x))) for (const p of WL[l].gapColonOrAlone || []) { const hits = (tt.match(new RegExp(`:\\s*${esc(p)}\\b`, 'gi')) || []).length + (new RegExp(`^${esc(p)}[.!\\u2026]*$`, 'i').test(tt) ? 1 : 0); for (let i = 0; i < hits; i++) blanks.push(p); } }
  blanks = markers.concat(blanks);
  // empty line elements (underscore as a frame), as in "Source: <span class=gap>"
  const blankEls = Array.from(root.querySelectorAll('span,i,em,u,ins,b,mark,abbr')).filter(e => {
    if (e.textContent.trim() || e.children.length) return false;
    const c = getComputedStyle(e), r = e.getBoundingClientRect();
    if (!(r.width >= 16 && r.height > 0 && r.height <= 48 && c.visibility !== 'hidden' && c.display !== 'none')) return false;
    const named = /offen|lücke|luecke|placeholder|platzhalter/i.test((e.getAttribute('aria-label') || '') + ' ' + (e.getAttribute('class') || '')); // lang:de
    const line = (parseFloat(c.borderBottomWidth) > 0 && c.borderBottomStyle !== 'none') || /underline/.test(c.textDecorationLine);
    const prev = e.previousSibling ? (e.previousSibling.textContent || '') : '';
    return named || (line && /:\s*$/.test(prev));
  }).length;
  const nBlank = blanks.length + blankEls;
  const shortEx = s => s.length > 40 ? s.slice(0, 39) + '\u2026' : s;
  put('E6', 'Gap markers in the presentation view', `${nBlank}${blanks.length ? ' (' + [...new Set(blanks.map(shortEx))].slice(0, 3).join(', ') + ')' : ''}${markers.length ? `, of which ${markers.length} own markers` : ''}${blankEls ? `, of which ${blankEls} empty lines` : ''}`, nBlank >= 2 ? 'red' : nBlank ? 'yellow' : 'ok', nBlank ? 'Drop the secondary detail or phrase it with what is known. Exceptions (--intentional E6) only: a mandatory line in the place of the real medium whose trigger is in the medium, or a field in final form of a decision-critical section; never for labels such as "to be added" (then a field in final form or the review view). Never delete the section.' : '');

  // H Craft (separate gate, not in the index)
  const docW = document.documentElement.scrollWidth;
  if (!scope) put('H1', 'Horizontal overflow', `page width ${docW} px at ${window.innerWidth} px viewport`, docW > window.innerWidth + 2 ? 'red' : 'ok');
  let midBreaks = 0; const brokenWords = [];
  for (const x of texts.filter(t => t.size >= 22 && t.chars > 3)) {
    if (x.cs.hyphens === 'auto') continue;
    const node = Array.from(x.el.childNodes).find(c => c.nodeType === 3 && c.textContent.includes(x.t.split(' ')[0]));
    if (!node) continue;
    const txt = node.textContent; let i = 0;
    for (const w of txt.split(/(\s+)/)) {
      if (w.trim().length >= 6 && !/[-­\/‐‑]/.test(w)) { const r = document.createRange(); r.setStart(node, i); r.setEnd(node, i + w.length); const rects = Array.from(r.getClientRects()).filter(q => q.width > 1); if (rects.length > 1 && Math.abs(rects[0].top - rects[rects.length - 1].top) > 4) { midBreaks++; if (brokenWords.length < 3) brokenWords.push(w.trim()); } }
      i += w.length;
    }
  }
  const langAttr = document.documentElement.getAttribute('lang') || '';
  put('H2', 'Word break without hyphen', `${midBreaks}${brokenWords.length ? ' (' + brokenWords.join(', ') + ')' : ''}; lang="${langAttr}"`, midBreaks >= 1 ? 'red' : 'ok', midBreaks ? 'Set lang to the output language and hyphens: auto where the language needs it, or rephrase; never break-all.' : '');
  const btnRad = new Set();
  for (const x of info) { const tag = x.el.tagName.toLowerCase(); const bg = rgb(x.cs.backgroundColor); const t = (x.el.innerText || '').trim(); if ((tag === 'button' || tag === 'a') && ((bg && bg.a > 0.05) || parseFloat(x.cs.borderTopWidth) > 0) && x.r.height >= 28 && x.r.height <= 72 && t.length > 0 && t.length <= 40 && !x.el.closest('nav,header')) { const rr = parseFloat(x.cs.borderTopLeftRadius) || 0; btnRad.add(rr >= x.r.height / 2 - 1 ? 'pill' : String(Math.round(rr))); } }
  put('H3', 'Mixed button radii', `${btnRad.size} variants (${[...btnRad].join(', ') || '-'})`, btnRad.size >= 3 ? 'yellow' : 'ok');
  // Minimum type size (decision E4). Slide: at 1080 px height, social: at 1080 px width, document: 7 pt footnotes = 9.33 px
  // Slides (talk and reading): height and sizes in the stage's own layout px (offsetHeight, for an SVG stage its viewBox),
  // so that a stage scaled by transform or zoom (a viewer fitting 1920 x 1080 to the window) counts at its design size;
  // SVG text in user units is converted with its screen scale (viewBox, rotation), also without --selector
  const talk = cfg.medium === 'slide' && cfg.deck === 'talk';
  const slideM = cfg.medium === 'slide';
  const designH = !scope ? 0 : root instanceof SVGSVGElement ? (root.viewBox && root.viewBox.baseVal && root.viewBox.baseVal.height) || (root.height && root.height.baseVal.value) || 0 : root.offsetHeight || 0;
  const stageBasis = slideM && scope && designH > 0;
  const SH = scope ? (stageBasis ? designH : rootRect.height) : 1080;
  const kStage = stageBasis ? rootRect.height / designH : 1;
  const sz = x => { if (!slideM) return x.size; const g = x.el instanceof SVGGraphicsElement ? x.el : x.el.closest('foreignObject'); const m = g && g.getScreenCTM ? g.getScreenCTM() : null; return m ? x.size * Math.hypot(m.a, m.b) / kStage : x.size; };
  const minPx = { slide: 18 * SH / 1080, social: 24 * W / 1080, web: 12, ui: 12, document: 9.33 }[cfg.medium] || 12;
  const bodyMin = { slide: (cfg.deck === 'talk' ? 40 : 22) * SH / 1080, web: 16, document: 12 }[cfg.medium];
  const inMock = x => cfg.medium === 'web' && mockEls.some(m => m.contains(x.el));
  const contrastOf = x => { const fg = rgb(x.cs.color); if (!fg) return 21; const st = document.elementsFromPoint(Math.max(0, x.r.left + 2), Math.max(0, x.r.top + x.r.height / 2)) || []; let bg = pageBg; for (const e of st) { const c = rgb(getComputedStyle(e).backgroundColor); if (c && c.a > 0.9) { bg = c; break; } } const a = lum(fg), b = lum(bg); return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); };
  const tinyList = texts.filter(x => sz(x) < minPx - 0.5 && x.chars >= 8 && !inMock(x) && (scope || inFold(x.r)) && !(cfg.medium === 'web' && x.size >= 10.5 && x.chars <= 30 && contrastOf(x) >= 4.5));
  const tiny = tinyList.length;
  const smallInputs = window.innerWidth < 600 && (cfg.medium === 'ui' || cfg.medium === 'web') ? info.filter(x => /^(input|textarea|select)$/i.test(x.el.tagName) && parseFloat(x.cs.fontSize) < 16).length : 0;
  // Talk gate (slide with --deck talk): every content text needs bodyMin, not only the most frequent size. Sources,
  // labels, captions and page numbers may be small down to minPx when marked: the node's element or an ancestor inside
  // the surface has a class token source, label, caption, footnote, credit or src, a data-role source or label, or is
  // figcaption, cite, small, or a sup footnote marker (up to 3 characters, or digits and marks). A content text is a
  // block: the nearest element that is neither inline nor an undecorated inline-block or inline-flex wrapper (an SVG
  // text element), so that inline markup, word-by-word builds and line breaks do not split a sentence, while chips,
  // badges and buttons (background, border, padding, or a, button, label) stay blocks of their own; its small content
  // nodes add up their words, and only words with letters or digits count ("3 / 12" has 2). Content below bodyMin from
  // 3 words is red, with 1 or 2 words yellow; text without letters or digits (bullets, separators) and visually hidden
  // text (screen-reader only: a clipping box with one side of at most 1 px, positioned absolute or fixed, or the text's
  // own element) is no content. The body size for the target is the most frequent size of the content, without sources
  // and labels.
  const ASIDE = ['source', 'label', 'caption', 'footnote', 'credit', 'src'];
  const isAside = x => { for (let e = x.el; e && e !== root; e = e.parentElement) if (/^(figcaption|cite|small)$/i.test(e.tagName) || (/^sup$/i.test(e.tagName) && (x.t.length <= 3 || /^[\d*†‡§,\s-]+$/.test(x.t))) || Array.from(e.classList || []).some(c => ASIDE.includes(c.toLowerCase())) || /^(source|label)$/i.test(e.getAttribute('data-role') || '')) return true; return false; };
  const plainBox = (e, c) => !/^(a|button|input|select|textarea|label)$/i.test(e.tagName) && c.backgroundImage === 'none' && !((rgb(c.backgroundColor) || { a: 0 }).a > 0.05) && ['Top', 'Right', 'Bottom', 'Left'].every(k => !parseFloat(c['padding' + k]) && !parseFloat(c['border' + k + 'Width']));
  const blockOf = el => { if (el instanceof SVGElement) return el.closest('text') || el; let e = el; while (e !== root && e.parentElement && !(e.parentElement instanceof SVGElement)) { const c = getComputedStyle(e); if (!(/^(inline|contents)$/.test(c.display) || (/^inline-(block|flex)$/.test(c.display) && plainBox(e, c)))) break; e = e.parentElement; } return e; };
  const wordsOf = t => t.split(' ').filter(w => /[\p{L}\p{N}]/u.test(w)).length;
  const srOnly = x => { for (let e = x.el; e && e !== root; e = e.parentElement) { const r = e.getBoundingClientRect(); const c = getComputedStyle(e); if ((r.width <= 1 || r.height <= 1) && c.overflow !== 'visible' && (/^(absolute|fixed)$/.test(c.position) || e === x.el)) return true; } return false; };
  const talkTexts = talk ? texts.filter(x => (scope || inFold(x.r)) && /[\p{L}\p{N}]/u.test(x.t) && !srOnly(x)) : [];
  const content = talkTexts.filter(x => !isAside(x));
  // exempt: marked texts between minPx and bodyMin (below minPx the tiny rule still counts them)
  const asides = new Set(talkTexts.filter(x => sz(x) < bodyMin - 0.5 && sz(x) >= minPx - 0.5 && isAside(x)).map(x => blockOf(x.el))).size;
  const cBySize = {}; content.forEach(x => { const k = Math.round(sz(x)); cBySize[k] = (cBySize[k] || 0) + x.chars; });
  const cBody = +Object.entries(cBySize).sort((a, b) => b[1] - a[1])[0]?.[0] || 0;
  const blocks = new Map();
  for (const x of content.filter(x => sz(x) < bodyMin - 0.5)) { const b = blockOf(x.el); const g = blocks.get(b) || { size: Infinity, words: 0, t: [] }; g.size = Math.min(g.size, sz(x)); g.words += wordsOf(x.t); g.t.push(x.t); blocks.set(b, g); }
  const smallContent = [...blocks.values()].map(g => ({ size: g.size, words: g.words, t: g.t.join(' ') })).sort((a, b) => a.size - b.size || b.words - a.words);
  const smallLong = smallContent.filter(x => x.words >= 3).length, smallShort = smallContent.length - smallLong;
  // Named offender: the smallest text from 3 words (the one that makes it red), else the smallest short one
  const worst = smallContent.find(x => x.words >= 3) || smallContent[0];
  // slides: the body size in stage px as well (SVG text at its rendered size)
  const sBySize = {}; if (slideM) texts.forEach(x => { const k = Math.round(sz(x)); sBySize[k] = (sBySize[k] || 0) + x.chars; });
  const sBody = slideM ? +Object.entries(sBySize).sort((a, b) => b[1] - a[1])[0]?.[0] || body : body;
  const bodyLow = bodyMin && (talk ? cBody > 0 && cBody < bodyMin - 0.5 : sBody < bodyMin - 0.5);
  const bodyVal = talk ? (cBody ? `content body ${cBody} px` : 'no content text') : `body ${sBody} px`;
  const talkVal = talk ? `; talk: ${smallContent.length} content texts under ${Math.round(bodyMin)} px (${smallLong} from 3 words, ${smallShort} with 1 or 2)${worst ? `, smallest ${Math.round(worst.size)} px "${shortEx(worst.t)}"` : ''}, ${asides} source or label texts exempt` : '';
  const h4Red = cfg.medium !== 'social' && (tiny >= 3 || smallInputs >= 1 || smallLong >= 1);
  put('H4', 'Type too small for the medium', `${tiny} text nodes under ${minPx.toFixed(0)} px${smallInputs ? `, ${smallInputs} input fields under 16 px` : ''}; ${bodyVal}${bodyMin ? ` (target from ${Math.round(bodyMin)} px)` : ''}${talkVal}`, h4Red ? 'red' : (tiny >= 1 || bodyLow || smallShort >= 1) ? 'yellow' : 'ok', cfg.medium === 'web' ? 'Function layer without reading duty allowed from 11 px at 4.5:1.' : cfg.medium === 'social' ? 'Second reading level under 24 px only yellow.' : smallContent.length ? `Talk deck: enlarge content to ${Math.round(bodyMin)} px, or mark real sources and labels with class source or label (allowed from ${Math.round(minPx)} px).` : '');
  // Background at the point behind the text (also catches separate background layers)
  const bgAt = x => {
    const cx = x.r.left + Math.min(x.r.width, 40) / 2, cy = x.r.top + x.r.height / 2;
    if (cx < 0 || cy < 0 || cx > window.innerWidth || cy > window.innerHeight) return null;
    const stack = document.elementsFromPoint(cx, cy) || [];
    for (const e of stack) {
      const c2 = getComputedStyle(e);
      if (/url\(|gradient/.test(c2.backgroundImage) || /^(img|video|canvas|picture|svg)$/i.test(e.tagName)) return 'image';
      const c = rgb(c2.backgroundColor); if (c && c.a > 0.9) return c;
    }
    return pageBg;
  };
  const visibleTexts = texts.filter(t => !inMock(t) && t.r.top >= 0 && t.r.bottom <= window.innerHeight);
  let lowC = 0, checkedC = 0;
  for (const x of visibleTexts.slice(0, 400)) { const fg = rgb(x.cs.color); if (!fg || fg.a < 0.5) continue; const bg = bgAt(x); if (!bg || bg === 'image') continue; checkedC++; const L1v = lum(fg), L2v = lum(bg); const ratio = (Math.max(L1v, L2v) + 0.05) / (Math.min(L1v, L2v) + 0.05); const big = x.size >= 24 || (x.size >= 18.66 && x.weight >= 700); if (ratio < (big ? 3 : 4.5)) lowC++; }
  put('H5', 'Contrast below WCAG AA (visible area)', `${lowC} of ${checkedC} text nodes`, lowC >= 3 ? 'red' : lowC >= 1 ? 'yellow' : 'ok', lowC ? 'Text over images is checked only by looking.' : '');
  const h1El = root.querySelector('h1');
  if (h1El && largest && !h1El.contains(largest.el) && parseFloat(getComputedStyle(h1El).fontSize) < largest.size * 0.8 && cfg.medium === 'web') put('H6', 'Main heading not the largest text', `H1 ${Math.round(parseFloat(getComputedStyle(h1El).fontSize))} px, largest text ${Math.round(largest.size)} px`, 'yellow');
  // P Product UI
  if (cfg.medium === 'ui') {
    const kpi = cards.filter(c => { const ts = texts.filter(t => c.el.contains(t.el)); return ts.some(t => t.size >= body * 1.5 && /\d/.test(t.t)) && ts.some(t => /[+\-−]?\d+[.,]?\d*\s?%/.test(t.t)); });
    const kpiRows = (() => { let best = 0; kpi.forEach(k => { const row = kpi.filter(o => Math.abs(o.r.top - k.r.top) < 8 && Math.abs(o.r.width - k.r.width) < 8); best = Math.max(best, row.length); }); return best; })();
    const boiler = texts.filter(t => /(from|vs\.?|than) (last|previous) (month|week|period)|gegenüber (dem )?vormonat|zum vormonat|seit letztem monat/i.test(t.t)).length; // lang:de
    put('P1', 'Template KPI card row', `${kpiRows} identical KPI cards in a row, ${boiler} template comparison lines`, kpiRows >= 4 && boiler >= 3 ? 'red' : kpiRows >= 3 ? 'yellow' : 'ok', 'A key figure with a reference (target, plan, corridor) and a meaning color instead of a row of trend badges.');
    const rows = Array.from(root.querySelectorAll('tr, [role=row]'));
    const lined = rows.filter(r => { const c = getComputedStyle(r); const td = r.firstElementChild ? getComputedStyle(r.firstElementChild) : c; return parseFloat(c.borderBottomWidth) > 0 || parseFloat(td.borderBottomWidth) > 0; }).length;
    const heights = new Set(rows.map(r => Math.round(r.getBoundingClientRect().height)));
    put('P2', 'Table without density decision', `${rows.length} rows, ${lined} with a line, ${heights.size} row heights`, rows.length > 10 && lined / rows.length > 0.9 && heights.size <= 1 ? 'yellow' : 'ok', 'Space instead of lines between entries, lines only between groups.');
    let uiButtons = 0; for (const x of info) { const tag = x.el.tagName.toLowerCase(); if ((tag === 'button' || x.el.getAttribute('role') === 'button') && inFold(x.r) && x.r.width > 0) uiButtons++; }
    put('P3', 'Too many actions in the first screen', `${uiButtons} buttons`, uiButtons > 14 ? 'yellow' : 'ok', 'One emphasized main action per view.');
    // P4 Template chart palette (candidate K4): shadcn variables --chart-1 to --chart-5 in use unchanged
    const rs = getComputedStyle(document.documentElement);
    const chartVars = [1, 2, 3, 4, 5].filter(i => (rs.getPropertyValue('--chart-' + i) || '').trim()).length;
    const chartSvg = root.querySelectorAll('.recharts-wrapper, [data-chart], svg.recharts-surface').length;
    put('P4', 'Template chart palette', `${chartVars} variables --chart-1 to --chart-5, ${chartSvg} charts`, chartVars >= 5 && chartSvg >= 1 ? 'yellow' : 'ok', chartVars >= 5 && chartSvg >= 1 ? 'Color only what should be seen; color with meaning instead of a series palette.' : '');
  }

  // Vector for sequences
  const mainBg = (() => { let best = null, area = 0; for (const x of info) { const c = rgb(x.cs.backgroundColor); if (c && c.a > 0.9 && x.r.width * x.r.height > area) { area = x.r.width * x.r.height; best = hex(c); } } return best || hex(pageBg); })();
  const vector = [cfg.foldImage === 0 ? 0 : cfg.foldImage < 0.25 ? 1 : 2, centered >= 0.6 ? 2 : centered >= 0.3 ? 1 : 0, Math.min(cards.length, 3), mainBg].join('|');
  const flags = { neon: false, dispLh, dispW, ratio, dispListed, serifDisplayL2: !!serifDisplay && L2.includes(dispFam) && !allowFonts.includes(dispFam), warmAccent, blurs, listShare: shareL1 + shareL2, stackShare: shareL1 + shareL2 + shareDefault, lucide };
  return { tells: S, flags, vector, mainBg, pageBg: hex(pageBg), display: dispFam, body, largest: largest ? Math.round(largest.size) : null, sizes: Object.keys(bySize).map(Number), words: wordCount, lang: langShare, chars: texts.reduce((s, x) => s + x.chars, 0) };
}

async function imageShare(page, scope) {
  return page.evaluate((scope) => {
    const root = scope ? document.querySelectorAll(scope.sel)[scope.idx] : null;
    const rr = root ? root.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
    let hit = 0, n = 0;
    for (let y = 0; y < 24; y++) for (let x = 0; x < 40; x++) {
      const px = rr.left + (x + 0.5) * rr.width / 40, py = rr.top + (y + 0.5) * Math.min(rr.height, window.innerHeight) / 24; n++;
      const st = document.elementsFromPoint(px, py) || [];
      if (st.some(e => /^(img|video|picture|canvas)$/i.test(e.tagName) || /url\(/.test(getComputedStyle(e).backgroundImage))) hit++;
    }
    return hit / n;
  }, scope);
}

// Pixel check through pixels.py with the Python command found once (python.mjs). Never silent: without a result
// it returns the reason, and the report says "pixelCheck": "not run".
let PYTHON;
function pixelCheck(png) {
  if (PYTHON === undefined) PYTHON = findPython();
  if (!PYTHON) return { px: null, reason: 'no Python 3 found (tried PY, ~/.unaverage/venv, python3, python, py -3)' };
  if (!PYTHON.modules) return { px: null, reason: `Python 3 "${PYTHON.label}" found, but without pillow and numpy` };
  try {
    const outp = execFileSync(PYTHON.cmd, [...PYTHON.args, path.join(HERE, 'pixels.py'), 'palette', png], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return { px: JSON.parse(outp), reason: '' };
  } catch (e) {
    const last = String(e.stderr || e.message || e).trim().split('\n').filter(Boolean).pop() || 'unknown error';
    return { px: null, reason: `pixels.py failed with "${PYTHON.label}": ${last}` };
  }
}

function pixelTells(res, px, medium, foldImage) {
  const S = res.tells;
  if (!px) {
    // Without a pixel result these tells are unmeasured, never clean; 'not run' counts neither in the index nor in clusters
    const note = 'Pixel check not run; check on the image.';
    const unmeasured = (id, name) => ({ id, name, value: 'unmeasured', status: 'not run', note });
    if (S.B2) S.B2 = { ...S.B2, status: 'not run', note };
    S.B4 = unmeasured('B4', 'Near-black with one neon');
    S.B5 = unmeasured('B5', 'Permanent dark mode');
    S.B7 = unmeasured('B7', 'Timid palette without imagery');
    if (medium === 'web') S.D11 = unmeasured('D11', 'Emptiness without direction');
    return;
  }
  const sw = px.palette || [];
  const hx = h => { const n = parseInt(h.slice(1), 16); return { r: n >> 16, g: (n >> 8) & 255, b: n & 255 }; };
  const hsl = c => { const r = c.r / 255, g = c.g / 255, b = c.b / 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); const l = (mx + mn) / 2; let h = 0, s = 0; if (mx !== mn) { const d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); if (mx === r) h = ((g - b) / d + (g < b ? 6 : 0)); else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4; h *= 60; } return { h, s, l }; };
  const dark = px.meanLuminance < 0.15;
  const neon = sw.some(s => { const c = hsl(hx(s.color)); return c.s > 0.6 && c.l > 0.35 && ((c.h >= 90 && c.h <= 150) || c.h <= 20); });
  const neonDark = dark && neon && px.saturatedShare >= 0.002 && px.saturatedShare <= 0.05;
  res.flags.neon = neonDark;
  const cyanSw = sw.some(s => { const c = hsl(hx(s.color)); return c.h >= 170 && c.h <= 197 && c.s >= 0.4; });
  S.B4 = { id: 'B4', name: 'Near-black with one neon', value: `luminance ${px.meanLuminance}, saturated ${px.saturatedShare}${neonDark ? ', one neon' : ''}`, status: dark ? 'yellow' : 'ok', note: dark ? 'A dark background needs a reason from the usage scene. Red only in the cluster Neon dark.' : '' };
  S.B5 = { id: 'B5', name: 'Permanent dark mode', value: `luminance ${px.meanLuminance}`, status: px.meanLuminance < 0.2 && (S.A2?.status !== 'ok') ? 'yellow' : 'ok', note: '' };
  if (S.B2) S.B2.status = dark && cyanSw ? 'yellow' : 'ok';
  const timid = [px.colorfulness < 15, px.saturatedShare < 0.01, foldImage < 0.1].filter(Boolean).length;
  S.B7 = { id: 'B7', name: 'Timid palette without imagery', value: `colorfulness ${px.colorfulness}, saturated ${px.saturatedShare}, image area ${(foldImage * 100).toFixed(0)}%`, status: timid >= 2 && medium !== 'ui' && medium !== 'document' ? 'yellow' : 'ok', note: timid >= 2 ? 'Image area does not count WebGL, video and CSS visuals; visual check.' : '' };
  if (medium === 'web') S.D11 = { id: 'D11', name: 'Emptiness without direction', value: `calm area ${(px.calmAreaShare * 100).toFixed(0)}%`, status: px.calmAreaShare > 0.75 ? 'yellow' : 'ok', note: px.calmAreaShare > 0.75 ? 'Visual check: is the emptiness directed (does it lead to an anchor)?' : '' };
}

function applyIntentional(S, ids) {
  for (const id of ids) if (S[id] && S[id].status !== 'ok' && S[id].status !== 'not run') { S[id].note = `Intentional (would be ${S[id].status}). ` + (S[id].note || ''); S[id].status = 'intentional'; }
}

function clusters(S, f) {
  const red = id => S[id] && S[id].status === 'red';
  const any = id => S[id] && (S[id].status === 'yellow' || S[id].status === 'red');
  const out = [];
  if (any('B3') && any('A1') && f.serifDisplayL2 && (any('A3') || f.warmAccent)) out.push('Cream look (cream background, serif display from L2, accent word or warm accent)');
  if (any('B4') && f.neon && any('A5') && red('A4')) out.push('Neon dark (near-black, one neon, mono, eyebrows)');
  if (any('A5') && any('A6') && red('A4')) out.push('Broadsheet (mono labels, numbers, eyebrows)');
  if (any('C6') && any('C8') && any('D3') && (red('C8') || red('D3'))) out.push('Card kit (cards, icon tiles, card grid)');
  if (any('D1') && any('D2') && any('A4')) out.push('Stock hero (centered, two buttons, eyebrow)');
  if (f.blurs >= 3 && S.C4 && S.C4.status !== 'intentional' && (red('C3') || red('B1'))) out.push('Glass look (glass on 3 or more surfaces, colored glow or violet)');
  if (f.stackShare >= 0.5 && f.lucide >= 10 && !(S.A1 && S.A1.status === 'intentional') && !(S.C10 && S.C10.status === 'intentional')) out.push('Template stack (list or default typeface carries the text, 10 or more Lucide icons)');
  if (f.ratio >= 5 && f.dispLh !== null && f.dispLh <= 1.0 && f.dispW >= 700 && f.dispListed && !(S.A1 && S.A1.status === 'intentional')) out.push('Template display (scale from 5, line height up to 1.0, weight from 700, list typeface)');
  return out;
}

function summarize(S, cl, medium) {
  const vals = Object.values(S);
  const reds = vals.filter(s => s.status === 'red' && !s.id.startsWith('H')).map(s => s.id);
  const yellows = vals.filter(s => s.status === 'yellow' && !s.id.startsWith('H')).map(s => s.id);
  const craft = vals.filter(s => s.id.startsWith('H') && s.status === 'red').map(s => s.id);
  const craftYellow = vals.filter(s => s.id.startsWith('H') && s.status === 'yellow').map(s => s.id);
  const intentionalIds = vals.filter(s => s.status === 'intentional').map(s => s.id);
  const index = reds.length + cl.length;
  const verdict = index <= 1 ? 'clean' : index === 2 ? 'borderline' : 'generic';
  const limit = medium === 'ui' ? 1 : 2;
  const gate = index <= limit && cl.length === 0;
  return { index, verdict, reds, yellows, clusters: cl, craft, craftYellow, intentional: intentionalIds, gate, limit };
}

const verdictText = v => v === 'borderline' ? 'borderline, visual check' : v;
const langText = l => Object.entries(l || {}).map(([k, v]) => `${k} ${v}`).join(', ') || 'none';

function toMarkdown(report) {
  const lines = [`# Generic check`, '', `Input: ${report.input}  `, `Medium: ${report.medium}${report.deck ? ', deck ' + report.deck : ''}  `, `Languages (share of text): ${langText(report.lang)}`, ''];
  if (report.blocked) lines.push('**Warning: the page showed a bot-protection, sign-in or error page. The values do not apply to the design; check locally or with another source.**', '');
  else if (report.noSurfaces) lines.push('**Warning: the selector matched no measurable surface. The index is not meaningful; check the selector and the page.**', '');
  else if (report.thin) lines.push(`**Warning: ${report.surfaces ? 'no surface has a word' : `only ${report.words} words`} in the DOM (WebGL, canvas, raster image, loading page or error). The index is not meaningful; check visually on the rendering.**`, '');
  else if (report.thinSurfaces) lines.push(`**Warning: surface(s) ${report.thinSurfaces.join(', ')} without any word in the DOM (raster image or canvas). Their values are not meaningful; check them visually on the rendering.**`, '');
  if (report.pixelCheck === 'not run') lines.push(`**Pixel check not run: ${report.pixelCheckReason}. Tells B2, B4, B5, B7 and D11 are unmeasured: check them on the image and never count them as clean. Install: SKILL.md, Missing tools never fail silently.**`, '');
  const block = (title, r) => {
    const s = r.summary;
    lines.push(`## ${title}`, '', `**Generic index ${s.index}: ${verdictText(s.verdict)}.** Red: ${s.reds.join(', ') || 'none'}. Yellow: ${s.yellows.join(', ') || 'none'}.${s.clusters.length ? ' Clusters: ' + s.clusters.join('; ') + '.' : ''}${s.intentional.length ? ' Intentional (not counted): ' + s.intentional.join(', ') + '.' : ''}`, '', `Gate (index at most ${s.limit}, no cluster): ${s.gate ? 'passed' : 'missed'}. Craft gates red: ${s.craft.join(', ') || 'none'}${s.craftYellow.length ? '; yellow: ' + s.craftYellow.join(', ') : ''}.${r.pixelCheck === 'not run' ? ' Pixel check not run (B2, B4, B5, B7, D11 unmeasured).' : ''}`, '', '| ID | Tell | Value | Status | Note |', '|---|---|---|---|---|');
    Object.values(r.tells).sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true })).forEach(x => lines.push(`| ${x.id} | ${x.name} | ${String(x.value).replace(/\|/g, '/')} | ${x.status} | ${(x.note || '').replace(/\|/g, '/')} |`));
    lines.push('');
  };
  if (report.surfaces) {
    report.surfaces.forEach(r => block(`Surface ${r.surface}${r.thin ? ' (no word in the DOM, values not meaningful)' : ''}`, r));
    lines.push('## Sequence', '', ...report.sequence.map(s => `- ${s.id} ${s.name}: ${s.value}, **${s.status}**${s.note ? ' (' + s.note + ')' : ''}`), '', `**Total: index ${report.total.index}, ${verdictText(report.total.verdict)}** (median index of the surfaces ${report.total.medianIndex}, highest ${report.total.maxIndex}, sequence tells red: ${report.total.sequenceReds}).`);
  } else block('Result', report);
  lines.push('', 'Note: the index measures known patterns, not originality. Idea, image quality, coherence and motion are checked only by looking. Every tell is allowed when brief or brand ask for it (--allow-fonts, --brand-colors, --intentional); then name it as intentional in the wrap-up. Craft (H) is a separate gate and does not count in the index.');
  return lines.join('\n');
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let total = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, 700); total += 700;
        if (total >= document.documentElement.scrollHeight || total > 24000) { clearInterval(timer); window.scrollTo(0, 0); resolve(); }
      }, 100);
    });
  });
}

async function main() {
  const isUrl = /^https?:\/\//.test(input);
  const target = isUrl ? input : pathToFileURL(path.resolve(input)).href;
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'generic-'));
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
  // Watchdog: if a page hangs, close the browser instead of leaving orphaned Chrome processes
  const watchdog = setTimeout(async () => { console.error('Aborted: page not measured after 180 s.'); try { await browser.close(); } catch (e) {} process.exit(2); }, 180000);
  watchdog.unref();
  const cfgBase = { L1, L2, TAILWIND, allowFonts, brand, medium, deck, words: WORDS, gapAny: GAP_ANY, foldH: viewport.height };
  let report, blocked = false;
  try {
    const page = await browser.newPage();
    await page.setViewport(viewport);
    try { await page.goto(target, { waitUntil: 'networkidle2', timeout: 45000 }); } catch (e) { console.error('Warning: ' + e.message); }
    // the deck shell fits its slides to the window with --deck-zoom; surfaces are measured at their design size
    if (selector) await page.addStyleTag({ content: 'html { --deck-zoom: 1 !important; }' }).catch(() => {});
    const isBlocked = () => /just a moment|nur einen moment|access denied|human verification|sicherheitsüberprüfung|verify you are human|temporarily blocked|zugriff verweigert|build incomplete|err_ssl|err_connection|err_name_not_resolved|this site can.t be reached|keine sichere verbindung|sign in to v0|^login . vercel|vercel inc - anmelden|404: not_found|deployment_not_found/i.test(document.title + ' ' + (document.body ? document.body.innerText.slice(0, 400) : '')); // lang:de
    blocked = await page.evaluate(isBlocked);
    // Hide consent banners, never accept them; scroll through once so that lazy content appears
    try {
      await page.evaluate(sel => {
        const main = document.querySelector('main') || document.querySelector('h1');
        for (const el of document.querySelectorAll(sel)) {
          if (el === document.body || el === document.documentElement || (main && el.contains(main))) continue;
          if ((el.innerText || '').length > 4000) continue;
          el.style.setProperty('display', 'none', 'important');
        }
      }, CONSENT_SEL);
    } catch (e) {}
    try { await autoScroll(page); } catch (e) {}
    await page.evaluate(() => document.fonts && document.fonts.ready);
    await new Promise(r => setTimeout(r, 1200));
    // Check delayed block pages (JS challenge) and error pages again after loading
    if (!blocked) blocked = await page.evaluate(isBlocked);
    if (blocked) console.error('Warning: the page shows a bot-protection, sign-in or error page. The report measures that page, not the design.');
    if (selector) {
      const count = await page.$$eval(selector, els => els.length);
      const surfaces = [], skipped = [];
      for (let i = 0; i < count; i++) {
        await page.$$eval(selector, (els, i) => els[i].scrollIntoView({ block: 'start' }), i);
        // a hidden or empty surface (display none, no height) can be neither measured nor captured: skipped, named below
        const shown = await page.$$eval(selector, (els, i) => { const r = els[i].getBoundingClientRect(); return r.width >= 1 && r.height >= 1; }, i);
        if (!shown) { skipped.push(i + 1); continue; }
        const scope = { sel: selector, idx: i };
        const foldImage = await imageShare(page, scope);
        const res = await page.evaluate(analyze, scope, { ...cfgBase, foldImage });
        const el = (await page.$$(selector))[i];
        const png = path.join(tmpDir, `f${i}.png`);
        let pc; try { await el.screenshot({ path: png }); pc = pixelCheck(png); } catch (e) { pc = { px: null, reason: `screenshot failed (${e.message})` }; }
        res.surface = i + 1;
        res.thin = res.words < THIN_SURFACE;
        pixelTells(res, pc.px, medium, foldImage);
        res.pixelCheck = pc.px ? 'ok' : 'not run'; if (!pc.px) res.pixelCheckReason = pc.reason;
        applyIntentional(res.tells, intentional);
        res.summary = summarize(res.tells, clusters(res.tells, res.flags), medium);
        surfaces.push(res);
      }
      if (skipped.length) console.error(`Warning: surface(s) ${skipped.join(', ')} of ${count} for ${selector} are hidden or empty (display none or no height), skipped; the report numbers each measured surface in "surface".`);
      const thinSurfaces = surfaces.filter(s => s.thin).map(s => s.surface);
      const noSurfaces = surfaces.length === 0;
      const allThin = noSurfaces || thinSurfaces.length === surfaces.length;
      if (noSurfaces) console.error(`Warning: ${selector} matched no measurable surface (${count} found). Index not meaningful; check the selector and the page.`);
      else if (thinSurfaces.length) console.error(`Warning: ${allThin ? 'all surfaces' : `surface(s) ${thinSurfaces.join(', ')} of ${count}`} without any word in the DOM (raster image or canvas). ${allThin ? 'Index' : 'Their values are'} not meaningful; check visually.`);
      // Sequence tells
      let pairs = 0, run = 1, maxRun = 1;
      for (let i = 1; i < surfaces.length; i++) { if (surfaces[i].vector === surfaces[i - 1].vector) { pairs++; run++; maxRun = Math.max(maxRun, run); } else run = 1; }
      const bgs = new Set(surfaces.map(s => s.mainBg));
      const deckSizes = new Set(surfaces.flatMap(s => s.sizes));
      const words = surfaces.map(s => s.words).sort((a, b) => a - b);
      const medWords = words.length ? words[Math.floor(words.length / 2)] : 0;
      const over80 = surfaces.filter(s => s.words > 80).length;
      const wYellow = deck === 'talk' ? 12 : 40;
      const sequence = [
        { id: 'F1', name: 'Same composition in a row', value: `${pairs} identical neighbor pairs, longest run ${maxRun}`, status: pairs >= 2 || maxRun >= 3 ? 'red' : pairs === 1 ? 'yellow' : 'ok', note: 'Ok only for the same content type and at most three in a row; check on the contact sheet whether title, anchor and emptiness sit in the same place.' },
        { id: 'F2', name: 'Background without rhythm', value: `${bgs.size} background colors across ${surfaces.length} surfaces`, status: surfaces.length >= 6 && bgs.size === 1 ? 'yellow' : 'ok' },
        { id: 'F4', name: 'Type sizes across the sequence', value: `${deckSizes.size} sizes across all surfaces`, status: deckSizes.size > 15 ? 'red' : deckSizes.size > 10 ? 'yellow' : 'ok' },
        { id: 'F6', name: 'Words per surface', value: `median ${medWords}, ${over80} surfaces over 80 words (deck ${deck})`, status: medWords > 80 ? 'red' : (medWords > wYellow || over80 >= 1) ? 'yellow' : 'ok', note: over80 ? 'Over 80 words only on designated text surfaces.' : '' },
      ];
      for (const s of sequence) if (intentional.includes(s.id) && s.status !== 'ok') s.status = 'intentional';
      const idx = surfaces.map(s => s.summary.index).sort((a, b) => a - b);
      const medianIndex = idx[Math.floor(idx.length / 2)] || 0;
      const sequenceReds = sequence.filter(s => s.status === 'red').length;
      const tot = medianIndex + sequenceReds;
      const langSum = {}; let charSum = 0;
      for (const s of surfaces) { for (const [k, v] of Object.entries(s.lang)) langSum[k] = (langSum[k] || 0) + v * s.chars; charSum += s.chars; }
      const lang = Object.fromEntries(Object.entries(langSum).sort((a, b) => b[1] - a[1]).map(([k, v]) => [k, +(v / (charSum || 1)).toFixed(3)]));
      const notRun = surfaces.find(s => s.pixelCheck === 'not run');
      report = { tool: 'generic-check', catalog: 'v2', input, medium, deck, blocked, words: surfaces.reduce((a, s) => a + s.words, 0), thin: allThin, ...(noSurfaces ? { noSurfaces } : {}), ...(thinSurfaces.length ? { thinSurfaces } : {}), ...(skipped.length ? { skipped } : {}), lang, pixelCheck: notRun ? 'not run' : 'ok', ...(notRun ? { pixelCheckReason: notRun.pixelCheckReason } : {}), surfaces, sequence, total: { medianIndex, maxIndex: idx[idx.length - 1] || 0, sequenceReds, index: tot, verdict: tot <= 1 ? 'clean' : tot === 2 ? 'borderline' : 'generic' } };
    } else {
      const foldImage = await imageShare(page, null);
      const res = await page.evaluate(analyze, null, { ...cfgBase, foldImage });
      const png = path.join(tmpDir, 'fold.png'); await page.screenshot({ path: png });
      const pc = pixelCheck(png);
      pixelTells(res, pc.px, medium, foldImage);
      res.pixelCheck = pc.px ? 'ok' : 'not run'; if (!pc.px) res.pixelCheckReason = pc.reason;
      applyIntentional(res.tells, intentional);
      res.summary = summarize(res.tells, clusters(res.tells, res.flags), medium);
      report = { tool: 'generic-check', catalog: 'v2', input, medium, blocked, thin: res.words < THIN_PAGE, ...res };
      if (report.thin) console.error(`Warning: only ${res.words} words in the DOM (WebGL, canvas, loading page or error). Index not meaningful; check visually.`);
    }
    if (report.pixelCheck === 'not run') console.error(`Warning: pixel check not run (${report.pixelCheckReason}); tells B2, B4, B5, B7 and D11 unmeasured.`);
  } finally {
    await browser.close();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
  if (out) fs.writeFileSync(out, JSON.stringify(report, null, 2));
  const mdText = toMarkdown(report);
  if (md) fs.writeFileSync(md, mdText);
  console.log(mdText);
}

// Exit explicitly: on some pages Chrome helper processes otherwise keep the event loop open
main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });

#!/usr/bin/env node
// Measures design values of a website or HTML file directly from the DOM.
//
// Usage:
//   node measure.mjs <url|file.html> [--viewport 1440x900] [--selector .slide] [--out measurements.json]
//
// Without --selector the whole page plus the first screen (fold) is measured.
// With --selector every matching element is measured on its own (slides, social posts).
//
// Values: type families by text share, body size, type scale (largest type / body size),
// number of type sizes and weights, caps labels, centered share, cards and card grids,
// gradients and glows, image area, emoji, words in the first screen, buttons in the first screen,
// colors by area, font preloads and blended images (they can break a page in Safari).

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { findChrome } from './chrome.mjs';
const CHROME = findChrome();

const args = process.argv.slice(2);
const input = args[0];
if (!input) {
  console.error('Usage: node measure.mjs <url|file.html> [--viewport 1440x900] [--selector .slide] [--out measurements.json]');
  process.exit(1);
}
let viewport = { width: 1440, height: 900 };
let selector = null;
let out = null;
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--viewport') { const [w, h] = args[++i].split('x').map(Number); viewport = { width: w, height: h }; }
  else if (args[i] === '--selector') selector = args[++i];
  else if (args[i] === '--out') out = args[++i];
}

function pageMetrics(scopeSelector, foldHeight) {
  // Runs in the browser. scopeSelector: null = whole page, else a single element by index (see below).
  const rgb = s => { const m = s && s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(x => parseFloat(x)); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const hex = c => '#' + [c.r, c.g, c.b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
  const emojiRe = /\p{Extended_Pictographic}/u;

  const roots = scopeSelector === null ? [document.body] : [document.querySelectorAll(scopeSelector.sel)[scopeSelector.idx]];
  const root = roots[0];
  const rootRect = root.getBoundingClientRect();
  const scrollY = window.scrollY;
  const inFold = r => scopeSelector !== null ? true : (r.top + scrollY) < foldHeight;

  // Texts
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.textContent.trim().length ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
  const texts = [];
  let n;
  while ((n = walker.nextNode())) {
    const el = n.parentElement;
    if (!el) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) === 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const t = n.textContent.replace(/\s+/g, ' ').trim();
    texts.push({
      t, chars: t.length, words: t.split(' ').filter(Boolean).length,
      size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight, 10) || 400,
      family: cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
      upper: cs.textTransform === 'uppercase' || (t.length > 3 && t === t.toUpperCase() && /[A-ZÄÖÜ]/.test(t)), // lang:de
      tracking: cs.letterSpacing === 'normal' ? 0 : parseFloat(cs.letterSpacing),
      lineHeight: cs.lineHeight === 'normal' ? null : parseFloat(cs.lineHeight),
      align: cs.textAlign, color: cs.color, fold: inFold(r), tag: el.tagName.toLowerCase(),
      mono: /mono|code|courier|consolas/i.test(cs.fontFamily), emoji: emojiRe.test(t),
    });
  }
  const totalChars = texts.reduce((s, x) => s + x.chars, 0) || 1;
  const byFamily = {};
  texts.forEach(x => { byFamily[x.family] = (byFamily[x.family] || 0) + x.chars; });
  const families = Object.entries(byFamily).sort((a, b) => b[1] - a[1]).map(([f, c]) => ({ family: f, share: +(c / totalChars).toFixed(3) }));
  const bySize = {};
  texts.forEach(x => { const k = Math.round(x.size); bySize[k] = (bySize[k] || 0) + x.chars; });
  const bodySize = +Object.entries(bySize).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  const maxText = texts.reduce((m, x) => (x.size > (m?.size || 0) ? x : m), null);
  const distinctSizes = Object.keys(bySize).length;
  const distinctWeights = new Set(texts.map(x => x.weight)).size;
  const labels = texts.filter(x => x.upper && x.size <= (bodySize || 16) * 1.05 && x.chars < 40);
  const centeredShare = texts.filter(x => x.align === 'center').reduce((s, x) => s + x.chars, 0) / totalChars;
  const foldTexts = texts.filter(x => x.fold);
  const foldWords = foldTexts.reduce((s, x) => s + x.words, 0);
  const smallText = texts.filter(x => x.size < 14).reduce((s, x) => s + x.chars, 0) / totalChars;

  // Elements: cards, gradients, glows, images
  const all = Array.from(root.querySelectorAll('*'));
  const vpArea = (scopeSelector !== null ? rootRect.width * rootRect.height : window.innerWidth * foldHeight) || 1;
  let cards = [], gradients = 0, glows = 0, blurs = 0, imgAreaFold = 0, images = 0, svgsLarge = 0, radii = {}, buttonsFold = 0, borders = 0, shadows = 0;
  const bgArea = {};
  for (const el of all) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const area = r.width * r.height;
    const bg = rgb(cs.backgroundColor);
    const hasBg = bg && bg.a > 0.05;
    const hasBorder = parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== 'none';
    const hasShadow = cs.boxShadow && cs.boxShadow !== 'none';
    const radius = parseFloat(cs.borderTopLeftRadius) || 0;
    if (hasBorder) borders++;
    if (hasShadow) shadows++;
    if (/gradient/.test(cs.backgroundImage)) gradients++;
    if (hasShadow) { const blur = cs.boxShadow.match(/(\d+(?:\.\d+)?)px\s+(\d+(?:\.\d+)?)px\s+(\d+(?:\.\d+)?)px/); if (blur && parseFloat(blur[3]) >= 40) glows++; }
    if (/blur\(/.test(cs.filter) || /blur\(/.test(cs.backdropFilter || '')) blurs++;
    if (hasBg && inFold(r)) { const k = hex(bg); bgArea[k] = (bgArea[k] || 0) + area; }
    const tag = el.tagName.toLowerCase();
    if (tag === 'img' || tag === 'video' || tag === 'picture' || tag === 'canvas' || (cs.backgroundImage && /url\(/.test(cs.backgroundImage))) {
      if (area > 10000) { images++; if (inFold(r)) imgAreaFold += Math.min(area, vpArea); }
    }
    if (tag === 'svg' && area > 40000) svgsLarge++;
    const btnText = (el.innerText || '').trim();
    if ((tag === 'button' || tag === 'a') && (hasBg || hasBorder) && r.height >= 28 && r.height <= 72 && r.width <= 420 && btnText.length > 0 && btnText.length <= 40 && r.top >= 0 && r.top < foldHeight && r.left >= 0 && r.right <= window.innerWidth) buttonsFold++;
    if ((hasBg || hasBorder || hasShadow) && radius >= 0 && r.width >= 120 && r.height >= 80 && r.width < (scopeSelector !== null ? rootRect.width : window.innerWidth) * 0.9 && el.innerText && el.innerText.trim().length > 10) {
      cards.push({ el, w: Math.round(r.width), h: Math.round(r.height), radius });
      radii[Math.round(radius)] = (radii[Math.round(radius)] || 0) + 1;
    }
  }
  // Card grid: parents with at least 3 card children of equal width
  const parents = new Map();
  cards.forEach(c => { const p = c.el.parentElement; if (!p) return; if (!parents.has(p)) parents.set(p, []); parents.get(p).push(c); });
  let cardGrids = 0;
  parents.forEach(list => {
    if (list.length < 3) return;
    const ws = list.map(c => c.w);
    const same = ws.filter(w => Math.abs(w - ws[0]) <= 4).length;
    if (same >= 3) cardGrids++;
  });

  // Text color contrast against the background (simplified check through the nearest opaque background)
  function effectiveBg(el) {
    let e = el;
    while (e) { const c = rgb(getComputedStyle(e).backgroundColor); if (c && c.a > 0.9) return c; e = e.parentElement; }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  let lowContrast = 0;
  const sample = texts.slice(0, 400);
  // second element pass for contrast
  const tw2 = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: nn => nn.textContent.trim().length ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
  let k2 = 0, nn;
  while ((nn = tw2.nextNode()) && k2 < 400) {
    const el = nn.parentElement; if (!el || !el.getClientRects().length) continue; k2++; // display: none (notes) not shown
    const cs = getComputedStyle(el); const fg = rgb(cs.color); if (!fg) continue;
    const bg = effectiveBg(el);
    const L1 = lum(fg), L2 = lum(bg); const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    const big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && parseInt(cs.fontWeight, 10) >= 700);
    if (ratio < (big ? 3 : 4.5)) lowContrast++;
  }

  // Image area in the first screen through grid sampling (avoids double counting of overlapping images)
  let imgHits = 0, samples = 0;
  const sx0 = scopeSelector !== null ? rootRect.left : 0, sy0 = scopeSelector !== null ? rootRect.top : 0;
  const sw = scopeSelector !== null ? rootRect.width : window.innerWidth, sh = scopeSelector !== null ? Math.min(rootRect.height, window.innerHeight) : Math.min(foldHeight, window.innerHeight);
  if (scopeSelector === null) window.scrollTo(0, 0);
  for (let yy = 0; yy < 24; yy++) for (let xx = 0; xx < 40; xx++) {
    const px = sx0 + (xx + 0.5) * sw / 40, py = sy0 + (yy + 0.5) * sh / 24;
    samples++;
    const stack = document.elementsFromPoint(px, py) || [];
    const hit = stack.some(e => { const t = e.tagName.toLowerCase(); if (['img', 'video', 'picture', 'canvas'].includes(t)) return true; const cs2 = getComputedStyle(e); return /url\(/.test(cs2.backgroundImage); });
    if (hit) imgHits++;
  }
  imgAreaFold = (imgHits / samples) * vpArea;
  const bgTotal = Object.values(bgArea).reduce((s, a) => s + a, 0) || 1;
  const bgColors = Object.entries(bgArea).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([c, a]) => ({ color: c, share: +(a / bgTotal).toFixed(3) }));

  return {
    scope: scopeSelector === null ? 'page' : `${scopeSelector.sel}[${scopeSelector.idx}]`,
    size: { width: Math.round(rootRect.width), height: Math.round(scopeSelector === null ? document.documentElement.scrollHeight : rootRect.height) },
    typography: {
      families, bodySize, maxSize: maxText ? Math.round(maxText.size) : null,
      scaleRatio: maxText && bodySize ? +(maxText.size / bodySize).toFixed(2) : null,
      largestText: maxText ? { text: maxText.t.slice(0, 80), weight: maxText.weight, lineHeightRatio: maxText.lineHeight ? +(maxText.lineHeight / maxText.size).toFixed(2) : null, trackingEm: +(maxText.tracking / maxText.size).toFixed(3), family: maxText.family } : null,
      distinctSizes, distinctWeights, upperLabels: labels.length, monoShare: +(texts.filter(x => x.mono).reduce((s, x) => s + x.chars, 0) / totalChars).toFixed(3),
      centeredShare: +centeredShare.toFixed(3), smallTextShare: +smallText.toFixed(3), emojiCount: texts.filter(x => x.emoji).length,
    },
    fold: { words: foldWords, buttons: buttonsFold, imageAreaShare: +(imgAreaFold / vpArea).toFixed(3), headline: foldTexts.sort((a, b) => b.size - a.size)[0]?.t.slice(0, 120) || null, bgColors },
    surfaces: { cards: cards.length, cardGrids, radii, gradients, glows, blurs, borders, shadows, images, svgsLarge },
    accessibility: { lowContrastTextNodes: lowContrast, checkedTextNodes: k2 },
    safariRisks: {
      fontPreloads: document.querySelectorAll('link[rel="preload"][as="font"]').length,
      blendedImages: [...document.querySelectorAll('*')].filter(e => {
        const c = getComputedStyle(e), bg = /url\(/.test(c.backgroundImage);
        const media = /^(IMG|PICTURE|VIDEO|CANVAS)$/.test(e.tagName) || bg || !!e.querySelector('img,picture,video,canvas');
        return (media && c.mixBlendMode !== 'normal') || (bg && c.backgroundBlendMode.split(',').some(v => v.trim() !== 'normal'));
      }).length,
    },
    totals: { words: texts.reduce((s, x) => s + x.words, 0), textNodes: texts.length },
  };
}

async function main() {
  const isUrl = /^https?:\/\//.test(input);
  const target = isUrl ? input : pathToFileURL(path.resolve(input)).href;
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars', '--disable-blink-features=AutomationControlled'] });
  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36');
    await page.setViewport(viewport);
    try { await page.goto(target, { waitUntil: 'networkidle2', timeout: 45000 }); } catch (e) { console.error('Warning: ' + e.message); }
    // the deck shell fits its slides to the window with --deck-zoom; elements are measured at their design size
    if (selector) await page.addStyleTag({ content: 'html { --deck-zoom: 1 !important; }' }).catch(() => {});
    await page.evaluate(() => document.fonts && document.fonts.ready);
    await new Promise(r => setTimeout(r, 1200));
    let result;
    if (selector) {
      const count = await page.$$eval(selector, els => els.length);
      result = [];
      for (let i = 0; i < count; i++) {
        await page.$$eval(selector, (els, i) => els[i].scrollIntoView(), i);
        result.push(await page.evaluate(pageMetrics, { sel: selector, idx: i }, viewport.height));
      }
    } else {
      result = await page.evaluate(pageMetrics, null, viewport.height);
    }
    const json = JSON.stringify({ input, viewport, result }, null, 2);
    if (out) { fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true }); fs.writeFileSync(out, json); }
    console.log(json);
  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error(e); process.exit(1); });

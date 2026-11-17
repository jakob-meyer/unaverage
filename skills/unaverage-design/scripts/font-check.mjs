#!/usr/bin/env node
// Checks web fonts for the characters of the output language and for tabular figures, directly in the browser.
//
// Usage:
//   node font-check.mjs --google "Archivo,Fragment Mono" [--lang de,en]   (builds the Google Fonts CSS2 URL itself)
//   node font-check.mjs --css "<stylesheet URL>" [--css "<more URL>"] --family "Name" [--family "Name 2"] [--json out.json]
//   node font-check.mjs --file font.woff2 --family "Test name"   (local file, for example from google/fonts or Fontsource)
//
// --lang   character sets, comma-separated (default: all sets, today de and en):
//          de  16 characters: umlauts, sharp s U+00DF, capital sharp s U+1E9E, German quotation marks, euro,
//              ellipsis, minus, narrow no-break space
//          en  12 characters: curly quotation marks, em dash U+2014, en dash U+2013, ellipsis, minus, pound,
//              euro, multiplication sign, degree
//          A new language gets a key in CHARSETS and section 5 in its market module.
//
// Method: every character sits in its own element with font-family "Name", serif. Through the
// Chrome DevTools Protocol (CSS.getPlatformFontsForNode) the script reads which font actually
// renders the character. If a system font renders it, the glyph is missing. A family that does not exist
// runs along as a negative control. Tabular figures: width of "1111111111" and "0000000000" with
// font-variant-numeric: tabular-nums; equal width means tnum works.
// Limits: weight 400 is checked; hyphenation, ligatures and kerning are not checked by the script.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';

import { findChrome } from './chrome.mjs';

const CHARSETS = {
  de: {
    'a umlaut U+00E4': '\u00e4', 'o umlaut U+00F6': '\u00f6', 'u umlaut U+00FC': '\u00fc', 'A umlaut U+00C4': '\u00c4', 'O umlaut U+00D6': '\u00d6', 'U umlaut U+00DC': '\u00dc',
    'sharp s U+00DF': '\u00df', 'capital sharp s U+1E9E': '\u1e9e',
    'low quotation mark U+201E': '\u201e', 'high quotation mark U+201C': '\u201c',
    'single low quotation mark U+201A': '\u201a', 'single high quotation mark U+2018': '\u2018',
    'euro U+20AC': '\u20ac', 'ellipsis U+2026': '\u2026', 'minus U+2212': '\u2212', 'narrow no-break space U+202F': '\u202f',
  },
  en: {
    'left double quotation mark U+201C': '\u201c', 'right double quotation mark U+201D': '\u201d',
    'left single quotation mark U+2018': '\u2018', 'right single quotation mark U+2019': '\u2019',
    'em dash U+2014': '\u2014', 'en dash U+2013': '\u2013', 'ellipsis U+2026': '\u2026', 'minus U+2212': '\u2212',
    'pound U+00A3': '\u00a3', 'euro U+20AC': '\u20ac', 'multiplication sign U+00D7': '\u00d7', 'degree U+00B0': '\u00b0',
  },
};

const args = process.argv.slice(2);
const css = [], fam = []; let jsonOut = null, file = null, langs = Object.keys(CHARSETS);
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--css') css.push(args[++i]);
  else if (args[i] === '--family') fam.push(args[++i]);
  else if (args[i] === '--json') jsonOut = args[++i];
  else if (args[i] === '--file') file = path.resolve(args[++i]);
  else if (args[i] === '--lang') langs = args[++i].split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  else if (args[i] === '--google') {
    const list = args[++i].split(',').map(s => s.trim()).filter(Boolean);
    css.push('https://fonts.googleapis.com/css2?' + list.map(f => 'family=' + f.replace(/ /g, '+')).join('&') + '&display=block');
    fam.push(...list);
  }
  else if (args[i].startsWith('--')) { console.error(`Unknown option ${args[i]} (use --google, --css, --family, --file, --lang, --json).`); process.exit(1); }
}
if (!fam.length) { console.error('Give at least one family (--family, --google, or --file with --family).'); process.exit(1); }
const unknown = langs.filter(s => !CHARSETS[s]);
if (!langs.length || unknown.length) { console.error(`Unknown character set "${unknown.join(', ')}" (available: ${Object.keys(CHARSETS).join(', ')}).`); process.exit(1); }

const CONTROL = 'Nonexistent Control Font';
const all = [...fam, CONTROL];
const span = (i, s, k, c) => `<span data-f="${i}" data-s="${s}" data-k="${k}"${s === 'control' ? '' : ` lang="${s}"`} style="font-family:'${all[i]}',serif;font-size:40px">${c}</span>`;
let face = '';
if (file) face = `<style>@font-face{font-family:"${fam[0]}";src:url("${pathToFileURL(file).href}");}</style>`;
let body = '';
all.forEach((f, i) => { body += span(i, 'control', 'control a', 'a'); for (const s of langs) for (const [k, c] of Object.entries(CHARSETS[s])) body += span(i, s, k, c); body += '<br>'; });
const html = `<!doctype html><html lang="${langs[0]}"><head><meta charset="utf-8">${css.map(u => `<link rel="stylesheet" href="${u}">`).join('')}${face}</head><body>${body}</body></html>`;
const tmp = path.join(os.tmpdir(), `font-check-${process.pid}.html`);
fs.writeFileSync(tmp, html);

const browser = await puppeteer.launch({ executablePath: findChrome(), headless: true });
try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle0', timeout: 120000 });
  const chars = langs.flatMap(s => Object.values(CHARSETS[s])).join('');
  await page.evaluate(async (all, chars) => { for (const f of all) { try { await document.fonts.load(`400 40px "${f}"`, 'a0' + chars); } catch (e) {} } await document.fonts.ready; }, all, chars);
  const cdp = await page.target().createCDPSession();
  await cdp.send('DOM.enable'); await cdp.send('CSS.enable');
  const { root } = await cdp.send('DOM.getDocument', { depth: -1 });
  const { nodeIds } = await cdp.send('DOM.querySelectorAll', { nodeId: root.nodeId, selector: 'span' });
  const res = {};
  for (const id of nodeIds) {
    const { attributes } = await cdp.send('DOM.getAttributes', { nodeId: id });
    const a = {}; for (let i = 0; i < attributes.length; i += 2) a[attributes[i]] = attributes[i + 1];
    const f = all[+a['data-f']];
    const { fonts } = await cdp.send('CSS.getPlatformFontsForNode', { nodeId: id });
    const own = fonts.length > 0 && fonts.every(x => x.isCustomFont);
    const r = (res[f] ||= { loaded: false, chars: {} });
    if (a['data-s'] === 'control') r.loaded = own;
    else (r.chars[a['data-s']] ||= {})[a['data-k']] = own ? 'yes' : 'MISSING (' + fonts.map(x => x.familyName).join(', ') + ')';
  }
  const tnum = await page.evaluate((fam) => {
    const out = {};
    for (const f of fam) {
      const m = (t, n) => { const s = document.createElement('span'); s.style.cssText = `font-family:"${f}",serif;font-size:40px;font-variant-numeric:${n};position:absolute;white-space:nowrap`; s.textContent = t; document.body.appendChild(s); const w = s.getBoundingClientRect().width; s.remove(); return w; };
      out[f] = { tabularByDefault: Math.abs(m('1111111111', 'normal') - m('0000000000', 'normal')) < 0.5, tnumWorks: Math.abs(m('1111111111', 'tabular-nums') - m('0000000000', 'tabular-nums')) < 0.5 };
    }
    return out;
  }, fam);
  const control = res[CONTROL];
  const controlOk = !control.loaded && Object.values(control.chars).every(set => Object.values(set).every(v => v !== 'yes'));
  for (const f of fam) {
    const r = res[f];
    r.tnum = tnum[f];
    const sets = langs.map(s => { const missing = Object.entries(r.chars[s] || {}).filter(([, v]) => v !== 'yes').map(([k]) => k); return missing.length ? `${s} missing: ${missing.join(', ')}` : `all ${Object.keys(CHARSETS[s]).length} characters for ${s} present`; });
    console.log(`${f}: ${!r.loaded ? 'FONT NOT LOADED (check name or URL)' : sets.join('; ')} | tabular figures: ${tnum[f].tnumWorks ? (tnum[f].tabularByDefault ? 'default' : 'via tabular-nums') : 'not available'}`);
  }
  console.log(`Negative control: ${controlOk ? 'passed' : 'NOT passed, result unusable'}`);
  if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(res, null, 1));
} finally {
  await browser.close();
  fs.rmSync(tmp, { force: true });
}

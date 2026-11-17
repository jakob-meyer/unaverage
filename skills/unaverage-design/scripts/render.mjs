#!/usr/bin/env node
// Renders a URL or a local HTML file to PNG screenshots.
//
// Usage:
//   node render.mjs <url|file.html> <output folder> [options]
//
// Options:
//   --viewports 1440x900,390x844   widths x heights (default: 1440x900,390x844)
//   --full                         whole page instead of the viewport only (default for websites); scrolls through the page first
//   --fold                         first screen only
//   --selector ".slide"            render every matching element on its own (slides, social posts)
//   --scale 1                      deviceScaleFactor (default 1)
//   --wait 1500                    wait time in ms after loading
//   --reduced-motion               emulate prefers-reduced-motion: reduce and cut animations and transitions to their end state
//   --name base                    file name prefix (default: derived from the input)
//
// Before every capture, lazy images are switched to eager and awaited (at most 8 s), so images far down are in the picture.
// With --full the page is scrolled through once, URLs and local files alike, so scroll reveals and lazy loaders fire.
// With --selector, elements that fit into the viewport are captured on screen; larger ones are cut from one full-page
// capture, because clip captures beyond the screen can paint large text at the wrong size after scrolling. Elements
// reaching below 16,384 device pixels are captured on their own with a warning, since Chrome repeats the start of the
// page in full-page captures from there. Elements inside an inner scroll container (a carousel track, an app shell)
// are captured on their own as well, because the full-page capture shows such a container in one scroll position only.
// Cookie and consent banners are only hidden, never accepted.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { findChrome } from './chrome.mjs';
const CHROME = findChrome();

const USAGE = 'Usage: node render.mjs <url|file.html> <output folder> [--viewports 1440x900,390x844] [--full|--fold] [--selector .slide] [--scale 1] [--wait 1500] [--reduced-motion] [--name base]';

function usage(message) {
  if (message) console.error(message);
  console.error(USAGE);
  process.exit(1);
}

function parseArgs(argv) {
  const [input, outDir, ...rest] = argv;
  if (!input || !outDir || input.startsWith('--') || outDir.startsWith('--')) usage();
  const opts = { input, outDir, viewports: '1440x900,390x844', full: true, selector: null, scale: 1, wait: 1500, name: null, reducedMotion: false };
  const value = i => {
    if (rest[i] === undefined || rest[i].startsWith('--')) usage(`Missing value for ${rest[i - 1]}.`);
    return rest[i];
  };
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a === '--viewports') opts.viewports = value(++i);
    else if (a === '--full') opts.full = true;
    else if (a === '--fold') opts.full = false;
    else if (a === '--selector') opts.selector = value(++i);
    else if (a === '--scale') opts.scale = Number(value(++i));
    else if (a === '--wait') opts.wait = Number(value(++i));
    else if (a === '--name') opts.name = value(++i);
    else if (a === '--reduced-motion') opts.reducedMotion = true;
    else usage(`Unknown option ${a}.`);
  }
  opts.viewports = opts.viewports.split(',').map(v => {
    const [w, h] = v.toLowerCase().split('x').map(Number);
    if (!(w > 0 && h > 0)) usage(`Invalid viewport "${v}" (use WIDTHxHEIGHT).`);
    return { width: w, height: h };
  });
  if (!(opts.scale > 0)) usage('Invalid value for --scale.');
  if (!(opts.wait >= 0)) usage('Invalid value for --wait.');
  return opts;
}

const HIDE_CONSENT_CSS = `
  [id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i],
  #onetrust-banner-sdk, #onetrust-consent-sdk, .ot-sdk-container, #didomi-host, #usercentrics-root,
  #CybotCookiebotDialog, .cc-window, .truste_box_overlay, [aria-label*="cookie" i] { display: none !important; }
  html, body { overflow: visible !important; }
`;

// Cuts animations and transitions short, so they are captured in their end state; events such as transitionend still fire.
const END_STATE_CSS = '*,*::before,*::after{animation-delay:0s!important;animation-duration:0.01s!important;' +
  'animation-iteration-count:1!important;transition-delay:0s!important;transition-duration:0.01s!important}' +
  'html,body{scroll-behavior:auto!important}';

const IMAGE_TIMEOUT_MS = 8000;
// Chrome repeats the start of the page in full-page captures beyond this height in device pixels.
const MAX_CAPTURE_PX = 16384;
const DESIGN_SIZE_CSS = 'html { --deck-zoom: 1 !important; }';

// Scrolls through the page once and back to the top, up to 120,000 px (about 100 slides, so reveals in long decks
// fire). "instant" overrides scroll-behavior: smooth, which would otherwise swallow most steps.
async function autoScroll(page) {
  await page.evaluate(async () => {
    const pause = ms => new Promise(r => setTimeout(r, ms));
    const height = () => Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0);
    const step = Math.max(200, Math.round(window.innerHeight * 0.6));
    for (let y = 0; y < height() && y <= 120000; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await pause(120);
    }
    window.scrollTo({ top: height(), behavior: 'instant' });
    await pause(400);
    window.scrollTo({ top: 0, behavior: 'instant' });
    await pause(300);
  });
}

function eagerImages(page) {
  return page.evaluate(() => {
    for (const img of document.querySelectorAll('img[loading="lazy" i]')) img.loading = 'eager';
  });
}

// Waits for every image that is still loading, at most IMAGE_TIMEOUT_MS; returns how many are still open.
function awaitImages(page) {
  return page.evaluate(async timeout => {
    const open = [...document.images].filter(img => !img.complete);
    const loaded = Promise.all(open.map(img => new Promise(resolve => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
      if (img.complete) resolve();
    })));
    await Promise.race([loaded, new Promise(r => setTimeout(r, timeout))]);
    return [...document.images].filter(img => !img.complete).length;
  }, IMAGE_TIMEOUT_MS);
}

function pngSize(buf) {
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function warnTall(buf, what) {
  const { height } = pngSize(buf);
  if (height > MAX_CAPTURE_PX) console.error(`Warning: ${what} is ${height} px high; beyond ${MAX_CAPTURE_PX} px Chrome may repeat the start of the page. Check the image or render sections one by one.`);
}

// Cuts rectangles (CSS pixels of the document) from a full-page PNG, in a blank tab of the same browser.
async function cropPng(browser, png, rects, ratio) {
  const tab = await browser.newPage();
  try {
    const parts = await tab.evaluate(async (b64, rects, ratio) => {
      const img = new Image();
      img.src = 'data:image/png;base64,' + b64;
      await img.decode();
      return rects.map(r => {
        const x0 = Math.max(0, Math.round(r.x * ratio)), y0 = Math.max(0, Math.round(r.y * ratio));
        const x1 = Math.min(img.naturalWidth, Math.round((r.x + r.width) * ratio));
        const y1 = Math.min(img.naturalHeight, Math.round((r.y + r.height) * ratio));
        if (x1 <= x0 || y1 <= y0) return null;
        const canvas = document.createElement('canvas');
        canvas.width = x1 - x0;
        canvas.height = y1 - y0;
        canvas.getContext('2d').drawImage(img, x0, y0, x1 - x0, y1 - y0, 0, 0, x1 - x0, y1 - y0);
        return canvas.toDataURL('image/png').split(',')[1];
      });
    }, Buffer.from(png).toString('base64'), rects, ratio);
    return parts.map(p => (p ? Buffer.from(p, 'base64') : null));
  } finally {
    await tab.close();
  }
}

async function renderElements(browser, page, o, base, written) {
  const els = await page.$$(o.selector);
  if (!els.length) console.error(`No elements found for selector ${o.selector}.`);
  const boxOf = el => el.evaluate(e => {
    const r = e.getBoundingClientRect();
    // an ancestor below body that scrolls its own content (overflow auto, scroll or overlay with more content than room)
    const scrolls = (style, size, room) => /auto|scroll|overlay/.test(style) && size > room + 1;
    let inScroller = false;
    for (let p = e.parentElement; p && p !== document.body && p !== document.documentElement; p = p.parentElement) {
      const cs = getComputedStyle(p);
      if (scrolls(cs.overflowX, p.scrollWidth, p.clientWidth) || scrolls(cs.overflowY, p.scrollHeight, p.clientHeight)) { inScroller = true; break; }
    }
    return { x: r.left, y: r.top, width: r.width, height: r.height, scrollX: window.scrollX, scrollY: window.scrollY, vw: window.innerWidth, vh: window.innerHeight, inScroller };
  });
  const fits = b => b.x >= -0.5 && b.y >= -0.5 && b.x + b.width <= b.vw + 0.5 && b.y + b.height <= b.vh + 0.5;
  const jobs = [];
  for (const [n, el] of els.entries()) {
    const file = path.join(o.outDir, `${base}-${String(n + 1).padStart(2, '0')}.png`);
    let b = await boxOf(el);
    if (b.width < 1 || b.height < 1) { console.error(`Element ${n + 1} (${o.selector}) has no visible box, skipped.`); continue; }
    if (!fits(b)) { await el.scrollIntoView(); b = await boxOf(el); }
    if (fits(b)) {
      await el.screenshot({ path: file, captureBeyondViewport: false, scrollIntoView: false });
      jobs.push({ file, done: true });
    } else if (b.inScroller) {
      // the full-page capture would show the scroll container in its last position, so capture the element on its own
      await el.screenshot({ path: file });
      jobs.push({ file, done: true });
    } else {
      jobs.push({ file, el, done: false, rect: { x: b.x + b.scrollX, y: b.y + b.scrollY, width: b.width, height: b.height } });
    }
  }
  const large = jobs.filter(j => !j.done);
  if (large.length) {
    // larger than the viewport: one full-page capture, the elements are cut from it
    await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
    const full = Buffer.from(await page.screenshot({ fullPage: true, captureBeyondViewport: true }));
    const docWidth = await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body ? document.body.scrollWidth : 0));
    const ratio = pngSize(full).width / docWidth;
    const cut = large.filter(j => (j.rect.y + j.rect.height) * ratio <= MAX_CAPTURE_PX);
    const parts = await cropPng(browser, full, cut.map(j => j.rect), ratio);
    for (const [i, j] of cut.entries()) {
      if (!parts[i]) { console.error(`${path.basename(j.file)}: element lies outside the page, skipped.`); continue; }
      fs.writeFileSync(j.file, parts[i]);
      j.done = true;
    }
    // below the capture limit the full-page image repeats the start, so these elements are captured on their own
    for (const j of large.filter(j => !cut.includes(j))) {
      console.error(`Warning: ${path.basename(j.file)} reaches below ${MAX_CAPTURE_PX} px of the full-page capture and is captured on its own; check large text in the image.`);
      await j.el.screenshot({ path: j.file });
      j.done = true;
    }
  }
  for (const j of jobs) if (j.done) written.push(j.file);
}

async function main() {
  const o = parseArgs(process.argv.slice(2));
  fs.mkdirSync(o.outDir, { recursive: true });
  const isUrl = /^https?:\/\//.test(o.input);
  const target = isUrl ? o.input : pathToFileURL(path.resolve(o.input)).href;
  const base = o.name || (isUrl ? new URL(o.input).hostname.replace(/^www\./, '').replace(/\./g, '-') : path.basename(o.input, path.extname(o.input)));

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--hide-scrollbars', '--font-render-hinting=none', '--disable-blink-features=AutomationControlled'],
  });
  const written = [];
  try {
    for (const vp of o.viewports) {
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36');
      if (o.reducedMotion) await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: o.scale, isMobile: vp.width < 600, hasTouch: vp.width < 600 });
      try {
        await page.goto(target, { waitUntil: 'networkidle2', timeout: 45000 });
      } catch (e) {
        console.error(`Warning: loading incomplete (${e.message}), rendering anyway.`);
      }
      await page.addStyleTag({ content: HIDE_CONSENT_CSS }).catch(() => {});
      // the deck shell fits its slides to the window with --deck-zoom; elements are captured at their design size
      if (o.selector) await page.addStyleTag({ content: DESIGN_SIZE_CSS }).catch(() => {});
      if (o.reducedMotion) await page.addStyleTag({ content: END_STATE_CSS }).catch(() => {});
      await eagerImages(page).catch(() => {});
      if (o.full) await autoScroll(page).catch(e => console.error(`Warning: scrolling through the page failed (${e.message}).`));
      const open = await awaitImages(page).catch(() => 0);
      if (open) console.error(`Warning: ${open} image(s) still loading after ${IMAGE_TIMEOUT_MS / 1000} s, rendering anyway.`);
      await page.evaluate(() => document.fonts && document.fonts.ready);
      await new Promise(r => setTimeout(r, o.wait));

      if (o.selector) {
        await renderElements(browser, page, o, base, written);
        await page.close();
        break; // slides and posts have a fixed size, one viewport is enough
      }

      const file = path.join(o.outDir, `${base}-${vp.width}${o.full ? '-full' : '-fold'}.png`);
      const shot = Buffer.from(await page.screenshot({ fullPage: o.full, captureBeyondViewport: o.full }));
      if (o.full) warnTall(shot, path.basename(file));
      fs.writeFileSync(file, shot);
      written.push(file);
      await page.close();
    }
  } finally {
    await browser.close();
  }
  console.log(JSON.stringify({ written }, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });

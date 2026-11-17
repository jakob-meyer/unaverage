#!/usr/bin/env node
// Prints a deck, carousel or document to PDF with Chrome.
//
// Usage:
//   node pdf.mjs <file.html|url> <out.pdf> [options]
//
// Options:
//   --selector ".slide"   one page per matching element (slides, carousel cards), at the element's size on screen
//   --size 1920x1080      with --selector: page size and viewport in CSS px; every element is laid out at this size
//   --wait 1500           wait time in ms after loading
//
// With --selector the elements print as they look on screen, without the viewer around them: their ancestors lose
// transforms, scaling, fixed positions, scroll containers, margins and padding; everything outside the elements is
// hidden (presentation UI, notes, progress bars), a shared <svg><defs> block stays in place at size 0 so gradients,
// patterns, clip paths and masks keep working; slides hidden by a presentation mode are shown; every element gets
// a page of its size on screen (measured before print media applies) without margins and starts on a new page; a
// print rule of the document that lays an element out at another size is a warning, the page keeps the screen size.
// Elements of different sizes get named pages.
// Chrome rounds some page sizes (1080 x 1350 px prints as 1080 x 1350.72 px); the elements are then stretched to the
// printed size in a second pass, so no strip of page background shows at the edge.
// Without --selector the document's own @page rules apply (size and margins, documents in A4 or US Letter); a US
// Letter PDF without an @page size is a warning (Chrome's default; a note when a linked stylesheet could not be read),
// as is a document without .page sheets whose plain @page rule sets a paper size but no margin (printed without
// margin, Chrome's own print dialog adds about 0.4 in); slides sized in px need none.
// With --size, text that reaches beyond the element box on any side (cut off by the new layout) is a warning.
// Always: print media, backgrounds and exact colors (print-color-adjust), no header or footer line, animations and
// transitions cut to their end state, lazy images loaded (at most 8 s), the page scrolled through once (up to
// 120,000 px, about 100 slides) so scroll reveals fire, web fonts awaited; a font that fails to load is named. The page count and page sizes are read back
// from the written PDF; with --selector a count that differs from the elements is a warning, as are text left
// invisible by build steps and surfaces without text or image. Cookie and consent banners are hidden on URLs only,
// never accepted. 1 CSS px is 0.75 pt: 1920 x 1080 px print as 1440 x 810 pt.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { findChrome } from './chrome.mjs';
const CHROME = findChrome();

const USAGE = 'Usage: node pdf.mjs <file.html|url> <out.pdf> [--selector .slide] [--size 1920x1080] [--wait 1500]';

function usage(message) {
  if (message) console.error(message);
  console.error(USAGE);
  process.exit(1);
}

function parseArgs(argv) {
  const [input, out, ...rest] = argv;
  if (!input || !out || input.startsWith('--') || out.startsWith('--')) usage();
  const opts = { input, out, selector: null, size: null, wait: 1500 };
  const value = i => {
    if (rest[i] === undefined || rest[i].startsWith('--')) usage(`Missing value for ${rest[i - 1]}.`);
    return rest[i];
  };
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a === '--selector') opts.selector = value(++i);
    else if (a === '--size') opts.size = value(++i);
    else if (a === '--wait') opts.wait = Number(value(++i));
    else usage(`Unknown option ${a}.`);
  }
  if (opts.size) {
    const [w, h] = opts.size.toLowerCase().split('x').map(Number);
    if (!(w > 0 && h > 0)) usage(`Invalid size "${opts.size}" (use WIDTHxHEIGHT in CSS px).`);
    opts.size = { width: Math.round(w), height: Math.round(h) };
    if (!opts.selector) usage('--size needs --selector; a document sets its page size with @page.');
  }
  if (!(opts.wait >= 0)) usage('Invalid value for --wait.');
  return opts;
}

const HIDE_CONSENT_CSS = `
  [id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i],
  #onetrust-banner-sdk, #onetrust-consent-sdk, .ot-sdk-container, #didomi-host, #usercentrics-root,
  #CybotCookiebotDialog, .cc-window, .truste_box_overlay, [aria-label*="cookie" i] { display: none !important; }
`;

// A PDF is static: animations and transitions end at once in their end state, colors print as set.
const STATIC_CSS = '*,*::before,*::after{animation-delay:0s!important;animation-duration:0.01s!important;' +
  'animation-iteration-count:1!important;transition-delay:0s!important;transition-duration:0.01s!important;' +
  '-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}html,body{scroll-behavior:auto!important}';

// --selector: ancestors (data-pdf-path) become plain blocks, their other children are hidden, every element
// (data-pdf-page) is a page; width, height, display and the named page are set inline per element. Transitions are
// off from here on: under STATIC_CSS every property change would run 0.01 s and be measured half way (transitions
// beat !important). Chrome aligns blocks with justify-items, so a centering viewer would shrink-wrap the slides.
// A hidden child that holds SVG resources (data-pdf-keep, the shared <svg><defs> block) stays rendered at size 0:
// under display: none Chrome drops its gradients, patterns, clip paths and masks from the slides that use them, and
// visibility: hidden would empty its clip paths.
const ISOLATE_CSS = `
  *, *::before, *::after { transition: none !important; }
  [data-pdf-path] { display: block !important; position: static !important; transform: none !important; translate: none !important;
    scale: none !important; rotate: none !important; zoom: 1 !important; width: auto !important; height: auto !important;
    min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important;
    margin: 0 !important; padding: 0 !important; border: 0 !important; overflow: visible !important; columns: auto !important;
    justify-items: normal !important; justify-self: auto !important; align-self: auto !important; align-content: normal !important;
    float: none !important; opacity: 1 !important; visibility: visible !important; content-visibility: visible !important; contain: none !important; }
  [data-pdf-path]::before, [data-pdf-path]::after { display: none !important; }
  [data-pdf-path] > :not([data-pdf-path]):not([data-pdf-page]):not([data-pdf-keep]) { display: none !important; }
  [data-pdf-keep] { position: absolute !important; inset: 0 auto auto 0 !important; width: 0 !important; height: 0 !important;
    margin: 0 !important; padding: 0 !important; border: 0 !important; overflow: hidden !important; contain: strict !important;
    opacity: 0 !important; pointer-events: none !important; transform: none !important; }
  [data-pdf-page] { position: relative !important; inset: auto !important; transform: none !important; translate: none !important;
    scale: none !important; rotate: none !important; zoom: 1 !important; margin: 0 !important; float: none !important;
    justify-self: auto !important; align-self: auto !important; box-sizing: border-box !important;
    min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important; overflow: hidden !important; opacity: 1 !important; visibility: visible !important; content-visibility: visible !important;
    break-inside: avoid !important; break-after: auto !important; }
  [data-pdf-page]:not([data-pdf-page="1"]) { break-before: page !important; }
`;

const IMAGE_TIMEOUT_MS = 8000;
const FONT_TIMEOUT_MS = 15000;
const PX_PER_PT = 4 / 3;

// Scrolls through the page once and back to the top, so scroll reveals and lazy loaders fire; up to 120,000 px, so a
// long deck reveals every slide while an endless feed still ends.
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

// Lazy images to eager, then waits for open images, at most IMAGE_TIMEOUT_MS; returns how many are still open.
function loadImages(page) {
  return page.evaluate(async timeout => {
    for (const img of document.querySelectorAll('img[loading="lazy" i]')) img.loading = 'eager';
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

// Forces a layout (hidden slides start their font loads only once shown), then waits for the fonts;
// returns the families that failed or are still loading.
function awaitFonts(page) {
  return page.evaluate(async timeout => {
    if (!document.fonts) return [];
    void document.body.offsetHeight;
    await Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, timeout))]);
    return [...new Set([...document.fonts].filter(f => f.status === 'error' || f.status === 'loading').map(f => `${f.family.replace(/["']/g, '')} (${f.status})`))];
  }, FONT_TIMEOUT_MS);
}

// Layout sizes of the outermost matches in screen media, before print rules apply (a deck's own print rule such as
// .slide { height: auto } must not turn a slide into a strip); offsetWidth and offsetHeight ignore transforms, so a
// slide scaled by its viewer keeps its size. null for an element without a box (a slide hidden by a presentation mode).
function screenSizes(page, selector) {
  return page.evaluate(async selector => {
    if (document.fonts) await Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 3000))]);
    const all = [...document.querySelectorAll(selector)];
    return all.filter(e => !all.some(o => o !== e && o.contains(e)))
      .map(e => (e.offsetWidth && e.offsetHeight ? `${e.offsetWidth}x${e.offsetHeight}` : null));
  }, selector);
}

// Marks the outermost matches as pages and their ancestors as the path, sizes every page in print media.
// Page size: --size, else the element's size on screen (screenSizes), for slides hidden on screen the most frequent
// size of the visible ones, else the size measured after isolating. Elements whose size in print media, still inside
// their viewer, differs from that page size by more than 1 px are returned as resized: the document's print rules
// change them, or a slide hidden on screen has a size of its own. (After isolating the size says nothing: a slide
// sized by its viewer, position: absolute and inset: 0, shrinks to its content there.)
function isolate(page, selector, size, css, screen) {
  return page.evaluate((selector, size, css, screen) => {
    const all = [...document.querySelectorAll(selector)];
    const els = all.filter(e => !all.some(o => o !== e && o.contains(e)));
    const nested = all.length - els.length;
    const mostFrequent = list => list.slice().sort((a, b) => list.filter(x => x === b).length - list.filter(x => x === a).length)[0];
    const printed = els.map(e => (e.offsetWidth && e.offsetHeight ? `${e.offsetWidth}x${e.offsetHeight}` : null));
    const before = screen && screen.length === els.length ? screen : printed;
    const usual = mostFrequent(before.filter(Boolean));
    // every page block-level, so it neither sits in a line box nor ignores its size; hidden slides take the
    // display of the visible ones
    const common = mostFrequent(els.map(e => getComputedStyle(e).display).filter(d => d !== 'none')) || 'block';
    const block = d => ({ inline: 'block', contents: 'block', 'inline-block': 'block', 'inline-flex': 'flex', 'inline-grid': 'grid', 'inline-table': 'table' })[d] || d;
    for (const e of els) {
      const d = getComputedStyle(e).display;
      e.setAttribute('data-pdf-page', '0');
      e.style.setProperty('display', block(d === 'none' ? common : d), 'important');
      for (let p = e.parentElement; p; p = p.parentElement) p.setAttribute('data-pdf-path', '');
    }
    // hidden children that hold SVG resources the slides may reference by id stay rendered (see ISOLATE_CSS)
    const SVG = 'http://www.w3.org/2000/svg';
    const RES = new Set(['defs', 'linearGradient', 'radialGradient', 'pattern', 'clipPath', 'mask', 'filter', 'marker', 'symbol']);
    for (const p of document.querySelectorAll('[data-pdf-path]')) {
      for (const c of p.children) {
        if (c.hasAttribute('data-pdf-path') || c.hasAttribute('data-pdf-page')) continue;
        if ([...c.getElementsByTagNameNS(SVG, '*')].some(x => RES.has(x.localName))) c.setAttribute('data-pdf-keep', '');
      }
    }
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    const pages = [], skipped = [], resized = [];
    for (const [i, e] of els.entries()) {
      const r = e.getBoundingClientRect();
      const [w, h] = size ? [size.width, size.height] : (before[i] || usual || `${Math.round(r.width)}x${Math.round(r.height)}`).split('x').map(Number);
      if (w < 1 || h < 1) { e.removeAttribute('data-pdf-page'); skipped.push(i + 1); continue; }
      const [pw, ph] = printed[i] ? printed[i].split('x').map(Number) : [w, h];
      if (!size && (Math.abs(pw - w) > 1 || Math.abs(ph - h) > 1)) resized.push({ n: pages.length + 1, page: `${w}x${h}`, print: printed[i], hiddenOnScreen: !before[i] });
      // the rounded size inline, so a fraction of a pixel cannot push content onto an extra page
      e.style.setProperty('width', `${w}px`, 'important');
      e.style.setProperty('height', `${h}px`, 'important');
      e.setAttribute('data-pdf-page', String(pages.length + 1));
      e.setAttribute('data-pdf-size', `${w}x${h}`);
      // text left invisible inside the element (build steps, reveal classes that never ran) and empty surfaces
      // with --size the element is laid out anew: text beyond its box on any side is cut off (decoration may bleed)
      let hidden = 0, text = 0, over = false;
      const box = e.getBoundingClientRect(), range = document.createRange();
      const walker = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, { acceptNode: n => n.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
      for (let n; (n = walker.nextNode());) {
        const el = n.parentElement;
        if (!el || !el.getClientRects().length) continue; // display: none (notes) is intended
        text++;
        if (size && !over) { range.selectNodeContents(n); const r = range.getBoundingClientRect(); if (r.width && (r.left < box.left - 1 || r.top < box.top - 1 || r.right > box.right + 1 || r.bottom > box.bottom + 1)) over = true; }
        for (let a = el; a && a !== e.parentElement; a = a.parentElement) {
          const cs = getComputedStyle(a);
          if (parseFloat(cs.opacity) === 0 || (a === el && cs.visibility === 'hidden')) { hidden++; break; }
        }
      }
      const media = () => [...e.querySelectorAll('img,svg,canvas,video,picture,iframe')].some(m => m.getBoundingClientRect().width > 0) ||
        [e, ...e.querySelectorAll('*')].some(x => getComputedStyle(x).backgroundImage !== 'none');
      pages.push({ n: pages.length + 1, w, h, hidden, empty: !text && !media(), over });
    }
    return { matched: all.length, nested, pages, skipped, resized };
  }, selector, size, css, screen);
}

// Page count and MediaBox sizes in pt, read back from the PDF Chrome writes (page objects uncompressed).
function readPdf(file) {
  const s = fs.readFileSync(file).toString('latin1');
  const pages = (s.match(/\/Type\s*\/Page(?![A-Za-z])/g) || []).length;
  const boxes = [...s.matchAll(/\/MediaBox\s*\[\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*\]/g)]
    .map(m => ({ w: +(m[3] - m[1]).toFixed(2), h: +(m[4] - m[2]).toFixed(2) }));
  return { pages: pages || null, boxes };
}

const fmt = n => String(+n.toFixed(2));
const sizeLabel = b => `${fmt(b.w)} x ${fmt(b.h)} pt (${fmt(b.w * PX_PER_PT)} x ${fmt(b.h * PX_PER_PT)} px)`;

async function main() {
  const o = parseArgs(process.argv.slice(2));
  const isUrl = /^(https?|file):\/\//i.test(o.input);
  if (!isUrl && !fs.existsSync(path.resolve(o.input))) usage(`File not found: ${o.input}`);
  const target = isUrl ? o.input : pathToFileURL(path.resolve(o.input)).href;
  const out = path.resolve(o.out);
  fs.mkdirSync(path.dirname(out), { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--hide-scrollbars', '--font-render-hinting=none', '--disable-blink-features=AutomationControlled'],
  });
  // Chrome can hang on a page that never settles: give up after 180 s instead of blocking the caller
  const watchdog = setTimeout(async () => { console.error('Aborted: PDF not written after 180 s.'); try { await browser.close(); } catch (e) {} process.exit(2); }, 180000);
  let result;
  try {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36');
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    const vp = o.size || { width: 1920, height: 1080 };
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    try {
      await page.goto(target, { waitUntil: 'networkidle2', timeout: 45000 });
    } catch (e) {
      console.error(`Warning: loading incomplete (${e.message}), printing anyway.`);
    }
    if (/^https?:/i.test(target)) await page.addStyleTag({ content: HIDE_CONSENT_CSS }).catch(() => {});
    await page.addStyleTag({ content: STATIC_CSS }).catch(() => {});
    await autoScroll(page).catch(e => console.error(`Warning: scrolling through the page failed (${e.message}).`));
    const open = await loadImages(page).catch(() => 0);
    if (open) console.error(`Warning: ${open} image(s) still loading after ${IMAGE_TIMEOUT_MS / 1000} s, printing anyway.`);
    // the page sizes come from the screen, before the document's print rules apply
    const screen = o.selector && !o.size ? await screenSizes(page, o.selector).catch(() => null) : null;
    await page.emulateMediaType('print');

    const pdf = { path: out, printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false, margin: { top: 0, right: 0, bottom: 0, left: 0 }, timeout: 120000 };
    let iso = null, pageRule = null;
    if (o.selector) {
      iso = await isolate(page, o.selector, o.size, ISOLATE_CSS, screen);
      if (!iso.pages.length) {
        console.error(iso.matched ? `No element for ${o.selector} has a visible box; nothing printed.` : `No elements found for selector ${o.selector}; nothing printed.`);
        process.exitCode = 1;
        return;
      }
      if (iso.nested) console.error(`Note: ${iso.nested} element(s) for ${o.selector} lie inside another match and print on its page.`);
      if (iso.skipped.length) console.error(`Warning: element(s) ${iso.skipped.join(', ')} for ${o.selector} have no visible box, skipped.`);
      // a print rule of the document (.slide { height: auto }) or a slide hidden on screen with a size of its own
      const list = rs => `${rs.map(r => r.n).join(', ')} (page ${[...new Set(rs.map(r => r.page))].join(', ')} px, print layout ${[...new Set(rs.map(r => r.print))].join(', ')} px)`;
      const ruled = iso.resized.filter(r => !r.hiddenOnScreen), guessed = iso.resized.filter(r => r.hiddenOnScreen);
      if (ruled.length) console.error(`Warning: the document's print rules lay out page(s) ${list(ruled)} at another size than on screen; the pages keep the screen size, the content follows the print rules. Check the PDF; --size sets one size for all elements.`);
      if (guessed.length) console.error(`Warning: page(s) ${list(guessed)} are hidden on screen and take the size of the visible elements, but lay out at another size in print. Check the PDF; --size sets one size for all elements.`);
      const sizes = [...new Set(iso.pages.map(p => `${p.w}x${p.h}`))];
      // one named page per size if the sizes differ; the property page also forces a break where the size changes
      const names = sizes.length > 1 ? Object.fromEntries(sizes.map((s, i) => [s, `pdf-size-${i + 1}`])) : null;
      if (names) {
        await page.evaluate(names => {
          for (const e of document.querySelectorAll('[data-pdf-page]')) e.style.setProperty('page', names[e.getAttribute('data-pdf-size')], 'important');
        }, names);
        console.error(`Note: elements in ${sizes.length} sizes (${sizes.join(', ')} px), printed on named pages.`);
      }
      // the page rules sit in one style element that the second pass rewrites: Chrome lets an @page rule with
      // !important in a later style element lose against an earlier one
      const pageCss = dims => `@page { margin: 0 !important; }\n` + sizes.map(s => `@page${names ? ' ' + names[s] : ''} { size: ${dims[s]} !important; }`).join('\n');
      const tag = await page.addStyleTag({ content: pageCss(Object.fromEntries(sizes.map(s => [s, s.replace('x', 'px ') + 'px']))) });
      if (!names) Object.assign(pdf, { width: `${sizes[0].split('x')[0]}px`, height: `${sizes[0].split('x')[1]}px` });
      Object.assign(iso, { sizes, pageCss, tag });
      for (const p of iso.pages) {
        if (p.hidden) console.error(`Warning: page ${p.n}: ${p.hidden} text element(s) invisible (opacity 0 or visibility hidden), probably build steps or reveal classes; check the PDF.`);
        if (p.empty) console.error(`Warning: page ${p.n} shows no text and no image; check the PDF.`);
      }
      const over = iso.pages.filter(p => p.over).map(p => p.n);
      if (over.length) console.error(`Warning: page(s) ${over.join(', ')}: text reaches beyond the --size box and is cut off. --size suits elements sized in vw or percent; for fixed px slides leave it out.`);
    } else {
      // @page size and margin of the document; a linked sheet on file:// or another origin cannot be read
      const rule = await page.evaluate(() => {
        // the margin counts from a plain @page rule only (an @page :first margin leaves the other pages without one)
        const found = { size: false, px: false, margin: false, unreadable: false, sheets: document.querySelectorAll('.page').length };
        const walk = rules => { for (const r of rules) { if (r instanceof CSSPageRule) { const sz = r.style.getPropertyValue('size'); if (sz) { found.size = true; if (/px/.test(sz)) found.px = true; } if (!r.selectorText && ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'].some(k => r.style.getPropertyValue(k))) found.margin = true; } if (r.styleSheet) { try { walk(r.styleSheet.cssRules); } catch (e) { found.unreadable = true; } } else if (r.cssRules) walk(r.cssRules); } };
        for (const s of document.styleSheets) { try { walk(s.cssRules); } catch (e) { found.unreadable = true; } }
        return found;
      });
      // slides sized in px (a deck printed without --selector) need no margin
      if (rule.size && !rule.px && !rule.margin && !rule.unreadable && !rule.sheets) console.error('Warning: the @page rule sets a size but no margin; pdf.mjs prints without margin (Chrome\'s print dialog adds about 0.4 in). Set @page { margin: 20mm } or the margin you want.');
      pageRule = rule;
    }
    const failed = await awaitFonts(page);
    if (failed.length) console.error(`Warning: font(s) not loaded: ${failed.join(', ')}; the PDF uses a fallback there.`);
    await new Promise(r => setTimeout(r, o.wait));
    await page.pdf(pdf);

    let back = readPdf(out);
    if (iso && back.pages === iso.pages.length) {
      // Chrome rounds some page sizes (1350 px prints as 1350.72 px) and leaves the rest of the sheet white, a strip
      // at the edge: print again with the printed size as the page size and the elements stretched to it
      const stretch = {};
      for (const s of iso.sizes) {
        const [w, h] = s.split('x').map(Number);
        const b = back.boxes.find(b => Math.abs(b.w * PX_PER_PT - w) < 2 && Math.abs(b.h * PX_PER_PT - h) < 2);
        if (b && (Math.abs(b.w * PX_PER_PT - w) > 0.01 || Math.abs(b.h * PX_PER_PT - h) > 0.01)) stretch[s] = b;
      }
      if (Object.keys(stretch).length) {
        const resize = sizes => page.evaluate(sizes => {
          for (const e of document.querySelectorAll('[data-pdf-page]')) {
            const s = sizes[e.getAttribute('data-pdf-size')];
            if (s) { e.style.setProperty('width', `${s.w}px`, 'important'); e.style.setProperty('height', `${s.h}px`, 'important'); }
          }
        }, sizes);
        const first = { css: await iso.tag.evaluate(t => t.textContent), width: pdf.width, height: pdf.height };
        const dims = Object.fromEntries(iso.sizes.map(s => [s, stretch[s] ? `${stretch[s].w}pt ${stretch[s].h}pt` : s.replace('x', 'px ') + 'px']));
        await iso.tag.evaluate((t, css) => { t.textContent = css; }, iso.pageCss(dims));
        await resize(Object.fromEntries(Object.entries(stretch).map(([s, b]) => [s, { w: Math.floor(b.w * PX_PER_PT * 100) / 100, h: Math.floor(b.h * PX_PER_PT * 100) / 100 }])));
        if (iso.sizes.length === 1) { const b = Object.values(stretch)[0]; Object.assign(pdf, { width: `${(b.w / 72).toFixed(4)}in`, height: `${(b.h / 72).toFixed(4)}in` }); }
        await page.pdf(pdf);
        back = readPdf(out);
        if (back.pages !== iso.pages.length) {
          // the stretched pages break differently: back to the first print
          await iso.tag.evaluate((t, css) => { t.textContent = css; }, first.css);
          await resize(Object.fromEntries(Object.keys(stretch).map(s => { const [w, h] = s.split('x').map(Number); return [s, { w, h }]; })));
          Object.assign(pdf, { width: first.width, height: first.height });
          await page.pdf(pdf);
          back = readPdf(out);
          console.error('Warning: Chrome rounded the page size; a white strip of up to 1 px may show at the page edge.');
        }
      }
    }
    const counts = {};
    for (const b of back.boxes) counts[sizeLabel(b)] = (counts[sizeLabel(b)] || 0) + 1;
    result = { pdf: out, pages: back.pages, pageSizes: counts };
    if (back.pages === null) console.error('Note: the page count could not be read from the PDF; check it with a PDF viewer.');
    if (iso) {
      result.elements = iso.pages.length;
      if (back.pages !== null && back.pages !== iso.pages.length) console.error(`Warning: ${back.pages} pages for ${iso.pages.length} elements. Content reaches beyond an element or the elements are not separate pages; check the PDF.`);
    } else {
      // the skill's documents carry one .page per sheet; px sizes such as 794 x 1123 overflow A4 by a fraction
      const sheets = pageRule.sheets;
      // Chrome's default sheet is US Letter: a Letter PDF without a readable @page size was probably meant as A4
      const letter = back.boxes.length && back.boxes.every(b => Math.abs(b.w - 612) < 1 && Math.abs(b.h - 792) < 1);
      if (letter && !pageRule.size) console.error(pageRule.unreadable
        ? "Note: the PDF is US Letter, Chrome's default; a linked stylesheet could not be read, so its @page size is unknown. If A4 is meant, check its @page { size: A4 }."
        : "Warning: the PDF is US Letter (Chrome's default) and the document sets no @page size. For A4 set @page { size: A4 } (with margin) in the document.");
      if (sheets && back.pages !== null && back.pages !== sheets) console.error(`Warning: ${back.pages} pages for ${sheets} .page elements. Size .page in mm or in (210mm x 297mm, 8.5in x 11in) and check the @page margin; px sizes can overflow a sheet by a fraction and add a page.`);
    }
  } finally {
    clearTimeout(watchdog);
    await browser.close();
  }
  if (result) console.log(JSON.stringify(result, null, 2));
}

main().then(() => process.exit(process.exitCode || 0)).catch(e => { console.error(e); process.exit(1); });

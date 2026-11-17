# Accessibility

As of 2026-10-08. Checklist, **no legal advice** ([compliance.md](compliance.md) 5). Evidence: high (original), medium (secondary), H (derivation); sources [n] at the end. Minimum type size: [use-cases/README.md](use-cases/README.md) 4; commands, reviewers: [review.md](review.md); G1 to G14: [directions/README.md](directions/README.md).

## 1 Scope

Section 2 always applies to screens and documents that are sent, in addition to the gates in SKILL.md. The standard is WCAG 2.2 AA (G6), the international reference. Who is legally bound, from when and with which fines lives in the market module: EU, Germany, Austria, Switzerland in [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 2; other markets per [compliance.md](compliance.md) 4.

## 2 Accessibility gate

Standard WCAG 2.2 AA (G6) for every screen and every sent document. Where it is also a legal duty (EU and Germany: BFSG, BITV 2.0, EN 301 549): [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 2.

### 2.1 Measurable

`generic-check.mjs` checks contrast (tell H5), overflow at 320 px (tell H1) and minimum type size (tell H4); text over images by eye. The query below checks `lang` (3.1.1), missing `alt` (1.1.1, decoration `alt=""`), one `h1` without a skipped level (1.3.1), targets from 24 x 24 CSS px (2.5.8) and text spacing (1.4.12) (high [1]). Run it with `page.evaluate`; tested on 2026-10-08 with Chrome 154 (test pages with and without errors), English keys retested on 2026-10-15 with Chrome 155:

```js
(() => { const q = s => [...document.querySelectorAll(s)], t = e => (e.innerText || e.ariaLabel || e.tagName).trim().slice(0, 30),
  h = q('h1,h2,h3,h4,h5,h6').map(e => +e.tagName[1]);
  return { lang: document.documentElement.lang, h1: h.filter(x => x == 1).length, skippedLevel: h.some((x, i) => x > h[i - 1] + 1),
    missingAlt: q('img:not([alt])').map(i => i.src.split('/').pop()),
    smallTargets: q('a,button,input,select,textarea,[role=button],[tabindex]').filter(e => { const b = e.getBoundingClientRect();
      return b.width && Math.min(b.width, b.height) < 24 && getComputedStyle(e).display != 'inline'; }).map(t),
    clipped: q('body *').filter(e => /hidden|clip/.test(getComputedStyle(e).overflow) && e.innerText?.trim()
      && (e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1)).map(t) }; })()
```

`smallTargets` are candidates (exempt: inline link, unchanged browser element, an equivalent alternative, enough spacing). Then run `page.addStyleTag({ content: '* { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important } p { margin-bottom: 2em !important }' })` and query again; new entries in `clipped` are red. On scrolling pages look at every product surface, device or card in the first `clipped` list on the image: cut by a section boundary inside the page is a flaw ([craft.md](craft.md) 5.1, point 5), even when the contract calls the crop intentional.

### 2.2 Visual checklist

Every question needs a yes (Studio R4, otherwise the lead agent; high [1], method H).

1. Is focus visible during the tab pass and never fully covered (sticky bar, banner, chat button)? (2.4.7, 2.4.11)
2. Do field borders, checkboxes, toggles, focus rings, chart lines and functional icons reach 3:1 against the neighboring color? (1.4.11)
3. In a grayscale render, are status, errors, links and data series distinguishable? (1.4.1)
4. Is the error state rendered: text at the field with the correction, label visible, required fields stated in text? (3.3.1 to 3.3.3)
5. Does login allow paste, without a puzzle that lacks an alternative, without double entry? (3.3.7, 3.3.8)
6. Can motion over 5 s be paused, at most 3 flashes per second, and does `prefers-reduced-motion` take effect? (2.2.2, 2.3.1)
7. Does the DOM order without CSS carry the same meaning as the visual order? (1.3.2)
8. Does the alt text state the claim, for charts the key message? (1.1.1)
9. At 200% zoom, is everything usable; is hover content dismissible, hoverable, persistent and reachable by keyboard? (1.4.4, 1.4.13)
10. Does every drag gesture have a single-click alternative? (2.5.7)
11. Is text set as text, not in an image? (1.4.5)

### 2.3 By medium

| Medium | Duty and check |
|---|---|
| Web | 2.1 and 2.2 at 320 and 390 px; third-party resources per [compliance.md](compliance.md) 3 (row tracking and third-party resources; EU and DACH: [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 7) |
| PDF | from semantic HTML, `page.pdf()` tags headings, tables, figures with `alt`, language and title by default; bookmarks only with `outline: true` (high, the skill's own test [2]). Never text as paths or images. Check PDF/UA with PAC or veraPDF, otherwise report "PDF/UA unchecked" |
| PPTX for third parties | a title per slide, also hidden; reading order (macOS: selection pane in reverse); alt text of one to two sentences, decoration marked; tables with a header row, without merged cells; videos captioned; PowerPoint accessibility check (high [3]) |
| Email | `lang`, layout tables with `role="presentation"`, alt on every image, readable without images, button as HTML text, plain-text part, 4.5:1 also in dark mode (H) |
| App | targets 44 x 44 pt (iOS, high [4]), 48 x 48 dp (Android, medium); system font at 200% without loss, screen reader names (H) |
| Social | alt text per image, key message also in the post text (H) |

## Sources

1. W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
2. Puppeteer, PDFOptions, the skill's own test: https://pptr.dev/api/puppeteer.pdfoptions
3. Microsoft, Make your PowerPoint presentations accessible: https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25
4. Apple HIG, Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility

Statutes, EN 301 549 and the other legal sources: [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md), Sources.

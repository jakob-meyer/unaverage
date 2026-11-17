# Fonts

As of 2026-10-08 (checks 2026-10-07, sample 2026-10-08, en check 2026-10-15). Stage 4: read 1 to 3 once, from 4 the rows of the direction, 5 and 6 as needed. Evidence strength: high, medium, H (derivation); sources [n] at the end. Display axis and microtypography: [craft.md](craft.md) 6.

## 1 Rules

1. **The world first, then the pool:** which type stands in the subject itself (logo, label, sign, form, machine, archive), which era, which tool (pen, compass, typewriter)? Then check against the pairings; they are starting points (H).
2. **One family first:** weights, widths, italics and optical sizes are often enough. A second family only with a job (data, quote, human voice), then different in construction, close in x-height and stroke weight; two of the same class only as a clear display and text pair (medium [16]).
3. **At most two live families;** exception: a role model with a fixed job per family (for example mono only for values).
4. **Check the figures:** DAT, PRO and the Operate register need tabular figures (column Figures in 5).
5. **Rotation through the log:** within a brand, keep the typeface; across brands the log counts per typeface, not per pairing: if the typeface won for the last three other brands, choose the next equally fitting pairing of the direction and say so with the directions. In several pairings of the catalog: Libre Franklin in 4, Albert Sans, Hanken Grotesk, Epilogue in 3 each (H).
6. **Widespread catalog typefaces** (Google rank up to 100: Work Sans, Figtree, Archivo, Libre Franklin, Public Sans, Schibsted Grotesk) only as a text voice or through an axis (H).
7. **Avoid brand echo:** Geist, Mona Sans, Hubot Sans, IBM Plex, Google Sans, Red Hat, Reddit Mono, Radio Canada Big, Roboto Flex carry the echo of their brand; Schibsted Grotesk slightly.
8. **CI takes precedence:** the house typeface applies, even when it is on a list; generic check with `--allow-fonts "Typeface"`, in the wrap-up "intentional, CI". CI typeface without a web license: name a metrically similar free substitute and mark it.
9. **A new typeface outside the catalog:** read the license first and check it with `scripts/font-check.mjs` (3), then add it to the catalog.
10. **Credits:** every typeface with source and license in the credits file ([templates/credits.md](../templates/credits.md)).
11. No script or handwriting fonts as a substitute for real handwriting (M-HUM in [directions/modules.md](directions/modules.md)).

## 2 Embedding

| Output | Method |
|---|---|
| Direction mockup, preview, contact sheet | Google Fonts CSS2: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?<CSS2 from 4>&display=swap">` |
| Claude artifact | Google CSS2 (the only allowed stylesheet source); others only as a file published alongside with its license text, never Fontshare |
| Live website | self-host (`npm install @fontsource-variable/<name>`, files into the project, or TTF from google/fonts); Bunny only for pairings without an axis (column Bunny in 4). Google CSS sends the visitor's IP address to Google; for the EU and DACH see [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 7 |
| Kit or template for others | font files plus `OFL.txt` (the OFL allows bundling [8]) |
| HTML deck, presented live or sent as a file | embed (files next to the deck or base64); a Google CSS link fails without network, and the layout shifts. Not Fontshare: use an OFL pairing, or the user downloads the files and places them next to the deck |
| PDF, print | embed (Chrome PDF does it); OFL and ITF FFL allow finished documents |
| PPTX for others | only OFL typefaces, include the files plus `OFL.txt` or embed them |

- **No font preload in HTML the user opens as a file** (website before deployment, deck, kit): leave out `<link rel="preload" as="font">`; the `@font-face` rule alone loads the font. Opened from disk, the preloaded font failed in Safari's engine on both pages tested, the fallback broke the layout, and Chrome still loaded it with only a console error (2026-11-02). Over a web server this is untested, so a preload a framework sets on a hosted page can stay.
- **Bunny Fonts:** EU provider, by its own account without logging (medium [4]); only static weights, width always 100%: 20 of 43 pairings lose an axis there (checked). Syntax `https://fonts.bunny.net/css?family=onest:400,500|tilt-warp:400`.
- **Fontsource** via jsDelivr is a third party like Google; as a local npm package it is not (H) [5].
- **Fontshare** (Boska, Switzer, Sentient, Ranade): the ITF Free Font License 2.0 allows commercial use and self-hosting, and forbids subsetting, format conversion and passing the files on to agencies, service providers, editors and template tools. Never bundle, never in artifacts, clients download them themselves; one `link` per family (high [6][7]).
- **Velvetyne** (Le Murmure, Sporting Grotesque): OFL with a Reserved Font Name; do not subset or modify, embed the file unchanged [9].
- "Free" licenses of commercial foundries (for example Pangram Pangram) often apply only to private use: exclude them.
- **System stacks:** `system-ui, -apple-system, "Segoe UI", sans-serif` and `ui-monospace, "SF Mono", Menlo, Consolas, monospace`; no embedding, no license question.

Self-hosted variable typeface:

```css
@font-face {
  font-family: "Archivo";
  src: url("fonts/archivo-vf.woff2") format("woff2"); /* from @fontsource-variable/archivo */
  font-weight: 100 900;
  font-stretch: 62% 125%;
  font-display: swap;
}
h1 { font-family: "Archivo", system-ui, sans-serif; font-stretch: 125%; font-weight: 500; }
.figures { font-variant-numeric: tabular-nums; }
.title { font-variation-settings: "FLAR" 100; } /* axes in capitals only this way */
:root { font-optical-sizing: auto; }
```

`font-stretch` in percent corresponds to `wdth`. CSS2 fetched by a script delivers static TTF depending on the user agent; for self-hosting use Fontsource or google/fonts.

## 3 Character check by output language

Check every typeface against the characters of every output language of the job, plus tabular figures. The check sets live in `font-check.mjs` (option `--lang`, one key per language: `de`, `en`); [scripts/README.md](../scripts/README.md) lists them. German set (16 characters), finding and rules: [markets/german.md](markets/german.md) 5.

State of the catalog (5):

- **de:** checked on 2026-10-07 in Chrome with a negative control (high); sample on 2026-10-08 with the script: 12 of 12 typefaces as in the catalog, negative control passed. Details in [markets/german.md](markets/german.md) 5.
- **en:** checked on 2026-10-15 in Chrome with the script, negative control passed (high): the full en set in all 53 Google typefaces except Noto Serif Display (without minus U+2212), in Boska, Switzer, Sentient and Ranade (Fontshare) and in Commit Mono (Fontsource CSS); Le Murmure, Sporting Grotesque and Ronzino not checked (source file or manufacturer only). The en set (12 characters) shares U+201C, U+2018, U+2026, U+2212 and U+20AC with the de set and adds the closing marks U+201D and U+2019, the dashes U+2014 and U+2013, the pound sign U+00A3, the multiplication sign U+00D7 and the degree sign U+00B0, so a de result alone does not cover English copy: check a new typeface with `--lang en` and enter the result in column en.
- **Language-independent:** without a minus (U+2212) Noto Serif Display, without tabular figures 16 typefaces: all marked in 5.

Rules:

1. Caps only through `text-transform: uppercase` with the `lang` of the output language ([craft.md](craft.md) 6.4); never type special capitals by hand into a typeface that lacks them (capital sharp s, U+1E9E: [markets/german.md](markets/german.md) 5).
2. Negative numbers with a real minus; in Noto Serif Display set numbers in the text typeface.
3. Quotation marks of the output language ([craft.md](craft.md) 6.5), never straight ones; check the closing marks too.
4. Check a new typeface (weight 400; the script does not check hyphenation, ligatures or kerning; `$S` following [scripts/README.md](../scripts/README.md)):

```bash
node $S/font-check.mjs --google "Name A,Name B" --lang de,en
node $S/font-check.mjs --css "https://api.fontshare.com/v2/css?f[]=sentient@400&display=block" --family "Sentient" --lang de,en
node $S/font-check.mjs --file font.woff2 --family "Test name" --lang de,en
```

"FONT NOT LOADED" means the name or URL is wrong; if the negative control fails, the result is unusable. Pass only the languages of the job to `--lang`; for a language without a set, use the nearest one and say so in the wrap-up ([copy.md](copy.md) 8).

## 4 Pairings per direction

CSS2 is the part after `https://fonts.googleapis.com/css2?`, plus `&display=swap`; all 43 returned HTTP 200 with all families on 2026-10-07 (high [2]). Google typefaces: SIL OFL 1.1 without a Reserved Font Name [3]. Bunny "yes": no loss with static weights. A note only where an action is needed; de, en and figures in 5.

| Direction | P | Typefaces and roles | CSS2 | Bunny | Note |
|---|---|---|---|---|---|
| Operate | 1 | system stack with `ui-monospace` | none | not applicable | fastest solution |
| Operate | 2 | Inter 400 to 600 as UI text, Commit Mono for code and IDs | `family=Inter:opsz,wght@14..32,400..600`; Commit Mono via Fontsource | Inter without opsz | Inter here only as UI text; display only with a deliberate axis (tell A1) |
| Operate | 3 | Atkinson Hyperlegible Next 400 to 600, Mono 400 | `family=Atkinson+Hyperlegible+Next:wght@400..600&family=Atkinson+Hyperlegible+Mono:wght@400` | yes | accessible, public authorities |
| Feed | 1 | Figtree 700 subtitles, 400 end card | `family=Figtree:wght@400;700` | yes | widespread, intended here |
| ORD | A | Archivo alone: display wdth 112 to 125 in 500, text wdth 100 in 400, tables wdth 87; Fragment Mono for values | `family=Archivo:wdth,wght@87..125,400..600&family=Fragment+Mono` | no | works only through width |
| ORD | B | Albert Sans alone: display 300, ordering words 600, text 400 | `family=Albert+Sans:wght@300;400;600` | yes | key figures in Fragment Mono |
| ORD | C | Sofia Sans 400, 600; Condensed for tables; Source Serif 4 (opsz high, 500) for titles in documents; public sector Public Sans | `family=Sofia+Sans:wght@400;600&family=Sofia+Sans+Condensed:wght@400;600&family=Source+Serif+4:opsz,wght@8..60,500`; `family=Public+Sans:wght@400;600` | Sofia yes; Source Serif without opsz | |
| PRO | A | Spline Sans 500 display, 400 text; Spline Sans Mono for data | `family=Spline+Sans:wght@400;500&family=Spline+Sans+Mono:wght@400` | yes | Spline Sans without italics |
| PRO | B | Funnel Display 500, Funnel Sans 400, Azeret Mono for values | `family=Funnel+Display:wght@500&family=Funnel+Sans:wght@400&family=Azeret+Mono:wght@400` | yes | strongest figure pairing for dashboards |
| PRO | C | Host Grotesk 400, 500; Petrona 400 and italic only for attitude and quotes | `family=Host+Grotesk:wght@400;500&family=Petrona:ital,wght@0,400;1,400` | yes | |
| DAT | A | Source Serif 4 (opsz high, 600) titles, Public Sans 400 labels and text | `family=Source+Serif+4:opsz,wght@8..60,600&family=Public+Sans:wght@400` | only without opsz | |
| DAT | B | Hanken Grotesk 600, 400; Sometype Mono for values and sources | `family=Hanken+Grotesk:wght@400;600&family=Sometype+Mono:wght@400` | yes | |
| DAT | C | Brygada 1918 600 titles, Libre Franklin 400, 600 labels and text | `family=Brygada+1918:wght@600&family=Libre+Franklin:wght@400;600` | yes | numbers in Brygada with `tabular-nums`, or Golos Text as text |
| STI | A | Familjen Grotesk 400, 500 as the sole voice | `family=Familjen+Grotesk:wght@400;500` | yes | |
| STI | B | Commissioner alone: title FLAR 100 in 400, text FLAR 0 in 300 to 400 | `family=Commissioner:wght,FLAR@300..400,0..100` | no; `@fontsource-variable/commissioner/full.css` | prices with fixed columns or in Familjen Grotesk |
| STI | C | Kalnia 300 title, Albert Sans 300, 400 text; Fontshare alternative Boska with Switzer | `family=Kalnia:wdth,wght@100,300&family=Albert+Sans:wght@300;400`; Fontshare per family | yes (`kalnia:300\|albert-sans:300,400`) | never bundle Fontshare, not in artifacts |
| EDI | A | Imbue (opsz 100, 300 to 500) titles, Piazzolla 400 text, Commit Mono for captions and sources | `family=Imbue:opsz,wght@10..100,300..500&family=Piazzolla:opsz,wght@8..30,400` | no (opsz carries it) | |
| EDI | B | Noto Serif Display (wdth 62.5 to 100, 300 to 400, italic) titles, Libre Franklin 400 text | `family=Noto+Serif+Display:ital,wdth,wght@0,62.5..100,300..400;1,62.5..100,300..400&family=Libre+Franklin:wght@400` | no | negative numbers in Libre Franklin |
| EDI | C | Schibsted Grotesk 700 titles over Literata 400 | `family=Schibsted+Grotesk:wght@700&family=Literata:opsz,wght@7..72,400` | Literata without opsz | slight brand echo |
| HER | A | Libre Caslon Display 400 for the quote, Libre Franklin 400 explanation | `family=Libre+Caslon+Display&family=Libre+Franklin:wght@400` | yes | years not in tables |
| HER | B | Linden Hill Regular and Italic titles, Albert Sans 400 text | `family=Linden+Hill:ital@0;1&family=Albert+Sans:wght@400` | yes | old-style figures for the quote, not for data |
| HER | C | Handjet only for names, figures, navigation; Funnel Sans 400 otherwise | `family=Handjet:wght,ELGR,ELSH@400..700,1..2,0..16&family=Funnel+Sans:wght@400` | no; `@fontsource-variable/handjet` | |
| WRM | A | Gloock 400 titles, Figtree 400, 500 text | `family=Gloock&family=Figtree:wght@400;500` | yes | |
| WRM | B | Literata (opsz 72, 500) titles, Golos Text 400 | `family=Literata:opsz,wght@7..72,500&family=Golos+Text:wght@400` | Literata without opsz | |
| WRM | C | Petrona 500 titles, Atkinson Hyperlegible Next 400 (health); variant Archivo wdth 125 in 400; Fontshare: Sentient with Ranade | `family=Petrona:wght@500&family=Atkinson+Hyperlegible+Next:wght@400`; variant `family=Archivo:wdth,wght@125,400` | pair yes, variant no | |
| DRW | A | Tilt Warp only for titles and numbers, Onest 400, 500 | `family=Tilt+Warp:XROT,YROT@-45..45,-45..45&family=Onest:wght@400;500` | static yes, rotation no | rotation via `font-variation-settings` |
| DRW | B | Onest 400 working voice, Fanwood Text with italic as the human voice | `family=Onest:wght@400&family=Fanwood+Text:ital@0;1` | yes | |
| DRW | C | Golos Text 400 working voice, Bagel Fat One only for large single numbers and rewards | `family=Golos+Text:wght@400&family=Bagel+Fat+One` | yes | Bagel never in columns |
| ONE | A | League Spartan 600 to 800 level 1, 400 sender line | `family=League+Spartan:wght@400..800` | yes | |
| ONE | B | Castoro 400 and italic level 1, Hanken Grotesk 400 sender | `family=Castoro:ital@0;1&family=Hanken+Grotesk:wght@400` | yes | |
| ONE | C | Epilogue 700 to 800 as the sole voice | `family=Epilogue:wght@700;800` | yes | |
| RUL | A | Geologica alone, axes CRSV, SHRP, slnt, wght as parameters of the rule | `family=Geologica:slnt,wght,CRSV,SHRP@-12..0,100..900,0..1,0..100` | no; `@fontsource-variable/geologica/full.css` | |
| RUL | B | Martian Mono (wdth 75 to 112.5) as the variation parameter, Familjen Grotesk 400 reading text | `family=Martian+Mono:wdth,wght@75..112.5,400&family=Familjen+Grotesk:wght@400` | Martian without width | |
| RUL | C | Recursive alone, MONO and CASL switch between sans and mono, seriousness and play (close to code) | `family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1` | no; `@fontsource-variable/recursive/full.css` | |
| MAX | A | Anybody wdth 150 in 800 display, wdth 50 labels; Epilogue 400 text | `family=Anybody:wdth,wght@50..150,400..800&family=Epilogue:wght@400` | no | |
| MAX | B | Unbounded 700 with Rethink Sans 400 | `family=Unbounded:wght@700&family=Rethink+Sans:wght@400` | yes | |
| MAX | C | Dela Gothic One only at poster sizes, Work Sans 400 | `family=Dela+Gothic+One&family=Work+Sans:wght@400` | yes, load only the Latin subset | Work Sans only as text |
| TYP | A | League Gothic (wdth 75 to 100) chapter words and stacked setting, Epilogue 400 text, Martian Mono function layer | `family=League+Gothic:wdth@75..100&family=Epilogue:wght@400&family=Martian+Mono:wdth,wght@75..112.5,400` | no | |
| TYP | B | Fanwood Text italic for feeling, Archivo wdth 125 in 700 for facts, Sometype Mono 11 to 13 px function layer | `family=Fanwood+Text:ital@1&family=Archivo:wdth,wght@125,700&family=Sometype+Mono:wght@400` | no | |
| TYP | C | Le Murmure or Sporting Grotesque (Velvetyne) display, Ronzino (Collletttivo) text | no CSS API; files from GitLab Velvetyne [9], collletttivo.it [10] | no | do not subset (RFN) |
| RAW | A | system stack (Workshop); alternative Martian Mono as the sole voice | `family=Martian+Mono:wdth,wght@75..112.5,400..700` | Martian without width | |
| RAW | B | Big Shoulders (opsz 72, 800 to 900) level 1, Hanken Grotesk 400 frame | `family=Big+Shoulders:opsz,wght@10..72,800..900&family=Hanken+Grotesk:wght@400` | no | name without "Display" since 2025-02-05 |
| RAW | C | Courier Prime 400 long copy, footnotes; Libre Franklin 800 level 1, 400 frame | `family=Courier+Prime&family=Libre+Franklin:wght@400;800` | yes | |

Modules take the typeface of the base; M-HUM: handwriting only as a scan.

## 5 Catalog

Without a note: Google Fonts, SIL OFL 1.1 [1][3]; FS: Fontshare, ITF FFL 2.0 [6][7]. Ranges a..b as in CSS2. Column de "full": all 16 characters of the de set ([markets/german.md](markets/german.md) 5). Column en "full": all 12 characters of the en set, measured on 2026-10-15 (3); "not checked" where only the source file or the manufacturer was available. Figures: std tabular by default, tnum via `tabular-nums`, none. Rank: Google popularity on 2026-10-07. n. c.: not checked.

| Typeface | Class | Axes, weights | de | en | Figures | Rank |
|---|---|---|---|---|---|---|
| Albert Sans | sans | wght 100..900, ital | without U+1E9E | full | none | 173 |
| Anybody | display sans, widths | wdth 50..150, wght 100..900, ital | full | full | tnum | 760 |
| Archivo | sans, widths | wdth 62..125, wght 100..900, ital | full | full | tnum | 46 |
| Atkinson Hyperlegible Mono | legibility mono | wght 200..800, ital | full | full | std | 1119 |
| Atkinson Hyperlegible Next | legibility sans | wght 200..800, ital | full | full | tnum | 413 |
| Azeret Mono | mono | wght 100..900, ital | full | full | std | 517 |
| Bagel Fat One | round display | 400 | full | full | none | 993 |
| Big Shoulders | narrow industrial display | opsz 10..72, wght 100..900 | full | full | none | 511 |
| Brygada 1918 | serif | wght 400..700, ital | full | full | tnum | 689 |
| Castoro | serif | 400, ital | full | full | none | 663 |
| Commissioner | sans with flare | FLAR, VOLM, slnt, wght 100..900 | full | full | none | 306 |
| Courier Prime | typewriter | 400, 700, ital | without U+1E9E | full | std | 216 |
| Dela Gothic One | heavy display | 400 | full | full | tnum | 384 |
| Epilogue | sans | wght 100..900, ital | full | full | tnum | 154 |
| Familjen Grotesk | sans with character | wght 400..700, ital | full | full | std | 532 |
| Fanwood Text | book serif | 400, ital | without U+1E9E | full | std | 955 |
| Figtree | geometric, friendly | wght 300..900, ital | full | full | tnum | 41 |
| Fragment Mono | mono | 400, ital | full | full | std | 627 |
| Funnel Display | display sans | wght 300..800 | full | full | std | 539 |
| Funnel Sans | sans | wght 300..800, ital | full | full | std | 474 |
| Geologica | sans with a sharpness axis | CRSV, SHRP, slnt, wght 100..900 | full | full | tnum | 192 |
| Gloock | contrast serif | 400 | full | full | none | 561 |
| Golos Text | sans | wght 400..900 | full | full | tnum | 253 |
| Handjet | element typeface | ELGR, ELSH, wght 100..900 | full | full | std | 1435 |
| Hanken Grotesk | neutral sans | wght 100..900, ital | full | full | std | 143 |
| Host Grotesk | sans | wght 300..800, ital | full | full | std | 415 |
| Imbue | narrow Didone display | opsz 10..100, wght 100..900 | full | full | none | 1162 |
| Inter (UI text only) | neo-grotesque | opsz 14..32, wght 100..900, ital | full | full | tnum | 5 |
| Kalnia | contrast display | wdth 100..125, wght 100..700 | full | full | none | 1045 |
| League Gothic | narrow display | wdth 75..100, 400 | full | full | none | 250 |
| League Spartan | geometric | wght 100..900 | full | full | none | 183 |
| Libre Caslon Display | Caslon display | 400 | without U+1E9E | full | none | 641 |
| Libre Franklin | Franklin Gothic tradition | wght 100..900, ital | full | full | none | 78 |
| Linden Hill | Goudy revival | 400, ital | without U+1E9E | full | none (old-style) | 1397 |
| Literata | book typeface | opsz 7..72, wght 200..900, ital | full | full | tnum | 222 |
| Martian Mono | mono with widths | wdth 75..112.5, wght 100..800 | full | full | std | 735 |
| Noto Serif Display | display serif, widths | wdth 62.5..100, wght 100..900, ital | without minus | without minus U+2212 | std | 431 |
| Onest | sans | wght 100..900 | full | full | tnum | 174 |
| Petrona | serif | wght 100..900, ital | full | full | tnum | 436 |
| Piazzolla | compact serif | opsz 8..30, wght 100..900, ital | full | full | tnum | 950 |
| Public Sans | neutral, governmental | wght 100..900, ital | without U+1E9E | full | tnum | 82 |
| Recursive | sans and mono | CASL, CRSV, MONO, slnt, wght 300..1000 | full | full | std | 820 |
| Rethink Sans | sans | wght 400..800, ital | full | full | std | 210 |
| Schibsted Grotesk | editorial sans | wght 400..900, ital | full | full | tnum | 96 |
| Sofia Sans | sans | wght 1..1000, ital | full | full | tnum | 211 |
| Sofia Sans Condensed | narrow sans | wght 1..1000, ital | full | full | tnum | 325 |
| Sometype Mono | mono | wght 400..700, ital | full | full | std | 812 |
| Source Serif 4 | transitional serif | opsz 8..60, wght 200..900, ital | full | full | std | 119 |
| Spline Sans | sans | wght 300..700 | full | full | tnum | 485 |
| Spline Sans Mono | mono | wght 300..700, ital | full | full | std | 629 |
| Tilt Warp | display with rotation | XROT, YROT, 400 | without U+1E9E | full | none | 665 |
| Unbounded | wide display sans | wght 200..900 | full | full | tnum | 186 |
| Work Sans | sans | wght 100..900, ital | full | full | tnum | 36 |
| Boska (FS) | serif display | 200..900, variable, ital | without U+1E9E | full | tnum | |
| Switzer (FS) | sans | 100..900, variable, ital | without U+1E9E | full | std | |
| Sentient (FS) | serif | 200..700, variable, ital | full | full | none | |
| Ranade (FS) | sans | 100..700, variable, ital | without U+1E9E | full | none | |
| Commit Mono (OFL, `@fontsource/commit-mono` [11]) | mono | 200..700, ital | without U+1E9E (Fontsource) | full (Fontsource) | std | |
| Le Murmure (OFL with RFN [9]) | narrow display | Regular | full (source file) | not checked | n. c. | |
| Sporting Grotesque (OFL with RFN [9]) | sans display | Regular, Bold | without U+1E9E (source file) | not checked | n. c. | |
| Ronzino (OFL per the manufacturer [10]) | sans | 6 weights with oblique | umlauts per the manufacturer | not checked | n. c. | |

## 6 Lists and replacements

As of 2026-10-08; read on 2026-10-07: Impeccable `OVERUSED_FONTS` (version 2026-09-04), Web Almanac 2025, Anthropic frontend-design [13][14][15]. What is blocked is the display role on persuasion surfaces with the default recipe, not the family; as UI text, Inter, the system font and Roboto are legitimate (medium).

| List | In the generic check script | Visual check only | Rule |
|---|---|---|---|
| L1 web default | Inter (as display or sole voice), Roboto, Open Sans, Lato, Montserrat, Arial, Helvetica, Poppins | Oswald, Nunito, Raleway | as display only with exactly one deliberate, justified axis, otherwise yellow (tell A1) |
| L2 AI taste default | Fraunces, Instrument Sans, Instrument Serif, Geist, Mona Sans, Plus Jakarta Sans, Space Grotesk, Recoleta, DM Sans, Outfit, Bricolage Grotesque, Syne, Sora, Playfair Display, Cormorant (Garamond), Newsreader, IBM Plex (Sans, Serif, Mono), Space Mono, JetBrains Mono | Geist Mono, Lora, Crimson, DM Serif Display, Young Serif | like L1; a field association ("a book needs a serif", "tech needs mono") is no justification |
| L3 watch | | Satoshi, General Sans, Clash Display, Cabinet Grotesk, Inter Display, Inter Tight, Google Sans Flex, Hubot Sans; very widespread without an AI measurement: Manrope, Urbanist, Lexend, Bebas Neue, Anton, Abril Fatface, DM Mono | allowed, not the first choice; block within the same portfolio after one use |

**Gate** following [generic-catalog.md](generic-catalog.md): index at most 2 after triage, no complete cluster; a stricter value from register or direction applies (`ui` at most 1). A list typeface turns red only in the cluster Template display (scale from 5, line height up to 1.0, weight from 700). If the axis is justified in the contract, set `--intentional A1` in the check and name it in the wrap-up.

Replacements as a counter-check; the first choice remains the project world:

| Overused | Display replacement | Text and data replacement | Direction |
|---|---|---|---|
| Inter | Archivo wdth 112 to 125 in 500; Host Grotesk 500; Familjen Grotesk 500 | Inter as UI text; Hanken Grotesk, Funnel Sans | ORD, PRO, STI |
| Roboto, Arial, Helvetica | Sofia Sans 600; Funnel Display 500 | Public Sans, Funnel Sans, system stack (UI) | ORD, DAT, PRO |
| Open Sans, Lato | Albert Sans 300; Petrona 500 | Golos Text, Onest, Atkinson Hyperlegible Next | WRM, DRW |
| Poppins, Montserrat, DM Sans | League Spartan 700; Unbounded 700; Epilogue 700 | Onest, Epilogue, Figtree | ONE, MAX |
| Oswald, Bebas Neue, Anton | Big Shoulders opsz 72; League Gothic wdth 75; Sofia Sans Condensed 800 | Hanken Grotesk | TYP, RAW |
| Nunito, Plus Jakarta Sans | Bagel Fat One (numbers only); Tilt Warp; Onest 600 | Golos Text, Onest | DRW, WRM |
| Raleway | Kalnia 300; Imbue 300 | Albert Sans 300 | STI, EDI |
| Fraunces, Recoleta, DM Serif Display, Young Serif | Gloock; Brygada 1918 600; Castoro; Linden Hill; Libre Caslon Display | Figtree, Hanken Grotesk, Libre Franklin | WRM, DAT, ONE, HER |
| Instrument Serif | Imbue (opsz 100); Noto Serif Display wdth 62.5; italics as a whole line | Piazzolla, Libre Franklin | EDI |
| Instrument Sans, Satoshi, General Sans | Host Grotesk; Rethink Sans | Funnel Sans, Hanken Grotesk | PRO, MAX |
| Geist, Geist Mono | Spline Sans 500; Funnel Display 500 | Spline Sans Mono, Azeret Mono | PRO |
| Mona Sans, Hubot Sans | Archivo wdth 125; Anybody wdth 120 to 150 | Epilogue | ORD, MAX |
| Space Grotesk, Bricolage Grotesque | Familjen Grotesk; Geologica SHRP 100; Commissioner FLAR 100 | Recursive (MONO 0); Commissioner FLAR 0 | STI, RUL |
| Space Mono, JetBrains Mono | only with a data role: Martian Mono, Sometype Mono | Commit Mono, Fragment Mono, `ui-monospace` | RUL, DAT, Operate |
| IBM Plex | Sofia Sans 600 plus Source Serif 4 | Sofia Sans Condensed, Fragment Mono | ORD |
| Outfit, Sora, Syne, Clash Display, Cabinet Grotesk | Unbounded 700; Anybody wdth 150; Dela Gothic One (poster); Familjen Grotesk 700 | Rethink Sans, Work Sans | MAX, STI |
| Playfair Display, Cormorant, Abril Fatface | Imbue; Noto Serif Display; Kalnia; Linden Hill | Piazzolla, Albert Sans 300 | EDI, STI, HER |
| Lora, Crimson, Newsreader | Literata (opsz); Brygada 1918; Source Serif 4 (opsz 60) | Literata, Piazzolla, Source Serif 4 | EDI, WRM, DAT |

**Tell font pairs** count only together with a cream background or an accent word, never alone (counter-example reference: Our World in Data, Lato with Playfair Display; medium).

| Pair | Counts when | Replacement (direction) |
|---|---|---|
| Inter 700 centered with a colored or gradient accent word | accent word (tell A3) or Template display | Archivo wdth 125 in 500, left-aligned, hierarchy through width instead of color (ORD A) |
| Italic serif accent word (Fraunces, Instrument Serif, Playfair, Newsreader) in a sans headline | always (tell A3 red) | two-line title: the subject upright, the idea in italics as a whole line (EDI A, B) |
| Cream near #F4F1EA, contrast serif, terracotta | cluster Cream look | ground tone from material or the main photo, typeface from logo or origin (STI), no L2 serif |
| Playfair Display with Inter, Lato or Montserrat | cream background or accent word | Kalnia 300 with Albert Sans (STI C); Imbue with Piazzolla (EDI A) |
| Instrument Sans with JetBrains Mono; Geist with Geist Mono | accent word or cream background | Funnel Display, Funnel Sans, Azeret Mono only for values (PRO B) |

Not pairs but clusters of their own: Space Grotesk or IBM Plex with mono labels everywhere (Broadsheet, Neon dark; replacement RUL C, ORD C, RAW A), Poppins or Montserrat alone (Template display; replacement ONE C). No replacement needed for UI text in Inter, the system font or Roboto; CI requirements; house typefaces with an origin.

## 7 Maintenance

- Keep the lists dated, compare them every six months (next check April 2027) against Impeccable, Anthropic frontend-design and Web Almanac; tells move in waves.
- Read the Google rank of the catalog again every year [1]; under rank 100, rule 6 applies.
- Enter list changes here and in `scripts/generic-check.mjs` (L1, L2); the column "visual check only" is still missing there.
- Open: compiled Velvetyne files, Fontshare data protection, the original Commit Mono (capital sharp s, U+1E9E; [markets/german.md](markets/german.md) 5), Bunny axes; column en for Le Murmure, Sporting Grotesque and Ronzino (measure the files with `--lang en`).

## Sources

1. Google Fonts, metadata: https://fonts.google.com/metadata/fonts
2. Google Fonts CSS2 API: https://developers.google.com/fonts/docs/css2
3. google/fonts repository: https://github.com/google/fonts/tree/main/ofl
4. Bunny Fonts: https://fonts.bunny.net/about
5. Fontsource API: https://api.fontsource.org/v1/fonts/archivo
6. Fontshare CSS API: https://api.fontshare.com/v2/css?f[]=switzer@400
7. ITF Free Font License 2.0: https://www.fontshare.com/fonts/satoshi
8. SIL OFL FAQ: https://openfontlicense.org/ofl-faq/
9. Velvetyne via GitLab: https://gitlab.com/velvetyne/murmure
10. Collletttivo, Ronzino: https://www.collletttivo.it/typefaces/ronzino
11. Commit Mono: https://github.com/eigilnikolajsen/commit-mono
12. LG Muenchen I, 3 O 17493/20 (Google Fonts and IP addresses): [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 7
13. Impeccable, OVERUSED_FONTS: https://github.com/pbakaus/impeccable/blob/main/crates/foundation/src/constants.rs
14. Web Almanac 2025, Fonts: https://almanac.httparchive.org/en/2025/fonts
15. Anthropic, frontend-design: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
16. Google Fonts Knowledge, Pairing: https://fonts.google.com/knowledge/choosing_type/pairing_typefaces

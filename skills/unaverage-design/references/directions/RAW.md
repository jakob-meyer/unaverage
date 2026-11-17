# RAW Raw and Honest

**In one line:** Content first, visible construction and honest controls: links look like links, buttons like buttons, hard edges instead of effects; it gets loud only in word, naming and material, never in the frame.

**Group** V Expression | **Lead effect** W10 Authenticity (also W2, W11, W13; against W5) | **Loudness** medium to loud (span 2 to 6 of 6) | **Material** no outside material, but attitude, copy and a product that carries them; mode Contrarian only with the user's explicit consent

How to read this, ground rules G1 to G14, registers and combination rules: [README.md](README.md).

## 1 Effect

- Direct, honest, fast, self-ironic, bold. Audience: "They don't pretend, and it fits the product surprisingly well." (H) Developers read the mode **Workshop** as respect for their time; consumers in interchangeable categories read the mode **Contrarian** as attitude.
- Evidence: high for the brands, H for the websites; the category break as an effect pattern is only supported by single cases (H, survivorship bias).
- Neo-brutalism as a look ages, the attitude stays (medium).

## 2 Fits, does not fit

| Field | Content |
|---|---|
| home | Case I5 Merch, Case X4 Docs, changelog, developer portal |
| good | Cases B1 (B2B quiet, B2C Contrarian), B2 B2C, B4 (honest cost breakdown), C1 and C10 for developer tools (Workshop), C9, D2, E1 B2C, E3, F1, F4, G1, G7 (Workshop), I1, I2 (long copy), I4, J1, X1; manifesto, newsroom as a pinboard, naming and microcopy pass |
| accent only | Cases A4, A5 (tone only), B2 B2B, B3, B5, C2, C3, C5, C6, C8, D1, D3, E1 B2B, E2, F2, F3, G2 to G4, G6, H1, H2, I3, J2 to J4, X2, X3, X5 |
| never | Cases A1 to A3 (investor proof following DAT), Cases C4, C7, Case G5 |
| industries | Workshop: dev and creator tools, indie products, media, events, design studios. Contrarian: challengers in interchangeable categories (water, milk, oil, beverages, food), founder brands, Gen Z consumption; as tone only, also SME software and insurtech with consent |
| B2B, B2C | B2B strong in mode Workshop (developers), otherwise B2B only quiet (tone, naming); startup strong as a challenger; B2C strong in mode Contrarian |
| category default | R0 nowhere; the caricature is neo-brutalism (wave 3) |
| does not fit | premium and luxury; risk categories (health, security, defense) except quiet with consent; high-risk enterprise purchases; investor proof; single campaigns without staying power; broad older audiences |

## 3 Principle and evidence

Content legible on all devices, links underlined, buttons like buttons, performance as a function; exactly one level of the category code is broken, and the loudness sits in word, naming and material.

- **Attitude:** brutalistwebsites.com (Deville 2014); Copeland, Guidelines for Brutalist Web Design [1]; NN/g 2017 separates brutalism from antidesign [2]; NN/g 2025 on neo-brutalism [3]; Rams: honest (medium).
- **References inside the corridor:** Reference: Oatly, website (an unadorned frame holds a pinboard of maximally different material; one live typeface, 0 px, one hard gesture; mandatory texts as the stage of the voice; H for the website). Reference: Oatly, posters and "Help Dad" (two reading levels, wood type and marker, footnotes as proof; Cannes Lions 2021 two Gold, high [4]). Reference: Liquid Death (a neutral black-and-white frame with 0 px, loudness only from naming, packaging and collaboration images; Contagious Brand of the Year 2022, high [5]). Reference: Graza (against the luxury code of olive oil, colors from the label; high). Reference: Geist (a grid of 1 px lines instead of card stacks; Workshop, medium). Reference: teenage engineering (text links instead of buttons, mandatory elements in the brand vocabulary; medium).

## 4 Parameters

**Typography**

- Classes: Workshop: system font, mono or a neutral sans as the only family. Contrarian: a heavy narrow display or a wood-type feel for level 1, typewriter as the long-copy voice, a calm live sans for the frame; the display voice often lives only in packaging and image. Every voice has a fixed role; mono only when it relates to code or data (otherwise tell A5).
- Scale: Workshop 1.5 to 3.2; Contrarian 2.1 to 7.5; a poster jump from 8 only in the loud dose (H).
- Weights and tracking: 1 to 3 weights; display either 800 to 900 narrow or a large serif in Regular; live text 400; tracking 0, caps +0.02 to +0.05 em.
- Setting: body text at reading size (16 to 20 px); links underlined; two reading levels: level 1 under three seconds with at most 10 words, level 2 as a reward (long copy, footnotes with proof); naming from one word field for products, programs, navigation and mandatory dialogs; control labels unambiguous; a microcopy pass for consent, footer, errors, newsletter, country selector.
- Pairing A (Workshop): system stack `system-ui` with `ui-monospace`, without embedding; alternative Martian Mono as the sole voice ([fonts.md](../fonts.md), RAW).
- Pairing B (Contrarian): Big Shoulders (opsz 72, 800 to 900) for level 1, Hanken Grotesk 400 for the frame ([fonts.md](../fonts.md), RAW).
- Pairing C (long copy): Courier Prime 400 for long copy and footnotes, Libre Franklin 800 for level-1 lines and 400 in the frame ([fonts.md](../fonts.md), RAW).

**Color**

- Logic: black and white plus link blue (Workshop) or a tone from packaging or label (Contrarian); loud color comes from content and material, not from the UI; color as code in small labels (Oatly); deliberately leave out category codes (a milk alternative without green and leaf).
- Roles: white 70 to 85%, black 10 to 25%, signal at most 5%.
- Saturation strategy (G4): Workshop A or B with a narrower value up to 10% (link blue as the only color carrier); Contrarian without a full-bleed photo A or B up to 10%, with a full-bleed photo or packshot A on the surface, up to 27% in total.
- Starter palette (placeholder; the packaging tone from the real label, recompute contrasts):

| Role | Hex | Contrast (WCAG) |
|---|---|---|
| White, print black | #FFFFFF, #141413 | 18.43:1 |
| Link (Workshop), visited | #0000EE, #551A8B | 9.40:1 and 11.01:1 on white |
| Signal | #C73A0C | 5.20:1 on white; on print black only 3.55:1, so large type only |
| Packaging tone mustard (Contrarian) | #F2D23C | only as an area: print black on it 12.34:1, link on it 6.29:1; as text on white 1.49:1, never |

**Layout:** document flow (Workshop) or a visible frame as a metaphor: window, pinboard, folder, a grid of 1 px lines (Contrarian). High density and text-heavy pages are allowed, hierarchy through tile area; design empty grid cells instead of placeholders; 24 to 32 px of spacing around thick outlines (NN/g, example value). Navigation, forms and the purchase process conventional; packshots in a row; symmetry as a concept when the message has two parties.

**Imagery:** material raw: unedited photos, screenshots, campaign pieces as a pinboard; a fact image (a real problem photo plus a short claim) instead of attitude icons; print traces (wood type, marker, tape) only from real material (M-HUM); a genre quotation with craft in one color (Liquid Death: emblems); stock never as imagery or fact image, only as a stand-in for material and place until the brand's own raw material arrives.

**Form:** radius 0 to 4 px, at most one exception class (for example a pill only for buttons); outlines instead of shadows; exactly one repeated hard gesture (an offset shadow on exactly one class of clickable elements, or a caption bar); no soft effects.

**Signature elements (at least one):**

1. A visible frame as a metaphor (reference: Oatly).
2. One hard gesture, repeated and only on clickable elements.
3. Mandatory texts as the stage of the voice, with unambiguous control labels (consent, footer, country selector).
4. Naming as a system from one word field (reference: Liquid Death).
5. Footnotes back up cheeky claims (reference: Oatly).
6. A fact image instead of an icon.
7. Text links instead of buttons in a fixed position (reference: teenage engineering).
8. Performance as a visible function: no loading screen, instant response.

**Motion:** almost none; feedback under 100 ms; hard and fast without easing gimmicks; at most one marquee, and only with content (tell D10).

**Data:** raw tables with tabular figures, mono for values; a bare number, with a source for third-party numbers ([craft.md](../craft.md) 9.2), or the fact as a footnote.

**Iconography:** Unicode characters and text instead of icons; in Contrarian emblems, stamps and seals in the genre; no standard sets.

## 5 Measurable targets

Modes **Workshop** and **Contrarian**, set in the design contract. Websites on the first screen at 1440 x 900, posters per motif. Corridors are starting values (H) and include all references inside the corridor from section 3; tolerance in [review.md](../review.md).

| Metric | Corridor | Tool field | Reference values |
|---|---|---|---|
| Radii | 0 to 4 px, at most one exception class | `surfaces.radii` | Oatly 0 plus one pill; Liquid Death 0; Geist 4; Graza pill only on buttons |
| Glows, decorative gradients, soft shadows | 0, 0; soft shadows never on cards; darkening does not count | tell C1, C3, visual | all glows 0; Liquid Death 2 darkenings |
| Hard offset shadows | exactly one element class, clickable only; with this direction chosen `--intentional C13` | tell C13, visual | Oatly: one repeated gesture on the tiles |
| Live type families | at most 2 from 5% text share (Workshop 1 plus mono) | `typography.families` | Oatly 1 (99.5%); Liquid Death one family in two widths; Graza 2; teenage engineering 2 house typefaces; Geist 1 plus mono 2% |
| Display share of the live text | 0% (display only in the image) or 4 to 14% | `typography.families` | Oatly 0%; Liquid Death 11.9%; Graza 13.3% |
| Loud axes | 2 to 3 of 5 (material, voice, color, display type, frame); never the frame | visual | Oatly, Liquid Death, Graza |
| Scale | Workshop 1.5 to 3.2; Contrarian 2.1 to 7.5 | `typography.scaleRatio` | Geist 2.86; teenage engineering 3.05; Oatly 2.13; Liquid Death 3.75; Graza 7.5 |
| Saturated pixels | without a full-bleed photo up to 0.10; with a full-bleed photo or packshot up to 0.27, color from the image | pixels `saturatedShare` | "Help Dad" 0.0; Geist 0.003; teenage engineering 0.003 without the cookie notice; Oatly posters 0.004; Oatly web 0.019, tile wall 0.041; Graza 0.154; Liquid Death 0.265 |
| Calm area | Workshop from 0.50; Contrarian 0.25 to 0.60 | pixels `calmAreaShare` | teenage engineering 0.55; Geist 0.67; Liquid Death 0.27; Graza 0.28; "Help Dad" 0.32; Oatly 0.36; Oatly posters 0.45 |
| Card grids | 0 | `surfaces.cardGrids` | all references 0 |
| Words in the first screen | Contrarian 20 to 60 visible; Workshop 40 to 150; poster level 1 3 to 11 | visual, `fold.words` | Liquid Death about 25; Graza 39; Oatly about 40; teenage engineering 50, Geist 99 (tool); Oatly posters 3 to 11 |
| Standard section sequence | at most 2 of 5 template building blocks | tell D9 | |
| Links and buttons | yes or no: links underlined, buttons recognizable by outline or fill | visual | Copeland; teenage engineering blue text link |
| Contrast violations | 0 in the main content | `accessibility.lowContrastTextNodes`, tell H5 | Oatly 0 of 365; Geist 0 of 125; Liquid Death 42 of 400: no model here |
| Generic index | at most 2; house typeface or typewriter through `--allow-fonts` | `generic-check.mjs` | Liquid Death, Geist, teenage engineering 0; Oatly 1 (tell C13), Graza 1 (tell A4), each 0 with `--intentional` |

Mandatory, not a corridor: the key message at first paint without a loader; long copy in print from 9 pt, footnotes from 7 pt; social text from 24 px at 1080 px width; for a second reading level below that the status is only yellow, not red; LCP under 2.5 s where measurable (no tool for it in `scripts/`).

## 6 Dose

| Level | What changes |
|---|---|
| quiet | mode Workshop, or only the voice is loud: document style with a system font, blue underlined links, naming and microcopy with attitude, calm design in black and white (also for B2B and trust categories with consent) |
| medium | frame metaphor, 0 px, outlines, color as a label, display typography on packaging and poster, one hard repeated gesture (reference: Oatly) |
| loud | two strong colors, hard shadows on buttons, a poster jump in the scale, campaign images, genre quotation, collaborations, the wordmark across the full width (reference: Liquid Death) |

## 7 AI trap

- **AI proximity:** high, the third wave of AI genericness (a warning, not a ranking criterion).
- **Caricature:** every card with a 3 px border and an offset shadow, yellow and pink, wobble hover even where nothing is clickable; mono as a tech costume; marquee; rawness as a look over a template frame. Plus "loud" as neon, glitch, gradient text, five colors, stickers and caps everywhere, skull emoji and swear words in every sentence; documented loud brands do the opposite.
- **Mechanism:** trait instead of principle; even distribution of the stylistic device.
- **Review question (also for R1 and R3, before the measurement findings):** Against which code of the category is this aimed, on which one level, do only interactive elements carry the hard gesture, and does the purchase process stay conventional?
- **Countermeasure:** an inventory of the category codes (what do all competitors show?); break exactly one level; count loudness across the five axes; a naming and microcopy pass as its own work step; make the attitude measurable (load time, contrast, legibility); no use in risk categories without consent.
- **Watch list:** tell A5, B4, C13, D9, D10, E3; cluster Neon dark as a mistranslation of "loud"; visual V10, V12, V25 ([generic-catalog.md](../generic-catalog.md)).

## 8 Media notes by register

| Register | What differs |
|---|---|
| Operate | dev tools and CLI-like interfaces with a grid of 1 px lines and states shown with text instead of color alone; otherwise only tone in empty and success states; control labels stay unambiguous |
| Persuade | docs, changelog, newsroom as a pinboard; a neutral shop frame with loudness in packshots, naming and collaboration images; mandatory texts in the voice |
| Read | README style, manifesto, technical specification; a text-first deck for developers with code slides in mono; never for investor proof (there DAT) |
| Feed | text motif tiles, poster logic 4:5, a series with the same gesture; attitude posts, screenshots, founder posts |
| Distance | long-copy poster: level 1 with long-distance effect, level 2 only with dwell time; wood type only from real material |

## 9 Combination

| Role | Partner |
|---|---|
| good accents on RAW | M-HUM (real print and hand traces; Oatly, Graza), MAX (color areas and scattered words; Graza), ONE (poster punchline), TYP (one giant line), HER (one dated retro-tech quotation), ORD as the frame (narrow sans, black and white, hard edges in the shop; Liquid Death) |
| RAW as an accent on | PRO (docs area of a product), TYP (raw frame under the poster logic) |
| only as a moment | ORD and WRM only as tone in the copy: an honest, dry voice for trust categories, with consent |
| never | STI; WRM as a loud mix; M-SPA as an experience; MAX as an equally loud second base; RUL without a deliberate concept (rule against break); glass (tell C4) |

## Sources

1. Copeland, Guidelines for Brutalist Web Design: https://brutalist-web.design/
2. NN/g, Brutalism and Antidesign: https://www.nngroup.com/articles/brutalism-antidesign/
3. NN/g, Neobrutalism: https://www.nngroup.com/articles/neobrutalism/
4. Campaign Asia, Oatly "Help Dad" in Cannes: https://aws2.campaignasia.com/article/oat-of-here-oatlys-top-creative-exitswith-one-last-jab-at-milk/501661
5. Contagious, Liquid Death Brand of the Year: https://www.contagious.com/news-and-views/why-liquid-death-is-our-brand-of-the-year

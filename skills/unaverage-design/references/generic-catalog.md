# Generic catalog

As of 2026-10-16 (catalog v2 of 2026-10-10, word lists recalibrated 2026-10-16). Catalog v2 = `scripts/generic-check.mjs`: 61 tells, 8 clusters. Evidence strength: high, medium, H (derivation); sources [n] at the end. Triage and false alarms: [review.md](review.md) 5 and 18. The index measures closeness to templates, not originality; it never replaces looking.

## 1 Call

From the project folder, `$S` following [scripts/README.md](../scripts/README.md).

```bash
node $S/generic-check.mjs <file.html|url> --medium web|ui|slide|social|document [--selector .slide] [--deck talk|reading] [--allow-fonts "Typeface A,Typeface B"] [--brand-colors "#hex,#hex"] [--intentional "A4,C13"] [--viewport 1440x900] [--out report.json] --md report.md
```

- `--medium` sets the thresholds (default `web`, with `--selector` `slide`); `--selector` measures every surface plus the sequence tells F; `--deck` controls tells F6 and H4 for decks; slides are measured at 1080 height of the stage's own layout (also when transform or zoom scale the stage); with `talk` every content text needs 40 px, and authors mark sources, labels, captions and page numbers with class `source` or `label` so that they may be small down to 18 px (H4).
- Exemptions from the contract: `--allow-fonts` (these typefaces do not count as list typefaces), `--brand-colors` (violet, gradients and glows in brand colors do not count), `--intentional` (status "intentional", not in the index, name it in the wrap-up).
- Calibrated only at `--viewport 1440x900`. Consent banners are only hidden, never accepted. Status: ok, yellow, red, intentional, not run.
- **Not run:** without Python 3 with `pillow` and `numpy` the pixel check cannot run; the report then says `"pixelCheck": "not run"` with the reason, and the pixel tells B2, B4, B5, B7 and D11 (web) carry status "not run": unmeasured, never clean, counted neither in the index nor in clusters. Check them on the image and name them in the wrap-up under "not run or substituted" ([review.md](review.md) 5).

## 2 Index and gate

- **Index** = red tells of groups A to F and P plus the number of clusters. Craft H is a gate of its own and does not count.
- **Classes:** 0 to 1 clean, 2 borderline with a visual check, from 3 generic.
- **Gate:** index after triage at most 2 and no complete cluster; medium `ui` at most 1; a stricter value from direction or register applies.
- **Sequences:** total index = median of the surfaces plus red sequence tells.
- **Invalid:** `blocked` (block, sign-in or error page), `thin` (too little text in the DOM: a whole web page, screen or document under 30 words; a whole post or slide, and with `--selector` every surface, without any word, since a post, slide, poster or card may carry 12 words or fewer, so only a raster image or canvas counts). With several surfaces each surface is checked (`thinSurfaces`); the report is `thin` when all are, or when the selector matched no measurable surface (`noSurfaces`).

**Calibration** (medium; the skill's own measurement on 2026-10-08, 128 pages, sample chosen deliberately): 68 human-designed pages, among them 40 top references and 13 award-winning websites of 2025 and 2026: none from index 3, two miss the gate. 38 AI pages (Lovable, v0, Bolt): 25 from index 3, 31 miss the gate. Strongest signals: tell C10 (humans 0, AI 25), C2 (0 to 13), C3 (0 to 11), D3 (1 to 10), cluster Template stack (0 to 21). Tells E1 and E2 are copy findings, not an AI signal. Slide, social, document and `ui` checked only with test files.

**Recalibration** (2026-10-16, paired against the German 2.5.2 on the same day, 128 pages, strict and with options): all tells except E1, E3 and E6 and all clusters equal on 131 page pairs, apart from measurement noise confirmed by reruns; ROC area 0.92 old and new; the new English list entries passed the false-alarm test on the human pages except "coming soon" (E6, now visual only, [copy.md](copy.md) 5).

## 3 Catalog

Yellow means check, red counts. "Cluster only": never red on its own. Hint: the visual question for yellow. `h1` to `h3` are headings, not tells.

### A Typography

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| A1 | Overused typeface as the voice | family of the largest text; text share of L1, L2 | display from L1 or L2, or list share from 5% | cluster Template display only | exactly one deliberate, reasoned axis? Then `--intentional A1` |
| A2 | Flat hierarchy | largest text divided by the body size (most frequent size) | below 2.0 web; 1.8 slide, social; 1.5 document; 1.2 ui | never | large form outside the DOM text (SVG, image, WebGL)? |
| A3 | Accent word in the main headline | spans of the `h1` with a different color, family, style or text clip | from 1 | italic serif word in a sans `h1` | reason from brand or content? |
| A4 | Eyebrow above headings | label up to 40 characters, caps or letterspaced, up to 48 px above `h1`, `h2`; hero pill: fill or border up to 220 px above the `h1`, up to 6 words, no link | from 1, or a hero pill | share from 0.3 and at least 2 | pill with content (news, date)? Eyebrow once per page (G13) |
| A5 | Monospace as costume | mono share of the text | from 5% | clusters Neon dark, Broadsheet only | tied to code, data or house typeface? |
| A6 | Numbered section labels | short labels up to 10 characters ("01", "02 /", "No. 3", "(01)") | from 1 | cluster Broadsheet only | real sequence? |
| A7 | Crushed display tracking | tracking of the largest text | below -0.04 em | below -0.065 em | |
| A8 | Overlong main headline | words in the block of the largest text | over 9 | never | headline, or statement or quote? |
| A9 | Too many type sizes | sizes per surface | over 4 (slide, social) | never | web no signal; decks through tell F4 |

### B Color and ground

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| B1 | Violet or indigo accent or gradient | fills, borders, gradient stops, button text with hue 250 to 310 degrees, saturation over 0.25 | from 1 fill | gradient with violet in the first screen, or a violet primary action | tied to the brand? Then `--brand-colors` |
| B2 | Cyan on dark | pixels: luminance below 0.15 and cyan 170 to 197 degrees in the palette | yes | never | |
| B3 | Cream background | page background: all channels from 209, red above green above blue, red minus blue 6 to 48 | cream | cluster Cream look only | tied to a material (paper, label)? |
| B4 | Near-black with one neon | mean luminance of the first screen | below 0.15 | cluster Neon dark only | scene reason (G9)? |
| B5 | Permanent dark mode | luminance below 0.2 and tell A2 not ok | yes | never | scene reason? |
| B6 | Unchanged Tailwind and shadcn values | fill colors from 2,000 px² from the default list (list `TAILWIND` in the script, for example #6366f1, #0f172a) | 1 to 2 | from 3 | the default radius 8, 10, 12 px is only named |
| B7 | Timid palette without imagery | colorfulness below 15, saturated below 1%, image area below 10% | 2 of 3 (not ui, document) | never | image from WebGL, video, CSS? |

### C Surfaces and effects

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| C1 | Decorative gradients (first screen, colored) | gradients in the first screen from 3% of the area, a stop with saturation over 0.3 and luminance 0.2 to 0.9; not over an image | 1 to 2 | from 3 | |
| C2 | Gradient text | text with a gradient and `background-clip: text` | 1 to 3 | from 4, or in the `h1` | visible color source (image, logo, product)? |
| C3 | Colored glows and halos | shadows without offset, blur from 15 px, saturated; radial color cloud from 300 px in the first screen | 1 glow | from 2, a halo from 200 px wide in the first screen, or a color cloud | |
| C4 | Glass and blur as decoration | `backdrop-filter: blur` on areas from 2%, except navigation, header, dialog, menu | from 1 | cluster Glass look only | glass over real content? |
| C5 | Colored side stripe | left border over 1 px, saturated, otherwise borderless | from 1 | on a rounded card (radius from 4 px) | quote line without a card? |
| C6 | SaaS card kit | cards (fill, border or shadow, from 120 x 80 px, with text), most frequent radius | from 8 cards with 80% the same radius | cluster Card kit only | |
| C7 | Nested cards | cards in cards | from 3 | never | real panels (product UI)? |
| C8 | Icon tile above heading | square 28 to 72 px with icon and fill or border, up to 40 px above `h2`, `h3` | from 1 | from 3 from a standard set (Lucide, Heroicons, Tabler, Phosphor, Font Awesome and others) | the brand's own icon set? |
| C9 | Emoji as icons | emoji in navigation, buttons, links, headings, lists; flags, globes, color dots excluded | 1 to 2 | from 3 | |
| C10 | One icon set as imagery | Lucide icons against images from 10,000 px² | from 1 | from 10, and more icons than images | |
| C11 | Decorative background grid | `repeating-gradient` or a line grid with a tile up to 80 px | from 1 | never | tied to a map, plan or measurement? |
| C12 | Shape illustration in the hero | SVG from 60,000 px² in the first screen, from 25 basic shapes | yes | never | origin and fixed technique? |
| C13 | Hard offset shadows | shadows without blur, offset from 2 px | 1 to 5 | from 6 | deliberate brutalism? Then `--intentional C13` |
| C14 | Effect load without imagery | gradients plus glows from 40 px plus blurs with an image area below 10% | from 20 (not ui) | never | do WebGL, video or product UI carry the image? |

### D Layout and structure

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| D1 | Centered hero (web) | centered text share of the first screen | from 60%, or from 40% with a centered `h1` | cluster Stock hero only | |
| D2 | Two-button hero (web) | buttons in the first screen without navigation | exactly 2 | cluster Stock hero only | |
| D3 | Card grid as structure | groups of 3 or more cards of equal width | 1 to 2 | from 3, or 2 plus 2 icon tiles | does the content define the fields? |
| D4 | Stat banner | rows of 3 to 6 numbers from 22 px; a number needs a digit; scale and step rows do not count (one unit, left to right a constant nonzero step: 1 2 3, 01 02 03, 2024 2025 2026, 0% 25% 50%; an axis may carry the unit on one end item only or leave a 0 bare, 0 25 50 75 100%; with a unit or sign from 4 items or with 0 at either end, so +10% +20% +30% counts; a single separator is also read as a decimal, 0.000 0.250 0.500) and are named in the value | from 1 row | a row in the first screen with the anchor below 10% | reference value and period per number, source for third-party figures (collected)? |
| D5 | Uniform sections (web) | pattern per section: alignment, columns, image | from 3 sections, most frequent pattern from 50%, or 2 equal neighbors | never | repetition with content (U9)? |
| D6 | Monotonous spacing | share of the most frequent spacing value | over 50% | over 60% with at most 3 values, from 10 measurements | |
| D7 | No image anchor in the first screen | the larger of image area and UI mockup area | below 25% | never | WebGL, video, CSS visual or type as the anchor? |
| D8 | Text load in the first screen | words from body size, without UI mockups | over 100 web, 400 ui, 700 document, 50 slide, 20 social | over 80 slide, 60 social | consent, menus, marquees triaged? |
| D9 | Template section sequence (web) | logo strip, card grid, testimonials, monthly prices, FAQ | 4 of 5 | 5 of 5 | |
| D10 | Decorative perpetual animation | infinite animations; `transition: all` | from 1 infinite animation or 5 `transition: all` | never | marquee, pulsing, cursor as decoration? |
| D11 | Emptiness without direction (web) | calm area of the first screen | over 75% | never | does the emptiness lead to an anchor? |

### E Copy

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| E1 | Marketing buzzwords | 25 terms in the script: streamline, empower, supercharge, seamless(ly), elevate, unleash, next-gen, cutting-edge, world-class, effortless(ly), revolutionize/revolutionise, game-changer, next level, smarter, leverage, unlock, frictionless, best-in-class, state-of-the-art, transformative, unparalleled, "harness the power" (22 English), plus 3 German terms ([markets/german.md](markets/german.md) 6) | from 1 | from 3 hits and 3 per 1,000 words | trade vocabulary instead of a formula? |
| E2 | Dash cadence | em and en dashes (U+2014, U+2013), except between digits or between a letter and a digit | from 1 | from 8 and 1 per 500 characters | allowed singly when deliberate (G14, [copy.md](copy.md) 4); user rules take precedence |
| E3 | Aphoristic cadence | short sentences of up to 8 words that end in "no" or "not" plus one word, plus the pairs "Not (a\|an\|just) X. Y." and "It's not (just) X, it's Y"; German patterns: [markets/german.md](markets/german.md) 6 | 2 | from 3 | |
| E4 | Template chrome in text | middle dot " · "; arrows on links and buttons | from 1 | never | |
| E5 | Placeholder identities and fantasy numbers | Acme, Nexus, John Doe, Jane Doe, Lorem ipsum, dolor sit amet (German names: [markets/german.md](markets/german.md) 6); 99.9%, 10x, 10,000+, 5K+ | round number | placeholder name | truth gate; number with a source? |
| E6 | Gap markers in the presentation view | in the visible text, on every page regardless of `lang`: underscore lines from three characters or as an empty element after a colon, words in square brackets (name, logo, url, text, `x,x`, `xx`), TBD, TODO, and the skill's own markers `[REQUIRED: ...]` and `[open: ...]` and their German forms (each marker counts once); English list, new in 3.0, passed the false-alarm test on 2026-10-16: TBA, TBC, "to be added", "to be confirmed", "details to follow", brackets with title, role, date, day, place, location, city, company, photo, image, source, price, number, placeholder, required, address, contact, client, customer, amount, quote, insert, your; "coming soon" is not measured (visual list in [copy.md](copy.md) 5); German gap words: [markets/german.md](markets/german.md) 6 | 1 | from 2 | a mandatory line in the place of the real medium whose trigger is in the medium, or a field in final form of a decision-critical section ([SKILL.md](../SKILL.md) stage 4, points 4 and 6)? Only then `--intentional E6`, never for a label such as "to be added" or "details to follow": the label is replaced by a field in final form or moves to the review view; never solve it by deleting the section |

The script is the single source of the word lists; they are mirrored in [copy.md](copy.md) 5 (English, plus unmeasured candidates as a visual list) and [markets/german.md](markets/german.md) 6 (German).

### H Craft (a gate of its own, not in the index)

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| H1 | Horizontal overflow | page width over viewport plus 2 px (without `--selector`) | | yes | 320 run |
| H2 | Word break without hyphen | word from 6 characters in type from 22 px across two lines, without `hyphens: auto` | | from 1 | `lang` set to the output language, `hyphens: auto`, never `break-all` |
| H3 | Mixed button radii | radius variants of the buttons | from 3 | never | |
| H4 | Type too small for the medium | spots from 8 characters below: web, ui 12 px; slide 18 px at 1080 height; social 24 px at 1080 width; document 9.33 px (7 pt). Body size below 16 px web, 40 or 22 px slide, 12 px document. Input fields below 16 px at a width below 600 px. Slides measure in the stage's layout px (a viewer's transform or zoom does not count; an SVG stage by its viewBox; SVG text at its rendered size in that layout, also for the body size). Talk deck (`--deck talk`): every content text below 40 px at 1080 height; a content text is a block (nearest element that is neither inline nor an undecorated inline-block or inline-flex wrapper, or an SVG text element; chips, badges and buttons stay blocks), its words summed across inline markup, word-by-word builds and line breaks, only words with letters or digits, screen-reader-only text (a clipping box with one side of at most 1 px, positioned or the text's own element) not counted; body size is that of the content; sources, labels, captions and page numbers are exempt down to 18 px when marked with class `source` or `label` (also `caption`, `footnote`, `credit`, `src`, `data-role="source"` or `"label"`, `figcaption`, `cite`, `small`, a `sup` footnote marker) | 1 spot, or body size too small, or talk content of 1 or 2 words below 40 px | from 3 spots or 1 input field (social never red), or talk content from 3 words below 40 px | web: first screen only; short texts up to 30 characters from 11 px with 4.5:1 excluded; talk: enlarge the content or mark the real source or label |
| H5 | Contrast below WCAG AA (visible area) | text spots in the viewport against the ground at the text point; text over images excluded | 1 to 2 | from 3 | text over images by eye |
| H6 | Main heading not the largest text (web) | `h1` below 80% of the largest text | yes | never | |

### P Product UI (only `--medium ui`)

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| P1 | Template KPI card row | equal KPI cards (number from 1.5 times the body size plus percent) in a row; lines such as "from last month" (German lines: [markets/german.md](markets/german.md) 6) | from 3 cards | from 4 cards and 3 comparison lines | metric with a target, plan or corridor? |
| P2 | Table without density decision | over 10 rows, over 90% with a rule, one row height | yes | never | rules only between groups? |
| P3 | Too many actions in the first screen | buttons in the first screen | over 14 | never | one emphasized main action? |
| P4 | Template chart palette | `--chart-1` to `--chart-5` set, and a chart | yes | never | only colored what should be seen? |

### F Sequences (only with `--selector`)

| ID | Name | Measure | Yellow | Red | Hint |
|---|---|---|---|---|---|
| F1 | Same composition in a row | layout vector of neighboring surfaces (image share, centering, cards, ground color) | 1 equal pair | from 2 pairs, or 3 equal in a row | same content type? Then right |
| F2 | Background without rhythm | ground colors across all surfaces | from 6 surfaces with one ground color | never | |
| F4 | Type sizes across the sequence | sizes across all surfaces | over 10 | over 15 | |
| F6 | Words per surface | median; surfaces over 80 words | median over 12 (talk) or 40 (reading), or 1 surface over 80 | median over 80 | over 80 only on designated text surfaces |

## 4 Clusters

A cluster counts like a red tell and misses the gate on its own. Tell font pairs count only in a cluster with a cream background or an accent word, never alone ([fonts.md](fonts.md) 6).

| Cluster | Condition, all parts |
|---|---|
| Cream look | tells B3 and A1 at least yellow; display serif from L2 without exemption; tell A3 at least yellow or a warm accent (fill 8 to 30 degrees, saturation over 0.35) |
| Neon dark | tell B4 at least yellow; one neon in the pixel image (green 90 to 150 degrees or red up to 20 degrees, saturated 0.2 to 5%); tell A5 at least yellow; tell A4 red |
| Broadsheet | tells A5 and A6 at least yellow; tell A4 red |
| Card kit | tells C6, C8, D3 at least yellow; tell C8 or D3 red |
| Stock hero (web) | tells D1, D2, A4 at least yellow |
| Glass look | from 3 glass areas (tell C4 not intentional); tell C3 or B1 red |
| Template stack | a list or system typeface carries at least 50% of the text; from 10 Lucide icons; not when tell A1 or C10 is intentional |
| Template display | scale from 5; display line height up to 1.0; weight from 700; display from L1 or L2; not when tell A1 is intentional |

Countermoves per cluster: [dialogue.md](dialogue.md) 6.1.

**Replace, don't delete** ([review.md](review.md) 5, point 8): every truly generic tell and every cluster is replaced by an element from the product's world with the same job (warmth, emphasis, movement, guiding the eye), for example a marking or scale from the project world instead of the italic accent word (tell A3), the object itself instead of the icon row (tells C8, C10). Deleting without replacement lowers the index but makes the surface emptier, not better.

## 5 What the index does not see

- Genericness without effects: 7 of 38 AI pages at 0 to 1; template kits and craft errors stay clean (reference: Allbirds, SAP).
- Icon sets other than Lucide only in tell C8; indigo below 250 degrees (Tailwind #6366f1) not in tell B1, only in tell B6.
- Idea, image quality, coherence, motion, data honesty, slide types (strong decks: 3 to 7 types on up to 40 slides).
- Visible placeholders, gray image areas, dashed boxes and on-image hedges (V26); tell E5 detects only placeholder names such as Acme or Lorem, tell E6 only gap markers and labels in fixed wording.
- Props: a highlighter fill alone (background, gradient, pseudo-element) does not make a word of the `h1` an accent word (tell A3); tell C5 does not count side strokes made with `box-shadow: inset` or a pseudo-element; no tell counts a stamp. Check on the image (V20, V25, first-reach prop in [exploration.md](exploration.md) 2).

That is why the visual tells always apply.

## 6 Visual tells V1 to V26

Check on the image before reading the measurement report. Yes means passed; No is a flaw with location. The fix follows the counter-example and replaces the element with one from the product's world (4, Replace, don't delete). V26 is an impact tell: honest but unfinished; a No on anchor, title or main figure misses the ship threshold, as does a label such as "to be added", a dashed box for open items or an on-image hedge in any place. A final-form slot (area in the brand color with an outline or crop of the motif, not gray, not the anchor of the whole work) is not a No when no stand-in shows the claim; it is better than a topic photo without a claim. Also not a No: a mandatory line with a trigger in the medium, and an open item of a decision-critical section in final form (field with a short field label in the typography of the content, none on stage surfaces, at most one per surface and three per sequence).

| No. | Tell | How to spot it | Question | Counter-example |
|---|---|---|---|---|
| V1 | Interchangeable image anchor | fantasy dashboard in front of a glow, floating phone, code as decoration, 3D blob, brain | Does the anchor belong only to this company? | reference: Linear, Vercel |
| V2 | Effect without source | gradient, glow, blob in colors not tied to image, logo or product | Does every effect color visibly come from image, logo or product? | reference: Stripe, Raycast |
| V3 | Feature tile grid | 3 or 6 equal cards: icon in a tinted square, title, two lines | Does the section show the product instead of describing it? | reference: Stripe, DeepL |
| V4 | Stat banner with round numbers | "10x, 99.9%, 10M+", number in a gradient | Does every number have a reference value and period, every third-party figure a collected source? | reference: Ramp, AirPods |
| V5 | Gray logo strip | "Trusted by" without context | Is each customer shown with what they achieved? | reference: IBM, Clay |
| V6 | Testimonial carousel | stars, round photo, praise | Is every proof specific and attributable? | reference: Raycast, Notion |
| V7 | Template sequence | hero, logos, features, testimonials, prices, FAQ, gradient band | Does the dramaturgy follow the content? | reference: Clay, Scout Motors |
| V8 | Stock photo | team at a laptop, spa, concert | Is the image possible only here? | reference: Mercury, Helsing |
| V9 | Category cliché | water in turquoise, fintech in blue-violet with a 3D card, AI in neon, sustainability as a leaf | Does at least one convention break deliberately? | reference: Graza, Oatly |
| V10 | Caricature of loud | neon, glitch, many colors, caps everywhere | Is the frame calm? | reference: Duolingo, Oatly |
| V11 | Caricature of premium or warm | beige without material, Playfair with Inter, terracotta | Is the base tone derived from material or image? | reference: Aesop, Stripe Press |
| V12 | Costume without carrier | black, Geist or Inter, mono labels, grid without content | Does the surface carry without effects too? | reference: Linear, Vercel |
| V13 | Even distribution | style equally strong everywhere | Does the style have a place, are there calm zones? | reference: Lusion, Clay |
| V14 | Decoration as glue | blobs, plants, flat or Corporate Memphis figures | Does every element explain something? | reference: Here Design |
| V15 | Component zoo | every slide, every section a different building block | Does the same content type look the same everywhere? | reference: Koto |
| V16 | Topic title instead of statement | "Problem", "Solution", "Key Findings" | Read one below the other, do the titles tell the story? | reference: Benedict Evans |
| V17 | Data graphic genericness | legend box, rainbow, donut, 3D pie, same-colored trends | Is only colored what should be seen? | reference: Our World in Data, Datawrapper |
| V18 | Product UI genericness | text badges instead of symbols, a rule under every row, Acme, only default and hover | Are empty, loading and error designed, and does color mean only state? | reference: Linear, Carbon |
| V19 | Logo board instead of brand in the scene | large logo in every hero | Is the brand recognizable with the logo covered? | reference: Spotify Wrapped, Deezer |
| V20 | Character or craft as sticker | mascot as tile decoration; generated clay or paper look; CSS stamp with noise texture, print filter or stamp-on animation, loose on the surface instead of on its document | Does the character have a lead role, is the trace real, does the stamp carry fields of the case? | reference: Duolingo, Clay; stamp as a scan (module M-HUM) or on a document with the fields of the through-line |
| V21 | Interchangeable copy | "The Future of X", "Unlock the power of", emoji cheering, mandatory texts without voice | Could the sentence stand only here? | reference: Ramp, Mercury |
| V22 | Mobile only scaled down | cropped desktop image, unreadable UI, long words broken without a hyphen | Is 390 px its own edit? | reference: Wise, Helsing |
| V23 | Formula without content reason | eyebrow, centered heading, icon row in every chapter, only the color changes | Does the section type change where the content changes? | reference: DeepL, Wise |
| V24 | Staging instead of content | loading screen, scroll hijacking, cursor effect as the hero | Is the key message there at first paint? | reference: Lusion |
| V25 | Gesture as gimmick | the same ornament on every element (offset shadow, gloss, grain); the same prop several times per surface (stamp, highlighter fills) | Do only the right elements carry the gesture? | reference: Oatly |
| V26 | Placeholder as anchor or gray photo area | "[open: ...]" as title or main figure, "Photo to follow" as the main motif, gray or dashed image area, `[REQUIRED: ...]` in the motif, a section of "details missing" boxes, dashed boxes or labels "to be added", "details to follow", a label, row or field without a value, empty zone, gap markers ("Source: ____", "[Name]"), on-image hedges (note under the company's own statements, depiction note such as "depiction based on assumptions", source line without a third-party figure), mandatory line without a trigger; except mandatory lines with a trigger, open items of decision-critical sections in final form and the made-up line of a sample case, which is content ([craft.md](craft.md) 5.1, point 9); small ones too | Does the presentation view look finished, with a best-form stand-in that shows the claim, a final-form slot or a field in final form instead of a gap, label or note? | stand-in following [images-and-assets.md](images-and-assets.md); if there is none, a final-form slot (brand color, outline or crop of the motif, not gray, not the anchor of the whole work); open item phrased with what is known, a field only with its value ([review.md](review.md) 15, point 5); the company's own statements without a note, sources of third-party figures collected in a footnote or appendix; markings and depiction notes only in the review view |

## 7 Lists L1 and L2

As of October 2026, in the script (constants `L1`, `L2`), checked on 2026-10-08 (medium [1][2]).

- **L1 web default:** Inter, Roboto, Open Sans, Lato, Montserrat, Arial, Helvetica, Helvetica Neue, Poppins.
- **L2 AI taste default:** Fraunces, Instrument Sans, Instrument Serif, Geist, Mona Sans, Plus Jakarta Sans, Space Grotesk, Recoleta, DM Sans, Outfit, Bricolage Grotesque, Syne, Sora, Playfair Display, Cormorant, Cormorant Garamond, Newsreader, IBM Plex Sans, IBM Plex Serif, IBM Plex Mono, Space Mono, JetBrains Mono.
- **Default stack** (ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif) counts only in the cluster Template stack.
- **Names** are normalized (prefixes, hash, fallback, suffixes such as Latin, Variable, Display); "GeistSans" becomes Geist.
- **Rule:** what is blocked is the display role with the default recipe, not the family. Display from L1 or L2 only with exactly one deliberate, reasoned axis, otherwise tell A1 yellow. UI text in Inter, Roboto or a system font is legitimate; CI requirements through `--allow-fonts`.
- **Replacements, list L3, visual lists:** [fonts.md](fonts.md) 6.

## 8 Waves

Waves of AI genericness. Each wave grows out of the correction of the previous one: countermeasures in prompts and skills ("unexpected fonts", "atmosphere") become the next default (medium [1][2]).

| Wave | Time | Features | Status October 2026 |
|---|---|---|---|
| 1 Tailwind median | 2023 to 2025 | Inter, indigo and violet, gradient from violet to blue, centered hero with two buttons, three icon cards, glows, emoji icons, bento | declining: violet on 5.4% of new Show HN pages (medium [3]) |
| 2 Taste default | from late 2025 | cream with a contrast serif and terracotta; italic serif accent word; near-black with acid green or vermilion; broadsheet with hairlines, radius 0, mono labels; eyebrows; "A · B · C"; arrows on links; Geist, Space Grotesk, Bricolage, Syne | dominant, calibrated as a tell (high [1][2]) |
| 3 Costume default | 2026 | neo-brutalism with black boxes and hard offset shadows, heavy condensed display, decorative grid lines, marquee, pulsing status dot, blinking cursor, mono as a tech costume, stat banner | growing (medium [2]) |
| 4 Prop default | from 2026 | the obvious prop from the office world as the image idea, in a stock form: rotated stamp with a double border, caps in mono or condensed, noise texture, date and initials; yellow highlighter fill, often only the lower half, on the found sentence of a rebuilt document with a footnote number; calendar entry or active row with a colored side stroke and tint | observed (H): in the skill's own test runs in 2026 (one model, with and without the skill), mainly for briefs with a document or office context; on 104 rated live pages no stamp, highlighters and strokes only singly and with a reason; not in the index |

**Spotting a new pattern** (H): Does a detail appear across unrelated briefs? Is it currently recommended as a countermeasure (skills, prompts, galleries)? Does it lack an origin in the subject? Three times yes: report it as "new pattern, unverified" and propose it in stage 7 as a skill improvement.

## 9 Manual check without tools

Without shell or Chrome. The result is called "generic check as a visual check, not measured".

1. **Render** with the environment's tool at 1440 and 390 px, otherwise derive from your own CSS, marked as derived.
2. **V1 to V26** (6).
3. **Clusters** (4) as a yes-no question to image and CSS.
4. **Red thresholds:** count them following column Red in 3; first the strongest signals, tells C10, C2, C3, D3, A4, B1, then copy (tells E1, E2, E3, E5), for decks tells F1, F4, F6.
5. **Helpers in the code:** `grep -o "#[0-9a-fA-F]\{6\}" *.css *.html | sort | uniq -c` against the list `TAILWIND` in the script; `grep -c "lucide"`; `grep -n "backdrop-filter\|background-clip\|box-shadow"`.
6. **Index as a visual value** = red tells plus clusters, gate as in 2; from 2 name it as uncertain.

## 10 Maintenance

- **Every six months** (next check April 2027): compare L1, L2 and the tells against Anthropic frontend-design, Impeccable, the Krebs data and fresh output from v0, Lovable, Bolt and this skill.
- **A new tell** starts yellow. Red or cluster only after a false-alarm test: top references and award-winning websites must not miss the gate more often than today (2 of 68), and AI pages must be detected more often.
- **Change these places together:** `scripts/generic-check.mjs` (code, header comment, as-of date), this file, for typefaces [fonts.md](fonts.md) 6; for word lists also [copy.md](copy.md) 5 and [markets/german.md](markets/german.md) 6, kept identical with the script.
- **Open candidates** (visual only): D2C template kit (pill tiles, pill buttons on photos, floating navigation), covered text, social level 1 below 15% of the format height, data honesty, mockups that differ only in color; highlighter, stamp and side stroke as a measurement (check on 2026-10-10: no AI signal on the web, brief-dependent in the skill's own test runs; check again with fresh output for briefs without a document context).

## Sources

1. Anthropic, frontend-design SKILL.md, version 2026-09-03: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
2. Impeccable, anti-pattern rules and detector: https://github.com/pbakaus/impeccable
3. Krebs, Design slop in Show HN, and design-slop-cop: https://www.adriankrebs.ch/blog/design-slop/ and https://github.com/AdrianKrebs/design-slop-cop

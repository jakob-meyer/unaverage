# Directions: registers, catalog, ranking

As of 2026-10-10. Evidence strength: high, medium (also own measurement of references), H (derivation, to be tested). Sources at the end.

## 1 Purpose and how to read

- **When to read:** kickoff (2, 5, 11), stage 3 (11, [exploration.md](../exploration.md)), accent or CI (12, 13), review (14). Quick: 2, 5 and 11.5 (short calculation over the starter set).
- **Structure:** registers set what the medium allows (2); ground rules always apply (3); a direction is a voice made of anchor, type, color, image, form and motion (5 to 8); modules in [modules.md](modules.md). Datasheets: [ORD.md](ORD.md), [PRO.md](PRO.md), [DAT.md](DAT.md), [STI.md](STI.md), [EDI.md](EDI.md), [HER.md](HER.md), [WRM.md](WRM.md), [DRW.md](DRW.md), [ONE.md](ONE.md), [RUL.md](RUL.md), [MAX.md](MAX.md), [TYP.md](TYP.md), [RAW.md](RAW.md).
- **Principle:** first judgments reward prototypicality (high [1]): typical frame, distinct voice. Distinctiveness comes from origin and material, not from the direction alone. Tables are starting values (H unless stated otherwise); the calculation keeps the most familiar direction from winning, it does not replace judgment.

## 2 Registers

Assignment per case: column Register in [use-cases/README.md](../use-cases/README.md) 2; reading decks Read, talk decks Distance.

| Register | Type scale | Room for the direction | Mandatory |
|---|---|---|---|
| Operate | at most 2.5 per screen, page titles up to 4; consumer app: 2.1, last row | expression only in the main action, state, empty and success states | 2.1 (high) |
| Persuade | per the direction's datasheet (measured 1.5 to 36); largest type not in the template band 48 to 64 px | full | conventional frame, G1 (medium) |
| Read | assertion titles; reading text 16 to 21 px, 45 to 75 characters | medium, the design carries understanding | at most three heading levels (high) |
| Feed | one level-1 element at 15 to 25% of the format height | full, only in the safe area | platform-native for paid social B2C (2.2) |
| Distance | cap height from the reading distance | narrow, one message | long-distance mode (2.3) |

Hybrids (deck sent and presented): reading and talk version from one source. Minimum type size per medium lives only in [use-cases/README.md](../use-cases/README.md); register and direction may go above it, never below.

### 2.1 Register Operate (mandatory layer of every product UI)

The direction supplies the skin (type, action color, forms, empty states, one moment of expression), the register supplies the rules. Typical: ORD team tool, STI solo work, WRM personal health and finance, DRW learning, MAX quiet for expressive apps, RUL category systems, DAT dashboards (medium).

| Parameter | Rule |
|---|---|
| Type | system UI or a working sans, Inter allowed; mono only for codes and IDs; display only in empty and onboarding states ([fonts.md](../fonts.md)); consumer app: last row |
| Scale | at most 2.5 (page titles up to 4; consumer app: last row) and 6 sizes per screen; text on desktop target 13 to 14 px, on mobile 16 to 17 px, input fields on mobile from 16 px (high) |
| Weights | 400, 500, 600; hierarchy through weight and lightness; tabular figures mandatory in number columns |
| Color | 10 to 12 gray steps with fixed roles; accent only for action and focus; status as a dot, symbol or line with a fixed meaning; color only the deviation; themes from a few OKLCH variables |
| Amount of color | team tool at most 2% saturated pixels, personal B2C app up to 22% (medium); a tighter value than G4, recorded in the contract |
| Density | row heights 24, 32, 40, 48, 64 px; groups through spacing instead of a line under every row; dashboard as one screen |
| Form | layers instead of shadows; 1 px panels; radius 0 to 8 px (team) or 12 to 24 px (personal); targets from 24 x 24 CSS px, primary action 44 px (high) |
| States | matrix before the layout (default, hover, focus, active, loading, disabled, error, success, empty, overflow, destructive); done only with rendered empty, loading and error states and overflow at 320 px |
| Data | metric with a reference (target, previous period, plan); trend color by meaning; actual against plan with a dashed target path; sample data with edge cases (long names, zero, negative) |
| Motion | per [modules.md](modules.md), M-MOT (UI timing, at most 400 ms) |
| Onboarding | short, skippable, permissions in context; no card tutorial (high [8]) |
| Material | a skin from STI or WRM needs no photo on operating surfaces; image surfaces (onboarding, empty state with an image) are subject to the material gate (H) |
| Generic | medium `ui` at most index 1; watch for the KPI quartet (tell P1), a single row height, a line under every row, status only as a text badge |
| Consumer app | personal, household, leisure (fit row "C1 Web app B2C" or C3): warmth is part of the function. The ground may be tinted. A second voice from the product's world (a display or serif cut in a second family) is the default and sets content names and key numbers, up to scale 5 against the text and in any weight; leave it out only when field 6 of the contract says why. For that voice this lifts the limits on family, size ratio and weight and takes precedence over the datasheet, so the corridor for `scaleRatio` in field 8 is then up to 5; tabular figures in number columns, 6 sizes per screen and the text and input sizes stay. Each screen carries one color area from the product's world for state or chapter; gray ladder and accent only for action then apply to the controls. Visual check: does it read like a wireframe? (tell B7 is not measured for `ui`) |

Starter palette (the brand color replaces the action color, then recalculate): surfaces #FFFFFF, #F7F7F8, #EFF0F1, #E3E4E6; divider #CDD0D3 (decorative); input border #8A8F96 (3.26:1, non-text); secondary text #5C6168 (6.24 / 5.83 / 5.47:1 on surfaces 1 to 3); muted text #4A4F55 (8.27:1); text #16181A (17.80:1); action #2558D9 (white on it 6.04:1); success #1A7F45 (5.04:1); warning symbol #B7791F (3.64:1, symbol only), warning text #8F5D12 (5.61:1); error #C8372D (5.20:1).

### 2.2 Platform-native feed mode

TikTok, Reels, Stories, Meta ads B2C: like a good post on the platform. The direction supplies only subtitle typography, color box, end card and series constant; moving image goes to a video skill.

- **Material:** real people with consent (EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 9) or the product in use, otherwise do not offer it; no generated people, no staged testimonial.
- **Safe area:** 1080 x 1920 with 14% free at the top, 35% at the bottom, 6% at the sides (safe area 950 x 979); post 1080 x 1350, safe area 1012 x 1080 (high [9]).
- **Typography:** plain sans in subtitle logic, hook about 4 to 7% of the image height (H), at most two lines.
- **Color:** from the camera; overlay as a box #FFFFFF with #111111 or the reverse (18.88:1); brand color as a box only from 4.5:1.
- **Pace:** hook in 1 to 3 s, offer in 3 s, person or product in 2 s; 3 to 5 truly different concepts per ad group (high [10]).
- **Check:** everything important in the safe area; at most 12 words in the first frame; view at 360 px width; subtitles 4.5:1 at the least favorable point (H).

### 2.3 Long-distance mode

Trade fair, roll-up, poster, stage. Cap height 1 cm per 3.6 m (calm) or 2.4 m (busy) of reading distance, plus 15% for all caps (high [11], H for trade fair halls). At most three levels; the message above head height; roll-up with 10 to 17 cm free at the bottom; test at 10% size in 3 to 5 s.

## 3 Ground rules for all directions

| No. | Rule |
|---|---|
| G1 | **Familiar frame, distinct voice** (SKILL.md, principle 4) (high [1][2]) |
| G2 | **Origin question:** every motif, color and effect comes from product, logo, name, customer, scene, data, material or archive; otherwise it is replaced by an element with an origin and the same job; without a job it goes (U1, medium) |
| G3 | **One or two own assets** (color, form, character, type gesture, motion), recognizable on every surface and treated the same way (medium [3][4]); the same element in full form at most three times per sequence, otherwise as a crop or detail; the primitive as a system element does not count ([craft.md](../craft.md) 5.5) |
| G4 | **Declare the saturation strategy:** A color only from images (surface under 1% saturated pixels), B one color carrier (1 to 25%), C color field (over 25%). Direction or register may be tighter; the tighter value applies and goes into the contract. Evenly spread medium saturation without an origin is generic (medium) |
| G5 | **Type:** at most two live families (exception: role model); display from L1 or L2 only with exactly one deliberate, reasoned axis, otherwise yellow (tell A1); choice, license and rotation per [fonts.md](../fonts.md) |
| G6 | **Accessibility:** text 4.5:1, large type and controls 3:1 at the least favorable point; targets from 24 x 24 CSS px, primary action 44 px; visible focus; reduced motion; text in the DOM (high [12]) |
| G7 | **Honesty** per SKILL.md, Limits; missing material as a best-form stand-in plus an asset request ([images-and-assets.md](../images-and-assets.md) 5), never a placeholder as the anchor |
| G8 | **Take principles, never rebuild signatures** (a studio's logos, patterns, characters, stroke styles) |
| G9 | **Dark only with a scene reason** (code, media, night, machine, stage): ground OKLCH L 0.14 to 0.22, accents desaturated, elevation through lighter surfaces instead of glow (medium) |
| G10 | **Language as a layout parameter:** `lang` set to the output language, `hyphens: auto` where the language needs it; plan for the text length of the output language and check the longest word per display line at the check widths of the effort level ([review.md](../review.md) 1); address follows market and audience (contract field 3): the market module sets the default by audience (German: [markets/german.md](../markets/german.md) 2); where a language has formal and informal address, risk categories and older audiences get the formal form, also in B2C, when the category speaks that way. German compounds: [markets/german.md](../markets/german.md) 3 |
| G11 | **Mobile is its own edit:** shorten, rearrange, crop; never legible information in scaled-down UI (medium) |
| G12 | **Base plus at most one accent per surface, two per project** (12) |
| G13 | **Change composition, not color:** at most two identical section types in a row, the eyebrow formula once per page; decks: same content type, same layout, about 7 layouts up to 40 slides (medium) |
| G14 | **Copy is part of the design:** microcopy and mandatory texts in the brand voice, control labels unambiguous; no buzzwords (tell E1) or aphoristic cadence (tell E3); dashes in design copy only singly and deliberately ([copy.md](../copy.md) 4), clustered they are a tell (tell E2); user rules take precedence |

## 4 Effects

Audience sentence in substance, not verbatim (H). One or two effects per brief.

| No. | Effect | Audience sentence | Where it decides |
|---|---|---|---|
| W1 | Reassurance | "Nothing will go wrong here." | B2B purchase with personal risk, finance, health, law (medium [5]) |
| W2 | Competence | "They can really do this." | software purchase, sales, investors |
| W3 | Insight | "Now I get it." | reports, decks, case studies (high [13]) |
| W4 | Control | "I'm making progress." | product UI |
| W5 | Value | "It's worth it." | premium D2C, hardware |
| W6 | Relevance | "This concerns me." | content, employer branding |
| W7 | Wonder | "How did they do that?" | launch, portfolio, gaming |
| W8 | Closeness | "They understand my life." | health, insurance, fintech B2C |
| W9 | Likability | "I like them." | apps, SMB SaaS, series (medium [4]) |
| W10 | Authenticity | "They don't pretend." | feed, founder communication, challengers |
| W11 | Talkability | "Have you seen this?" | challengers, campaigns, OOH (medium [6]) |
| W12 | Joy | "This makes me want it." | B2C launch, events, food (medium [7]) |
| W13 | Recognition | "That's the brand, even without the logo." | identity, kits, series (high [3]) |
| W14 | Punchline | "Understood in one second." | key visual, poster, thumbnail, keynote |
| W15 | Provenance | "They know where they come from." | refresh, anniversary, packaging, industry with a history |

**Lead effect from the situation:** brand building among buyers not yet in the market W11 to W14, W9; activation and purchase W2, W3, W1; risk category W1, W8; premium W5, W7; use W4; feed W10, W11; reading and deciding W3, W1; series and event W13 plus one emotional effect; distance W14, W13; refresh W15, W13. **Choice:** one effect from the desired action, one from category or audience; if a line names several, the first applies; the choice goes into contract field 2.

## 5 Profiles

Core and material: SKILL.md and 9. Groups: I Trust, II Value and origin, III Closeness, IV Idea and system, V Expression.

| Code | Name | Group | Lead effect | Anchor | AI trap (warning) |
|---|---|---|---|---|---|
| ORD | Objective Order | I | W1 | grid, metric, objective photo | broadsheet with mono labels, corporate blue |
| PRO | Product as Proof | I | W2 | product UI in use with a case story | dark stage, Inter or Geist, glow, bento (wave 1) |
| DAT | Data with a Point | I | W3 | chart or metric with a reference under an assertion title | KPI cards, stat banner, topic titles |
| STI | Stillness and Material | II | W5 | object in light plus directed emptiness | cream, contrast serif, terracotta (wave 2) |
| EDI | Editorial Story | II | W6 | full-bleed photo plus display word | serif with caps labels, stock with a black gradient |
| HER | Heritage and Quotation | II | W15 | uncovered heritage, old against new | retro kitsch, coat of arms, "Since 1890" |
| WRM | Warm Closeness | III | W8 | person in a scene, soft panels | stock people, beige, blobs, leaves |
| DRW | Drawn World | III | W9 | character or illustration of its own | Corporate Memphis, 3D clay |
| ONE | The One Idea | IV | W14 | one visual punchline | clip-art metaphor |
| RUL | One Rule, Many Forms | IV | W13 | primitive with named states | forms without a rule |
| MAX | Contained Maximalism | V | W12 | color field or vessel with one large element | confetti, violet-pink, everything equally loud |
| TYP | Type as Image | V | W11 | oversized type plus function layer | glitch, outline, template headline |
| RAW | Raw and Honest | V | W10 | raw content in a visible frame; modes Workshop, Contrarian | neo-brutalism, marquee, mono as costume (wave 3) |

## 6 Distinction over six axes

Anchor (5) plus five axes; directions differ on at least three. Light or dark, centering and color alone do not separate (medium). Mockups: two of five levels measurable ([exploration.md](../exploration.md)).

| Code | Type voice | Color logic (G4) | Density (words in the first screen, web) | Form | Signature moment |
|---|---|---|---|---|---|
| ORD | one sans, weight inverse to size | A or B, signal under 3% | Portal 55 to 235, Poster 10 to 30 | 0 to 4 px, hairline | category list at title size |
| PRO | sans with an intermediate weight, mono only for data | B tight up to 2% (state) or B 14 to 20% (color motif) | 20 to 80 plus UI text | 1 px panels, 6 to 12 px | logo geometry as light, live counter |
| DAT | assertion title, sans down into the chart | gray plus one accent under 5% of the chart area | reading deck 15 to 40 per slide | 0 px, hairline | title as legend |
| STI | house or logo typeface, titles 400 to 600 | A, color from the object | 0 to 30 | 0 px or one large radius | claim, proof image, footnote |
| EDI | contrast serif, italic as the second voice | A or B tight up to 5%, ink under 3% | 5 to 40 | 0 px, passe-partout | chapter word in the image |
| HER | historical display plus a contemporary sans | archive or era palette | 20 to 60 | from the heritage | old and new in the same crop |
| WRM | humanist sans | B, warm neutrals, color from the photo | 30 to 75 | 12 to 48 px, pill | UI fragment over an everyday photo |
| DRW | calm sans, character typeface under 12% | A or B (line on white) or C (color world) | 30 to 80 | from the character | the character reaches into the product |
| ONE | one typeface, 1 to 3 sizes | 1 to 3 solid colors or a photo | level 1 at most 7 | basic shape only with meaning | rebus, result instead of product |
| RUL | one family with an expressive axis | color as code with meaning | 30 to 150 | from the primitive | logo as a kit, generator |
| MAX | bold display 700 to 900 plus a calm sans | C (color field) or B (concentration) | 4 to 12 per social card | basic shapes, pattern from the logo | cropped giant number |
| TYP | display with character plus function layer | black, white plus one solid color | 10 to 40 | bars, registration marks | chapter word as a place-name sign |
| RAW | system, mono or narrow heavy display, fixed roles | black, white plus link blue or a label color | Contrarian 20 to 60, Workshop 40 to 150 | 0 to 4 px, outlines | mandatory texts as the stage |

## 7 Effect matrix

++ lead effect (3), + secondary effect (2), empty neutral (1), x works against (0); numbers for criterion W (H).

| | W1 | W2 | W3 | W4 | W5 | W6 | W7 | W8 | W9 | W10 | W11 | W12 | W13 | W14 | W15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ORD | ++ | + | + | + | | | | | | | x | x | + | | |
| PRO | + | ++ | + | + | | | | | | | | | + | | |
| DAT | + | + | ++ | | | + | | | | | | | | + | |
| STI | + | | | + | ++ | + | + | | | | | | + | | |
| EDI | | | + | | + | ++ | | + | | + | | | | | + |
| HER | + | | | | + | + | | | | | | | + | | ++ |
| WRM | + | | | | | + | | ++ | + | + | | + | | | |
| DRW | | | + | | x | | | + | ++ | | | + | + | | |
| ONE | | | + | | | | | | + | | + | | + | ++ | |
| RUL | + | + | | | | | | | | | | | ++ | + | |
| MAX | x | | | | x | | | | + | | + | ++ | + | | |
| TYP | | | | x | | | + | | | | ++ | + | + | + | |
| RAW | | + | | | x | | | | | ++ | + | | + | | |

For B2B show a bold option from group IV or V (fame evidence, medium [6]).

## 8 Map

Loudness 0 to 6 (saturation, large form, contrast jumps, motion), expressiveness 0 to 6 (systematic to expressive: authorship, image share, grid break); mean and span from quiet to loud (H). Basis for A and the distance classes.

| Code | STI | ORD | DAT | PRO | WRM | ONE | RUL | EDI | HER | DRW | RAW | MAX | TYP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Loudness | 0 | 1 | 1 | 2 | 2 | 2 | 3 | 3 | 3 | 3 | 4 | 5 | 5 |
| Span | 0 to 2 | 0 to 3 | 0 to 3 | 1 to 3 | 1 to 3 | 1 to 4 | 2 to 5 | 2 to 4 | 2 to 4 | 2 to 5 | 2 to 6 | 4 to 6 | 4 to 6 |
| Expressiveness | 2 | 0 | 1 | 1 | 3 | 5 | 2 | 3 | 4 | 5 | 3 | 5 | 6 |
| Span | 1 to 3 | 0 to 1 | 0 to 3 | 0 to 2 | 2 to 4 | 3 to 6 | 1 to 3 | 2 to 4 | 3 to 5 | 4 to 6 | 2 to 4 | 4 to 6 | 5 to 6 |

**The AI median is a band** across the left half of the map (waves 1 to 3 in the AI trap column, 5); moving on the map alone creates no distinctiveness (medium).

## 9 Material gate (before any scoring)

| Code | Required material | Without material |
|---|---|---|
| PRO | presentable product UI (a beta is enough), a strong simple mark or a color motif of its own | excluded (otherwise a costume); check again once the product is finished |
| DAT | real data with a source; in the Operate register realistic sample data per G7 | excluded; report the missing key message back to the user; if a number is missing, never a placeholder metric as the anchor, use another anchor form |
| STI | object in photo quality | downgraded (M 1); request a packshot spec; until then the object as a drawing or a stand-in |
| EDI | the brand's own photography, client material or a CC0 archive | downgraded; request an image brief; stock does not carry it permanently, only as a stand-in |
| HER | heritage inventory or an archive with a real connection to the brand | only as a dated era quotation with a reason |
| WRM | photos of real people with consent | downgraded; no generated people; stock faces only as mood |
| DRW | commissioned illustration or a very simple SVG technique that an agent draws consistently | downgraded; free flat sets are generic |
| ORD, ONE, RUL, MAX, TYP, RAW | no third-party material; ONE needs an idea from the subject, RUL a primitive, MAX an ownable lead color, TYP a typeface with character, RAW an attitude | |

**Stock and stand-ins:** freely licensed photos do not carry a direction permanently; with them alone it stays downgraded (M 1). They may serve as stand-ins for material, place, situation or problem, depending on the claim of the surface, until the brand's own material arrives, with credits and never as real people, customers or the real product ([images-and-assets.md](../images-and-assets.md) 5).

## 10 Fit matrix: case by direction

Fit **3** home, **2** good, **1** accent only or with a condition, **0** excluded. Case IDs, registers and notes per case in [use-cases/README.md](../use-cases/README.md). Cases A5, B4, B5, C8 to C10, D3, G7, J4, X5 and the row C1 Web app B2C new (H). Cases without a row take the fit of the closest related case, noted in the contract.

| Case (ID) | ORD | PRO | DAT | STI | EDI | HER | WRM | DRW | ONE | RUL | MAX | TYP | RAW |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A1 Pitch deck | 2 | 2 | 3 | 1 | 2 | 1 | 1 | 1 | 2 | 1 | 0 | 1 | 0 |
| A2 Sales deck | 2 | 3 | 3 | 1 | 2 | 1 | 1 | 1 | 1 | 2 | 0 | 0 | 0 |
| A3 Investor update | 2 | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| A4 Internal presentation | 3 | 1 | 3 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 1 |
| A5 Proposal | 3 | 2 | 3 | 1 | 2 | 1 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| B1 Landing page B2B | 3 | 3 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 0 | 1 | 2 |
| B1 Landing page B2C | 1 | 2 | 1 | 2 | 2 | 1 | 3 | 3 | 2 | 2 | 3 | 2 | 2 |
| B2 Website B2B | 3 | 3 | 1 | 2 | 2 | 2 | 2 | 2 | 1 | 3 | 0 | 1 | 1 |
| B2 Website B2C | 2 | 1 | 0 | 3 | 3 | 2 | 3 | 3 | 1 | 2 | 2 | 2 | 2 |
| B3 Blog header, OG | 2 | 1 | 2 | 1 | 2 | 1 | 1 | 2 | 3 | 3 | 2 | 2 | 1 |
| B4 Pricing page | 3 | 2 | 3 | 1 | 0 | 0 | 1 | 1 | 1 | 2 | 1 | 0 | 2 |
| B5 Listing | 1 | 2 | 2 | 3 | 2 | 2 | 3 | 1 | 1 | 2 | 2 | 1 | 1 |
| C1 Web app B2B | 3 | 1 | 2 | 3 | 0 | 0 | 2 | 1 | 0 | 2 | 1 | 0 | 2 |
| C1 Web app B2C | 2 | 1 | 1 | 3 | 0 | 0 | 3 | 2 | 0 | 2 | 2 | 0 | 1 |
| C2 Dashboard | 3 | 1 | 3 | 2 | 0 | 0 | 2 | 0 | 0 | 2 | 1 | 0 | 1 |
| C3 Mobile app | 2 | 1 | 1 | 3 | 0 | 0 | 3 | 2 | 0 | 2 | 2 | 0 | 1 |
| C4 Onboarding | 2 | 1 | 1 | 2 | 1 | 0 | 3 | 3 | 1 | 1 | 2 | 0 | 0 |
| C5 States | 2 | 1 | 1 | 2 | 0 | 0 | 2 | 3 | 2 | 2 | 1 | 0 | 1 |
| C6 Settings | 3 | 1 | 1 | 3 | 0 | 0 | 2 | 0 | 0 | 1 | 0 | 0 | 1 |
| C7 Store screenshots | 1 | 3 | 1 | 1 | 1 | 0 | 2 | 2 | 1 | 2 | 2 | 1 | 0 |
| C8 Forms | 3 | 1 | 1 | 3 | 0 | 0 | 2 | 1 | 0 | 1 | 1 | 0 | 1 |
| C9 Design system | 3 | 1 | 2 | 2 | 1 | 1 | 2 | 2 | 0 | 3 | 2 | 0 | 2 |
| C10 AI UI | 3 | 1 | 2 | 3 | 0 | 0 | 2 | 1 | 0 | 2 | 1 | 0 | 2 |
| D1 Logo | 1 | 0 | 0 | 1 | 1 | 2 | 1 | 1 | 3 | 3 | 1 | 2 | 1 |
| D2 Identity light | 2 | 1 | 0 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 2 | 2 |
| D3 Stationery | 3 | 0 | 0 | 3 | 1 | 2 | 1 | 1 | 2 | 3 | 1 | 2 | 1 |
| E1 Social B2B | 2 | 2 | 3 | 1 | 2 | 1 | 1 | 2 | 3 | 2 | 1 | 2 | 1 |
| E1 Social B2C | 1 | 1 | 1 | 2 | 2 | 1 | 3 | 2 | 3 | 2 | 3 | 3 | 2 |
| E2 Carousel | 2 | 2 | 3 | 1 | 2 | 1 | 1 | 2 | 2 | 3 | 2 | 1 | 1 |
| E3 Reel cover | 0 | 1 | 1 | 1 | 2 | 1 | 2 | 2 | 2 | 2 | 3 | 3 | 2 |
| F1 Meta ad | 0 | 2 | 1 | 1 | 2 | 1 | 3 | 2 | 2 | 2 | 2 | 2 | 2 |
| F2 LinkedIn ad | 2 | 3 | 3 | 1 | 1 | 1 | 1 | 2 | 2 | 2 | 1 | 1 | 1 |
| F3 Display ad | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 3 | 2 | 2 | 2 | 1 |
| F4 Thumbnail | 0 | 1 | 1 | 0 | 2 | 1 | 2 | 2 | 3 | 1 | 2 | 2 | 2 |
| G1 Email | 2 | 1 | 1 | 2 | 3 | 1 | 2 | 2 | 1 | 2 | 1 | 1 | 2 |
| G2 Case study | 2 | 2 | 3 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| G3 Whitepaper | 2 | 1 | 3 | 1 | 2 | 1 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| G4 Factsheet | 3 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| G5 Infographic | 1 | 0 | 3 | 0 | 1 | 1 | 1 | 2 | 2 | 2 | 2 | 1 | 0 |
| G6 Report | 2 | 1 | 3 | 1 | 3 | 1 | 1 | 2 | 1 | 2 | 1 | 1 | 1 |
| G7 Transactional | 3 | 2 | 2 | 2 | 0 | 0 | 1 | 1 | 0 | 2 | 0 | 0 | 2 |
| H1 Webinar, event | 2 | 1 | 1 | 1 | 2 | 1 | 1 | 2 | 2 | 3 | 2 | 3 | 1 |
| H2 Trade fair, roll-up | 3 | 2 | 1 | 2 | 2 | 1 | 1 | 2 | 3 | 2 | 2 | 3 | 1 |
| I1 Flyer | 2 | 1 | 1 | 1 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| I2 Poster | 1 | 1 | 1 | 2 | 2 | 2 | 1 | 2 | 3 | 2 | 2 | 3 | 2 |
| I3 Business card | 2 | 0 | 0 | 3 | 1 | 2 | 1 | 1 | 2 | 3 | 1 | 2 | 1 |
| I4 Packaging | 1 | 0 | 0 | 3 | 2 | 3 | 2 | 2 | 2 | 2 | 3 | 2 | 2 |
| I5 Merch | 0 | 0 | 0 | 1 | 1 | 2 | 1 | 2 | 2 | 3 | 3 | 3 | 3 |
| J1 Employer branding | 1 | 1 | 1 | 1 | 3 | 2 | 3 | 2 | 2 | 2 | 1 | 2 | 2 |
| J2 Launch kit | 1 | 3 | 1 | 3 | 2 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 1 |
| J3 Press kit | 3 | 2 | 2 | 2 | 2 | 2 | 1 | 1 | 1 | 2 | 0 | 0 | 1 |
| J4 Templates | 3 | 1 | 2 | 1 | 1 | 1 | 1 | 1 | 0 | 3 | 1 | 1 | 1 |
| X1 Microsite | 1 | 2 | 1 | 2 | 3 | 2 | 1 | 2 | 3 | 2 | 2 | 3 | 2 |
| X2 Share cards | 0 | 1 | 3 | 0 | 1 | 1 | 1 | 2 | 2 | 2 | 3 | 2 | 1 |
| X3 Refresh | 2 | 0 | 0 | 2 | 2 | 3 | 1 | 1 | 2 | 3 | 1 | 1 | 1 |
| X4 Docs, changelog | 3 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 3 |
| X5 Keynote, stage | 1 | 2 | 2 | 3 | 2 | 1 | 1 | 1 | 3 | 2 | 2 | 3 | 1 |

## 11 Ranking in six steps

**Inputs** (unknowns as assumptions in the contract): case (C), desired effect (W), trade-off pairs and audience (A), brand (B, asset), material present, promised or missing (M, D), competition (R0). Calculate at prompt level before the kickoff only on the path M1, otherwise once after the answers ([dialogue.md](../dialogue.md) 1).

### 11.1 Step 1: register and gates

1. **Register** (2): Operate makes 2.1 mandatory, the ranking chooses only the skin; paid social B2C with people additionally 2.2; Distance additionally 2.3.
2. **Exclude:** fit 0; material gate "excluded" (before the answers, UI or data material counts only if the prompt names it); load-bearing traits the user excluded ("no illustration" excludes DRW, "no stock people" only the caricature of WRM); contradiction with the CI (B 0).
3. **Limit the dose:** RAW in risk categories only quiet and with the user's approval; M-SPA in Quick only static.

### 11.2 Step 2: six criteria per direction (0 to 3)

| Criterion | How to set it |
|---|---|
| W Effect | mean over the one or two effects from the matrix (7) |
| C Case | fit from the fit matrix (10) |
| D Distinctiveness | **project-specific:** class relative to R0 (11.4): R0 itself 0, R0 with its own asset 1, near 1, edge 2, bold 2; **plus 1** if the brand's own material, which no other brand has, carries the direction; at most 3. D 3 only through the brand's own material, never through distance alone ([2]) |
| A Audience | gap between the target position and the span on the map (8), sum over both axes: 0 steps 3, 1 step 2, 2 steps 1, from 3 steps 0; without answers 3 |
| M Material | present or producible by the agent (typography, simple SVG technique, data from the brief) 3; promised or requestable 2 (before the answers also unknown material); only a stand-in 1; excluded 0 |
| B Brand | CI, heritage or assets carry the direction 3; no CI or neutral 2; tension (dark CI color for MAX) 1; contradiction 0 |

**Own asset** (only for R0): an existing brand element that makes the work attributable without a logo and is not a category caricature (a color outside the category default, logo form, character, type gesture); colors on generic lists (tell B1) do not count.

**Own material carries the direction** when it is present or promised, only this brand has it and it becomes the anchor: PRO product UI; DAT data; STI object photo; EDI photography; HER archive; WRM photos of real people; DRW an existing character or illustration; ORD objective photos (plant, product, place); ONE object, photo or drawing as the carrier of the punchline; RUL the logo as the source of the primitive; MAX pattern, label, packaging; TYP wordmark or house typeface with character; RAW raw documents (code, logs). Color never counts (it works through B), derived ideas never. A thing the user named (brief, Q16, Q17) counts for the one direction whose anchor can show it best, noted in field 12; one thing, one direction. It need not be unique to the brand, because it comes from this user's world. AI proximity (5) does not count in D.

On the paths M1c and M1a the calculation runs once, after the answers and before any pair: A stays 3 unless the answers state a position in words. The pair with the mockups sets the dose and changes neither ranking nor set.

**Target position** (H; preferences vary with age, education and country, high [14]): "too calm would be worse" or the user's words for it ("bold", "striking") loudness 3 to 5, "too loud" or words for it ("keep it calm") 0 to 2, no answer 0 to 6; "too stiff" or "too slick" expressiveness 3 to 6, "too silly" or "too raw" 0 to 3. Risk categories and older audiences at most loudness 3, young B2C from 2.

### 11.3 Step 3: formula

**S = 100 x (0.30 W + 0.20 C + 0.20 D + 0.15 A + 0.10 M + 0.05 B) / 3**, range 0 to 100.

**Tie** (same score to one decimal place): first the direction log: the direction that did not win for the last three other brands takes precedence; within the same brand the previous one (consistency). Then higher C, then W, then D.

### 11.4 Step 4: category default R0 and distance classes

**R0** is the direction whose caricature the category delivers today. Priority: competitor scan (Standard three, Studio four to six), then the case row ([use-cases/README.md](../use-cases/README.md) 2), then this table (H) when the case splits by industry or has no R0; when choosing an industry, the buyer's industry counts before the product type (software for building authorities: public sector, not B2B SaaS). If the case row and the table contradict each other for a clear industry (website of a freight forwarder: case B2 B2B names PRO, the table row Industry ORD), the more specific table row applies:

| Category | R0 | Caricature |
|---|---|---|
| B2B SaaS, dev tools, AI products, hardware launch, cybersecurity | PRO | dark stage, Inter, glow, icon cards, hacker clichés |
| Enterprise, industry, law, insurance B2B, public sector, B2B webinars | ORD | blue, eyebrow over every chapter, stat banner |
| Decks, reports, investor material | DAT | KPI cards, topic titles, rainbow charts |
| Fintech B2C, insurance B2C, health, wellbeing, climate, D2C site builders | WRM | stock people, umbrella and hands, pastel, leaves |
| Premium D2C, beauty, interior, hospitality | STI | cream, contrast serif, terracotta |
| Fashion, sport, lifestyle, magazines | EDI | serif with caps labels, stock with a black gradient |
| Heritage products, manufactories | HER | coat of arms, "Since 1890", gold |
| B2C apps, learning apps, SMB SaaS with illustration | DRW | Corporate Memphis, 3D clay icons |
| Culture, music, festivals | TYP | glitch, outline, marquee |
| Gen Z consumer, beverage challengers, B2C events | MAX | confetti, violet-pink gradient |

**Classes** (H): **near** the same effect group as R0; **bold** another group and a map distance (sum of the steps on both axes, 8) from 5; **edge** in between ("most advanced, yet acceptable" [2]). Row R0, column candidate; n near, e edge, B bold:

| R0 | ORD | PRO | DAT | STI | EDI | HER | WRM | DRW | ONE | RUL | MAX | TYP | RAW |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ORD | R0 | n | n | e | B | B | e | B | B | e | B | B | B |
| PRO | n | R0 | n | e | e | e | e | B | e | e | B | B | e |
| DAT | n | n | R0 | e | e | B | e | B | B | e | B | B | B |
| STI | e | e | e | R0 | n | n | e | B | B | e | B | B | B |
| EDI | B | e | e | n | R0 | n | e | e | e | e | e | B | e |
| HER | B | e | B | n | n | R0 | e | e | e | e | e | e | e |
| WRM | e | e | e | e | e | e | R0 | n | e | e | B | B | e |
| DRW | B | B | B | B | e | e | n | R0 | e | e | e | e | e |
| ONE | B | e | B | B | e | e | e | e | R0 | n | e | e | e |
| RUL | e | e | e | e | e | e | e | e | n | R0 | B | B | e |
| MAX | B | B | B | B | e | e | B | e | e | B | R0 | n | n |
| TYP | B | B | B | B | B | e | B | e | e | B | n | R0 | n |
| RAW | B | e | B | B | e | e | e | e | e | e | n | n | R0 |

In a tight CI the classes follow 13, point 2.

### 11.5 Step 5: three ranks

1. **Rank 1:** the highest score S1 among directions with **M from 2** (recommendation per point 7). M 1 only as edge or bold, with a best-form stand-in and an asset request (H).
2. **Fill missing classes** in the order bold, edge, near. Admissible: S from S1 minus 20, and not both the same group and the same map position as a chosen one (same group alone or same map position alone is allowed). Edge and near: the best admissible one.
3. **Seed (Standard, Studio):** the bold rank is drawn among all admissible bold directions, only at the level of directions: seed per SKILL.md, stage 3; pool sorted by S descending (ties in catalog order), hit = seed modulo pool size, counted from 0; seed, pool and hit go into the contract. If rank 1 is bold, there is no seed.
4. **Empty class:** the next best admissible direction moves up; tell the user the missing distance in one sentence.
5. **Divergence:** at least three of six axes (6) different, otherwise the next one moves up.
6. **Accent and dose:** a mandatory accent for PRO in a category that already looks like it, and for ORD without a second decision (12); dose from the target position.
7. **Recommendation:** rank 1. Exceptions: if rank 1 is R0 without its own asset, the best direction at the edge; a direction with M 1 never; in risk categories (law, finance, health, insurance, critical infrastructure, public sector) never from group V (MAX, TYP, RAW) unless the user explicitly asks for boldness; instead recommend the best direction outside group V and show the group V direction as the bold option. If the recommendation changes after the answers or mockups, say so in one sentence with the reason.

| Situation | Rule |
|---|---|
| Quick | short calculation only over the starter set of the case row ([use-cases/README.md](../use-cases/README.md) 2); build the recommendation (point 7); no seed; ranks 2 and 3 as one-liners in the wrap-up |
| Autonomous, no user | set as in Standard with a seed, built by the Quick rule; the other two in the wrap-up |
| Studio | may show a fourth card: the user's own idea or a second seed hit from the same pool; after the mockups a ranking judgment by R1 in both orders (2 of the at most 10 reviewer calls, [exploration.md](../exploration.md) 11); the stable rank 1 stands as a column in the ranking table |
| Correction | no set; measure the current surface against the measurement profile of the closest direction |
| Without shell | invent no seed; bold becomes the pool direction with a candidate rated "surprising" (several: the highest S), otherwise the one with the highest S; say with the directions that no draw took place |

### 11.6 Step 6: candidates, rating, presentation

**Candidates** sit below the directions: 2 per direction (Standard) or 3 (Studio), the strongest goes into the mockup; Quick three one-liners for the built direction ([exploration.md](../exploration.md)). Every candidate has a tangible image idea from an object or a situation of the project world that becomes visible on the key surface; a primitive, a typeface or a color alone is not an idea (SKILL.md, stage 3). This also applies to RUL, MAX and TYP: primitive, lead color or typeface accompany the object or the situation, they do not replace it.

**Rating per candidate** instead of a percentage estimate, with one sentence of reasoning:

| Level | Marker | Example Weserbogen |
|---|---|---|
| obvious | stands like this in the brief or is a category convention; a standard model or a competitor lands there. A thing the user named is never obvious by origin; rate what the candidate does with it | tooth icon, smile, mint |
| own | from the project world, passes the swap test, one step away from the brief | the hand signal for a pause as a recurring chapter mark that says: here you set the pace |
| surprising | connects two parts of the project world that do not stand side by side in the brief, or comes from a forced constraint; explainable in one sentence | the treatment plan becomes a tide table: every appointment stands like a water level, predictable and calm |

Into the mockup only from "own" and with a visible image idea; bold preferably shows "surprising" (otherwise note it in the contract); Quick never builds "obvious". Estimate (H).

**Presentation:** four lines per direction (SKILL.md, stage 1); recommendation per 11.5, point 7 (rank 1, except R0 without an asset, M 1, group V in a risk category); if it changes after answers or mockups, one sentence with the reason; the ranking with scores only after the boards, in Studio with the stable rank 1 from R1's ranking judgment; patterns in [dialogue.md](../dialogue.md).

### 11.7 Worked example Weserbogen (fictional, website of a dental practice)

Weserbogen is a dental practice in Bremen with three dentists, focused on anxious patients. Case B2 Website B2C, goal: book an appointment online; health is a risk category. R0 is WRM (row Health: stock people, umbrella and hands, pastel, leaves). Effects per 4: W2 Competence (action: book an appointment, line activation and purchase), W1 Reassurance (risk category, the first one named). Excluded: DAT (fit 0 in B2 B2C), PRO (no product UI; the booking widget belongs to a third party). Classes from row WRM: ORD, STI, EDI, HER, ONE, RUL, RAW edge; DRW near; MAX, TYP bold.

**Before the answers** (prompt level, basis for M1, no things named): no CI (B 2); A 3; photos unknown (M 2 for STI, EDI, WRM, HER), otherwise M 3; D by class (WRM 0, DRW 1, otherwise 2). Result: ORD 80.0 (rank 1, edge, recommendation), RUL 75.0, STI 73.3, RAW 70.0, EDI 68.3, HER 66.7, DRW 65.0, TYP 65.0, WRM 60.0 (R0), MAX 60.0, ONE 58.3; ties broken by C. Set: ORD (edge, recommendation), DRW 65.0 (near, the only near one), bold by seed from the pool TYP 65.0, MAX 60.0 (threshold 60.0): 483920 mod 2 = 0, hit TYP. Both are group V and appear in the risk category only as the bold option, never as the recommendation (11.5, point 7).

**After the answers:** "rather too calm than too playful, but not like a hospital" gives loudness 0 to 2, expressiveness 3 to 6. The practice's own photos of its rooms (bright, wood, view of the Weser) are available and carry EDI and ORD (D plus 1, M 3); no photos of people with consent (WRM M 1), no object (STI M 1), no archive (HER M 1); the logo is a wordmark without a house color (B 2 everywhere).

| Direction | W | C | D | A | M | B | S | Class |
|---|---|---|---|---|---|---|---|---|
| EDI | 1.0 | 3 | 3 | 3 | 3 | 2 | 78.3 | edge |
| ORD | 2.5 | 2 | 3 | 1 | 3 | 2 | 76.7 | edge |
| RUL | 2.0 | 2 | 2 | 3 | 3 | 2 | 75.0 | edge |
| STI, RAW | 1.5 | 3 (STI), 2 (RAW) | 2 | 3 | 1 (STI), 3 (RAW) | 2 | 70.0 | edge |
| DRW | 1.0 | 3 | 1 | 3 | 3 | 2 | 65.0 | near |

Below: HER 63.3; ONE 58.3; WRM 56.7 (R0); TYP 55.0 and MAX 50.0 (bold, A 1, below the threshold 58.3). EDI: (0.3 + 0.6 + 0.6 + 0.45 + 0.3 + 0.1) x 100 / 3 = 78.3.

**Set:** EDI (rank 1, edge, new recommendation, because the practice's own room photos carry it), DRW (near), and because no bold direction is above the threshold, ORD moves up (11.5, point 4; one sentence to the user: TYP and MAX do not fit "rather calm"). The recommendation changes from ORD to EDI; this is said in one sentence before the mockups ([dialogue.md](../dialogue.md) M3). The seed changes nothing after the answers, because the pool is empty. Candidates: [dialogue.md](../dialogue.md) M1, M3. On the path M1c, without a pair: ORD 86.7, EDI 78.3, RUL 75.0.

### 11.8 Spread (probe on nine cases)

A probe on nine fictional cases from different case groups (without a test run, H) brought 10 of the 13 directions into the sets, fixed or by seed; PRO and WRM were missing because of the gates, HER for lack of an archive. **ORD and RUL each took 5 of 9 fixed ranks**, RAW was in the set or the seed pool four times; ORD was recommended three times, RUL and MAX twice each, DAT and EDI once each (EDI as edge, because rank 1 was R0 without an asset), group V never in risk categories. Countermeasures against the clustering: log rotation and asking for material before the calculation.

## 12 Combinations: base plus accent

1. **Base** sets lead effect and frame (register, grid, type system, density, base color, reading path), on all surfaces.
2. **Accent** adds a secondary effect and changes exactly one axis (two axes: a new base); about 10 to 20% of the surface or exactly one role (only quotes, empty states, chapter openers or transitions); one per surface, two per project; M-MOT does not count.
3. **No counter-effect:** if the accent has an x for the lead effect of the base (7), only as a single bounded moment.
4. **Loudness adds up:** MAX, TYP, RAW Contrarian, DRW Color world never as two equally loud layers; two quiet directions (ORD, DAT, STI) need an asset of their own.
5. **Material** applies to accents too; justify the accent from the content (a character, because the product is abstract).
6. **Contradictions in material logic** (glass with raw construction, neumorphism with flat order) only with an explicit concept.

| Base | Good accents | Only as a moment | Never |
|---|---|---|---|
| ORD | DAT, EDI, RUL, ONE, TYP (one line), M-HUM, long-distance mode | M-SPA, RAW (tone) | MAX as an equal, glass as a surface |
| PRO | EDI (second voice), DRW (at the window edge), M-HUM, RUL (chapter color per product line) | M-SPA (logo object) | MAX mixed, platform-native feed mode, neumorphism |
| DAT | ORD, EDI, RUL, M-HUM, M-MOT | ONE (talk) | M-SPA as a data carrier, TYP in the chart |
| STI | WRM, EDI, RUL, M-HUM (contained), M-MOT | M-SPA | MAX, TYP loud, RAW, platform-native feed mode |
| EDI | DAT, TYP, M-MOT, M-HUM | M-SPA | MAX mixed, bento |
| HER | EDI, TYP, M-HUM, M-MOT | | invented nostalgia, several eras, gloss |
| WRM | PRO (UI chips), DRW, DAT, M-HUM, MAX quiet | ONE, M-SPA (soft 3D) | RAW in risk categories, TYP |
| DRW | MAX, DAT, RUL, M-MOT, M-HUM | ONE | STI; MAX Color field with DRW Color world |
| ONE | M-MOT, M-HUM, HER, RUL | | MAX or TYP on the same surface, bento |
| RUL | M-MOT, ORD as the frame, MAX, DAT, M-HUM, M-SPA, TYP | | RAW without a concept, MAX Color field plus RUL Field |
| MAX | ORD as the frame, DAT, DRW quiet, RUL, M-MOT, M-SPA | ONE | STI, EDI mixed, TYP on the same surface, RAW equally loud |
| TYP | M-MOT, RAW as the frame, M-HUM, M-SPA | ONE (closing band) | STI, MAX on the same surface, DRW, register Operate |
| RAW | M-HUM, MAX, ONE, TYP, HER, ORD as the frame | | STI, WRM loud, M-SPA as an experience, MAX equally loud |

Proven (medium): ORD plus M-HUM, STI plus WRM, MAX on ORD, PRO plus EDI, RUL plus M-MOT.

## 13 Working within a CI

1. **Inventory:** colors, typefaces with license, logo, image style, forms, characters, tone, templates, heritage by recognition; binding elements separate from what has grown over time. What is fixed is not negotiated (SKILL.md); the direction works through anchor, composition, image rule, density, dose, motion and copy.
2. **Distances within the CI:** near = the CI in best form; edge = the same CI with another anchor (data form instead of photo, primitive instead of motif); bold = the same CI in another effect group through composition, image and tone. Never change binding assets.
3. **Compatibility:** neutral house typeface: TYP through size and weight, a serif for EDI, PRO only if the CI allows it. Dark brand color: MAX only as Concentration, ORD and STI as a frame, RUL as a code color. Light color: areas and large type, text in a darker derivative of the same OKLCH hue (on white at L at most 0.54 always 4.5:1; #3AA6B9 has 2.86:1). Logo with clear geometry: RUL derives the primitive, HER uncovers the best-known element. Image style: EDI, WRM and STI adopt it. Character: DRW with a lead role, never as a sticker. Template: rules only, new layouts with approval.
4. **CI on generic lists** (Inter, violet): mandatory; exempt it in the check with `--allow-fonts` and `--brand-colors`; in the wrap-up "intentional, CI".
5. **Contrast beats CI:** never under 4.5:1 for text; name the conflict, propose an accessible derivative.
6. **Continue instead of reinventing:** consistency in assets, variety in execution, at least two assets the same on every surface; a new direction only for a new brand, a new campaign platform or on request (log per brand; a logged piece the user never chose is material, not a rule).
7. **Weak CI** (logo and one color): mark one or two assets as a proposal (primitive from the logo, image rule, type gesture, motion idea). CI typeface without a web license: mark a free, metrically similar substitute.

## 14 Review questions per direction

Judge first, then read detector findings (medium); separate system errors from local slips. For all: where does the anchor come from, and would it fit another company? Is the brand recognizable with the logo covered? Per direction: review question in the datasheet (section 7), corridors in section 5, modules in [modules.md](modules.md); process in [review.md](../review.md).

## 15 What is deliberately not a direction

| Term | Placement |
|---|---|
| Bento, tech minimalism, "Linear look" | in PRO, with the material gate and a mandatory accent; AI default [15] |
| Calm tool | register Operate (2.1) |
| Unpolished, platform-native | platform-native feed mode (2.2): a platform rule, not a brand voice |
| Long-distance effect | long-distance mode (2.3) |
| Staged space, 3D | module M-SPA: high jury evidence, weak usability |
| Human trace, handmade | module M-HUM; as a base only with MAX, RAW or HER |
| Glassmorphism, Liquid Glass | M-TRD, only over real content with a contrast measurement |
| Neumorphism | excluded: structurally below WCAG AA, affordance missing |
| Neo-brutalism as a look | loud dose of RAW, otherwise M-TRD |
| Y2K, Frutiger Aero, retro-futurism | dated quotation in HER or M-TRD |
| Corporate Memphis | warning sign, caricature of DRW |
| Bauhaus poster, constructive-geometric | means within RUL, ONE, TYP |
| Experimental typography | loud dose of TYP, only with a grid as the counterpart |
| Accent word in the headline, handwritten doodles (v1) | options with a reason from brand or content, accent word at most once per surface ([craft.md](../craft.md) 5.1), otherwise tell A3 or scribble kitsch; doodles in M-HUM with an informal voice |
| Idea angles (character, proof, asset as idea, category break, user work, scene, functional idea) | an axis across the directions, for candidates ([exploration.md](../exploration.md)) |
| Deck types (talk deck, reading deck, keynote, slidedoc) | registers Read and Distance |

## Sources

1. Tuch et al. 2012: https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/
2. Hekkert et al. 2003: https://www.jimdavies.org/summaries/HekkertSneldersVanwieringen2003.html
3. Romaniuk, Distinctive Assets: https://contagious.com/io/article/jenni-romaniuk-on-distinctive-assets
4. System1 2019, brand characters: https://martechseries.com/analytics/behavioral-marketing/memorable-characters-ads-boost-chances-profit-30-just-4-us-brands-using-says-system1/
5. CEB, Google, Motista 2013: https://betaisthenewnormal.com/wp-content/uploads/2018/09/CEB_Google_promotion-emotion-whitepaper-full_beta_2018.pdf
6. LinkedIn B2B Institute: https://business.linkedin.com/content/dam/lem/business/en/advertise/resources/b2b-institute/b2b-creative-v2.pdf
7. System1, Cost of Dull: https://system1group.com/blog/the-extraordinary-cost-of-dull
8. NN/g, Mobile Tutorials: https://www.nngroup.com/articles/mobile-tutorials/
9. Meta Ads Guide, Story: https://www.facebook.com/business/ads-guide/update/image/instagram-story
10. TikTok Ads Help: https://ads.tiktok.com/help/article/creative-best-practices
11. USSC 2018: https://usscfoundation.org/wp-content/uploads/2018/03/USSC-Guideline-Standards-for-On-Premise-Signs-2018.pdf
12. W3C, WCAG 2.2: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
13. Garner and Alley 2013: https://www.ijee.ie/articles/Vol29-6/23_ijee2791ns.pdf
14. Reinecke and Gajos 2014: https://eecs.harvard.edu/~kgajos/papers/2014/reinecke14visual.shtml
15. Anthropic, Frontend design through Skills: https://www.claude.com/blog/improving-frontend-design-through-skills

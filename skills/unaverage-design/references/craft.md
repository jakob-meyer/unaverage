# Craft

As of 2026-10-10, for stages 4 and 5. Evidence strength: high, medium, H (derivation, to be tested); sources [n] at the end.

Process in [SKILL.md](../SKILL.md); registers and ground rules G1 to G14 in [directions/README.md](directions/README.md); system values in the datasheet; minimum type size per medium only in [use-cases/README.md](use-cases/README.md); type choice in [fonts.md](fonts.md); copy in [copy.md](copy.md); measurement in [review.md](review.md).

## 1 Universal principles U1 to U13

Apply in every direction (41 measured top works; evidence high, U10 and U12 medium). The review questions are the reviewers' rubric.

| No | Rule | Review question |
|---|---|---|
| U1 | **Origin of the anchor:** the carrying element comes from product, logo, name, material, data, person, archive or scene; a style is never the origin. | Where does the anchor come from? Would it fit another company? |
| U2 | **Conventional frame, own expression:** navigation, reading order, forms typical for the category; distinctiveness in image, type, color, tone, at most one staged moment [1][2]. | Main action found in 5 s? Where does the distinctiveness sit? |
| U3 | **One dominant element per surface,** readable in under 3 s, everything else visibly subordinate. | Squint test at 25%: what first, what next? |
| U4 | **Every color has a job** (action, state, chapter, data, origin from the image); action color under 3% of the area. | Can every color be justified in one word? |
| U5 | **Effects only with meaning:** glow, glass, blur, gradient only with a function (brand light, AI labeling, darkening, mask). | Does the surface stay understandable without the effect? |
| U6 | **Few typographic means, fixed roles:** one main voice, at most a second one with a job; hierarchy through size, lightness, position. | Does every typeface, weight and size have a role? |
| U7 | **Proof, not claim:** data with reference value and period, customer plus number plus context, source and as-of date for third-party numbers, collected (9.2); no placeholders, no round fantasy numbers. | Is every number, name and quote real? |
| U8 | **One primitive through all levels,** from entry to footer and mandatory zone, from icon to space. | Is the brand recognizable with the logo covered? Variation rule in one sentence? |
| U9 | **Change carries meaning:** same content type, same section type; a change marks chapter, pause, punchline, scene [3]. | Does every change mean something? |
| U10 | **One decision leaves the category and AI median,** in expression, not in the frame [2]. | Which convention do we break, and why? |
| U11 | **Mobile composed on its own** (11). | Is 390 px a design of its own? |
| U12 | **Voice down to the edges:** microcopy, forms, consent, footer in brand language and unambiguous; footer as closing image. | Does the cookie notice sound like the hero? |
| U13 | **Comfortable reading text, extremes only in display** (6.3) [5][6]. | Does the body text read with ease, also on mobile? |

## 2 Norms as gates

They apply even though top references violate them too; "like reference X" does not count.

| Norm | Gate | Check |
|---|---|---|
| Contrast WCAG 2.2 AA | text 4.5:1; large type (from 24 px, bold from 18.7 px), controls, informative graphics 3:1; at the least favorable point, do not round (high [4]) | tell H5 |
| Text in the DOM | key message at first paint; WebGL, canvas, video with a fallback | tell V24 |
| Reduced motion | `prefers-reduced-motion`; autoplay over 5 s can be paused | tell D10 |
| Line breaks | `lang` of the output language, `hyphens: auto` where the language needs it, never `word-break: break-all` (6.4) | tell H2 |
| Clear zone | chat button, consent, sticky bars cover no text | by eye |
| Overflow, minimum type size | no horizontal overflow at 320 px; minimum type size following [use-cases/README.md](use-cases/README.md) | tells H1, H4 |

## 3 What depends on the direction

No single value separates outstanding from generic (medium): lightness (7.4), amount of color (7.2), scale, display cut, words and image area come from datasheet, mode and register. Consistency counts (centering yes, cluster Stock hero no); caps labels and mono only with a function, otherwise costume.

## 4 Ten levers from generic to outstanding

Ordered by impact, causes before symptoms (H); "targeted fix" picks three to five points in this order; in Persuade and Feed the impact levers in 5 come first. **Replace, don't delete:** every point replaces or adds; it does not just make the surface quieter. Removing an element without a job in its section is a valid fix, and an addition removes the duplicate it creates ([review.md](review.md) 15, point 4). A truly generic element had a job (warmth, emphasis, movement, guiding the eye) and gives way to an element from the product's world with the same job; deleted without replacement, the surface gets emptier, not better ([review.md](review.md) 5).

| Rank | Lever | Rule | Checkable via |
|---|---|---|---|
| 1 | Tangible idea and anchor from the subject | real material; idea from an object or a situation of the product's world, visible on the key surface; line, band, dot or pure typography accompany it, they do not replace it. Name the source before building. The image proves the claim of the surface (problem, use, result), not just the topic. If material is missing, request it and until then use a best-form stand-in that shows the claim, else a final-form slot ([images-and-assets.md](images-and-assets.md) 5); downgrade a direction without its required material | tells V1, V8; R1 guiding question |
| 2 | Replace template blocks with content-driven forms | the feature grid becomes a product excerpt, the stat banner a number with a reference, the logo bar customer plus result, the testimonial carousel structured proof, the gradient band a closing image | tells D3, D4, D9, C8, C10, V3 to V7 |
| 3 | Bind effects to meaning or replace them | glow, glass, gradient text, decorative gradient only with a function; otherwise a means from the subject takes over their job (light in the photo instead of glow, material or a color area from the subject instead of a decorative gradient) | tells C1 to C4, C14 |
| 4 | Reduce color to jobs | one action color under 3%; further color from image, chapter, data (7.2) | tells B1, B6, V9 to V11 |
| 5 | Display voice as a deliberate axis | one axis instead of a list typeface with 700, line height 1.0, minus 0.03 em (6.2) | tells A1, A7, cluster Template display |
| 6 | One decision against the median | name the category default and the AI pattern, counter-move in expression | tell V9 |
| 7 | One dominant element, fewer elements | one main action in the hero; social level 1 from 15 to 25% of the format height, photo from 60%; talk 1 to 12 words | cluster Stock hero, tell F6 |
| 8 | Proof, not claim, in copy too | case story from the through-line with IDs, names, amounts, introduced as made up on persuasion surfaces (5.1, point 9); outcomes only from brief and answers; source and as-of date for third-party numbers (9.2); no buzzwords; recompute (9.3) | tells E1, E5, V4, V16 |
| 9 | One primitive, change with meaning | carrier down to the footer; the primitive accompanies the idea, it does not replace it; repeat 3 to 7 section types strictly | tells F1, V15, V23 |
| 10 | Take the edges seriously | 390 px as its own design; microcopy, consent, footer in the brand voice; gates from 2 | tells H1 to H6 |

## 5 Building impact

Default in Persuade and Feed; in Read and Distance on title, chapter and claim surfaces and, in decks, on proof slides (key figure, 12.2); in Operate only at the place of expression. Goal: principle 1 in [SKILL.md](../SKILL.md); the direction limits the means (datasheet 4 to 6), it does not replace them. Numbers H.

### 5.1 Nine levers with numbers

1. **Anchor with weight:** one element carries 40 to 60% of the visual weight (area times contrast; rule of thumb 35 to 60% of the format area, seen first when blurred at 360 px), text supports it. Anchor types by impact: product in use, person in a scene or as a cutout, object or material, data form, typographic statement (sparingly). If material is missing: a best-form stand-in that shows the claim, else a final-form slot ([images-and-assets.md](images-and-assets.md) 5), never a gray area.
2. **Type with a voice:** size jump from display to text in Persuade on desktop at least a factor of 3, on mobile following 6.1 (smaller only with a large image or wordmark form according to the datasheet); the hero headline in Persuade holds against the image: weight from 500 or a display cut (a typeface drawn for large sizes, or an optical size via `opsz`), at most four lines on desktop, otherwise shorten it, set it wider or raise the weight; Feed: level-1 element at least 15 to 25% of the format height, secondary elements a factor of 3 to 4 smaller; slide: title in a talk deck at least 56 px, in a reading deck 44 px at 1080 height, at least two voices in the deck (weight, style or display against text), every slide with a first level that is seen first in the 360 px image; display axis following 6.2; at most 3 to 4 sizes per surface; headline preferably under 8 words, text per visual under 25 words.
3. **Composition, not template** (5.3), changes with the content type (U9, G13); asymmetric, margins from 6% of the width, cropping allowed.
4. **Color as area, not line:** color split, band, colored ground, color shape behind the cutout, a chapter area instead of a frame, an accent line or a neon dot; amount following the saturation strategy (7.2), with A an area from the image and a tinted ground; start and end of a sequence in the strongest color.
5. **Depth:** at least one level where the direction allows it (10): overlap (subject over a shape edge, number over image), crop, cutout, stack; flat directions through crop and area steps. On scrolling pages (websites, landing pages, web apps) crop only at the outer edge of the viewport or canvas, clearly (at least a third of the object outside), or show the object whole: a product surface, device or card cut by a section boundary inside the page reads as an overflow bug, not as depth.
6. **Data as form:** one key figure per surface on the stage, true to scale (9).
7. **Human trace** only via M-HUM: one or two accents per surface, each points at something.
8. **Fewer, larger:** delete what is not claim, anchor or orientation; social grasped in 3 s, a slide in 10 s.
9. **Show proof:** the key surface (hero, product post, solution slide, ad) shows the offer itself or its use, regardless of the direction. **Recognizable as what it is:** the core property from the brief (for example waterproof, foldable, tool-free assembly) stands in the headline or anchor, not only in small print; color, form and setting in the image fit the product and do not make it look like another one (a waterproof watch shows itself under water, not dry on a table like any other watch). Review question on the 360 px image: What is offered here, and does the answer match the brief, including the core property? **Software:** the interface as an HTML mockup in the target medium, built from the features in the brief (Operate register, no feature the brief does not name; controls that every product of the category has, such as moving between periods, adding and editing, count as frame, U2), with the through-line as sample data: one case runs through the main steps of the product, the surface shows the state after a real work step. **Brief features:** every feature of the brief (in feed formats those the brief asks to show, [SKILL.md](../SKILL.md) stage 4, point 10) appears as a control, state or result at its place in the interface, never as an extra bar or a floating card ([exploration.md](exploration.md) 4). An output that is a document stays true to its genre (the order, density and look of the real one). Reason: a feature that only stands in copy reads as a wireframe. **Sample case:** sample data is consistent (names from the target market, uneven values with units; no Acme, no Lorem, no round fantasy numbers, no real customer names). On a persuasion surface (Persuade register, a deck's solution slide; not in the feed) it tells one case through: who, where, the steps in order and what the product delivers at each step (a quote, a plan, a status), every product output within the ranges of brief and answers. Dates and times are optional; use them where they make the order easier to follow. The case is introduced once, where it begins, in the content's type ("Sample week: site, defects and names are made up"; in a deck by its label, 12.2); that line is content, not a hedge, and it never stands next to a single figure. The case never adds an outcome the brief does not give (a saving, a customer count, a rating) and no condition (tax, fees, terms) that brief and answers leave open. A computed value carries its condition ("two bags a month: €31.80"). Real proof from the brief stands more visible than the sample case. Reason: a case without steps reads abstract, and a precise invented outcome borrows the authority of proof. The mockup is design, not invention; in the review view it is marked as a draft based on the brief ([images-and-assets.md](images-and-assets.md) 5). An abstract diagram of lines, nodes or boxes does not replace the interface. **Physical product** (tool, furniture, food, cosmetics, fashion, hardware): photo or cutout in the situation it is made for, with touch (texture, hand, traces of use, scale), the brand's own or a best-form stand-in, never composited into a foreign photo ([images-and-assets.md](images-and-assets.md) 5). Material and process: the material in detail. Service: the situation. **The image proves the claim:** the proof image shows what the sentence of the surface claims (the problem, the use, the result), not just the topic; for "capsules end up in the general waste" the general waste with capsules, not a cup of coffee. If the same image fits every sentence about the topic, it shows only the topic. Type, icon and flat drawing accompany; they are no proof; TYP, MAX, RUL and ORD combine with a proof image on the key surface (cutout on the color field, photo in the grid, UI in the primitive). Exception only when the user explicitly wants no images (in the contract).

**Accent word:** a deliberate option, not forbidden: the most important word in accent color, weight or position, justified by brand or content in the contract, at most once per surface, in the generic check `--intentional A3`; without a justification it is tell A3. Then it is replaced, not just deleted: an element from the project world takes over the emphasis, for example a marking, scale or tool trace on the object ([review.md](review.md) 5).

### 5.2 Dose from the trade-off profile (binding)

The trade-off pair, or the user's own words, set the dose (datasheet 6) and, with two modes, the mode; the check values are calm area (`calmAreaShare`) and saturated pixels (`saturatedShare`) against the corridor (datasheet 5):

- **"too calm would be worse", "too stiff", "too slick":** loud, the louder mode; saturated pixels in the upper, calm area in the lower half of the corridor (open at the top: at most lower bound plus 0.25); anchor and level-1 element at the upper edge of their span.
- **no answer:** medium, middle of the corridors (risk category: quiet to medium). If the user's own words set the dose, that dose stands, within the cap for risk categories, and is named to the user ([dialogue.md](dialogue.md) M3).
- **"too loud", "too silly", "too raw":** quiet; calm area in the upper, saturated pixels in the lower half; the anchor stays at 40 to 60%. Quiet limits the extra means: a second accent color, pattern, ornament, effect, motion, a second large type size; at most one of these per surface. The type contrast of the anchor and one color area from the project world are not loud means and stay; where a datasheet's quiet row reads paler, this paragraph takes precedence. M3 says what quiet means here in one sentence, or, when the dose comes from the pair, the message that confirms the choice, and a new statement by the user overrides it. In a deck a quiet dose lowers color, ornament and motion, never the size of the key figure on a proof slide (12.2).

Wrong side: a dose that lands too quiet is corrected before the reviewers (larger anchor, color as area, less emptiness), not justified. A value on the loud side of a quiet dose, or outside the corridor, that comes only from the anchor's type contrast, the signature element or that color area is recorded as an intentional deviation in field 9 and named in the wrap-up; never thin them out to fit the corridor. Another dose only after a new statement by the user.

### 5.3 Composition catalog

No template: the content type chooses, the direction limits; margins, logo position, typefaces and palette stay constant.

| Composition | Build | Direction | Trap |
|---|---|---|---|
| Object as anchor | an object of the product's world (label, form, tool, packaging, device) large and close, cropped; the claim sits as a note or marking on the object, the example of the through-line is on it (for example the consignment note of a freight forwarder with the shipment of the case) | ONE, STI, HER, MAX, RAW | object only for the topic instead of the claim, clip art from basic shapes, note in a handwriting font, marking or stamp in a stock form instead of after the real model ([exploration.md](exploration.md) 2) |
| Color split | two color fields 50/50 or 40/60, text and subject separated | MAX, ONE, DRW | color without a role |
| Full bleed | photo bleeding off the edge, text in a calm zone or on a band | EDI, STI, WRM | stock cliché, black gradient (tell V8) |
| Breakout | cutout reaches over a shape from the subject | DRW, MAX, WRM | sticker without a role (tell V20) |
| Stack | two to four real UI windows or documents, offset | PRO, DAT | fantasy data, glow (tell V1) |
| Collage | objects layered, rotated 2 to 8 degrees | HER, RAW, M-HUM | masking tape kitsch |
| Big number | number as the hero, data form, one sentence of context | DAT, MAX, ORD | stat banner (tell D4) |
| Statement | one sentence very large, much space | TYP, ONE, RAW | template headline |
| Path | process, funnel, steps as a form | DAT, RUL, ORD | number circles as decoration (tell A6) |
| People | real persons in a scene, gaze toward the text | WRM, EDI | round photos on color circles |
| Cropped | product window runs over the edge | PRO | tilted browser frame |

### 5.4 Review question

**Would a good studio show it like this?** On the 360 px image and at full size, before any review. Plus three questions: Which object or situation from the product's world carries the work? Does every image show what the sentence next to it claims? Does the surface read like a finished appearance or like a review draft? No usually means: no tangible idea (only line, band, dot or pure typography), image for the topic instead of the claim, placeholder, gray area, gap marker or production note in the image, a "to be added" label, dashed box or open item on a stage surface instead of final form ([SKILL.md](../SKILL.md) stage 4, point 6), an on-image hedge (a note such as "company data" under the company's own figures, a depiction note, a source line under the company's own figures or on every slide of a talk deck instead of collected; 9.2), product composited into a foreign photo or as soft fake 3D, the same image more than twice (5.5), product not recognizable as what it is (core property only in small print; 5.1, point 9), no proof on the key surface (software as a diagram instead of a mockup), anchor too small, no size jump, color only as line, everything flat, sequence without rhythm, stand-in image blurry or filtered, dose against the trade-off profile, surface only emptier after a fix instead of better. Then 5.1, 5.2 and 5.5, then 4; every fix replaces or adds, it does not only delete (4). German forms of forbidden notes and hedges: [markets/german.md](markets/german.md) 2.

### 5.5 Rhythm in sequences

Deck, carousel, series, landing page: the system stays the same (margins, typefaces, color roles, signature), the composition changes (H).

- **At most three surfaces in a row** with the same composition from 5.3; a sequence of five or more surfaces uses at least three compositions.
- **Stage surfaces** for title, proof (solution, product), strongest figure and closing (ask, CTA): full bleed, color field or big number; denser working surfaces in between. Stage surfaces carry no open item ([SKILL.md](../SKILL.md) stage 4, point 6).
- **Change** of light and dark or full and empty at least once per four surfaces, **also in calm directions:** a deck has at least two full-bleed surfaces (color from the brand world or an image bleeding off the edge) and one color ground; a series changes ground or light and dark, never put all surfaces on the same ground. STI and ORD carry the change through image share and full-bleed images, DAT through chapter areas and full-bleed proof photos; with saturation strategy A the color ground is a ground tinted from the main image (7.2).
- **Emptiness is directed:** an empty third needs a reason (directed emptiness toward the anchor, a pause before the stage surface); otherwise the anchor grows or the content moves up.
- **Series in the feed:** every post its own composition, checked in the profile grid; three times the same template with different text is tell F1.
- **Repeated motifs:** the same image (photo, stand-in, illustration, drawing) at most twice in full form per sequence; a signature element or a component (for example the defect card of construction-site software or the roast label of a coffee roastery) at most three times in full form. Every further appearance as a crop or detail with a new role (scale, state); on scrolling pages the crop sits inside the object's own frame or at the outer edge, never at a section boundary (5.1, point 5). Slide types and section types (12.1) keep repeating strictly, and the primitive as a system element (U8) does not count; the limit applies to the same element shown.

## 6 Typography

### 6.1 Two registers

Decide before building whether the surface operates or persuades [7]; a product image in a landing page follows Operate inside. Read in 6.3, Feed and Distance in the profile of the use case.

| Parameter | Operate (product UI) | Persuade (marketing) |
|---|---|---|
| Body size desktop | 13 to 14 px | 16 to 18 px |
| Body size mobile | 16 to 17 px; input fields from 16 px | 16 to 18 px |
| Largest size divided by body size | 2 to 2.5 per screen, page title up to 4; second voice of a consumer app up to 5 ([directions/README.md](directions/README.md) 2.1) | desktop median 4.3, corridor from the datasheet; mobile 1.9 to 3.2 |
| Modular ratio | 1.125 to 1.2 | mobile 1.2, desktop 1.25 to 1.333 via `clamp()`; slide, social 1.333 to 1.5; poster up to 1.618 |
| Weights | 400, 500, 600; hierarchy through weight and lightness; second voice of a consumer app free | 3 to 4; display following 6.2 |
| Line height | labels 1.25 to 1.35; multi-line 1.43 to 1.5 | body text 1.4 to 1.6; display 1.0 to 1.15 |
| Figures | tabular figures in number columns (6.5) | like Operate, also price comparisons |

### 6.2 Display voice as a deliberate axis

The recipe is generic, not the typeface: list typeface, weight 700, line height 1.0, minus 0.03 em, scale from 5 (cluster Template display; medium). Instead choose exactly **one** axis, justify it, name it in the contract: **weight** (light and large), **size** (extreme scale), **width** (`wdth`), **glyph** (drawing with character), **origin** (house typeface, derived from logo, label, material).

- Display weight from the direction: median 500, usually 300 to 600; 700 to 900 only for poster, campaign and loud directions (MAX, TYP, ONE, RAW); the display typeface carries only 3 to 12% of the text (medium). The hero headline in Persuade goes below 500 only in a typeface or optical size drawn for display (5.1, point 2).
- L1 or L2 typeface as display only with a justified axis, otherwise yellow (tell A1); lists in [fonts.md](fonts.md).
- Accent word following 5.1; without a justification tell A3, the italic serif word in a sans headline is then red. Replacement with the same job (emphasis, warmth) first from the project world: marking, scale or tool trace on the object ([review.md](review.md) 5). Typographic alternatives: hierarchy through lightness or weight, the idea in italics as a whole line. Handwriting accents only via M-HUM with a real scan; otherwise a real note on the object takes over their job (composition Object as anchor, 5.3), never a handwriting font.

Line height and tracking by size; check the starting values on the rendering [7][8]:

| Size | Line height | Tracking, text cut | Tracking, display cut |
|---|---|---|---|
| under 14 px | 1.3 to 1.45 | 0 to plus 0.03 em | do not use |
| 14 to 20 px | 1.4 to 1.6 | 0 to minus 0.01 em | do not use |
| 22 to 36 px | 1.2 to 1.3 | minus 0.01 to minus 0.02 em | 0 |
| 40 to 64 px | 1.05 to 1.15 | minus 0.02 to minus 0.03 em | 0 to minus 0.01 em |
| over 64 px | 0.95 to 1.05, descenders do not touch | minus 0.02 to minus 0.04 em | 0 to minus 0.02 em |
| caps line | like its size band | plus 0.05 to plus 0.1 em | plus 0.03 to plus 0.08 em |

- Red from minus 0.065 em (tell A7); tight tracking is craft, not a feature.
- `font-optical-sizing: auto`, prefer families with `opsz`; without `opsz`, tracking and line height replace the display cut (H).
- Headings `text-wrap: balance`, paragraphs `text-wrap: pretty` [9].

### 6.3 Reading text

- **Size:** web 16 to 21 px; reading deck 22 to 28 px at 1080 px height; print 9 to 12 pt (high [6]).
- **Line height** 1.4 to 1.6, serif a little more.
- **Line length** 45 to 75 characters, target 66, multi-column 40 to 50; `max-width` 60 to 70 `ch`, verify by counting (high [5]).
- Paragraphs with spacing or indent, not both; no justified text on screen; at most three heading levels.
- The layout withstands user overrides: line height 1.5, paragraph spacing 2 em, letters 0.12 em, words 0.16 em (high [4]).

### 6.4 Line breaks and hyphenation

- Set `lang` of the output language on the document and on every passage in another language, because hyphenation, case mapping and screen readers follow it.
- `hyphens: auto` in body text where the language needs it (long words, compounds, narrow columns); in display lines soft hyphens (`&shy;`) at a syllable or compound joint inside the word, or rephrase.
- Check the longest word of every display line at the check widths ([review.md](review.md) 1; tell H2); build with real text in the output language, never with placeholder text in another language (H).
- Hyphenated compounds only where they are correct in the language's spelling, never as a line-break aid.
- Caps only through `text-transform: uppercase` with the correct `lang`, because case mapping depends on the language.
- Never `word-break: break-all`.
- German compounds, caps with the sharp s and U+1E9E: [markets/german.md](markets/german.md) 3.

### 6.5 Microtypography

English values; German values in [markets/german.md](markets/german.md) 3. Characters as code points; one variant per work ([copy.md](copy.md) 3).

| Element | Rule |
|---|---|
| Quotation marks | en-US double `“…”` (U+201C, U+201D), inner single `‘…’` (U+2018, U+2019); en-GB often single outside and double inside, by house style (H); never straight |
| Apostrophe, ellipsis | `’` (U+2019); `…` (U+2026), also in `Saving…` |
| Ranges | en dash (U+2013) without spaces, or "to"; if a user rule forbids dashes, "to" |
| Minus | real minus (U+2212) in numbers |
| Spaces | no-break space (`&nbsp;`) between number and unit (5 km); no space before % and after currency signs (10%, $1,299, £1,299); abbreviations without inner space (e.g., i.e.) |
| Numbers, dates, times | decimal point; thousands with a comma, consistently; dates in words, never purely numeric: en-US "October 8, 2026", en-GB "8 October 2026", ISO 2026-10-08 only in tables, data and file names; times en-US "2:30 p.m." (or "2:30 PM" by house style), en-GB "14:30" or "2.30 pm" by house style (H) |
| Figures | `tabular-nums` only where numbers stand under each other or alternate (tables, number columns, key figure rows, price comparisons, counters), columns right-aligned; body text and single numbers need none, and a typeface without tnum is no finding there and no reason for a substitute typeface. Old-style figures only in the body text of a serif |

Search the text for straight quotes, three periods, a hyphen with spaces used as a dash, and units without a no-break space (high [9]).

## 7 Color

### 7.1 Roles

- Every color has one role in one word: ground, surface, text, secondary text, line, action, focus, state, data, chapter, origin from the image.
- Ladder with 12 steps: 1 to 2 ground, 3 to 5 components (normal, hover, active), 6 to 8 lines, 9 to 10 solid, 11 to 12 text [10]; every surface has its text color; text pairs at least five steps apart (medium).
- Action color only on action and focus; status colors fixed, never the only information.
- A color with a meaning in the contract keeps that meaning on every surface; it does not become a ground or a band for variety. A color ground comes from a color whose role allows it; if no role allows one, a ground tinted from the main image or the brand counts.
- In a CI: tints and shades of the brand colors plus neutrals tinted toward the brand, no new brand colors.
- Judge color on the rendering with real ground, image and neighbors, never as a hex list; accent through quantity contrast, not more saturation (medium).

### 7.2 Saturation strategy

One strategy per project, in the contract. Measurement: `pixels.py palette`.

| Strategy | Surface | Typical |
|---|---|---|
| A color only from images | under 1% saturated outside the images | STI, EDI |
| B one color carrier | 1 to 25%: one concentrated element or one lead color | PRO, ORD, WRM |
| C color field | over 25%, text on it desaturated, often a chapter code | MAX, DRW |

- Direction or register may be stricter (team tool up to 2%); the stricter value applies and goes into the contract.
- With A, images count too: measure a review copy with `img { visibility: hidden }`, or by eye (H).
- Background chroma under 0.02 (OKLCH), except for the color field (medium). Evenly distributed medium saturation without origin is generic.
- Palette from photos: main image first; large image areas become ground and surface with lowered chroma, the accent comes from a small saturated portion; match the color temperature of the images; measure again on mobile (medium).

### 7.3 OKLCH and contrast

1. Convert the brand color to OKLCH, keep the hue H [11].
2. Ladder over L (12 steps, about 0.98 to 0.20), lower the chroma at both ends, otherwise steps fall out of sRGB.
3. Turn yellow and orange slightly toward red in dark steps, otherwise they look olive (H).
4. Tint neutrals with chroma 0.005 to 0.02 toward the brand color (medium).
5. Planning: text with L up to 0.54 always reaches 4.5:1 on white; on #121212 an L from 0.62 suffices in 99.9% of cases; for 3:1 usually an L distance of 0.37.
6. Acceptance with the WCAG 2.2 formula on the rendering; APCA only as a hint [4].

### 7.4 Dark only with a scene reason

- Reasons: code, media, night, machine, stage, tool for long sessions (G9); reading text and broad audiences light (high [13]).
- Ground OKLCH L 0.14 to 0.22 (#121212 about 0.18); elevation through lighter surfaces (white overlay 0 to 16% per level) instead of glow or shadow [12].
- Desaturate accents or keep them small; a dark palette of its own instead of inversion; text 87% white, 60% only after a contrast check, 38% only for disabled elements; darken white image grounds.
- Switch light and dark only with meaning (for example machine dark, human light).

## 8 Layout

### 8.1 Grid and spacing

- **Base unit** 8 px, fine steps 4 and 2 px; slide 1920 x 1080: 7.5 px, grid in 30 px steps, 8 columns (high [14]).
- **Spacing ladder** only from multiples (4, 8, 12, 16, 24, 32, 48, 64, 80, 96); within elements 0 to 8, within components 12 to 24, between sections 32 to 80 px.
- **Columns** 4, 8, 16 from 320, 672, 1056 px; one division per project; text on gutter edges, small texts on the edges of the large form.
- **Margins** for slide and social at least 6% of the width (H) plus safe areas.
- **Proportion** from format (1:1.414; 2:3), grid, content; documents with Van de Graaf margins; the golden ratio is no argument (high).
- **Radii** as one family, nested: inner equals outer minus padding; mixed button radii are tell H3.

### 8.2 Gestalt laws as review rules (medium [15])

| Law | Rule |
|---|---|
| Proximity | spacing within a group at most half the spacing between groups (tell D6) |
| Similarity | same function, same form; accent only for what is different |
| Common region | frames only where proximity is not enough; containers only where the subject is one (tells C6, C7) |
| Closure | cropping creates movement |
| Continuity | alignment lines across sections |
| Figure and ground | text in calm image zones, otherwise a panel or darkening |

### 8.3 Rhythm and change

- Same content type, same section type (U9); do not press different contents into one formula: at most two identical section types in a row, the eyebrow formula once per page (G13; tells A4, D5, V23).
- Alternate density and calm; emptiness is directed, it points at something (tell D11); median of top websites 58% calm area in the first screen (medium), dose following 5.2.
- Compositions: catalog in 5.3.

## 9 Data as form

### 9.1 Chart choice

By the data relationship, not by looks (high [16][17]):

| Question | Form |
|---|---|
| Comparison, ranking | bars, sorted |
| Change over time | line for the pattern, columns for single values; time on the x axis |
| Part of the whole | (stacked) bar; pie only with at most four segments near 25, 50, 75% |
| Deviation | diverging bars with a reference line |
| Distribution, relationship | histogram; scatter plot without a causal claim |
| Order of magnitude | areas or isotype in the true ratio |
| Key figure | with a comparison (previous period, target, plan); bullet graph or sparkline instead of a gauge |
| Lookup | table with tabular figures |

### 9.2 Design

- The title states the insight ("Revenue grows 3-fold per month"), not the topic; title and graphic never contradict each other (high [18]). Lookup graphics get descriptive titles.
- The graphic counts what its sentence counts: the marked part (fill, weight or accent within the data color roles; brand rules first) is the part the number next to it names (in "nine of twelve pallets on time" the nine are filled), position and length match the labels, and no symbol borrows a sign with a fixed meaning (a cross reads "wrong"). Check at 360 px. Reason: readers take the shape before the number, and one contradiction makes the demonstration look invented.
- One chart per surface, one accent, the rest gray; up to four steps through lightness; over seven colors means another chart type (medium [19]).
- Label directly instead of a legend; units on the numbers; a title instead of axis titles; few light grid lines; categories keep their color.
- Source and as-of date for every graphic with third-party data, as a short footnote on the graphic or collected in the appendix (collected in a talk deck); the company's own figures need no note in its own channels ([SKILL.md](../SKILL.md) stage 4, point 4; [copy.md](copy.md) 1); nothing important behind tooltip or hover.
- Form from the content is strong when it stays true to scale.
- Generic: tells P1, P4, D4, V17.

### 9.3 Data honesty with recomputing

A gate independent of the generic index, every graphic on its own:

1. Bars start at zero; lines may be cropped when the axis is labeled (high [20]).
2. Areas proportional: for circles the radius grows with the square root of the value; measure it.
3. Recompute ratios: 74 against 26% is 2.8 times, not "5x". Effect in the graphic divided by effect in the data between 0.95 and 1.05 (medium).
4. No dual axes; two charts, an indexed line or an annotation instead.
5. No cumulative curves as proof of growth; percentage growth with its absolute base; a key figure with definition and period (high [21]).
6. Shares add up to 100%, state the rounding; no invented numbers (limits in [SKILL.md](../SKILL.md)).

## 10 Depth and layering

Values in the form section of the datasheet. Universal: no default shadow, no glows, light in the image before a CSS effect.

| Means | Direction | Rule |
|---|---|---|
| Levels instead of shadows | Operate, ORD, DAT, PRO, EDI, ONE | area step, 1 px line, at most one elevation |
| Photographic light | STI, WRM | shadows only in the photo, one light direction |
| Overlap | PRO (windows), DRW, MAX (subject over a shape edge) | shows connection; a shadow only under what lies on top: large, soft, slightly offset, faint |
| Collage, image pairs | HER, RAW, M-HUM | rotated 2 to 8 degrees, real objects or scans; old next to new |
| Hard offset shadows | RAW loud, M-TRD | only one class of clickable elements, otherwise tell C13 |

Review question: Does the element really lie on top? Does only the right element carry the gesture (tell V25)?

## 11 Mobile as its own edit

- 390 px is a design of its own (G11): shorten (`h1` to the first sentence), rearrange (image before title), crop, replace (a portrait motif of its own).
- Largest type on mobile mostly 36 to 51 px (scale 6.1).
- Scaled-down UI is an image on mobile that nobody has to read; what must be read stands next to it in real type.
- A long product view is cut at 390 px to the part that proves its section's claim, at reading size; the rest is folded, never dropped. Images that must be read keep at least half the screen width.
- Nothing only via hover; targets following G6. Check widths following [review.md](review.md) 1.
- Reading deck as a link: 16:9 shrinks to about 360 x 203 px at 390 px; then body text 32 to 40 px at 1080, or a portrait version. Look at social at 360 px.

## 12 Sequences: decks, carousels, websites

### 12.1 Common

- **Through-line before layout:** one concrete example of the product's world (a case, a customer, a day, an object) runs through all surfaces ([SKILL.md](../SKILL.md) stage 4). Read the key sentences of the surfaces one under the other: do they tell the story on their own? The user's order applies, otherwise dramaturgy by deck type (12.2); report weak key sentences back instead of setting them beautifully. Keep a ledger in the review view of every sample value that appears more than once or changes state; every surface and every change a reviewer asks for take their values from it. A value shown twice is identical, and in reading order what comes before a change shows the before value or marks the change. In a deck the ledger is a file, `ledger.md`, written before the first render: one row per sample value, state and key figure, with the slides it stands on, the value before and after a change, and the same statement in words (the status word, label or sentence that names it on the slide); before each review round and after every fix, read each slide's words against that column, not only its figures. Reason: in a deck test every figure matched the ledger while a status word on the same slide said the opposite.
- **Content type per surface,** the layout follows it: title, chapter, claim (sentence or number large), proof (chart, image, quote), comparison (two to four columns), detail, closing with an action.
- **3 to 7 slide or section types,** repeated strictly; about 7 suffice up to 40 surfaces (tells F1, V15).
- **Chapter formula:** a fixed sequence per chapter in one sentence, for example "chapter image, one text surface, then proofs"; chapter boundaries with their own format (high [3]).
- **Constant plus variable:** margins, grid, header band, typefaces, palette constant, variation by a named rule; background with meaning: start and end strong, chapters marked, content calm (tell F2).
- At most 10 type sizes in the sequence (tell F4 yellow from 11); logo and footer not on every surface; sources only for third-party numbers, collected following 9.2.

### 12.2 Decks

- **Deck type first:** talk (poster sequence, key message in 3 s), reading deck (works without a speaker), hybrid as two versions from one source, with the talk text in the speaker notes; investor decks are read first (medium); "I'm presenting", "I'm giving the talk" or "live in front of an audience" means talk, "to send out" or "send it as a PDF" means reading deck (German phrases: [markets/german.md](markets/german.md) 1).
- **Assertion titles** with a claim on every content slide, left-aligned, at most two lines; below them visual proof instead of bullet points (high [22]). If story content is missing (why now, competition), a sentence from the brief as a draft, never a placeholder title.
- **Capacity four:** at most four points per list, four groups per slide, two lines per point; in a talk build up step by step (high [3]).
- **Words per slide:** talk 1 to 12; reading deck median at most 40; no content slide over 80 except designated text slides (tell F6).
- **Sizes at 1080 px height:** talk headline 56 to 80 px, key figure from 160 px; reading deck body text 22 to 28 px; lower bounds in the profile.
- **Proof and closing slides** (decks only; carousels keep one answer per card, 12.3): every proof slide (result, traction, price, market, ask) shows its key figure from 160 px with its base (compared with what, over which period). Where the base is a comparison, a period or a whole, it is drawn at true scale (9.3: a pair of bars, a time axis, the part inside its whole); traction shows the earlier value next to the latest when brief or answers give both; in a talk deck the base may be said instead of drawn. A price slide may add the amount for one typical customer, computed only from figures in brief and answers and shown with its computation; an ask shows only the parts of the use of funds that brief or answers give, never an invented split. A key figure with nothing of the deck's own system around it (no form, drawing, image or through-line object) on an empty or dark slide is the template stat slide, at any size. The closing slide repeats the thesis, three to four key figures and the ask, as their second appearance ([SKILL.md](../SKILL.md) stage 4, point 4); stage slides change the title form (figure or statement instead of the top-left title). Reason: in the skill's blind deck tests, figure slides without the deck's own forms read as a template and lost, while true-to-scale comparisons carried the proof.
- **Drawings:** every drawing in a deck meets the quality rule of the product drawing ([images-and-assets.md](images-and-assets.md) 5, point 3), in one technique ([SKILL.md](../SKILL.md) stage 4, point 2). Without a direction's own illustration technique (DRW, HER), draw objects, devices and places in orthographic views (front, side, top, section), maps, plans and data forms. People, animals and plants as the main image of a slide come from the user's photos, a public-domain archive ([images-and-assets.md](images-and-assets.md) 3.6) or a stand-in photo; drawn, they stay small and schematic inside a plan or diagram. If every image is built (Q5), an object, map or data form carries the slide instead. Check each drawing at full size and at 360 px: if it reads as clip art, a toy or a coloring book, change the source, not the stroke. Reason: shapes built from primitives or a formula read as clip art, and several drawing styles in one deck read as unfinished.
- **Sample case in a deck:** introduced by its own label, "Example" plus what it is ("Example week"), set once in label type where the case begins, never on the title slide; words such as "made up" go to the speaker notes and the review view (5.1, point 9). Reason: an "Example" label reads as content, while "made up" lines on stage slides read as disclaimers.
- **Rhythm:** after two to three dense proof slides one calm claim slide (H); chapter dividers from about 12 slides; thesis on the first and last slide, objections in the appendix.
- **Dramaturgy** (medium): pitch following Sequoia (sequence in the profile of the use case); sales following Raskin (profile case A2); board with the answer first (Minto); keynote alternating what is and what could be (Duarte).
- **Build and export:** HTML decks start from [templates/deck-shell.html](../templates/deck-shell.html) (structure only: 1920 x 1080 slides, presentation mode with F, builds with `data-step`, print rules), its demo slides and rules replaced, `lang` and title set; sources carry the class `source`, labels and page numbers the class `label`; the base of a key figure is content. The PDF comes from `pdf.mjs --selector .slide`, one slide per page in its end state ([scripts/README.md](../scripts/README.md)). An HTML deck embeds its fonts ([fonts.md](fonts.md)), so a live talk does not hang on the network. Builds follow the speaking order: one item per step, top to bottom, nothing added later to an item already shown. Every stop of every build is checked, not only the end state ([review.md](review.md) 3, gate Clear zone).

### 12.3 Carousels

Rules in the profile of case E2 ([b2b-marketing.md](use-cases/b2b-marketing.md)), also for B2C: storyboard first, cover with the strongest anchor, the answer as the largest element (from 15% of the card height), at most about 60 words per card.

### 12.4 Websites

- Sections follow the content, not the template sequence hero, logos, features, testimonials, pricing, FAQ, gradient band (tells D9, V7).
- Value proposition clear in 10 s, primary action in the first screen, important content in the first two screen heights; no auto carousel, no loading curtain (medium).
- Fade-up on every section is template chrome; motion following M-MOT ([directions/modules.md](directions/modules.md)).

## 13 Design system handover

When another tool or team continues the work, or the user asks for a system (cases C9, D2, J4), deliver the system with its reasons, not only its values, because tokens without an origin drift back to the median.

1. **Direction** with code and name, mode, base plus accent and the thesis from contract field 8.
2. **Tangible idea and through-line:** the object or situation from the product's world and the example that runs through all surfaces.
3. **Signature element** with its rule (where it appears; at most three times in full form per sequence, 5.5).
4. **Origin of every means:** one line per color, typeface, effect and image rule with its job and its source in the subject (U1, U4).
5. **Tokens** as `tokens.css` (CSS custom properties) and `design-system.json` (the same values, machine-readable): colors with role and share (saturation strategy, 7.2), fonts with role, license and source ([fonts.md](fonts.md) 4, 5), type roles and scale (6.1), spacing ladder and radii (8.1). Name tokens by role (`--color-action`, `--font-display`), never by value, so a later change keeps the job.
6. **Generic index** of the key surfaces after triage, with intentional tells and their reasons ([generic-catalog.md](generic-catalog.md) 2).
7. **Open items:** stand-ins, draft copy, open `[REQUIRED: ...]` points and missing assets, taken from the review view.

Credits go along ([templates/credits.md](../templates/credits.md)).

## Sources

1. Tuch 2012: https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/
2. Hekkert 2003, MAYA: https://www.jimdavies.org/summaries/HekkertSneldersVanwieringen2003.html
3. Kosslyn 2012: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2012.00230/full
4. WCAG 2.2: https://www.w3.org/TR/WCAG22/
5. Rutter after Bringhurst: http://webtypography.net/2.1.2
6. Butterick, Point size: https://practicaltypography.com/point-size.html
7. Apple HIG, Typography: https://developer.apple.com/design/human-interface-guidelines/typography
8. Inter Dynamic Metrics: https://d.rsms.me/inter-website/v3/dynmetrics/
9. Vercel Interface Guidelines: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
10. Radix Colors, Scale: https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale
11. Ottosson, Oklab: https://bottosson.github.io/posts/oklab/
12. Material, Dark theme: https://m2.material.io/design/color/dark-theme.html
13. NN/g, Dark Mode: https://www.nngroup.com/articles/dark-mode/
14. IBM, 2x Grid: https://www.ibm.com/design/language/2x-grid/
15. Wagemans 2012: https://pubmed.ncbi.nlm.nih.gov/22845751/
16. FT Visual Vocabulary: https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary
17. Few 2004: https://www.perceptualedge.com/articles/ie/the_right_graph.pdf
18. Borkin 2016: https://vcg.seas.harvard.edu/publications/20150101-beyond-memorability-visualization-recognition-and-recall
19. Datawrapper, colors: https://www.datawrapper.de/academy/what-to-consider-when-choosing-colors-for-data-visualization
20. Datawrapper, zero: https://www.datawrapper.de/academy/why-our-column-and-bar-charts-start-at-zero
21. a16z, 16 Startup Metrics: https://a16z.com/16-startup-metrics/
22. Penn State, Assertion-Evidence: https://writing.engr.psu.edu/research.html

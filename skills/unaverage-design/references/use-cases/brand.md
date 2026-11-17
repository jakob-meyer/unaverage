# Brand and identity

As of 2026-10-10. Profiles follow the schema in [README.md](README.md) 1; case matrix and R0 in [README.md](README.md) 2, gates in 4, render paths in 5. Evidence strength: high, medium (also a measured reference), H (derivation, to be tested); sources [n] at the end.

**Cases:** Case D1 Logo and wordmark, Case D2 Brand identity light, Case X3 Brand refresh, Case J1 Employer branding; plus the cross-cutting note on internationalization (complements Case X6 in [README.md](README.md) 7). Business stationery Case D3 in [startup.md](startup.md), business card Case I3 in [print-and-physical.md](print-and-physical.md).

## Group rules

1. **Identity is a system:** three anchors (mark or wordmark, typeface, color with meaning) plus one nameable variation rule (high, shown at Mastercard, MIT Media Lab, Nike Run, Uber [1]).
2. **Origin in the subject:** the main primitive comes from a sentence about audience or positioning, from the audience's tools or from the building blocks of the existing logo (medium, Reference: OpenAI DevDay, Reference: Faculty, Reference: Deezer, Reference: Robinhood, Reference: Vevo).
3. **Primitive test across five scales:** app icon, UI detail, layout rule, large format or space, motion; all five measured identities pass it (medium, cluster identity).
4. **Routes with a derivation:** several routes, narrowed by fit to purpose, complexity, similarity to existing work and "overtaken by a better idea" (high, Mozilla process by johnson banks: seven, then four, then one route). Typically effort level Studio.
5. **Cover the logo:** every application must be attributable to the brand without the logo ([directions/README.md](../directions/README.md) 14).
6. **Existing brands:** heritage inventory first ([exploration.md](../exploration.md) 3), continue instead of reinventing ([directions/README.md](../directions/README.md) 13).
7. **Rights:** fonts licensed for all applications (web, desktop, app, embedding in Office files, [fonts.md](../fonts.md)); no symbols from icon sets and nothing generated as a logo or own asset, because it cannot be protected ([images-and-assets.md](../images-and-assets.md) 8.6, 10).
8. **More than one language or market:** settle the cross-cutting note at the end of this file before the first route; an identity that works in only one language is a deliberate decision in the design contract.

## Case D1 Logo and wordmark

Who: S high (founding, rebrand), B2B and B2C rarely. Register Persuade. Evidence: Reference: Deezer, Reference: Faculty, Reference: Vevo.

- **Specs:** SVG master with text as paths; variants positive, negative, single color; set the minimum size and clear space (H). Derivatives: app icon 1024 x 1024, layered, appearances default, dark, clear, tinted (high [2]); favicon set with favicon.ico 32 x 32, icon.svg, apple-touch-icon 180 x 180, manifest 192 and 512, maskable 512 with a safe circle of 409 px (medium [3]); social logo 400 x 400 (high [4]); display logo 1200 x 1200 and 1200 x 300 ([README.md](README.md) 4.2).
- **Minimum type size:** minimum size instead of type: recognizable as a favicon at 16 px and as an app icon at 64 px, holds at 2 m roll-up height, works in black and white first (H). A claim in the lockup follows the gate of its medium.
- **Situation:** seen small and in passing a thousand times (favicon, app icon, profile picture), rarely large; recognition grows over years.
- **Success:** appropriate, distinctive, memorable, simple; describable or sketchable after seeing it twice (medium [5]); works in all derivatives.
- **AI failure modes:** wordmark in an unedited list typeface (tell A1); generic monogram in a circle; gradient as the main means (tell V2); faulty glyphs from image generators; too much detail for small sizes; symbol from an icon set (tell C10).
- **Pros:** an idea from the name or subject (a window for Windows, the W as a frame for the Whitney); edited letterforms instead of a stock typeface; many sketches, several routes, narrowing with criteria; tests in real applications; optical corrections (kerning, overshoots, stroke weights).
- **Directions:** home ONE, RUL. The distances depend on the R0 of the brand category. Tech startup (R0 PRO): no near option (PRO and DAT excluded, ORD only 1); edge ONE (punchline from the name) or RUL (logo as a kit with named states, principle from Reference: Deezer), also HER with existing heritage (fit 2); bold TYP (wordmark as image). Excluded PRO, DAT.
- **Assets:** name, positioning sentence, logos of three to five competitors for differentiation; for a rebrand a heritage inventory. Substitute: without a positioning sentence, ask that question first; do not draw.
- **Output:** SVG (master, paths), PNG exports, logo sheet as HTML and PDF; R-Vector.
- **Check:** rendering at 16, 32, 64, 512 px; black and white; contact sheet of all routes; contact sheet next to the competitors (risk of confusion); license of the source typeface in the credits file.

## Case D2 Brand identity light (brand board)

Who: S high. Register Persuade. Evidence: Reference: OpenAI DevDay, Reference: Faculty, Reference: Robinhood (cluster identity).

- **Specs:** board on one surface (1920 x 1080, or A3 or Tabloid landscape) with wordmark, colors (hex, RGB, CMYK approximation, contrast pairs), fonts with cleared licenses, imagery, tone examples and applications in real formats; in Studio at least six touchpoints, among them a deck with data, a motion frame and the business stationery (Case D3, Case I3).
- **Minimum type size:** board like a reading deck (body text 22 px, sources and metadata 18 px at 1080 px height); applications at original size with the gate of their medium.
- **Situation:** third parties (freelancers, agency, team) build posts, slides and pages with it; the board is looked up, not admired (H).
- **Success:** third parties build consistently; the brand is recognizable without the logo.
- **AI failure modes:** moodboard of stock photos (tell V8); six equal colors without roles (principle U4); a type pairing from L1 or L2 without a deliberate axis (tell A1); no application examples; industry clichés like piggy bank and coin stacks (tell V9).
- **Pros:** three anchors plus a variation rule; three to six named states and, where possible, a small generator (medium, cluster identity); colors with roles and shares; tone as part of the identity; contrast check of every combination; license check; do and don't.
- **Directions:** home RUL (never excluded, the widest option). Starter set (R0 WRM, insurance, health, fintech B2C): near WRM or DRW in best form; edge RUL, also ORD or ONE (fit 2); bold TYP or MAX. Example Röstwerk (a new coffee roastery, without material, before the answers): R0 STI from the category table (premium D2C), never recommended without an asset of its own; RUL in front and recommended, bold by seed from the bold directions (calculation following [directions/README.md](../directions/README.md) 11). Excluded DAT.
- **Assets:** positioning, audience, competition, desired lifetime, maturity of the audience (the 2020 identity was replaced in 2024 when experienced investors became the audience; Reference: Robinhood). Substitute: missing answers as assumptions in the design contract.
- **Output:** HTML board (rendered as PNG and PDF), tokens (CSS, JSON), SVG logos, credits file; R-Vector, R-Raster. Handover following [craft.md](../craft.md) 13. For teams that keep building themselves, the template kit Case J4 ([b2b-marketing.md](b2b-marketing.md)).
- **Check:** contrast matrix of all color pairs; applications at original size; primitive test across five scales; cover the logo; swap test (does the system work almost unchanged with another name?).

## Case X3 Brand refresh of an established brand

Who: B2B and B2C medium, S rarely. Register Persuade. Evidence: Reference: Scout Motors, Reference: Robinhood.

- **Specs:** like Case D2 plus a heritage inventory (logos, colors, forms, characters, archive states sorted by recognition) and before and after in real applications.
- **Minimum type size:** like Case D2.
- **Situation:** customers know the brand; every change is compared; internally high expectations and fear of loss (H).
- **Success:** recognition stays (Mastercard without the name: 81% spontaneous recognition, medium [1]); the brand feels contemporary.
- **AI failure modes:** reinvention without heritage; coat of arms, "Since 1890" and gold as retro kitsch (tell V9, AI trap HER); several eras mixed.
- **Pros:** reduction to existing, unmistakable elements (the Mastercard circles from 1968, high [1]); old and new in the same frame (Reference: Scout Motors, Awwwards E-Commerce of the Year 2025); constancy in assets, variety in execution; tradition as construction rather than ornament (Reference: Saudi Design Festival).
- **Directions:** home HER, RUL. Starter set (R0 HER): near HER in best form; edge RUL (primitive from the logo building blocks), also ONE (asset as idea, fit 2); bold ORD (radical reduction to one element in a strict system). Excluded PRO, DAT.
- **Assets:** required: a heritage inventory with archive material. Substitute: without an inventory only a dated era quotation with a reason ([directions/README.md](../directions/README.md) 9).
- **Output:** like Case D2 plus a before-and-after contact sheet; R-Vector, R-Raster.
- **Check:** recognition with the logo covered and with one partial element; before and after in three applications.

## Case J1 Employer branding

Who: B2B and B2C medium, S medium (growth phase). Register Persuade and Feed. Evidence: rule-based.

- **Specs:** LinkedIn career page: main image 1128 x 376, modules 502 x 282, photos 900 x 600, each up to 3 MB (high [4]); career page of the website (Case B2); social series (Case E1, Case E2); job ad visuals with neutral job titles per local law ([compliance.md](../compliance.md) 3; EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 9).
- **Minimum type size:** per format following [README.md](README.md) 4.
- **Situation:** candidates check on the phone, often in the evening, compare employers and distrust advertising language (H).
- **Success:** fitting applications; employees share the content; recognition.
- **AI failure modes:** generated "employees" (G7); diverse stock teams (tell V8); value words like "passion" or "innovation" as large type (tell E1, V21); a card grid with benefit icons (tell C8, D3).
- **Pros:** real people, places and work situations (real portraits are looked at longer, stock models are overlooked, medium [6]); quotes with names and approval; concrete work details instead of value words; everyday instead of office settings (an everyday setting brought plus 32.8% emotion in B2B tech spots, medium [7]); photo production in real everyday work.
- **Directions:** home EDI, WRM. Starter set (R0 WRM, stock teams): near WRM (real people); edge EDI (reportage), also RUL (fit 2); bold TYP (work details as type, at the same time an honest substitute without photos). No exclusion.
- **Assets:** required: photos of real employees with written consent, quotes with approval. Substitute: type and work details without faces, free photos of tools, material or work situations only as mood (never as "our team" or "our office") plus a photo request ([images-and-assets.md](../images-and-assets.md) 5); no generated people, no stock faces.
- **Output:** PNG series, HTML career page; R-Raster, R-Web.
- **Check:** origin and consent of every photo in the credits file; no generated people; the series in the contact sheet.

## Cross-cutting note: internationalizing the brand

Complements Case X6 ([README.md](README.md) 7: text length, `lang` and `dir`, RTL, formats, color codes, robustness of the directions). Here is what an identity must settle before the first market entry. Evidence: Reference: Baemin (Korea Design Award 2025), Reference: Saudi Design Festival (D&AD Graphite Pencil 2023), Reference: YAMAP (Good Design Gold 2024).

1. **No regional cliché:** none of the three award-winning works uses the cliché of its region; a local form tradition (Kufic, the Hangul syllable block, the kanji grid) becomes a construction rule of type or grid, never ornament. Gold, arabesque, mosque, cherry blossom, fan, dragon are category clichés (tell V9; medium).
2. **Bilingual wordmark:** one script leads, the other labels (Latin mark at 1/4 to 1/6 of the Arabic height, Reference: Saudi Design Festival); a detail of the leading script may appear in the second; no equally sized mirrored double lines (medium). Logos are never mirrored in RTL (high [8]).
3. **Type-led identities are tied to a language:** two of the three references make the script of their language the main image, Baemin uses the brand name as a pun. Rebuild TYP and ONE per language or downgrade them in the ranking; RUL, ORD, STI carry across languages (H, matches README 7).
4. **House typeface across scripts:** check coverage per target language (latin-ext, Cyrillic, Greek, Vietnamese; `scripts/font-check.mjs` checks only the character sets de and en with `--lang de,en`, [fonts.md](../fonts.md) 3). CJK fonts have thousands of glyphs: reading text in the system font or as a subset via `unicode-range`, the house typeface only for display, display as an image with alt text if need be (medium, Reference: Baemin). Set fallback stacks per script in the system sheet and check them on the render. The lists L1 and L2 are Latin; for other scripts the origin question following G5 applies.
5. **Setting values per script** (display values medium from the references, reading text H):

| Script | Rules |
|---|---|
| Japanese | tracking 0; kinsoku (no closing brackets and punctuation at the start of a line); display line breaks at "、" and "。" with `word-break: keep-all` or by hand; emphasis through weight, color or emphasis dots, never italic; line height display from 1.4, reading text 1.5 to 1.8 (high [9]; Reference: YAMAP) |
| Korean | break headlines by words (`keep-all` or by units of meaning); display from 1.35, reading text 1.45 to 1.7; slightly negative tracking possible in display (-0.04 em) (high [10] for line breaks; Reference: Baemin) |
| Arabic | never `letter-spacing` (it breaks the connections); justified only with kashida or glyph variants; hierarchy through size and weight, no caps, no italic; next to Latin caps about 2 pt larger; numerals by market (Eastern Arabic for example in Saudi Arabia, Egypt, Iraq; Western in Morocco, Algeria), numbers always run left to right (high [8][11]) |

6. **Mirror by rule:** layout, navigation, progress, sliders and directional icons mirror; logos, photos, clocks, check marks and the digits of a number never; reverse number sequences in progress indicators; align paragraphs by their language (high [8]).
7. **Check the brand color against regulated codes:** basic feelings about colors are largely universal, reasons like "red means luck in country X" do not hold ([README.md](README.md) 7). Mandatory check for codes that can reinterpret a brand color: stock market colors (rising is red in mainland China and Korea, green in Hong Kong and the West; relevant for fintech brands, medium), official warning and hazard colors (Japan standardizes flood maps, high [12]), traffic and safety colors. Justify a deviation in the design contract.
8. **`lang` per version is a gate**, missed even by award winners (Reference: Baemin with `lang="en"` on Korean content); for Japanese and Chinese count text amounts in characters.
9. **Check:** wordmark and primitive in every target script in the contact sheet; glyphs by eye; lockup in LTR and RTL; if native-speaker review is missing, list it as open in the wrap-up. Question in the kickoff: "Which languages and markets, and in which order?"

## Sources

1. Pentagram, Mastercard: https://www.pentagram.com/work/mastercard/story
2. Apple HIG, App icons: https://developer.apple.com/design/human-interface-guidelines/app-icons
3. Evil Martians, How to Favicon: https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
4. LinkedIn Help, images for pages and career pages: https://www.linkedin.com/help/linkedin/answer/a563309
5. Sagi Haviv, criteria of good logos: https://logogeek.uk/en/sagi
6. NN/g, Photos as Web Content: https://www.nngroup.com/articles/photos-as-web-content/
7. LinkedIn B2B Institute, Anatomy of a Great B2B Ad: https://business.linkedin.com/content/dam/lem/business/en/advertise/resources/b2b-institute/b2b-creative-v2.pdf
8. Apple HIG, Right to left: https://developer.apple.com/design/human-interface-guidelines/right-to-left
9. W3C, Requirements for Japanese Text Layout: https://www.w3.org/TR/jlreq/
10. W3C, Requirements for Hangul Text Layout: https://www.w3.org/TR/klreq/
11. W3C, Arabic and Persian Layout Requirements: https://www.w3.org/TR/alreq/
12. MLIT, guideline for flood hazard maps: https://www.mlit.go.jp/river/shishin_guideline/pdf/hazardmap_tabiki.pdf

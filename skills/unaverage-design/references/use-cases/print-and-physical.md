# Print and physical space

As of 2026-10-10. Profiles follow the schema in [README.md](README.md) 1; case matrix and R0 in [README.md](README.md) 2, gates in 4, render paths R-Print, R-Vector, R-Slide in 5. Evidence strength: high, medium (also a measured reference), H (derivation, to be tested); sources [n] at the end.

**Cases:** Case H2 Trade fair booth and roll-up, Case I1 Flyer, Case I2 Poster and out-of-home, Case I3 Business card, Case I4 Packaging, Case I5 Merch, Case X5 Keynote and stage. Letterhead and email signature (Case D3) in [startup.md](startup.md).

## Group rules

1. **The printer's or vendor's datasheet first:** final size, bleed, safety margin, color profile, resolution, file format. Set up bleed and safety margin yourself; without a datasheet use 3 mm bleed and a 3 mm safety margin with the note "check before printing" (H). Images 300 dpi at final size, for large formats per datasheet (medium [1]).
2. **Name the tool gap openly:** Chrome PDF is RGB, without PDF/X, crop marks and spot colors. In Europe, offset on coated paper expects PSO Coated v3 (FOGRA51), total ink coverage 300%, black up to 96% (high [2]); elsewhere the printer's datasheet sets the profile (group rule 1). The printer does the conversion, and the wrap-up says so. Set black text as pure black, never as four-color black (H).
3. **Minimum type size in print:** body text 9 pt, footnotes and metadata 7 pt ([README.md](README.md) 4.1); distance formats by the cap height rule; packaging by the market's food labeling law (EU: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 11).
4. **Calculate distance instead of guessing** ([directions/README.md](../directions/README.md) 2.3): cap height equals the reading distance divided by 3.6 m per cm (calm) or 2.4 m per cm (busy; the transfer to trade fair halls is H), all caps plus 15% (high [3]); at most three information levels; check view at 10% size, 3 to 5 seconds.
5. **Material as part of the idea:** paper, fold, finishing, die cut and printing process belong to the design, not to production afterwards (medium, G.F Smith, D&AD Black Pencil). In the wrap-up recommend paper and finishing, even when only the PDF is delivered.
6. **Check the scale:** view every surface also at the size at which the eye sees it (arm's length, shelf, 6 m aisle, street), rendered as a check page.

## Case H2 Trade fair booth and roll-up

Who: B2B medium to high (trade fairs), S medium. Register Distance, long-distance mode. Evidence: rule-based.

- **Specs:** roll-up 85 x 200 cm, data format for example 856 x 2186 mm with bleed; the bottom 10 to 17 cm are hidden in the base, nothing important below 300 mm height; CMYK PDF, images per datasheet (medium [1]). Booth wall per booth builder; key message above head height.
- **Minimum type size:** cap height from the reading distance: key message from 6 m in a busy hall about 2.5 cm, comfortably readable about 5 cm (practitioners' rule 1 cm per 1.2 m, medium [4]); all caps plus 15%; the conversation level at 1 m by the print gate.
- **Situation:** visitors pass at 5 to 6 m, distracted, 3 to 5 seconds; the conversation happens at 1 m (H).
- **Success:** grasped in passing: who, what, what for.
- **AI failure modes:** a scaled-up flyer layout; body text; logo wall (tell V5); QR code too small or too low; stock photo instead of the product (tell V8).
- **Pros:** three information levels (long distance above head height, approach, conversation at eye level); one large image or object; the booth wall thought of as a space; simulation at reading distance; material and light planning.
- **Directions:** home ORD, ONE, TYP. Starter set (R0 ORD, industry): near ORD in Poster mode; edge RUL or STI; bold TYP or ONE. No exclusion. The trade fair kit shares constant and variable with the event visuals (Case H1, [b2b-marketing.md](b2b-marketing.md)).
- **Assets:** logo as vector, image or product in print resolution, one key message, datasheet. Substitute: a type anchor for long distance or a best-form stand-in in print resolution (a free photo of material or place of use, the product as a drawing, [images-and-assets.md](../images-and-assets.md) 5) plus an asset request; replace before printing or get explicit approval, never a placeholder area in print.
- **Output:** PDF at final size per datasheet (name the RGB gap), PNG preview; R-Print.
- **Check:** view at the size the eye sees from 6 m (200 cm height equals about 12 cm on a screen at 35 cm distance, H); cap height against the rule; base zone free; QR code between 100 and 160 cm height (H).

## Case I1 Flyer

Who: B2C medium (local, events), B2B low to medium (trade fair), S low. Register Persuade. Evidence: rule-based.

- **Specs:** ISO A6 105 x 148, A5 148 x 210, A4 210 x 297 mm, DL 99 x 210 mm (German formats: [markets/german.md](../markets/german.md) 7); US: Letter 8.5 x 11 in, check other sizes with the printer; bleed 1 to 4 mm by printer, safety margin usually 3 mm (medium [5]); PSO Coated v3 for coated paper in Europe (high [2]).
- **Minimum type size:** print gate (body text 9 pt, small print 7 pt); target body text 10 pt (medium [6]).
- **Situation:** in the hand at arm's length, about 3 seconds; taken along or left behind.
- **Success:** the message at arm's length in 3 seconds; one action (address, QR code, date).
- **AI failure modes:** a web page squeezed onto A5; RGB colors; no bleed; 8 pt gray on white (tell H4, H5).
- **Pros:** format, paper and fold as part of the idea; a strong front, an informative back; datasheet first; proof.
- **Directions:** no home (fit at most 2 everywhere), follows the brand. Starter set (R0 MAX, event flyer): near MAX, TYP or RAW in best form; edge EDI, DRW or ONE; bold ORD, WRM or RUL. No exclusion.
- **Assets:** datasheet, content, image in print resolution. Substitute: a stand-in that shows the claim ([images-and-assets.md](../images-and-assets.md) 5); type accompanies and never carries alone; without a datasheet the defaults from group rule 1.
- **Output:** PDF with bleed (PDF/X through the printer), PNG preview; R-Print.
- **Check:** page size including bleed; safety margin; smallest type in pt; view at arm's length; RGB note in the wrap-up.

## Case I2 Poster and out-of-home

Who: B2C medium, S and B2B low. Register Distance. Evidence: Reference: Oatly (out-of-home), Reference: Shot on iPhone.

- **Specs:** ISO A1 594 x 841 mm, A0 841 x 1189 mm; out-of-home formats (billboards, backlit city posters) per the vendor's datasheet (German poster formats: [markets/german.md](../markets/german.md) 7); print data per vendor.
- **Minimum type size:** cap height from the reading distance (group rule 4); a second reading level only where people wait, sized by the reading distance of the waiting zone.
- **Situation:** walking or driving past, one to three seconds; waiting zones allow a second reading level (Oatly "Help Dad": two Gold Lions 2021, medium, Reference: Oatly).
- **Success:** one idea at one glance; brand recognizable; talkability.
- **AI failure modes:** too many elements; small type; a generic AI image (tell V1, V9); text over the main photo with a black gradient (AI trap EDI).
- **Pros:** one dominant element; text in a band or field instead of over the photo (Reference: Shot on iPhone, Outdoor Grand Prix 2015, medium [8]); two reading levels only with dwell time; test at scale and in context.
- **Directions:** home ONE, TYP. Starter set (R0 TYP, for product advertising MAX): near TYP in best form; edge ONE; bold STI, EDI or RUL. No exclusion.
- **Assets:** key message, image in print resolution, the vendor's datasheet. Substitute: a type or object anchor; no generated scenes that look like photos of real events.
- **Output:** PDF to scale per vendor, PNG; R-Print.
- **Check:** view at 10% size in 3 seconds; number of elements; cap height by reading distance; composite into an environment shot (street, bus stop) as a check image (H).

## Case I3 Business card

Who: S medium, B2B medium. Register Persuade. Evidence: rule-based.

- **Specs:** final size by market: 85 x 55 mm (Europe) or 3.5 x 2 in (US), check with the printer; for 85 x 55 mm the data format is 91 x 61 mm (3 mm bleed per side), safety margin 3 mm (medium [5]).
- **Minimum type size:** name 9 pt, contact lines as metadata 7 pt, target 8 to 9 pt; contrast 4.5:1 also on effect paper.
- **Situation:** handed over from hand to hand, one glance, later in a drawer or photographed (H).
- **Success:** name, role, contact at once; the brand tangible in the material.
- **AI failure modes:** a web card look with radius and shadow; icons before every line (tell C10); gradient (tell C1, V2); type too small.
- **Pros:** paper and finishing as brand carriers (G.F Smith: business cards from three random papers, medium); the back as a brand surface; clear typography; mandatory notices and letterhead in the same system (Case D3).
- **Directions:** home STI, RUL. Starter set (R0 ORD): near ORD; edge RUL (primitive on the back) or STI (paper as material); bold TYP, ONE or HER. Excluded PRO, DAT.
- **Assets:** contact details, logo as vector, paper choice. Substitute: a missing line is dropped in the presentation view and listed in the review view ([SKILL.md](../../SKILL.md) stage 4, point 6), never invented numbers; close the gap before printing.
- **Output:** PDF/X through the printer, front and back; R-Print.
- **Check:** data format, safety margin, smallest type, contrast; view at original size on screen (85 mm at 96 dpi is about 321 px).

## Case I4 Packaging

Who: B2C high (consumer goods), S medium (D2C). Register Persuade and Distance (shelf). Evidence: Reference: Graza.

- **Specs:** the manufacturer's dieline is mandatory; food: mandatory notices at the minimum x-height the market's food labeling law sets (EU: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 11); EAN-13 nominal size 37.29 x 25.93 mm including quiet zones, allowed 80 to 200%, quiet zones left 3.63 mm, right 2.31 mm (medium [10]); printing process (flexo, offset, digital) per manufacturer.
- **Minimum type size:** x-height of mandatory notices per the food labeling law (EU: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 11); variety name readable from 1 to 2 m shelf distance (H); other text by the print gate.
- **Situation:** on the shelf about 2 seconds next to competitors; at home in the hand daily (H).
- **Success:** quickly found and placed on the shelf (category, brand, variety); judged on design quality, brand expression, creativity and emotional connection (high [11]).
- **AI failure modes:** a flat label without a dieline; mandatory notices missing or too small; unrealistic renderings with the wrong material; category codes with no connection to the product or brand (gold, coat of arms, "Since 1890"; water drops, leaves; tell V9); environmental symbols without proof.
- **Pros:** form or material as the idea (squeeze bottle, D&AD Graphite Pencil 2023, Reference: Graza); a variety system of constant and variable; unmistakable elements that carry over years; shelf test next to competitors; 3D mockup on a real dieline.
- **Directions:** home STI, HER, MAX. Starter set (R0 WRM, D2C natural tones): near WRM or DRW; edge HER or STI; bold MAX (lead color from the label). Traditional product (R0 HER, coat of arms and gold): near HER in best form, bold MAX or TYP. Excluded PRO, DAT. M-HUM possible as imagery ([modules.md](../directions/modules.md)).
- **Assets:** required: dieline, mandatory texts, barcode number. Substitute: without a dieline only a label draft with a note; missing mandatory texts in the label's place as a quiet gap, `[REQUIRED: ...]` only in the review view ([compliance.md](../compliance.md) 2; EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 11).
- **Output:** PDF with a dieline layer, PNG mockup, SVG for illustrations; R-Print, R-Vector.
- **Check:** measure the x-height; barcode size and quiet zones; shelf simulation in the contact sheet with competitors at shelf size; dieline and bleed; environmental and health claims following [compliance.md](../compliance.md) 3 (EU and DACH: [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 6 and 11).

## Case I5 Merch

Who: S medium, B2B and B2C low to medium. Register Persuade. Evidence: rule-based.

- **Specs:** screen printing with vector data and Pantone C spot colors, one screen per color; print area for example 30 x 40 cm (men's), 26 x 40 cm (women's) (medium [12]); photo print only digitally, check values with the vendor.
- **Minimum type size:** finest line and smallest type per datasheet; must-read text by the reading distance when worn (1 to 3 m, group rule 4).
- **Situation:** worn and seen, also by people outside the audience; the wearer decides by taste, not by brand loyalty (H).
- **Success:** worn and used, not just handed out.
- **AI failure modes:** a large logo centered on the chest (tell V19); photo print with a gradient; too many colors.
- **Pros:** an insider idea or a sentence instead of a large logo; small placement; few colors; good textile.
- **Directions:** home RUL, MAX, TYP, RAW. Starter set (R0 TYP): near TYP, RAW or MAX in best form; edge ONE, HER or DRW; bold RUL (primitive as pattern). Excluded ORD, PRO, DAT.
- **Assets:** logo and primitive as vector, Pantone values, textile. Substitute: spot colors as an approximation with the note "set Pantone at printing".
- **Output:** SVG or PDF with named spot colors; R-Vector, R-Print.
- **Check:** number of spot colors; vector without gradients; placement to scale on the mockup; readability from 2 m.

## Case X5 Keynote and stage

Who: S medium (demo day, conference, launch), B2B medium (conference talk), B2C low. Register Distance. Evidence: Reference: Apple Keynote.

- **Specs:** 16:9, 1920 x 1080; dramaturgy: what is, turning point, alternation between what is and what could be, call to action, outlook (medium); Demo Day 2:30 minutes (medium [13]); one object or one word per slide, built in single steps in sync with the sentence (medium, Reference: Apple Keynote).
- **Minimum type size:** talk deck gate: content 40 px, sources 18 px at 1080 px height (high [14]); main word about 18 to 19% of the screen height (about 200 px), subline about 75 to 80 px, 1 to 7 words per state (medium, Reference: Apple Keynote); one-word slides from 160 px.
- **Situation:** a hall, the audience listens and sees every slide for a few seconds from 5 to 30 m (H); glance test 3 seconds (medium [15]). Whoever presents live needs a talk deck with type sizes for the talk, not a reading deck.
- **Success:** the key message of every slide in 3 seconds; the punchline lands in the same frame; the audience remembers the thesis and one number.
- **AI failure modes:** bullet slides with icons (the list shown all at once is the most frequent flaw, 96%, high [14]; tell C8, F6); topic titles (tell V16); a competitor table with check marks; the punchline as a card with gradient and glow (tell C1, C3); performance curves without an axis as proof (tell V17; works for launch emotion, not for investors).
- **Pros:** the slide shows the object of thought, not the spoken text; exactly one element per change; a standing anchor plus a changing addition; the punchline through the only color in the last state; chapters as a single digit (Reference: Apple Keynote); a product without an interface as a rendering with at most 6 callouts on hairlines, callouts here from 40 px (Reference: Duarte Thermo Fisher); light and dark by content with a fixed meaning.
- **Directions:** home STI, ONE, TYP. Starter set (R0 DAT, bullet slides): near DAT (one number per slide) or PRO (live demo); edge STI (one object in the light); bold TYP or ONE. No exclusion; ORD and RAW only as an accent. Modules M-MOT (build) and M-SPA as one moment ([modules.md](../directions/modules.md)).
- **Assets:** spoken text, product images or object, one key number with a source. Substitute: a type slide with the key sentence or a stand-in image of object and material; without a sourced number another anchor form, never a placeholder metric.
- **Output:** HTML 1920 x 1080 with step-by-step builds for the talk, PDF of the end states, a reading version as its own deck if it is sent ([README.md](README.md) 4.1 hybrid deck); R-Slide.
- **Check:** glance test at 25% size; words per state; smallest type 40 px; contrast for projection (avoid gray tones under 4.5:1, projectors lose contrast); contact sheet of the end states.

## Sources

1. wir-machen-druck, datasheet roll-up 85 x 200 cm: https://www.wir-machen-druck.ch/tpl/manns-partner/media/ddb/druckdatenskizzen/0/basic_rollup_bannerdisplay_85x200cm_40_1.pdf
2. ICC, PSO Coated v3: https://registry.color.org/profile-registry/PSOcoated_v3
3. USSC, Guideline Standards for On-Premise Signs 2018: https://usscfoundation.org/wp-content/uploads/2018/03/USSC-Guideline-Standards-for-On-Premise-Signs-2018.pdf
4. Signs.com, Letter Height Visibility: https://www.signs.com/blog/?p=16381
5. Datasheets for business card and flyer: https://wir-machen-druck.de/tpl/manns-partner/media/ddb/druckdatenskizzen/0/visitenkarten_85x55_munkenlynx_40_2.pdf , https://print24.com/uk/printing-products/flyer/flyer-dl
6. Butterick, Typography in Ten Minutes: https://practicaltypography.com/typography-in-ten-minutes.html
7. German poster formats (crossvertise): [markets/german.md](../markets/german.md) 7
8. MacRumors, Shot on iPhone Grand Prix: https://macrumors.com/2015/06/23/apple-wins-grand-prix-shot-on
9. EU Regulation 1169/2011 Art. 13 (food information): [markets/eu-dach-compliance.md](../markets/eu-dach-compliance.md) 11
10. GS1, Barcode Size Guide: https://gs1my.org/sites/default/files/GS1%20Retail%20and%20Non-Retail%20Barcode%20Size%20Guide.pdf
11. Pentawards, Judging process: https://pentawards.com/live/en/page/judging-process
12. wir-machen-druck, datasheet T-shirt screen printing: https://www.wir-machen-druck.ch/tpl/manns-partner/media/ddb/druckdatenskizzen/0/tshirt_siebdruck_damen_wei%C3%9F_rund_1.pdf
13. Hale, How to Design a Better Pitch Deck (Y Combinator): https://www.ycombinator.com/blog/how-to-design-a-better-pitch-deck
14. Kosslyn et al. 2012, PowerPoint Presentation Flaws: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2012.00230/full
15. Duarte, The Glance Test: https://www.duarte.com/resources/slide-glance-test/

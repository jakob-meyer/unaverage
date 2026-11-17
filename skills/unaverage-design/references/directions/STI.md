# STI Stillness and Material

**In one line:** Directed emptiness around a real object in consistent light; ground tone and type come from material or brand, everything else goes.

**Group** II Value and origin | **Lead effect** W5 Value (also W1, W4, W6, W7, W13) | **Loudness** very quiet (span 0 to 2 of 6) | **Material** an object in photo quality; without it downgraded, request a packshot spec, until then the object as a drawing or a free material photo as a stand-in

## 1 Effect

Calm, high-quality, assured, careful, quietly desirable ("This costs more, and I understand at once why", H). Premium buyers read calm as quality; demand for calm is growing according to trend reports (medium). Without an object the same emptiness looks empty instead of calm.

## 2 Fits, does not fit

| Field | Content |
|---|---|
| home | Cases B2 B2C, B5, D3, I3, I4, J2 (hardware), X5 (Stage mode); as the skin of calm solo work Cases C1, C3, C6, C8, C10 |
| good | Cases B1, B2 B2B, C2, C4, C5, C9, D2, E1 B2C, G1, G7, H2, I2, J3, X1, X3; product detail page, catalog, lookbook, brand magazine |
| accent only | Cases A1, A2, A5, B3, B4, C7, D1, E1 B2B, E2, E3, F1 to F3, G2 to G4, G6, H1, I1, I5, J1, J4, X4 |
| never | Cases A3, A4, F4, G5, X2 |
| industries | beauty, fragrance, interior, wine, hospitality, consumer hardware, audio, publishers, thought leadership, premium services, premium banking |
| B2B, B2C | B2C strong; startups with a physical product; B2B for premium services and corporate publishing |
| category default | R0 for premium D2C, beauty, interior, hospitality (caricature: cream, contrast serif, terracotta): only with an object in photo quality and a ground tone from the material |
| does not fit | discount, offer activation, price wars, Gen Z loudness, paid social feed; software without an object (then PRO); audiences that prefer high colorfulness and density [4] (medium) |

## 3 Principle and evidence

The emptiness is directed: it points at an object, and the object supplies ground tone, light and often the type.

- **School:** Ikko Tanaka and Kenya Hara for Muji, emptiness as a state that can be filled [1]; Dieter Rams, principles of good design [2] (high).
- **Reference: Apple AirPods:** one claim per screen, one proof per claim, the surface 99.7% achromatic (medium; brand high). **Reference: Apple Keynote:** one object or word per slide (medium).
- **Reference: Aesop:** ground tone from label and paper, title type from the logo, images darker than the page; relaunch 2018 with Webby Honoree 2019 [3] (high).
- **Reference: teenage engineering:** a catalog without advertising language, the object labels itself (medium). **Reference: Stripe Press:** warm black, one family, the work as navigation (medium). **Reference: Mercury:** a calm scene instead of a dashboard, day and night switch (medium). **Reference: Things:** order by the user's question, color on the frame; Apple Design Award 2009 and 2017 (high).

## 4 Parameters

Three modes, set in the design contract, because the measurement profile has several peaks: **Stage** (one object filling the screen, a large claim; Apple, Mercury), **Quiet** (flat scale, paper, reading; Aesop, Stripe Press, Things), **Catalog** (one full-bleed image per product family, below it an identical grid; teenage engineering). What they share is the low number of elements per screen, not the size.

**Typography**

| Parameter | Value |
|---|---|
| Classes | first choice a typeface with an origin (the system typeface of the brand's own devices, derived from the logo, house or book typeface); otherwise a humanist or flared sans, a narrow Didone or a text serif with optical sizes as the sole voice; at most two families; no caps eyebrows, chapter marks in sentence case at 14 to 28 px |
| Scale | Stage 5 to 8, mobile from 3.5; Quiet 1.5 to 2.5; Catalog 2 to 3.5 |
| Weights | Quiet 300 to 500 (hero headline in the Persuade register from 500 or in a display cut or an optical size, [craft.md](../craft.md) 5.1, point 2); Stage 500 to 600; at most three |
| Tracking | Stage display -0.01 to -0.02 em; lead 22 to 24 px slightly positive (+0.01 em); Quiet 0 |
| Setting | Stage: one claim per screen, three to six words with a period; reading column at most 540 px; lead in two-tone setting (gray with a dark key phrase); numbered footnotes directly at numbers; the voice reaches into placeholders, forms, footer and cookie notice (U12) |

Pairings (starting points; check status per pairing in [fonts.md](../fonts.md)):

- Pairing A: Familjen Grotesk 400 and 500 as the sole voice, character forms for Stage mode ([fonts.md](../fonts.md)).
- Pairing B: Commissioner as one family, titles with axis FLAR 100 in 400 (hero headline in the Persuade register in 500), text FLAR 0 in 300 to 400; a pharmacy and book feel for Quiet mode; Bunny Fonts does not deliver the axis ([fonts.md](../fonts.md)).
- Pairing C: Kalnia 300 for titles, Albert Sans 300 and 400 for text (beauty, interior); Fontshare alternative Boska with Switzer, never bundle and not in artifacts ([fonts.md](../fonts.md)).

Commissioner, Kalnia and Albert Sans have no tabular figures: set price lists with a fixed column width or in Familjen Grotesk.

**Color**

| Parameter | Value |
|---|---|
| Logic | surface achromatic, color only from object and photo; ground tone tinted to match the material (cool for technology, warm for paper and pharmacy, dark-warm for leather and books), derived with `pixels.py palette` from the main photo; signal under 1% of the surface or only as a text color (ink); cream only with material evidence (otherwise tell B3) |
| Saturation strategy (G4) | A; background chroma at most 0.016 in OKLCH, unless justified by the material |
| Shares | ground 55 to 70%; image and object 25 to 45% (Stage more); text 3 to 8%; signal under 1% |

Starter palettes (placeholders; adjust from the main photo and recalculate):

| Variant | Roles and hex | Contrast (WCAG, recalculated) |
|---|---|---|
| cool (technology) | ground #F3F4F5 and #FFFFFF; text #1C1D1F; secondary #64666A; purchase action as a dark rectangle #1C1D1F with white type | text 15.32:1; secondary 5.22:1 on ground, 5.75:1 on white; white on the purchase action 16.87:1 |
| warm (paper, pharmacy; only when tied to the material) | ground #FBFAF5; text #2B2A27; secondary #6B675F; ink #8A5A2B only as a text color | 13.73:1; 5.39:1; 5.62:1 |
| dark-warm (leather, book) | ground #1F1A1A; text #EEE9E2; secondary #A79F96; color only from objects | 14.24:1; 6.59:1 |

**Layout:** a rhythm of stage (full bleed with one object, centering allowed) and order zone (flush left, grid, list, split); in Catalog one identical cell for everything (reference: teenage engineering, three columns with hairlines). Density very low per screen; across the page there may be a lot of text, calm is a question per screen (reference: Apple). Large margins, the emptiness points at the object; asymmetric splits with a full-bleed image, text keeps about 110 to 135 px distance. At most one control in the hero.

**Imagery:** one real object in consistent light with the same light direction; the product is the brightest point in the image; low-key photos darker than the page act as a passe-partout; cutouts in an identical grid with a visible product feature; packshot spec before building (view, ground, light, shadow, size, feature; [images-and-assets.md](../images-and-assets.md)); hands, material, daylight; people as a silhouette when the object leads.

**Form:** radius 0 or one large radius throughout (Apple 28 px); hairlines; shadows only photographic; buy button as a dark rectangle or a 1 px outline; no badges, no stars; cards only in order zones.

**Signature elements** (at least one): 1 claim, proof image and numbered footnote as a fixed unit; 2 ground tone from the material as a brand mark; 3 title type derived from the logo; 4 the object labels itself (model numbers, housing print, versions as a type element); 5 mandatory zones in the brand vocabulary (placeholder, form, cookie notice, footer); 6 exactly one effect motif that translates the product promise; 7 the work as navigation (book spines as a menu).

**Motion:** slow, physical, one moment: a scroll-coupled sequence on the object (exploded or X-ray view), 400 to 700 ms ease-in-out; a hero film with a visible pause button; otherwise static.

**Data:** a metric with a hairline, comparison base and footnote instead of stars and testimonials; specification comparison as a calm table.

**Iconography:** hardly any; product detail instead of icons; no icon rows ("vegan", "sustainable"); mandatory symbols in the brand vocabulary.

## 5 Measurable targets

Corridors by mode, starting values (H) that include all references from section 3; tolerance in [review.md](../review.md).

| Metric | Corridor | Tool field | Reference values |
|---|---|---|---|
| Scale desktop | Stage 5 to 8; Quiet 1.5 to 2.5; Catalog 2 to 3.5 | `typography.scaleRatio` | Mercury 5.45; Apple 8.0; Stripe Press 1.56; Things 2.0; Aesop 2.21; teenage engineering 3.05 |
| Scale mobile | Stage from 3.5; Quiet 1.3 to 2.5 | `scaleRatio` at 390 x 844 | Apple 4.0; Stripe Press 1.31; Aesop 1.79; Things 2.0 |
| Visible image area | Stage from 0.8; Catalog from 0.5; Quiet from 0.2 | visual (`fold.imageAreaShare` does not count video and canvas) | Apple about 0.95; Mercury 1.0; teenage engineering about 0.65; Aesop about 0.80; Stripe Press about 0.32; Things 0.23 |
| Calm area | Stage 0.30 to 0.65; Quiet 0.55 to 0.90; Catalog 0.50 to 0.65; mobile from 0.40 | pixels `calmAreaShare` | Mercury 0.34; Apple 0.62; Aesop 0.61; Stripe Press 0.72; Things 0.90; teenage engineering 0.56; Stripe Press mobile 0.41 |
| Saturated pixels | surface without an image at most 0.01; with an object or scene image at most 0.05 | pixels `saturatedShare` | Aesop 0; Apple 0.002; teenage engineering 0.003 without the cookie notice; Things 0.012; Mercury 0.017; Stripe Press 0.045 |
| Colorfulness | at most 30 | pixels `colorfulness` | 8.6 (teenage engineering) to 27.6 (Stripe Press) |
| Glows; gradients | 0; at most 5, only with meaning | `surfaces.glows`; `surfaces.gradients` | all 0; Apple 5, Aesop 3 |
| Card grids | Stage and Quiet 0; order zone at most 1 | `surfaces.cardGrids` | Apple, Aesop, teenage engineering, Stripe Press 0; Mercury, Things 1 |
| Type families | at most 2 | `typography.families` | all references |
| Controls in the hero | at most 1; a service with a demo 2 | visual | Apple 1 (price pill), Aesop 1, teenage engineering 0, Stripe Press 0, Mercury 2 |
| Marketing words in the hero | 0 to 30 without navigation; with navigation up to about 55 | visual, `fold.words` | Things 31, Apple 50, Mercury 53 visible |
| Caps eyebrows | 0 | visual | Apple, Stripe Press 0 |
| Background chroma | at most 0.016 (OKLCH) | calculation | Aesop #FFFEF2 with 0.016 |

Generic gate universal, but usable only after a visual check: for the references all red values were false alarms (video, canvas, house typeface as mono, dashes in model numbers, cookie notice). Always clarify tell D11 (emptiness without direction) on the image in Quiet mode.

## 6 Dose

| Level | What changes |
|---|---|
| quiet | Quiet mode: ground tone from the material, titles 400 (as a hero headline in Persuade only in a display cut or an optical size, otherwise from 500), one object per screen, no effect (reference: Aesop, Stripe Press) |
| medium | Catalog mode or an alternation of stage and order zone, claims with footnotes, one hero film with a pause button (reference: teenage engineering) |
| loud | Stage mode with 80 to 96 px claims, an object filling the screen, a scroll sequence, exactly one effect motif with meaning (reference: Apple; the border to M-SPA) |

## 7 AI trap

- **AI proximity:** high, the second wave of AI genericness (warning).
- **Caricature:** Cream look (#F4F1EA, Playfair or Cormorant, terracotta accent), spa stock photo with "Discover Natural Luxury", pill button with a shadow, stars and bestseller badges, an icon row in circles, a newsletter pop-up with a discount; a Japan caricature of beige, enso circle, cherry blossom and kanji as decoration.
- **Mechanism:** missing material; emptiness without direction.
- **Review question:** Is the emptiness directed, what does it point at, and does the ground tone demonstrably come from object or material?
- **Countermeasure:** material check before choosing the direction; derive the ground tone from the main photo; type from logo or origin, never Playfair plus Inter; no glows; in the review weight system errors (ground, type, effects) higher than local slips.
- **Watch list** ([generic-catalog.md](../generic-catalog.md)): tells A1, A3, A4, B3, B7, C4, D7, D11; cluster Cream look; V8, V9, V11.

## 8 Media notes by register

| Register | What differs |
|---|---|
| Operate | the skin of calm solo work (reference: Things): order by the user's question (when, instead of which category), color on the frame instead of in the content, fields only when needed, metadata as a smaller, lighter second line (planning details at text size, [craft.md](../craft.md) 6.1), the date as a typographic anchor |
| Persuade | product detail with purchase: local navigation with price and one action, stage and order zone alternating, mandatory zones in the brand voice; on mobile shorten promo and newsletter bars, introduce no forms that the desktop system does not know |
| Read | catalog, lookbook, annual report and investor letter in the dark-warm variant with a book typeface; lots of margin, photos on their own page; in the reading deck stillness as a frame for product photos |
| Feed | still-life series 4:5 with identical light and grid, object asymmetric, text outside the image, one line for the sender; platform-native feed mode does not fit |
| Distance | keynote stage (Case X5): one object or one word per slide, the main word about 18 to 19% of the canvas height (about 200 px at 1080), build in single steps, the punchline in the same frame (reference: Apple Keynote); packaging with a shelf test |

## 9 Combination

| Role | Partner |
|---|---|
| good accents | WRM (warmth and soft forms; beauty, interior, wellness), EDI (narrative voice and sections), M-HUM (loud imagery contained in a still frame), RUL (naming and numbering system as ornament with a function), M-MOT (scroll sequence on the object) |
| only as a moment | M-SPA (exploded view or book stack) |
| as an accent on | ORD (one stage chapter), PRO (hardware as an object) |
| never | MAX, TYP in a loud dose, RAW, platform-native feed mode, gloss and glass as a surface |

Modules: [modules.md](modules.md). Rules for base plus accent: [README.md](README.md).

## Sources

1. Dezeen, Kenya Hara on Muji (2017-12-13): https://www.dezeen.com/2017/12/13/kenya-hara-exclusive-interview-muji-us-expansion-brand-aesthetic/
2. Vitsoe, Dieter Rams, Good Design: https://www.vitsoe.com/gb/about/good-design
3. Work & Co, Aesop and Webby 2019: https://work.co/clients/aesop/ and https://work.co/news/webby-2019
4. Reinecke and Gajos 2014, Visual preferences around the world: https://eecs.harvard.edu/~kgajos/papers/2014/reinecke14visual.shtml

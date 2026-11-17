# DAT Data with a Point

**In one line:** The title states the point, one chart proves it: everything gray, exactly one accent shows what matters, the label sits at the data point, the sender is in the image, the source with third-party data.

**Group** I Trust | **Lead effect** W3 Insight (also W1, W2, W6, W14) | **Loudness** quiet (span 0 to 3 of 6) | **Material** real data with a source; without it excluded, and the missing key message goes back to the user (Operate register: realistic sample data per G7 is enough, [README.md](README.md) 9); if a single number is missing, another anchor form carries the surface (assertion, comparison, object), never a placeholder metric

## 1 Effect

Credible, clear, verifiable, shareable ("This is honestly calculated, and I can forward it as it is", H). Titles get the most fixations and shape memory, even when they contradict the chart [1][2] (high). An assertion headline plus visual proof improves understanding and retention [3] (high). Readers scroll instead of clicking: important things do not belong in the tooltip (medium).

## 2 Fits, does not fit

| Field | Content |
|---|---|
| home | Cases A1 (reading version), A2 to A5, B4, C2 (data rules), E1 B2B, E2, F2, G2, G3, G5, G6, X2 |
| good | Cases B1 B2B, B3, B5, C1, C9, C10, G4, G7, J3, J4, X5; year in review with its own data |
| accent only | Cases B1 B2C, B2 B2B, C3 to C8, E1 B2C, E3, F1, F3, F4, G1, H1, H2, I1, I2, J1, J2, X1, X4 |
| never | Cases B2 B2C, D1 to D3, I3, I4, I5, X3 |
| industries | all B2B industries, research and consulting, fintech, climate tech, health data, NGOs, public sector, media; B2C with personal data |
| B2B, B2C | startups for investors strong; B2B strong; B2C medium, strong with personal data; especially for brands without strong imagery, because data is the material |
| category default | R0 for decks, reports, investor material and dashboards (caricature: KPI cards, topic titles, rainbow charts): only in best form with real data |
| does not fit | without real data; pure emotion campaigns; luxury and fashion; feed video |

## 3 Principle and evidence

Answer first, one proof per statement, color only for what should be seen.

- **School:** Tufte (data ink, small multiples, sparklines), Few (bullet graph, dashboard as one screen), Cleveland and McGill 1984 (position on a common scale before length, angle, area, saturation), FT Visual Vocabulary [4], Minto (answer first), Kosslyn et al. 2012 (capacity limit four) [5] (high).
- **Reference: Our World in Data:** the chart as a shareable document with title, subtitle, note, source, license, sender (high for reach).
- **Reference: The Pudding:** form from the measured object (pocket outlines); Peabody for the publication [6] (high). **Reference: Giorgia Lupi:** a glyph per data day (high for the designer).
- **Reference: Datawrapper:** the rule as a sentence, a color dot as the legend (medium). **Reference: Benedict Evans:** three-zone slide, one focus color (medium). **Reference: Expedia carousel:** one question per slide (medium). **Reference: Spotify Wrapped:** personal data as a share card, Cannes Lions 2023 Gold [7] (high).
- **Warning case:** an AI design report, award-winning, but a rectangle area of 0.33 instead of 0.59 and "5x" where the math gives 2.8. **Counterexamples:** Gamma (29 type sizes, a component zoo), Gong on LinkedIn (document pages with 180 to 220 words in the feed).

## 4 Parameters

**Typography**

| Parameter | Value |
|---|---|
| Classes | assertion title in a text serif or a strong sans; everything measurable in one sans down into the chart; tabular figures mandatory in tables, axes and metrics (check `tnum` first); mono only for sources and values |
| Scale | reading and data pages 1.8 to 2.5; report or campaign opener up to 9; chart title to label 1.6 to 1.9 |
| Sizes | slide at 1080 px: assertion title 56 to 64 px, subline about 27 px, labels 19 to 24 px, source from 18 px, key number from 160 px; reading deck body text from 22 px, for phone reading 32 to 40 px. Web: labels target 14 to 15 px, reading text 16 to 21 px. Social at 1080 px width: labels from 24 px. Gates in [use-cases/README.md](../use-cases/README.md) |
| Weights, tracking | 400 and 600, titles never at 800 or heavier; tracking 0; avoid caps labels |
| Setting | title as an assertion, flush left, at most two lines; title as the legend; subtitle with unit and definition; footer with the sender, for third-party data with source and date (collected in the talk deck; own numbers without a note, [craft.md](../craft.md) 9.2); line height 1.4 to 1.8, column 554 to 640 px; at most three heading levels and four points per list; percentages always with an absolute base |

Pairings (starting points; check status per pairing in [fonts.md](../fonts.md)):

- Pairing A: Source Serif 4 (opsz high, 600) for titles, Public Sans 400 for labels and text ([fonts.md](../fonts.md)).
- Pairing B: Hanken Grotesk 600 and 400, Sometype Mono for values and sources; both with tabular figures ([fonts.md](../fonts.md)).
- Pairing C: Brygada 1918 600 for titles, Libre Franklin 400 and 600 for labels and text; Libre Franklin has no tabular figures, so tables, axes and metrics in Brygada 1918 with `tabular-nums` ([fonts.md](../fonts.md)).

**Color**

| Parameter | Value |
|---|---|
| Logic | gray is a role (context), not a category; one accent shows the point; gradations only through lightness and saturation of the same hue, at most four; a second accent only for a real comparison; the frame may be loud (navy, chapter color), the chart may not; color is never the only carrier of information |
| Saturation strategy (G4) | A or B tight up to 3.5%: accent at most 5% of the chart area; saturated pixels in the chart crop at most 3.5%, with brand colors as series at most 12% (B) |
| Shares | ground 70 to 80%; header band and side area 10 to 20%; context gray 10 to 20% of the chart area; text 3 to 8% |

Starter palette (placeholder; the brand color replaces the accent, then recalculate):

| Role | Hex | Contrast (WCAG, recalculated) |
|---|---|---|
| Ground, header band | #FFFFFF, #F1F1F0 | |
| Text | #1A1A1A | 17.40:1 on white, 15.40:1 on the header band |
| Source, secondary text | #5E6369 | 6.06:1 on white, 5.36:1 on the header band |
| Context series | #8C9196 | 3.18:1: enough for graphics, not for text |
| Grid | #E3E4E5 | not semantic |
| Accent (focus series) | #C23B27 | 5.32:1 on white, also as text; tints #F0A396, #F9DAD4 only as area |
| Comparison | #2A6F97 | 5.50:1 |
| Chapter area (mandatory in the deck, otherwise optional) | #23464F | white on it 10.19:1 |

**Layout:** slide in a three-zone grid (about 20, 65 and 15% of the height: assertion, proof, footer zone with the reference or, for third-party data, the source). Web: text column 554 to 640 px, chart wider if needed, margin column for notes and small charts. Density by genre: catalog dense (reference: Our World in Data, 377 words in the first screen), single work empty (reference: Giorgia Lupi, 23); reading deck 15 to 40 words per slide, talk 1 to 12. Lots of calm area around the proof. Titles flush left; the chart as a document in a 4:5 or 1:1 frame for sharing; metric trio with hairlines instead of cards, the previous year small below.

**Imagery:** the chart is the image. Photos only as proof (real place, measurement, customer). Loud variants only with data binding: form from the measured object, a glyph per unit in a calendar grid.

**Form:** radius 0 to 4 px, hairlines, no shadows, no cards around charts, three to five light gridlines, axis lines only where needed.

**Signature elements** (at least one): 1 title as the legend, the accent word carries the series color (the only reasoned accent word of this direction); 2 a color dot in body text as the legend; 3 three-state sequence: all values gray, key value in color, comparison overlaid, as scrollytelling, slide sequence or carousel; 4 label above the bar, value at the end, gray baseline to 100%, responsive down to portrait without rebuilding; 5 the chart as a document with its own frame; 6 bullet graph with three gray steps (40, 25, 10% black) or a sparkline with a normal band; 7 a custom data glyph for countable units.

**Motion:** state sequence coupled to scroll or slide change, the chart stays in place; on mobile a fixed annotation instead of a tooltip; static outputs contain everything important; a skip link to the end state; transitions 300 to 500 ms.

**Data:** choose the chart by the data relationship first; default bar or line; bars from zero; no dual axis; no cumulative curve as growth; pie at most four segments; at most seven colors; areas proportional to the value; recalculate ratios; source and date for third-party data ([craft.md](../craft.md) 9.2); tables only for lookup.

**Iconography:** hardly any; pictograms only as a countable unit (Isotype); no icons in metric cards.

## 5 Measurable targets

Modes: **Evidence** (page, report, reading deck; reference: Datawrapper, Our World in Data, Benedict Evans, The Pudding, AI design report) and **Form** (data as form, glyph or share card; reference: Giorgia Lupi, Spotify Wrapped, Expedia). Corridors are starting values (H) and include these references; tolerance in [review.md](../review.md).

| Metric | Corridor | Tool field | Reference values |
|---|---|---|---|
| Saturated pixels in the chart crop | gray plus accent 0.001 to 0.035; brand series and Form at most 0.12 | pixels `saturatedShare` on the crop | OWID 0.005 to 0.025; Datawrapper 0.001 to 0.034; AI report up to 0.112; Lupi 0.081 |
| Accent area; color steps | at most 5% of the chart area; at most 4 of one hue plus gray, 7 in total | visual, pixels `palette` | |
| Title to label | 1.6 to 1.9 | visual, measure | AI report 24:15; OWID about 28:15 |
| Reading text | 16 to 21 px, line height 1.4 to 1.8 | `typography.bodySize` | AI report 16/22.4; Pudding 17/28.9; Datawrapper 19/30; Lupi 21 |
| Scale | Evidence 1.8 to 2.5, opener up to 9; Form up to 9 | `typography.scaleRatio` | Lupi 1.79; Pudding 1.88; Expedia 2.07; Datawrapper 2.21; OWID 2.29; AI report 7.5; Wrapped page 8.75 |
| Calm area | Evidence from 0.45, without a dark frame target from 0.55; Form 0.20 to 0.60 | pixels `calmAreaShare` | OWID 0.47 with a navy frame; AI report 0.60; Pudding 0.72; Evans 0.79; Datawrapper 0.81; Lupi 0.22; Wrapped page 0.29; Expedia 0.54 |
| Effects | 0 glows, at most 1 gradient, radius 0 to 4 px, 0 card grids | `surfaces` | all references |
| Sizes | page at most 16; deck about 5, yellow above 10 | `typography.distinctSizes`; tell F4 | Lupi 8 to AI report 16; Evans about 5 |
| Words per slide | reading deck 15 to 40; talk 1 to 12 | deck measurement, tell F6 | Evans 15 to 40 (visual) |
| Stat banner, KPI card row | 0 | tells D4, P1 | |
| Data honesty | area and length ratio equal to the value ratio (deviation under 5%); every ratio recalculated | calculation | AI report as the failure case |

Mandatory, not a corridor: text 4.5:1, information-carrying lines and areas 3:1 (Datawrapper margin notes at 3.7:1 are no model); generic gate universal. Document known genre false alarms instead of rebuilding: tell A6 with a real sequence, tell C9 with color dots, tell A2 with a large form as SVG.

## 6 Dose

| Level | What changes |
|---|---|
| quiet | nonfiction-book logic: white page, gray plus accent, serif title, margin column, scale about 2.2 (reference: Datawrapper, Benedict Evans); in the deck, title and chapters as full-bleed surfaces (chapter area or a full-bleed proof photo), at least two full-bleed surfaces and one color ground ([craft.md](../craft.md) 5.5) |
| medium | chapter colors as a frame, numbered theses with a real sequence, metric trio with hairlines, report opener with a large title line (reference: Our World in Data) |
| loud | data as form or glyph; answer word or number at 15 to 22% of the slide height; three-state sequence as scrollytelling or carousel; the chart as the key visual (reference: The Pudding, Giorgia Lupi, Expedia, Spotify Wrapped) |

## 7 AI trap

- **AI proximity:** medium (warning).
- **Caricature:** KPI quartet with icons and trend badges where "+12.5%" and "-20%" have the same color; stat banner "10,000+ customers, 99.9% uptime"; topic title instead of an assertion; rainbow donut with a legend; 3D pie; hockey stick without an axis; "Key Findings" as a list; invented numbers; a component zoo with a different building block on every slide; brush strokes without data binding.
- **Mechanism:** over-fulfillment and lack of context; a default palette instead of a hierarchy.
- **Review question:** Do the titles, read one after another, tell the story on their own, does every title match its data, and is every area proportional?
- **Countermeasure:** force the order: assertion sentence, data relationship, chart type, everything gray, one accent; data honesty as a separate review step (area proportion, zero baseline, recalculated ratios, source, disclosure); no number without a verifiable source (third-party numbers with a source per [craft.md](../craft.md) 9.2, own numbers in the credits and the review view); a rule list for the reviewer, because people spot slide errors poorly [5] (high).
- **Watch list** ([generic-catalog.md](../generic-catalog.md)): tells D4, P1, P4, E5, C8, B1 (as a chart color), A6 (only without a real sequence); in decks tells A9, F1, F4, F6; V4, V15, V16, V17.

## 8 Media notes by register

| Register | What differs |
|---|---|
| Operate | dashboard as one screen: every metric with a reference (target, previous period, corridor), bullet graph or sparkline, trend color by meaning |
| Persuade | report microsite with the key statements in HTML, scrollytelling with text in the DOM, PDF only as an extra; methodology and disclosure prominent |
| Read | reading and board deck: assertion plus one proof per slide, one focus series in the accent color, the source for third-party data as a short footnote at the chart ([craft.md](../craft.md) 9.2), slide types chapter, statement, proof, comparison, detail; after at most five to six data slides a change of slide type (quote, image, concept); the board deck as a pre-read 48 hours before. Whitepaper and report with a margin column, small multiples, sparklines about 14 characters wide; summary with the answer first |
| Feed | the chart as a document in 4:5; carousel with one question per slide, the answer at least 15% of the slide height, body text at most about 60 words; first post line with a number of its own plus its consequence in under 20 words |
| Distance | talk version with one number per slide and the text in the speaker notes; content from 40 px at 1080 |

## 9 Combination

| Role | Partner |
|---|---|
| good accents | ORD (board deck, investor update), EDI (serif titles and photos of real places and people), M-HUM (annotation in a human voice with a leader line to the data point), RUL (chapter colors across long reports), M-MOT (scroll coupling) |
| only as a moment | ONE (one number as a punchline in the talk version) |
| as an accent on | MAX (personal data as a share card), PRO (actual against plan), WRM (corridor instead of a target line) |
| never | stage charts without axis values (STI in Stage mode, M-SPA) for investor or B2B proof; glass; 3D charts; TYP in the chart itself |

Modules: [modules.md](modules.md). Rules for base plus accent: [README.md](README.md).

## Sources

1. Borkin et al. 2016, Beyond Memorability: https://vcg.seas.harvard.edu/publications/20150101-beyond-memorability-visualization-recognition-and-recall
2. Kong, Liu, Karahalios 2019, Title-visualization misalignment: https://experts.illinois.edu/en/publications/trust-and-recall-of-information-across-varying-degrees-of-title-v/
3. Garner and Alley 2013: https://www.ijee.ie/articles/Vol29-6/23_ijee2791ns.pdf
4. FT Visual Vocabulary: https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary
5. Kosslyn et al. 2012: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2012.00230/full
6. Peabody Awards, The Pudding: https://peabodyawards.com/award-profile/the-pudding/
7. Spotify Newsroom, Cannes Lions 2023: https://newsroom.spotify.com/2023-06-22/spotify-wins-trio-of-awards-at-2023-cannes-lions/

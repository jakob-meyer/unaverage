# Exploration: from the project world to three direction mockups

As of 2026-10-10. Supplements [SKILL.md](../SKILL.md) stage 3. Ranking, classes, seed pool and rating (obvious, own, surprising) are in [directions/README.md](directions/README.md) 11 and are not repeated here. Messages to the user: [dialogue.md](dialogue.md). Evidence strength: high, medium, H (derivation, to be tested).

## 1 Scope per level

| | Quick | Standard | Studio | Correction |
|---|---|---|---|---|
| Project world | 5 parts, internal | 8 to 15, written | 12 to 15 plus scene | heritage inventory only |
| Competition | none | look at 3 | render and measure 4 to 6 | no |
| Candidates | 3 one-liners for the built direction | 2 per direction, 6 | 3 per direction, 9 | none |
| Mockups | none | 3 | 3 to 4 | before, after |
| Blind comparison | no | no | ranking judgment by R1, both orders (11) | R1 before against after |

Working files in the project: `directions/world.md` (inventory, category default, candidate cards; never to reviewers), `mockups/A.html` and so on, `render/`, `contact-sheet-desktop.png`, `contact-sheet-mobile.png`. Decisions, seed and calculation go into the contract ([templates/design-contract.md](../templates/design-contract.md)).

## 2 Inventory the project world

8 to 15 concrete parts, each with its origin (brief, file, website, conversation). This is raw material for the image idea: look first for things and situations that can be shown on the key surface, only then for principles for composition, rhythm, typography or interaction.

| Kind | Questions |
|---|---|
| Materials, surfaces, making | What is it made of, how is it made? |
| Tools, hand movements | What does the audience work with, what do they do with their hands? |
| Spaces, routes, scales | Where does it happen, from what distance? |
| Data forms, documents, traces | Which forms, lists, curves, receipts exist? |
| Rituals, time sequences | What repeats, when, for how long? |
| Trade language, symbols, codes | Which words does only this audience use? |
| Tensions | Which two needs pull against each other? |

**Rules:**
- **Things the user named come first** (brief, Q16, Q17), word for word, with "user" as the origin. At least one mockup of the set shows one, when there is one.
- **Two parts are always on the list:** the name itself (what it says, what it promises) and the person behind the offer (trade, history, how they talk).
- Concrete instead of abstract: "headphones at the treatment chair, view of the Weser", not "feel-good atmosphere".
- Mark clichés with (c) (clipboard, scales, light bulb, handshake); they yield "obvious" at most.
- **First-reach props:** the object that comes to mind first for a topic (stamp for receipt, approval or delivery; highlighter for reading, learning or finding; calendar entry for appointments; sticky note for ideas) is (c) as long as it only shows the topic. It becomes an idea when it carries the case of the through-line with real fields and has a readable job (the received stamp on the building permit application with the date, file number and initials of the case; the highlighted line in the patient's treatment and cost plan). Its form comes from the real model, not from the stock form (rotated, double frame, caps in mono or condensed, noise texture; yellow fill behind the sentence found): at most once per surface, on its carrier, print traces only as a scan (module M-HUM). At least one candidate of the set works without this prop.
- Tools of the audience (terminal, dashboard, Excel) at most once as a source, otherwise they become costume (medium [1]).
- Invent nothing: facts only from brief and material; mark assumptions.
- **Through-line:** fix one concrete example from the inventory (a case, a customer, a day, an object) that runs through all surfaces and supplies built product interfaces with sample data ([SKILL.md](../SKILL.md) stage 4, point 1).

**Example Weserbogen** (dental practice in Bremen, three dentists, focus on anxious patients): treatment chair with a view of the Weser; headphones for anxious patients; the hand signal "raise your hand to pause"; X-ray (costume risk); treatment and cost plan; appointment card; waiting room with a windowsill; mouth mirror; Weser tides; Bremen brick; bicycle stand in front of the practice; dental splint; tooth icon, mint, smiling stick figures with perfect teeth (c); after the answers: the practice's own photos of its rooms (bright, wood, view of the Weser), wordmark without a house color. Tensions: fear against due treatment, giving up control against setting one's own pace. Through-line: a patient who calls for the first time after years without a dentist, up to the calm appointment.

**Example Nordlicht freight forwarder** (part loads in the north): swap body at the loading dock; the dispatcher in the morning; route plan; load securing with straps; pallet spaces on the load bed; driver's cab; truck on the highway, globe with arrows (c). Tensions: on-time delivery against traffic jams, full loads against short routes. Through-line: one pallet from pickup in Hamburg to the loading dock in Kassel.

## 3 Heritage inventory (existing brands, correction, refresh)

Collect first, then sort, then reduce, before anything new is made (high for the cases [2]).

1. **Collect:** logo and its parts, colors, typefaces, characters, patterns, packaging, image style, slogan, tone, sound, templates, archive.
2. **Sort** per element: recognition without the logo (yes, partly, no), bindingness (CI binding, grown), condition (maintained, diluted).
3. **Reduction before invention:** expose, enlarge and simplify elements with "yes"; never change binding assets ([directions/README.md](directions/README.md) 13).
4. Elements on generic lists (Inter, violet) stay mandatory but do not count as an own asset.

| Element | Recognition | Binding | Use |
|---|---|---|---|
| [for example house typeface Roboto, example Nordlicht freight forwarder] | partly | yes | stays; tell A1 as "intentional, CI" |

## 4 Category default and predictable opposite

1. R0 following README 11.4: competition before case row before category table; if the industry is clear, the more specific table row applies (Standard: look at 3 pages; Studio: render 4 to 6 and measure them with `generic-check.mjs` and `pixels.py palette`). Product UI behind a login: review public screenshots (help center, app store, product page) and justify R0, do not measure; otherwise R0 from the case row.
2. Write two sentences: "The page this category always delivers: ..." and "Its predictable opposite: ...". Both are excluded as the main direction and go into field 5 of the contract (medium [1]). R0 in best form may take the near rank, but without an existing own asset it may not be the recommendation ([directions/README.md](directions/README.md) 11.5, point 7); the caricature never.
3. The opposite is usually the next AI wave, not something of its own (H):

| Category | Default | Predictable opposite |
|---|---|---|
| B2B SaaS, AI products | dark stage, glow, icon cards | cream with a contrast serif and terracotta |
| Law, B2B insurance, industry | blue, eyebrow above every chapter, stat banner | dark tech stage with neon |
| Fintech B2C, health | stock people, pastel, leaves | neo-brutalism with a marquee |
| Premium D2C | cream, serif, terracotta | loud color field with giant type |
| Beverage challenger | confetti, violet-pink | cream minimalism with a serif |
| Web and product UI today (what a strong model builds without a skill) | tasteful restraint: white ground, a narrow grotesk, one signal color, a product card with a floating status card, a marker on one word, caps or mono labels, a dark closing band | dark stage with glow, or cream with a contrast serif |

The row "Web and product UI today" goes into field 5 in addition to R0 for every website, landing page and product UI, as a recipe to avoid in full, not as an excluded direction; it changes no ranking and serves the swap test (6.5), because a near direction in best form slides into it most easily.

Example Weserbogen: default "mint and white, tooth icon, smiling stick figures with perfect teeth", opposite "dark luxury aesthetic with gold like a beauty clinic".

## 5 Ranking, log, seed, assignment

**Calculation and three ranks:** README 11. Result in field 12 of the contract.

**Log check before the calculation** (`design-log.json` in the project, and `~/.unaverage/direction-log.json` when the brand is not in it; format [templates/direction-log.json](../templates/direction-log.json)):
- **Same brand with a direction the user chose or confirmed:** consistency. Continue typefaces, palette and signature element; a new direction only for a new brand, a new campaign platform or on request. On a tie the previous direction wins. A logged piece the user never chose (Quick, Autonomous, Review only) is material, not a rule.
- **Other brands:** the last three entries of other brands. If a direction won there, it loses ties; swap the same display typeface for an equally fitting pairing and say so with the directions (against collective homogenization, high [3]).

**Seed** (Standard, Studio; only the bold rank, only at the level of directions):
1. Pool: admissible bold directions following README 11.5, S descending, ties in catalog order (ORD PRO DAT STI EDI HER WRM DRW ONE RUL MAX TYP RAW).
2. `$PY -c "import secrets; print(secrets.randbelow(10**6))"`
3. Hit = seed modulo pool size, counted from 0.
4. Seed, pool in order and hit go into field 13. Never choose a number yourself, never draw again because the hit is unwelcome; randomness must be external (high [4]). Without a shell: [dialogue.md](dialogue.md) 7.5.

Example Weserbogen, prompt level: pool TYP 65.0, MAX 60.0 (threshold 60.0; both group V, in the risk category only as the bold option, never the recommendation); seed 483920; 483920 mod 2 = 0; hit TYP. After the answers TYP 55.0 and MAX 50.0 lie below the threshold 58.3; the pool is empty, the seed changes nothing, the next best admissible direction moves up (ORD, README 11.5, point 4).

**Assignment to A, B, C** (against position effects, high [5]):

```bash
$PY -c "import secrets,sys; r=secrets.SystemRandom(); p=sys.argv[1:]; r.shuffle(p); print(dict(zip('ABCD', p)))" EDI ORD DRW
```

Output into field 13. Never put direction names, codes or ranks into file names, because the contact sheet shows the file names as labels.

## 6 Candidates per direction

Each direction in the set gets 2 (Standard) or 3 (Studio) project-specific candidates; Quick: three one-liners for the built direction. Generate them one after another, with the previous ones in view (more variety, high [6]), each from a different starting point. Every candidate has a tangible image idea from an object or a situation of the project world that becomes visible on the key surface. A primitive, a typeface or a color alone is no idea ([SKILL.md](../SKILL.md) stage 3, point 4).

### 6.1 Starting points

| Starting point | Question | Example Weserbogen |
|---|---|---|
| Object | Which object, material, document is typical? | the appointment card as an object in the image, its layout as the page frame |
| Action | Which central action can be shown as a sequence? | choose an appointment, preliminary talk, treatment with the pause signal as three steps |
| Tension | Which two needs pull against each other? | the headphones ready at the chair for anxious patients, next to the only strong area "Book an appointment" |
| Scale | microscopic, human, architectural, landscape? | the Weser outside the window, in the foreground the windowsill in the waiting room |
| System | archive, map, instrument panel, score, workbench, stage? | the treatment plan as a tide table |
| Sense | touch, sound, light, weight, temperature? | light from the river in the treatment room in the morning |
| Story | sequence, reveal, transformation, decision? | from the first call after years without a dentist to the calm appointment |
| Data | Which real patterns exist? | waiting time until the next free appointment, only with real data |

Every starting point ends in an object or a situation that is seen on the key surface. If it ends in a line, a band, a dot, a color or a typeface alone, it is not yet an idea. Then ask: which thing or situation of the project world carries this form? Show that; the form accompanies it.

### 6.2 Idea angles (across the directions)

| Angle | Core | Fits | Material | Trap |
|---|---|---|---|---|
| Character | a recurring character with a role carries brand and feeling (medium; reference: Duolingo, Mailchimp) | apps, SMB SaaS, intangible products | character in a fixed, simple technique | Corporate Memphis, sticker without a role |
| Proof | the product demonstrates itself, one clear effect (medium) | B2B with a verifiable advantage, hardware | product, measurement, demo | claim without demonstration |
| Asset as idea | the brand's own strongest element becomes content (medium; reference: Mailchimp Did You Mean) | brands with known assets | heritage inventory | asset without recognition |
| Category break | against the codes of the category, often raw or self-ironic (H, single cases; reference: Liquid Death, Oatly) | challengers in interchangeable categories | attitude, copy | only with explicit consent; quiet in risk categories |
| User work | the users' works or data become the motif (medium; reference: Spotify Wrapped, Shot on iPhone) | apps with usage data, benchmark reports | real data or works with approval | invented user data |
| Scene | real people at a concrete place, in action (medium) | service providers, employer branding, B2B brand building | photos of real people | stock people |
| Functional idea | design that does something: guides, codes, helps (high for the award finding [7]) | campaigns, signage, tools | idea plus real function | purpose as a claim |

Mandatory for campaigns and ads: at least one candidate as a functional idea or asset as idea. Where possible, the three mockups differ in angle too (medium [8]).

### 6.3 Material families, constraint, viewpoint

**Material families (H):** object and fabric; document and type; data and time; person and place; sign and system; action and movement. The candidates of a set cover at least three families, at most half come from one; otherwise the derivation stopped at the most obvious object (medium [1]).

**Forced constraint:** at least one candidate per set comes from a constraint taken from the project: only one photo or one material; only elements from one document of the audience; only numbers from the brief; at most seven words in the first screen; only black, white and the brand color; only typography; one typeface in one weight; only lines (H, from studio practice). Under a constraint the tangible image idea stays too: with "only typography" or "only lines" the type or the line shows an object or a situation of the project world (the sentence is set as on the appointment card, the line draws the outline of the treatment chair).

**Viewpoint:** form candidates from different perspectives: the audience in a scene (the patient on the evening before her first appointment in years), era (the appointment card of 1980), culture, medium (as a poster, as a form). Different personas increase variety (high for text [9], transfer H).

### 6.4 Candidate card

```text
Name:
Direction (code), accent (at most one):
Core idea (one sentence):
Image idea (object or situation of the project world, visible on the key surface):
Source in the subject (no. in the inventory):
Starting point / idea angle / material family:
Anchor:
Signature element:
Designed against: one category convention; one AI pattern (tell ID)
Rating: obvious | own | surprising, with one sentence
Material: available | buildable | requestable (stand-in until then) | missing
Biggest risk:
```

**Example hand signal (EDI, Weserbogen):** Core idea: the hand signal "raise your hand to pause" returns as a chapter mark and shows: here you set the pace. Image idea: the treatment chair in front of the window to the Weser, next to it the raised hand as the agreed signal. Source: hand signal, treatment chair with a view of the Weser. Starting point action, angle functional idea, family action and movement. Anchor: full-bleed photo of the treatment chair with a view of the Weser, the chapter word in it. Signature: every chapter opens with the raised hand as a small line mark. Designed against: tooth icon and smile; tell C8 (icon tile above heading). Rating: own, because it makes a promise of the practice to anxious patients visible and would be empty for a practice without this focus. Material: available (room photos), mark buildable. Risk: without the promise in the text the hand looks like a greeting.

### 6.5 Swap test and cover-the-logo test

**Swap test** (per candidate, before the mockup): insert the name of a competitor. If the candidate works almost unchanged, sharpen the weakest decision (a more concrete source) or discard it. Additional questions: What do you see on the key surface? If the answer can only be given with line, band, dot, color or a typeface name, the image idea is missing. Which decision would be most likely in a template? Which free axis is still filled with a default? Is the signature element meaningful for content and goal, or only conspicuous? Rework the decision that looks most like a preset.

**Against a strong model** (Persuade and Operate, web and product UI only): describe in two sentences the page or screen a strong general model without this skill would build for exactly this brief (usually the row "Web and product UI today" in 4). If a candidate's key surface matches it on anchor form, type voice and color use, sharpen or discard it.

**Cover-the-logo test** (per mockup, on the image): hide logo and name and look at it reduced to 25%. Does the origin stay recognizable (effect W13)? If not, sharpen the anchor or the signature element. Technically:

```bash
sed 's#</head>#<style>.logo,.wordmark{visibility:hidden}</style></head>#' mockups/A.html > mockups/A-no-logo.html
node $S/render.mjs mockups/A-no-logo.html render/ --viewports 1440x900 --fold --name A-no-logo
```

### 6.6 Choosing the strongest candidate per direction

In this order: passes the swap test; tangible image idea visible on the key surface; higher rating ("obvious" never goes into a mockup); more concrete source in the subject; material available or buildable; carries all surfaces and follow-up formats. Never by beauty, otherwise the most familiar solution wins (high [10]). The bold rank preferably shows a "surprising" candidate; otherwise note it in the contract. A candidate built on a thing the user named goes first as long as it passes the swap test.

## 7 Mockups

Parallel designs lead to better and more varied results than one refined design (high [11]).

### 7.1 Difference: two of five levels, measurable

| Level | Different when | Measurement |
|---|---|---|
| Anchor type | another type: photo, object, product UI, chart, number, type, character, shape | by eye |
| Type voice | another type class or family, or a difference in `typography.scaleRatio` from 1.5 | `measure.mjs` |
| Density | difference in `calmAreaShare` from 10 percentage points, or `fold.words` at least double | `pixels.py palette`, `measure.mjs` |
| Color strategy | another class by `saturatedShare`: A under 1%, B 1 to 25%, C over 25% | `pixels.py palette` |
| Signature moment | another signature element according to the candidate card | by eye |

Every pair differs on at least two levels, at least one of them measured. Operate register: compare the levels at the place of expression (main action, empty state, data form, density step); line height, `fold.words` or the color share of the place of expression count as a measurement. Color alone or light against dark does not count (medium, own reference measurements). Violation: replace the weaker mockup with the other candidate of its direction, then with the next direction of the same class (README 11.5). Thresholds H.

### 7.2 Key surface per medium

| Medium | Key surface | Addition | Size |
|---|---|---|---|
| Landing page, website | first screen plus a cropped following section | mobile as its own design, not as a crop | 1440 x 900, 390 x 844 |
| Product UI | main screen with realistic data and edge cases, next to it the empty state | error or loading small | 1440 or 390 |
| Deck | title slide, solution slide with the offer, claim slide with proof, as a row | genericness shows in the sequence | 1920 x 1080 |
| Carousel | cover plus one inner slide | thumb view at 360 px | 1080 x 1350 |
| Social post, ad | the motif | thumb at 360 px; for ads the largest and smallest format | target size |
| Document, factsheet | page 1 | excerpt of page 2 | A4 or US Letter by market, as HTML |
| Identity | system sheet: mark, type, color roles, three touchpoints (app icon 1024 and 64 px, social post, large format) | motion rule as a sentence | 1920 x 1080 |
| Email | first screen | dark mode | 600 px width |

On the key surface of every mockup the candidate's image idea is visible, and in the Persuade and Feed registers and on the solution slide of a deck also the offer ([SKILL.md](../SKILL.md) stage 4, point 1): software as an interface from the features in the brief with the through-line as sample data, a product in the situation it is made for.

### 7.3 Build

- **Same content:** real headline, texts and data from the brief, the same in all mockups. If text is missing, write the copy once (SKILL.md stage 4; [copy.md](copy.md) 1: benefit and feeling of the audience first, story copy as a draft, never placeholder titles) and use it everywhere. Plus the same through-line (2) in all mockups. Differences come only from the direction.
- **Same maturity:** the same effort per mockup (one build, one render, one fix), none polished; unequal maturity steers the choice (medium, agency practice).
- **Logo and name** carry the class `logo` or `wordmark` (for the test in 6.5).
- **System strip** in the same place in every mockup: typefaces with name and role, color roles with share and saturation strategy, imagery in one sentence, signature element named. No direction name, no code, no rank.
- **Material:** real, or a best-form stand-in that shows the claim of the surface, not just the topic ([images-and-assets.md](images-and-assets.md) 5): mockups show the full impact of the direction, never gray boxes, placeholder areas or production notes. If no available stand-in shows the claim, a final-form slot ([SKILL.md](../SKILL.md) stage 4, point 2), never as the anchor of the whole work. The labeling stands small in the system strip or the review view, never on the surface itself (no note such as "depiction based on the brief" in the image; a made-up line on a sample case is content, [craft.md](craft.md) 5.1, point 9; German forms: [markets/german.md](markets/german.md) 2). No images from references or without a license. Product interfaces are built as drafts following [craft.md](craft.md) 5.1, point 9: features from the brief and the frame controls of the category, sample data from the through-line. A direction that only works with a stand-in for lack of material says so in the line "asks of you" (9).
- **Technology:** Quick and Standard static (material photo instead of a 3D scene, oversized chapter word instead of animated typography; motion as a sentence in the system strip). Studio: WebGL and scroll scenes only with a static fallback.
- **Measure per mockup:** generic index, measurement profile against the corridors in the datasheet of its own direction (direction fidelity) and against each other (7.1).

## 8 Contact sheet

`$S` is the skill's `scripts` folder ([scripts/README.md](../scripts/README.md)); call from the project folder. Exempt brand color and house typeface with `--brand-colors` and `--allow-fonts`.

```bash
for X in A B C; do
  node $S/render.mjs mockups/$X.html render/ --viewports 1440x900,390x844 --fold --wait 2500 --name $X
  node $S/measure.mjs mockups/$X.html --out render/$X-measurements.json
  $PY $S/pixels.py palette render/$X-1440-fold.png > render/$X-palette.json
  node $S/generic-check.mjs mockups/$X.html --medium web --md render/$X-generic.md
done
$PY $S/pixels.py sheet contact-sheet-desktop.png render/A-1440-fold.png render/B-1440-fold.png render/C-1440-fold.png --cols 3 --labels
$PY $S/pixels.py sheet contact-sheet-mobile.png render/A-390-fold.png render/B-390-fold.png render/C-390-fold.png --cols 3 --labels
```

- **Sequences** (deck, carousel): `--selector .slide` for render, measurement and generic check; files `A-01.png`, `A-02.png` and so on; a sheet with one row per direction (`--cols` equal to the number of surfaces).
- **Social thumbs:** `pixels.py sheet thumbs.png render/A-01.png render/B-01.png render/C-01.png --cols 3 --width 1200` gives tiles of about 370 px.
- **Squint:** also look at every sheet reduced to 25%: what do you see first?
- **Animation:** `--reduced-motion`, otherwise `--wait 2500`, so nothing is half faded in.
- Show following [dialogue.md](dialogue.md) 7.6; without a shell one artifact with all mockups side by side.

## 9 Presentation without steering tricks

1. All mockups at the same time, the same size, the same maturity; one design alone fixates (high [12]).
2. Letters drawn by lot (5), the order in the sheet equals the letters, never by rank.
3. First the sheets, then per direction one sentence of idea and one line "asks of you", equally long for all.
4. The spectrum in words ("B stays close to the category, A is the boldest"), no row near, middle, bold with the recommendation in the middle (compromise effect, high [13]; middle effect with AI variants, medium [14]).
5. Then the ranking table with fit, distinctiveness, risk, "what you give up" and the recommendation with its criterion.
6. No decoys: every direction shown must be able to win; the caricature of R0 is never a straw man.
7. No pressure and no social proof ("most people take", "pros would"), no superlatives for the recommendation.
8. Measurements complete, even when they speak against the recommendation; unchecked means unchecked.
9. Offer adjustment along levels explicitly: control lowers the rejection of recommendations (high [15]).

## 10 Choose, mix, reject

| Answer | Consequence |
|---|---|
| one direction | contract fields 8 and 10, load the direction's datasheet, stage 4 |
| mix | only along levels (typography, color, image, composition, signature), never single elements. Check first: does one idea still carry it, does the mix keep the combination rules (README 12: base plus one accent, loudness adds up, no contradictions in material logic)? If not, say which level should go. Build as base plus accent |
| "none, safer" | R0 in best form with an own asset (silent fallback option) or a near candidate; one mockup |
| "none, bolder" | next hit in the seed pool (index plus 1) or a surprising candidate of the same bold direction; one mockup |
| "none" several times | Standard at most one new round, Studio two; then the reference question, or ask for the user's own idea ([dialogue.md](dialogue.md) 4.2) |
| your own idea | translate it (M1b), on request a mockup first |
| no answer | one reminder, then build the recommendation and say so |

Every answer with its date in field 10. After the choice, field 8 gets: thesis in one sentence, idea from the product's world, three to five design principles, type and color roles, composition logic, image and motion rule, signature element, deliberate calm areas.

## 11 Studio: blind comparison of the directions

- **Reviewer:** only R1, a fresh context per call; briefing following [templates/review-brief.md](../templates/review-brief.md) 6.
- **Calls:** one ranking judgment over all mockups in both orders, 2 in total, also with four mockups ([review.md](review.md) 13). They count toward the cap of 10 reviewer calls in Studio ([SKILL.md](../SKILL.md), Effort levels).
- **Content per call:** one contact sheet with all mockups (desktop and mobile per direction, `pixels.py sheet`), neutral letters drawn anew per call, the reverse order in the second call, the contract without field 8, the guiding question of R1; a tie is allowed. No ranking, no recommendation, no code.
- **Counting:** only a rank 1 that stays the same in both orders counts; judgments of language models often flip with position (high [5][16]). Result: stable rank 1 as a column in the ranking table (M3).
- **No adaptive tournaments;** they inflate reliability artificially (high [17]).
- **The user decides.** If the blind comparison changes the recommendation, say so in one sentence with the reason.

## Sources

1. Impeccable, direction round and rut: https://github.com/pbakaus/impeccable/tree/main/.claude/skills/impeccable/reference
2. Pentagram, Mastercard: https://www.pentagram.com/work/mastercard/story
3. Doshi, Hauser 2024, homogenization: https://doi.org/10.1126/sciadv.adn5290
4. Zhang et al., Forcing Diffuse Distributions: https://arxiv.org/abs/2404.10859
5. Seo, VLM image selection and position: https://arxiv.org/abs/2610.01243
6. Zhang et al., NoveltyBench: https://arxiv.org/abs/2504.05228
7. Cannes Lions, Love The Work: https://www.lovethework.com/work-awards/entries/your-way-way-better-564896
8. Dow et al. 2011, Prototyping Dynamics: https://d.ucsd.edu/srk/papers/2011/PrototypingDynamics-CHI2011.pdf
9. Moon et al., Diversifying Persona Sets: https://arxiv.org/abs/2609.30492
10. Wataoka et al., Self-Preference Bias: https://arxiv.org/abs/2410.21819
11. Dow et al. 2010, Parallel Prototyping: https://hci.stanford.edu/publications/2010/parallel-prototyping/ParallelPrototyping2010-submitted.pdf
12. Wadinambiarachchi et al. 2024, Design Fixation: https://arxiv.org/abs/2403.11164
13. Simonson 1989, compromise effect: https://doi.org/10.1086/209205
14. Chen, Jiao, middle effect (preprint): https://arxiv.org/abs/2607.09018
15. Dietvorst et al. 2018, Algorithm Aversion: https://ideas.repec.org/a/inm/ormnsc/v64y2018i3p1155-1170.html
16. Tripathi et al., Pairwise or Pointwise: https://arxiv.org/abs/2504.14716
17. Bramley, Wheadon 2015, Adaptive Comparative Judgement: https://www.cambridgeassessment.org.uk/Images/296241-the-reliability-of-adaptive-comparative-judgment.pdf

# Review

As of 2026-10-10 (v2.4), for stage 5 and the gates after every render. Evidence strength: high, medium, H (derivation); sources [n] at the end.

Process and ship threshold: [SKILL.md](../SKILL.md); catalog: [generic-catalog.md](generic-catalog.md); formats, render paths: [use-cases/README.md](use-cases/README.md) 4, 5; corridors: datasheet ([directions/](directions/)) 5; U1 to U13, levers: [craft.md](craft.md); reviewer wording: [templates/review-brief.md](../templates/review-brief.md).

## 1 Order and scope

1. Render and look (2): first the 360 px view, then full size.
2. Gates (3, 4): they block regardless of everything else.
3. Triage the generic check (5).
4. Measurement profile of the direction (6); in stage 3 the difference of the mockups (7).
5. Reviewers in a fresh context (8 to 14).
6. Merge, disposition, save the version (15, 16).

Scope per level: [SKILL.md](../SKILL.md), Effort levels. Key values in Quick: saturated pixels, calm area, type scale. Widths: Quick 1440 and 390 plus the 320 run (tell H1); Standard plus 768 (long words); Studio plus 1024.

**Two views.** What gets rendered, measured and judged is the presentation view, as the audience sees it. The review view (class `review-view` on `body`, or `open-items.md`) with mandatory notices, stand-ins, draft copy, open facts and depiction notes is seen in addition only by R4; it goes along with the delivery.

**Caps, never exceed** (split in 13): reviewer calls Quick 1, Standard 3, Studio 10 including blind comparisons, mode Correction 4; rounds Quick 1 fix, Standard at most 2, Studio at most 2 per stage; one more round only when the user books it as an add-on (16). At least two thirds of the time belong to idea and design; more reviewer calls showed no effect in tests. Write no measurement or review scripts of your own beyond `scripts/`; what they do not measure is noted as a visual value.

## 2 Measurement pass

Commands from the project folder, `$S` following [scripts/README.md](../scripts/README.md). Pass the exemptions from contract field 9.

```bash
mkdir -p render
node $S/render.mjs output/index.html render/ --viewports 1440x900,390x844 --fold --wait 2500 --name output
node $S/render.mjs output/index.html render/ --viewports 1440x900,390x844,320x700 --full --wait 2500 --name output
node $S/measure.mjs output/index.html --viewport 1440x900 --out render/measurements-1440.json
node $S/measure.mjs output/index.html --viewport 390x844 --out render/measurements-390.json
$PY $S/pixels.py palette render/output-1440-fold.png > render/palette-1440.json
node $S/generic-check.mjs output/index.html --medium web --allow-fonts "<house typeface>" --brand-colors "<#hex>" --intentional "<IDs>" --md render/generic.md
node $S/generic-check.mjs output/index.html --medium web --viewport 320x700 --md render/generic-320.md
$PY $S/pixels.py sheet render/output-small.png render/output-1440-fold.png --cols 1 --width 408
```

- **Last line:** the 360 px view (25% of 1440) for the squint test and the thumb view.
- **Widths of the level** (1): from Standard append `768x1024`, in Studio also `1024x768`, to `--viewports` of the second line.
- **Short window:** a browser window on a laptop is lower than 900 px. On websites and landing pages also run `node $S/render.mjs output/index.html render/ --viewports 1440x800 --fold --wait 2500 --name output-short` and check `render/output-short-1440-fold.png` by eye. Keep it a separate run: the file name holds only the width, so the same name would overwrite the first screen at 1440 x 900.
- **320 run** only for tells H1, H2, H4, H6; the index counts only from 1440 x 900 (calibrated).
- **Long pages:** `pixels.py slice render/output-1440-full.png render/parts/`.
- **Other media:** render path from [use-cases/README.md](use-cases/README.md) 5; sequences with `--selector .slide` or `.post` everywhere plus the contact sheet, `--medium slide --deck talk|reading` or `social`; product UI `--medium ui` per state; document `--medium document --selector .page`.
- **Review view:** do not measure it; image for R4 following [templates/review-brief.md](../templates/review-brief.md) 1, or `open-items.md`.
- **Without shell or Chrome:** render with the environment's tool, generic check as a visual check ([generic-catalog.md](generic-catalog.md) 9), mark values as "not checked on the image" ([dialogue.md](dialogue.md) 7.4).

## 3 Universal gates

They block at every level. Exception only if the contract explicitly allows it; then in the wrap-up. Norms apply against references too; "like reference X" does not count.

| Gate | Threshold | Check |
|---|---|---|
| Contrast | text 4.5:1; large type (from 24 px, bold from 18.7 px) and controls 3:1; at the least favorable point, not rounded (high [18]) | tell H5; `lowContrastTextNodes` 0 in the main content; text over images by eye |
| Overflow | no horizontal scrolling at 320 px (responsive surfaces, mobile screens); pure desktop screens at their minimum width (product UI 1280 px) | tell H1 in the 320 run |
| Export sizes | pixel size, format, file size, alpha per profile | file check ([use-cases/README.md](use-cases/README.md) 5) |
| Minimum type size | [use-cases/README.md](use-cases/README.md) 4.1 | tell H4; rest of the page by eye |
| Truth | nothing invented (numbers, names, logos, quotes, people); a product interface built from the features in the brief with consistent sample data is design, not invention; stand-ins, draft copy and open facts marked in the review view; sample data recognizable as such; the rebuild of a real interface follows the reference capture in detail (radii, colors, symbols, labels), every deviation is deliberate and stated in the wrap-up | tell E5 red is a blocker; V4 to V6; review view complete; rebuild next to the reference capture |
| Language | `lang` set to the output language, `hyphens: auto` where the language needs it, no word broken without a hyphen, widths of the level (1); grammar and spelling of every text in the image (headline, labels, text in graphics and built interfaces), not only the caption; German specifics (compounds, line breaks, grammar cases): [markets/german.md](markets/german.md) 2, 3 | tell H2, by eye; read the text in the image word by word |
| Product UI | targets from 24 x 24 CSS px, primary action 44 px; empty, loading, error and data-rich states rendered; focus visible | by eye per state |
| Motion | `prefers-reduced-motion` takes effect; autoplay over 5 s can be paused | code, tell D10 |
| Page in Safari | HTML the user opens as a file has no font preload ([fonts.md](fonts.md) 2); no image relies on a blend mode, the effect is baked into the file ([images-and-assets.md](images-and-assets.md) 11.2); these checks run in Chrome, so name Safari under Unchecked (Quick: under not run or substituted) unless the page was opened there | `safariRisks` in the measurements: `fontPreloads` 0, `blendedImages` 0 |
| Clear zone | floating elements cover no text; in a deck with builds at every stop, not only the end state: step through it in presentation mode (`?present`), a throwaway browser script is allowed for this; if it did not run, say so in the wrap-up | by eye |
| User rules | writing rules from CLAUDE.md and memory (for example no dashes) apply to project texts, notes, the wrap-up and as a style rule of the copy, ahead of the exception for tell E2 (G14); they do not govern the spelling of the output copy | `perl -CSD -ne 'print "$.: $_" if /[\x{2013}\x{2014}]/' file.html` |
| Target-market spelling | output copy in the language and spelling of the audience: en-US or en-GB, one variant throughout ([copy.md](copy.md) 3); German spelling by country: [markets/german.md](markets/german.md) 4 | word probe below, check every hit in the text |
| Law | mandatory points when triggered | [compliance.md](compliance.md); EU and DACH: [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) |
| Sources | every typeface, image, quote and data source has an entry; Quick only `CREDITS.md` with one line per source | [templates/credits.md](../templates/credits.md) 5 |
| Generic | index after triage at most 2, no complete cluster; a stricter value from register or datasheet applies (`ui` at most 1), stated in contract field 9 | 5 |

**Word probes:** en-US against en-GB in [copy.md](copy.md) 3; German by country in [markets/german.md](markets/german.md) 4. Probes find candidates only; check every hit in the text.

**Generic and type:** list typefaces and font pairs following [generic-catalog.md](generic-catalog.md) 4 and 7.

**Minimum type size (gate):** values and measurement only in [use-cases/README.md](use-cases/README.md) 4.1; register and direction may set higher values, never lower. On the web tell H4 checks only the first screen and exempts short texts up to 30 characters from 11 px with 4.5:1; whether they must be read is decided by eye.

## 4 Media-specific gates

Specs and check points in the profile of the case (field "Check") and in [use-cases/README.md](use-cases/README.md) 4.2; they block like the universal ones. Often forgotten: social and ads safe area (check class `.safe-area`), thumb view at 360 px, test plan ([use-cases/README.md](use-cases/README.md) 6); sequences contact sheet and tells F1, F2, F4, F6; product UI every state and generic at most 1; email under 80 KB and readable without images; document and print fonts embedded, bleed, RGB note in the wrap-up.

## 5 Triage the generic check

1. **Look first:** answer V1 to V26 ([generic-catalog.md](generic-catalog.md) 6) on the image (lead agent in Standard, R3 in Studio), then read the report (medium [13]).
2. **Classify every red tell:** truly generic, intentional (stated in the contract) or measurement error (18, confirmed on the image).
3. **Intentional:** measure again with `--intentional "<ID>"`; these do not count and appear in the wrap-up with a reason.
4. **Measurement errors:** note them with a visual value ("tell D7: image area by eye 60%, WebGL") and subtract them.
5. **Index after triage** = remaining red tells plus clusters. At 2 a visual check on the render and a scroll capture; at 2 or 3 a second run (18, no. 15).
6. **Yellow tells:** check with the hint question in the catalog; without a good answer a candidate for the fix list, not a gate.
7. **Sequences:** total index = median of the surfaces plus red tells F.
8. **Replace, don't delete:** a truly generic element usually had a job (warmth, emphasis, movement, guiding the eye). Replace it with an element from the product's world that has the same job, do not delete it without replacement: instead of the italic accent word a marking, scale or tool trace from the project world (for example the roast-level scale of a coffee roastery or the chalk marking on a building shell); instead of the hand-drawn arrow a real note on the object; instead of the icon row the object itself; instead of the stock photo the image that shows the claim. When it is only deleted, the surface usually ends up calmer but emptier, and the impact drops.

**Not run:** if the report says `"pixelCheck": "not run"` (Python 3, `pillow` or `numpy` missing), the pixel tells B2, B4, B5, B7 and D11 are unmeasured, never clean: answer them on the image and name them in the wrap-up under "not run or substituted" ([generic-catalog.md](generic-catalog.md) 1).

Clean does not mean outstanding ([generic-catalog.md](generic-catalog.md) 5): U1, U10 and V1 to V26 stay mandatory.

## 6 Measurement profile of the direction

Corridors and mode from contract field 8. Fields (`measure.mjs`, with `--selector` per surface): `typography` (`families`, `scaleRatio`, `distinctSizes`, `distinctWeights`, `largestText.weight`, `centeredShare`, `upperLabels`, `monoShare`), `fold` (`words`, `buttons`, `imageAreaShare`), `surfaces` (`cards`, `cardGrids`, `radii`, `gradients`, `glows`, `blurs`); `pixels.py palette` (`saturatedShare`, `calmAreaShare`, `colorfulness`, `meanLuminance`).

**Deviation** (H), relative to the nearest corridor limit:

- inside the corridor: fine;
- up to about 20% outside: yellow, justify or adjust;
- further outside: correct, or record as an intentional deviation in contract field 9 and in the wrap-up;
- corridor 0 (glows, card grids): every hit needs a named meaning (U5), otherwise correct;
- integer corridors up to 5 (buttons, card grids): one off is yellow, two off means correct.

**Before the verdict:**

- Measurement artifacts (18) first; enter the visual value instead of the tool value.
- If the result is far off the corridor, check the mode first.
- Saturation strategy (G4): A below 1% saturated pixels on the surface without photos, B 1 to 25%, C above 25%; a tighter value from direction or register applies if it is in the contract. For A hide photos with a check class (`.review-no-images img, .review-no-images video { visibility: hidden }`) and measure again (H).
- Desktop corridors apply to other media only as far as the datasheet names them for the register; if a corridor is missing, [directions/README.md](directions/README.md) 2 and 2.1 and the Pros values of the profile apply, on a deviation the tighter value, recorded in contract field 8.

## 7 Difference of the mockups

Rule and thresholds: [exploration.md](exploration.md) 7.1. For each pair from the mockup runs ([exploration.md](exploration.md) 8) compare family and `scaleRatio`, `calmAreaShare` or `fold.words`, and the saturation class from `saturatedShare`; anchor type and signature moment by eye. Result in contract field 12: "A vs B: type voice, color strategy (2 levels, 2 measured)".

## 8 Reviewer roles

Guiding questions and use: [SKILL.md](../SKILL.md) stage 5. One fresh call per role and round, where possible with a different model strength (high [1]; in Claude Code a subagent with a different `model`, otherwise name it in the wrap-up); roles beat single raters (high [14][16]).

| Role | Checks | Sees in addition |
|---|---|---|
| R1 Art Director | finished and convincing (without a "to be added" label and without an on-image hedge), tangible idea from the product's world with a through-line, offer on the key surface and recognizable as what it is, image proves the claim (without compositing into a foreign photo), thesis derivable, direction fidelity to the contract, signature element carries and the rest is calm, hierarchy (squint test, hero headline), coherence and rhythm across sequences (change, no repetition beyond the limits), swap test (cover the logo), craft at system level | contact sheet, 360 px view |
| R2 Audience | understanding test with fixed questions (below) | only contract field 3 as the persona |
| R3 Generic | blind judgment with V1 to V26, then triage of the detector report (5); copy genericness | report only after the judgment, false-alarm list (18) |
| R4 Production and Access | sizes, safe areas, export, contrast, target sizes, focus, overflow, states, print, line breaks of long words, motion, alt texts; completeness of the review view | spec lines and review view up front, measurement reports only after the judgment |

Visible placeholders, gray photo areas, empty zones and production notes in the presentation view are flaws of the category Goal (on anchor, title or main figure at least important, ship threshold missed) or Craft (secondary surfaces), not of the category Truth. The following are flaws of impact as well (category Goal), even when honestly meant:

- labels such as "to be added", "details to follow" or "coming soon", dashed boxes for open items, and a label, row or field without a value (for example a price row or a legal line with only its field name), in any place (at least important, ship threshold missed);
- on-image hedges: notes under the company's own statements, depiction notes such as "depiction based on assumptions", source lines where no third-party figure stands (at least important, ship threshold missed);
- compositing that paints or overlays the product into a foreign photo, and soft fake 3D;
- repetition: the same image more than twice, the same signature element or the same component more than three times in full form per sequence;
- missing change in sequences: a deck without at least two full-bleed surfaces and one color ground, a series without a change of ground or of light and dark, in calm directions too;
- product not recognizable as what it is: the core property from the brief only in small print instead of headline or anchor, or color and form in the image fit another product;
- quiet hero headline in the Persuade register: weight below 500 without a display cut, or more than four lines on desktop;
- mandatory line without a trigger in the medium (for example a unit price without a price; category Craft);
- duplication from a fix: the same fact or name twice on one surface, or a warning color used for reassurance (category Craft);
- on scrolling pages (websites, landing pages, web apps) a product surface, device or card cut by a section boundary inside the page; it reads as an overflow bug (category Craft, important), even when the contract calls the crop intentional ([craft.md](craft.md) 5.1, point 5).

Not flaws: a mandatory line with a trigger in the place of the real medium, and an open item of a decision-critical section in final form: phrased with what is known, as complete content in the typography of the content (a card, row or field only with its value), none on stage surfaces (title, proof, strongest figure, closing), at most one per surface and three per sequence ([SKILL.md](../SKILL.md) stage 4, points 4 and 6). Every open item beyond that is a flaw of the category Goal; the fix moves it to the review view and the wrap-up. A missing decision-critical section is a flaw of the category Goal; the fix is the section with known facts and open items in final form, never deleting. Not a flaw either: one line that introduces a sample case as made up where the case begins; report it only when it stands next to a single figure or appears more than once.

In Quick: R1 as a short review (360 px and full size, at most 150 words); without subagents the cold look (17). In Standard the lead agent takes over R3 (5) and R4 (gates); against self-preference R1 then gets V1, V3, V8, V12, V17, V18, V21 as extra questions.

**R2 is an understanding test, not proof of impact** (high [15]). R2 gets only the persona and the presentation view, otherwise it answers from the text instead of the image (H). Sequence in one call (`r2`): first only persona.md and the 360 px view, questions 1 to 5, note the answers and do not change them afterwards; only then full size and mobile (on scrolling pages also the parts, 9), questions 6 and 7 ([templates/review-brief.md](../templates/review-brief.md) 1, 2). The persona is in the contract's language; answers quote words in the output language.

| No. | Question | Expected answer (noted by the lead agent beforehand, not in the review folder) |
|---|---|---|
| 1 | Who is the sender? | contract fields 1, 4 |
| 2 | What is offered, in a sentence of your own? (Read register: what is the key message?) | field 2 |
| 3 | What should I do next, and where? (Operate register: where do I start the main task?) | field 2, action |
| 4 | Who is this for? | field 3 |
| 5 | Which number, which image, which sentence stuck? | anchor, field 8 |
| 6 | Does anything look invented, exaggerated or unclear, or like a real record (a customer, a price paid, a date) that the surface does not explain? Do two values contradict each other? What, where? | field 7 |
| 7 | Which word would the audience not use or not understand? | field 3 |

Scoring per question: right, partial, wrong. Questions 1 to 3 wrong: one flaw of the category Goal each, important; all three wrong: blocker (H). A hit on question 6: a flaw of the category Truth when the value is not in brief or answers, or two values contradict each other; consistent sample values inside a mockup (introduced as made up on persuasion surfaces, listed in the review view elsewhere; [craft.md](craft.md) 5.1, point 9) are no hit. The flaw closes only by fixing or removing the value, never by a design reason, and a true fact that reads invented gets its base in the sentence ([copy.md](copy.md) 7), never a note.

## 9 Review folder

Per round `review/round-N/`, structure and commands in [templates/review-brief.md](../templates/review-brief.md). Contract excerpt and images are generated fresh for each round from the current main contract and the current version, never copied from the previous round.

| Gets | Does not get |
|---|---|
| contract Part A, fields 1 to 10 (R1 field 8 only after its own thesis judgment; R2 only field 3) | history, reasoning, ranking, recommendation, Part B |
| images of the presentation view: full size, 390 px, 360 px, contact sheet, states; neutral names; R4 also the review view. For scrolling pages also the whole page in parts of about two screen heights (after a full scroll, with reduced motion; at most five, otherwise spread evenly) and the first two screens at 390 px; R2 opens them only for questions 6 and 7. Reason: with the first screen alone a late form, a flat rhythm and contradictions stay invisible. | code, project paths, names like "final" or direction codes; R1 to R3 no review view |
| role, rubric excerpt, two short example critiques | earlier critiques, other reviewers |
| R3, R4: measurement reports after the judgment; R4 spec lines up front | R1, R2: never measurement reports |

Example critiques with a score breakdown (high [11]) come from your own test runs, never from third-party screenshots.

## 10 Output format

Wording and order: [templates/review-brief.md](../templates/review-brief.md) 2, 5; at most 350 words. First exactly three flaws, then scores; R3 and R4 add to it after the measurement report without changing 1 to 5.

**Categories:** Goal (message, hierarchy, impact), Craft, Function (operation, states), Medium (format, widths), Access (accessibility), Truth (content, proof), Distinctiveness. Vague judgments ("more modern", "more wow") are not allowed: always element, location, problem, change.

## 11 Rubric

**Anchors** of the scores 0 to 10 and the reading per criterion: [templates/review-brief.md](../templates/review-brief.md) 3.

**Cap:** a blocker of the category Function, Access or Truth limits every score of the role to at most 6.

| Role | Criteria |
|---|---|
| R1 | Finished and convincing (would a good studio show it like this? for screens, in the small view: does it read as a finished product or as a wireframe? does the mood contradict the subject or what the user asked for? no "to be added" label, no on-image hedge, open items only in final form; does a sequence have rhythm with a change of ground or of light and dark, without an image more often than twice and a component more often than three times in full form?), Idea from the product's world visible (an object, a situation or a concrete example carries the whole and runs through as a through-line; thesis derivable), Offer on the key surface shown (the offer itself or its use, recognizable as what it is: core property in headline or anchor; software as an interface with sample data, no abstract diagram), Image proves the claim (not just the topic; no product composited into a foreign photo), Direction fidelity, Distinctiveness (cover-the-logo question), Hierarchy (in the Persuade register the hero headline holds against the image), Coherence |
| R2 | Understanding (questions 1, 2, 4), Clarity of action (question 3), Credibility (question 6), Language and scene (question 7) |
| R3 | Defaults (10 means: none visible), Origin of every defining element, Copy genericness |
| R4 | Spec fidelity, Access, States and widths, Production readiness |

- Criteria describe effects, not role models or target values such as "9 as a target" (medium [12]).
- Shuffle the order of the criteria per round (high [6]); only "Finished and convincing" always comes first for R1, because it carries the ship threshold (H).
- If R1 Finished and convincing is below 6 or Distinctiveness below 7, if R1 sees no idea from the product's world or no offer on the key surface (Persuade, Feed, solution slide in the deck), if R1 names a "to be added" label, a dashed box for open items or an on-image hedge, or if U1 or U10 fails: check the ship threshold from [SKILL.md](../SKILL.md) (H).

## 12 Weights for the version comparison

Only to determine the best version, never as a target value (H).

| Group | Clarity | Proof and material | Distinctiveness | Craft |
|---|---|---|---|---|
| Decks, documents, reports | 35 | 30 | 15 | 20 |
| Social, ads, thumbnails | 30 | 20 | 30 | 20 |
| Web, landing page | 30 | 25 | 20 | 25 |
| Product UI | 25 (task solvable) | 30 (states, real data) | 10 | 35 |
| Brand, logo, packaging | 20 | 15 | 40 | 25 |

Mapping: Clarity from R1 Hierarchy, R2 Understanding and Clarity of action; Proof and material from R1 Offer on the key surface and Image proves the claim, R2 Credibility, R3 Origin; Distinctiveness from R1 Idea from the product's world and Distinctiveness, R3 Defaults; Craft from R1 Finished and convincing, Direction fidelity and Coherence, R4. Per group the mean of the available scores; sum of weight times mean divided by 10 (0 to 100). Versions with a red gate, a blocker or a missed ship threshold drop out beforehand; under 5 points apart a blind pair comparison decides (13), as far as the call budget allows; otherwise the higher sum applies, and on a tie contract and measurement profile decide (15, point 2).

## 13 Blind comparisons and call budget

Only for choice decisions: directions in Studio ([exploration.md](exploration.md) 11), the Studio build-out, version against version, before against after in mode Correction. Gates and flaws are checked absolutely against the rubric, never in pairs (high [4]).

- **Pair comparison:** both orders in separate fresh calls, neutral names drawn anew for each call; question of R1 ([templates/review-brief.md](../templates/review-brief.md) 6); a tie is allowed; only judgments that come out the same in both orders count (medium [5]).
- **Ranking judgment** for three or four surfaces at once, only by R1: contact sheet with drawn letters, second call in reverse order; only a rank 1 that stays the same in both counts (H).
- No adaptive tournaments.
- **Studio build-out:** two build-outs of the chosen direction with a different anchor or a different idea, never below the dose from contract field 6; one blind pair comparison by R1 in both orders; the stronger one is refined. If the judgment is not stable, contract and measurement profile decide (15).

| Level | Step | Calls |
|---|---|---|
| Quick | R1 short review | 1 |
| Standard | Round 1: R1 and R2 (R2 as one call `r2`) | 2 |
| Standard | Round 2: only with open flaws from important up, R1 on the fixed version; a pair comparison would need two calls (both orders) and does not fit the budget | at most 1 |
| Studio | Directions: R1 as a ranking judgment, both orders (also with four mockups) | 2 |
| Studio | Build-out: one pair of two build-outs, R1 in both orders | 2 |
| Studio | Round 1: R1, R2, R3, R4 one call each | 4 |
| Studio | Round 2: only roles with open flaws from important up, or a pair comparison version against version (R1, both orders) | at most 2 |

Total at most: Quick 1, Standard 3, Studio 10, plus a round the user books (16). A version comparison after round 2 counts toward round 2. When the budget is used up, the best reviewed version (12) ships. After the last reviewer call only local fixes that align with what exists: the same element as elsewhere in the work, a size raised to the medium's minimum, a measured gate, a value from the ledger ([craft.md](craft.md) 12.1), or a known fact from brief and answers inside an existing element. Nothing new is added (no row, label, caption, section or direction, no ground or color pairing that the reviewed version does not already have; a contrast step within the same hue to pass a gate stays local); a value outside brief, answers and ledger is corrected or removed, while an element that carries a statement of the brief or a decision-critical fact stays and is fixed locally or listed. Before shipping the lead agent renders every changed area at full size, runs the gates again (in the feed with the safe area) and checks V26 and the section-edge rule ([craft.md](craft.md) 5.1, point 5). Changes are named in the wrap-up as "changed after the last review, not reviewed". A flaw from important upward that needs more than a local fix goes to the user with the cost of one more round (16). Reason: the stop rule prevents endless rounds, not obvious fixes.

## 14 Countermeasures against biases

Summarized in 8 to 13 (evidence [1], [2], [5] to [8], [13], [17]). Measure fine details such as spacing and tracking instead of asking reviewers for them (high [10]).

## 15 Merging and disposition

1. **Veto:** a red gate or a blocker from a reviewer blocks delivery. Exception only if the contract allows the deviation; then in the wrap-up as intentional.
2. **Taste:** majority among R1, R3, R4; R2 counts only for understanding and credibility. On a tie contract and measurement profile decide.
3. **No passing on** of one reviewer's output to another.
4. **Fix list:** three to five points by lever ([craft.md](craft.md) 4), each with location and the measured value before. The lead agent decides which change serves the contract; every flaw of severity important or blocker is implemented or listed with a reason in the wrap-up. A generic element is replaced, not just deleted (5, point 8); removing is a valid fix for an element without a job in its section. A fix that adds information removes the duplicate it creates (each fact once per surface), a warning color marks only a real warning, and a reviewer's proposed addition is checked against the density of its section (empty cells count as empty area). None weakens anchor, idea or impact, and none deletes a decision-critical section. A reviewer's request for a fact that brief and answers do not give becomes an asset request, never copy.
5. **Truth without loss of impact:** solve a truth finding so that the presentation view stays finished: a best-form stand-in that shows the claim ([images-and-assets.md](images-and-assets.md)), a built mockup with sample data, draft copy from the brief or an open item in final form instead of an empty surface or a deleted section. Decision-critical sections always stay: known facts, open items in final form in the right place ([SKILL.md](../SKILL.md) stage 4, points 4 and 6). **Final form** means: phrased with what is known, as complete content in the typography of the content (a card, row or field such as "Liability" or "Insurance coverage" only with its value; a label without a value counts as a placeholder), never like a label ("to be added", "details to follow"), dashed box, bracket, underscore or footnote; none on stage surfaces (title, proof, strongest figure, closing), at most one per surface and three per sequence, everything else only in the review view and the wrap-up. Mandatory notices stand in the place of the real medium and only when their trigger is in the medium (unit price only next to a price; [compliance.md](compliance.md) 2). In the generic check use `--intentional E6` only for a mandatory line with a trigger or a field in final form, never for a label. **No on-image hedges:** the company's own statements stand without a note; sources only for third-party figures, collected in a footnote or appendix; depiction notes ("depiction based on assumptions") only in the review view. Leave out only a secondary detail without which the surface still works (source, period, contact line). All open items, stand-ins and notes also stand in the review view. Never an invented detail, never a gray or empty area. Findings lead to better design, not to more caution.
6. **Disposition:** ship; targeted fix (list); rebuild (same direction, different anchor or structure); restart (the direction does not carry: back to stage 3 or to the user).
7. **Save the version:** every round as `versions/version-N/` with file, renders, `generic.md`, measured values and reviewer scores. The best one ships (12), not the last (high [9]).

## 16 Stop rules

| Signal | Action |
|---|---|
| all gates green, no blocker, ship threshold met | ship |
| only cosmetically better, no new flaws | plateau: ship the best version |
| better in one dimension, worse in another | best version following 12, not the last (high [9]) |
| the same flaws after two rounds | change of course: next candidate or ask the user (high [19]) |
| reviewer scores rise, measurements or a fresh reviewer see nothing | reward hacking: separate the context, measurements decide (high [2]) |
| two review rounds or the cap of reviewer calls (1) reached | show the best version with up to three open flaws from important upward (location, flaw, fix) and what one more round costs (time, calls), in the wrap-up ([dialogue.md](dialogue.md) 2, M5, M5s); the user books one more round (an add-on, [SKILL.md](../SKILL.md) principle 9) or accepts it as it is, and the flaws go to `open-items.md`. The same flaws after two rounds still mean a change of course (row "the same flaws after two rounds"). On silence and in the modes Autonomous and No user available: acceptance. |
| index after triage from 3, or a cluster after round 2 | restart |
| ship threshold missed | change of course (stand-in that shows the claim, built mockup with sample data, draft copy, stronger idea or stronger anchor) or an honest report of what is missing |

## 17 Quick check

For level Quick, mode Review only and as a cold self-review. Measurement: measurement pass (2) with first screen and 390 px.

**Part A Generic check.** Report with the exemptions, triaged following 5 and 18. Without tools: [generic-catalog.md](generic-catalog.md) 9.

**Part B Levers.** Score every lever from [craft.md](craft.md) 4 with 0 (missing), 1 (partial), 2 (column Rule met); levers that do not apply do not count. Share = sum divided by twice the number of applicable levers. From 75% premium, 50 to 74% solid, below that generic (H). Always add the lever **looks finished:** 0 (placeholder as anchor, title or main figure, gray photo area, empty zone, production note, "to be added" label, label or field without a value, or dashed box, on-image hedge, gap marker on anchor, title or main figure, decision-critical section missing, no offer on the key surface in Persuade, Feed or on the solution slide in the deck, or software only as an abstract diagram), 1 (offer only as a stand-in drawing, motif as a final-form slot, product not recognizable as what it is, product composited into a foreign photo, an image more often than twice or a component more often than three times in full form, sequence without change (deck without two full-bleed surfaces and one color ground, series without a change of ground or of light and dark), quiet hero headline, mandatory line without a trigger, gap markers on secondary surfaces outside mandatory lines with a trigger (as in 8), open items in final form beyond the limits), 2 (finished as if from a studio; mandatory lines with a trigger and open items of decision-critical sections in final form, none on stage surfaces, at most one per surface and three per sequence, do not count against it). At 0 the ship threshold is missed regardless of the share; likewise if Part C finds no tangible idea from the product's world.

**Part C five questions.** What do you see within three seconds in the 360 px view? Which tangible idea from the product's world (object, situation, concrete example) carries the work, and does the example run as a through-line through all surfaces? Does every image prove the claim of its surface (problem, use, result) instead of just the topic? Does it fail with a competitor's logo? Is an image missing that only the user can supply: was it asked for, and does a best-form stand-in that shows the claim carry the surface until then, otherwise a final-form slot?

**Cold look.** Look at the image first at 360 px, then at full size, and note three flaws with location before reading your own build notes. Weakest review signal (high [3]); name it so in the wrap-up. With subagents in Quick use the R1 short review instead (8).

**Result of the quick check:**

1. Verdict in one sentence.
2. Pattern: generic index after triage, clusters, the three strongest tells with location.
3. Score: Part B in percent with class; Part C one sentence each.
4. Three changes by lever, each with location, measure and expected effect.
5. What should stay.
6. Open asset requests: motif, format, purpose, stand-in until then.
7. What stayed unchecked.

In mode Review only, then ask whether it should be implemented as a correction; build nothing unless asked.

## 18 False-alarm list

Every red measured value is confirmed on the image before it triggers a change; a reviewer finding that a measurement disproves (17) is struck, with the measured value.

| No. | False alarm | Affects | Handling |
|---|---|---|---|
| 1 | WebGL, canvas, video, CSS visuals and large SVGs do not count as image area | tells B7, C14, D4, D7; `imageAreaShare` | visual value |
| 2 | text as SVG, image or WebGL does not count as the largest text | tell A2; scale | large form by eye |
| 3 | hidden font specimen or loading texts become the largest text | scale; tells A7, A8 | check hidden elements |
| 4 | footnotes and logo tiles become the body size | scale; tell A2 | body size by eye |
| 5 | consent, menus, marquees and hidden slides fill words and pixels; a `consent` class on `html` hides the page | tell D8; `fold.words`; palette | only hide banners, never accept them; triage |
| 6 | house typeface with a mono name or on list L1 or L2 | tells A1, A5; Template stack | `--allow-fonts`; mono tied to code, data or brand is not a tell |
| 7 | dashes in model numbers; number labels with a real sequence | tell E2 (digit cases filtered), A6 | by eye |
| 8 | flags, globes, color dots as emoji | `emojiCount` (tell C9 excludes them) | by eye |
| 9 | paragraph, statement or quote detected as the main heading | tells A8, H6 | check the real `h1` |
| 10 | masks and image darkening counted as gradients | tell C14; `gradients` (tell C1 excludes them) | by eye |
| 11 | inner scroll containers are missing; from about 16,400 px the full-page image repeats the start | `--full` and everything below | scroll capture, `slice`, sections one by one |
| 12 | animations half faded in | image values | `--reduced-motion`, otherwise `--wait 2500` |
| 13 | transparent backgrounds distort contrast | `lowContrastTextNodes`, tell H5 | measure at the pixel |
| 14 | UI mockup in web mode: product text counted as text load, window not as image | tells D7, D8 | the tool excludes detected mockups, otherwise visual value |
| 15 | fluctuation of 1 between runs (glass areas, lazy-loaded icons) | index around 2 | second run, the image decides |
| 16 | block, sign-in or error page, or under 30 words | whole report (`blocked`, `thin`) | the index does not apply; visual check |
| 17 | tabular figures (`tabular-nums`) of the house typeface look like a second or fallback font in numbers | reviewer finding "fallback font", "second typeface" | `typography.families` in `measure.mjs`: one family means a false finding; tabular figures stay |
| 18 | not a false alarm: tell F1 when drawings do not count as images | tell F1 | look at the contact sheet: if title, anchor and emptiness stand in the same place on three surfaces in a row, F1 is real (rhythm following [craft.md](craft.md) 5.5); a measurement error only with visibly changing compositions |

## 19 Visual checks

Yes means passed, No means a flaw at exactly this location. Questions on yellow tells: [generic-catalog.md](generic-catalog.md) 3, column Hint; visual tells: 6.

| Location and view | Question |
|---|---|
| presentation view | Does it look finished, without a visible placeholder, gray photo area, empty zone, production note such as `[REQUIRED: ...]`, label such as "to be added" or "details to follow", dashed box, or on-image hedge such as a note under the company's own statements or a depiction note (V26)? |
| review view | Does it contain all stand-ins, draft copy, open facts, mandatory points and depiction notes, each with location? |
| decision-critical sections | Are all present, with known facts and open items in final form (phrased with what is known, no label, row or field without a value, none on stage surfaces, at most one per surface and three per sequence), instead of left out, evaded or shown as a label? Does each heading promise only what its section answers? |
| brief, statement by statement | Does every statement of the brief (audience, offer, price with its unit, terms, each feature, goal) stand visibly in the delivered images (for software as a control, state or result), or is it named in the wrap-up as left out on purpose? Does the anchor show what the product contributes ([SKILL.md](../SKILL.md) stage 4, points 1 and 10)? |
| key surface and every image | Does the key surface show the offer, recognizable as what it is (core property in headline or anchor, color and form fit), and does every image prove the claim of its surface, not just the topic, without compositing the product into a foreign photo? |
| 360 px view | Do you see exactly one element first, and is it the anchor from the contract? |
| 1440, first paint | Is the key message readable, without a loading screen and without scrolling? |
| hero | Is there exactly one emphasized main action? |
| hero in the Persuade register | Does the headline hold against the image: strong weight (500 or more, or a display cut), at most four lines on desktop? |
| logo covered, foreign logo imagined | Is the brand still recognizable, and does the surface fail with a foreign logo? |
| 390 px | Rearranged, shortened or cropped instead of scaled down, without must-read information in scaled-down UI? |
| 320 and 390 px, display lines | Does every long word break only at a hyphenation point, with a hyphen (German compounds: [markets/german.md](markets/german.md) 3)? |
| text over photo, video, gradient | Does every spot hold 4.5:1 at the least favorable point (large type 3:1)? |
| type under 12 px | Is it free of must-read content (no price, no mandatory notice, no label)? |
| footer, forms, consent, errors | Same voice as in the hero; mandatory notices only in the place of the real medium and only with a trigger in the medium (unit price only next to a price), small ([compliance.md](compliance.md) 2)? |
| every number, every logo, every quote | Real, attributable, with a reference value, or sample data, introduced as made up on a persuasion surface ([craft.md](craft.md) 5.1, point 9) and otherwise listed in the review view as an example? Outcome values only from brief and answers? The company's own statements without a note, sources only for third-party figures and collected in a footnote or appendix? Is every value shown twice the same, and does what comes before a change show the before value? |
| product UI per state, tab run | States designed, focus visible everywhere, targets as in the gate? |
| sequences, contact sheet | Same content type built the same way, every change with meaning? |
| sequences, contact sheet, change | In calm directions too: a deck with at least two full-bleed surfaces (color from the brand world or an image bleeding off the edge) and one color ground, a series with a change of ground or of light and dark; no image more often than twice, no signature element and no component more often than three times in full form; every full-bleed color surface and color ground in a color whose role allows it ([craft.md](craft.md) 7.1)? |
| sequences, titles stacked | Do the titles alone tell the story? |
| social, `.safe-area` and thumb view at 360 px | Does all text sit in the safe area, and is the most important element readable? |
| email without images | Do message and action stay understandable? |
| chart | Only colored what should be seen; every area proportional (recalculated)? Does the marked part match the number next to it at first glance (360 px)? |
| reduced motion | Does the surface stay complete? |

## Sources

1. Panickssery et al., Self-Recognition: https://arxiv.org/abs/2404.13076
2. Pan et al., Reward Hacking in Self-Refinement: https://arxiv.org/abs/2407.04549
3. Huang et al., Cannot Self-Correct Yet: https://arxiv.org/abs/2310.01798
4. Tripathi et al., Pairwise or Pointwise?: https://arxiv.org/abs/2504.14716
5. Seo, image choice and position (preprint): https://arxiv.org/abs/2610.01243
6. Xu et al., rubric position effect: https://arxiv.org/abs/2602.02219
7. Saito et al., Verbosity Bias: https://arxiv.org/abs/2310.10076
8. Wynn et al., Multi-Agent Debate: https://arxiv.org/abs/2509.05396
9. Madaan et al., Self-Refine: https://arxiv.org/abs/2303.17651
10. Haraguchi et al., Can GPTs Evaluate Graphic Design?: https://arxiv.org/abs/2410.08885
11. Duan et al., UICrit: https://doi.org/10.1145/3654777.3676381
12. Anthropic, Harness design: https://www.anthropic.com/engineering/harness-design-long-running-apps
13. Impeccable, critique and detector rules: https://github.com/pbakaus/impeccable
14. NN/g, Theory of Heuristic Evaluations: https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/theory-heuristic-evaluations/
15. Dow et al. 2011, Prototyping Dynamics: https://d.ucsd.edu/srk/papers/2011/PrototypingDynamics-CHI2011.pdf
16. Chan et al., ChatEval: https://arxiv.org/abs/2308.07201
17. Wataoka et al., Self-Preference Bias: https://arxiv.org/abs/2410.21819
18. W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
19. Liang et al., Degeneration of Thought: https://arxiv.org/abs/2305.19118

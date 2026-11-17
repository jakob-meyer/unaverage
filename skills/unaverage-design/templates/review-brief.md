# Review brief: [project], round [N]

> **For the lead agent:** replace the placeholders in square brackets, delete the hints in quote blocks. One call per role and round in a fresh context, also for R2; model choice, rules, rubric and merging: [references/review.md](../references/review.md) 8 to 16. Reviewer calls at most Quick 1, Standard 3, Studio 10 including blind comparisons (Studio: ranking judgment of the directions by R1 in both orders 2, pair comparison of the two build-outs by R1 in both orders 2, round 1 R1, R2, R3, R4 1 each, round 2 at most 2); split there in 1 and 13; without subagents [references/dialogue.md](../references/dialogue.md) 7.3. Reviewer briefings are in English; copy is quoted verbatim in its language. R2 gets the persona in the contract's language and answers question 7 with words in the output language.

## 1 Create the folder

```text
review/
  round-N/              the briefing names only this folder
    contract.md         design contract Part A without field 8 (fields 1 to 7, 9, 10)
    field8.md           only field 8 (direction); R1 only in step 6, R3 and R4 from the start
    spec.md             only for R4: spec row and check points of the case
    review-view.png     only for R4: the review view (or open-items.md)
    rubric-R1.md        excerpt from section 3, one file per role
    calibration-R1.md   example critiques of the role (section 4), one file per role
    images/             presentation view only
      01-small.png      360 px wide, for the squint test
      01-desktop.png    original size
      01-mobile.png     390 px
      02-desktop-partNN.jpg      scrolling pages: the whole page in parts of about two screen heights, at most five
      02-mobile-two-screens.jpg  scrolling pages: the first two screens at 390 px
      sheet.png         contact sheet, for sequences
      state-empty.png   product UI: one image per state
    r2/                 R2, one call: persona.md (field 3 only, in the contract's language), 01-small.png, 01-desktop.png, 01-mobile.png, for scrolling pages 02-desktop-partNN.jpg and 02-mobile-two-screens.jpg, rubric-R2.md, calibration-R2.md
  measurements-N/       only R3 and R4, only after their own judgment
    generic.md
    measurements-1440.json
    palette-1440.json
  pair-N/               blind comparison: contract.md (without field 8), a.png and b.png or sheet.png
  answers-N/            the reviewers' returns, never pass them on to reviewers
versions/
  version-N/            file, renders, measurements, reviewer scores
```

```bash
S=[skill folder]/scripts; N=1; P=review/round-$N; M=review/measurements-$N
mkdir -p $P/images $M review/answers-$N versions/version-$N
cp render/output-1440-fold.png $P/images/01-desktop.png
cp render/output-390-fold.png $P/images/01-mobile.png
$PY $S/pixels.py sheet $P/images/01-small.png render/output-1440-fold.png --cols 1 --width 408
mkdir -p $P/r2 && cp $P/images/01-small.png $P/images/01-desktop.png $P/images/01-mobile.png $P/r2/
# scrolling pages: the whole page in parts and the first two screens at 390 px (why: references/review.md 9)
node $S/render.mjs output/index.html render/ --viewports 1440x900,390x844 --full --reduced-motion --name parts
cp render/parts-1440-full.png render/02-desktop.png
cp render/parts-390-full.png render/02-mobile-two-screens.png
$PY $S/pixels.py slice render/02-desktop.png $P/images --height 1800 --max 5
$PY $S/pixels.py slice render/02-mobile-two-screens.png render/ --height 1688 --max 1
cp render/02-mobile-two-screens-part01.jpg $P/images/02-mobile-two-screens.jpg
cp $P/images/02-desktop-part*.jpg $P/images/02-mobile-two-screens.jpg $P/r2/
cp render/generic.md render/measurements-1440.json render/palette-1440.json $M/
sed 's/<body\([^>]*\)>/<body\1><script>document.body.classList.add("review-view")<\/script>/' output/index.html > output/review-view.html
node $S/render.mjs output/review-view.html render/ --viewports 1440x900 --full --name review-view && cp render/review-view-1440-full.png $P/review-view.png
```

> Keep image names neutral: no direction codes, no "final", no "new". Other render paths: social and ads `01-desktop.png` at target size, `01-small.png` 360 px wide, `01-mobile.png` dropped; sequences in addition a contact sheet with `$PY $S/pixels.py sheet $P/images/sheet.png render/output-*.png --cols 4`; product UI one image per state; the review view in the same render path. Note the expected answers for R2 ([review.md](../references/review.md) 8) beforehand, but do not put them in the review folder.

## 2 Briefing

```text
Role: [R1 Art Director | R2 Audience | R3 Generic reviewer | R4 Production and Access]

Read only these files in [review/round-N/]: contract.md, [field8.md (R3, R4; R1 only in step 6)], rubric-[role].md, calibration-[role].md, [spec.md and review-view.png or open-items.md (R4)] and the folder images/. R2 reads only [review/round-N/r2/]. Read no other files, no other folders, no code.
You did not make this draft and know no reasons for it. You advise; you do not decide.
The images show the result as the audience sees it. Flaws in them (Goal or Craft), even if honestly meant: visible placeholders, gray image areas, empty zones, production notes; labels such as "to be added" or "details to follow", dashed boxes, and a label, row or field without a value; hedges such as a note under the sender's own statements, a depiction note or a source line where no third-party figure stands; a product painted or composited into a foreign photo; the same image more than twice, the same component more than three times in full form; a sequence without a change of ground or of light and dark; a product that is not recognizable as what it is; a mandatory notice without a trigger in the image (for example a unit price without a price); the same fact twice on one surface, or a warning color used for reassurance; on a scrolling page, a product surface, device or card cut by a section edge inside the page (it reads as an overflow bug). Not flaws: a mandatory notice with a trigger in the place of the real medium, and an open item in a decision-critical section (for example liability, transit times, costs) that is phrased with what is known (a field or row only with its value), at most one per surface and three in the sequence, none on a stage surface (title, proof, strongest figure, closing). Not a flaw either: one line that introduces a sample case as made up where the case begins; report it only when it stands next to a single figure or appears more than once. If a decision-critical section is missing, that is a flaw (Goal).
Look at every image small first (01-small.png), then at original size and mobile. Judge type sizes, spacing and contrast only on the image at original size or by measurement; the small view and the contact sheet show only impact and series logic.
Write in English; quote copy verbatim in its language.

1. [role sentence from the list below]
2. First name exactly three flaws, each with location (image and area), category (Goal, Craft, Function, Medium, Access, Truth, Distinctiveness), severity (blocker, important, polish), a concrete change and the expected effect. The change replaces or adds: for a weak or generic element name a replacement from the product's world with the same job, not just deletion. Removing is a valid change for an element without a job in its section; an addition must not repeat a fact already on the surface. Never delete a decision-critical section.
3. Score every criterion from rubric-[role].md from 0 to 10, each with one visible observation (R1: Finished and convincing first, Direction fidelity only in 6).
4. Name one element that should stay.
5. Disposition: ship | targeted fix | rebuild | restart.
[R1 only] 6. Only when 1 to 5 are fully written: read field8.md and score only Direction fidelity (do anchor, type, color and composition follow field 8?). Do not change 1 to 5.
[R3 and R4 only] 6. Only when 1 to 5 are fully written: read [review/measurements-N/]. Classify every red tell as truly generic, intentional per contract.md, or measurement error (visible on the image). Do not change 1 to 5; corrections only here and only if the report shows something you missed.

At most 350 words. No adjectives without element and location; "more modern" or "more wow" are not allowed. Answer in the format below.
```

**Role sentences**

- **R1:** "Does a color with a meaning in the contract keep it on every surface, or does it appear as a ground or band without that meaning? Does it look finished and convincing at first sight, as if from a good studio? Does one tangible idea from the product's world (an object, a situation, a concrete example) carry the whole, and does the example run through as a through-line? Does the key surface show the offer itself or its use, and is it recognizable as what it is? Do the images prove the claim of their surface, or only the topic? Does a sequence change (ground, light and dark, full-bleed surfaces), or does it repeat image and slide or section type? Then name, from the images and contract.md, the thesis, the anchor and its source, and whether they come from this project. Cover the logo in your mind: do you still recognize the brand?" Direction fidelity only in step 6.
- **R2** (one call, only r2/; R2 sees only the presentation view and the persona): "You are the person in persona.md. First open only 01-small.png, look at it once and answer briefly from the first impression: (1) Who is the sender? (2) What is offered, in a sentence of your own? [Read: What is the key message?] (3) What should I do next, and where? [Operate: Where do I start the main task?] (4) Who is this for? (5) Which number, which image, which sentence stuck? Answer what you see, not what might be meant. Write down these five answers before you open another image, and do not change them afterwards. Then look at 01-desktop.png, 01-mobile.png and, if present, the 02 images: (6) Does anything look invented, exaggerated or unclear, or like a real record (a customer, a price paid, a date) that the surface does not explain? Do two values contradict each other? What, where? (7) Which word would you not use or not understand? Quote it as it stands, in the output language. Then parts 2 to 5 per rubric-R2.md."
- **R3:** "In one sentence: what would a standard generator have done the same way? Before that, answer questions V1 to V26 in rubric-R3.md on the image and name the location for every No."
- **R4:** "In one sentence: the biggest risk in real use. Check against spec.md: sizes, safe areas, export, contrast, target sizes, focus, overflow, states, print, line breaks and hyphenation of long words, motion, alt texts. Check in review-view.png or open-items.md: are mandatory notices, stand-ins, open items and depiction notes complete, and do the images contain no production note, no label like "to be added", no hedge and no mandatory notice without a trigger?"

## 3 Rubric excerpt

Copy the shared part and the role's block into every `rubric-[role].md`. Shuffle the order of the criteria per round; for R1, Finished and convincing always comes first.

**Shared**

- **Score anchors:** 0 to 3 goal or function missed; 4 to 5 partly usable, generic or unfinished; 6 solid, but nothing of its own; 7 clear and fitting with remaining gaps; 8 a character of its own and largely production-ready; 9 strong idea, precise execution; 10 hardly improvable in context.
- **Cap:** a blocker in Function, Access or Truth caps every score at 6.
- **Severity:** blocker (prevents purpose, access or truth), important (clearly weakens the impact), polish.
- Criteria describe effects. There is no target image and no target value.

| Role | Criterion | Read it from |
|---|---|---|
| R1 | Finished and convincing | as if from a good studio; for screens, in the small view it reads as a finished product, not a wireframe; the mood does not contradict the subject or what the user asked for; no placeholder as anchor, title or main figure, no gray or empty area, no production note, no "to be added" label and no dashed box, no on-image hedge; no label or field without a value, open items only phrased with what is known; a sequence changes ground or light and dark, no image appears more than twice, no component more than three times in full form |
| R1 | Idea from the product's world | a tangible idea from an object, a situation or a concrete example of the product's world is visible, carries the whole and runs through as a through-line; an abstract form or pure typography alone is not enough; thesis derivable from contract.md |
| R1 | Offer on the key surface | the offer itself or its use is visible and recognizable as what it is (core property in the headline or anchor, color and form fit); software as an interface with consistent sample data, no abstract diagram |
| R1 | Image proves the claim | every image shows what its surface claims (problem, use, result), not just the topic; a topic photo without a claim is weaker than a final-form slot; no product painted into a foreign photo, no soft fake 3D |
| R1 | Direction fidelity | anchor, type, color, composition follow field 8 |
| R1 | Distinctiveness | the anchor belongs only to this brand; recognizable with the logo covered |
| R1 | Hierarchy | in the small view exactly one element comes first; a hero headline holds against the image (strong weight, at most four lines on desktop) |
| R1 | Coherence | the same rules across all surfaces; every change means something |
| R2 | Understanding | answers 1, 2 and 4 |
| R2 | Clarity of action | answer 3 |
| R2 | Credibility | answer 6 |
| R2 | Language and scene | answer 7; the tone fits the scene in persona.md |
| R3 | Defaults | 10 means: no element looks like a tool or template default |
| R3 | Origin | every defining element has a visible source in the subject |
| R3 | Copy genericness | no sentence could stand on a competitor's site |
| R4 | Spec fidelity | sizes, zones, formats per spec.md |
| R4 | Access | contrast, minimum type size, focus, target sizes, alt texts |
| R4 | States and widths | empty, loading, error, data-rich; 320, 390, desktop |
| R4 | Production readiness | export, file size, print data, nothing hidden |

> For R3 also copy the columns "No.", "Tell" and "Question" of the table V1 to V26 from [references/generic-catalog.md](../references/generic-catalog.md) 6 into rubric-R3.md, without the column "Counter-example".

## 4 Calibration

> Per role two short example critiques with a score breakdown from your own test runs in `calibration-[role].md`, each at most 120 words, one around 5, one around 8, without third-party screenshots. Never from the industry or subject of the project; then construct another one. Until your own runs exist, use the constructed examples below and mark them as constructed.

**Example 1 (constructed), R1, website of a carpentry workshop**
Thesis recognizable ("craft made to measure"), but not from this business.
Flaws: (1) Hero, Goal, important: gray area "photo to follow" as the anchor; until the workshop's own photo arrives, a free photo of a fitted solid-wood staircase as a stand-in, effect: looks finished and shows the result. (2) Services, Distinctiveness, important: six identical cards with plane icons; per room (kitchen, staircase, furniture) an image of a finished piece instead of an icon, effect: shows the offer. (3) Process and costs, Goal, important: "to be added" label instead of the cost of the on-site measurement; the section states the known steps and costs in the typography of the other rows, and the open price goes to the review view and the wrap-up instead of a row without a value, effect: looks finished instead of like a review draft.
Scores: Finished 4 (gray area carries the hero), Idea 5 (craft in general, no object from this business), Offer 4, Image 3, Direction fidelity 7, Distinctiveness 4, Hierarchy 6, Coherence 7. Stays: the column grid. Disposition: targeted fix.

**Example 2 (constructed), R1, carousel of a coffee grinder maker**
Thesis: "every card one component, measured as in the workshop book", derived from the exploded drawings.
Flaws: (1) Card 4, Goal, important: two components at once, the eye jumps; one component per card, effect: faster grasp. (2) Card 1, Goal, important: title and drawing equally strong; drawing on about 60% of the area. (3) Card 7, Craft, polish: the arrow style deviates; take over the arrow of the other cards, effect: a closed series.
Scores: Finished 8, Idea 9, Offer 8, Image 8, Direction fidelity 8, Distinctiveness 9, Hierarchy 7, Coherence 8. Stays: dimension chains as the through-line. Disposition: targeted fix.

**Example 3 (constructed), R2, ad of the Nordau Zoo for its annual pass**
Answers: (1) Nordau Zoo, correct. (2) "annual pass for families", correct. (3) "buy the pass, at the bottom", partly, the button shows only at original size. (4) Families with children, correct. (5) "from €89". (6) Price without a reference (per person?). (7) The pass is named with a loanword the audience does not use.
Flaws: (1) Button, Function, important: not recognizable at small size; larger, more contrast. (2) Price, Truth, important: reference missing; "family, €89 a year". (3) Text, Goal, polish: the audience's own word for the pass instead of the loanword.
Scores: Understanding 8, Clarity of action 5, Credibility 6, Language and scene 6. Disposition: targeted fix.

**Example 4 (constructed), R3, landing page of a language school**
Standard generator: centered headline with a colored accent word, three icon cards, gradient band.
Flaws: (1) Hero, Distinctiveness, important: accent word without a reason (tell A3); replace the emphasis with an element from the lessons, for example a teacher's margin correction on the key word. (2) Benefits, Distinctiveness, important: three icon cards (tell C8); a real lesson scene as proof. (3) Closing, Craft, polish: gradient band (tell C1); a calm closing image.
Scores: Defaults 4, Origin 3, Copy genericness 5. Disposition: rebuild.

**Example 5 (constructed), R4, poster for a choir concert**
Risk: the date is not readable from 9 m.
Flaws: (1) Date, Medium, blocker: cap height 1.2 cm instead of 2.5 cm; enlarge. (2) Text over the photo, Access, important: gray at 3.1:1; put a band behind it. (3) Print data, Medium, polish: bleed missing; add 3 mm.
Scores: Spec fidelity 4, Access 5, Production readiness 5 (cap 6). Disposition: targeted fix.

## 5 Answer format

```markdown
# [Role], round [N]

## 1 [Thesis | Answers 1 to 7 | Standard generator | Risk in use]

## 2 Flaws
| No | Location | Category | Severity | Change | Effect |
|---|---|---|---|---|---|

## 3 Scores
| Criterion | Score | Observation |
|---|---|---|

## 4 Stays

## 5 Disposition

## 6 After field8.md (R1 only): Direction fidelity with score and observation
## 6 After the measurement report (R3, R4 only)
| Tell | truly generic, intentional or measurement error | Reason |
|---|---|---|
```

## 6 Variants

- **R1 short review (level Quick):** only contract.md, 01-small.png and 01-desktop.png; parts 1, 2 and 5, plus the scores Finished and convincing, Idea from the product's world and Offer on the key surface; at most 150 words.
- **Ranking judgment** (directions in Studio, R1 only, two calls): contact sheet with drawn letters in `pair-N/sheet.png`; "Rank the surfaces by [pair question of R1]. First line: the ranking." Second call with the order reversed; only an identical rank 1 counts.
- **Blind pair comparison** (two build-outs in Studio by R1, version against version, before against after; two calls per pair): draw the assignment to a and b, per version desktop and mobile as one image (`pixels.py sheet ... --cols 2`). Text: "Read only contract.md, a.png and b.png in [review/pair-N/]. [Pair question] Answer in three sentences. A tie is allowed. First line: a, b or tie." Pair questions (R1 only): build-out, and version against version, "Which looks more finished and convincing, with a tangible idea from the product's world, the offer on the key surface and images that prove the claim?"; before against after "Which fulfills the contract better?". Second call in a fresh context with the images swapped; only a judgment that is identical in both orders counts.
- **Human as reviewer:** the same images, questions per [references/dialogue.md](../references/dialogue.md) 7.3; for R2 the seven questions from section 2, questions 1 to 5 after the first look.

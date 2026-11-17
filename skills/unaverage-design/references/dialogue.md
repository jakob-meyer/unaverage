# Dialogue: messages, questions, special paths

As of 2026-10-10 (content of v2.4). Complements [SKILL.md](../SKILL.md) (stages 1, 2, 6, 7, effort, environment) without repeating it. Evidence strength: high, medium, H (derivation, to be tested).

**When to read:** first message (1, 2), questions (3, 4), reactions (5), special paths (6), missing tools (7). Candidates, mockups: [exploration.md](exploration.md); ranking: [directions/README.md](directions/README.md) 11. Questions are called Q1 to Q19, decision points DP1 to DP5; cases and tells always carry their word in front ("case B2", "tell A4").

**Language:** the patterns are written in English; talk in the user's language (SKILL.md, Language and market). With a German-speaking user the fixed German labels, signal words, trade-off pairs and reactions of [markets/german.md](markets/german.md) 1 apply; German originals of the running examples are in [markets/german.md](markets/german.md) 8.

## 1 Decision points and messages

**DP1** effort and direction path (M0, M1, M1a, M1b, M1c; all levels, in Quick without a waiting point), **DP2** design contract (M2; Studio only), **DP3** direction mockups (M3; Standard, Studio, not with a given direction), **DP4** interim (M4; Studio only), **DP5** acceptance or change (M5, in Quick M5s, MC; all). Plus MA (asset request with product photos or screenshots and the facts of decision-critical sections, bundled into M0, M1, M1a, M1b or M1c; ask for gaps found during the build at once and bundled, keep working with a best-form stand-in) and M6 (stage 7).

**Silently before M1** (Standard, Studio): the world in short form (5 to 8 parts, [exploration.md](exploration.md) 2), R0 per [directions/README.md](directions/README.md) 11.4, the calculation at prompt level with marked assumptions (README 11.7), per direction one candidate with a tangible image idea for the name and "What you see". After the answers recompute; if the set or the recommendation changes, one sentence with the reason before the mockups (M3). **Before M1c and M1a** only the world in short form and R0; ranking, candidates and seed follow after the answers.

**Rules:** one message per decision point, everything bundled (performance drops with conversation depth, medium [3]). Patterns show tone and structure; all examples are fictional, numbers in M3 to M5 are sample values, in a real run only measured ones. Put technical terms into everyday words, catalog code in brackets; user rules apply here too. What is unchecked is called "unchecked". Answers go with date into field 10 of the contract ([templates/design-contract.md](../templates/design-contract.md)). Toward the user the review view is called the "open-items list".

## 2 Message patterns

### M0 Kickoff Quick (example Weserbogen, A4 notice in the waiting room about new opening hours, case I1)

> I'll do this quickly, in about 10 minutes: an A4 notice with bleed, one direction, a measurement check, one fix round. I need two things:
> 1. **Your appointment card** as a scan or photo (at least 2,000 px on the long side). The notice shows it with the first Saturday appointment, because that is exactly the news. Until it arrives I rebuild it in the usual layout; then I put in the original.
> 2. **Logo and house color** as a file or hex. Otherwise I set the name as a wordmark and derive the color from your world.
> If you want directions to choose from, say "Standard".

Quick rule (README 11.5), short calculation over the starter set of case row I1 (R0 MAX): here ORD, because the effect Reassurance leads; group V (MAX, TYP, RAW) would not qualify as a recommendation in the risk category health anyway. The direction appears only in the wrap-up, with its derivation in two sentences, ranks 2 and 3 as one-liners. Assumptions in the wrap-up: the appointment card is the practice's own material; opening hours from the prompt; the PDF is RGB, the print shop converts.

### M1 Kickoff Standard, direction open, goal clear, the user named things or wants directions at once (example Weserbogen, case B2)

Prompt level (README 11.7; assumptions: no CI, photos unknown; the user wants directions at once and names no things): ORD rank 1 and recommendation (edge), DRW near (the only near one), bold by seed 483920 from TYP and MAX: TYP, as group V in the risk category health only the bold option, never the recommendation; WRM is R0, DAT (fit 0) and PRO (no product UI, the booking widget is third-party) are out.

> **Understood:** a website for the Weserbogen dental practice in Bremen, goal: book an appointment online, audience: patients who are anxious about treatment, desktop and mobile; your brief names the raised hand as the agreed pause signal and the printed treatment and cost plan.
>
> **Effort:** I suggest **Standard**: three directions as a mockup of the first screen (desktop and mobile), you choose or mix, then I build the site; two independent reviewers (at most three reviewer calls), at most two fix rounds, roughly 30 to 60 minutes. Otherwise **Quick** (one direction, one short reviewer, about a quarter of the effort) or **Studio** (up to four directions, blind comparison of the directions by an independent art director, two build-outs of the key surface, four reviewer roles, at most ten reviewer calls, about twice the effort).
>
> **Direction:** These three fit, in this order:
> 1. **Clear sequence** (ORD, my recommendation, at the edge of the familiar). *What you see:* a light page with the treatment steps in a fixed order, the treatment and cost plan as a readable document and objective photos of the rooms in a grid; one calm sans, one color only for "Book an appointment". *Why for you:* anxious patients want to know beforehand what happens and what it costs. *Risk:* set too strictly, it looks like a hospital.
> 2. **Tides** (DRW, near the category). *What you see:* the treatment plan as a drawn tide table, every appointment like a water level on the bank in front of your practice; calm line drawings, plenty of white space. *Why:* a picture world of its own instead of a tooth icon and smiling stock people. *Risk:* drawings quickly tip into playful.
> 3. **Big words** (TYP, bold). *What you see:* a sentence like "You can call a pause at any time." very large in the first screen, next to it as the only image the raised hand, the agreed signal for a pause; below in small type appointments and costs; black, white and one solid color. *Why:* the promise to anxious patients becomes the image itself. *Risk:* loud for a practice; in health I show it as the bold option but do not recommend it.
>
> Not included: the booking widget as the hero, because it is a third-party tool and not your interface. Or **your own idea**: one sentence is enough, I translate it.
>
> **Four questions** (without an answer, what is in brackets applies):
> 1. Is there a logo, brand color or typeface? (no; I set the name as a wordmark, color from your world)
> 2. Which images: your own photos of the practice (you confirm the consent of the people shown), free photos of place and situation that never pose as your practice, or none, I build them? (I recommend your own photos, because only you have them and anxious patients look for real faces; with free photos I still build the first screen; without an answer I build the images and list the photos as open)
> 3. Name one or two things you love the look of, from anywhere, not only websites. (no default; without an answer the directions stay as they are)
> 4. What would be worse: too clinical or too playful? (no default; without an answer the dose stays medium)
>
> **What next?** Effort (without an answer: Standard) and path: all three as mockups (without an answer), only 1, 2 or 3, or your own idea in one sentence.

After the answers (the practice's own room photos, no photos of people, wordmark without house color, "rather too calm than too playful, but not like a hospital") recomputed (README 11.7): Weser view (EDI) becomes rank 1 and recommendation, Big words (TYP) falls below the threshold, and because no bold direction remains, Clear sequence (ORD) moves up (sentence in M3).

**Recommendation in the kickoff** per README 11.5, point 7 (H). It eases the choice (high [1]) and acts like a default (high [2]), so criteria and risk stand next to it. The user's own idea replaces the lowest rank in the mockup set.

**Variant tight CI (example Nordlicht freight forwarder with a fixed CI):** all three within the CI, different in idea and anchor (README 13): the on-time rate with a reference (DAT), the pallet grid of the loading floor as form (RUL), a swap body that opens like a calendar page (ONE).

### M1c Kickoff Standard, direction open, goal clear, no things named yet (example Weserbogen, case B2)

No ranking and no candidates yet: a direction built now would come from the model's world, not from the user's. Everything goes out as one numbered text block, without a question tool (7.2).

> **Understood:** a website for the Weserbogen dental practice in Bremen, goal: book an appointment online, audience: patients who are anxious about treatment, desktop and mobile.
>
> **Effort:** I suggest **Standard**: three directions as a mockup of the first screen (desktop and mobile), you choose or mix, then I build the site; two independent reviewers (at most three reviewer calls), at most two fix rounds, roughly 30 to 60 minutes. Otherwise **Quick** (one direction, one short reviewer, about a quarter of the effort) or **Studio** (up to four directions, blind comparison of the directions by an independent art director, two build-outs of the key surface, four reviewer roles, at most ten reviewer calls, about twice the effort).
>
> **Five short questions before I suggest directions,** because your answers shape them. A few words are enough, and "don't know" is a fine answer.
> 1. What do your patients hold or look at around a visit today, for example a card, a form or a letter? A photo is enough.
> 2. Name one or two things you love the look of, from anywhere, not only websites.
> 3. What can you no longer stand to see in your field?
> 4. What do you tell a patient who hesitates, in your own words?
> 5. What must I not promise or show, and what must be said?
>
> **I assume, correct me if it is wrong:** three dentists, the practice speaks as a team, statutory and private patients, the booking tool stays as it is, patients get a paper appointment card and a printed cost plan, no logo, color from your world, and I build the images unless you send your own photos (I recommend them, only you have them).
>
> **What next?** Effort (without an answer: Standard). You then get three directions as mockups. If you would rather read directions first, or want only my recommendation built without mockups, say so.

The assumptions name concrete things on purpose: a wrong assumption draws out more facts than an open question.

**Variant tight CI:** the questions stay; the assumptions name the CI instead of "no logo", and the directions stay within it (README 13).

**After the answers:** every named thing enters the world with the user as origin, then ranking, candidates and seed. The next message is M3 (Studio: M2 first), with "From your answers" and the trade-off pair where it applies. Empty answers change nothing about that: M3 follows, built from the project world, and says so. No second round of questions. Quick: no mockups, build by the Quick rule. "Read directions first": the top 3 as text, no new questions, then M3. "Only your recommendation": one direction as in 7.2, ranks 2 and 3 as one-liners in the wrap-up.

### M1a Kickoff with an unclear goal (Nordlicht freight forwarder: "Make me something nice for our LinkedIn channel")

> Before I suggest directions I need the goal, otherwise I am guessing.
>
> **Effort:** I suggest **Standard**: three directions as mockups, you choose or mix, then I build; two independent reviewers, roughly 30 to 60 minutes. Otherwise **Quick** (one direction, about a quarter of the effort) or **Studio** (about twice the effort).
>
> **Five short questions:**
> 1. What should someone think or do after five seconds? (without an answer: connect your name with a topic)
> 2. Who should see it: customers, applicants, investors, partners?
> 3. Is there an occasion, a date or a campaign behind it?
> 4. What do your customers hold or look at around a delivery, for example a delivery note or a label?
> 5. Name one or two things you love the look of, from anywhere, not only websites.
>
> **I assume, correct me if it is wrong:** your logo and colors are on your website, and I build the images unless you send your own photos, figures or a quote.
>
> **What next?** Effort (without an answer: Standard). You then get three directions as mockups.

**After the answers** as after M1c. If the prompt already named things, Q16 and Q17 drop out and M1 follows. **Quick** (signal word or triage): at most two questions, the goal first, no Q16 or Q17, no effort line, then start; without an answer question 1 keeps its default. **Nothing known** (no brand, product or format): first one question, what it is, for whom and in which format, without an effort offer; M1a follows the answer.

Goal only partly unclear: M1 or M1c by the check in stage 0, with a named assumption ("I assume this is about appointment bookings").

### M1b Direction given (example Nordlicht freight forwarder: "like a newspaper, with a mono font and numbered sections")

> This is how I understand your brief: light paper white as the ground, a calm sans for text, mono only for consignment numbers and times, numbered sections in a strict column grid, your trucks and loading docks as objective photos. Note: the newspaper look with mono and numbers is currently one of the most common AI looks. I will build it, but number only what really has an order: the stops of a tour from Hamburg to Kassel. That becomes your own mark, and the pallet of this case runs as a through-line through the page (until real tour data arrives, a sample tour that is on the open-items list).
>
> **Effort:** Standard without mockups, because the direction is set: two independent reviewers, at most two fix rounds, roughly 20 to 40 minutes. Say Quick or Studio for less or more. Does that fit?

No top 3. With a logged direction the message says it continues that direction and offers the way out: "or new directions as mockups". With "new directions" only Q16 and Q17 follow, then M3. Questions 0 to 5, only what the build needs (Q5, Q15, Q18, Q19, MA). Translation per 6.1 into the contract, gate exceptions there, in the wrap-up "intentional".

### M2 Design contract (Studio, example Röstwerk)

> Here is the brief on one page; changes cost nothing now, later a round. [Fields 1 to 10] Please check especially: the exclusion "coffee bean with a puff of steam", the tone "crafted, dry", the through-line "one roast from the green-coffee sack to the bag", the success criterion "Röstwerk recognizable on the bag, even without the name". Is that right?

### M3 Direction mockups (Standard, example Weserbogen, sample values)

> Here are the three directions as the first screen, same text, same maturity: `contact-sheet-desktop.png`, `contact-sheet-mobile.png`, individually under `mockups/`. The letters are drawn at random.
> **A Tides.** The treatment plan stands as a drawn tide table in the first screen, every appointment a water level; calm lines accompany it. Asks of you: a drawing instead of a photo as the main image.
> **B Weser view.** The treatment chair in front of the window to the Weser, full bleed, the chapter word stands in the image, the raised hand opens every chapter. Asks: the photos in full resolution.
> **C Clear sequence.** Treatment steps and the treatment and cost plan in the grid, objective photos of the rooms. Asks: that order counts as care.
> A stays closest to the category, C is farthest from it; a bold direction is missing this time.
>
> | Rank | Direction | Fit | Distinctiveness | Risk | What you give up |
> |---|---|---|---|---|---|
> | 1 | B Weser view (EDI) | 78.3: your room photos carry the page, calm as you wished | index 0; own | needs photos in full quality | the quick overview |
> | 2 | C Clear sequence (ORD) | 76.7: steps and costs at a glance | index 0 (tell A4 intentional, not counted); own | can look like a hospital | atmosphere |
> | 3 | A Tides (DRW) | 65.0: a picture world of its own instead of a tooth icon | index 0; surprising | drawings quickly look playful | your rooms as the main image |
>
> **New after your answers:** I recommend B instead of C, because your own room photos carry Weser view and only you have them; Big words (TYP) drops out, because TYP and MAX do not fit "rather calm", so Clear sequence moves up.
> **What next?** Choose one, combine along levels (for example "B, but the treatment steps from C as a chapter bar"), say "none, safer" or "none, bolder", or bring your own idea.

**After M1c or M1a** the opening and the table stay. Instead of "New after your answers" one line: "**From your answers:** [thing] carries [letter], [thing] carries [letter]." With empty answers: "**Without your answers** the directions come from the brief and your trade." With a quiet dose one sentence on what it means here ("Quiet here means one strong element, the rest calm"). Before "What next?" the trade-off pair if the top 3 differ there; in consumer web and product UI warm against cool in any case (4.1): "What would be worse: too cold or too cozy?" (without an answer the dose stays medium). After the choice with a quiet dose one sentence before the build, no decision point of its own.

**A dose the user's own words set** (all paths with mockups): when the user's words already set the dose ("bold", "striking", "keep it calm"), the message with the mockups says so in one line with what that does to color and loudness, and the pair asks that axis even if the top 3 do not differ there: "You said striking, so I set this loud, with strong color areas. What would be worse: too calm or too loud?" Without an answer that dose stands, within the cap for risk categories (4.1), and the sentence on medium drops out. On M1 the bracket of the pair names that dose. Without mockups the message before the build names it, in Quick the wrap-up.

If answers or mockups (measurements, generic index, in Studio a stable rank 1 in R1's ranking judgment) change the set or the recommendation, a sentence with the reason comes first (README 11.5, point 7). Presentation rules: [exploration.md](exploration.md) 9.

### M4 Interim (Studio, example Mängelwerk)

> Two build-outs of the title slide (DAT) with different anchors: `interim.png`. In the blind comparison (R1, both orders) 2 wins consistently. I refine 2 and take over the curve of open defects per week from 1, unless you want it otherwise.

### M5 Wrap-up (Standard, example Weserbogen, sample values)

> **Result:** Weserbogen website, Weser view with the hand signal for pause as the chapter mark, 1440 and 390 px: `output/index.html`, images under `output/render/`.
> **How it fulfills the brief:** [three sentences on goal, audience, exclusions]
> **Checked:** contrast without violation; no overflow at 320 px; generic index 0 (tell A4 intentional, not counted); measurement profile 6 of 7 in the corridor. Round 1: R1 "targeted fix" (done), R2 "ship"; round 2: R1 "targeted fix". **Unchecked:** screen reader, load time on the hosting.
> **Not run or substituted:** online font check, no network: the house typeface was checked with the local font file.
> **Intentional:** [deviation, reason] **Sources:** [images, fonts, license; CREDITS.md]
> **Stand-ins and open items** (`output/open-items.md`): the "Team" section shows names and focus areas without portraits until photos with consent arrive; the booking widget is embedded, the test with real appointments is pending. Draft: "How your first appointment works", please check.
> **Open after the last review:** 1. **Costs:** the insurance note reads like a second price; fix: one line in the cost table. 2. **Mobile:** the step bar is cut at a section edge; fix: a mobile cut of its own. One more round costs about 20 minutes and one reviewer call; without an answer it counts as accepted. Accept or change?

For ads and social: reviewer judgments do not replace a market test; if possible, test two directions live (high [9]). Directions not shown as mockups appear as one-liners.

### M5s Wrap-up Quick (example Weserbogen, notice, sample values)

> **Done:** A4 notice with 3 mm bleed: `output/notice.pdf`, preview `output/notice.png`, source `output/notice.html`. Checked: gates green, generic index 0, R1 "ship".
> **Not run or substituted:** none.
> **Sources and licenses:** [font, license]; everything in `CREDITS.md`.
> **Idea:** your appointment card with the first Saturday appointment, next to it the new opening hours as a clear board.
> **Stand-ins and open items:** appointment card rebuilt in the usual layout until your original arrives; color from your world until the house color arrives; the PDF is RGB, the print shop converts.
> **Direction:** Objective Order (ORD), because reassurance counts more than loudness here. Rank 2: One Rule, Many Forms (RUL), the weekdays as a recurring form. Rank 3: Warm Closeness (WRM), needs photos of real people with consent.
> [only when the review budget is used up:] **Open after the review:** [up to three: location, flaw, fix]. One more round costs [time, calls]; without an answer it counts as accepted.
> Does it work like this?

The blocks "Open after the last review" (M5) and "Open after the review" (M5s) appear only when the review budget is used up and a flaw from important upward needs more than a local fix ([review.md](review.md) 13, 16).

The line "Not run or substituted" is in every wrap-up (SKILL.md, stage 6): every check that did not run or ran as a substitute, with the reason, for example "generic check as a visual check, Chrome missing"; "none" only when everything ran.

### M6 Skill improvement

> I noticed something that goes beyond this project: [observation]. Cause in the skill: [rule or gap]. Proposal: [file, location, new rule]. Effect next time: [...]. Shall I adopt it?

### MA Asset request (example Mängelwerk, landing page)

> **For the first screen, screenshots from your demo account would be ideal,** best the defect list and a defect after acceptance, at double resolution, because the page should show what you get. Until then I build the interface from the features in the brief, with one defect as the example that runs from photo through responsibility to acceptance (on the open-items list as a draft based on the brief), and lose only the real details of your interface.
> **A photo from one of your construction sites**, site management with a tablet at the defect, with consent of the people shown, at least 2,000 px on the long side, because the section about the process should show the situation. Until then a free photo of a building shell with a marked defect carries it (on the open-items list), and I lose only the authenticity.
> **Where is the data stored, and who owns the photos from the site?** This belongs in the trust section, because site managers decide on it. Without an answer the section stays: the more important open detail gets a field there that looks like the finished content (for example "Rights to the photos"), and both are on the open-items list.

Structure: surface, motif, effect, best form, substitute and loss. Image brief and substitute: [images-and-assets.md](images-and-assets.md).

**Always ask as well**, when the case needs it and the brief does not supply it:
- **Screenshots or product photos:** they carry the offer on the key surface. Until then I build software as an interface from the features in the brief, with the through-line as sample data, and show a product as an illustration from its description or as a stand-in in the situation it is made for.
- **Facts for decision-critical sections** (Q15), for example construction software: data location and rights to the photos; freight forwarder: liability and transit times; dental practice: costs and insurance coverage. If a fact is missing, the section stays with what is known, the open item in final form in the right place ([SKILL.md](../SKILL.md) stage 4, points 4 and 6); never leave it out, never evade.

### MC Change order (example Weserbogen)

> That goes beyond the scope (Standard, the website): a flyer for the waiting room in the same system costs about half a round, a new direction a new direction phase. Shall I?

## 3 Questions

### 3.1 Control question

Before every question: does the answer change direction, effort, material, the words on the page or a gate? If not, do not ask (bad follow-up questions hurt, medium [4]). Exception: what must never be invented (figures, quotes, approvals, people, rights) is asked or kept as an open item in the review view; the presentation view shows a stand-in, a missing secondary detail is dropped or phrased with what is known; only mandatory notices with a trigger in the medium stand in place, and open items of decision-critical sections stand in final form, none on stage surfaces, at most one per surface and three per sequence ([SKILL.md](../SKILL.md) stage 4, point 6). Facts of decision-critical sections are asked in the kickoff (Q15); without an answer the section stays with what is known, the open item in final form or, where the limit applies, only in the review view and the wrap-up ([SKILL.md](../SKILL.md) stage 4, points 4 and 6).

### 3.2 What is never asked

What can be derived from the prompt, files, the use-case profile or the website; favorite color, "modern or classic?", "Which style?"; style terms as a choice, unless the user uses them; sizes a platform fixes; "How do you like it?" without guidance (instead: What do you see first? What bothers you? What is missing?, medium [10]); what is answered or logged; effort after a signal word; single questions across several rounds; permission for routine steps (render, measure, contact sheet). German: [markets/german.md](markets/german.md) 1.

### 3.3 Question catalog by lever

Order by lever: first what can tip the ranking. The default answer applies on silence and stands as an assumption in the contract (H from [3][4]). Q8 has no default answer, because a suggested answer decided the answer in tests. Q16 to Q19 have none, so the user's words stay their own (H).

| No | Question | Ask when | Default answer | Affects |
|---|---|---|---|---|
| Q1 | Who sees it, where, in what mood? | audience, scene open | from the prompt, as an assumption | A, density, tone, persona R2 |
| Q2 | What should someone think or do after five seconds? | goal unclear | main action from the prompt | W, anchor, hierarchy |
| Q3 | What can you no longer stand to see in your field? | direction open or partial | category default as an exclusion | exclusions, gate |
| Q4 | Is there a logo, colors, a typeface, or only the name? | no CI found | name only, set as a wordmark | B, system |
| Q5 | Which images: none (I build them), free photos I find, or your own (sent or from your website, you confirm the rights)? Screenshots, data and approved quotes follow MA. | a surface plans a photo or a direction in the top 3 needs one, or M1c or M1a, where the set is not known yet, and the prompt does not settle it; there as a correctable assumption with the recommendation; not in Quick (asset request), Correction or Review only | the recommendation ([images-and-assets.md](images-and-assets.md) 2), named first with one reason and what the others lose; on silence built visuals or free photos | M, D, material gate, contract field 7 |
| Q6 | Effort | triage not Quick, no signal word | Standard | level |
| Q7 | Direction (top 3 plus your own idea) | M1 only: direction open or partial | all three as mockups; Autonomous: the recommendation | direction path |
| Q8 | Trade-off pair (4.1) | Standard, Studio, the top 3 differ there; after M1c or M1a with the mockups (M3) | none; without an answer and without a dose in the user's words the dose is medium | A, dose |
| Q9 | Reference question (4.2) | Studio in addition to Q17; or preferences hinted | none | principles, exclusions |
| Q10 | Deck: presented, sent, both; read on a phone? | deck, not derivable | from the prompt ("I'm presenting", "live in front of an audience" means talk; "to send out", "send as a PDF" means reading deck; German: [markets/german.md](markets/german.md) 1) | register, minimum type size |
| Q11 | Improve or reinvent? | existing brand or site | Correction, heritage stays | mode |
| Q12 | Who decides with you, who must approve? | Studio, identity | the user alone | depth of reasoning, presentation |
| Q13 | Which follow-up formats must the system carry? | Studio, identity, campaign | those named in the prompt | touchpoints in the system sheet |
| Q14 | Brand building or activation? | marketing, not derivable | from the format (ad: activation) | W, text density |
| Q15 | What facts exist for the decision-critical sections (for example construction software: data location, rights to the photos; freight forwarder: liability, transit times; dental practice: costs, insurance coverage)? | the case has such a section, the brief does not name the facts | the section stays with the known facts, open ones in final form; with no fact, what brief and answers say the product does about the risk | content, gate Truth |
| Q16 | What do your customers hold or look at around this today, for example a card, a form, a letter, a printed notice? | Standard, Studio on M1c and M1a; direction open or partial, no things named yet | none | world, anchor, D |
| Q17 | Name one or two things you love the look of, from anywhere, not only websites. | Standard, Studio; direction open or partial, no things named yet | none | world, anchor, D |
| Q18 | What do you tell a customer who hesitates, in your own words? | a surface has to persuade, the brief gives no voice | none | copy, proof, contract field 6 |
| Q19 | What must I not promise or show, and what must be said? | a surface makes claims, the brief names no limits | none | gate Truth, contract field 5 |

### 3.4 Question budget

Q6 and Q7 do not count. **Quick** 0 to 2 (Q5 as an asset request, Q4 without CI, Q15 for a decision-critical section, on M1a a goal question); **Standard** 3 to 5, every separate ask counts (M1c: Q16, Q17, Q3, Q18, Q19, the rest as assumptions to correct; M1a at most five: up to three goal questions, Q16, Q17; M1b 0 to 5; M1: Q17 when no things are named, Q4, Q5, Q15 where needed, one or two pairs or Q3); **Studio** 5 to 8 plus discovery (Q1 to Q5, Q9, Q12, Q13, Q15, Q16 to Q19, pairs only on the path M1; on M1c the five of Standard first, the rest in the same message when Studio is already agreed, otherwise in M2; look at the competition yourself); **Correction** 1 to 3 (what bothers you, what stays, what for); **Review only** 0, unless the purpose is unknown. Plausibility notes with a default assumption ("I assume prices include tax") do not count as a question as long as nobody waits for the answer; an assumed fact (tax, fees, terms) stays open until the user confirms it in words, and "your call" settles design, never a fact. German: [markets/german.md](markets/german.md) 1.

### 3.5 Triage, scope statement, change order

Rule and signal words: SKILL.md, Effort levels. "High" means: a lifetime of years or broad reach (identity, website, design system, campaign); no CI, reference or existing site; a new brand or a new product; funding, launch, trade fair or law. "No CI" counts only for identity or brand building. Propose Studio from two "high" when one of them is stakes (funding, launch, trade fair, law) or identity, else Standard. Examples: Mängelwerk (deck, Series A), Röstwerk (identity): Studio; Weserbogen (website, existing practice), Nordlicht freight forwarder (annual report): Standard; the Weserbogen notice, no "high": Quick. If material of the top directions is missing, Studio only with an asset request.

**Scope statement** before the start (following the pattern of a design contract, high [7]): "[Level]: [n] directions as a mockup of [key surface], [in Studio: two build-outs of the key surface], reviewers [roles], at most [n] reviewer calls (Quick 1, Standard 3, Studio 10) and [n] rounds, decisions at [DP1, DP3, DP5], delivery [formats], roughly [duration]." For Studio on a subscription: "uses noticeable quota". German: [markets/german.md](markets/german.md) 1.

**Change order (MC):** every wish after acceptance or outside the scope is named before it happens: does it fit the running round, or does it cost a new one? With date in field 11 of the contract.

## 4 Taste without style terms

### 4.1 Four core pairs

Forced choice, because sliders land in the middle (H); only pairs on which the top 3 differ; Standard at most two, Studio four. Method: semantic differential, Kansei (high [5]). Target position per [directions/README.md](directions/README.md) 11.2; "open" means 0 to 6. German: [markets/german.md](markets/german.md) 1.

**Dose (H):** position of the target band within the span of the chosen direction (README 8): lower third quiet, middle medium, upper third loud; without an answer and without a dose in the user's words medium. Mandatory field 6 of the contract and binding in stage 4 ([SKILL.md](../SKILL.md) stage 4, point 5): "too calm would be worse" means loud, a louder mode ([craft.md](craft.md) 5.2). Quiet limits the extra means, not the type contrast of the anchor and not one color area from the project world (5.2 there).

| Pair and question ("What would be worse: ...?") | Answer | Loudness | Expressiveness | Dose | Measure |
|---|---|---|---|---|---|
| calm against loud: "too calm or too loud?" | too calm | 3 to 5 | open | loud | `saturatedShare`, `colorfulness`, `typography.scaleRatio`, number of accents |
| | too loud | 0 to 2 | open | quiet | `saturatedShare`, number of extra means; never `typography.scaleRatio` ([craft.md](craft.md) 5.2) |
| serious against playful: "too stiff or too silly?" | too stiff | open | 3 to 6 | character, illustration, motion, tone loud | `fold.imageAreaShare`, font classes; visual: character, grid break, copy |
| | too silly | open | 0 to 3 | these means quiet | |
| precise against handmade: "too slick or too raw?" | too slick | open | 3 to 6 | allow a trace (M-HUM, RAW Workshop) | visual: edges, texture, handwriting |
| | too raw | open | 0 to 3 | exact edges, no trace | |
| airy against dense: "too empty or too full?" | too empty | unchanged | unchanged | mode with more content (for example ORD Portal), upper half of the density corridor | `fold.words`, `calmAreaShare` |
| | too full | unchanged | unchanged | mode with less content (for example STI Stage), lower half | |

Risk categories and older audiences at most loudness 3 (README 11.2). "Too silly" lowers character, illustration, motion and tone, never the temperature of the ground or the type voice. For consumer web and product UI ask warm against cool ("too cold or too cozy?") in Standard too; otherwise warm against cool and chummy against distant only when the top 3 differ exactly there; they affect color temperature and address.

### 4.2 Reference question

"Name one brand or site you like and one that does not fit at all, each with a reason." The reason counts, not the name. Only the principle (field 6) or the exclusion (field 5) goes into the contract, never the design, because shown examples otherwise get copied (fixation, high [8]). A thing from outside the category (Q16, Q17) is different when it is an object, a document or a place: nobody in the category looks like it, so it may supply anchor and form; it goes word for word into field 6 and into the project world (H). Brands, sites and named works stay principle only, wherever they come from. German: [markets/german.md](markets/german.md) 1.

### 4.3 Taste test

Only in Studio or on "don't know". Two to three pairs of small tiles (540 x 675), same content, exactly one axis changed per pair; the user picks left or right per pair. Build: `.tile` elements in `taste-test.html`, `node $S/render.mjs taste-test.html render/ --selector .tile --name taste-test`, `$PY $S/pixels.py sheet taste-test.png render/taste-test-0*.png --cols 2`. Costs about one mockup; visual tests communicate better than descriptions (high [6]). In Standard the mockups replace the test.

## 5 Translating reactions

First clarify: idea, intensity, execution or fit, and which element? Then one rule; have it confirmed when it changes the direction substantially (another base, more than one step on the map); with date into the contract. German: [markets/german.md](markets/german.md) 1.

| Reaction | usually | Rule (example) |
|---|---|---|
| "too playful" | intensity | expressiveness one step lower: fewer metaphorical images, calmer motion, stricter typography |
| "too boring", "too plain" | intensity or idea | enlarge the signature element or swap the anchor (a tangible object or a situation from the product's world instead of form or type alone), loudness plus one step; not more color everywhere |
| "too cold", "too technical" | execution | warmer base tone from the material, a trace as an accent (M-HUM), more direct address |
| "looks cheap" | execution | fewer elements, more spacing, one weight less, image quality, strategy B instead of C |
| "looks like AI", "like a template" | idea and execution | generic check, origin of every element, swap test ([exploration.md](exploration.md) 6.5); replace generic elements with elements from the product's world with the same job, do not delete them |
| "too full" | intensity | prioritize, split the surface, lower half of the density corridor; not just smaller type |
| "too empty", "unfinished" | execution | aim the emptiness at an anchor, upper half of the density corridor, replace visible gaps with stand-ins |
| "too dark" | fit | check the scene reason (G9); if it is missing, go light |
| "doesn't fit us" | fit | which element? Reference question (4.2) |
| "not sure about the yellow", "maybe another color" | fit, open | doubt, not an instruction: render two or three variants on the key surface and show them before building on them, inside the current decision point; no extra round; without an answer the recommended variant, named in the wrap-up. A clear instruction ("use blue") needs no variants |
| "I don't like it" without a reason | open | guided questions: What do you see first? What bothers you? What is missing? |

## 6 Special paths

Triggers: SKILL.md, modes. Here are the steps.

### 6.1 Direction given

1. Translate the given direction into the nearest direction (code, mode, dose) and into parameters: anchor, type roles, color roles with saturation strategy, density, form, signature element. Have it confirmed (M1b).
2. If it sits on a known AI look, say so once and implement it anyway:

| Given style | Cluster in the generic check | nearest | what makes it its own |
|---|---|---|---|
| cream, serif, terracotta, warm | Cream look (tells B3, A1, A3) | STI or EDI | base tone from the material, signature from the subject |
| dark, tech, neon, glow | Neon dark (tells B4, A5, A4) | PRO | scene reason (G9), color as state |
| like a newspaper, mono, numbers | Broadsheet (tells A5, A6, A4) | ORD or RAW | labels only with an ordering function |
| tiles, bento | Card kit (tells C6, C8, D3) | PRO | content determines the fields |
| glass, gradient, violet | Glass look (tells C4, C3, B1) | module M-TRD | glass only over real content, contrast measured |

3. Propose a signature element of its own, taken from the subject ([exploration.md](exploration.md) 6).
4. Contract: the translation in field 8, gate exceptions with tell ID in field 9. Gates take precedence over the given direction; on a conflict propose an accessible derivation.
5. Tight CI without a style brief or logged direction: M1c or M1 by the check in stage 0, directions within the CI (variant tight CI). With a fixed direction, refining pays more than breadth (H, analogy to [11]).

### 6.2 Correction

1. Render and measure the current state (measurement pass in [review.md](review.md) 2), exclude the brand with `--brand-colors` and `--allow-fonts`; measure against the measurement profile of the nearest direction (README 11.5).
2. Heritage inventory ([exploration.md](exploration.md) 3) and one to three questions: What bothers you? What stays? What for? (Default: content, order and brand stay.) German: [markets/german.md](markets/german.md) 1.
3. Fix list with three to five points by lever ([craft.md](craft.md)), each with location and the measured value before.
4. Before the build `node $S/render.mjs <current.html> render/ --viewports 1440x900 --fold --name before`, after the build the same with the result and `--name after`; sheet: `$PY $S/pixels.py sheet before-after.png render/before-1440-fold.png render/after-1440-fold.png --cols 2 --labels`.
5. R1 in a before-after comparison in both orders; at most two rounds.

### 6.3 Review only

Quick check and answer form per [review.md](review.md) 17, then "Shall I implement this as a correction?". Build nothing unless asked.

### 6.4 Autonomous

Level from the triage, at most Standard; no waiting points, no questions, default answers from 3.3 as assumptions in field 10. Set as in Standard with seed, built following the Quick rule (README 11.5); no mockup choice. Missing material as a best-form stand-in, marked in the review view; decision-critical sections stay, open items in final form ([SKILL.md](../SKILL.md) stage 4, point 6); requests collected in the wrap-up. Reviewers and rounds as in the level. M5 in addition: the derivation of the built direction in two sentences, the two others as one-liners with an offer, all assumptions.

### 6.5 No user available

Like Autonomous; level from the prompt, else Standard, Studio only when the prompt explicitly asks for it. Never wait; every gap as an assumption, stand-in or draft copy, all of them in the wrap-up. Render and review as always.

## 7 Environments and fallbacks

Operating modes: SKILL.md, Environment and tools. If the environment limits the level, one sentence in the kickoff says so ("I cannot start independent reviewers here, so Studio reviews with you instead of with agents"). German: [markets/german.md](markets/german.md) 1.

### 7.1 Tool check (stage 0, silent, in the skill folder)

**Missing tools never fail silently** ([SKILL.md](../SKILL.md), Environment and tools): the check stays silent only when everything is present. Otherwise the kickoff carries a short block (what is missing, what drops out or runs weaker, options: install after the user's OK, a named substitute, or continue and accept the loss), the user decides, and the wrap-up lists every check that did not run or ran as a substitute (M5). Nothing is installed without the user's OK. In the modes Autonomous and No user available (6.4, 6.5) nothing is installed at all: the run continues with the named substitute from the table below and lists it in the wrap-up under "Not run or substituted".

```bash
node -e "const [a,b]=process.versions.node.split('.').map(Number);process.exit(a>22||(a===22&&b>=12)?0:1)" && echo node-ok
node -e "import('puppeteer-core').then(() => console.log('puppeteer-ok'))"
node -e "import('./scripts/chrome.mjs').then(m => console.log('chrome-ok', m.findChrome()))"
PY=; for c in python3 python "py -3"; do if sh -c "$c --version" 2>&1 | grep -q '^Python 3'; then PY=$c; break; fi; done; echo "PY=$PY"
[ -n "$PY" ] && $PY -c "import PIL, numpy; print('pixels-ok')"
[ -x ~/.unaverage/venv/bin/python ] && ~/.unaverage/venv/bin/python -c "import PIL, numpy; print('pixels-ok venv')"
```

- **Node version** (line 1) fails: operating mode Partial without rendering and measuring by script; the kickoff carries the missing-tools block (what is missing, what drops out, options, the user decides; see above).
- **Python command `$PY`:** try `python3`, then `python`, then `py -3`; accept the first whose `--version` prints Python 3 (on Windows `python3` can open a store placeholder). Use `$PY` in every Python call. Then check `pillow` and `numpy` (line 5). If that fails and line 6 prints `pixels-ok venv` (the venv fallback in the table, set up in an earlier project), use `~/.unaverage/venv/bin/python` as `$PY` as described there; nothing is missing.
- **Also check:** Swift (`swiftc --version`, only when a cutout is needed), network, subagents, question tool, web access, sending files to the user, image connectors (they usually cost quota; use only after approval).

| Missing | Drops out or runs weaker | Install (only after OK) | Substitute |
|---|---|---|---|
| Node 22.12 or newer, or `puppeteer-core` (`npm install` not run) | rendering at several widths, measurement (`measure.mjs`), the measured generic check, the font check | Node through the system package manager; `npm install` in the skill folder | render with the environment's tool (7.4); generic check as a visual check |
| Chrome, Chromium, Edge or Brave | like Node: no rendering and no measuring by script | install a browser or set `CHROME_PATH` | as above |
| Python 3 with `pillow` and `numpy` | contact sheets of mockups, palette analysis, the pixel check inside the generic check (report says "not run"), file check, shadow and perspective for product photos, AI labeling (IPTC); without any Python 3 also the seed command | `$PY -m pip install --user pillow numpy` (Python itself through the system package manager); if pip stops with `externally-managed-environment` (PEP 668, common on Homebrew and recent Debian or Ubuntu): `$PY -m venv ~/.unaverage/venv && ~/.unaverage/venv/bin/python -m pip install pillow numpy`, then `export PY=~/.unaverage/venv/bin/python` and use it as `$PY` (generic-check.mjs reads `PY`; where shell variables do not survive between calls, set `PY=...` again in each call) | show mockups one by one; judge colors on the image; no shadow or perspective compositing; seed with `node -e "console.log(require('node:crypto').randomInt(1000000))"`, else 7.5 |
| Swift (macOS 14 or newer) | cutout with Apple Vision | Xcode command line tools (`xcode-select --install`) | motif without cutout, or cut out by the user |
| network | online font check (`--google`, `--css`) | none | check a local font file (`--file`) |
| subagents | independent reviewers | none | substitute following the operating mode "Without subagents" (7.3) |

Operating modes from the result (SKILL.md, Environment and tools): **Full** (everything present), **Partial** (shell available, single tools missing or too old), **Without subagents**, **Without shell**.

Example block in the kickoff (Partial):

> **Missing here:** `pillow` and `numpy` for Python. Without them there is no contact sheet of the mockups and no palette analysis, and the generic check runs without its pixel check. Options: after your OK I install them with `$PY -m pip install --user pillow numpy`, or, if this Python blocks that as externally managed, into a separate environment in `~/.unaverage/venv`; or I show the mockups one by one and judge the colors on the image. Which do you prefer?

### 7.2 Question tool

M1c, M1a and M1 without named things: no tool, a numbered text block, then wait. M1 in Claude Code (AskUserQuestion, as of 2026-10: up to four questions, two to four options each plus a free answer): first the explanatory text from M1 up to "your own idea", then one call with (1) effort: Standard (recommended), Quick, Studio; (2) direction path: All three as mockups, per direction Only [name], recommendation first, the free answer covers your own idea; (3) one material question (Q5 when it applies, the recommendation first, 3.3); (4) one trade-off pair with both sides as options. German: [markets/german.md](markets/german.md) 1.

If the user picks one direction: Standard without mockups (saves roughly a third, H); Studio builds two build-outs of it (another anchor or another idea, never below the dose from field 6) and compares them per [SKILL.md](../SKILL.md) stage 4, point 8. In M3 offer the choice only after the contact sheet has been shown, because the tool carries no images. Without a question tool: a numbered text block with default answers; without a user: 6.5.

### 7.3 Reviewers

1. Subagent with a fresh context following [templates/review-brief.md](../templates/review-brief.md); where possible a different model strength than the generator (high [12]).
2. A separate non-interactive run that reads only the review folder (untested).
3. The user with guided questions (What do you see first? What bothers you? What is missing? Would you click?); the strongest external signal. German: [markets/german.md](markets/german.md) 1.
4. Claude.ai at Studio level: the review brief with images, to copy into a new chat.
5. Cold self-review (quick check in [review.md](review.md)), named as the weakest signal (high [13]).

### 7.4 Render and measure

Order: the scripts in `scripts/`; another headless browser or the environment's browser preview; a screenshot from the user plus `pixels.py palette`; derivation from your own CSS (scale from the set sizes, contrast by calculation), marked "derived from the code, not checked on the image", generic check as a visual check per [generic-catalog.md](generic-catalog.md).

### 7.5 Seed without code execution

Invent no number; models are poor random generators (high [14]). Substitute rule (H):
1. Pool as for the seed (README 11.5): admissible bold directions, S descending.
2. Per pool direction one one-liner candidate with its rating ([exploration.md](exploration.md) 6).
3. Bold becomes the pool direction with a candidate rated "surprising" (several: highest S), else the one with the highest S.
4. Say with the directions that no draw took place; in the contract field 13 "not drawn, substitute rule".

Assignment to A, B, C without code: catalog order, noted in the contract.

### 7.6 Showing the contact sheet

Claude Code: send or open the file and name the path; without a user: the path in the wrap-up. Without shell: one artifact with all mockups side by side, marked "not checked on the image". Cowork, Codex: file in the working folder (untested).

## Sources

1. Chernev et al. 2015, choice overload: https://www.kellogg.northwestern.edu/academics-research/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual/
2. Jachimowicz et al. 2019, defaults: https://ideas.repec.org/a/cup/bpubpo/v3y2019i02p159-186_00.html
3. Luo et al., ClarifyMT-Bench: https://arxiv.org/abs/2512.21120
4. Zou et al. 2022, clarifying questions: https://irlab.science.uva.nl/wp-content/papercite-data/pdf/zou2022asking.pdf
5. Nagamachi 2002, Kansei engineering: https://pubmed.ncbi.nlm.nih.gov/12164511/
6. Tao et al. 2025, DesignWeaver: https://arxiv.org/abs/2502.09867
7. AIGA, Standard Form of Agreement: https://aiga.org/resources/aiga-standard-form-of-agreement-for-design-services
8. Wadinambiarachchi et al. 2024, design fixation: https://arxiv.org/abs/2403.11164
9. Dow et al. 2011, prototyping dynamics: https://d.ucsd.edu/srk/papers/2011/PrototypingDynamics-CHI2011.pdf
10. IPA, tissue meetings: https://ipa.co.uk/knowledge/10-top-tips-for-new-business-success/10-top-tips-for-tissue-meetings/
11. Snell et al., test-time compute: https://arxiv.org/abs/2408.03314
12. Verga et al., juries instead of judges: https://arxiv.org/abs/2404.18796
13. Huang et al. 2024, self-correction: https://arxiv.org/abs/2310.01798
14. Zhang et al., forcing diffuse distributions: https://arxiv.org/abs/2404.10859

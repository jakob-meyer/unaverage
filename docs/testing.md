# How unaverage-design was tested

unaverage-design was developed against blind tests, not against our own taste. This page shows where those tests stand on 16 November 2026, including the results that speak against the skill. It covers the method, the English test rounds from 16 October to the probes of 1 November 2026, one test from a single line on 7 November 2026, a blind pair test on the AI look on 16 November 2026, a language test, the numbers on other design skills, the German predecessor line, the calibration of the built-in generic check, and the limits of all of it.

The skill's author designed and ran the tests. AI agents did the building, played the users (except in section 2.13, where the author answered himself) and judged the results: Claude Opus 5.5 built every judged page, and from 17 October 2026 Claude Opus 5.5, Claude Fable 5.1 and GPT-6.1-Sol judged the English rounds (only the two Claude models in section 2.13). No human judge and no real user stands behind any number here. Most comparisons rest on one run per brief. Read this as a careful but small internal study, not as a benchmark.

## At a glance

- **Current version: 3.4 asks first and shows directions afterwards.** In a round on 30 and 31 October 2026 (Claude Opus 5.5, tested version 3.4.0), it met a rule fixed in advance against its own predecessor: three web and product briefs, one run per brief, a simulated user, three AI jury models. The measured change was +0.52 points on a ten-point scale. This is not a direct comparison of 3.4 with 3.3. It is how much the gap to one fixed page by Opus 5.5 changed, with both versions judged in the same session (section 2.10). On one sales deck the round showed no large harm, and nothing more than that.
- **Limits of that result.** 74 percent of the change comes from one brief; without it the change is +0.20. The simulated user had a ready list of likes, and no build run with thin answers exists. Social posts, carousels and brand work were never measured with 3.4 in a scored round. Real use is unmeasured. Versions 3.4.1 to 3.4.3 add corrections whose effect on builds is unmeasured (section 2.11).
- **Claude Opus 5.5 without a skill stays ahead in the fair comparison.** In the fair comparison of 30 and 31 October 2026 (three AI jury models, simulated users), Claude Opus 5.5 without a skill, given the same background up front, was ahead on three of four briefs. We do not claim to beat it. The skill led in 15 of 48 verdicts, 12 of them on one brief. Both sides had the simulated user's facts, Opus 5.5 in its prompt and the skill through its questions, so the comparison measured the pages, not the value of asking. Even with the full background before it formed directions, the skill stayed behind (section 2.9).
- **One line, with a person answering.** On 7 November 2026 one prompt, "Make me a website for my hair salon.", ran three ways, one run each, with the author answering as the owner of a made-up salon. The skill's page came out the least generic: generic index 0, against 5 for Claude alone and 3 for Claude alone given the same answers as text, without the author's pick among the mockups and the layout feedback. Two blind AI jury models, both Claude models, ranked it least like default AI in all four rankings. The skill runs the same check while it builds, and one run per path is one example (section 2.13).
- **Blind pairs on the AI look: undecided.** On 16 November 2026 three AI jury models, Claude Opus 5.5, Claude Fable 5.1 and GPT-6.1-Sol, compared six pairs of existing results, each with one result made with the skill and one by Claude Opus 5.5 without it for the same task, and named the one that looks more like generic AI design. They named the result without the skill in 10 of 18 verdicts and the skill's result in 8. By the rule fixed in advance for two jury models, the 7 to 5 of the two Claude models, which judged first, is undecided, and so are all 18 verdicts with the rule scaled to them; with Claude Fable 5.1 and GPT-6.1-Sol as the pair (6 to 6) the rule would read refuted. Six tasks, one run per side, no human judge (section 2.14).
- **The noise band is 0.36 points.** When the same version was judged against itself on 23 October 2026 (Claude Opus 5.5 builds, three AI jury models), run 1 and run 2 differed by 0.36 points on average over four pairs and by 0.72 on the widest pair, where all 12 verdicts went to the same run. A single pair with one run per brief decides nothing.
- **German predecessor line.** On German briefs (9 and 10 October 2026, Claude Opus 5.5), design-craft 2.x ended with no loss against its own v1 on eight briefs, six wins and two ties, in the last version tested per brief.
- **The main lesson.** Bans and checks alone make results clean but empty, and a lead in a test can be a lead in information. What moved results was idea and material first. In the English rounds, things from the user's world, known before directions form, gave the pages a source of their own. Real users have not tested that yet.

## 1. Method

Sections 1.1 to 1.4 describe the setup as built for the German tests. Section 1.5 adds what changed for the English tests.

### 1.1 Briefs and simulated users

Each brief is a realistic request from a fictional company, written the way a client would write it, plus a persona: role, taste, likes and dislikes, what material exists, and the effort level the persona would choose (Quick, Standard or Studio).

A separate agent plays the persona during the run. It answers only what the skill asks, gives information from the persona only when asked or when it is clearly relevant, invents nothing beyond the persona ("I don't know" or "you decide"), and picks directions according to the persona's taste. In the German tests, when the persona "can deliver" photos or screenshots later, the simulated user promises them and asks the skill to continue with a marked placeholder. **The material never arrives in the test**, so every version works without real photos, logos or product screenshots.

### 1.2 Skill runs

The agent under test runs the full skill workflow for the chosen effort level: kickoff questions, three directions with a ranking and mockups where the effort level calls for them, build, rendering and measurement, and the skill's own independent reviewers (for example art director, target audience, generic check, production), which run as fresh agents without access to the code or the builder's reasoning. Other installed skills were not allowed in any run. Every version compared on a brief gets the same brief and the same persona.

**Showcase runs.** Images in the README and in posts are chosen because they show the skill well. Two runs were made only for this on 2 November 2026 with version 3.4.2: a rerun of an Instagram brief and a new landing page brief with public-domain plates and NASA photographs as material. Apart from the Instagram post, which is one side of a pair in section 2.14, they are not part of any measurement in this document.

### 1.3 Blind pairwise judging (new version against v1)

- Judges see only the rendered images of both results, in neutral folders, plus the brief text. They do not know which version made which result and read no other files.
- **Two roles:** a creative director of a multi-award-winning design agency, and a member of the target audience named in the brief.
- **Both orders:** every comparison runs twice, A against B and with the order swapped. A version counts as the winner for a role only if it wins in both orders. Otherwise the verdict for that role is "split".
- Judges first name the three biggest flaws of each result, then score.
- **Five criteria, 0 to 10:** impact and goal achievement; distinctiveness (does not look like typical AI or template design); craft (typography, composition, color, detail); clarity and legibility; credibility of the content. Anchors: 0 to 3 missed, 4 to 5 generic or unfinished, 6 solid but not distinctive, 7 clear with remaining gaps, 8 distinctive and largely production-ready, 9 strong idea executed precisely, 10 hard to improve.
- The score per role is the mean of the five criteria over both orders. The gap is new version minus v1.
- If a result contains several directions, judges rate its strongest one.
- **AI look:** a separate judge who knows the typical patterns of AI-generated design rates each result on its own, from 0 (does not look like AI design at all) to 10 (clearly typical AI design), and names concrete tells.
- **Process:** a grader checks each run against the steps the skill itself prescribes (for example 14 of 14 steps met).
- **Generic index:** the same measuring script (section 6) runs on the results of every version.

### 1.4 Blind ranking of several variants

For the comparison with other approaches (section 5.3), five variants per brief were ranked blind. Each role ranked all five from best to weakest, without ties, once in forward and once in reverse order: four rankings per brief. Judges also scored the five criteria, and a separate judge rated the AI look of each variant. The first English run used the same method (section 2.1); it proved unstable and was replaced by the pairs in section 1.5.

### 1.5 English setup

Sections 2 to 4 use this setup, with changes named by date. All runs date from 16 October 2026 or later.

**Isolated environment.** Every run starts a fresh Claude Code session with its own configuration folder, a working folder without project instructions, a clean shell environment without secrets, and no other skills, hooks, memory or MCP servers visible to the agent. Five account plugins stayed loaded, with their skills hidden and their MCP servers off. A probe on 16 October confirmed 0 skills, 0 commands and 0 MCP servers in such a session. The skill under test enters by path in the test header. With no MCP server present, image generation was blocked technically, not only by text.

**Model and effort.** Builders, simulated users and the skill's own reviewers ran on Claude Opus 5.5 (`claude-opus-5-5`) at effort `xhigh`, the default for new chats in Claude Code at that time. The skill therefore runs on the same model as the baseline: every comparison with "Opus 5.5 without a skill" is that model with the skill against that model without it. Claude Code was version 2.1.299 for runs up to 24 October and 2.1.308 from 30 October on.

**Briefs.** All companies and people are fictional.

| Label | Brief | Format | Market | Effort |
|---|---|---|---|---|
| EN1 | Instagram launch for a pickleball paddle | three feed posts, one Story | US | Standard |
| EN2 | Seed pitch deck for a vineyard camera startup | 10 to 12 slides, HTML | US | Standard |
| EN3 | Landing page for call sheet software for film crews | desktop and mobile | UK | Standard |
| EN4 | LinkedIn carousel on an office attendance report, fixed CI | 7 to 9 slides | US | Standard |
| EN5 | First brand identity for a reopened public pool | brand board, four applications | UK | Studio |
| EN6 | Meal planner web app | three screens, clickable prototype | US | Standard |
| EN7 | Landing page for a heat pump installer | desktop and mobile | US | Standard |
| EN8F, EN8O | Landing page for a boot resoling workshop, with free stock photos (F) or without photos (O) | desktop and mobile | US | Standard |
| EN9 | Landing page for a two-barber barbershop, 12 photos in the folder | desktop and mobile | US | Standard |
| EN10 | Sales deck of a linen hire company, read by a hotel group's procurement team | 10 to 12 slides, HTML | UK | Standard |

A brief counts as a **development brief** for a version if rules of that version came from it, and as **unseen** if it did not. EN7, EN8 and EN9 started as unseen briefs and lost that status once rules or rounds had used them. The photos in EN9 show another shop and stand in for the company's own; results from that brief are not published.

**Simulated user.** As in section 1.1, with one English persona per brief. English personas state what is missing and that it gets built, so no material is promised that never arrives. The selection rule changed over time. For 3.3 and 3.3.1 the persona always took the recommended direction. From the diagnosis on (30 October) it chose by its likes and dislikes and took the recommendation when several fit. From 3.3 on it declined every extra round the skill offered.

**"With the background"** means that the persona's text, without the effort and answer-style lines, stands at the top of Opus 5.5's prompt. Before 30 October Opus 5.5 saw only the brief. The skill never gets this text in a measured build except in the diagnosis (section 2.9); it gets what it asks for.

**Pairs with identical views.** From 17 October, every comparison is a blind pair. Both sides are shown in the same views: the first screen, page sections and two mobile screens, one view per required screen for EN6, slide by slide for decks. Pair names are neutral, letters and order random. The number of sections follows the longest page in the set, capped at five. Views have been cut from one full-page capture since 22 October (section 2.3).

**Facts line.** From 23 October, all judges get one line with the facts of the persona, the same line for both sides, so that a true fact from the dialogue does not read as invented. EN2 has an empty facts line, because the prompt holds the facts.

**Verdicts.** Each pair gets four verdicts per jury model: creative director and target audience, each in both orders. With three jury models that makes 12 verdicts per pair. A verdict always ranks one side first, so ranks cannot tie, and it scores both sides on the five criteria of section 1.3.

**Three jury models.** Claude Opus 5.5, Claude Fable 5.1 (`claude-fable-5-1`, confirmed in the logs) and GPT-6.1-Sol (`gpt-6.1-sol`, through Codex). All three have judged since 17 October, because the jury model changes outcomes: on one pair set that day the Opus jury put 3.1 first in 1 of 16 verdicts, the Fable jury in 14 of 16. GPT is the only model outside the Claude family, and none of the competing pages was built by it.

**Reading the numbers.** "Ahead" means ranked first in a verdict. A "gap" is one side minus the other, as the mean of the five criteria, on a ten-point scale. A negative gap means the skill is behind. Gaps are means over all verdicts of a pair.

**Noise band.** Section 2.4 measures how far the same version differs from itself. The result, 0.36 points, is the noise band used by every later rule, with 0.72 as the widest value seen.

**Rules fixed in advance.** From 3.3 on, each round wrote down its participants, pairs and decision rule before the first run. From 30 October the reading per format is also fixed: ahead means a mean of at least +0.36, more than half of the verdicts and a positive mean with at least two of three jury models; behind is the mirror image; a mean inside the band is undecided, which we never present as equal; anything else is reported as mixed.

**Anchors.** From the diagnosis on, the older skill pages are judged again against the same Opus 5.5 pages in the same session, with the jury unaware of which pair is which. A new version is compared with that anchor, so that differences between jury sessions stay out of the rule.

## 2. English tests

All runs in this section used Claude Opus 5.5 at effort `xhigh` in the isolated environment, in October 2026, except the probe of 1 November in section 2.11 and the one-line test of 7 November in section 2.13. Section 2.14 built nothing new: it judged pages from these rounds again, plus one showcase post of 2 November (section 1.2). Each subsection names its dates and juries. The rounds appear in the order they happened, so older numbers stay visible. Section 2.12 lists which of them no longer hold. Numbers on other skills are in section 4.

### 2.1 Main run, version 3.0 (16 and 17 October 2026)

24 runs. Seven sets judged blind with Claude Opus 5.5 jurors, 28 rank verdicts and 25 AI-look verdicts. Opus 5.5 had no background in this round.

| Brief | Variants in the set | Mean rank of 3.0 (first places) | Ranked best | Mean score 3.0 / Opus 5.5 | Gap |
|---|---|---|---|---|---|
| Instagram launch (EN1) | 2 | 1.0 (4 of 4) | 3.0 | 7.55 / 7.30 | +0.25 |
| Seed pitch deck (EN2) | 2 | 1.75 (1 of 4) | Opus 5.5 | 7.67 / 7.78 | -0.10 |
| Film software landing page (EN3), run 1 | 6 | 4.5 | Opus 5.5 | 7.40 / 8.30 | -0.90 |
| Film software landing page (EN3), run 2 | 6 | 4.75 | Opus 5.5, tied with skill B | 6.92 / 7.92 | -1.00 |
| LinkedIn carousel (EN4) | 2 | 1.0 (4 of 4) | 3.0 | 7.97 / 6.77 | +1.20 |
| Brand identity, Studio (EN5) | 2 | 1.25 (3 of 4) | 3.0 | 7.12 / 6.85 | +0.28 |
| Meal planner web app (EN6) | 5 | 3.25 | Opus 5.5, then skill C (other skills: section 4) | 7.58 / 8.10 | -0.52 |

AI look (0 to 10, lower is better) averaged 2.8 for 3.0 and 4.3 for Opus 5.5.

The Studio run on EN5 used 2.80 million tokens; five Standard runs of 3.0 (EN1, EN2, EN3 twice, EN6) used 1.29 to 1.72 million, mean 1.43 million, simulated user and reviewers included. That is one Studio run, on its own brief.

**What was wrong.** On both web briefs the skill lost clearly. Judges named cropped elements at section edges, unfinished placeholders, missing brief content, and pages that "could be swapped for many SaaS". Web results rewarded completeness and production readiness. The measurement had problems too: images per variant ranged from 2 to 16, and multi-way rankings turned out to be unstable (section 2.2).

### 2.2 Correction 3.1 and the pair measurement (17 October 2026)

3.1 added rules against empty fields and late damage, against cropping at section edges, a check of the page against the brief, a web direction measured against the model's own default, a stage for deck figures, and a curated delivery. It ran again on EN2, EN3 twice, EN4, EN6 and EN7.

A second seven-way judging then moved the same designs to very different places: 3.0 on EN3 went from place 5 to 2, Opus 5.5 from 1 to 3.5, skill C from 2 to 6, skill A from 3.5 to 1. The causes were whole pages shrunk hard, 2 to 16 images per participant, seven variants in one verdict, and jurors on the same model as one participant. We replaced this method with the pairs in section 1.5: 17 pairs, four verdicts each, three jury models.

| 3.1 against | Opus jury | Fable jury | GPT jury | All three | Mean gap |
|---|---|---|---|---|---|
| Opus 5.5 without a skill, no background | 6/16 | 10/16 | 3/16 | 19 of 48 | -0.02 |
| 3.0, EN7 only | 4/4 | 3/4 | 2/4 | 9 of 12 | +0.38 (Opus and Fable juries) |

On EN7, which the correction had not seen, the Opus and Fable juries put 3.1 first in all 32 verdicts against all four opponents. GPT put it behind Opus 5.5 there in 3 of 4 verdicts. In the seven-way judging 3.1 against 3.0 came to +0.8 on the deck, +0.4 on EN6, 0 on EN3 run 2, -0.8 on EN3 run 1 and -0.9 on the carousel (a floor plan cut off at the slide edge).

**What was wrong.** These pair numbers carried two measurement errors, found days later (section 2.3), and Opus 5.5 had no background.

### 2.3 Measurement errors found on 22 and 23 October 2026

Two errors in our own setup:

1. **Views.** The jury views rasterized large text outside the viewport wrongly. On EN7 one large text on the 3.1 page came out at about 80 px instead of 292 px. Checked by eye and by pixel comparison, EN7 had this problem on the 3.1 page only. Since 22 October views are cut from one full-page capture. The pairs of 22 October in section 4 still reused the views of 17 October.
2. **Missing facts.** Judges saw only the prompt, so they took true facts from the persona (a beta figure, a cleared quote, a median saving) for inventions. Since 23 October every judge gets the facts line.

**What they invalidated.** All pair numbers of 17 October, against Opus 5.5 (19 of 48, -0.02) and against other skills, and the pairs of 22 October, which reused those views (section 4). After the fix, 3.1 against the same Opus 5.5 pages on EN3, EN7 and EN4 came to 33 of 36 verdicts (+0.51). The numbers against other skills were never measured again.

On 23 October this looked as if the web gap had mostly been a measurement error. That reading did not last either: the fair baseline of 30 October showed that the lead replacing it was mostly a lead in facts (section 2.8).

### 2.4 A/A calibration (23 October 2026)

The same version against itself: run 1 against run 2 on the same brief, same view rules, facts line, 12 verdicts per pair from the three jury models.

| Pair | Opus jury gap | Fable jury gap | GPT jury gap | Run 1 ahead, all three | Gap, run 1 minus run 2 |
|---|---|---|---|---|---|
| 3.1 on EN3 | -0.60 | 0.00 | -0.15 | 4 of 12 | -0.25 |
| Opus 5.5 without a skill on EN3 | -0.35 | -0.50 | -0.22 | 2 of 12 | -0.35 |
| 3.2 on EN3 | +0.35 | -0.45 | +0.43 | 8 of 12 | +0.11 |
| 3.2 on EN7 | -0.88 | -0.60 | -0.70 | 0 of 12 | -0.72 |

- **Noise band: 0.36 points**, the mean absolute gap over the four pairs. The widest pair reached 0.72. Per jury model a single pair reached 0.88.
- **What "0 of 12" means.** Run 1 and run 2 are labels. On 3.2 on EN7, all 12 verdicts ranked run 2 first and also gave it the higher score, with no tied score. There is one such pair, read from either side as 0 of 12 or 12 of 12. Rank verdicts cannot tie (section 1.5). Across all 48 verdicts, two had equal scores on both sides and still named a first place.
- **Consequence.** Single pairs with one run per brief decide nothing. Statements need several briefs and the mean over pairs. The band itself rests on four pairs only.

### 2.5 Round 3.2, not adopted (23 October 2026)

3.2 ran on EN2, EN3 twice, EN4, EN6, EN7 twice and on the new unseen boot resoling brief with and without photos. 24 pairs, three jury models, GPT with 94 of 96 verdicts (two failed at a usage limit and on retry).

| Comparison | Skill ahead | Mean gap |
|---|---|---|
| 3.2 against 3.1, seven pairs | 26 of 82 | -0.21 |
| EN4 | 9 of 12 | |
| EN3 run 1 | 8 of 12 | |
| EN3 run 2 | 4 of 10 | |
| EN2 | 2 of 12 | |
| EN7 run 2 | 2 of 12 | |
| EN6 | 1 of 12 | |
| EN7 run 1 | 0 of 12 | |
| 3.2 against Opus 5.5, no background | 69 of 108 | +0.40 |
| 3.1 against Opus 5.5, no background | 52 of 72 | +0.38 |
| Pitch deck against Opus 5.5: 3.2 | 1 of 12 | |
| Pitch deck against Opus 5.5: 3.1 | 4 of 12 | |

- **No measurable gain over 3.1, trend negative.** 3.2 was not adopted. 3.3 builds on 3.1 and took over what proved useful: a ledger of repeated values (contradictions on EN3 from 10 to 1 of 12 verdicts, a wrong chart on EN4 from 9 to 0) and honest headings. A climax rule and an action in the hero showed no gain or did harm.
- **Run swing is large.** The same version 3.2 on EN7 against the same Opus 5.5 page came to 1 of 12 and 11 of 12.
- **Stock photos as the silent main image hurt.** The photo version of the boot brief lost to the version without photos with both 3.2 (1 of 12, -0.97) and Opus 5.5 (0 of 12, -0.97).
- **What was wrong.** The leads against Opus 5.5 are upper limits, because only the skill got the persona's facts (section 2.8).

### 2.6 Round 3.3 (23 and 24 October 2026)

3.3 is 3.1 plus the parts of 3.2 with evidence. 13 runs with a fixed persona rule (always the recommended direction, no extra round). 3.1 stayed frozen and ran fresh on EN9 twice and EN7 once. EN9 was the unseen main measure. Three jury models, four verdicts each.

| 3.3 against 3.1 | Opus jury | Fable jury | GPT jury | All three | Mean gap |
|---|---|---|---|---|---|
| **All seven pairs** | 10/28 | 10/28 | 13/28 | **33 of 84** | **-0.13** |
| Barbershop run 1 (EN9, both fresh) | 4/4 | 4/4 | 4/4 | 12 of 12 | +1.19 |
| Barbershop run 2 (EN9, both fresh) | 0/4 | 0/4 | 2/4 | 2 of 12 | -0.30 |
| Heat pump run 2 (EN7, both fresh) | 3/4 | 4/4 | 2/4 | 9 of 12 | +0.16 |
| Heat pump run 1 (EN7) | 1/4 | 0/4 | 0/4 | 1 of 12 | -0.26 |
| Film software (EN3) | 1/4 | 0/4 | 2/4 | 3 of 12 | -0.32 |
| Meal planner (EN6) | 1/4 | 2/4 | 0/4 | 3 of 12 | -0.61 |
| Pitch deck (EN2) | 0/4 | 0/4 | 3/4 | 3 of 12 | -0.79 |

- **Not worse than 3.1 by the rule fixed in advance, and no gain shown.** -0.13 lies inside the noise band. The two barbershop pairs show how large run swing is: 12 to 0 and 2 to 10 for the same two versions.
- **The deck stayed the weak spot.** 3.3 lost to 3.1 (3 of 12) and to Opus 5.5 (0 of 12).
- **Against Opus 5.5 without a background,** on the unseen barbershop brief: 3.3 in 17 of 24 verdicts (+0.27), 3.1 in 14 of 24. These numbers no longer hold (section 2.8).
- **Stock photos pulled down again:** 3.3 on the boot brief with photos against 3.2 without, 1 of 12.
- **What was wrong.** The persona took the recommendation on every run, and that was the more familiar direction each time, as the fair baseline later showed. Opus 5.5 still had no background.

### 2.7 Deck round 3.3.1 (30 October 2026)

New deck rules after the weakness of 3.2 and 3.3 on EN2. Five runs: 3.3.1 twice on EN2, and on the unseen sales deck EN10 one run each of 3.3.1, 3.3 with tool fixes, and Opus 5.5 without a skill with the background. Three jury models, 84 of 84 verdicts.

| Pair | Opus jury | Fable jury | GPT jury | All three | Mean gap |
|---|---|---|---|---|---|
| **3.3.1 against 3.3, EN2, two runs** | 8/8 | 8/8 | 4/8 | **20 of 24** | **+0.62** |
| 3.3.1 against 3.1, EN2, two runs | 8/8 | 4/8 | 4/8 | 16 of 24 | +0.06 |
| **3.3.1 against 3.3 with tool fixes, EN10** | 4/4 | 4/4 | 2/4 | **10 of 12** | **+1.03** |
| EN10: 3.3.1 against Opus 5.5 with background | 0/4 | 0/4 | 0/4 | 0 of 12 | -1.11 |
| EN10: 3.3 with tool fixes against Opus 5.5 with background | 0/4 | 0/4 | 0/4 | 0 of 12 | -1.57 |

- **Adopted by the rule fixed in advance:** +0.62 on the pitch deck (required at least +0.36, both runs above 0) and +0.74 on the unseen deck (required at least -0.36; the mean of +1.03 and the change against Opus 5.5, +0.46).
- **GPT alone sees no gain on EN2** (one run ahead, one behind) and no harm.
- **The weakness of 3.2 and 3.3 on the pitch deck is gone. A lead over 3.1 is not shown.**
- **Against Opus 5.5 the deck stays the weak spot:** 0 of 12 on EN10. Opus 5.5 wins mainly on credibility (-2.0): a checkable price list, a sample clearly stamped as made up, limits on each claim, a source slide, a closing slide with a date and a decision.

### 2.8 The fair baseline (30 October 2026)

**Why it was needed.** Until this round only the skill got the persona's facts, through its dialogue. Opus 5.5 saw the brief alone. Every lead against Opus 5.5 so far was therefore an upper limit.

**Setup, fixed in advance.** Six new Opus 5.5 runs with the background on EN2, EN3, EN6, EN7, EN8F and EN9, Claude Code 2.1.308, against the same skill pages as in rounds 3.3 and 3.3.1 (pixel-identical views); 3.3 on the web, 3.3.1 on decks. EN10 came from the deck round. Nine new pairs, three jury models, 108 new verdicts, all complete. Gaps are skill minus Opus 5.5 with the background.

| Pair | Brief status | Opus jury | Fable jury | GPT jury | All three | Skill ahead |
|---|---|---|---|---|---|---|
| Film software (EN3) | development | -0.88 | -1.10 | -0.38 | -0.78 | 0 of 12 |
| Meal planner (EN6) | development | -1.20 | -1.60 | -1.18 | -1.32 | 0 of 12 |
| Heat pump run 1 (EN7) | development | -1.00 | -0.95 | -0.40 | -0.78 | 0 of 12 |
| Heat pump run 2 (EN7) | development | -1.05 | -1.15 | -0.53 | -0.91 | 0 of 12 |
| Boot resoling with photos (EN8F) | development | -1.30 | -1.05 | -0.97 | -1.11 | 0 of 12 |
| Barbershop run 1 (EN9) | unseen | -0.38 | +0.30 | -0.38 | -0.15 | 4 of 12 |
| Barbershop run 2 (EN9) | unseen | -0.25 | -0.30 | -0.05 | -0.20 | 2 of 12 |
| Pitch deck run 1 (EN2) | development | -0.68 | -1.00 | -0.63 | -0.77 | 0 of 12 |
| Pitch deck run 2 (EN2) | development | -0.68 | -0.58 | -0.65 | -0.63 | 0 of 12 |
| Sales deck (EN10) | unseen | -0.85 | -1.70 | -0.78 | -1.11 | 0 of 12 |

| Group | Mean | Skill ahead | Opus jury | Fable jury | GPT jury | Reading |
|---|---|---|---|---|---|---|
| **Web and product UI, 7 pairs** | **-0.75** | 6 of 84 | -0.86 | -0.84 | -0.55 | **behind** |
| of which unseen (EN9, 2 runs) | -0.17 | 6 of 24 | -0.31 | 0.00 | -0.21 | undecided, inside the noise band |
| of which development briefs | -0.98 | 0 of 60 | -1.08 | -1.17 | -0.69 | behind |
| **Decks, 3 pairs** | **-0.84** | 0 of 36 | -0.73 | -1.09 | -0.68 | **behind** |
| of which unseen (EN10) | -1.11 | 0 of 12 | -0.85 | -1.70 | -0.78 | behind |
| of which development (EN2, 2 runs) | -0.70 | 0 of 24 | -0.68 | -0.79 | -0.64 | behind |

- **The earlier lead was mostly a lead in facts.** With the background, the mean is negative on all seven briefs. GPT sees the same: all ten pairs negative, the skill first in 3 of 40 verdicts. On EN9 the same 3.3 pages went from +0.27 (17 of 24, Opus 5.5 without facts) to -0.17 (6 of 24); the difference of -0.45 sits mostly in credibility and is mixed with run swing and with differences between jury sessions.
- **The widest gap is distinctiveness,** -1.0 to -2.65 per pair. Opus 5.5 builds a visual world from one object of the customer (a diner menu board, a hardware store sign, a manila tag, a survey sheet). The skill builds a clever explanation in a neutral shell, which at least 51 of 120 flaw lists call a template or SaaS page (Opus 5.5: 12). The skill's clearest lead was clarity on EN7 and EN9 (+0.42 to +0.88); on EN9 it also led slightly on craft (+0.25, +0.04) and in run 2 on credibility (+0.25).
- **Where the skill had the same facts** (EN3, EN7 twice, EN2 twice), it stands at -0.77 with 0 of 60 verdicts.
- **Checked:** every number recomputed from the raw verdicts by independent AI agents, order and role without effect. Without the credibility criterion the web stays at -0.81 and decks at -0.76, so the facts line does not explain the result. 7 of 10 pairs lie beyond the widest A/A value. The self-preference of Claude jurors comes to at most about 0.3 on the web.
- **Effects in Opus 5.5's favor, none of which flips the sign alone.** Opus 5.5 got all likes and dislikes in advance, while the persona gave the skill only what it asked; on EN6, EN8F and EN10 Opus 5.5 built its main idea from exactly those likes. On EN8F all eight Claude verdicts held facts against the skill that it never received; GPT did not, and stands at -0.97 there. The persona always took rank 1 at Standard effort.
- **Effects in the skill's favor.** It used four to five times the compute, up to twelve steps with fresh reviewers against one call, it got feedback from the persona, and its rules were fitted to these briefs and juries. Even so, the development briefs (-0.98) lie below the unseen web brief (-0.17).

### 2.9 Diagnosis (30 October 2026)

**Question, fixed in advance:** what happens to the gap when the skill gets the same background as Opus 5.5 before it forms directions, and the persona chooses by its likes? Version 3.3.1, one run each on EN6 and EN7, Claude Code 2.1.308, against the same Opus 5.5 pages. The old 3.3 pages stood as anchors in the same session. Three jury models, 48 of 48 verdicts.

| Pair | Opus jury | Fable jury | GPT jury | All three | Skill ahead |
|---|---|---|---|---|---|
| EN6: 3.3.1 with background | -0.90 | -0.95 | -0.58 | **-0.81** | 0 of 12 |
| EN7: 3.3.1 with background | -0.45 | -0.55 | -0.31 | **-0.44** | 2 of 12 |
| EN6: old 3.3 page (anchor) | -1.33 | -2.00 | -1.15 | -1.49 | 0 of 12 |
| EN7: old 3.3 page (anchor) | -1.03 | -1.30 | -0.68 | -1.00 | 0 of 12 |

- **Mean -0.62 against -1.25 for the anchors,** +0.47 with GPT alone. Distinctiveness -1.04 against -2.67.
- **With the customer's things in hand before directions form, the skill builds a world of its own.** A tear-off pad on EN6, a wall thermometer on EN7. All seven earlier EN7 runs had the same photo-steps idea on rank 1.
- **A made-up number as the largest element.** With the background this complaint on EN7 fell from 11 of 12 verdicts on the old page to 3 of 12.
- **The dialogue alone cannot close this.** The full background is the upper limit for better questions, and it stays at -0.62. What remains is mostly typographic voice and how far the page commits: a quiet layout around a good idea, partly caused by the skill's own limits on visual intensity.
- **Limits.** One run per brief, two development briefs, Claude Code version changed along with the skill, rank 3 and Studio unmeasured.

### 2.10 Round 3.4 (30 and 31 October 2026)

**Question, fixed in advance:** does "ask first, then directions" reach, without a background in the prompt, what the diagnosis showed with one? 3.4 asks for things from the user's world in its first message, and directions follow the answers with the mockups. Three independent AI reviewers read the plan before the runs.

**Dialogue dry run (30 October).** First message only, on six briefs with the normal persona and on three briefs with a blind persona whose likes and dislikes were removed. In 6 of 6 cases the first message named no direction and held five numbered questions. The normal persona gave up practically its whole list (median share of likes named 1.0, before 0.83, and before only after the directions had formed), which is the expected upper limit. The blind persona passed its pass mark narrowly (one tangible thing from its text in two of three runs) and named only things such as a laptop, a cart and an outdoor unit, nothing that could carry a look. On the question about things it loves the look of, it answered "don't know" three times.

**Builds (30 and 31 October).** One run each on EN6, EN7 and EN9, no background in the prompt, real dialogue, persona choosing by its likes, extra rounds declined, Standard effort, Claude Code 2.1.308. All directions were rank 1 and the recommendation, and each came from a thing the persona had named. A deck run on EN10 served as a harm check; no rule of this round came from that brief. Opponents were the same Opus 5.5 pages as in the fair baseline, with the older skill pages as anchors in the same session. Three jury models, 72 of 72 and 24 of 24 verdicts. Independent AI agents recomputed all numbers from the raw verdicts.

**Run time.** Each of the three web and product builds took about 1.5 to 2 hours on one laptop (90 to 112 minutes in the logs), with two runs in parallel and a simulated user who answers at once. At list price the three builds used about 3.8 times the compute of an Opus 5.5 run with the background (22.7 against 5.9 dollars per run).

**How the change is measured.** The two versions never met in a pair. On each brief the 3.4 page stood against an Opus 5.5 page, and the older page stood against the same Opus 5.5 page in the same jury session. The change is the gap of 3.4 minus the gap of the older page. It compares 3.4 with its predecessor. The standing against Opus 5.5 is the first row per brief.

| Brief | Version | Opus jury | Fable jury | GPT jury | All three | Skill ahead |
|---|---|---|---|---|---|---|
| Meal planner (EN6) | **3.4** | -0.85 | -1.38 | -0.55 | **-0.93** | 0 of 12 |
| | 3.3 anchor | -1.38 | -1.70 | -1.05 | -1.38 | 0 of 12 |
| Heat pump (EN7) | **3.4** | -0.88 | -1.30 | -0.78 | **-0.98** | 0 of 12 |
| | 3.3 anchor | -1.05 | -1.05 | -0.73 | -0.94 | 0 of 12 |
| Barbershop (EN9) | **3.4** | +0.95 | +1.15 | +0.63 | **+0.91** | 12 of 12 |
| | 3.3 anchor | -0.13 | -0.13 | -0.48 | -0.24 | 3 of 12 |
| Sales deck (EN10) | **3.4** | +0.025 | -1.00 | -0.165 | **-0.38** | 3 of 12 |
| | 3.3.1 anchor | -0.95 | -1.10 | -0.975 | -1.01 | 0 of 12 |

Opus 5.5 with the background stays ahead on three of four briefs. 3.4 leads in 15 of 48 verdicts.

| Rule, fixed in advance | Required | Measured | Met |
|---|---|---|---|
| Change, mean of EN6, EN7, EN9 (-0.33 against -0.85) | at least +0.36 | +0.52 | yes |
| Change on EN9 | at least -0.36 | +1.15 | yes |
| Change with the GPT jury alone | at least 0 | +0.52 | yes |
| Change on the sales deck (harm check) | at least -0.36 | +0.63 | yes |

3.4 therefore became the release version. A stricter condition would have allowed a limited statement about Opus 5.5. It required, among other things, no brief below -0.72, and it failed on EN6 and EN7. We make no such statement.

**What limits the +0.52:**

- **One brief carries it.** EN9 contributes 74 percent. EN6 changed by +0.45, EN7 by -0.04. Without EN9 the change is +0.20.
- **Part of it is contrast.** The pixel-identical Opus 5.5 page on EN9 dropped by 0.51 when it stood next to 3.4, in all three models. From the skill's page alone the change would be +0.36, right at the threshold. The rule measures the gap, so +0.52 stands, but only about 70 percent of it is a rise of the skill's page.
- **The +0.91 is too high.** Five sections show 84 percent of the long Opus 5.5 page on EN9. The missing parts hit prices, process and hygiene, and 11 of 12 verdicts mention that. 7 of 8 Claude verdicts also treated one background sentence as invented. GPT did neither and stands at +0.63. A plausible value with full coverage is +0.4 to +0.8.
- **The win comes from favorable answers.** The EN9 direction comes from "record sleeves" in the persona's list of likes. No build run with thin answers exists, and the likeliest real case is exactly that.
- **Rough certainty.** A reviewer's estimate puts the true change above 0.36 with about 70 percent and above 0 with 95 to 98 percent. The uncertainty is run chance, not the jury.
- **Distinctiveness rose, clarity fell.** On the three web and product briefs the distinctiveness gap to Opus 5.5 was -0.44 for 3.4 and -2.21 for 3.3. The clarity gap was -0.44 for 3.4 and +0.04 for 3.3. On EN9 the booking is too quiet, which is a real flaw.
- **EN7 gained nothing.** A new ranking bonus for things the user named moved a direction built on a plain test table above the wall thermometer idea of section 2.9, and a table carries less than an object there. A late local fix also tore a gap into the pricing section. All eight Claude jury verdicts on this page also criticized the sample quote, although it was marked as made up.
- **The deck shows no large harm and no more.** +0.63 lies below the widest A/A value of 0.72, and the Fable jury sees +0.10. An improvement on decks is not shown. Credibility makes up 75 percent of the remaining gap to Opus 5.5, although 0 of 12 verdicts report invented numbers. One caveat on a key figure moved from the slide to the speaker notes through the skill's own review, which is a real flaw for a document that gets forwarded.
- **The GPT jury on the deck** cannot be confirmed from logs (section 7).

These numbers apply to version 3.4.0.

### 2.11 Versions 3.4.1 to 3.4.3 (31 October to 2 November 2026)

3.4.1 closes gaps in kickoff paths that no 3.4 run touched, and removes contradictions in the rule text. **It was never built in a test.** It was checked only at its first message, in three probes without builds.

- **Third probe (1 November):** 12 runs, one pass-or-fail check per run, 11 passed. On the four briefs that follow the kickoff measured in round 3.4 (EN3, EN6, EN7, EN8F) the question set of 3.4.0 stayed, in the same order.
- **One check failed.** On a probe brief with few facts, a fact question took the place of the question "what can you no longer stand to see in your field". Two probe briefs with a design log dropped that question too, outside the checks. Whether 3.4.0 would do the same on those briefs is unmeasured.
- **One planned change was withdrawn.** On the kickoff measured in round 3.4 it dropped one question from all 6 runs in the first probe and another from 8 of 9 runs in the second, so we took it out.

The numbers of section 2.10 are results of 3.4.0. On the kickoff measured in round 3.4 the first message of 3.4.1 keeps the same questions, and that is all we know: the effect on builds is unmeasured.

**Version 3.4.2 (2 November 2026)** adds small rule fixes. It names a dose read from the user's words, shows variants when the user doubts a color, keeps color roles on every surface, treats a new ground or color pairing as a change that needs review, embeds fonts in HTML decks, and checks every stop of a build. It also moves the Studio estimate from about three times to about twice Standard, in line with the one measured Studio run (section 2.1). None of this was measured in a blind test.

**Version 3.4.3 (2 November 2026)** fixes a fault no AI reviewer found. When the author opened a showcase page in Safari, the display font was missing and a photo covered text. All our checks ran in Chrome, which still loads that font and logs only a console error, so the rendered images showed nothing. Opened from disk, the font preloaded by the page failed on both result pages tested in Safari's engine and loaded without the preload line. Over a web server this is untested. The same line sits in the landing pages of the 3.4 round. The photo fault comes from that one screenshot; a snapshot in the same engine did not show it. The skill now keeps font preloads out of HTML the user opens as a file, bakes blends into the image, and renders websites in a short window too, and `measure.mjs` counts preloads and blended images. The effect on builds is unmeasured.

### 2.12 Numbers that no longer hold

| Earlier number | Date | Status | Why |
|---|---|---|---|
| Web places of 3.0 in the first ranking (5 of 6, 3 of 5) | 17 Oct | replaced | multi-way rankings proved unstable (section 2.2) |
| 3.1 against Opus 5.5: 16 of 32, then 19 of 48, -0.02 | 17 Oct | invalid | view error, no facts line (section 2.3) |
| "32 of 32" for 3.1 on EN7 | 17 Oct | partial | two juries only; GPT against Opus 5.5 there: 1 of 4 |
| 3.1 against Opus 5.5: 33 of 36 (+0.51), 52 of 72 (+0.38) | 23 Oct | upper limit | only the skill had the persona's facts |
| 3.2 against Opus 5.5: 44 of 60, 69 of 108 (+0.40) | 23 Oct | upper limit | same |
| 3.3 and 3.1 against Opus 5.5 on EN9: 17 of 24 (+0.27), 14 of 24 | 24 Oct | replaced | with the background 3.3 stands at -0.17, 6 of 24 (section 2.8) |
| Reading of 23 October that the web gap was mostly a measurement error | 23 Oct | withdrawn | the later lead was mostly a lead in facts (section 2.8) |
| Leads against Opus 5.5 on social, carousel and brand (+0.25, +1.20, +0.28) | 17 Oct | not comparable | Opus 5.5 without facts, versions 3.0 to 3.2, never repeated with the background |
| Opus 5.5 comparison of the German line (section 5.3) | 10 Oct | replaced for Opus 5.5 | Opus 5.5 most likely without persona facts |
| Ranks of other skills in the first ranking (section 4) | 17 Oct | no statement | multi-way rankings proved unstable, conditions were not equal |
| 3.1 against other skills, pairs (section 4) | 17 Oct | invalid, shown only as a record | view error, no facts line, conditions were not equal |
| Other skills against Opus 5.5 without a skill, pairs (section 4) | 22 Oct | invalid, shown only as a record | views of 17 October reused, no facts line, conditions were not equal |
| Skills A and B in the German comparison (section 5.3) | 10 Oct | no statement | conditions were not equal, partly outside their field |

### 2.13 One line, three ways (7 November 2026)

**Question.** Every round above started from a written brief and a simulated user with a ready list of likes, and in the fair baseline Opus 5.5 had that whole list in its prompt. What happens with the kind of prompt people type, when a person answers the questions? This test was set up for a launch post. It is no part of any rule in this document and changes no number in sections 2.8 to 2.10. Section 7 covers the rounds up to section 2.12; the limits of this test are listed here.

**Setup, fixed before the runs.** One prompt: "Make me a website for my hair salon." The salon is made up; the author played its owner and answered every question himself. One run per path, nothing rerun or picked, all pages kept as built. Isolated environment as in section 1.5, except the 49 installed skills in run B, Claude Code 2.1.317, every page built by Claude Opus 5.5 at effort `xhigh`, no MCP servers and so no image generation. Free licensed stock photos were allowed in all three runs.

- **A, Claude alone:** the prompt only, no skills. It asked nothing and built in one turn, in about 7 minutes. It invented the name, the team, the prices, a rating and a discount, and said that all of it was invented.
- **B, with the skill:** version 3.4.3, started with `/unaverage-design` before the prompt, at Standard. Its first message asked five questions; then it showed three ranked mockups. The author picked one, invited it to work in the salon's appointment card and asked for a more creative layout. The skill's three reviewer calls ran on Claude Sonnet 5.5, a different model strength, as its rules suggest. About 40 minutes of Claude's time in three turns, plus the author's time to answer. It used only free stock photos of the craft, none posing as the salon or its team, as its first message had said it would.
- **C, Claude alone with the answers:** the prompt plus the author's answers from run B as text, among them the answer after the mockups on how lively the page should feel, no skills, without the pick among the mockups and the layout feedback, which react to B's mockups. One turn, about 20 minutes. It used stock photos of real shops, several of them standing in for the salon, the hero among them, and a stranger's photo next to the owner's name, which it flagged itself.

| Run | Generic index at 1440 px | Clusters |
|---|---|---|
| A, Claude alone | 5 | Cream look, Card kit |
| B, with the skill | 0 | none |
| C, Claude alone with the answers | 3 | Cream look |

Two jury models, Claude Opus 5.5 and Claude Fable 5.1, judged the three pages blind, each in two sets with other letters and another order. All four rankings agreed. Most like default AI: A, then C, then B. Most distinctive: B, then C, then A. Best quality: B, then C, then A. The author found C's first screen stronger, mostly because of the photo of a real shop, and B stronger below it. In C he saw what the jurors named: small labels above headings, an italic, colored ending on every heading, a box with a colored side stripe.

**Reading.** The answers did a lot: with them, Claude alone rose from last to second on every measure. Beyond the answers, B added the mockups with the author's pick and feedback, the reviewers, and a page without the flagged patterns. This does not overturn the fair baseline, where every Opus 5.5 web page with the background passed the generic check (index 0 to 1, section 6.3) and led on distinctiveness (section 2.8). The settings differ: version 3.4.3 against 3.3, the author's answers against a full persona text with likes, one brief.

**Limits.** One run per path, one made-up salon, one person answering, who also wrote the skill. B had one more round than C. B ran the generic check during its build and fixed what it flagged, so its index of 0 says less than the jury verdicts. Both jury models are Claude models; GPT did not judge here, and there was no human judge. Run B had 49 skills installed, A and C none. This is not real use (section 7), and it is the only judged build of version 3.4.3 in this document.

### 2.14 Blind pairs on the AI look (16 November 2026)

**Question.** Does a result made with the skill look less like generic AI design than the result Claude Opus 5.5 builds without it for the same task? This test was set up to check the project's tagline, "AI design without the AI look". It judged existing results only, is no part of any rule in this document and changes no number in sections 2.8 to 2.13. Its limits are listed at its end.

**Setup, fixed before the verdicts.** Six pairs, one for every task with a built result of version 3.4.x and a result by Claude Opus 5.5 without the skill, with the strongest counterpart where there were several: four from round 3.4 (version 3.4.0 against Opus 5.5 with the background: the barbershop and heat pump landing pages, the meal planner app and the sales deck), the Instagram showcase post (version 3.4.2, section 1.2) against Opus 5.5 with the prompt only from the main run of 16 and 17 October 2026, and the salon of section 2.13 (version 3.4.3, run B against run C). Claude Opus 5.5 built every page. Web pages and the web app were shown as their first screen at 1440 by 900 px, the Instagram post as its first feed post and the deck as all 12 slides on one sheet. Each page appears in one pair only, and a fixed hash rule put the skill's result on side a in three of the six pairs. One question per pair: which of the two looks more like generic AI design, a, b or "same", with a certainty from 1 to 5 and the visible features that decided it. The rule was written for the 12 verdicts of two jury models, without naming the models: supported if at least 9 of 12 name the result without the skill and at most 1 names the skill's, and at least 7 of 10 without the Instagram pair; refuted if the skill's result is named at least as often as the other; undecided in between.

**Juries.** Claude Opus 5.5 and Claude Fable 5.1 judged first. Their verdicts, reasons and model names are kept, but not how their sessions were set up, so whether they judged blind is not recorded. GPT-6.1-Sol judged the same images later that day, after the Claude verdicts had been counted, in a fresh session of Codex CLI 0.163.0 with read-only access to a copy of the pairs without the key, given the rubric and the images.

Named as the one that looks more like generic AI design:

| Task (skill version) | Claude Opus 5.5 | Claude Fable 5.1 | GPT-6.1-Sol |
|---|---|---|---|
| Barbershop landing page (3.4.0) | without the skill | without the skill | without the skill |
| Meal planner app (3.4.0) | with the skill | with the skill | with the skill |
| Sales deck (3.4.0) | without the skill | with the skill | with the skill |
| Instagram post (3.4.2) | without the skill | without the skill | without the skill |
| Heat pump landing page (3.4.0) | with the skill | with the skill | with the skill |
| Hair salon website (3.4.3) | without the skill | without the skill | without the skill |
| Result without the skill named | 4 of 6 | 3 of 6 | 3 of 6 |

**Result.** The result without the skill was named in 10 of 18 verdicts, the skill's result in 8, with no "same". The rule did not say how to count a third jury model; how the three are read here was settled after the verdicts. The two Claude models, which judged first, gave 7 to 5. That misses "supported", which allowed the skill's result at most once, and it is not "refuted", since the skill's result was named less often than the other: by the rule, undecided. GPT-6.1-Sol gave 3 to 3. All 18 verdicts meet neither condition when the rule is scaled to them. Of the other two possible pairs of jury models, Claude Opus 5.5 with GPT-6.1-Sol gives 7 to 5, undecided, and Claude Fable 5.1 with GPT-6.1-Sol gives 6 to 6, which the rule counts as refuted. Without the Instagram pair the three models gave 7 to 8, and in the four pairs against Opus 5.5 with the background they named the skill's result in 8 of 12 verdicts. All three agreed on five of six pairs. Certainty, recorded as an addition and not part of the rule, averaged 4.3 where they named the result without the skill and 3.0 where they named the skill's.

Where they named the result without the skill, all three pointed to familiar template patterns, among them small spaced capitals above or beside the headline, a text card on a full-bleed photo, an italic serif accent and a button repeated or paired with an outlined one. Where they named the skill's result, they pointed to a clean standard layout or a repeated pattern: a three-column planner screen that read as a template, a two-column hero on white with one orange accent, big figures on several slides of the deck. The two Claude models each time also credited the skill's page with something of its own, such as the table with a thermometer scale on the heat pump page, and all three saw a stronger idea from the customer's world on the other side: a diner menu, a drawn house wall with a thermometer, a diagram of the delivery cycle from laundry to hotel. In the reasons, such an idea counted for more than the absence of familiar patterns.

**Limits.** Six tasks, one run per side, 18 verdicts on the same six pairs, so they are not independent. Four of the six pairs show version 3.4.0, one 3.4.2 and only one the current 3.4.3. Two of the three jury models are Claude models, and Claude Opus 5.5 built every page; there was no human judge. GPT-6.1-Sol was added after the Claude verdicts had been counted, to a rule written for two jury models. The question is relative: it says which of two looks more generic, not whether either looks generic at all. The Instagram pair sets a showcase run, chosen because it shows the skill well, against an older run with the prompt only. In the four pairs from round 3.4 Opus 5.5 had the whole persona text up front, while the skill got the facts through its questions; in the salon pair run C lacked the author's pick among the mockups and his layout feedback. Web pages were judged on the first screen only, and on the deck sheet each slide was 640 px wide, so fine typography was hardly visible. Side a always came first within a pair. The skill checks its own work for generic patterns while it builds.

## 3. Language test (16 October 2026)

**Question:** does the English edition with its German market module work on German briefs at least as well as the frozen German version? unaverage-design 3.0 against design-craft 2.5.2 on three German briefs: a legal software landing page, a LinkedIn carousel with fixed CI for an industrial firm, and a B2C Instagram launch. One fresh run per version and brief, isolated environment, Claude Opus 5.5, effort `xhigh`, all at Standard. Blind ranking in both orders with both roles, AI look per variant, and one proofreading judge per brief in both orders. All judges ran on Claude Opus 5.5.

| Criterion | Threshold | Result | Verdict |
|---|---|---|---|
| Mean of five criteria over all briefs | English edition at most 0.5 below German | 7.16 against 6.93 (+0.23) | passed |
| No clear loss on a brief | not: German first in all four rankings and more than 0.5 ahead | carousel: German 4 of 4, 0.475 ahead (7.35 against 6.88) | narrowly passed |
| Proofreading | errors not above German | 2.5 against 4.5 (mean of both orders, sum of three briefs) | passed |

| Brief | Mean rank English / German | First places | Mean score English / German | AI look | Studio readiness |
|---|---|---|---|---|---|
| Landing page | 1.5 / 1.5 | 2 / 2 | 7.30 / 7.25 | 3.5 / 3 | 6.5 / 7 |
| Carousel with CI | 2.0 / 1.0 | 0 / 4 | 6.88 / 7.35 | 3 / 2.5 | 6.5 / 7 |
| Instagram launch | 1.0 / 2.0 | 4 / 0 | 7.30 / 6.20 | 4 / 5 | 5 / 4 |

- The proofreading judge found no translation traces as errors in the English edition. Most notes for both versions concern tone on the landing page.
- On the carousel the German version turned the numbers into an argument with charts. The English edition set them as type only and used upscaled photo crops.
- **Limits.** One run per version and brief, four rankings per brief, all judges on one model, proofreading by an AI model. The carousel lies close to the threshold. The test covers 3.0. A German smoke test ran on 3.1 on 22 October (Instagram brief, passed), and one German Instagram run of 3.3 on 23 and 24 October stayed unjudged. No German build with 3.4 has been measured.

## 4. Other design skills

Runs on 16 and 17 October 2026, judging on 17 and 22 October 2026. Builders on Claude Opus 5.5, effort `xhigh`, isolated environment. **These numbers are not a statement about these skills.** The conditions were not equal, as listed below, and we do not use them in any announcement. We publish them as a record.

We name no skill here. The conditions were not equal and these numbers are unstable or invalid, so a name would read as a verdict that the data does not carry. Skills A to D are four open-source web design skills, frozen for the test. Letters mean the same skill throughout this page.

**First ranking, 17 October.** Mean rank, 1 is best, Claude Opus 5.5 jurors. This is the multi-way ranking that proved unstable (section 2.2). In the second judging of the same designs skill A moved from place 3.5 to 1 and skill C from place 2 to 6. The table shows mean ranks of the first judging.

| Participant | EN3 run 1 | EN3 run 2 | EN6 |
|---|---|---|---|
| Skill C | 2.5 | 2.5 | 1.75 |
| Skill B | 3.25 | 2.0 | 5.0 |
| Skill A | 3.5 | 3.75 | 3.75 |
| Skill D | 6.0 | 6.0 | not run |
| unaverage-design 3.0 | 4.5 | 4.75 | 3.25 |

Opus 5.5 without a skill ranked best on EN3 run 1 and on EN6, and tied with skill B on EN3 run 2. Skill D was not run on EN6 and took part in no pair measurement.

**Pairs, 17 October.** 3.1 against skill C, skill A and skill B on EN3 twice, EN6 and EN7, 48 verdicts per skill. These pairs have the measurement errors of section 2.3 and no facts line. These numbers are invalid and shown only as a record.

| 3.1 against | Opus jury | Fable jury | GPT jury | All three | Mean gap, 3.1 minus skill |
|---|---|---|---|---|---|
| Skill B | 9/16 | 14/16 | 10/16 | 33 of 48 | +0.83 |
| Skill C | 11/16 | 8/16 | 9/16 | 28 of 48 | +0.18 |
| Skill A | 6/16 | 12/16 | 9/16 | 27 of 48 | +0.26 |

**Skills against Opus 5.5 without a skill, 22 October.** 12 pairs from the same runs and the same views of 17 October, so the view error of section 2.3 applies here too; 144 verdicts, no facts line. Neither side had the background in its prompt. On EN7 the error touched only the 3.1 page, which is not in these pairs. A pixel comparison on 2 November 2026 with views cut after the fix shows no change on EN6 and visible changes on EN3 for skill A (run 1) and skill C (run 2); their cause was not traced. The Opus 5.5 page on EN7 shows a small vertical offset without the view error, and skill C on EN3 run 1 changed in one small area. These numbers are invalid and shown only as a record.

| Pair | Opus jury | Fable jury | GPT jury | Opus 5.5 without a skill ahead | Mean gap, Opus 5.5 minus skill |
|---|---|---|---|---|---|
| Skill B | 12/16 | 13/16 | 15/16 | 40 of 48 | +1.05 |
| Skill A | 13/16 | 13/16 | 13/16 | 39 of 48 | +0.52 |
| Skill C | 15/16 | 12/16 | 13/16 | 40 of 48 | +0.33 |

**Why these numbers do not compare the skills:**

- **Order.** The other skills ran once. unaverage-design then saw its own losses on the same briefs, was corrected and ran again as 3.1. EN3 and EN6 were development briefs for 3.1 and for nobody else.
- **Facts.** The skills differ in how much they ask: some built from the brief alone, some asked the simulated user or worked in a dialogue with their own review rounds, and unaverage-design asked in its own dialogue. So each participant held different facts. Without a facts line, true facts from a dialogue could read as invented, which works against every participant that asked.
- **One run per variant,** two on EN3. The noise band of 0.36 was measured later and applies here too.
- **Home field.** All these briefs are web work, the field these skills name for themselves, so the numbers say nothing about any other field. Some of these skills build without questions by design, and a fixed test head with a simulated user fits some of these workflows better than others.
- **Never repeated.** After the fixes of 22 and 23 October we did not measure these skills again. No skill stood against 3.3 or 3.4, and none got the fair baseline of section 2.8.
- **Raw data.** The raw data of these pairs (pages, briefs, judge prompts and verdicts) is not published.

## 5. German predecessor line

This section covers the **German predecessor version**, called design-craft before the release (2.3 to 2.5): German briefs, German-speaking simulated users, one run per brief and iteration, and AI judges on one model (Claude Opus 5.5). The iterations ran on 9 and 10 October 2026, the comparison in section 5.3 on 10 October 2026. These runs did not use the isolated environment of section 1.5. They stand here as the history of the skill. They are not results of the current English version.

### 5.1 Six iterations against v1

Across eight briefs, seven formats plus correction, design-craft 2.x ended with **no loss against its predecessor v1: six wins and two ties**, in the last version tested per brief. Five of the six wins held for both judges in both presentation orders; the landing page won with the target-audience judge and split with the creative director. Three of the eight briefs were never used while building the skill. On those, the new version won two and tied one.

v1 (version 1.2) was the previous, simpler version of the skill. The new version 2.0 added research-based knowledge: about 70 rendered and measured reference works, 13 style directions, registers for different media, a measurable generic check with about 60 signatures, legal checks, independent reviewers and a kickoff in which the user picks a direction. The table shows the gap per iteration as **new version minus v1, creative director / target audience**. Empty cells: brief not run in that iteration.

| Format | It. 1 (2.0) | It. 2 (2.1) | It. 3 (2.2) | It. 4 (2.3) | It. 5 (2.4) | It. 6 (2.5) |
|---|---|---|---|---|---|---|
| Seed pitch deck (Studio) | -2.6 / -2.6 | -0.6 / -0.6 | -0.6 / -0.3 | -0.7 / 0.0 | **+1.3 / +1.1** | |
| B2B landing page | -1.6 / -1.3 | -0.4 / -0.5 | -0.5 / -0.9 | 0.0 / -0.1 | **+0.4 / +0.7** | |
| Instagram launch, three posts | -1.6 / -2.0 | -0.7 / -0.6 | -1.0 / -1.2 | -0.1 / -0.7 | -1.0 / -0.4 | **+0.2 / +0.1** |
| LinkedIn webinar visual (Quick) | +1.0 / +1.8 | +2.3 / +2.7 | | **+2.8 / +2.9** | | |
| Fixing a generic AI landing page | +1.3 / +1.5 | | | **+1.7 / +1.3** | | |
| B2B LinkedIn carousel (unseen) | | | | | | **+1.3 / +1.2** |
| First brand identity, insurer (unseen, Studio) | | | | | | **+0.6 / +1.0** |
| AI product UI (unseen) | | | | | | **+0.1 / +0.2** |

Bold: the last iteration in which the brief was run.

**Iteration 1, version 2.0: knowledge and process.** The new version lost the three big creative briefs clearly (mean over both judges: pitch deck 4.6 against 7.2, landing page 6.2 against 7.6, Instagram launch 5.5 against 7.3) and won the quick LinkedIn visual (7.3 against 5.8) and the correction of a generic page (7.3 against 5.9). It followed its own process almost completely (pitch deck 14 of 14 steps), so the problem was content and weighting, not execution. Placeholders carried the design (titles and the key figure as placeholders, gray boxes instead of photos), there was no stand-in material, the results were too calm, and the process ate the design time: the pitch deck run used 36 reviewer calls and five correction rounds.

**Iteration 2, version 2.1: impact first.** Licensed stand-in photos instead of gray boxes, draft copy instead of gaps, v1's impact levers back, a cap on reviewer calls. The gap on the big briefs shrank to between -0.4 and -0.7; the quick visual won by +2.3 / +2.7. Judges still missed a proof image (the product or software was never shown), found weak stand-ins, monotone sequences and visible gaps. We also found a test leak: the running example inside the skill almost matched the landing page brief. It was replaced by a neutral example.

**Iteration 3, version 2.2: more rules.** Show the proof, better stand-ins, rhythm in sequences, no gap markers. The gap did not close. The judges' reasons were the same on every brief: v1 had a tangible idea from the product's own world, built the product interface as a mockup from the brief, used images that prove the statement rather than illustrate the topic, and wrote copy with benefit and feeling. Version 2.2 had abstract ideas or pure typography and looked "like a clean Swiss template" (judge, translated). Leaving a section out cost more than v1's marked placeholders.

**Iteration 4, version 2.3: the hybrid.** The build stage went back to v1's way of working: a tangible idea from the product's world, one running example, the product built as a mockup from the brief, images that prove the statement, benefit copy, and open slots shaped like the finished content. The knowledge of version 2 stayed as a filter, with a smaller reviewer budget (Standard 3 calls, Studio 10). The landing page became even (split verdicts in both roles). The Instagram launch was even with the creative director, while v1 stayed ahead with the target audience. The quick visual won more clearly than before (+2.8 / +2.9), the correction won again (+1.7 / +1.3), and the AI look was equal to or better than v1 on every brief. Remaining issues: too many visible "to be added" boxes (about 14 dashed boxes on 9 of 12 slides in the deck), hedging notes inside the image, montages and repetition, monotone sequences.

**Iteration 5, version 2.4: no labels, no hedges, rhythm.** No "to be added" labels or hedges in the image, no montages, rhythm also in calm directions, the product recognizable, a strong hero headline. The pitch deck won for the first time in both roles and both orders, with the highest distinctiveness score of all iterations (8.8). The landing page moved ahead. The Instagram launch fell back (flat stock-vector style, an informative instead of an emotional headline). After five iterations on the same three briefs, overfitting was the obvious risk.

**Iteration 6, version 2.5: generalization.** Feed headlines hit the feeling or ritual of the audience, not the category; "link in bio" never replaces the content of a surface; illustration only with its own handwriting; story copy introduces no new facts without a source. Three briefs that had never been used as test cases ran fresh with both versions: the carousel and the brand identity won in both roles, the product UI was even. The Instagram launch was even as well.

**Version 2.5.1** (not separately tested): scope follows the brief, and the core function of an assignment is visible at a glance.

**Version 2.5.2** (not separately tested): the first object that comes to mind for a topic (a stamp, a highlighter) counts as a cliché until it carries the fields of the running case; motifs rotate across brands; small review rules from a practice test (rebuilt interfaces follow their reference, every text in the image is language-checked, captions add instead of repeating, type sizes are judged at full size, all brand colors are listed with roles). The English skill is adapted from 2.5.2.

#### The lesson

Bans and checks alone make results clean but empty. Idea and material first, then the system, then the filters. Generic findings are replaced, not deleted. Images prove the statement. Open items appear in the shape of the finished content, never as a label. More reviewer calls had no measurable effect.

#### Cost per iteration

| Iteration | Test runs | Judging |
|---|---|---|
| 2 | 69 agents, about 12.8 million tokens, 3.3 hours | 28 agents, about 3.6 million tokens |
| 3 | 64 agents, about 11.8 million tokens, 3 hours | 21 agents, about 3.0 million tokens |
| 4 | 54 agents, about 12.0 million tokens, just under 3 hours | 35 agents, about 4.8 million tokens |
| 5 | 49 agents including preparation, about 11.7 million tokens | 21 agents, about 3.1 million tokens |
| 6 | 58 agents, about 12.9 million tokens | 32 agents, about 4.2 million tokens |
| Comparison (section 5.3) | six new runs, about 6.2 million tokens | 18 agents, about 2.4 million tokens |

Iteration 1 costs were not recorded. Iteration 4 additionally used 9 agents and about 3.2 million tokens to align the skill files before the runs.

### 5.2 Final standing against v1, per format

Last tested version per brief. Scores: mean of five criteria over both orders, 0 to 10, higher is better. AI look: 0 to 10, lower is better. A win always means the same version won in both presentation orders.

| Format | Effort | Version (iteration) | Creative director new / v1 | Target audience new / v1 | Verdict | Distinctiveness new / v1 | AI look new / v1 |
|---|---|---|---|---|---|---|---|
| Seed pitch deck, 10 to 12 slides | Studio | 2.4 (5) | 7.8 / 6.5 | 7.4 / 6.3 | new wins, both roles | 8.8 / 5.5 | 3 / 4 |
| B2B landing page, desktop and mobile | Standard | 2.4 (5) | 7.6 / 7.2 | 7.6 / 6.9 | new ahead: target audience in both orders, creative director split | 7.8 / 6.5 | 3 / 3 |
| Instagram launch, three posts | Standard | 2.5 (6) | 6.8 / 6.7 | 7.1 / 7.0 | tie, split verdicts | 6.8 / 6.2 | 3 / 5 |
| LinkedIn webinar visual | Quick | 2.3 (4) | 7.7 / 4.9 | 7.6 / 4.7 | new wins, both roles | 8.0 / 3.8 | 3 / 6 |
| Fixing a generic AI landing page | Standard | 2.3 (4) | 7.7 / 6.0 | 7.6 / 6.3 | new wins, both roles | 8.0 / 5.5 | 3.5 / 5 |
| B2B LinkedIn carousel with fixed CI (unseen) | Standard | 2.5 (6) | 7.8 / 6.5 | 7.8 / 6.6 | new wins, both roles | 8.5 / 5.5 | 3 / 3.5 |
| First brand identity for an insurer (unseen) | Studio | 2.5 (6) | 7.7 / 7.1 | 7.5 / 6.5 | new wins, both roles | 8.0 / 5.9 | 4 / 4 |
| AI product UI, three states (unseen) | Standard | 2.5 (6) | 8.0 / 7.9 | 8.0 / 7.8 | tie, split verdicts | 8.2 / 6.8 | 2.5 / 3 |

What the table shows:

- The new version was more distinctive than v1 on all eight briefs, and its AI look was equal or lower on all eight.
- v1 was still clearer on four briefs (clarity: landing page 8.0 against 7.6, carousel 8.0 against 7.0, brand identity 8.0 against 6.4, product UI 8.2 against 7.0). v1 has always built product interfaces well, which is why the product UI ended even.
- Gaps below about half a point are within judge noise (section 7) and should be read as ties. That covers both ties and the creative director's split verdict on the landing page.

### 5.3 Comparison with Opus 5.5 without a skill and two other design skills

**Read this first.** Opus 5.5 most likely ran here without the persona's facts, as it did in the English rounds before 30 October. Every statement in this section about Opus 5.5 is therefore superseded by the fair baseline (section 2.8), and no statement about Opus 5.5 here applies to the current version. The numbers on skills A and B are superseded too and are not a statement about these skills: the conditions were not equal (see the fairness notes). The section stays as the record of 10 October 2026.

#### Setup

- **Briefs:** the Instagram launch (social, B2C) and the B2B landing page (web, the home ground of the two external skills).
- **Variants per brief:** design-craft 2.x (Instagram launch: 2.5 from iteration 6; landing page: 2.4 from iteration 5), design-craft v1, Claude Opus 5.5 without a skill, Opus 5.5 with skill A, Opus 5.5 with skill B.
- Same brief, same persona, same test environment; other installed skills not allowed.
- **Judging:** blind ranking of all five variants as described in section 1.4, four rankings per brief, plus five criteria and AI look per variant.

Skills A and B are the same skills as in section 4. Skill B ran here at an earlier version.

#### Instagram launch (social, B2C)

Ranks come from all five variants. Skills A and B also ran here, but this brief lies outside their field, so their rows are not shown.

| Variant | Mean rank (1 = best) | Ranked first (of 4) | Creative director | Target audience | Distinctiveness | AI look |
|---|---|---|---|---|---|---|
| design-craft 2.5 | **1.5** | 2 | **7.4** | 7.0 | 7.0 | 4 |
| design-craft v1 | 1.8 | 2 | 6.5 | 7.1 | 6.5 | 5 |
| Opus 5.5, no skill | 2.8 | 0 | 6.6 | 6.5 | 5.0 | 6 |

#### B2B landing page (web)

The rows for skills A and B are not a statement about these skills.

| Variant | Mean rank (1 = best) | Ranked first (of 4) | Creative director | Target audience | Distinctiveness | AI look |
|---|---|---|---|---|---|---|
| design-craft v1 | **1.5** | 2 | **7.5** | **7.7** | 7.5 | 3.5 |
| design-craft 2.4 | 2.5 | 1 | 7.3 | 7.0 | **8.0** | 3 |
| Opus 5.5, no skill | 2.5 | 1 | 7.3 | 7.7 | 5.8 | 5 |
| Skill A | 3.5 | 0 | 7.1 | 7.0 | 5.8 | 2 |
| Skill B | 5.0 | 0 | 6.4 | 6.3 | 8.0 | 3 |

#### Reading, as of 10 October 2026

- **On the Instagram launch, design-craft 2.5 ranked best.** The creative director put it first in both orders: "only there does a single idea carry all three posts" (judge, translated).
- **On the landing page, the older v1 ranked first**, and design-craft 2.4 shared second place with Opus 5.5 without a skill. In the pairwise test of iteration 5, version 2.4 was ahead of v1 on the same brief. With five variants side by side, the judges rated v1 clearer and stronger in impact, and 2.4 more distinctive.
- **Opus 5.5 without a skill was a strong baseline**, especially on the web (craft 8.0, credibility 8.0). Its distinctiveness scores here were 5.0 and 5.8 and its AI look 5 and 6. These scores do not describe Opus 5.5 today: in the fair baseline, with the background in its prompt, distinctiveness is where the skill falls furthest behind (section 2.8).
- **Skills A and B** appear in the landing page table as a record only, and this reading draws no conclusion about either skill.

#### Fairness notes

- Skills A and B are built for web interfaces in code projects. Instagram posts are outside that focus; the landing page is closer to it. This comparison says nothing about either skill in its own field: web interfaces in a code project, used with its own tools.
- One skill ran without its own tools in this test, so some of its automatic steps did not run.
- The other skills work leaner by design, while design-craft runs a dialog with the user and independent reviewers. It therefore needs more time and tokens per result.
- One run per variant, four rankings per brief, all judges on the same model. design-craft entered the landing page with version 2.4, not 2.5.

## 6. Calibration of the generic check

The skill ships a measuring script that renders a page and counts signatures of generic AI design, for example icon-library icons used as imagery, gradient text, colored glows, card grids and template font stacks. The **generic index** counts red signatures plus clusters of signatures: 0 to 1 is clean, 2 is borderline, 3 or more is generic. The **gate** passes at index 2 or lower with no cluster. Craft checks (overflow, minimum font size, contrast) are a separate gate and do not count toward the index. The current catalog has 61 measured tells, 55 signatures of AI design plus 6 craft checks, and 8 clusters.

The check was measured three times. Each measurement applies to the script of its date.

| Date | Script | Pages | What it answers |
|---|---|---|---|
| 8 October 2026 | German check | 68 human, 38 AI | does the index separate human from AI pages |
| 16 October 2026 | English script of 3.0 against German 2.5.2, same day | 68 human, 37 AI | did the English script change anything |
| 30 October 2026 | 3.3 against the 3.3.1 tool fixes, same day | 128 pages in all | did the tool fixes change any index |

### 6.1 Calibration of 8 October 2026

The check was calibrated at 1440 x 900 pixels against 68 human-designed sites and 38 AI-generated pages.

| Group | n | Index 3 or more | Index 2 | Gate missed | Previous version of the check, index 3 or more |
|---|---|---|---|---|---|
| Top reference sites (own analysis) | 40 | 0 | 0 | 1 | 12 (30 %) |
| Award-winning sites 2025 and 2026 outside the references (11 seen in a same-day pre-run that added one cluster, 2 unseen) | 13 | 0 | 0 | 0 | 2 |
| All human-designed sites | 68 | 0 | 2 | 2 (3 %) | 18 (26 %) |
| All AI-generated pages (Lovable, v0, Bolt, two test pages) | 38 | 25 (66 %) | 6 | 31 (82 %) | 30 (79 %) |
| AI pages added in the final calibration run | 11 | 8 (73 %) | 2 | 10 (91 %) | 9 |

- **No false alarm at index 3 or more on any of the 68 human-designed sites on that date.** The two borderline cases are a product site whose hero follows the familiar formula (centered, two buttons, eyebrow label) and a studio case study whose editorial grid is exactly the template that AI "broadsheet" styles copy.
- **Separation:** area under the ROC curve for "index separates human from AI" 0.93, against 0.80 for the previous version. The median index was 4 for AI pages and 0 for human pages.
- **Strongest AI signals:** Lucide icons used as imagery (red on 0 human against 25 AI pages), the template-stack cluster (0 against 21), gradient text (0 against 13), colored glows (0 against 11), card grids (1 against 10).
- **Not AI signals:** buzzwords (5 human against 4 AI pages) and dash-heavy copy (1 against 4). Both stay as copy findings but never lift a page above 1 on their own.
- A later signature for visible gap markers in finished work ("TBD", empty underlined fields, bracketed placeholders) had 0 false alarms on 75 human-designed pages in its final version (9 October 2026).

The 11 pages in the last row were added in the final run; two rule changes made after the base run also touched them.

### 6.2 Repeat of 16 October 2026

The English script of 3.0 against the frozen German script 2.5.2 on the same day, on the same page list of 128 rows. Both measured 68 human pages. 37 AI pages were measurable, because one test page file no longer existed. Live pages drift, so only the same-day comparison counts.

| Group | n | German 2.5.2, index 3 or more | English 3.0, index 3 or more | English 3.0, index 2 | Gate missed, German / English |
|---|---|---|---|---|---|
| Top reference sites | 40 | 0 | 0 | 1 | 1 / 1 |
| Award-winning sites outside the references | 13 | 0 | 0 | 0 | 0 / 0 |
| All human-designed sites | 68 | 1 | 1 | 2 | 3 / 3 |
| All AI-generated pages | 37 | 24 (65 %) | 25 (68 %) | 5 | 30 / 31 |
| AI pages from the final calibration run | 11 | 8 (73 %) | 8 (73 %) | 2 | 10 / 10 |

- **ROC area 0.92 instead of 0.93, in both scripts.** The German script gave 0.920, the English script as run 0.918. The English list entry "coming soon" caused that small difference, with a false alarm on one human page. We removed it; without it the area is 0.920. Because the German script also gave 0.92 that day, the step from 0.93 does not come from the English script: live pages had changed and one AI test page was missing.
- **One human page reached index 3 on this date,** in both scripts. It is a live site that had changed since 8 October. The written criterion "no human page at index 3" was therefore not met literally. It passed only in the paired reading, old script against new on the same day. Three human pages missed the gate, against two on 8 October.
- **Equality:** all signatures except the three language-dependent ones and all clusters matched on 131 page pairs (112 strict, 19 with options). 114 pairs were equal, 17 differed, and reruns traced all 17 to measurement noise on animated or changing pages. No cluster differed on any page.
- **The strongest AI signals stayed the same:** icons as imagery 0 human against 26 AI pages, template-stack cluster 0 against 21, gradient text 0 against 12, colored glows 0 against 10, card grids 1 against 9.

### 6.3 Paired calibration of 30 October 2026

The generic check of 3.3 against the working state of the 3.3.1 tool fixes on the same day, on the same 128 pages, strict, at 1440 x 900.

- **No index changed** on any of the 128 pages.
- **The stat-banner signature changed as intended:** on 6 pages one row no longer counts, and each of them is a real step or year row.
- **All 30 other status differences were noise of live pages,** traced by earlier runs, a second run of both versions, and alternating direct runs.
- **This report compares indexes.** It gives no new ROC area, so 0.92 remains the last measured area.
- **The script changed once more after this comparison,** through fixes from a review round. Those fixes were checked on fixtures, on the deck corpus and on the 24 web pages with stat rows, not again on all 128 pages. The scripts have not changed from that state through 3.4.2.

One control from the fair baseline: every Opus 5.5 web page and app screen passed the check too (index 0 to 1, seven reports; the decks were not measured), and the skill still lost to those pages on distinctiveness. The check flags template signatures. It says nothing about which of two pages is better, and passing it is no sign of distinctive work.

Limits of the calibration: only web pages at 1440 x 900 were calibrated; slides, social posts, documents and product UI were checked with test files only. The human sample is the top end of design, not average sites. The AI sample is mostly one generator (24 Lovable, 10 v0, 2 Bolt). AI pages without effects and without a template stack pass as clean (7 of 38 had index 0 to 1 on 8 October), which is why the skill keeps visual review mandatory. Live sites change; deviations of 1 between runs are expected. The buzzword list used on 8 October was mostly English.

## 7. Limits

### All tests

- **Our own setup.** Briefs, personas, judge prompts and evaluation scripts come from the same project as the skill.
- **AI judges only.** No human judge, no market test. AI judges can prefer the familiar.
- **Few runs.** Mostly one run per brief, version and variant, at most two. A direction choice by the simulated user or one judge can move a result.
- **Fictional brands.** All companies, people, numbers and quotes in the test briefs are fictional.

### English tests

- **Run swing is large.** The same version against itself reached 0 of 12 (section 2.4), and the same version against the same Opus 5.5 page reached 1 of 12 and 11 of 12 (section 2.5). The noise band rests on four pairs.
- **Three jury models, one build model.** Builders, simulated users and the skill's reviewers all ran on Claude Opus 5.5. Two of the three jury models are Claude models, and Opus jurors judge pages built by their own model. Rules were fitted to these juries as well, for example the wording of sample labels, and the skill's reviewers run on the same model as one jury.
- **GPT on the harm check.** For the sales deck of round 3.4, the model and the image handover of the GPT jury cannot be confirmed from logs, because no stdout or stderr file exists for that run. The flaws it names do match the slides. Its numbers there are reported, with this caveat.
- **Two missing verdicts.** GPT delivered 94 of 96 verdicts in round 3.2.
- **Brief status.** EN6 and EN7 are development briefs. EN9 is not unseen: 3.3 and the fair baseline measured it before round 3.4. It stayed free of rules from that round: in the dry run we used only its numbers.
- **Standard and rank 1 in the fair rounds.** In the fair baseline and in round 3.4 the skill ran at Standard effort, and the persona took rank 1 with a declined extra round. Studio against Opus 5.5 with the background is unmeasured; the only Studio run against Opus 5.5 (EN5, section 2.1) had no background on that side and took rank 2. Rank 3, the boldest direction, was never built. On the three briefs of round 3.4 the concept of the Opus 5.5 page matched the skill's unbuilt rank 3.
- **Other things changed along with the skill.** Between the 3.3 pages and the 3.4 runs both Claude Code (2.1.299 to 2.1.308) and the persona's choice rule changed. Both probably favor 3.4, and the two cannot be separated from the rule changes. The measures inside 3.4 cannot be separated from one another either.
- **Asymmetry with the background.** Opus 5.5 gets all of the persona at once in a tidy form. The skill gets answers to its own questions, plus feedback on mockups, and it uses more compute and fresh reviewers. Opus 5.5 lacks the persona's answer style and any dialogue.
- **The simulated user is not a person.** It holds a ready list and answers five to ten times longer than its own style allows, so bundled questions work better in the test than they probably would in real use. The path with a question tool cannot be measured in this setup.
- **Stand-in version.** In the fair baseline 3.3 stands in for 3.3.1 on the web. The rule changes of 3.3.1 are limited to decks; on the web only tool fixes differ.
- **View chance.** Five sections showed 84 percent of the Opus 5.5 page on EN9. On EN7 a mobile bar appeared by render chance in the baseline view and covered a guarantee line; 23 of 24 verdicts held that against Opus 5.5, so Opus 5.5 lay rather too low there. Later rounds used the correct image.
- **The facts line is imperfect.** On the sales deck it is sharper than the persona's wording, and exclusions the page correctly left out were still marked down.

### Not covered

- **Real use is unmeasured.** No real user has run 3.4 on a real project in these tests.
- **Formats.** Social posts, carousels and brand work were never measured with 3.4 in a scored round. Their numbers come from 3.0 to 3.2. One Instagram post of 3.4.2 was judged once, on the AI look only, in the pair test of section 2.14.
- **Versions 3.4.1 to 3.4.3** were not measured on builds against their predecessors. 3.4.1 was checked at its first message only, 3.4.2 was read against the rules and judged on one showcase post in a pair (section 2.14), 3.4.3 was checked on two result pages in Safari's engine and, in tests, built once with a jury, in Claude Code (the one-line test of section 2.13, which compares it with Claude alone, not with 3.4.0; section 2.14 judged that page again in a pair), and without one in Codex, on Windows 11, in the Claude app and in the ChatGPT app (next four points).
- **Other tools and models.** All judged builds used Claude Code and Claude Opus 5.5. One unjudged smoke run on 23 October 2026 (one Instagram post at Quick, GPT-6.1-Sol in Codex, version 3.2.0) showed that Codex loads the skill and finishes the workflow. On 14 November 2026 version 3.4.3 ran twice in Codex CLI 0.163.0 on macOS with GPT-6.1-Sol, at Quick and in Codex's default sandbox: an A4 poster and an Instagram post, not judged. The skill loaded from the project's `.agents/skills` folder, triggered once without being named, built both results with one reviewer subagent each and listed the checks that did not run. Rendering, measurement, the font check and the generic check did not run there: puppeteer-core was not installed, since the skill installs it only with the user's OK, and Chrome crashed inside the sandbox. They need permission to run outside the sandbox, which these runs did not test. Neither run enters a result here, and neither says anything about quality. In all judged comparisons GPT-6.1-Sol only judged.
- **Windows.** On 16 November 2026 version 3.4.3 ran on Windows 11 Pro, unpacked from the release ZIP, at Quick with one LinkedIn post each and not judged: in Claude Code in the desktop app (5.11492.5, Claude Opus 5.5) from `~/.claude/skills` and in the ChatGPT app in local mode with its Codex runtime (codex-cli 0.166.0-alpha.5.1, GPT-6.1-Sol) from `~/.agents/skills`. In both it triggered without being named and built the post, but neither agent named missing tools or offered `npm install` before building. Claude Code built the post in HTML and SVG and rendered it with headless Chrome directly, since puppeteer-core was not yet installed; ChatGPT drew it with Python and Pillow, which left measurement and the generic check no text to read. After `npm install`, run in a second round on request, both agents ran the generic check and the measuring script on the post, Claude Code with Node 26.13.1 and ChatGPT with Node 24.22.1 from its own runtime. Called directly in Windows PowerShell 5.1, rendering, the generic check and PDF export ran with Node 26.13.1 and Chrome. Windows had no Python installed: in Claude Code and in the direct call the generic check reported its pixel check as not run and named the signatures it left unmeasured, while ChatGPT ran the color measurement with the Python of its own runtime. Only the Code tab of the desktop app ran, not the Claude Code CLI.
- **Claude app.** The same day the release ZIP was uploaded as a skill in the Claude app (desktop app 4.23118.0 on macOS, Claude Opus 5.5, not judged). Code ran in the app's cloud workspace, with Node 22, Chrome and Python with Pillow and NumPy; Google Fonts and Unsplash were blocked there. In a chat without a project folder the skill did not trigger by itself; the app loaded its built-in artifacts skill instead. Named, it built an A4 poster at Quick and ran rendering, the color measurement and the generic check, but skipped its reviewer, the measuring script and the font check, and it ran `npm install` in the workspace without asking. In a chat with an empty project folder it triggered by itself and ran Standard for a hair salon website: three directions as mockups, the build, two reviewer subagents and their fixes, the generic check and the overflow check at four widths; the font check did not run.
- **ChatGPT app.** The same day, on macOS and with the skill added as a private plugin, Work mode without a folder (GPT-6.1-Sol) triggered it without being named and built an A4 poster as a PDF with Python, without the skill's scripts. In Chat mode (GPT-6) the app generated an image, with and without the skill named; when named, the skill was loaded, and its rules allow image generation only after explicit approval. The skill does not work in ChatGPT's Chat mode. Where the effort level is recorded, the skill ran at Quick in Codex, on Windows and for the poster in the Claude app, and at Standard for the website in the Claude app. None of the runs in this point and the three above enters a result here or says anything about quality.
- **Languages.** The English rounds are English, except one German Instagram run of 3.3 on 23 and 24 October, which no jury judged. The language test covers three German briefs with 3.0.
- **Working without tools.** Working without Python, Node, Chrome or a shell is a rule in the skill and was only partly tested. In the one probe (16 October 2026, version 3.0) the agent found Python anyway and the simulated user chose it, so the path without Python did not run then. On Windows 11 on 16 November 2026 (version 3.4.3) Claude Code ran without Python, and the generic check reported its pixel check as not run ("Windows" above). In the Codex runs of 14 November 2026 puppeteer-core was missing and Chrome crashed in the sandbox ("Other tools and models" above). We have no run without Node or without a shell.
- **Durations.** The durations in the skill's SKILL.md are estimates and lie below the test runs: 30 to 60 minutes for Standard there, about 1.5 to 2 hours in round 3.4 (section 2.10).

### German predecessor line

- **German only.** All briefs, personas and judgments were in German, and the skill tested was the German version.
- **Same model throughout.** Simulated users, skill runs, reviewers and judges all ran on the same model, Claude Opus 5.5, and the baseline and the external skills did too.
- **Not isolated.** These runs started in a normal desktop session. Other skills were visible and barred by text in the test header only. All participants were affected in the same way.
- **Judge noise.** The same v1 results were judged again in later iterations, each time against a different new version. Their scores moved by 0 to 0.7 points from one round to the next (median 0.2) and by up to 0.8 overall (for example the target-audience judge on the landing page: 7.3, 7.7, 7.5, 6.9). Read gaps under about half a point as ties; a win counts only if it holds in both presentation orders.
- **Different versions per brief.** The final standing mixes versions 2.3, 2.4 and 2.5. Quick and correction were last tested with 2.3. Versions 2.5.1 and 2.5.2 were not tested on their own.
- **Overfitting.** Five iterations used the same three main briefs; three unseen briefs in iteration 6 address overfitting but do not rule it out.
- **No real material.** Personas never delivered photos, logos or screenshots, so all versions worked with stand-ins and placeholders.
- **Best of three for v1.** On the Instagram launch, v1 delivered three complete directions and judges rated the strongest one.
- **Narrow comparison.** The comparison with other skills used two briefs, one run per variant, and formats partly outside the external skills' focus (section 5.3).

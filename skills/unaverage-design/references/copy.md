# Copy

As of 2026-10-16, for stage 4 (copy pass) and stage 5 (gates Language and Target-market spelling, tells E1 to E6). New in 3.0: this file collects the copy rules of [SKILL.md](../SKILL.md) stage 4, point 4, ground rule G14 ([directions/README.md](directions/README.md) 3), the copy tells of [generic-catalog.md](generic-catalog.md) 3 and group rule 9 of [use-cases/b2c-marketing.md](use-cases/b2c-marketing.md). Sections 2 to 4, the word probes and the candidate lists are new in 3.0 (H, to be validated). Evidence strength: high, medium, H (derivation, to be tested); sources [n] at the end.

English microtypography (quotes, apostrophe, ranges, numbers, dates, times) lives in [craft.md](craft.md) 6.5. German copy: [markets/german.md](markets/german.md) 2 to 4.

## 1 Copy pass

Run it when the user supplies no finished text. Write in the output language from the start, never draft in English and translate ([SKILL.md](../SKILL.md), Language and market).

1. **Benefit and feeling of the audience first,** in their words: what they gain or do not want to lose. The audience's trade vocabulary instead of buzzwords (5).
2. **Three headline variants,** each against two test questions: "Could this sentence be on a competitor's site?" and "Is the headline understood positively on its own?" In the feed and at the top of a slide people read only the headline; a pun that says the negative first fails. Example Weserbogen: "Modern dentistry in Bremen" could stand on any practice's site; a headline built on the practice's promise to anxious patients ("raise your hand to pause") can only stand on this one.
3. **Feeling before category** (feed and B2C): the headline hits the feeling or ritual of the audience, not the product category or the news value ("New in stores" is no headline); it is understood positively on its own in the feed. Example Röstwerk: the morning ritual with the fresh roast, not "Now available: our new roast".
4. **The caption adds to the image** in the feed (context, benefit, next step) instead of repeating its headline or explaining what is shown. Example Nordlicht: the image shows the pallet at the loading dock in Kassel; the caption says how to book a part load, not "Our pallet at the loading dock".
5. **Draft missing story copy** (why now, comparison, positioning, teaser) from the brief and the category and mark it as a draft in the wrap-up. Only facts stay open, and an open number never becomes the headline. Story copy introduces no new facts (laws, deadlines, market figures, competitors): what is not in the brief is researched and sourced, or left out.
6. **Outsourcing never replaces the content of a surface:** "link in bio", "more on the website", "on request" or "more in the meeting" add to a surface, they do not fill it. A surface about places, prices or dates shows them; missing content appears in final form ([SKILL.md](../SKILL.md) stage 4, point 6).
7. **The product is recognizable as what it is:** the core property from the brief (for example waterproof, foldable, tool-free assembly) stands in the headline or anchor, not only in small print, and color and form in the image fit the product ([craft.md](craft.md) 5.1, point 9).
8. **No on-image hedges** (a made-up line on a sample case is content; [craft.md](craft.md) 5.1, point 9): a company's own statements need no note in its own channels; sources only for third-party figures, collected in a footnote or appendix; notes like "depiction based on assumptions" belong only in the review view ([craft.md](craft.md) 5.4, 9.2). German forms of forbidden labels and hedges: [markets/german.md](markets/german.md) 2.
9. **Weighting follows the brief:** what the brief calls a side note ("also available decaffeinated") never becomes the loudest element; what belongs together stays together.
10. **Decision-critical sections always stay** (Mängelwerk construction-defect software: data location and rights to the photos; Nordlicht freight forwarder: liability and transit times; Weserbogen dental practice: costs and insurance coverage): known facts from brief and answers, open items in final form following [SKILL.md](../SKILL.md) stage 4, point 6 (none on stage surfaces, at most one per surface and three per sequence), with a short field label and its value ("Liability", "Insurance coverage"), asked about in the kickoff. Never leave them out and never evade ("details on request"). In a decision-critical section the heading promises only what the section answers: without a fact on the risk, the section shows what brief and answers say the product does about it, under a heading that names exactly that. Reason: a heading that raises an unanswered question reads as filler.
11. **Every key figure appears at most twice** (stage and closing; 7).
12. **Quotes** only approved, with person and role.
13. **Microcopy and mandatory zones** in the same voice as the headline (6).
14. **Legal triggers:** check environmental claims and mandatory buttons against [compliance.md](compliance.md) 3 and, where the module applies, [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 3 and 6.

## 2 Headlines and case

- **Sentence case** for web, product UI, social and decks: capitalize the first word and proper names only ("Book an appointment", not "Book An Appointment").
- **Title Case** only when the brand, the brief or a fixed genre asks for it (for example a book title).
- **One case style per work:** headings, buttons, navigation and slide titles follow the same style.
- **Caps only through CSS** (`text-transform: uppercase` with the right `lang`, [craft.md](craft.md) 6.4) and only for short labels, with caps tracking from [craft.md](craft.md) 6.2, because typed caps cannot be switched back and some screen readers spell them out.
- German headlines: no English Title Case ([markets/german.md](markets/german.md) 2).

## 3 Spelling by market

- **Choose the variant** en-US or en-GB from the brief, the market, the currency or the user's own spelling; without a hint, en-US. Record it in contract field 4.
- **One variant throughout:** colour or color, centre or center, licence or license, programme or program (en-GB also writes "program" for software); dates "6 March 2026" (en-GB) or "March 6, 2026" (en-US), never purely numeric dates; quotation marks by house style, else en-US double and en-GB often single ([craft.md](craft.md) 6.5); currency and units of the market.
- **`-ize` is fine in en-GB** when it is used throughout; never mix `-ize` and `-ise` in one work.
- **Check with a word probe.** It finds candidates only; check every hit in the text (a quoted brand name, a product name or a proper noun stays as it is).

```bash
# visible text only: drop comments, style and script blocks and tags first, because CSS keywords (color, center, gray) and version numbers in script URLs would bury the real hits; line numbers refer to visible.txt
perl -0777 -pe 's/<!--.*?-->//gs; s/<(style|script)\b.*?<\/\1>//gis; s/<[^>]+>/ /g' file.html > visible.txt
# en-US copy: British forms
perl -CSD -ne 'print "$.: $_" if /\b(colour|flavour|favour|honour|labour|behaviour|neighbour|harbour|centre|metre|litre|theatre|fibre|licence|defence|offence|catalogue|programme|grey|cheque|aluminium|whilst|amongst|travell(ed|er|ing)|cancell(ed|ing)|modell(ed|ing)|labell(ed|ing)|analys(e|ed|es|ing)\b|(organ|real|recogn|optim|custom|priorit|personal|summar|visual|standard|minim|maxim)is(e|ed|es|ing|ation)\b)/i' visible.txt
# en-GB copy: American forms
perl -CSD -ne 'print "$.: $_" if /\b(color|flavor|favor|honor(s|ed|ing|able)?\b|labor(s|ed|ing)?\b|behavior|neighbor|harbor|center|theater|fiber|defense|offense|catalog(s)?\b|gray|aluminum|traveled|traveling|canceled|canceling|modeled|modeling|labeled|labeling|analyz)/i' visible.txt
# en-GB copy: -ise and -ize mixed?
perl -CSD -ne '$s++ while /\b(organ|real|recogn|optim|custom|priorit|personal|summar|visual|standard|minim|maxim)is(e|ed|es|ing|ation)\b/gi; $z++ while /\b(organ|real|recogn|optim|custom|priorit|personal|summar|visual|standard|minim|maxim)iz(e|ed|es|ing|ation)\b/gi; END { print "ise: ", $s+0, ", ize: ", $z+0, "\n" }' visible.txt
# both variants: purely numeric dates
perl -CSD -ne 'print "$.: $_" if /\b\d{1,2}[\/.]\d{1,2}[\/.]\d{2,4}\b/' visible.txt
```

German spelling by country and its probes: [markets/german.md](markets/german.md) 4.

## 4 Dashes

- **A single dash is allowed** when it is a deliberate design choice and no user rule forbids it: en-US a closed em dash (U+2014), en-GB a spaced en dash (U+2013). The report shows it as a yellow E2; yellow does not count in the index ([generic-catalog.md](generic-catalog.md) 2).
- **More than one per surface, or a recurring dash cadence, is an AI tell** (tell E2, red from 8 and 1 per 500 characters).
- **Ranges** with an en dash (U+2013) or "to"; when a user rule forbids dashes, "to".
- **User rules take precedence** (G14; for example "no dashes"); they govern copy style, never the spelling of the output copy ([SKILL.md](../SKILL.md), Language and market).
- Check: `perl -CSD -ne 'print "$.: $_" if /[\x{2013}\x{2014}]/' file.html`.
- Skill texts name the dash only by its code point, never set it as a character.
- The dash in German copy: [markets/german.md](markets/german.md) 2.

## 5 AI tells in copy

Only E1 to E6 are measured by the generic check; the rest of this section is a visual check (R3, and the lead agent in Standard). Tells E1 and E2 are copy findings, not an AI signal in the calibration ([generic-catalog.md](generic-catalog.md) 2; medium [1]). Thresholds and hints: [generic-catalog.md](generic-catalog.md) 3. **Replace, don't delete:** a buzzword gives way to the audience's trade vocabulary or a concrete fact from the brief, a gap marker to a field in final form.

| Tell | What it catches | English list in the script |
|---|---|---|
| E1 Marketing buzzwords | formula words instead of the audience's vocabulary | streamline, empower, supercharge, seamless(ly), elevate, unleash, next-gen, cutting-edge, world-class, effortless(ly), revolutionize/revolutionise, game-changer, next level, smarter, leverage, unlock, frictionless, best-in-class, state-of-the-art, transformative, unparalleled, "harness the power" |
| E2 Dash cadence | em and en dashes (U+2014, U+2013), except between digits or between a letter and a digit | (characters, no word list) |
| E3 Aphoristic cadence | short punch sentences that end in a negation, negation pairs | short sentence up to 8 words with "no" or "not" plus a word at the end, plus the pairs "Not (a\|an\|just) X. Y." and "It's not (just) X, it's Y" |
| E4 Template chrome in text | middle dot " · ", arrows on links and buttons | (characters, no word list) |
| E5 Placeholder identities and fantasy numbers | names that show a template; round invented numbers such as 99.9%, 10x, 10,000+, 5K+ (measured as number patterns) | Acme, Nexus, John Doe, Jane Doe, Lorem ipsum, dolor sit amet |
| E6 Gap markers in the presentation view | open items left visible: underscore lines from three characters or as an empty element after a colon, words in square brackets, fixed gap words | language-independent, counted on every page regardless of `lang`: TBD, TODO, `: ___`, square brackets with name, logo, url, text, `x,x`, `xx`; English list, new in 3.0, passed the false-alarm test on 2026-10-16: TBA, TBC, "to be added", "to be confirmed", "details to follow", brackets with title, role, date, day, place, location, city, company, photo, image, source, price, number, placeholder, required, address, contact, client, customer, amount, quote, insert, your |
| P1, D9 (template detection, not copy tells) | KPI card rows, template section sequence | "from last month", "vs. previous period", "per month", "/mo", "frequently asked" |

- **The skill's own markers** `[REQUIRED: ...]` and `[open: ...]` and their German forms count for E6 on every page regardless of `lang`, once each; "open" counts only in this bracket form, never as a class name (`is-open`). They are counted first and removed before the language lists run (pattern in `scripts/generic-check.mjs`).
- **Lists by language:** the script checks each text against the list of its `lang`; German lists: [markets/german.md](markets/german.md) 6.
- **Mirror rule:** the script is the single source. Change the script, [generic-catalog.md](generic-catalog.md) 3 and this table together; they stay identical.

**Not measured, visual list** (a word enters the script only after a passed false-alarm test on human pages; calibration of 2026-10-16, medium [2]):

- E1 candidate: reimagine(d). It stays visual because it lifted a human page to the borderline.
- E6: "coming soon" (alone in an element or after a colon). Removed from the script because it raised a false alarm on a human page; check by eye whether it stands in for missing content.

**Visual checks beyond E1 to E6** (tell V21 in [generic-catalog.md](generic-catalog.md) 6):

- Negation parallels beyond the measured pairs: "It's not about X. It's about Y.", "More than just X"; E3 measures only the pairs in the table, check other forms by eye.
- Triple cadence: "Fast. Simple. Secure."
- Empty openers: "In today's fast-paced world", "Meet the future of X", "Say goodbye to", "The future of X".
- Rhetorical hero questions: "Tired of X?"
- Exclamation marks and emoji cheering.
- "Trusted by" without proof (tell V5).
- "Built for X" as an eyebrow (tell A4).

## 6 Microcopy, mandatory text and voice

- **G14 Copy is part of the design:** microcopy and mandatory texts in the brand voice, control labels unambiguous; no buzzwords (tell E1) or aphoristic cadence (tell E3); dashes in design copy only singly and deliberately (4), clustered they are a tell (tell E2); user rules take precedence.
- **U12 Voice down to the edges:** microcopy, forms, consent and footer in brand language and unambiguous; the footer as the closing image. Review question: Does the cookie notice sound like the hero? ([craft.md](craft.md) 1)
- **Control labels** are unambiguous: they say what happens ("Book an appointment"), in the same voice on every surface.
- **Words before codes:** the reader learns no code. Initials, code numbers and other shorthand carry a word or a legend (a defect list says "Water damage", not "W3").
- **Mandatory notices** stand where the real medium has them and only when their trigger is in the medium, at minimum type size, as small as allowed, unless a norm requires size or emphasis; wording that a law prescribes stays verbatim in its language ([compliance.md](compliance.md) 2).
- **Field labels for open items** are short and set in the typography of the content ("Liability", "Insurance coverage") and stand only with their value; without a value the item goes to the review view and the wrap-up, never a "to be added" label ([SKILL.md](../SKILL.md) stage 4, point 6). German field labels: [markets/german.md](markets/german.md) 2.

## 7 Numbers and claims in copy

- **U7 Proof, not claim:** data with reference value and period, customer plus number plus context, source and as-of date for third-party numbers, collected in a footnote or appendix ([craft.md](craft.md) 9.2); no placeholders, no round fantasy numbers. The company's own figures need no note in its own channels.
- **E5:** a placeholder name (Acme, Nexus, John Doe, Jane Doe, Lorem ipsum, dolor sit amet) is red and a blocker of the truth gate; a round number (99.9%, 10x, 10,000+, 5K+) is yellow: give it a source, or use the exact value from brief and answers. Sample data in mockups uses names from the target market and uneven values with units ([craft.md](craft.md) 5.1, point 9).
- **Every key figure at most twice** per sequence (stage and closing).
- **An open number never becomes the headline;** story copy introduces no new facts (1).
- **Recompute** every ratio in the copy as in a chart ([craft.md](craft.md) 9.3).

## 8 Languages without a market module

- Apply this file and write the copy in that language from the start.
- Address: follow the category's convention in that market and record it in contract field 3.
- Set `lang` and follow [craft.md](craft.md) 6.4 for line breaks.
- Run the font check with the nearest character set (`font-check.mjs --lang`, [fonts.md](fonts.md) 3).
- The word lists of the generic check exist for English and German only ([markets/README.md](markets/README.md) 5); check E1 and E3 by eye.
- List "spelling and typography not checked by a native speaker" in the wrap-up.

## Sources

1. Own calibration of the generic check, 2026-10-08, 128 pages: [generic-catalog.md](generic-catalog.md) 2 (medium).
2. Own paired recalibration of the generic check, 2026-10-16, 128 pages, with the false-alarm test of the new English list entries on the human pages: [generic-catalog.md](generic-catalog.md) 2 (medium).

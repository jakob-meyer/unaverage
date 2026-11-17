# Market modules

As of 2026-10-15. The core of the skill is language-neutral and written in English. Everything that only holds for one language or one legal area lives here, so the core stays short and a market can be added without touching it.

## 1 What a market module is

A market module is one file that carries the rules of one market the core cannot state in general terms. There are two kinds:

- **Language module** (for example [german.md](german.md)): talking to the user in that language, copy rules, typography, spelling by country, characters for the font check, word lists for the generic check, local formats, original sentences of the running examples.
- **Legal module** (for example [eu-dach-compliance.md](eu-dach-compliance.md)): legal triggers, mandatory notices with their prescribed wording, deadlines and sources for one legal area.

The core says the rule in general and links the module section; the module gives the local form. A module never changes a core rule; where a market needs a stricter value, the module states it and the stricter value applies. Without a module for the output language the core rules in [copy.md](../copy.md) 8 apply.

## 2 Loading rules

| Module | Load when |
|---|---|
| [german.md](german.md) | any output copy is German (whole file); the user writes German but the copy is not German (section 1 only) |
| [eu-dach-compliance.md](eu-dach-compliance.md) | publisher or audience in the EU, Germany, Austria or Switzerland, and a legal trigger fires ([compliance.md](../compliance.md) 1) |

Output language, market and spelling variant are set in stage 0 and recorded in contract field 4 (SKILL.md, Language and market). Several languages in one job: case X6 ([use-cases/README.md](../use-cases/README.md) 7); each language loads its own module. In a market without a legal module, every legal trigger that fires becomes an open item "check local rules" and a recommendation for expert review ([compliance.md](../compliance.md) 4).

## 3 Sections of a language module

Fixed numbers, so the core and other tools can link by number and title. Follow the outline of [german.md](german.md):

0. When to load.
1. Talking to the user in the language (fixed labels of the direction question, effort levels, signal words, genre phrases, trade-off pairs, reactions, guided questions, field names of the design contract, form of address).
2. Copy in the language (address and formality, loanwords, feeling before category with local examples, field labels for open items, forbidden labels and hedges, AI labels, the dash, protective rules).
3. Typography (line breaks and hyphenation, caps, quotation marks, apostrophe, ellipsis, ranges, minus, spaces, numbers, date, time, currency, text length compared with English, `lang` per variant).
4. Spelling by market (variants per country with a word probe).
5. Fonts: characters of the language (the check set for `font-check.mjs --lang`, finding, rules).
6. Word lists for the generic check (mirrored from the script).
7. Local formats and expectations (paper and print formats, business letters, trust signals).
8. Original sentences of the running examples.
Sources.

## 4 Sections of a legal module

Follow the outline of [eu-dach-compliance.md](eu-dach-compliance.md): 0 scope and status (which countries are complete, which are "check locally", as-of date, no legal advice); 1 when to load, signals; then one section per trigger group (accessibility law; purchase, cancellation, withdrawal; equal weight, scarcity, reviews, advertising; prices; environmental claims; consent banners, third-party resources, fonts; imprint and business mail; people and job ads; trademarks, customer logos, freedom of panorama; mandatory notices by industry; copyright terms and AI output; AI labeling); last, when to get legal review; sources. Prescribed wording stays in the original language and verbatim.

## 5 Word lists

- **The script is the source.** The lists for the generic check live in `scripts/generic-check.mjs`, in one constant `WORDS` with one key per language (`en`, `de`); language-neutral markers sit in `GAP_ANY`. German strings in the script sit only in lines that end with the comment `// lang:de`.
- **Mirrors:** English lists in [copy.md](../copy.md) 5, the lists of a language in section 6 of its module. Change the script and its mirrors together; they must stay identical.
- **Assignment by `lang`:** each text node is checked against the list of its nearest `lang` attribute, else the document language; text without `lang`, or in a language without its own list, is checked against all lists. The skill's own markers (`[REQUIRED: ...]`, `[open: ...]` and their German forms) and the language-neutral gap markers (TBD, TODO, `: ___`, brackets with name, logo, url, text, `x,x`, `xx`) count on every page regardless of `lang`; E5 uses all lists on every page.
- **New words** enter the script only after a false-alarm test on human pages of that language: no human page may get a new red tell or lose the gate. Words that fail stay on the visual list in the module. Without a calibrated set of human pages in a language, its candidates stay visual only.
- **New language:** add a language key in the script, a character set in `font-check.mjs`, and section 5 and 6 in the new module.

## 6 Checklist for contributions

- Every legal statement with a source and its as-of date; primary sources (law, court, authority) before secondary ones; strength high, medium or H (derivation).
- No legal advice: modules name triggers, wording and when to get expert review; they never draft binding legal texts.
- Examples only from the skill's fictional running brands (Weserbogen, Nordlicht, Röstwerk, Mängelwerk, Lagerlicht, Nadelöhr) or neutral generic ones; never from test briefs or real client work, because examples that mirror a test distort it.
- Section numbers and the fixed titles stay; a change goes into the changelog under "Interface".
- No dash characters U+2013 or U+2014 in the module text; name them by code point.

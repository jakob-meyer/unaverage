# German

Language module for German output copy and German-speaking users. As of 2026-10-16; content of the German edition 2.5.2 unless marked "new in 3.0". Evidence: high (original), medium (secondary), H (derivation, to be tested); sources [n] at the end. Instructions are in English; labels, examples and word lists are German and verbatim. How modules work: [README.md](README.md).

## 0 When to load

- **Whole file:** any output copy is German (variants de-DE, de-AT, de-CH; contract field 4).
- **Section 1 only:** the user writes German but the copy is not German.
- The core rules stay in force ([copy.md](../copy.md), [craft.md](../craft.md), [review.md](../review.md)); this file gives the German form and, where German needs it, a stricter value. Legal triggers for the EU and DACH: [eu-dach-compliance.md](eu-dach-compliance.md).

## 1 Talking to the user in German

**Address:** du by default; Sie when the user writes with Sie. The user's team or company is addressed in the plural ("Warum für euch", "euer Terminzettel").

**Terms the user sees** (SKILL.md, Language and market: terms are translated):

| Core term | German |
|---|---|
| effort levels Quick, Standard, Studio | Aufwandsstufen Schnell, Standard, Studio |
| direction, recommendation, your own idea | Richtung, Empfehlung, eigene Idee |
| near the category, at the edge of the familiar, bold | nah an der Kategorie, an der Grenze des Gewohnten, mutig |
| "none, safer", "none, bolder" | "keine, sicherer", "keine, mutiger" |
| mockup, contact sheet, interim | Mockup, Kontaktbogen, Zwischenstand |
| design contract | Designvertrag |
| open-items list (the review view) | Liste offener Punkte |
| stand-in, draft copy, final form | Stellvertreter, Entwurfstext, Zielform |
| decision-critical sections | kaufentscheidende Abschnitte |
| reviewer, reviewer call, fix round | Prüfer, Prüferaufruf, Korrekturrunde |
| trade-off pair; dose quiet, medium, loud | Gegensatzpaar; Dosierung leise, mittel, laut |
| generic check, generic index | Generik-Check, Generik-Index |
| modes Correction, Review only, Autonomous | Modi Korrektur, Nur prüfen, Autonom |
| acceptance or change, change order | Abnahme oder Änderung, Change Order |
| "unchecked", "not checked on the image" | "ungeprüft", "ungeprüft am Bild" |
| "intentional", "intentional, CI" | "bewusst gewählt", "bewusst gewählt, CI" |
| "derived from the code, unchecked on the image" | "aus dem Code abgeleitet, ungeprüft am Bild" |
| "generic check as a visual check, not measured" | "Generik-Check als Sichtprüfung, nicht gemessen" |
| "draft, not ready to publish" | "Entwurf, nicht veröffentlichungsfähig" |
| seed without code execution: "not drawn, substitute rule" | "nicht gelost, Ersatzregel" |

**Labels of the direction question** (fixed; SKILL.md stage 1):

1. **Name** aus dem Projekt ("Blick auf die Weser", nicht "Swiss Minimal"), Katalogcode in Klammern.
2. **Was du siehst:** Anker, Schrift in Alltagssprache, Farbe mit Rolle, Leere oder Dichte.
3. **Warum für euch:** Bezug auf eine Aussage des Nutzers, den Brief oder das Material, nie auf Geschmack.
4. **Risiko oder was du aufgibst**, plus Abstand.

With Sie (new in 3.0): **Was Sie sehen:**, **Warum für Sie:**, **Risiko oder was Sie aufgeben**. In the kickoff example M1 ([dialogue.md](../dialogue.md) 2) all three directions use *Was du siehst:* and the short label *Risiko:*; the first direction uses *Warum für euch:*, the second and third shorten it to *Warum:*.

**Labels of the message patterns** ([dialogue.md](../dialogue.md) 2):

- **Kickoff (M1):** **Verstanden:**, **Aufwand:**, **Richtung:** ("Diese drei passen, in dieser Reihenfolge:"), "Nicht dabei:", "Oder **deine eigene Idee**: ein Satz genügt, ich übersetze sie.", **[Zahl] Fragen** (ohne Antwort gilt, was in Klammern steht), **Wie weiter?**
- **Kickoff ohne Richtungen (M1c, new in 3.4):** **Verstanden:**, **Aufwand:**, **Fünf kurze Fragen, bevor ich Richtungen vorschlage,** "weil eure Antworten sie prägen. Ein paar Worte genügen, und 'keine Ahnung' ist eine gute Antwort.", **Ich nehme an, korrigier mich, wenn es nicht stimmt:**, **Wie weiter?** "Aufwand (ohne Antwort: Standard). Du bekommst dann drei Richtungen als Mockups. Wenn du lieber zuerst Richtungen lesen oder nur meine Empfehlung ohne Mockups willst, sag es."
- **Mockups (M3):** "Verlangt von dir:"; ranking table `Rang | Richtung | Passung | Distinktheit | Risiko | Was du aufgibst`; **Neu nach euren Antworten:**; after M1c or M1a **Aus euren Antworten:** or "**Ohne eure Antworten** kommen die Richtungen aus dem Auftrag und eurem Fach."; **Wie weiter?** with "keine, sicherer" or "keine, mutiger". Trade-off pair in M1 in brackets: "(keine Vorgabe; ohne Antwort bleibt die Dosis mittel, ausser eure Worte haben sie gesetzt)".
- **Wrap-up (M5):** **Ergebnis:**, **Wie es den Auftrag erfüllt:**, **Geprüft:**, **Ungeprüft:**, **Nicht gelaufen oder ersetzt:** (new in 3.0), **Bewusst gewählt:**, **Quellen:**, **Stellvertreter und offene Punkte**, **Offen nach der letzten Prüfung:** with the sentence "Noch eine Runde kostet [Zeit, Aufrufe]; ohne Antwort gilt es als abgenommen.", closing "Abnahme oder Änderung?".
- **Quick wrap-up (M5s):** **Fertig:**, **Nicht gelaufen oder ersetzt:** (new in 3.0; "keine" only when everything ran), **Quellen und Lizenzen:**, **Idee:**, **Stellvertreter und offen:**, **Richtung:**, **Offen nach der Prüfung:** with the same sentence, closing "Passt es so?".
- **Skill improvement (M6):** "Mir ist etwas aufgefallen, das über dieses Projekt hinausgeht: [Beobachtung]. Ursache im Skill: [Regel oder Lücke]. Vorschlag: [Datei, Stelle, neue Regel]. Wirkung beim nächsten Mal: [...]. Soll ich das übernehmen?"
- **Scope statement:** "[Stufe]: [n] Richtungen als Mockup von [Schlüsselfläche], [in Studio: zwei Ausarbeitungen der Schlüsselfläche], Prüfer [Rollen], höchstens [n] Prüferaufrufe (Schnell 1, Standard 3, Studio 10) und [n] Runden, Entscheidungen bei [EP1, EP3, EP5], Lieferung [Formate], grob [Dauer]." For Studio on a subscription add "kostet spürbar Kontingent".
- **Plausibility note and assumption:** "Ich nehme an, die Preise sind brutto" (core: "I assume prices include tax"); "Ich nehme an, es geht um Terminbuchungen".
- **Limit of the environment:** "Hier kann ich keine unabhängigen Prüfer starten; Studio prüft deshalb mit dir statt mit Agenten."

**Question tool options** ([dialogue.md](../dialogue.md) 7.2; M1c, M1a und M1 ohne genannte Dinge ohne Fragewerkzeug): (1) Aufwand: "Standard (empfohlen)", "Schnell", "Studio"; (2) Richtungsweg: "Alle drei als Mockup", then "Nur [Name]" per direction, the recommendation first; the free answer covers your own idea; (3) one material question (Q5 when it applies, the recommendation first, [dialogue.md](../dialogue.md) 3.3), for Q5 with the fixed labels "Ohne Fotos (ich baue die Bilder)", "Freie Fotos, die ich suche", "Eure eigenen (geschickt oder von eurer Website)", with Sie "Ihre eigenen (geschickt oder von Ihrer Website)"; (4) one trade-off pair with both sides as options.

**Signal words** (SKILL.md, Effort levels):

| German | Meaning |
|---|---|
| "schnell", "kurz", "mal eben" | Quick |
| "Richtungen zur Auswahl", "Varianten" | at least Standard |
| "das Beste", "Zeit spielt keine Rolle", "unabhängig prüfen" | propose Studio without asking again |
| "einfach machen", "du entscheidest" | Autonomous mode |
| "wirkt das generisch?", "sieht das nach KI aus", "Design-Check", "mach das hochwertiger" when nothing is to be built | Review only |

**Deck type** ([dialogue.md](../dialogue.md) 3.3, Q10; [craft.md](../craft.md) 12.2): "ich präsentiere", "ich halte den Vortrag" or "live vor Publikum" mean a talk deck; "zum Versand" or "als PDF verschicken" mean a reading deck.

**Never asked** ([dialogue.md](../dialogue.md) 3.2): "modern oder klassisch?", "Welcher Stil?", style terms as a choice ("Swiss oder Brutalismus?"), "Wie findest du es?" without guidance.

**Trade-off pairs** ("Was wäre schlimmer: ...?"; [dialogue.md](../dialogue.md) 4.1):

| Pair | German question |
|---|---|
| calm against loud | "zu ruhig oder zu laut?" |
| serious against playful | "zu steif oder zu albern?" |
| precise against handmade | "zu glatt oder zu roh?" |
| airy against dense | "zu leer oder zu voll?" |
| example Weserbogen | "zu klinisch oder zu verspielt?" |

"zu ruhig wäre schlimmer" means loud, a louder mode. "warm gegen kühl" ("zu kalt oder zu gemütlich?") in consumer web and product UI in any case; otherwise, like "kumpelhaft gegen distanziert", only when the top 3 differ exactly there.

**Questions on things** (new in 3.4; [dialogue.md](../dialogue.md) 3.3; with Sie: "Ihre Kunden", "Nennen Sie", "Was sagen Sie"): Q16 "Was haben eure Kunden heute dazu in der Hand oder vor Augen, zum Beispiel eine Karte, ein Formular, einen Brief, einen Aushang?"; Q17 "Nenne ein oder zwei Dinge, deren Aussehen du magst, von überall, nicht nur Websites."; Q3 "Was kannst du in eurer Branche nicht mehr sehen?"; Q18 "Was sagst du jemandem, der zögert, mit deinen Worten?"; Q19 "Was darf ich nicht versprechen oder zeigen, und was muss gesagt werden?"

**Reference question** ([dialogue.md](../dialogue.md) 4.2): "Nenne eine Marke oder Seite, die dir gefällt, und eine, die gar nicht passt, je mit einem Grund." Short form in the kickoff (Studio): "eine Seite, die dir gefällt, und eine, die gar nicht passt, je mit Grund".

**Reactions** ([dialogue.md](../dialogue.md) 5; the rule per reaction is there):

| German | Core reaction |
|---|---|
| "zu verspielt" | "too playful" |
| "weiß nicht, ob mir das Gelb gefällt" | "not sure about the yellow" |
| "zu langweilig", "zu nüchtern" | "too boring", "too plain" |
| "zu kalt", "zu technisch" | "too cold", "too technical" |
| "wirkt billig" | "looks cheap" |
| "sieht nach KI aus", "wie ein Template" | "looks like AI", "like a template" |
| "zu voll" | "too full" |
| "zu leer", "unfertig" | "too empty", "unfinished" |
| "zu dunkel" | "too dark" |
| "passt nicht zu uns" | "doesn't fit us" |
| "gefällt mir nicht" without a reason | "I don't like it" without a reason |

**Guided questions:** "Was siehst du zuerst? Was stört? Was fehlt?" (operating mode Without subagents, reactions without a reason); with the user as reviewer also "Würdest du klicken?" ([dialogue.md](../dialogue.md) 7.3). Correction mode: "Was stört? Was bleibt? Wofür?" ([dialogue.md](../dialogue.md) 6.2).

**Field names of the design contract** ([templates/design-contract.md](../../templates/design-contract.md)): title "Designvertrag: [Projekt], [Schlüsselfläche]"; "Teil A: für Prüfer" with 1 Aufgabe, 2 Ziel, 3 Zielgruppe und Szene, 4 Vorgaben (with the block "Kaufentscheidende Abschnitte", columns "Abschnitt", "Bekannte Fakten (Quelle)", "Offen: in Zielform"), 5 Ausschlüsse, 6 Gegensatzprofil, 7 Material (with the block "Stellvertreter"), 8 Gewählte Richtung, 9 Erfolgskriterien und Gates, 10 Entscheidungen des Nutzers; "Teil B: nur Hauptagent" with 11 Umfang, 12 Rangfolge-Rechnung, 13 Seed, Zuordnung, Kandidaten.

## 2 German copy

**Address, du or Sie (G10):** B2C du, B2B Sie; in risk categories and for older audiences B2C also Sie when the category talks that way; record it in contract field 3. Set the address and keep it (WRM: du for young B2C, Sie for B2B).

**Loanwords (zoo case):** use the word the audience uses. Calibration example R2 ([templates/review-brief.md](../../templates/review-brief.md) 4): an ad of the Tierpark Nordau (Nordau Zoo) for its annual pass; answer 7 of the audience: "Membership" unusual; fix: "Jahreskarte" instead of "Membership"; price with its reference "Familie, 89 € im Jahr" instead of "ab 89 €". A loanword the audience does not use costs points in Language and scene (R2).

**Feeling before category, German examples** ([copy.md](../copy.md) 1): "Neu im Handel" is no headline. Test questions: "Könnte dieser Satz beim Wettbewerber stehen?" and "Versteht man die Headline allein positiv?". Outsourcing adds to a surface and never fills it: "Link im Profil", "mehr auf der Website", "auf Anfrage", "mehr im Termin". A side note such as "auch entkoffeiniert erhältlich" never becomes the loudest element. The core property stands in the headline or anchor ("wasserfest", "faltbar", "ohne Werkzeug montierbar").

**Field labels for open items in final form** (short, in the typography of the content): "Kosten", "Kassenleistung" (dental practice), "Haftung", "Haftungsgrenze", "Laufzeiten" (freight forwarder), "Datenstandort", "Rechte an den Fotos" (construction software), "Einführungszeit" (sales deck).

**Forbidden labels, gap words, hedges and evasions** in the presentation view ([SKILL.md](../../SKILL.md) stage 4, points 4 and 6; tells E6, V26):

| Core | German |
|---|---|
| "to be added" | "wird ergänzt" |
| "details to follow" | "Angabe folgt" |
| "coming soon" | "folgt in Kürze" |
| "open", "to follow" as gap markers | "offen", "folgt", also "offen:", "folgt:" |
| "photo to follow" | "Foto folgt" |
| boxes saying a detail is missing | "Angabe fehlt" |
| note under the company's own figures ("company data") | "Angabe des Unternehmens" |
| depiction note ("depiction based on assumptions", "depiction based on the brief") | "Darstellung nach Annahme", "Darstellung nach Brief" |
| "details on request" | "Details auf Anfrage" |
| "details in the meeting" | "Details im Termin" |
| "we'll clarify that in the meeting" | "klären wir im Termin" |
| "more soon" | "bald mehr dazu" |
| "award-winning" as a reason | "preisgekrönt" |

Allowed: the made-up line of a sample case ("Beispielwoche: Baustelle, Mängel und Namen sind erfunden").

**AI labels:** in the image "KI-generiert" (generated) or "mit KI bearbeitet" (edited), with the size and contrast rules of [images-and-assets.md](../images-and-assets.md) 8.7; credits: attribution "Bild: KI-generiert", visible label for example "unten rechts 'KI-generiert', 12 px". Label actions, not features: "Mit KI zusammengefasst" (core: "Summarized with AI") instead of a badge "AI". Legal basis: [eu-dach-compliance.md](eu-dach-compliance.md) 13.

**AI state texts** (German originals of the freight forwarder examples, case C10 in [product-design.md](../use-cases/product-design.md)):

| State | Text pattern |
|---|---|
| Empty | "Frag nach Sendungen, Touren oder Schäden. Ich sehe nur diese Niederlassung." |
| Thinking | "Prüft 27 Sendungen", then "Hat 8 s gearbeitet" |
| Citing | "Laut Tourenplan KW 42, Stopp 7 [2]" |
| Uncertain | "Zwei Sendungen passen. Meinst du die Palette nach Kassel oder die Teilladung nach Fulda?" |
| Tool running | "Sucht im Archiv: Schadensmeldung", then "3 Meldungen gefunden" |
| Approval needed | "Avis an 3 Empfänger senden? Nicht rückgängig zu machen." |
| Error | "Die Quelle antwortet nicht. Bisherige Antwort bleibt erhalten. Erneut versuchen?" |
| Stopped | "Abgebrochen nach Schritt 2 von 4. Tour angelegt, Avis nicht gesendet." |
| Limit reached | "Noch 3 Nachrichten bis 18:40 Uhr." |
| Done | "3 Dateien geändert" |
| Stale | "Keine Aktivität seit 2 Std." |

**The dash in German:** the German dash is U+2013 with a space on each side (Duden D 43 to D 45 set it so [1]); U+2014 belongs to English typography. In design copy one deliberate dash at most, never a cadence (tell E2, [copy.md](../copy.md) 4); a user rule against dashes wins. Ranges: 3.

**"statt" with dative** when the genitive is not recognizable: "statt zehn Ordnern".

**Every text in the image goes through the language check:** grammar and spelling of every text in the image (headline, labels, text in graphics and built interfaces), not only the caption; read it word by word (gate Language, [review.md](../review.md) 3).

**Protective rules** (new in 3.0, to be validated by the language test):

1. **Draft German copy directly in German,** the headline variants too; never translate an English draft (H).
2. **No English Title Case in German headlines:** capitalize the first word and the nouns and names only (Duden D 86 (first word of a heading), D 67 (nouns), D 87 to D 91 (names); primary source checked 2026-10-15 [1]).
3. **No compounds written apart:** "Design System" is wrong; "Designsystem" or "Design-System". Noun compounds are written together, and writing them apart in company or product names does not follow the official rules (Duden D 46); a hyphen may mark unclear compounds, also from foreign words (Duden D 22) (checked 2026-10-15 [1]).
4. **No English genitive apostrophe:** "Annas Café", not "Anna's Café". The normal form has no apostrophe; Duden D 16 allows it only occasionally in business names formed with a personal name ("Andrea's Kiosk"), so never introduce it in copy and keep it only where it is the client's own registered name (checked 2026-10-15 [1]).

## 3 German typography

**Compounds and line breaks** (language-neutral rule: [craft.md](../craft.md) 6.4):

- `lang="de"` on the document, `hyphens: auto` in body text; in display lines soft hyphens (`&shy;`) at the joint of the compound, or rephrase. Never `word-break: break-all`.
- Check the longest word of every display line at the check widths ([review.md](../review.md) 1; tell H2): Quick 1440, 390 and the 320 run, Standard plus 768 for compounds, Studio plus 1024. At 320 and 390 px every long compound breaks only at a hyphenation point, with a hyphen; R4 checks compounds. Build with real German text, never with an English placeholder (H).
- In display type (TYP and other display-led directions) break compounds deliberately or by hand (G10).
- Hyphenated compounds (Durchkopplung) only where correct (Software-Entwicklung, E-Mail), not as a line-break aid.

**Caps and U+1E9E:** caps only via `text-transform: uppercase` with `lang="de"`; the sharp s (U+00DF) then becomes SS (checked). The capital sharp s (U+1E9E) only when the font carries it (5).

**Microtypography** (English values: [craft.md](../craft.md) 6.5):

| Element | Rule |
|---|---|
| Quotation marks | `„…“` (U+201E, U+201C), single `‚…‘` (U+201A, U+2018), in book typography also `»…«`; never straight |
| Apostrophe, ellipsis | `’` (U+2019); `…` (U+2026), also in `Speichert…` |
| Ranges | U+2013 without spaces, or "bis"; if a user rule forbids dashes, "bis" |
| Minus | real minus (U+2212) in numbers |
| Spaces | no-break (`&nbsp;`) between number and unit (`5 km`, `10 %`, `1.299 €`); narrow (`&#8239;`) in abbreviations (`z. B.`) |
| Numbers | decimal comma; thousands with a period or a narrow space, consistently |
| Date | `08.10.2026`; in letters also `2026-10-08` (DIN 5008: TT.MM.JJJJ or JJJJ-MM-TT) |
| Time | `14:30 Uhr` |
| Currency | `1.234,56 €` (amount, no-break space, euro sign after); format through `Intl` with the locale of the variant (`de-DE`, `de-AT`, `de-CH`) |

Search the text for straight quotation marks, three periods, a hyphen with spaces as a dash substitute and a unit without a no-break space (high [2]).

**Text length:** German runs longer than English; design with the longest language and the ratios of [use-cases/README.md](../use-cases/README.md) 7, with real German text.

**`lang` per variant:** at least `lang="de"`; with a variant in contract field 4 `de-DE`, `de-AT` or `de-CH`; check line breaks per variant at the check widths (H).

## 4 Spelling by market

Output copy follows the language and spelling of the audience; the variant stands in contract field 4. House rules for project texts, notes or the skill never change it.

- **Germany (de-DE) and Austria (de-AT): ß** where the rules require it; "heisst" or "grösse" in copy for Germany is an error.
- **Switzerland (de-CH) and Liechtenstein: ss, never ß.**

Word probes (they find candidates only; check every hit in the text):

```bash
# Germany, Austria: ss where U+00DF belongs; lc instead of /i, because /i lets "ss" also match U+00DF
perl -CSD -Mutf8 -ne 'print "$.: $_" if lc =~ /(heiss|weiss|gross|grösse|grösst|schliess|ausser|äusser|strasse|fuss|süss|gemäss|mässig|massnahme|spass|draussen|bloss)/' file.html
# Switzerland, Liechtenstein: any U+00DF
perl -CSD -ne 'print "$.: $_" if /\x{00DF}/' file.html
```

## 5 Fonts: German characters

Check set `de` of `font-check.mjs --lang de`, 16 characters: `ä ö ü Ä Ö Ü`, sharp s U+00DF, capital sharp s U+1E9E, `„ “` (U+201E, U+201C), `‚ ‘` (U+201A, U+2018), euro U+20AC, ellipsis U+2026, minus U+2212, narrow no-break space U+202F; plus tabular figures.

**Finding for the catalog** (2026-10-07, Chrome with a negative control; high):

- All catalog fonts have umlauts, the sharp s, German quotation marks, the euro sign and the ellipsis.
- Without U+1E9E: 12 fonts; without minus: Noto Serif Display; without tabular figures: 16 fonts; all marked in [fonts.md](../fonts.md) 5.
- Sample 2026-10-08 with the font check: Albert Sans, Noto Serif Display, Libre Franklin, Familjen Grotesk, Brygada 1918, Commissioner, Golos Text, Tilt Warp, Imbue, League Spartan, Hanken Grotesk (Google) and Switzer (Fontshare): 12 of 12 as in the catalog, negative control passed.

**Rules:**

1. Caps via `text-transform: uppercase` with `lang="de"`; the sharp s becomes SS (checked). Never set U+1E9E by hand in a font without the character.
2. Negative numbers with a real minus; in Noto Serif Display set numbers in the text face.
3. All catalog fonts have German quotation marks: no straight quotes.
4. Check a new font (weight 400; the script does not check hyphenation, ligatures or kerning; `$S` per [scripts/README.md](../../scripts/README.md)):

```bash
node $S/font-check.mjs --google "Name A,Name B" --lang de
node $S/font-check.mjs --css "https://api.fontshare.com/v2/css?f[]=sentient@400&display=block" --family "Sentient" --lang de
node $S/font-check.mjs --file font.woff2 --family "Test name" --lang de
```

"FONT NOT LOADED" means a wrong name or URL; if the negative control fails, the result is unusable. With English copy in the same job: `--lang de,en` ([fonts.md](../fonts.md) 3).

**Column "de" in the font catalog** ([fonts.md](../fonts.md) 5): "full" means all 16 check characters; otherwise the missing characters are named (for example "without U+1E9E"); "umlauts per the manufacturer" means not checked by script. The credits record the result (for example "font-check: de full, en full").

**Open:** the Commit Mono original files (capital sharp s): the Fontsource build lacks U+1E9E.

## 6 Word lists for the generic check

Mirrored from `scripts/generic-check.mjs`, where German strings sit in lines that end with `// lang:de`; keep both identical (change them together). English lists: [copy.md](../copy.md) 5; catalog with thresholds: [generic-catalog.md](../generic-catalog.md) 3.

| Tell | In the script (German) |
|---|---|
| E1 Buzzwords | nahtlos, revolutionär, mühelos |
| E3 Cadence | "kein", "keine", "nicht" plus a word at the end; "Nicht X. Sondern" |
| E5 Placeholders | Max Mustermann, Erika Mustermann |
| E6 Gap words | "offen:", "folgt:", "wird ergänzt", "Angabe folgt", "folgt in Kürze", brackets with namen, rolle, titel, datum, tag, ort, firma, foto, bild, quelle, preis, zahl, platzhalter, offen, pflicht, adresse, kontakt |
| P1, D9 | "zum Vormonat", "gegenüber Vormonat", "seit letztem Monat", "pro Monat", "/Monat", "häufige Fragen" |

Also German in the script: E5 counts fantasy numbers in German format ("99,9 %", "10.000+") through its number pattern; the D9 pricing pattern also matches "/Monat", and D9 testimonials also match German quotation marks (`„…“`); empty gap elements whose class or aria-label contains offen, lücke, luecke or platzhalter count as E6; D4 stat numbers also accept Mio., Mrd. and €.

E3 counts short sentences of up to 8 words. The skill's own markers count on every page regardless of `lang`, in both languages: `[REQUIRED: ...]`, `[PFLICHT: ...]`, `[open: ...]`, `[offen: ...]`, pattern `/\[(?:REQUIRED|PFLICHT|open|offen)\s*:[^\]]{0,200}\]?/gi` (bounded, so an unclosed bracket cannot swallow the rest of the text). They are counted first and removed before the per-language lists run, so `[offen: Quelle]` counts once. The environmental word list next to E1 is in [eu-dach-compliance.md](eu-dach-compliance.md) 6 (H).

**Candidates, visual list only** (not measured, because no German set of human pages is calibrated): Gamechanger, ganzheitlich, zukunftssicher, Mehrwert, disruptiv, "auf das nächste Level". R3 and the lead agent check them by eye.

**Maintenance:**

- The script is the source; change the script, [generic-catalog.md](../generic-catalog.md) 3, [copy.md](../copy.md) 5 and this section together.
- Each text node is checked against the list of its nearest `lang`, else the document language, else all lists.
- A new German word enters the script only after a false-alarm test on German human pages: no human page may get a new red tell or lose the gate; words that fail stay on the visual list. Without a calibrated German set of human pages, candidates stay visual only.

## 7 DACH formats and expectations

**Letterhead DIN 5008 form B** (medium [3]): A4; header 45 mm; address field 85 x 45 mm, 20 mm from the left and 45 mm from the top (window envelope), on top 3 lines for additions and notes, below them 6 lines of address; text from 25 mm on the left, right margin at least 20 mm; information block from 125 mm; fold marks at 105 and 210 mm, hole mark at 148.5 mm; date TT.MM.JJJJ or JJJJ-MM-TT; following pages without a header, with a page number. Type: letter 10 to 12 pt, note zone about 8 pt. Check: overlay the address window (85 x 45 mm at 20 and 45 mm) on the 794 x 1123 px view. Mandatory notices on business letters and email: [eu-dach-compliance.md](eu-dach-compliance.md) 8.

**Paper and flyer formats:** DIN A6 105 x 148, DIN A5 148 x 210, DIN A4 210 x 297, DIN lang 99 x 210 mm; bleed 1 to 4 mm by print shop, safety margin usually 3 mm (medium [4]).

**Business card:** final format 85 x 55 mm, data format 91 x 61 mm (3 mm bleed per side), safety margin 3 mm (medium [4]); the US format 3.5 x 2 in only on request, check with the print shop.

**Posters** (medium [5]): DIN A1 594 x 841 mm, DIN A0 841 x 1189 mm; Plakat 1/1 59.4 x 84.1 cm, 4/1 119 x 168 cm, City-Light-Poster 118.5 x 175 cm, large format 18/1 356 x 252 cm; print data per vendor.

**DACH trust signals** (medium): name the supervisory authority or license and the data location, at most four curated seals, mandatory notices at reading size (ORD in the Persuade register, website case B2).

**Job ads:** "(m/w/d)" or a neutral title: [eu-dach-compliance.md](eu-dach-compliance.md) 9.

## 8 German originals of the running examples

Key sentences and terms from the German edition 2.5.2, avoiding words with the sharp s or ss where possible. English versions: [dialogue.md](../dialogue.md) and the core files.

- **Zahnarztpraxis Weserbogen, Bremen** (dental practice): direction names "Klarer Ablauf" (ORD), "Gezeiten" (DRW), "Blick auf die Weser" (EDI) (the bold TYP direction of the kickoff, "Big words" in [dialogue.md](../dialogue.md) 2, is left out here because its German name has ss); the bold sentence "Sie dürfen jederzeit Pause sagen."; "Heil- und Kostenplan" (treatment and cost plan); field labels "Kosten", "Kassenleistung" (insurance coverage); button "Termin buchen"; trade-off pair "zu klinisch oder zu verspielt?"; the user's answer "lieber zu ruhig als zu verspielt, aber nicht wie ein Krankenhaus"; draft copy "So läuft Ihr erster Termin"; the notice in the waiting room ("Aushang") with "Terminzettel", "Sprechzeiten" and the first Saturday appointment ("erster Samstagstermin"); signature element "das Handzeichen für Pause".
- **Kaffeerösterei Röstwerk** (coffee roastery): exclusion "Kaffeebohne mit Dampfwölkchen"; tone "handwerklich, trocken"; through-line "eine Röstung vom Rohkaffeesack bis zur Tüte"; success criterion "Röstwerk an der Tüte erkennbar, auch ohne Namen"; image claim "Kapseln landen im Restmüll" (the anchor shows the general waste with capsules, not a cup of coffee); "Neu im Handel" is no headline; side note "auch entkoffeiniert erhältlich"; stand-in "Tüte mit Röstgrad-Skala"; "Röstprotokoll", "Röstetikett".
- **Spedition Nordlicht** (freight forwarder): unclear goal "Mach mir was Schönes für unseren LinkedIn-Kanal"; direction given "wie eine Zeitung, mit Mono-Schrift und nummerierten Abschnitten"; field labels "Haftung", "Haftungsgrenze", "Laufzeiten"; "Frachtbrief"; tour stops from Hamburg to Kassel; AI state texts in 2.
- **Mängelwerk** (Software für Baustellen-Mängelmanagement, Series A): field labels "Datenstandort", "Rechte an den Fotos"; "Mängelliste", "Mängelkarte"; stand-in note "gewünscht: Foto Bauleiterin mit Tablet auf eurer Pilotbaustelle, 1600 x 900"; "Kurve offener Mängel je Woche".
- **Lagerlicht, Nadelöhr** (product design examples): names unchanged.
- **"Software für Bauämter":** German original of "software for building authorities".
- **Tierpark Nordau** (review calibration): "Jahreskarte für Familien"; "Jahreskarte" instead of "Membership" (2).

## Sources

1. Duden, spelling rules, checked 2026-10-15: apostrophe D 16 https://www.duden.de/sprachwissen/rechtschreibregeln/apostroph ; hyphen D 22 https://www.duden.de/sprachwissen/rechtschreibregeln/bindestrich ; dash D 43 to D 45 https://www.duden.de/sprachwissen/rechtschreibregeln/gedankenstrich ; compounds D 46 https://www.duden.de/sprachwissen/rechtschreibregeln/getrennt-und-zusammenschreibung ; capitalization D 67, D 86, D 87 to D 91 https://www.duden.de/sprachwissen/rechtschreibregeln/gross-und-kleinschreibung
2. Vercel Interface Guidelines: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
3. DIN 5008 (secondary): https://de.wikipedia.org/wiki/DIN_5008
4. Print data sheets, business card and flyer: https://wir-machen-druck.de/tpl/manns-partner/media/ddb/druckdatenskizzen/0/visitenkarten_85x55_munkenlynx_40_2.pdf , https://print24.com/uk/printing-products/flyer/flyer-dl
5. crossvertise, poster formats: https://www-cdn.crossvertise.com/production/docs/default-source/documents-plakatwerbung/formate-plakatwerbung.pdf

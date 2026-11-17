# EU and DACH compliance

Legal module for the EU, Germany, Austria and Switzerland. Mechanics (placeholder, two views, triggers checklist): [compliance.md](../compliance.md); accessibility gate: [accessibility.md](../accessibility.md); minimum type size: [use-cases/README.md](../use-cases/README.md) 4; commands, reviewers: [review.md](../review.md); G1 to G14: [directions/README.md](../directions/README.md).

## 0 Scope and status

- **As of 2026-10-08**, 9 and 12 extended 2026-10-23. Germany complete; EU law where it applies across the EU; Austria and Switzerland only where a section says so.
- **Not researched, "check locally":** Austrian imprint and media duties; Swiss unfair competition and data protection law. For these, every fired trigger becomes an open item "check locally" and a recommendation for expert review (14).
- **Austria and Switzerland in all other sections:** sections state German law unless they name EU law (for example the AI Act in 13). Austria: EU law applies, Austrian national law only where a section notes it; German statutes do not apply. Switzerland is not in the EU: EU and German rules do not apply directly. For a publisher or audience in Austria or Switzerland, every fired trigger without an Austria or Switzerland note becomes an open item "check locally" plus a recommendation for expert review (14).
- **No legal advice** (14). The module names triggers, prescribed wording and when to get expert review; it never drafts binding legal texts.
- **Evidence:** high (original), medium (secondary), H (derivation); norms without a label: legal text, high [1]. "Get it reviewed": unconfirmed or a question of interpretation.
- **Prescribed wording stays German and verbatim** (buttons, mandatory sentences, labels). Other wordings: get it reviewed.

## 1 When to load, signals

Load when publisher or audience is in the EU, Germany, Austria or Switzerland and a trigger from [compliance.md](../compliance.md) 3 fires. Signals from stage 0 and their sections: purchase, subscription, price (3, 4, 5); environmental reference (6); finance, health, food, energy (4, 11); tracking, web fonts, business mail (7, 8); people, third-party logos, buildings (9, 10); the company's own images from website or press kit (9, 12); AI content, chat (13). Websites and apps with consumer contracts: accessibility law (2). A live website with tracking or web fonts, email and business mail count as triggers too (7, 8).

Where the use cases point here:

- **Consumer contracts online** (B2C group rule 7, product design group rule 7): accessibility law for the whole flow including login and payment plus an accessibility statement (2); prices (5); order and cancellation buttons (3); environmental claims (6); advertising labels (4). Open `[REQUIRED: ...]` points stand in the review view, never large in the image; mandatory notices only when their trigger is in the medium (unit price and tax note only next to a price; [compliance.md](../compliance.md) 2).
- **Checkout** (case C8), **pricing page** (case B4), **shop and product page** (cases B1, B5): 3 and 5.
- **Website** (case B2), **stationery** (case D3), **transactional email** (case G7): 8.
- **Feed mode with real people, WRM, HER archive photos, employer branding** (case J1): 9.
- **Packaging** (case I4), **food and supplements**: 11.
- **AI features** (case C10), **image generation** ([images-and-assets.md](../images-and-assets.md) 8): 12, 13.

## 2 Accessibility law (BFSG, BITV 2.0, EN 301 549)

Standard WCAG 2.2 AA ([accessibility.md](../accessibility.md) 2, G6), mandatory for services under the BFSG and for public bodies (BITV 2.0); EN 301 549 V4.1.1 (WCAG 2.2) has been published since 2026-09-02, citation in the Official Journal pending (high [2]).

- **Has applied** since 2025-06-28 to websites and apps with consumer contracts, banking, telecommunications and transport services, e-books, terminals, end devices; not to pure B2B. Public bodies: BITV 2.0; federal bodies additionally sign language and Leichte Sprache (easy-to-read German) on the home page.
- **Exempt:** micro-enterprises (under 10 employees, at most EUR 2 million turnover or balance sheet total) only for services; archives, third-party content without control; existing contracts until 2030-06-27.
- **Do:** the whole flow to WCAG 2.2 AA, including login and payment (BFSGV § 19); an accessibility statement as a page or in the terms: service, implementation, requirements met, market surveillance authority (Annex 3). Fines up to EUR 100,000.
- **Open item and question:** accessibility statement, authority (per the state offices the MLBF; medium, get it reviewed). Ask: "Do consumers conclude contracts here? Under 10 employees and at most EUR 2 million?" Default: subject to the BFSG.
- **Product UI** (product design group rule 7, app and web app): when consumers conclude contracts in the app or web app (purchase, subscription, account), the BFSG applies to the whole flow including login and payment, plus the accessibility statement; app checks in [accessibility.md](../accessibility.md) 2.3, order and cancellation in 3.

## 3 Purchase, cancellation, withdrawal

- **Trigger:** consumer contract online for money, also subscriptions.
- **Ordering (§ 312j BGB):** the button says only "zahlungspflichtig bestellen" or something equally unambiguous; directly before it, features, total price, term and cancellation conditions, highlighted; otherwise no contract is formed. H: both within one viewport at 390 px. Other wordings: get it reviewed.
- **Cancelling (§ 312k BGB):** consumer subscriptions, also a term against a one-off payment (BGH I ZR 161/24, medium), not financial services: "Verträge hier kündigen" permanently available, without login; a confirmation page (type, identification, contract, time, contact) with "jetzt kündigen", without alternatives such as "pausieren" and without offers (BGH I ZR 200/25, high [6]).
- **Withdrawal (§ 356a BGB, since 2026-06-19):** every distance contract online while the withdrawal period runs. "Vertrag widerrufen" permanently available and highlighted, fields name, contract, contact, then "Widerruf bestätigen", acknowledgment of receipt with date and time [3].
- **Check and ask:** check the wording by DOM text search; ask "Which term and cancellation details apply?" Default: gap before the button, point in the review view.
- **Checkout** (case C8): order button per § 312j BGB, summary and button within one viewport at 390 px, cancelling and withdrawal reachable; missing mandatory texts as a calm gap in place, `[REQUIRED: ...]` only in the review view. Pricing page (case B4): order and cancellation buttons per this section.

## 4 Equal weight, scarcity, reviews, advertising

- **Trigger:** financial service online; countdown, stock level, stars; paid content.
- **Financial services (since 2026-06-19, Art. 246b § 4 EGBGB [3]):** prohibited are a stronger emphasis of one option in a decision, renewed prompting after the choice, and making it harder to end than to sign up. H: options equal in size, shape and contrast level, without preselection; primary and secondary buttons only for navigation.
- **Scarcity, reviews:** false scarcity and fake reviews are always unfair (Annex to the UWG); state whether and how reviews are checked (§ 5b UWG). Real data only; sample data in a mockup marked in the review view (G7).
- **Advertising** recognizable as such and with its sponsor (§ 6 DDG, § 5a UWG); H: "Anzeige" at the start, not in the hashtag block.
- **Question:** "Are scarcity, reviews and countdown real, from which source?" Default: leave them out.

## 5 Prices

- **Trigger (PAngV):** a price to consumers in the medium itself, also in ads. Without a price in the medium no price lines: a post or an ad without a price carries neither unit price nor tax or shipping note (§§ 3, 4 PAngV attach to offers or advertising that state prices; a shop function with a price in the post: get it reviewed).
- **Do:** total price including VAT, in distance selling a tax and shipping note; unit price (Grundpreis) per 1 kg, 1 l, 1 m, 1 m² or 1 m³, "klar erkennbar und gut lesbar" (not below 10 g or 10 ml); with every discount the lowest price of the last 30 days, and percentages and "Bestpreis" refer to it (§ 11 PAngV; CJEU C-330/23, medium). H: both in the same card as the price, at minimum type size, 4.5:1; no discount badge without a reference price. B2B prices net with "zzgl. USt." (medium).
- **Question:** "Is a discount planned, and what is the lowest price of the last 30 days?" Default: no discount badge, unit price as a gap in the price card, point in the review view.
- **In the use cases:** pricing page (case B4): to consumers the total price including VAT, a strikethrough price only with the lowest price of the last 30 days (high [17]); B2B "zzgl. USt" legible next to the price. Proposal (case A5): B2B net plus VAT, to consumers total prices (high [17]). Shop and landing page (case B1): total price, unit price and shipping at the price; price, unit price, shipping and mandatory notices at least 12 px on the web. Product page (case B5): strikethrough price only with the lowest price of the last 30 days (high [17]). A mandatory line without its trigger (unit price in a post without a price) is a flaw. "Grundpreis" is a term of the PAngV; the core says "unit price where the market requires it".

## 6 Environmental claims (UWG, since 2026-09-27)

- **Trigger:** an environmental reference in copy, image, symbol, seal or name toward consumers (also leaf, globe, green as meaning), also via B2B or investor material ([4], H).
- **Always prohibited:** seals without a certification scheme or a state determination; a generic environmental claim without recognized excellent environmental performance (EU Ecolabel, ISO 14024 type I); a claim about the whole product when only one aspect applies; climate neutrality through offsetting. Future targets only with a public, externally verified implementation plan.
- **Do:** every claim concrete (what, how much, reference unit), highlighted on the same surface, not only in a footnote; otherwise delete it. H: at body text size or larger, 4.5:1, directly at the claim. Green as a pure brand color stays allowed (H).
- **Word list** (H, next to tell E1; a hit means check the claim): umweltfreundlich, nachhaltig, grün, öko, klimaneutral, CO2-neutral, emissionsfrei, Netto-Null, kompensiert, recycelbar, plastikfrei, eco-friendly, sustainable.
- **Open item and question:** proof per claim. Ask: "Which proof (seal with a certification scheme, EU Ecolabel, measured value) carries each environmental claim?" Default: remove the claim; the open question stays only in the review view, never ship it.
- Icon rows with claims such as "vegan" or "cruelty-free" (case B1) and environmental claims on packaging and marketplace images (cases I4, B5) go through this section; energy labels: 11.

## 7 Consent banners, third-party resources, fonts

- **Trigger:** non-essential storage on the device (analytics, marketing, embeds; § 25 TDDDG); every website that is shipped.
- **Banner (high [7]):** reject on the first level, equal in size, color, contrast and typeface, without extra effort and without scrolling on every screen size; "Einstellungen" (settings) does not replace rejecting (also LG München I, 33 O 14776/19). Name the word "Einwilligung" (consent), no euphemistic heading, no re-prompting (VG Hannover, medium); withdrawal via a permanent link. Brand voice allowed (U12). H: same height, fill type and contrast level, from 44 px, text from 16 px, checked at 320 and 390 px.
- **Third-party resources:** dynamically loaded Google Fonts transmit the IP address without a legal basis (LG München I, 3 O 17493/20, high [11]). Delivery: self-host fonts; CDNs, videos and maps locally or after consent; the network list shows no third parties before consent (H). Preview artifacts may use Google Fonts; note it in the wrap-up.
- **Fonts on a live website for the German market:** self-host (`npm install @fontsource-variable/<name>`, files into the project, or TTF from google/fonts); Bunny only for pairings without an axis (column Bunny in [fonts.md](../fonts.md) 4). The general rule "live websites: self-host fonts" is in [fonts.md](../fonts.md) 2.
- **Credits check:** on live websites in the German market, fonts and icons are self-hosted ([templates/credits.md](../../templates/credits.md)).
- **Question:** "Is there tracking or are there embeds?" Default: banner per this section, fonts self-hosted.

## 8 Imprint and business mail

- **Trigger:** commercial website or app; email, letterhead, signature.
- **Imprint (§ 5 DDG):** footer link "Impressum" on every page, also on mobile, not hidden behind the banner; on social in the profile (link or profile text), not in the single post (H). Website (case B2): legal notice (Impressum) and privacy policy (Datenschutz) as their own page types.
- **Business mail (§ 37a HGB, § 35a GmbHG):** company name, legal form, registered office, register court and register number, for a GmbH all managing directors, also in signatures and transactional email (high [18]). A review request in an invoice email is advertising (BGH VI ZR 225/17, medium [19]); advertising to existing customers: get it reviewed. Transactional email (case G7): no advertising content without consent, and the mandatory notices in the footer as in a business letter. Stationery (case D3): the mandatory notices on all business letters, emails included.
- **Image credits:** on a website a footer link "Bildnachweise" to its own page or a section in the Impressum; in print in the Impressum or at the image edge, from 7 pt ([templates/credits.md](../../templates/credits.md)).
- **Question:** "What are the imprint and register details?" Default: footer link "Impressum" and a small register line in the brand voice, missing details as a gap and point in the review view.
- **Austria:** imprint and media duties not researched, check locally (0).

## 9 People and job ads

- **Trigger:** recognizable people (team, testimonial, event, stock); job ad.
- **Images of people (§§ 22, 23 KUG):** only with consent; the exceptions usually do not cover advertising (H). Employees in writing; the consent does not end automatically when they leave (BAG 8 AZR 1010/13, high [12]); GDPR (DSGVO): get it reviewed. Record the location of the consent in the credits ([templates/credits.md](../../templates/credits.md)), stock only with a model release; a consent covers the purpose it was given for (consent for the team page does not cover an ad, H), so the company's own photos from its website need it confirmed for the new use.
- **Where this applies:** feed mode with real people ([directions/README.md](../directions/README.md) 2.2), WRM imagery, HER archive photos (consent also for archive photos), recognizable people in public-domain archives ([images-and-assets.md](../images-and-assets.md) 3.6), cutouts (a cutout changes nothing about § 22 KUG), the brand's own photos with people (credits row "own photos with people": "as the consent allows", here consent per § 22 KUG; [templates/credits.md](../../templates/credits.md) 3).
- **Job ads (§ 11 AGG):** neutral or "(m/w/d)" (practice, H). No other gender requirement found; address per G10 ([german.md](german.md) 2). Employer branding (case J1): job ad visuals with a neutral title or "(m/w/d)".
- **Question:** "Is there consent from the people shown?" Default: no recognizable people; stand-ins from material, place or work situation without a recognizable face, asset request; no generated people.

## 10 Trademarks, customer logos, freedom of panorama

- **Trigger:** a third-party mark, customer, platform or payment logo, a building or art in the image.
- **Third-party marks (§ 23 MarkenG):** naming for identification or compatibility is allowed when fair; a word mark carries less risk than a figurative mark (H). Platform and payment logos only official and unchanged (H, have the guidelines reviewed). Customer logos only real and approved (G7).
- **Freedom of panorama (§ 59 UrhG):** permanent works on public ways, buildings only from outside; not drone shots (BGH I ZR 67/23), not interiors.
- **Question:** "Are the customer logos real and approved?" Default: no logo bar, proof area from existing material, request in the review view. Website (case B2): without approved logos no logo bar; the trust section works with the material available.

## 11 Mandatory notices by industry

Open mandatory point instead of the skill's own wording; in the presentation view only in the place the Form column names and only when the trigger is in the medium ([compliance.md](../compliance.md) 2); form values H unless stated otherwise.

| Industry | Duty | Form |
|---|---|---|
| Medicines | § 4 HWG; outside professional circles "Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihre Ärztin, Ihren Arzt oder in Ihrer Apotheke." | set apart, legible; on TV also spoken; banner: link "Pflichtangaben" (medium); box at body text size or larger |
| Medical devices, treatments, cosmetic surgery | § 11 HWG: no before-and-after images for cosmetic surgery, no recommendations by celebrities or experts, nothing aimed at children under 14; further duties: get it reviewed | image gate |
| Food supplements | only authorized health claims, a note on a balanced diet, the recommended daily intake (medium, get it reviewed) | at the claim |
| Investment | recognizable as advertising (§ 63 WpHG); company name, risk warning at least in the predominant type size, warning about past performance (medium) | the surface of the return claim |
| Prospectus, crypto | prospectus notice with where to obtain it; MiCA mandatory sentence, white paper notice (medium) | footer zone |
| Credit, buy now pay later | with interest or cost figures: net loan amount, borrowing rate, annual percentage rate, representative example (§ 17 PAngV); from 2026-11-20 "Achtung! Kreditaufnahme kostet Geld", clear and prominent [5] | warning at body text size or larger at the rate; apply it to running campaigns now |
| Insurance | product information document in the EU format, status information of the intermediary; online 3 and 4 | do not redesign the format; status in the footer (first contact: get it reviewed) |
| Food | mandatory food information per the LMIV (EU Regulation 1169/2011 on food information to consumers), in distance selling before the purchase (medium) | x-height from 1.2 mm, on a largest surface under 80 cm² from 0.9 mm (high [20]) |
| Electricity, gas | electricity labeling also in advertising (§ 42 EnWG); environmental claims per 6 | graphic, adequately large, legend as text |
| Energy appliances | efficiency class and scale in model advertising (medium) | the official label next to the product image |

Packaging (case I4): the x-height of the mandatory food notices is the minimum type size; print minimum type size otherwise per [use-cases/README.md](../use-cases/README.md) 4.

## 12 Copyright terms and AI output

- **Terms of protection in Germany:** works 70 years after the author's death (§ 64 UrhG), simple photographs 50 years after publication (§ 72 UrhG), photos of public-domain paintings are not newly protected (§ 68 UrhG) (high [13]). Unknown author: only works older than 120 years (H). The core says "check the term of protection in the country of use" ([images-and-assets.md](../images-and-assets.md) 3.6).
- **Reproductions of public-domain two-dimensional works** are not newly protected (§ 68 UrhG, high [14]); this carries HER archive work.
- **AI output:** generated images are not protected by copyright in Germany (medium [15]); hence never use them as a logo or own asset (G3; [images-and-assets.md](../images-and-assets.md) 8).
- **Commissioned photos** (the company's own images from website or press kit): unless the contract names the uses one by one, the rights cover only the purpose of the contract (§ 31 para. 5 UrhG) and the photographer has the right to be named (§ 13 UrhG); the user confirms scope and credit line (H).

## 13 AI labeling

Art. 50 of the AI Act (KI-Verordnung) has applied since 2026-08-02 (high [8], text [16]). Classification, label, IPTC and credits: [images-and-assets.md](../images-and-assets.md) 8.7.

- **Image, video, audio (para. 4):** AI-generated or AI-altered, resembling real persons, objects, places or events and falsely appearing authentic, also an invented person or an embellished product: disclose; for obviously artistic or fictional works an unobtrusive note is enough (high [8]). Advertising usually does not get this relief; a real product in front of a generated background without deception is not covered (medium [9], get it reviewed).
- **Form (para. 5):** clear, distinguishable, at the latest at first contact, accessible: text, not only an icon, also in the alt text, never only in the footer or the terms (high [8]). H: "KI-generiert" or "mit KI bearbeitet" at the image, at minimum type size, 4.5:1; the icon set from the code of practice of 2026-06-10 can be used in addition (high [10]). Check platform labels before every campaign (medium). German label forms: [german.md](german.md) 2.
- **Chat and agents (para. 1, case C10):** visible that an AI answers, at the latest at the first interaction, unless obvious: a mark at the sender, a note in the empty state or in the first answer, a visible handover to a human (high [8], H). Label actions, not features ("Mit KI zusammengefasst" instead of a badge "AI").
- **AI text** on topics of public interest: disclose, unless it is under editorial review and responsibility; reviewed marketing copy usually not (H).
- **Never:** generated faces that resemble real persons; product images with properties the product does not have (§ 5 UWG, H); removing markings. Product photos and cutouts show color, form and surface as in reality (§ 5 UWG).
- **Question:** "May images be generated, and how are they labeled?" Default: no generation; in the wrap-up every labeling and every non-labeling with its reason.

## 14 When to get legal review

This checklist does not replace legal advice. Recommend expert review (lawyer, legal department, data protection) before publishing for every case listed in [compliance.md](../compliance.md) 5. In the EU and DACH this covers third-party marks as figurative marks (logos) (10) and a claimed BFSG exemption (2); in addition, every point of Austrian or Swiss law marked "check locally" (0).

Sentence in a German wrap-up: "Rechtlich relevante Punkte: ... Diese Prüfliste ersetzt keine Rechtsberatung; vor Veröffentlichung von <Stelle> prüfen lassen." English wording: [compliance.md](../compliance.md) 5.

## Sources

1. Gesetze im Internet: https://www.gesetze-im-internet.de/
2. ETSI, EN 301 549: https://www.etsi.org/deliver/etsi_en/301500_301599/301549/
3. BGBl. 2026 I Nr. 28: https://www.recht.bund.de/bgbl/1/2026/28/VO.html
4. BGBl. 2026 I Nr. 43: https://www.recht.bund.de/bgbl/1/2026/43/VO.html
5. BGBl. 2026 I Nr. 139: https://www.recht.bund.de/bgbl/1/2026/139/VO.html
6. BGH, press release 128/2026: https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2026/2026128.html
7. DSK, OH Digitale Dienste: https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf
8. European Commission, guidelines on Art. 50: https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations
9. Reed Smith on Art. 50: https://www.reedsmith.com/our-insights/blogs/viewpoints/102nbz0/transparency-obligations-for-ai-generated-content-the-code-of-practice-adequacy/
10. European Commission, code of practice: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
11. LG München I, 3 O 17493/20: https://www.ihk.de/bergische/recht-und-steuern/wettbewerbsrecht/google-fonts-5646176
12. BAG 8 AZR 1010/13: https://www.bundesarbeitsgericht.de/entscheidung/8-azr-1010-13/
13. UrhG: https://www.gesetze-im-internet.de/urhg/
14. § 68 UrhG: https://www.gesetze-im-internet.de/urhg/__68.html
15. Morgan Lewis, AI and copyright in Germany: https://www.morganlewis.com/de/pubs/2026/06/ai-and-copyright-judicial-landscape-in-germany
16. AI Act, Art. 50: https://artificialintelligenceact.eu/article/50/
17. PAngV: https://www.gesetze-im-internet.de/pangv_2022/
18. § 35a GmbHG, § 37a HGB: https://www.gesetze-im-internet.de/gmbhg/__35a.html , https://www.gesetze-im-internet.de/hgb/__37a.html
19. BGH VI ZR 225/17: https://www.it-recht-kanzlei.de/kundenzufriedenheitsanfrage-rechnung-bgh.html
20. LMIV Art. 13: https://gesetze.legal/eu/vo_eu_2011_1169/13

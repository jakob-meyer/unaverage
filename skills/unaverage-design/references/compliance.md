# Compliance

As of 2026-10-08. Checklist, **no legal advice** (5). Evidence: high (original), medium (secondary), H (derivation). "Get it reviewed": unconfirmed or a question of interpretation. Accessibility gate: [accessibility.md](accessibility.md); minimum type size: [use-cases/README.md](use-cases/README.md) 4; commands, reviewers: [review.md](review.md); G1 to G14: [directions/README.md](directions/README.md). Statutes, prescribed wording, deadlines and sources live in the market modules (4).

## 1 When this file applies

[accessibility.md](accessibility.md) 2 always applies to screens and sent documents, in addition to the gates in SKILL.md. Sections 2 to 4 apply on a signal from stage 0: purchase, subscription, price; environmental reference; finance, health, food, energy; tracking, web fonts, business mail; people, third-party logos, buildings; AI content, chat. The rows in 3 name the trigger, the question and the module section for each signal. A hit becomes a question in the kickoff, a gate in the design contract, an open item in the review view and a line in the wrap-up. A mandatory notice goes into the image only when its trigger is in the medium itself (2). Every hit blocks delivery; exceptions only as a user decision in the design contract.

Legal triggers in the reading plan (SKILL.md): shop, prices and discounts, purchase and cancellation, environmental, health or finance claims, AI features, image generation, photos of people and customer logos, a live website with tracking or web fonts, email and business mail.

## 2 Mandatory notices

Wording that a law prescribes (buttons, mandatory sentences) is set verbatim; everything else the skill does not phrase itself but keeps as an open mandatory point and asks about in the kickoff, with a default for silence:

`[REQUIRED: <type> | wording: <user or legal department> | min size: <value> | source: <norm>]`

**Two views** ([SKILL.md](../SKILL.md) stage 4):

- **Presentation view:** mandatory notices and their placeholders appear only where the real medium must carry them (for example a footer line with a link to the legal notice, a note under the form, the unit price in the price card, the ad label at the start), and only when their trigger is in the medium itself: unit price and tax note only next to a price, a note on the reference price only with a discount, the legal notice in the place of the medium (website footer, profile on social), not on every surface. A signal from stage 0 (1) makes a point subject to checking; on its own it puts no line into the image; a post without a price carries no price line. A mandatory line stands only with its content; a field label without its value (for example a register number or a tax line) never stands in the image, the open point stays in the review view. Set in final form, at minimum type size and 4.5:1, in the brand voice (G14, principle U12); as small as allowed, unless the norm requires size or emphasis (EU and DACH: [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 3, 6, 11). If the wording is still missing, a calm gap set typographically in the same sentence form stands there, never the note `[REQUIRED: ...]` and never a label like "to be added".
- **Review view** (class `review-view` or `open-items.md`): all open mandatory points in the form above, each with its location.
- **Never** put a production note like `[REQUIRED: ...]` into the motif of a post, into a slide or large into the image. On social the mandatory notice goes into the post text, the platform field or a small footer line; on slides into a footer line when the medium requires it.

If a mandatory point is open at the wrap-up, the delivery is called "draft, not ready to publish".

## 3 Legal triggers checklist

One row per trigger: the question in the kickoff, the default when the user is silent, the module section for the EU, Germany, Austria and Switzerland. Accessibility needs no trigger: [accessibility.md](accessibility.md) 2 always applies; its legal duty: [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 2. Other markets: 4. The questions for advertising labels, health, finance, food, energy and job ads are derived from the rule in 1 (H); the others match the questions in the module sections.

| Trigger | Question in the kickoff | Default when silent | EU and DACH |
|---|---|---|---|
| **Purchase and subscription:** consumer contract online for money, also subscriptions | "Which term and cancellation details apply?" | gap before the order button, point in the review view; button wording per market | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 3 |
| **Prices and discounts:** a price to consumers in the medium itself, also in ads; without a price in the medium no price lines | "Is a discount planned, and what is the lowest price of the last 30 days?" | no discount badge; unit price, where the market requires it, as a gap in the price card; point in the review view | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 5 |
| **Scarcity and reviews:** countdown, stock level, stars | "Are scarcity, reviews and countdown real, from which source?" | leave them out; sample data in a mockup marked in the review view (G7) | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 4 |
| **Advertising labels:** paid content, sponsored posts | "Is this paid content, and who is the sponsor?" | label it as advertising at the start, not in the hashtag block (H) | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 4 |
| **Environmental claims:** environmental reference in copy, image, symbol, seal or name toward consumers (also leaf, globe, green as meaning), also via B2B or investor material | "Which proof (seal with a certification scheme, EU Ecolabel, measured value) carries each environmental claim?" | remove the claim; the open question stays only in the review view, never ship it; green as a pure brand color stays allowed (H) | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 6 |
| **Health:** medicines, medical devices, treatments, cosmetic surgery, food supplements | "Which mandatory texts and approved claims apply, and who supplies the wording?" | open mandatory point instead of the skill's own wording; in the presentation view only in its place and only with the trigger in the medium | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 11 |
| **Finance:** financial services online, investment, prospectus, crypto, credit, buy now pay later, insurance | "Which mandatory texts and risk warnings apply, and who supplies the wording?" | options in a decision with equal weight (size, shape, contrast level, no preselection; H); open mandatory point instead of the skill's own wording | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 4, 11 |
| **Food:** mandatory food notices, also in distance selling before the purchase | "Which mandatory food notices apply, and who supplies them?" | open mandatory point in the label's place as a quiet gap, `[REQUIRED: ...]` only in the review view | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 11 |
| **Energy:** electricity, gas, energy-using appliances in advertising | "Which energy labels and efficiency details apply?" | official label next to the product image, open mandatory point | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 11 |
| **People in images:** recognizable people (team, testimonial, event, stock) | "Is there consent from the people shown?" | no recognizable people; stand-ins from material, place or work situation without a recognizable face, asset request; no generated people | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 9 |
| **Customer logos and third-party marks:** third-party mark, customer, platform or payment logo, building or art in the image | "Are the customer logos real and approved?" | no logo bar, proof area from existing material, request in the review view | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 10 |
| **Tracking and third-party resources:** non-essential storage on the device (analytics, marketing, embeds), web fonts and other third-party resources on every website that is shipped | "Is there tracking or are there embeds?" | consent banner with reject on the first level, fonts and other resources self-hosted; preview artifacts may load web fonts, noted in the wrap-up | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 7 |
| **Provider identification:** commercial website or app; email, letterhead, signature, transactional email | "What are the imprint and register details?" | footer link to the legal notice where the market has one and a small register line in the brand voice, missing details as a gap and point in the review view | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 8 |
| **AI content and AI chat:** generated or edited images, video, audio, AI text on topics of public interest, chat and agents | "May images be generated, and how are they labeled?" | no generation; an AI chat says visibly that an AI answers; in the wrap-up every labeling and non-labeling with its reason | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 13; labeling in the image: [images-and-assets.md](images-and-assets.md) 8.7; AI product UI: case C10 in [use-cases/product-design.md](use-cases/product-design.md) |
| **Job ads** | "Which job title wording applies?" | neutral job titles per local law; address per the market module | [eu-dach-compliance.md](markets/eu-dach-compliance.md) 9 |

Questions name the EU form; for other markets ask for the local equivalent.

## 4 Market modules

- **EU, Germany, Austria, Switzerland:** [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md), loaded when publisher or audience is there and a trigger from 3 fires (SKILL.md, Language and market). It carries statutes, prescribed wording, deadlines and sources, stated as German law unless EU law is named; Austria and Switzerland only where it says so, and for them every fired trigger without such a note becomes an open item "check locally" with a recommendation for expert review (module 0; 5 here).
- **Other markets:** no module. Every trigger from 3 that fires becomes an open item "check local rules" in the review view and the wrap-up, with the question from 3 in the kickoff; recommend expert review before publishing (5).

How market modules are built: [markets/README.md](markets/README.md).

## 5 No legal advice: when to get expert review

This checklist does not replace legal advice; it sets prescribed wording, open mandatory points and gates, but judges no individual case. Recommend expert review (lawyer, legal department, data protection) before publishing for: an environmental or climate claim that is meant to stay; health, finance, crypto or insurance advertising; a discount or comparison price; a new purchase, cancellation or withdrawal flow; people without documented consent, celebrities, children; realistic AI images; third-party marks as figurative marks (logos), competitor comparisons, customer logos; a claimed exemption from accessibility law or an unclear consumer contract; every "get it reviewed".

Sentence in the wrap-up: "Legally relevant points: ... This checklist does not replace legal advice; have it reviewed by <party> before publishing." German wording and the EU and DACH list: [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md) 14.

## Sources

The statutes, court rulings and guidance behind every row are listed with strength and as-of date in the market module: [markets/eu-dach-compliance.md](markets/eu-dach-compliance.md), Sources. WCAG and the accessibility sources: [accessibility.md](accessibility.md), Sources.

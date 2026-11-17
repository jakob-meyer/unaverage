# PRO Product as Proof

**In one line:** The real product interface with a continuous, credible case story is the image; the stage stays almost colorless, and color means state.

**Group** I Trust | **Lead effect** W2 Competence (also W1, W3, W4, W13) | **Loudness** quiet to medium (span 1 to 3 of 6) | **Material** a presentable product (a real beta is enough), a strong simple mark or a color motif of its own; otherwise excluded

## 1 Effect

Competent, precise, current ("it exists and already works"). Expert users read attention to detail (IDs, timestamps, amounts) as product quality; a real product image carries the value proposition faster than a claim [4] (medium). Without a real product the same audience recognizes the copy: the look counts as the most copied SaaS surface since 2022 [1] (medium).

## 2 Fits, does not fit

| Field | Content |
|---|---|
| home | Cases A2, B1 B2B, B2 B2B, C7, F2, J2 (software) |
| good | Cases A1, A5, B1 B2C (prosumer), B4, B5, E1 B2B, E2, F1, G2, G4, G7, H2, J3, X1, X4, X5; changelog, screenshot carousel |
| accent only | Cases A3, A4, B2 B2C, B3, C1 to C6, C8 to C10 (UI per the Operate register), D2, E1 B2C, E3, F3, F4, G1, G3, G6, H1, I1, I2, J1, J4, X2 |
| never | Cases D1, D3, G5, I3, I4, I5, X3 |
| industries | B2B SaaS, developer tools, AI products, fintech infrastructure, productivity, platforms with product lines, prosumer tools, B2C apps with real-time data |
| B2B, B2C | startups and B2B strong; B2C only for prosumer products |
| category default | R0 for B2B SaaS, dev tools, AI products, hardware launches (caricature: dark stage, glow, icon cards): only with a motif of its own from logo or product and a mandatory accent |
| does not fit | product not presentable or still being built (then ORD, RUL or ONE); physical products without an interface (then STI); low-involvement B2C |

## 3 Principle and evidence

Proof, not claim (U7): what the product can do, its interface shows in a real work step. Roots: Swiss typography, the Apple product page, Stripe with an accessible color system [2] (medium).

**Anchor decision tree** (H), before building:

1. Presentable product: product UI with a case story (reference: Linear; reference: Ramp with a live counter from its own data).
2. Product usable in seconds: the tool itself as the hero (reference: DeepL).
3. Strong simple mark: the mark as a lit object (reference: Vercel) or its geometry as light (reference: Raycast).
4. Broad portfolio and a high need for seriousness: a color motif of its own plus mini interfaces with realistic amounts (reference: Stripe).
5. None of these applies: do not offer the direction.

The rules for the UI in the product image (state colors, actual against plan, step roles) come from reference: Flighty (Apple Design Award 2023 [3]), Copilot Money (the app, not the website) and Geist; they apply in the Operate register and are not part of the corridors in section 5 (high for the products). Counterexamples: Personio, Attio and the Copilot Money website (Glass look), Pitch Series B (competent mediocrity).

## 4 Parameters

**Typography**

| Parameter | Value |
|---|---|
| Classes | one sans with intermediate weights as the main voice; mono only for IDs, code and values; a house typeface takes precedence. A serif as the second voice, only for stance and customer quotes, is the most effective mandatory accent when the category already looks like this |
| Scale | marketing desktop 3.5 to 4.8; mobile 1.8 to 3.5; UI in the product image per the Operate register |
| Weights | display 300 to 600, with variable families an intermediate weight (450, 510); text 400; no 700 to 900 in display |
| Tracking | display 0 to -0.03 em, down to -0.06 em only with a typeface built for it from about 56 px; display line height 1.0 to 1.1; UI text 0; mono labels +0.02 em |
| Setting | flush left; two-tone setting instead of a subline (statement in full strength, explanation at the same size with about 60% lightness); `h1` at most 8 words; install path or system requirement small under the button; microtypography with a function (relative time, IDs as a prefix, truncated middle, tabular figures) |

Pairings (starting points; check status per pairing in [fonts.md](../fonts.md)):

- Pairing A: Spline Sans 500 display and 400 text, Spline Sans Mono for data; one design family, without italics ([fonts.md](../fonts.md)).
- Pairing B: Funnel Display 500, Funnel Sans 400, Azeret Mono for values; the strongest figure pairing for dashboards ([fonts.md](../fonts.md)).
- Pairing C (with a mandatory accent): Host Grotesk 400 and 500 plus Petrona 400 and italic only for stance and customer quotes ([fonts.md](../fonts.md)).

Inter only as UI text in the product image. Geist, Geist Mono, Mona Sans, IBM Plex, JetBrains Mono, Space Grotesk and Instrument Sans carry the echo of the role models: as a display voice only with exactly one deliberate axis and a reason, otherwise yellow (tell A1).

**Color**

| Parameter | Value |
|---|---|
| Logic | color belongs to state. Default: surface achromatic (OKLCH chroma up to 0.01), brand color only for action, status colors only in the UI. Loud: exactly one color motif of its own from logo geometry or product carries the color, the typography stays colorless; gradient text only with a visible color source in the same image; third-party colors only where a customer brand speaks |
| Saturation strategy (G4) | default B with a tight value up to 2% (only action and status colors); loud B 14 to 20% from exactly one motif |
| Shares | ground 60 to 70%; product stage 15 to 25%; action under 1%; state colors as a dot, symbol or line under 2% |
| Action color | from the brand; not in the violet-indigo band (tell B1), not cyan on dark (tell B2), no unchanged Tailwind or shadcn values (tell B6) |

Starter palette (placeholder; the brand color replaces the action color, then recalculate):

| Role | Hex | Contrast (WCAG, recalculated) |
|---|---|---|
| Ground, product stage | #FAFAF9, #EEEFEC | |
| Text | #15171A | 17.19:1 on ground, 15.56:1 on stage |
| Secondary text | #5B6068 | 6.06:1 on ground, 5.48:1 on stage |
| Line | #DCDDDA | decorative |
| Action | #0A6E5C | white on it 6.18:1; as text 5.92:1 |
| Success, warning, error, info | #23804A, #9A6700, #CF3B33, #2F6FD0 | 4.72 / 4.66 / 4.65 / 4.67:1 on ground |
| Dark, only with a scene reason (G9) | ground #0E0F11, surface #17191C, text #ECEDEE, secondary #9A9FA6, action #5FC4AE | text 16.36:1; secondary 7.20:1 and 6.61:1; action 9.13:1, dark type on it 9.13:1 |

**Layout:** 12 columns or a field to the edge with a 24 px side margin. Product image dense, surroundings empty; the product image cropped over the right edge. Hero flush left or in three parts, centered only with a reason; a recurring chapter silhouette (title left, product image wide), variety comes from the content; zigzag instead of lockstep.

**Imagery:** the real interface as HTML or a screenshot in full sharpness, cropped and faded out instead of in a browser frame; a continuous sample story with names, IDs, amounts in local currency and timestamps, introduced as made up on persuasion surfaces ([craft.md](../craft.md) 5.1, point 9); customer interfaces with a metric as proof; a rebuild of the usage environment as the stage; on mobile, simplified states of their own instead of a scaled-down desktop image.

**Form:** 1 px panels with light instead of cards with shadows; radii 6 to 12 px in the UI, marketing panels up to 20 px, one radius per level; at most one elevation level; glow only on the brand object; no tilted browser frame.

**Signature elements** (at least one): 1 case story across all chapters, one work step per chapter; 2 logo geometry enlarged, blurred and lit as the hero motif; 3 brand mark as an object in backlight; 4 a live number with a real data source instead of a superlative; 5 a mini interface as proof per claim; 6 a usable tool in the hero; 7 a copyable action for the audience (install command, agent instruction) instead of "Learn more".

**Motion:** animate product states (a task gets done, an amount posts); 150 to 400 ms ease-out, only transform and opacity; no perpetual loop except a real product state (tell D10); `prefers-reduced-motion`.

**Data:** actual against plan with a dashed target path; future hatched, past dimmed; color only the deviation; every metric with a reference (customer, period, previous period); no stat banner (tells D4, E5).

**Iconography:** state as a symbol family from variants of one basic shape, color as a dot; no icon tiles in marketing (tell C8); standard icon sets only inside the UI, never as imagery (tell C10).

## 5 Measurable targets

Modes by color: **State** (achromatic; reference: Linear, Ramp, DeepL, Vercel) and **Motif** (one color motif or logo light; reference: Stripe, Raycast). Corridors are starting values (H) and include these six references; tolerance in [review.md](../review.md).

| Metric | Corridor | Tool field | Reference values |
|---|---|---|---|
| Scale desktop | 3.5 to 4.8 | `typography.scaleRatio` | Stripe, DeepL 3.5; Ramp, Vercel, Raycast 4.57; Linear 4.8 |
| Scale mobile | 1.8 to 3.5 | `scaleRatio` at 390 x 844 | DeepL 1.75; Stripe 2.13; Linear 2.53; Raycast 2.57; Vercel 3.43 |
| Sizes | 7 to 15 | `typography.distinctSizes` | Vercel 7; DeepL 11; Ramp 12; Linear, Raycast 14; Stripe 15 |
| Display | weight 300 to 600; tracking 0 to -0.06 em; line height 1.0 to 1.1 | `typography.largestText` | Stripe 300; DeepL 300; Vercel 400 and -0.06; Ramp 400; Linear 510 and -0.022; Raycast 600 and 1.1 |
| Anchor area first screen | from 0.35; mark as an object from 0.15 | visual (`fold.imageAreaShare` does not count HTML UI and WebGL) | Stripe 0.35 to 0.40; DeepL about 0.37; Linear 0.42; Ramp 0.45; Raycast 0.85; Vercel about 0.20 |
| Marketing words first screen | 20 to 80 without UI text and navigation | visual, `fold.words` | Raycast 45, Vercel 64, Ramp 76; measured with UI text up to 161 (Linear) |
| Actions in the hero | 1 to 3, exactly one emphasized | visual | Linear 1; Raycast, Stripe 2; Ramp 3 with an email field |
| Card grids | at most 2; tiles unequal, each with its own product object | `surfaces.cardGrids` | Stripe, Vercel 0; Ramp 1; Linear, Raycast, DeepL 2 |
| Glows | State 0; Motif up to 10, only on the brand object | `surfaces.glows` | Linear, Vercel, Ramp, DeepL 0; Stripe 1; Raycast 9 |
| Gradients | decorative 0; masks and brand light count in the measurement | `surfaces.gradients`, visual | Vercel 7, DeepL 13, Stripe 22, Linear 42 (masks), Raycast 237 (logo light) |
| Mono share | at most 0.16, only code, IDs, values | `typography.monoShare` | Linear 0.161; Vercel 0.10; Raycast 0.074 |
| Centering | at most 0.13 | `typography.centeredShare` | Vercel 0.049 to Stripe 0.126 |
| Saturated pixels first screen | State B tight at most 0.02; Motif 0.14 to 0.20 from exactly one motif | pixels `saturatedShare` | Vercel 0; Linear 0.0003; Ramp 0.010; DeepL 0.017; Stripe 0.185; Raycast 0.190 |
| Calm area | 0.45 to 0.87 | pixels `calmAreaShare` | Ramp 0.46; Stripe 0.58; Raycast 0.66; DeepL 0.67; Linear 0.71; Vercel 0.87 |
| Radii | UI 6 to 12 px; marketing panels up to 20 px | `surfaces.radii` | Linear 6 to 12; Ramp 12 and 16; Raycast 16 and 20 |
| Action color | under 1% of the surface | visual, pixels `palette` | Linear 0.3%, Stripe 0.4% |

Mandatory, not a corridor: body and secondary text from 4.5:1 (Linear with 123 of 400 text spots below the threshold is no model). Generic index stricter than universal: at most 1 after documented exceptions (house typeface via `--allow-fonts`, motif and logo light via `--brand-colors`, chosen tells via `--intentional`), because this direction lies closest to the AI median (H).

## 6 Dose

| Level | What changes |
|---|---|
| quiet | light, State mode, the product at life size per chapter, the action color is the only color, scale about 3.5 (reference: Ramp, DeepL) |
| medium | case story across all chapters, two-tone setting, customer interfaces with a metric, animated UI states, mono for data, scale 4 to 4.8 (reference: Linear) |
| loud | Motif mode (one color motif) or the logo as light in the hero, live counter, usable tool in the hero; dark stage only with a scene reason (G9; reference: Stripe, Raycast) |

## 7 AI trap

- **AI proximity:** very high, the highest caricature risk of all directions (warning).
- **Caricature "Linear costume":** centered `h1` in Inter 700 with a violet gradient word, eyebrow pill "New", two buttons, screenshot in a tilted browser frame with glow and Acme data, gray logo bar, three to six identical icon cards, stat row "10x faster", gradient band "Ready to get started?". Second wave: black stage, Geist, mono labels and a grid without content, that is, the costume without a wearer.
- **Mechanism:** trait instead of principle (dark, glow, bento instead of product) and missing material; the originals have themselves become templates.
- **Review question:** Does every motif, color and effect come from product, logo, customer, usage scene or data, and is the product recognizable with the logo covered?
- **Countermeasure:** anchor decision tree before building; without a presentable product do not offer it; write the case story before the layout; a mandatory accent from EDI, DRW or M-HUM when the category already looks like this; display voice per section 4.
- **Watch list** ([generic-catalog.md](../generic-catalog.md)): tells A1, A3, A4, A5, B1, B2, B4, B6, C1, C2, C3, C4, C8, C10, C14, D1, D2, D3, D4, E5; clusters Stock hero, Glass look, Neon dark, Card kit; V1, V2, V3, V4, V5, V12, V18.

## 8 Media notes by register

| Register | What differs |
|---|---|
| Operate | PRO is the marketing shell; the UI itself follows the Operate register with ORD (team) or STI (solo work) as the skin; tokens with roles (about 10 steps per scale), theme from a few OKLCH variables |
| Persuade | product in the first screen, chapters as work steps, customer interface plus a number as proof; mobile is its own edit: shorten, rearrange (image before title), omit, replace (customer pages in their mobile version). Case C7: real UI mandatory, one message per screen |
| Read | sales and investor deck: assertion title plus one real screenshot per feature slide, product cropped, case story across the slides, layout changes only with a new content type, never as bento. Case study with a product view plus a result number; changelog and docs with mono only for code; a whitepaper is better in DAT |
| Feed | product state as an image (before, after) or a clip with exactly one state change; first post line with a number of its own; UI text the viewer must read: at least 24 px at 1080 px width; otherwise treat the UI as an image and require nothing to be read; platform-native feed mode does not fit |
| Distance | UI text never required reading; one product state as a large form with one message (H) |

## 9 Combination

| Role | Partner |
|---|---|
| good accents | EDI (a book serif only for stance and customer quotes), DRW (characters at the window edge or a physical metaphor), M-HUM (handwritten note), RUL (chapter color per product line), M-MOT (product states) |
| only as a moment | M-SPA (logo object in light) |
| as an accent on | ORD (product crops in order), DAT (dashboards), WRM (UI chips over an everyday photo) |
| never | MAX as a base mix (loudness eats the proof), glass as a surface, neumorphism, platform-native feed mode |

Modules: [modules.md](modules.md). Rules for base plus accent: [README.md](README.md).

## Sources

1. Rectangle, The Linear effect: https://rectangle.substack.com/p/the-linear-effect
2. Stripe, Accessible color systems: https://stripe.com/blog/accessible-color-systems
3. Apple Design Awards 2023: https://developer.apple.com/design/awards/2023
4. Nielsen Norman Group, Photos as Web Content: https://www.nngroup.com/articles/photos-as-web-content/

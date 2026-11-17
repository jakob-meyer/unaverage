# Modules: Motion, Space, Trace, Quote

As of 2026-10-08. Evidence strength: high, medium (also own measurement of references), H (derivation). Sources at the end.

Modules are not directions but building blocks with their own rules that any direction can take up. Ground rules G1 to G14 and the combination rules from [README.md](README.md), section 12 apply:

- **Counting:** M-SPA, M-HUM and M-TRD count as an accent (at most one per surface, two per project, G12). M-MOT does not count, because every direction has motion; only the dose is chosen.
- **Material:** M-SPA and M-HUM only with real material (table below). Without material the module drops out or is translated statically; never fake it with filters, script fonts or generated substitute images.
- **Origin:** every module needs a reason from content, name or product (G2), recorded in the design contract.

| Module | Required material | Without material |
|---|---|---|
| M-MOT | one nameable motion idea from content or name | only feedback and state changes (dose quiet) |
| M-SPA | a model of its own, a product render, scan or scene | static translation (material photo, chapter word, color change) |
| M-HUM | real scans, handwriting, print traces, analog photos; with an informal voice the skill's doodles as a substitute, with a reason | drops out; never filters, script fonts or fake tape |
| M-TRD | a connection between the quotation and the product or audience | drops out |

## M-MOT Motion

**Principle:** one motion idea per brand, derived from content or name; the reduced version is complete in its own right. Reference: Natural History Museum (wave, grow, pulse, orbit), reference: Vevo (scale, stagger), reference: Deezer (swing) (medium [1][2]).

**Use:**

| Dose | Where | Typical base |
|---|---|---|
| quiet | only feedback and state changes | ORD, DAT, STI, register Operate |
| medium | one signature motion in the hero, transitions, loading state | EDI, RUL, ONE, PRO |
| loud | motion-first identity or kinetic typography | RUL (reference: Vevo), TYP |

**Rules:**

| Topic | Rule |
|---|---|
| UI timing | feedback about 100 ms; popover 150 to 200 ms; modal 200 to 300 ms; upper limit 400 ms (the skill's own setting; NN/g names 100 to 500 ms); from 500 ms it feels sluggish (high [3]) |
| Curves | entry ease-out, start from `scale(0.93)`, press `scale(0.97)`; animate only `transform` and `opacity`; interruptible at any time |
| No animation | for keyboard and high-frequency actions (typing, navigating lists, shortcuts) |
| Text and identity | text beats 0.5 to 1.5 s per statement; motion identity 300 to 600 ms per gesture; scroll coupling only for data and narrative, never scroll-jacking |
| Accessibility | `prefers-reduced-motion` with a complete static version; autoplay over 5 s pausable; nothing essential only in motion (high [4]) |
| Targets | exactly 1 named motion idea; tell D10 (decorative perpetual animation) ok or justified by the named idea; loops with a visible pause control |
| Handover | moving image, reels and spots go to a video skill; unaverage-design delivers covers, subtitle typography and end cards in the same system |

**Limits (AI trap):** every element slides in from below on scroll; marquee; typewriter effect; `transition: all`; bounce everywhere; parallax without a reason; cursor effects as the hero (tell D10). Countermeasure: name one idea and keep everything else static.

**Review question:** Can the motion idea be named in one word, and does it come from content or name?

## M-SPA Space and Scene

**Principle:** the brand's own object or a pictorial name becomes a scene with light and depth, for exactly one moment and under a small, calm control layer. The z-axis is hierarchy, not decoration. Effect W7 Wonder, plus W11 Talkability.

**Evidence:** Reference: Igloo Inc., Lusion, Lando Norris (Awwwards Site of the Year 2024, 2023, 2025; high [5]); reference: Apple AirPods (X-ray and exploded view), DeepL (cube made of letterforms), Wise (painted globe), Mercury (soft 3D from one material family), Stripe Press (WebGL only for the core object) (medium). Counter-evidence: usability is the weakest jury score of Awwwards winners (Igloo accessibility 6.60 against animation 9.60); two of three rendered winning sites showed only a loading screen in the test (medium).

**Use:**

| Dose | Implementation | Effort level |
|---|---|---|
| quiet | static translation: material photo with depth, rendered still, CSS color change on scroll, oversized chapter word, archive collage | all, in Quick only this |
| medium | one 3D object in the hero (logo or product) with scroll-coupled rotation, the rest in the base direction | Standard, Studio |
| loud | WebGL scene as an experience sequence with a camera move | Studio only, with a static fallback |

**Rules:**

| Topic | Rule |
|---|---|
| Object | the real product (render, scan, exploded or X-ray view) or a symbolic object from the product core with material; a name can become a place (reference: Igloo) |
| Dose | one immersive moment, not a permanent state; the rest calm and legible (reference: Lusion) |
| Color | from material and light; tinted darks (olive, navy, blue-gray) instead of #000; glow comes from the light of the scene, never as an effect layer (0 CSS glows on all four award sites, medium); dark only with a scene reason (G9) |
| Starter palette scene | stage #1A1D22 (OKLCH L 0.23); light and text #E9EDF2 (14.37:1); function layer #9AA3AD (6.61:1); signal #F2E15A on at most 3% of the text characters (12.63:1); material color from the object |
| Typography | small function layer with domain data in fixed corners; scale flat at about 1.2 or from 6.5; never the template headline of 48 to 64 px. Minimum type size per [use-cases/README.md](../use-cases/README.md) (a decorative function layer without a reading duty from 11 px with 4.5:1) |
| Mandatory | text in the DOM; no loading screen; LCP under 2.5 s, CLS under 0.1 (high [6]); reduced motion with a complete static version; the main action reachable in a fixed corner without going through the experience |
| Sources | Poly Haven, ambientCG, Smithsonian 3D (CC0); license into the credits ([images-and-assets.md](../images-and-assets.md)) |
| Targets | CSS glows 0; gradients at most 1; card grids 0; visible words in the first screen 11 to 34; saturated pixels at most 0.15, a single scene image up to 0.6; contrast 4.5:1 at the least favorable point; generic index at most 1 (stricter than universal) |

**Combination:** accent to PRO (logo object in light), STI (exploded view), EDI (immersive moment), RUL (primitive as an object), MAX (chunky play objects), WRM (soft 3D); on ORD as order (reference: Lusion).

**Limits:** never in the Operate register, never as a data carrier for DAT, never in the platform-native feed mode, never as an experience on RAW. AI trap: glow blobs, shiny spheres and torus shapes, particles across the whole page, clay icons, isometric office scenes, glass cards on a blob gradient, loading screen with a percentage, neon on near-black (tells B4, C3, C4, C12).

**Review question:** Does the object show something that exists only here, and does the page also work without the experience?

## M-HUM Human Trace

**Principle:** real traces of the human hand (scan, handwriting, print, collage, analog photography, clay) in a few reasoned places make design credible and hard to copy. Effect W10 Authenticity, plus W8 Closeness.

**Evidence:** Reference: Graza (D&AD 2023 Graphite Pencil Packaging), Oatly "Help Dad" (Cannes 2021, two Gold Lions), Glossier (two brush doodles, one sticker, one handwritten link), Lupi (brush stroke bound to data), Clay (fingerprint in the clay), Scout Motors (paper grain from scans) (medium). Trend reports for 2026 name the handmade and the analog as a countermovement to AI smoothness (H, platform statements [7][8]).

**Use:**

| Dose | Extent | Base |
|---|---|---|
| Accent | 1 to 3 places per surface, about 10 to 20% of the surface or exactly one role | most frequent accent: ORD (precise but human), EDI (personal brand), PRO (software with a hand), WRM, DAT (data humanism), STI (collage contained in a still frame) |
| Imagery | carries the surfaces | only on MAX, RAW or HER (reference: Graza, Oatly) |

**Rules:**

| Topic | Rule |
|---|---|
| Trace types | signature, handwritten note, ink, riso, stamp, wood type, collage from own material, analog photo, clay, paper scan; CC0 textures only as material, never as a filter |
| Type | from the base direction; real handwriting only as a scan; never handwriting or script fonts as a substitute |
| Color | paper colors from the scan; solid print colors with overprint (two to three); text in the brand dark instead of black (reference: Graza) |
| Motion | stop motion at 8 to 12 frames per second, hand gesture, paper; a visible pause control (M-MOT) |
| Data | hand annotation on charts with a leader line to the data point; a glyph per unit only with data binding (reference: Lupi) |
| Origin | every trace in the credits file: who, when, with what; reasoned from the content (handwriting, because a founder writes) |
| Targets | origin 100% real; grain only from a material scan with opacity under 10%; handwriting fonts 0; gradients and glows 0; edge density of the whole surface at most 0.22, raised only in trace zones (medium); tell A5 is a false alarm when the brand uses a typewriter or mono house typeface |

**Skill doodles (option, not default):** the vector accents in [assets/doodles](../../assets/doodles/README.md) (scribble circle, underline, arrows, marker stroke, wavy line, sparks, star) are drawn traces of second choice, not a real hand trace. Allowed only:

1. with an informal voice (informal address, B2C, founder communication, learning and everyday apps), with a reason from brand or content in the design contract;
2. at most 1 to 2 per surface, each pointing at exactly one element (number, word, action); color through `currentColor` from the brand palette, rotation 2 to 6 degrees;
3. as an accent, never as imagery, never in risk categories with formal address, never next to a real trace of the same kind;
4. a marker stroke or underline in the main headline makes an accent word (tell A3): only with a reason, otherwise on a number or in body text;
5. listed in the credits as a skill asset, never passed off as the brand's own hand.

**Limits (AI trap):** noise filter over everything, fake tape, scribble arrows without a target, handwriting font, torn-paper overlay, generated "clay" with a smooth surface. Never with glass or glossy 3D. Countermeasure: ask the user for scans, drawings or photos, or have them made (scan paper, draw with a pen and photograph it).

**Review question:** Is the trace real or a filter, who made it, and what does it point at?

## M-TRD Trend Quote

**Principle:** Y2K, chrome, Frutiger Aero, glass, hard offset shadows, pixel typefaces and neo-brutalism as a look appear only as a single, dated quotation with a reason, never as a base.

**Use:** at most one quotation per project; it occupies exactly one axis (for example only the controls or only one chapter opener); date stamp 2026-10, check yearly.

**Rules:**

| Quotation | Rule |
|---|---|
| Glass | only over real content (navigation over photo or video), contrast measured at the least favorable point (4.5:1 text, 3:1 controls). Liquid Glass was walked back twice within one year (Clear and Tinted switch in iOS 26.1, transparency slider in iOS 27) (high [9][10]) |
| Neo-brutalism | hard shadows only on one class of clickable elements, as the loud dose of RAW; when chosen deliberately, exempt it in the generic check with `--intentional C13` (tell C13 is red from 6 shadows); the look is fading (medium) |
| Nostalgia | Y2K, Frutiger Aero, Googie only with a connection to the product or audience; as an era with an origin it belongs to HER |
| Pixel and chrome type | only as a one-line display quotation, never as reading text |

**Limits (AI trap):** glassmorphism cards on a blob gradient (tell C4 in the Glass look cluster), chrome 3D type, neo-brutalism on everything, several quotations at once. Neumorphism is excluded (structurally below WCAG AA).

**Review question:** Which one quotation carries the surface, why this one, and is it dated?

## Sources

1. Natural History Museum, Pentagram and Nomad (It's Nice That): https://www.itsnicethat.com/news/pentagram-nomad-natural-history-museum-graphic-design-190723
2. D&AD, Vevo: https://www.dandad.org/work/d-ad-awards-archive/vevo ; Deezer: https://www.dandad.org/work/d-ad-awards-archive/deezer
3. NN/g, Animation Duration: https://www.nngroup.com/articles/animation-duration/
4. W3C, WCAG 2.2 Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
5. Awwwards, Sites of the Year: https://www.awwwards.com/websites/sites_of_the_year/
6. web.dev, Core Web Vitals: https://web.dev/articles/vitals
7. Dieline 2026 Trend Report: https://thedieline.com/dielines-2026-trend-report/
8. Canva Design Trends 2026 (Campaign Brief): https://campaignbrief.com/?p=305692
9. NN/g, Liquid Glass: https://www.nngroup.com/articles/liquid-glass/
10. MacRumors, Liquid Glass in iOS 27: https://www.macrumors.com/2026/06/10/how-liquid-glass-is-changing-in-ios-27/

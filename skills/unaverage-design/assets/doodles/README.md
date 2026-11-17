# Skill doodles (option)

Drawn accents of second choice: not a real hand trace and never the brand's hand. Only following [modules.md](../../references/directions/modules.md), module M-HUM: with an informal voice, with a reason from brand or content in the design contract, at most 1 to 2 per surface, listed in the credits as a skill asset. Real scans or drawings by the user come first. All files use `currentColor`; the color comes from the CSS property `color` of the parent element.

| File | Use |
|---|---|
| `scribble-circle.svg` | circle a key word or number. Set it slightly larger than the word and rotate it slightly |
| `underline.svg` | emphasize a single word below the baseline |
| `double-underline.svg` | stronger emphasis, sparingly |
| `curved-arrow.svg` | point from the text to the most important image element |
| `loop-arrow.svg` | playful pointer, rather for a casual tone |
| `sparks.svg` | attention on an action or a button; never as an AI symbol (sparkles for AI are generic) |
| `star.svg` | filled glint, small next to highlights |
| `marker-stroke.svg` | highlighter behind a word, sits under the text |
| `wavy-line.svg` | casual underline or divider |

## Use

- Embed inline as SVG or as `<img>` with width and height. Inline allows coloring through `color`.
- The stroke width stays the same when scaling (`vector-effect="non-scaling-stroke"`). Scribble circle, underline, double underline, marker stroke and wavy line stretch to the word width (`preserveAspectRatio="none"`).
- Position the accent absolutely above or below the word, the marker stroke with `z-index` behind the text.
- A slight rotation of 2 to 6 degrees looks more natural than an exact alignment.
- One to two accents per surface. An accent always points at exactly one element.
- In a main headline a marker stroke or underline creates an accent word (tell A3): only with a reason.

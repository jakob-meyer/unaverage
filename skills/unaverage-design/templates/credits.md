# Template: Credits

Every output gets, in the same folder, `CREDITS.md` for people and, from Standard, `credits.json` for reviewers and gates; in Quick `CREDITS.md` with one line per source is enough. Create the entry when the asset goes in, not at the end. Basis: title, author, source, license (TASL, high [1]) plus retrieval date, license duties and a check note. Rules on sources, archives and image generation: [images-and-assets.md](../references/images-and-assets.md); font licenses and embedding: [fonts.md](../references/fonts.md).

## 1 CREDITS.md

```markdown
# Credits: [project, output]
As of: YYYY-MM-DD

## Fonts
- [Family], [foundry], [license with version], [source URL], retrieved [date]. Embedding: [self-hosted, OFL.txt included]. Checked: [font-check: de full, en full; tabular figures].

## Images
- “[Title]”, [author], [year], [archive or platform], [license], [object page], retrieved [date]. [Modifications]. Used in: [file, surface].
- Own photo [motif], [photographer], own rights. People: consent on file ([where the record is kept]).
- Screenshot [view], own product, demo data, no customer data.

## Generated images
- [Motif], generated with [service, model] on [date], approval [who, when]. Labeling: [visible where, IPTC source type]. Image brief: [path].

## Icons, textures, 3D, traces
- [Set, weight], [license], [repository], version [x]. License notice in the source code.
- Trace [scan, handwriting, doodle]: [who], [when], [with what].

## Data and quotes
- [Figure or quote], [source with period], [approval, if a quote].

## Stand-ins and open requests
- [Surface]: stand-in [type, motif, credits ID]; wanted [motif, dimensions], requested on [date].

## Visible attributions (required)
- [Text and location] or "none"
```

Example line:

```markdown
- “Wheat Field with Cypresses”, Vincent van Gogh, 1889, The Metropolitan Museum of Art, CC0 1.0, https://www.metmuseum.org/art/collection/search/436535, retrieved 2026-10-07. Cropped, tinted. Used in: index.html, chapter 2.
```

## 2 credits.json

Structure: `{"project": "...", "as_of": "YYYY-MM-DD", "entries": [...], "stand_ins": [...]}`. One entry per asset; the same asset in several places gets one entry with several `used_in` values.

### 2.1 Required fields per entry

| Field | Content |
|---|---|
| `id` | unique, with a prefix by type: `font-archivo`, `photo-met-436535`, `screen-dashboard-01`, `gen-header-01` |
| `type` | font, photo, archive_image, screenshot, illustration, icon, texture, 3d, trace, data, quote, logo, frame, generated |
| `title` | title of the work or name of the font, when there is one |
| `author` | person, foundry, museum; "unknown" only for archive material; generated: "generated with [service]; selection and editing [name]" |
| `source_url` | object page or original landing page, no short links; own material: path in the project folder; screenshot: demo account or build |
| `license` | name and version ("SIL Open Font License 1.1", "CC0 1.0", "Unsplash License"); own material "own rights"; generated "terms of the service, copyright protection of the output not assured" (Germany: [markets/eu-dach-compliance.md](../references/markets/eu-dach-compliance.md) 12) |
| `license_url` | license text or deed; own material "n/a" |
| `retrieved` | YYYY-MM-DD; own material: date received |
| `attribution_required` | true or false; requested attribution (AIC, Unsplash) is false with `attribution_text` |
| `attribution_text` | finished text following TASL, when required or requested |
| `redistribution` | "free", "font file only with OFL.txt", "do not pass on (ITF FFL)", "per the terms of the service" |
| `modifications` | none, cropped, cut out, tinted, placed in perspective, upscaled |
| `used_in` | list of file and surface, for example `["index.html: Hero"]` |
| `third_party_rights` | "none", "people recognizable, consent: [where the record is kept]", "trademark removed from the image" |
| `check` | what was checked: "isPublicDomain=true per Met API 2026-10-07", "font-check: de full, en full, tabular figures yes", "demo data, no customer data" |

For consents enter only where the record is kept, never the document and no further personal data.

### 2.2 Additional fields per type

| Type | Field | Content |
|---|---|---|
| font | `embedding` | "self-hosted", "Google CSS2 (mockup or artifact only)", "Fontshare CDN, the client loads it" |
| icon | `version` | package version, for example "2.1.1" |
| trace | `created`, `tool` | when and with what (scan, pen, stamp, risograph); `author` is the person (module M-HUM) |
| data | `period` | reference period and as-of date of the source |
| quote | `approval` | who, when; without approval no quote in the result, request in `stand_ins` |
| generated | fields from 2.3 | required |

### 2.3 Additional fields for `type: "generated"`

| Field | Content |
|---|---|
| `tool` | service, model, version, plan |
| `terms` | URL and read-on date of the terms of use |
| `created` | YYYY-MM-DD |
| `image_brief` | path to the file with image brief and prompt |
| `references` | anchor image and style references as credits IDs, own material only |
| `generation_seed` | value, if used, else null |
| `approval` | who, when, for which motif |
| `labeling` | object with `visible` (location and text), `platform` (switch), `iptc` (source type), `c2pa_original` (true or false) |
| `art50_classification` | deepfake yes or no, with the reason (EU AI Act Art. 50: [markets/eu-dach-compliance.md](../references/markets/eu-dach-compliance.md) 13) |
| `ai_artifacts` | check date, discarded attempts with reason |

### 2.4 Example

```json
{
  "project": "[Project] landing page",
  "as_of": "2026-10-08",
  "entries": [
    {
      "id": "font-archivo",
      "type": "font",
      "title": "Archivo",
      "author": "Omnibus-Type",
      "source_url": "https://github.com/google/fonts/tree/main/ofl/archivo",
      "license": "SIL Open Font License 1.1",
      "license_url": "https://openfontlicense.org/open-font-license-official-text/",
      "retrieved": "2026-10-07",
      "attribution_required": false,
      "redistribution": "font file only with OFL.txt",
      "modifications": "none",
      "used_in": ["index.html: all text"],
      "third_party_rights": "none",
      "check": "font-check 2026-10-07: de full, en full, tabular figures yes",
      "embedding": "self-hosted (@fontsource-variable/archivo)"
    },
    {
      "id": "photo-met-436535",
      "type": "archive_image",
      "title": "Wheat Field with Cypresses",
      "author": "Vincent van Gogh",
      "source_url": "https://www.metmuseum.org/art/collection/search/436535",
      "license": "CC0 1.0",
      "license_url": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "retrieved": "2026-10-07",
      "attribution_required": false,
      "attribution_text": "Vincent van Gogh, Wheat Field with Cypresses, 1889. The Metropolitan Museum of Art, CC0",
      "redistribution": "free",
      "modifications": "cropped, tinted",
      "used_in": ["index.html: chapter 2"],
      "third_party_rights": "none",
      "check": "isPublicDomain=true per Met API 2026-10-07"
    },
    {
      "id": "gen-header-01",
      "type": "generated",
      "title": "Still life stoneware cup",
      "author": "generated with [service]; selection and editing [name]",
      "source_url": "assets/original/gen-header-01.png",
      "license": "terms of the service, copyright protection of the output not assured",
      "license_url": "[URL of the terms]",
      "retrieved": "2026-10-08",
      "attribution_required": true,
      "attribution_text": "Image: AI-generated",
      "redistribution": "per the terms of the service",
      "modifications": "cropped, tonal range matched to the series",
      "used_in": ["blog/cup.html: header"],
      "third_party_rights": "none",
      "check": "AI artifact list, palette within the corridor",
      "tool": "[service] [model], plan [name]",
      "terms": "[URL], read 2026-10-08",
      "created": "2026-10-08",
      "image_brief": "assets/image-brief-header.md",
      "references": ["photo-own-cup-03"],
      "generation_seed": null,
      "approval": "user in chat, 2026-10-08, this motif only",
      "labeling": {"visible": "bottom right 'AI-generated', 12 px", "platform": "not relevant (website)", "iptc": "trainedAlgorithmicMedia", "c2pa_original": true},
      "art50_classification": "yes: photorealistic, could pass as real",
      "ai_artifacts": "checked 2026-10-08, 2 attempts discarded (handle without attachment)"
    }
  ],
  "stand_ins": [
    {"used_in": "index.html: Team", "stand_in": "names and roles as a typographic anchor", "wanted": "team portraits, head and shoulders, 800 x 1000", "requested": "2026-10-08"}
  ]
}
```

## 3 Duties per license

| License | Visible attribution | Include | Redistribution |
|---|---|---|---|
| SIL OFL 1.1 (Google Fonts, Velvetyne and others) | no | `OFL.txt` as soon as font files go along | allowed, not sold on its own; with a Reserved Font Name (for example Le Murmure) no modified version under that name [2] |
| ITF Free Font License 2.0 (Fontshare) | no | n/a | never pass on font files, do not subset or convert them; only finished documents and print data [3] |
| Unsplash, Pexels, Pixabay | no, appreciated ("Photo: Name / Unsplash") | no | not as a stock collection; via the Pexels API a visible link to Pexels |
| CC0, Public Domain Mark | no; AIC asks for a caption | no | free |
| CC BY 4.0 (Wikimedia, Font Awesome icons) | yes, TASL with a link and a note of changes; for Font Awesome the preserved comment in the SVG is enough | no | free with attribution [1] |
| CC BY-SA 4.0 | yes, TASL | no | adaptations only under BY-SA [1] |
| MIT, ISC (icons) | no | copyright and license notice in the source code | free |
| Apache 2.0 (Material Symbols) | no | license and NOTICE when redistributing | free |
| Remix Icon License | voluntary | no | never as a logo, trademark or app icon, never sold as an icon pack |
| Apple Product Bezels | no | n/a | only following Apple's marketing guidelines |
| own photos with people | as agreed | where the consent record is kept, noted in the entry | as the consent allows (EU and DACH: [markets/eu-dach-compliance.md](../references/markets/eu-dach-compliance.md) 9) |
| company images (website, press kit) | as the license or contract requires (EU and DACH: the photographer's right to be named, [markets/eu-dach-compliance.md](../references/markets/eu-dach-compliance.md) 12) | rights holder, scope (medium, duration), consent record | only within that scope (EU and DACH: [markets/eu-dach-compliance.md](../references/markets/eu-dach-compliance.md) 9, 12) |
| generated | labeling following [images-and-assets.md](../references/images-and-assets.md) 8.7 | no | per the terms of the service |

**TASL pattern:** `“[Title]” by [author], [license with link], [source]; [modifications, for example cropped].`

## 4 Visible attribution per medium

When required or requested:

| Medium | Location and minimum size |
|---|---|
| Website | footer link "Image credits" to its own page or to a section in the legal notice or imprint where the market has one (EU and DACH: [markets/eu-dach-compliance.md](../references/markets/eu-dach-compliance.md) 8) |
| Talk and reading deck | last slide, credit line from 18 px at 1080 px height |
| Social | caption |
| Print | legal notice or imprint where the market has one, or the image edge, from 7 pt |

The labeling of generated images also sits in the image itself ([images-and-assets.md](../references/images-and-assets.md) 8.7).

## 5 Credits gate

Gate "Sources" in [review.md](../references/review.md) 3. A result is finished only when (Quick: points 1, 3, 5, 6, 7 on `CREDITS.md`; check script from Standard):

1. every font, image, icon set, texture, 3D model, trace (skill doodles included), quote and data source has an entry (match against the font list from `measure.mjs` and the `img`, `svg` and `url()` sources in the HTML);
2. no required field is empty (check script below);
3. every entry with `attribution_required: true` is visibly attributed (4);
4. when files are passed on (redistribution), no Fontshare font file is in the output folder and `OFL.txt` sits next to supplied OFL files; live websites self-host fonts and icons (EU and DACH: [markets/eu-dach-compliance.md](../references/markets/eu-dach-compliance.md) 7);
5. recognizable people appear only with documented consent, else a stand-in without a recognizable person ([images-and-assets.md](../references/images-and-assets.md) 5) plus a request with dimensions and motif;
6. generated elements have all fields from 2.3; with `art50_classification` "yes" the label sits in the image, `$PY $S/ai_label.py --check <file>` reports a source type and the original with C2PA is stored;
7. stand-ins and open requests are in `stand_ins` and named in the wrap-up.

Check script (tested 2026-10-08 with the example from 2.4; English keys tested 2026-10-15):

```bash
$PY - credits.json <<'EOF'
import json, sys
d = json.load(open(sys.argv[1]))
required = ['id', 'type', 'author', 'source_url', 'license', 'license_url', 'retrieved', 'attribution_required',
            'redistribution', 'modifications', 'used_in', 'third_party_rights', 'check']
gen = ['tool', 'terms', 'created', 'image_brief', 'approval', 'labeling', 'art50_classification', 'ai_artifacts']
errors = 0
for e in d['entries']:
    fields = required + (gen if e.get('type') == 'generated' else [])
    missing = [k for k in fields if e.get(k) in (None, '', [])]
    if e.get('attribution_required') and not e.get('attribution_text'):
        missing.append('attribution_text')
    errors += bool(missing)
    print(e.get('id'), 'ok' if not missing else 'missing: ' + ', '.join(missing))
sys.exit(1 if errors else 0)
EOF
```

No legal advice; for campaigns with reach get the user's approval and recommend expert review ([compliance.md](../references/compliance.md) 5).

## Sources

1. Creative Commons, Best practices for attribution: https://wiki.creativecommons.org/wiki/Best_practices_for_attribution
2. SIL Open Font License, FAQ: https://openfontlicense.org/ofl-faq/
3. Indian Type Foundry, ITF Free Font License 2.0 (Fontshare): https://www.fontshare.com/fonts/satoshi

#!/usr/bin/env python3
"""Pixel-based measurements and contact sheets for design screenshots.

Usage:
  $PY pixels.py palette <image.png> [--colors 8]
      Color shares (quantized), share of saturated pixels, share of calm area
      (white space in the wide sense), colorfulness after Hasler and Suesstrunk, mean luminance.

  $PY pixels.py slice <image.png> <target folder> [--height 1600] [--quality 80] [--max N]
      Splits a full-page screenshot into JPG parts for viewing (<name>-partNN.jpg),
      because long images are otherwise shrunk too much when viewed. The parts follow
      each other without gap or overlap. With --max N an image longer than N parts gets
      N windows spread evenly from top to bottom (the first at the top, the last at the
      bottom), so a reviewer sees the whole page in a fixed number of images; the output
      names the pixels left out in total (skippedPx).

  $PY pixels.py sheet <output.png> <image1.png> [image2.png ...] [--cols 3] [--width 2400] [--labels]
      Contact sheet: all images side by side in a grid, for sequences (deck, carousel)
      and for comparing direction mockups.

$PY is the Python 3 command found by the tool check (python3, python or py -3).
Requires: pillow, numpy.
"""
import json
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFont


def palette(path, colors=8):
    img = Image.open(path).convert("RGB")
    # shrink for speed, proportions stay the same
    scale = min(1.0, 900 / max(img.size))
    small = img.resize((max(1, int(img.width * scale)), max(1, int(img.height * scale))), Image.LANCZOS)
    arr = np.asarray(small).astype(np.float32)
    h, w, _ = arr.shape
    total = h * w

    q = small.quantize(colors=colors, method=Image.Quantize.MEDIANCUT)
    pal = q.getpalette()[: colors * 3]
    counts = np.bincount(np.asarray(q).ravel(), minlength=colors)
    swatches = []
    for i in np.argsort(-counts):
        if counts[i] == 0:
            continue
        r, g, b = pal[i * 3 : i * 3 + 3]
        swatches.append({"color": "#%02x%02x%02x" % (r, g, b), "share": round(float(counts[i]) / total, 3)})

    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    mx = arr.max(axis=2)
    mn = arr.min(axis=2)
    sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0)
    saturated = float(((sat > 0.45) & (mx > 60)).mean())

    rg = r - g
    yb = 0.5 * (r + g) - b
    colorfulness = float(np.sqrt(rg.std() ** 2 + yb.std() ** 2) + 0.3 * np.sqrt(rg.mean() ** 2 + yb.mean() ** 2))

    gray = arr.mean(axis=2)
    # calm area: pixels whose 9x9 neighborhood barely varies
    from PIL import ImageFilter
    g_img = Image.fromarray(gray.astype(np.uint8))
    mx_f = np.asarray(g_img.filter(ImageFilter.MaxFilter(9))).astype(np.int16)
    mn_f = np.asarray(g_img.filter(ImageFilter.MinFilter(9))).astype(np.int16)
    calm = float(((mx_f - mn_f) < 8).mean())

    # edge density as a rough measure of visual complexity
    edges = np.asarray(g_img.filter(ImageFilter.FIND_EDGES)).astype(np.int16)
    edge_density = float((edges > 40).mean())

    return {
        "file": path,
        "size": list(img.size),
        "palette": swatches,
        "saturatedShare": round(saturated, 4),
        "colorfulness": round(colorfulness, 1),
        "calmAreaShare": round(calm, 3),
        "edgeDensity": round(edge_density, 4),
        "meanLuminance": round(float(gray.mean()) / 255, 3),
    }


def sheet(out, files, cols=3, width=2400, labels=False):
    imgs = [Image.open(f).convert("RGB") for f in files]
    cols = max(1, min(cols, len(imgs)))
    gap = 24
    cell_w = (width - gap * (cols + 1)) // cols
    thumbs = []
    for im in imgs:
        ratio = cell_w / im.width
        thumbs.append(im.resize((cell_w, max(1, int(im.height * ratio))), Image.LANCZOS))
    rows = [thumbs[i : i + cols] for i in range(0, len(thumbs), cols)]
    label_h = 36 if labels else 0
    row_heights = [max(t.height for t in row) + label_h for row in rows]
    height = sum(row_heights) + gap * (len(rows) + 1)
    canvas = Image.new("RGB", (width, height), (232, 232, 232))
    draw = ImageDraw.Draw(canvas)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
    except Exception:
        font = ImageFont.load_default()
    y = gap
    idx = 0
    for row, rh in zip(rows, row_heights):
        x = gap
        for t in row:
            if labels:
                name = files[idx].split("/")[-1]
                draw.text((x, y + 6), name, fill=(40, 40, 40), font=font)
            canvas.paste(t, (x, y + label_h))
            x += cell_w + gap
            idx += 1
        y += rh + gap
    canvas.save(out)
    return {"written": out, "count": len(imgs), "size": [width, height]}


def slice_image(path, outdir, height=1600, quality=80, max_parts=None):
    import os
    os.makedirs(outdir, exist_ok=True)
    img = Image.open(path).convert("RGB")
    base = os.path.splitext(os.path.basename(path))[0]
    if max_parts and img.height > max_parts * height:
        # N windows from top to bottom: first at the top, last at the bottom, the others evenly in between
        step = (img.height - height) / (max_parts - 1) if max_parts > 1 else 0
        tops = [round(j * step) for j in range(max_parts)]
        result = {"mode": "spread", "skippedPx": img.height - max_parts * height}
    else:
        tops = list(range(0, img.height, height))
        result = {"mode": "seamless"}
    written = []
    for i, top in enumerate(tops):
        part = img.crop((0, top, img.width, min(img.height, top + height)))
        f = os.path.join(outdir, "%s-part%02d.jpg" % (base, i + 1))
        part.save(f, quality=quality)
        written.append(f)
    return {"written": written, "parts": len(written), "imageHeight": img.height, **result}


def parse_options(rest, known):
    """Splits rest into positional arguments and number options; an unknown option or a missing
    or non-positive number ends with the usage text, as in the other scripts."""
    args, opts = [], {}
    i = 0
    while i < len(rest):
        a = rest[i]
        if a in known:
            value = rest[i + 1] if i + 1 < len(rest) else ""
            try:
                opts[a] = int(value)
            except ValueError:
                opts[a] = 0
            if opts[a] < 1:
                sys.exit("Option %s needs a whole number of at least 1.\n%s" % (a, __doc__))
            i += 2
        elif a.startswith("--"):
            sys.exit("Unknown option %s.\n%s" % (a, __doc__))
        else:
            args.append(a)
            i += 1
    return args, opts


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    cmd = sys.argv[1]
    if cmd == "palette":
        colors = 8
        if "--colors" in sys.argv:
            colors = int(sys.argv[sys.argv.index("--colors") + 1])
        print(json.dumps(palette(sys.argv[2], colors), indent=2))
    elif cmd == "slice":
        args, opts = parse_options(sys.argv[2:], ("--height", "--quality", "--max"))
        if len(args) != 2:
            sys.exit("slice needs <image.png> and <target folder>.\n%s" % __doc__)
        quality = opts.get("--quality", 80)
        if quality > 100:
            sys.exit("Option --quality takes 1 to 100.\n%s" % __doc__)
        print(json.dumps(slice_image(args[0], args[1], opts.get("--height", 1600), quality, opts.get("--max")), indent=2))
    elif cmd == "sheet":
        rest = sys.argv[2:]
        cols, width, labels = 3, 2400, False
        if "--cols" in rest:
            i = rest.index("--cols"); cols = int(rest[i + 1]); del rest[i : i + 2]
        if "--width" in rest:
            i = rest.index("--width"); width = int(rest[i + 1]); del rest[i : i + 2]
        if "--labels" in rest:
            rest.remove("--labels"); labels = True
        out, files = rest[0], rest[1:]
        print(json.dumps(sheet(out, files, cols, width, labels), indent=2))
    else:
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()

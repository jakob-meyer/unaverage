#!/usr/bin/env python3
"""Places a subject (screenshot, poster, label) in perspective on four corner points in a photo.

Usage:
  $PY perspective.py subject.png background.jpg "x1,y1 x2,y2 x3,y3 x4,y4" output.png [--shadow 0.25] [--gloss 0.0]

Corner points in the background image in the order top left, top right, bottom right, bottom left (pixels).
Local only (Pillow, numpy), no network access. The background must be legally usable (own photo, CC0).
"""
import sys, argparse
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

def coefficients(target, source):
    # Solves the 8 coefficients for Image.transform(PERSPECTIVE): output pixel -> input pixel
    A, b = [], []
    for (x, y), (u, v) in zip(target, source):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.append(u)
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y]); b.append(v)
    return np.linalg.solve(np.array(A, dtype=float), np.array(b, dtype=float)).tolist()

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('subject'); ap.add_argument('background'); ap.add_argument('corners'); ap.add_argument('output')
    ap.add_argument('--shadow', type=float, default=0.25, help='opacity of a soft drop shadow (0 = off)')
    ap.add_argument('--gloss', type=float, default=0.0, help='opacity of a diagonal gloss gradient (0 = off)')
    a = ap.parse_args()
    corners = [tuple(float(t) for t in p.split(',')) for p in a.corners.split()]
    if len(corners) != 4: sys.exit('Give exactly four corner points.')
    bg = Image.open(a.background).convert('RGBA')
    mo = Image.open(a.subject).convert('RGBA')
    w, h = mo.size
    source = [(0, 0), (w, 0), (w, h), (0, h)]
    coef = coefficients(corners, source)
    warped = mo.transform(bg.size, Image.PERSPECTIVE, coef, Image.BICUBIC)
    if a.shadow > 0:
        mask = Image.new('L', bg.size, 0)
        ImageDraw.Draw(mask).polygon([(x + 6, y + 10) for x, y in corners], fill=int(255 * a.shadow))
        mask = mask.filter(ImageFilter.GaussianBlur(14))
        shadow = Image.new('RGBA', bg.size, (0, 0, 0, 255)); shadow.putalpha(mask)
        bg = Image.alpha_composite(bg, shadow)
    bg = Image.alpha_composite(bg, warped)
    if a.gloss > 0:
        gradient = Image.linear_gradient('L').rotate(45, expand=True).resize(bg.size)
        poly = Image.new('L', bg.size, 0); ImageDraw.Draw(poly).polygon(corners, fill=255)
        alpha = Image.fromarray((np.array(gradient, dtype=float) / 255 * a.gloss * np.array(poly) ).astype('uint8'))
        white = Image.new('RGBA', bg.size, (255, 255, 255, 255)); white.putalpha(alpha)
        bg = Image.alpha_composite(bg, white)
    bg.convert('RGB').save(a.output) if a.output.lower().endswith(('.jpg', '.jpeg')) else bg.save(a.output)
    print(f'Written: {a.output} {bg.size[0]}x{bg.size[1]}')

if __name__ == '__main__':
    main()

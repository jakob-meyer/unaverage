#!/usr/bin/env python3
"""Place a cut-out subject (PNG with alpha, for example from cutout.swift) on a new background
and rebuild its shadows. Pillow only, offline. Tested 2026-10-08 (references/images-and-assets.md, section 3.4).

Usage:
  $PY shadow.py subject.png out.jpg [--size 1600x1600] [--background "#f2f2f0"]
         [--fill 0.8] [--light left|right|top] [--cast 0.35] [--contact 0.55] [--choke 1]

- Contact shadow: narrow dark ellipse directly under the standing surface (anchors the object).
- Floor shadow (--cast): soft flat ellipse, offset to the side away from the light.
  No shape-accurate cast shadow; that needs 3D or the real photo.
- --cast 0 --contact 0: pure cutout look (for example a marketplace main image on #ffffff).
- --choke n: shrink the mask by n px against a light fringe from the original background (2 on a dark background).
"""
import argparse
from PIL import Image, ImageDraw, ImageFilter


def hexrgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def ellipse_mask(size, box, opacity, softness):
    k = Image.new('L', size, 0)
    ImageDraw.Draw(k).ellipse(box, fill=int(255 * opacity))
    return k.filter(ImageFilter.GaussianBlur(softness))


def main():
    p = argparse.ArgumentParser()
    p.add_argument('subject')
    p.add_argument('out')
    p.add_argument('--size', default='1600x1600')
    p.add_argument('--background', default='#f2f2f0')
    p.add_argument('--fill', type=float, default=0.8, help='share of the limiting image side that the subject occupies')
    p.add_argument('--light', default='left', choices=['left', 'right', 'top'])
    p.add_argument('--cast', type=float, default=0.35, help='opacity of the floor shadow, 0 to 1')
    p.add_argument('--contact', type=float, default=0.55, help='opacity of the contact shadow, 0 to 1')
    p.add_argument('--choke', type=int, default=1, help='shrink the mask by n px')
    a = p.parse_args()

    W, H = map(int, a.size.lower().split('x'))
    m = Image.open(a.subject).convert('RGBA')
    if a.choke > 0:
        m.putalpha(m.getchannel('A').filter(ImageFilter.MinFilter(2 * a.choke + 1)).filter(ImageFilter.GaussianBlur(0.6)))
    m = m.crop(m.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox())
    s = a.fill * min(W / m.width, H / m.height)
    m = m.resize((round(m.width * s), round(m.height * s)), Image.LANCZOS)
    x0 = (W - m.width) // 2
    y0 = min((H - m.height) // 2, H - m.height - round(H * 0.06))
    floor = y0 + m.height

    out = Image.new('RGBA', (W, H), hexrgb(a.background) + (255,))
    if a.cast > 0:
        direction = {'left': 1, 'right': -1, 'top': 0}[a.light]
        rx, ry = m.width * 0.6, max(4, m.height * 0.06)
        cx, cy = x0 + m.width / 2 + direction * m.width * 0.28, floor - ry * 0.6
        out.paste((0, 0, 0, 255), (0, 0), ellipse_mask((W, H), [cx - rx, cy - ry, cx + rx, cy + ry], a.cast, max(3, m.width * 0.07)))
    if a.contact > 0:
        rx, ry = m.width * 0.42, max(3, m.height * 0.025)
        cx = x0 + m.width / 2
        out.paste((0, 0, 0, 255), (0, 0), ellipse_mask((W, H), [cx - rx, floor - ry, cx + rx, floor + ry], a.contact, max(2, ry * 1.2)))

    out.alpha_composite(m, (x0, y0))
    out.convert('RGB').save(a.out, quality=92)
    print(f'Written: {a.out} {W}x{H}, subject {m.width}x{m.height}, floor y={floor}')


if __name__ == '__main__':
    main()

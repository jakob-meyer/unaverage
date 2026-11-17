#!/usr/bin/env python3
"""Write or check the IPTC digital source type as XMP in an image.
For generated or AI-edited images, before they are delivered. Pillow only, offline.

Usage:
  $PY ai_label.py in.png out.jpg [--type trainedAlgorithmicMedia]
  $PY ai_label.py --check file.(jpg|webp|png)

--type:
  trainedAlgorithmicMedia               fully generated (default)
  compositeWithTrainedAlgorithmicMedia  real photo with inpainting or outpainting
  compositeSynthetic                    compositing with at least one generated part

Format from the extension of out: .jpg/.jpeg and .webp through the XMP block, .png through iTXt.
Note: every re-save with Pillow drops the APP11 block with C2PA in JPEG.
Keep the original with C2PA unchanged for that reason. Does not replace a visible label.
"""
import argparse
import re
import sys
from PIL import Image, PngImagePlugin

TYPES = ['trainedAlgorithmicMedia', 'compositeWithTrainedAlgorithmicMedia', 'compositeSynthetic']
NS = 'http://cv.iptc.org/newscodes/digitalsourcetype/'


def xmp_packet(source_type):
    return ('<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'
            '<rdf:Description rdf:about="" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/">'
            f'<Iptc4xmpExt:DigitalSourceType>{NS}{source_type}</Iptc4xmpExt:DigitalSourceType>'
            '</rdf:Description></rdf:RDF></x:xmpmeta>')


def read_type(path):
    im = Image.open(path)
    raw = im.info.get('xmp') or im.info.get('XML:com.adobe.xmp') or b''
    if isinstance(raw, bytes):
        raw = raw.decode('utf-8', 'ignore')
    m = re.search(r'digitalsourcetype/([A-Za-z]+)', raw)
    return m.group(1) if m else None


def main():
    p = argparse.ArgumentParser()
    p.add_argument('input', nargs='?', metavar='in')
    p.add_argument('output', nargs='?', metavar='out')
    p.add_argument('--type', default=TYPES[0], choices=TYPES)
    p.add_argument('--check')
    a = p.parse_args()
    if a.check:
        found = read_type(a.check)
        print(f'{a.check}: ' + (f'source type {found}' if found else 'no IPTC source type found'))
        sys.exit(0 if found else 2)
    if not a.input or not a.output:
        p.error('give in and out, or --check file')
    packet = xmp_packet(a.type)
    im = Image.open(a.input)
    ext = a.output.lower().rsplit('.', 1)[-1]
    if ext in ('jpg', 'jpeg'):
        im.convert('RGB').save(a.output, quality=92, xmp=packet.encode('utf-8'))
    elif ext == 'webp':
        im.save(a.output, quality=90, xmp=packet.encode('utf-8'))
    elif ext == 'png':
        info = PngImagePlugin.PngInfo()
        info.add_itxt('XML:com.adobe.xmp', packet)
        im.save(a.output, pnginfo=info)
    else:
        sys.exit('Give the output as .jpg, .webp or .png.')
    found = read_type(a.output)
    if found != a.type:
        sys.exit(f'Error: source type not readable after writing ({found}).')
    print(f'Written: {a.output} with source type {found}')


if __name__ == '__main__':
    main()

"""Contact sheet of the final (fully revealed) frame of every shot whose id contains PREFIX.
Usage: python3 engine/sheet.py PREFIX  -> build/sheets/PREFIX_NN.png (6 frames per sheet)"""
import json, os, sys
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
pre = sys.argv[1] if len(sys.argv) > 1 else ''
st = json.load(open(os.path.join(ROOT, 'build', 'story.json')))
ims = [os.path.join(ROOT, 'build', 'frames', f"{s['id']}__{len(s['lines']) - 1}.png") for s in st['shots'] if pre in s['id']]
os.makedirs(os.path.join(ROOT, 'build', 'sheets'), exist_ok=True)
for k in range(0, len(ims), 6):
    sheet = Image.new('RGB', (1920, 1620), 'white')
    for i, p in enumerate(ims[k:k + 6]):
        if os.path.exists(p):
            sheet.paste(Image.open(p).resize((960, 540)), ((i % 2) * 960, (i // 2) * 540))
    out = os.path.join(ROOT, 'build', 'sheets', f'{pre or "all"}_{k // 6:02d}.png')
    sheet.save(out)
    print(out)

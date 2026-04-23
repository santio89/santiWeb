"""Generate brutalist favicon PNGs (16, 32, 48, 64, 180) from a Pillow draw."""
from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
SIZES = [16, 32, 48, 64, 180]

BG = (10, 10, 10, 255)            # #0a0a0a
ACCENT = (245, 144, 28, 255)      # #f5901c
FG = (245, 245, 245, 255)         # #f5f5f5

# render at high resolution then downscale for max anti-aliased quality
RENDER_AT = 512
FONT_PATH = "C:/Windows/Fonts/seguibl.ttf"  # Segoe UI Black

def render_master() -> Image.Image:
    img = Image.new("RGBA", (RENDER_AT, RENDER_AT), BG)
    d = ImageDraw.Draw(img)

    # 2px-equivalent orange border (scaled)
    border_w = max(2, RENDER_AT // 32)
    d.rectangle(
        [border_w // 2, border_w // 2, RENDER_AT - border_w // 2 - 1, RENDER_AT - border_w // 2 - 1],
        outline=ACCENT,
        width=border_w,
    )

    # SW text
    font = ImageFont.truetype(FONT_PATH, int(RENDER_AT * 0.55))
    text = "SW"
    bbox = d.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    tx = (RENDER_AT - tw) // 2 - bbox[0]
    ty = (RENDER_AT - th) // 2 - bbox[1] - int(RENDER_AT * 0.02)
    d.text((tx, ty), text, font=font, fill=FG)

    # bottom-left orange accent bar
    bar_y = int(RENDER_AT * 0.86)
    bar_h = max(3, RENDER_AT // 22)
    bar_x = int(RENDER_AT * 0.10)
    bar_w = int(RENDER_AT * 0.22)
    d.rectangle([bar_x, bar_y, bar_x + bar_w, bar_y + bar_h], fill=ACCENT)

    return img

master = render_master()

for s in SIZES:
    out = master.resize((s, s), Image.LANCZOS)
    name = "favicon.png" if s == 64 else f"favicon-{s}.png"
    if s == 180:
        name = "apple-touch-icon.png"
    out.save(os.path.join(OUT_DIR, name), optimize=True)
    print(f"wrote {name} ({s}x{s})")

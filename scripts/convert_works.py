"""One-shot helper: copy the chat-attached screenshots into media/works/
under the project's -dark / -light naming convention, and emit WebP
versions for each. Run with: python scripts/convert_works.py
"""
from __future__ import annotations
import shutil
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    "C:/Users/Santi/.cursor/projects/e-Dev-Projects-santiWeb/assets"
)
OUT = ROOT / "media" / "works"

# UUID -> (slug, variant) mapping (UUIDs come from the user's chat
# attachments in the order they uploaded them)
JOBS = {
    # sandbox
    "2AF98331-2232-463C-8884-6B1D8F24C815": ("sandbox", "dark"),
    "A2FDB83D-C420-4606-B253-3C7681653456": ("sandbox", "light"),
    # taskboard
    "BBF25D91-FD95-4DD8-B45F-89C8645AEF47": ("taskboard", "dark"),
    "B76F9D70-B7F6-4F90-A0D2-06E677465B7A": ("taskboard", "light"),
    # it-dashboard
    "A77FD7A4-5190-45B7-B38E-AEBDAFF8EB5C": ("it-dashboard", "dark"),
    "5A9AEECC-3985-42D2-BBD7-A7E10B06595B": ("it-dashboard", "light"),
    # syncle
    "845275CD-09BC-421C-973E-D0F33EFA4601": ("syncle", "dark"),
    "7D9D57EF-AD2C-4489-800A-D58CD2F27712": ("syncle", "light"),
    # playground
    "1FE5AFA3-F217-4E7F-8BF5-FCE0372B8DB9": ("playground", "dark"),
    "A11D2476-C974-45DA-80D7-FB3FD91D825C": ("playground", "light"),
}

WEBP_QUALITY = 82

def find_attached(uuid: str) -> Path | None:
    matches = list(ASSETS.glob(f"*_{uuid}_-*.png"))
    return matches[0] if matches else None

def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    total_in = 0
    total_out = 0
    for uuid, (slug, variant) in JOBS.items():
        src = find_attached(uuid)
        if src is None:
            print(f"  ! {slug}-{variant}: source not found for UUID {uuid}")
            continue
        dst_png = OUT / f"{slug}-{variant}.png"
        dst_webp = OUT / f"{slug}-{variant}.webp"

        shutil.copyfile(src, dst_png)
        with Image.open(src) as img:
            img.save(dst_webp, "WEBP", quality=WEBP_QUALITY, method=6)

        png_size = dst_png.stat().st_size
        webp_size = dst_webp.stat().st_size
        total_in += png_size
        total_out += webp_size
        ratio = (1 - webp_size / png_size) * 100 if png_size else 0
        print(
            f"  {slug:<14} {variant:<5}  png {png_size/1024:7.1f} KB  "
            f"webp {webp_size/1024:7.1f} KB  ({ratio:5.1f}% smaller)"
        )

    print("-" * 70)
    print(
        f"  TOTAL          png {total_in/1024:7.1f} KB  "
        f"webp {total_out/1024:7.1f} KB  "
        f"({(1-total_out/total_in)*100:5.1f}% smaller overall)"
    )

if __name__ == "__main__":
    main()

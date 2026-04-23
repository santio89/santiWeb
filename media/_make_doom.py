"""Download a self-hosted DOOM shareware .jsdos bundle.

Run this once to drop ``media/doom.jsdos`` next to this script. The
portfolio's footer easter-egg button will then load the bundle from the
same origin instead of falling back to the public CDN.

Usage:
    python media/_make_doom.py

No third-party dependencies required (uses only Python's stdlib).
"""

from __future__ import annotations

import os
import sys
import urllib.request
import zipfile
from io import BytesIO

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "doom.jsdos")

# Stable mirrors of the DOOM shareware .jsdos bundle (same shareware
# distribution that id Software released for free in 1993). The
# downloader walks them in order and uses the first one that responds.
SOURCES = [
    "https://v8.js-dos.com/bundles/doom.jsdos",
    "https://cdn.dos.zone/custom/dos/doom.jsdos",
    "https://br.cdn.dos.zone/custom/dos/doom.jsdos",
]

UA = "santiWeb-doom-bundle/1.0 (+https://santiweb.netlify.app)"
TIMEOUT = 30


def fetch(url: str) -> bytes:
    print(f"  -> trying {url}")
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return resp.read()


def main() -> int:
    print("Fetching DOOM shareware .jsdos bundle ...")
    data: bytes | None = None
    last_err: Exception | None = None
    for src in SOURCES:
        try:
            data = fetch(src)
            break
        except Exception as exc:
            print(f"     failed: {exc}")
            last_err = exc
    if data is None:
        print("ERROR: every source failed.")
        if last_err:
            print(f"  last error: {last_err}")
        print("Set a custom mirror URL inside this script and re-run.")
        return 1

    # Sanity-check: a .jsdos bundle is a zip archive containing a
    # `.jsdos/dosbox.conf` config file. Verify that before saving so we
    # don't write a stray HTML error page to disk.
    try:
        with zipfile.ZipFile(BytesIO(data)) as zf:
            names = zf.namelist()
        if not any(n.endswith("dosbox.conf") for n in names):
            print("ERROR: downloaded file is not a valid .jsdos bundle.")
            return 2
    except zipfile.BadZipFile:
        print("ERROR: downloaded file is not a zip archive.")
        return 2

    with open(OUT, "wb") as f:
        f.write(data)
    print(f"OK: wrote {OUT} ({len(data) / 1024:.1f} KB)")
    print(
        "The portfolio will now serve DOOM from this file. Commit it (or"
        " add it to your hosting provider) so visitors don't hit the CDN."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())

# santiWeb

Personal portfolio of Santiago Olais - Web Developer & IT Specialist.

Brutalist single-page site. Plain HTML / CSS / JS, no build step, no framework.
Live at https://santiweb.netlify.app/

## Stack

- HTML, CSS (custom properties, no preprocessor), vanilla JS modules
- Dark + light themes via `[data-theme]` on `<html>`
- EN / ES toggle via `data-i18n` keys (no extra requests)
- Custom fractal cursor trail on canvas (velocity-aware, particle physics, additive blend)
- Scroll reveals via `IntersectionObserver`
- Subtle 3D tilt on cards via `transform: perspective(...) rotateX/Y(...)`
- Netlify Forms for the contact form
- Google Analytics (gtag)

No jQuery, no AOS, no scroll-timeline polyfill, no Bootstrap Icons. Just the
Web platform + Google Fonts.

## Run locally

Open `index.html` in a browser. Or:

```bash
npx serve .
```

VS Code Live Server is also fine (`.vscode/settings.json` pins port 5503).

## Edit

- Texts and translations live in two places:
  - `index.html` for the default (English) markup
  - `js/scripts.js` `I18N` object for runtime swaps (EN/ES)
- Theme tokens are in `css/main.css` under `:root[data-theme="dark|light"]`
- The cursor lives in `js/scripts.js` -> `initCursor()`
- CVs sit at `media/cvs/santiago-olais-cv-eng.pdf` and `…-esp.pdf`

## Deploy

Static site. Netlify picks it up on push. The 404 page is `404.html`.

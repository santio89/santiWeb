/* -------------------------------------------------------------
   DOOM EASTER EGG (lazy-loaded)
   - Loaded on demand via dynamic import() the first time the user
     activates the trigger, so the ~500 lines of DOOM/js-dos plumbing
     (palettes, srcdoc HTML, key remaps, slider wiring) stay out of
     the initial bundle for the 99% of visitors who never play.
   - Boots js-dos v8 inside an <iframe srcdoc> so:
     * the emulator's CSS doesn't leak into the host page
     * removing the iframe on close kills its document, AudioContext,
       workers and canvases - audio stops the moment the modal closes
   - Tries a self-hosted bundle at media/doom.jsdos first, then falls
     back to the official CDN bundle so the easter egg always works.
   - Keyboard shortcuts (work even with the game focused, since the
     iframe forwards them via postMessage):
        Esc / Alt+X      -> close
        Alt+F            -> toggle fullscreen
   ------------------------------------------------------------- */
const DOOM_BUNDLE_LOCAL = "media/doom.jsdos";
// official js-dos v8 mirror; serves proper CORS headers (cdn.dos.zone
// hosts the same file but doesn't, so browser fetch fails on it).
const DOOM_BUNDLE_REMOTE = "https://v8.js-dos.com/bundles/doom.jsdos";
const JSDOS_CSS = "https://v8.js-dos.com/latest/js-dos.css";
const JSDOS_JS = "https://v8.js-dos.com/latest/js-dos.js";

async function pickDoomBundle() {
  // prefer self-hosted bundle if present; fall back to the maintained CDN
  // copy. Inside the srcdoc iframe the document URL is "about:srcdoc",
  // so relative paths don't resolve - we must hand it an absolute URL.
  try {
    const res = await fetch(DOOM_BUNDLE_LOCAL, { method: "HEAD" });
    if (res.ok) return new URL(DOOM_BUNDLE_LOCAL, location.href).href;
  } catch (_) {
    // network/CORS errors fall through to the remote URL
  }
  return DOOM_BUNDLE_REMOTE;
}

// Brutalist palette mapped onto the js-dos chrome inside the iframe.
// Keeping this here (not in CSS) so the srcdoc can be self-contained
// and so we can swap palettes live via postMessage when the user
// toggles the host theme.
const DOOM_PALETTES = {
  dark: {
    bg: "#0a0a0a",
    bg2: "#111111",
    panel: "#161616",
    elev: "#1c1c1c",
    fg: "#f5f5f5",
    fgMute: "rgba(245, 245, 245, 0.62)",
    line: "#2a2a2a",
    accent: "#f5901c",
    accentFg: "#0a0a0a",
  },
  light: {
    bg: "#ebe7da",
    bg2: "#e5e0cf",
    panel: "#ffffff",
    elev: "#ffffff",
    fg: "#0a0a0a",
    fgMute: "rgba(10, 10, 10, 0.6)",
    line: "#0a0a0a",
    accent: "#f5901c",
    accentFg: "#0a0a0a",
  },
};

function getHostTheme() {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

// Minimal CSS for the iframe. With js-dos in `kiosk: true` mode the
// sidebar / settings chrome is gone, so all we need is:
//   1) match the host background so loaders / letterboxing don't flash
//   2) hide the cursor on the actual play surface (the canvas) so the
//      OS pointer doesn't sit on top of the rendered scene while the
//      player isn't pointer-locked. Overlays like "click to capture
//      mouse" still get a normal cursor since they aren't <canvas>.
function doomThemeCss(theme) {
  const p = DOOM_PALETTES[theme] || DOOM_PALETTES.dark;
  return `
    :root, html, body {
      color-scheme: ${theme};
      background: ${p.bg} !important;
      color: ${p.fg} !important;
      font-family: ui-monospace, "JetBrains Mono", SFMono-Regular, Menlo, monospace !important;
    }
    canvas { cursor: none !important; }
  `;
}

function buildDoomFrameDoc(bundleUrl, theme) {
  // Self-contained srcdoc that loads js-dos and boots DOOM. It also:
  //  - relays our shortcut keys (Esc, Alt+F, Alt+X) to the parent so
  //    the modal can react even while js-dos owns keyboard focus
  //  - listens for "doom:theme" messages from the parent and swaps the
  //    palette live without restarting the game
  const url = JSON.stringify(bundleUrl);
  const jsDosTheme = theme === "light" ? "light" : "dark";
  const palettesJson = JSON.stringify(DOOM_PALETTES);
  // doomThemeCss() must round-trip through the iframe untouched, so
  // serialize the function as a string literal.
  const themeCssFn = doomThemeCss.toString();
  return `<!doctype html>
<html lang="en" data-theme="${jsDosTheme}">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="${JSDOS_CSS}">
  <style id="doom-theme">${doomThemeCss(theme)}</style>
  <style>
    html, body {
      margin: 0; padding: 0; height: 100%; width: 100%;
      overflow: hidden;
      font-family: ui-monospace, monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
    #dos { position: absolute; inset: 0; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="dos"></div>
  <script src="${JSDOS_JS}"></script>
  <script>
    (function () {
      var DOOM_PALETTES = ${palettesJson};
      ${themeCssFn}

      function applyTheme(name) {
        var el = document.getElementById("doom-theme");
        if (!el) return;
        document.documentElement.setAttribute("data-theme", name);
        el.textContent = doomThemeCss(name);
      }

      window.addEventListener("message", function (e) {
        if (!e.data || e.data.type !== "doom:theme") return;
        applyTheme(e.data.theme === "light" ? "light" : "dark");
      });

      // Keys DOOM uses where the browser's default action (scrolling,
      // tabbing focus away, quick-find etc.) would otherwise eat the press
      // before js-dos sees it. We preventDefault but DON'T stop propagation,
      // so js-dos still receives the keydown via its own listeners.
      // ArrowUp/ArrowDown are the worst offenders: even with overflow:hidden
      // some browsers (notably Chrome on Windows) still consume them as
      // "scroll by line" inside the iframe, which is why up/down feels dead
      // in DOOM while WASD and Left/Right work fine.
      var GAME_KEYS = {
        "ArrowUp": 1, "ArrowDown": 1, "ArrowLeft": 1, "ArrowRight": 1,
        " ": 1, "Spacebar": 1, "Tab": 1,
        "PageUp": 1, "PageDown": 1, "Home": 1, "End": 1,
        "/": 1, "'": 1
      };

      window.addEventListener("keydown", function (e) {
        var isShortcut =
          e.key === "Escape" ||
          (e.altKey && (e.key === "f" || e.key === "F" ||
                        e.key === "x" || e.key === "X"));
        if (isShortcut) {
          e.preventDefault();
          e.stopImmediatePropagation();
          try {
            parent.postMessage({
              type: "doom:key",
              key: e.key,
              alt: !!e.altKey,
            }, "*");
          } catch (_) {}
          return;
        }
        if (GAME_KEYS[e.key] || GAME_KEYS[e.code]) {
          e.preventDefault();
        }
      }, true);

      // Boot js-dos in kiosk mode - that hides its sidebar / settings
      // chrome entirely, so we get just the game canvas and js-dos's own
      // capture / loader overlays. No DOM trimming or DaisyUI overrides
      // needed; the host modal already provides our brutalist frame.
      var dosProps = null;
      var dosCI = null; // CommandInterface, populated on "ci-ready"
      if (typeof Dos === "function") {
        try {
          dosProps = Dos(document.getElementById("dos"), {
            url: ${url},
            theme: ${JSON.stringify(jsDosTheme)},
            backend: "dosbox",
            autoStart: true,
            kiosk: true,
            noCloud: true,
            noNetworking: true,
            // Capture the CommandInterface as soon as DOSBox is live so
            // we can synthesize key events for the ArrowUp/Down remap below.
            onEvent: function (event, ci) {
              if (event === "ci-ready" && ci) {
                dosCI = ci;
              }
            },
          });
          // Tell the host the iframe + js-dos instance are live so it can
          // push initial slider values (volume / sensitivity). Without this
          // the in-game defaults (e.g. mouseSensitivity = 0.5) would stay
          // active even though our footer sliders read 1.00.
          try { parent.postMessage({ type: "doom:ready" }, "*"); } catch (_) {}
        } catch (err) {
          console.error("[doom]", err);
          parent.postMessage({ type: "doom:error", message: String(err) }, "*");
        }
      } else {
        parent.postMessage({ type: "doom:error", message: "js-dos failed to load" }, "*");
      }

      // The official js-dos DOOM bundle binds Up/Down arrows to "look
      // up/down" (a no-op in vanilla DOOM since there's no mouselook), so
      // pressing them does nothing in-game even though they reach DOSBox.
      // Intercept ArrowUp/ArrowDown here and inject the matching WASD
      // movement key via the CommandInterface so arrows feel natural again.
      // Left/Right arrows already work for turning so we leave them alone.
      var KEY_REMAP = { "ArrowUp": 87 /* W */, "ArrowDown": 83 /* S */ };
      window.addEventListener("keydown", function (e) {
        var code = KEY_REMAP[e.key];
        if (code === undefined || !dosCI) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        try { dosCI.sendKeyEvent(code, true); } catch (_) {}
      }, true);
      window.addEventListener("keyup", function (e) {
        var code = KEY_REMAP[e.key];
        if (code === undefined || !dosCI) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        try { dosCI.sendKeyEvent(code, false); } catch (_) {}
      }, true);

      // The parent posts {type:"doom:set", prop:"volume"|"mouseSensitivity",
      // value:n} when the user drags one of our footer sliders. We try
      // every API name js-dos has shipped under across recent versions
      // before falling back to a property write, so this stays working
      // across minor v8 updates.
      window.addEventListener("message", function (e) {
        if (!e.data || e.data.type !== "doom:set") return;
        if (!dosProps) return;
        var prop = e.data.prop;
        var value = Number(e.data.value);
        if (!isFinite(value)) return;
        var setter =
          "set" + prop.charAt(0).toUpperCase() + prop.slice(1);
        try {
          if (typeof dosProps[setter] === "function") {
            dosProps[setter](value);
            return;
          }
        } catch (_) {}
        try { dosProps[prop] = value; } catch (_) {}
      });
    })();
  </script>
</body>
</html>`;
}

/**
 * Wire up the DOOM modal. Called lazily from scripts.js the first time
 * the user activates the trigger, so all of this code stays out of the
 * initial bundle.
 *
 * @param {object} opts
 * @param {() => Record<string,string>} opts.getDict  Returns the active
 *   i18n dictionary. Injected so this module doesn't have to import the
 *   I18N table just to look up "doom.error".
 * @param {boolean} [opts.openImmediately]  If true, open the modal as
 *   soon as the wiring is done. Used by the lazy-load bootstrap so the
 *   click that triggered the import doesn't get swallowed.
 */
export function initDoom({ getDict, openImmediately = false } = {}) {
  const trigger = document.getElementById("doomTrigger");
  const modal = document.getElementById("doomModal");
  if (!trigger || !modal) return;

  const mount = document.getElementById("doomMount");
  const closeBtn = document.getElementById("doomClose");
  const fsBtn = document.getElementById("doomFullscreen");
  if (!mount) return;

  // snapshot the loader markup so we can rebuild a clean mount on close
  const initialMountHTML = mount.innerHTML;

  let frame = null;
  let booting = false;
  let lastFocus = null;

  const setOpen = (open) => {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      lastFocus = document.activeElement;
      requestAnimationFrame(() => closeBtn?.focus({ preventScroll: true }));
    } else if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus({ preventScroll: true });
    }
  };

  const showError = (msg) => {
    mount.innerHTML =
      '<div class="doom-modal__loader is-error">' +
        '<span class="doom-modal__loader__text" style="color:#ff5b48">' +
          msg +
        '</span>' +
      '</div>';
  };

  const teardown = () => {
    // dropping the iframe destroys its document - audio context, web
    // workers, canvases and event listeners all go with it.
    if (frame && frame.parentNode) frame.parentNode.removeChild(frame);
    frame = null;
    booting = false;
    mount.innerHTML = initialMountHTML;
  };

  const close = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
    teardown();
    setOpen(false);
  };

  const open = async () => {
    setOpen(true);
    if (frame || booting) return;
    booting = true;
    let bundleUrl;
    try {
      bundleUrl = await pickDoomBundle();
    } catch (err) {
      console.error("[doom]", err);
      const dict = getDict();
      showError(dict["doom.error"]);
      booting = false;
      return;
    }
    // wipe the loader; the iframe (with the matched theme bg) takes over
    mount.innerHTML = "";
    frame = document.createElement("iframe");
    frame.className = "doom-modal__frame";
    frame.title = "DOOM";
    frame.allow = "autoplay; fullscreen; gamepad; cross-origin-isolated";
    frame.setAttribute("allowfullscreen", "true");
    frame.srcdoc = buildDoomFrameDoc(bundleUrl, getHostTheme());
    mount.appendChild(frame);
    booting = false;
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
      return;
    }
    const target = mount;
    if (target.requestFullscreen) {
      target.requestFullscreen().catch(() => {});
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    }
  };

  trigger.addEventListener("click", open);
  modal.querySelectorAll("[data-doom-close]").forEach((el) =>
    el.addEventListener("click", close)
  );
  if (fsBtn) fsBtn.addEventListener("click", toggleFullscreen);

  // shortcuts pressed while focus is in the host page
  document.addEventListener(
    "keydown",
    (e) => {
      if (!modal.classList.contains("is-open")) return;
      if (e.key === "Escape") {
        // browser handles ESC for fullscreen first; close on the second press
        if (document.fullscreenElement) return;
        e.preventDefault();
        close();
      } else if (e.altKey && (e.key === "f" || e.key === "F")) {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.altKey && (e.key === "x" || e.key === "X")) {
        e.preventDefault();
        close();
      }
    },
    true
  );

  // wireSliderPair() registers a callback here that re-posts the current
  // slider value into the iframe. On "doom:ready" we run them all so the
  // game starts at the values shown in the UI instead of js-dos defaults.
  const initialSyncs = [];

  // shortcuts forwarded from inside the iframe
  window.addEventListener("message", (e) => {
    if (!e.data || typeof e.data !== "object") return;
    if (frame && e.source !== frame.contentWindow) return;
    if (e.data.type === "doom:error") {
      const dict = getDict();
      showError(dict["doom.error"]);
      return;
    }
    if (e.data.type === "doom:ready") {
      initialSyncs.forEach((fn) => {
        try { fn(); } catch (_) {}
      });
      return;
    }
    if (e.data.type !== "doom:key") return;
    if (!modal.classList.contains("is-open")) return;
    const { key, alt } = e.data;
    if (key === "Escape" || (alt && (key === "x" || key === "X"))) {
      close();
    } else if (alt && (key === "f" || key === "F")) {
      toggleFullscreen();
    }
  });

  // re-skin the live game when the user toggles the host theme so the
  // js-dos chrome stays in sync without restarting DOOM.
  const themeObserver = new MutationObserver(() => {
    if (!frame) return;
    try {
      frame.contentWindow?.postMessage(
        { type: "doom:theme", theme: getHostTheme() },
        "*"
      );
    } catch (_) {}
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Footer slider + number-input pair -> postMessage into the iframe,
  // which calls the matching js-dos setter on the captured player props.
  // Either control can drive the value; the other mirrors it. The
  // number input commits on blur or Enter so partial typing (e.g. "0.")
  // doesn't immediately rewrite back.
  // Values are also persisted to localStorage under `storageKey` so the
  // user's tweaked vol / sens carry across reloads. A registry of the
  // wired controls is returned so the RESET button can reach into them
  // without re-querying the DOM.
  const sliderControls = [];
  const wireSliderPair = (sliderId, numberId, prop, fmt, storageKey) => {
    const slider = document.getElementById(sliderId);
    const number = document.getElementById(numberId);
    if (!slider || !number) return;
    const min = Number(slider.min);
    const max = Number(slider.max);
    const defaultValue = Number(slider.value);
    const clamp = (v) => Math.min(max, Math.max(min, v));
    const post = (v) => {
      if (!frame || !frame.contentWindow) return;
      try {
        frame.contentWindow.postMessage(
          { type: "doom:set", prop, value: v },
          "*"
        );
      } catch (_) {}
    };
    const save = (v) => {
      try { localStorage.setItem(storageKey, String(v)); } catch (_) {}
    };
    const apply = (raw, source, persist = true) => {
      const n = Number(raw);
      if (!isFinite(n)) return;
      const v = clamp(n);
      if (source !== slider) slider.value = String(v);
      if (source !== number) number.value = fmt(v);
      post(v);
      if (persist) save(v);
    };
    // restore persisted value (silently — don't post yet, the iframe
    // isn't booted; doom:ready will trigger the initial sync below)
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored !== null && isFinite(Number(stored))) {
        const v = clamp(Number(stored));
        slider.value = String(v);
      }
    } catch (_) {}
    slider.addEventListener("input", () => apply(slider.value, slider));
    slider.addEventListener("change", () => apply(slider.value, slider));
    // typing in the number field: only commit on Enter or blur so the
    // user can finish typing "0.85" without it snapping mid-keystroke
    number.addEventListener("change", () => apply(number.value, number));
    number.addEventListener("blur", () => apply(number.value, number));
    number.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        number.blur();
      }
    });
    // initial paint
    number.value = fmt(Number(slider.value));
    // register an initial-sync callback that the iframe will trigger via
    // its "doom:ready" message once js-dos has booted and can accept setters
    initialSyncs.push(() => post(clamp(Number(slider.value))));
    sliderControls.push({
      slider, number, defaultValue, storageKey,
      reset: () => {
        try { localStorage.removeItem(storageKey); } catch (_) {}
        apply(defaultValue, null, false);
      },
    });
  };
  wireSliderPair(
    "doomVol", "doomVolVal", "volume",
    (v) => v.toFixed(2), "doom:vol"
  );
  wireSliderPair(
    "doomSens", "doomSensVal", "mouseSensitivity",
    (v) => v.toFixed(2), "doom:sens"
  );

  // RESET button — wipes persisted vol/sens, restores the HTML defaults
  // (vol 1.00, sens 0.50) and pushes them straight into the running game.
  const resetBtn = document.getElementById("doomReset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      sliderControls.forEach((c) => c.reset());
    });
  }

  // The lazy-load bootstrap in scripts.js calls this with
  // openImmediately=true so the click that triggered the dynamic import
  // doesn't get swallowed: the user clicked, we await import(), and now
  // we open the modal as if the click had been handled normally.
  if (openImmediately) open();
}

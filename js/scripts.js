/* =============================================================
   santiWeb v3 - main script
   No external libraries. Plain modules + Web APIs only.
   ============================================================= */

const root = document.documentElement;
const body = document.body;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* -------------------------------------------------------------
   I18N
   ------------------------------------------------------------- */
const I18N = {
  en: {
    "nav.skip": "SKIP NAVIGATION",
    "nav.about": "ABOUT",
    "nav.skills": "STACK",
    "nav.work": "WORKS",
    "nav.exp": "EXPERIENCE",
    "nav.contact": "CONTACT",

    "boot.loading": "LOADING SYSTEM",

    "hero.location": "BUENOS AIRES, AR",
    "hero.l1": "HI, I'M",
    "hero.l2": "SANTI!",
    "hero.sub":
      "Web Developer with a passion for technology and art, crafting responsive, high-performance, conversion-focused web apps.",
    "hero.cta1": "SEE WORK",
    "hero.cta2": "GET IN TOUCH",
    "hero.scroll": "SCROLL",

    "about.title": "ABOUT",
    "about.p1":
      "My name is <strong>Santiago</strong> and I'm a web developer based in Buenos Aires, Argentina.",
    "about.p2":
      "After almost a decade in IT - keeping Windows Servers, networks, VMs and hundreds of workstations alive - I found in web development a place where I can combine my passions for both technology and art. I enjoy building responsive sites with an eye on conversion, and I thrive on continuous learning.",
    "about.p3":
      "Always looking for new challenges and up for collaborating on different projects.",
    "about.role": "ROLE",
    "about.roleVal": "Web Developer · IT Specialist",
    "about.based": "BASED IN",
    "about.langs": "LANGUAGES",
    "about.exp": "EXPERIENCE",
    "about.expVal": "8+ yrs IT · 4+ yrs web",
    "about.contact": "CONTACT",

    "skills.title": "STACK",
    "skills.lede": "Tools I reach for.",

    "work.title": "WORKS",
    "work.lede": "A small selection.",
    "work.gol":
      "Interactive cellular automaton. Playback, presets, editable grid and history undo.",
    "work.sandbox":
      "HTML/CSS/JS playground with Monaco, live preview, auth and shared snippets.",
    "work.taskboard":
      "Kanban board with drag-and-drop, filters, analytics and offline persistence.",
    "work.itdash":
      "Internal IT hub - auth, devices, contacts, tickets, admin and a custom AI chatbot in one place.",
    "work.syncle":
      "4K rhythm game with random tracks, solo runs and realtime multiplayer rooms.",
    "work.playground":
      "Expo/RN multi-app sandbox - todo, memo game, calculator, weather and album.",
    "work.more": "SEE MORE ON GITHUB",

    "exp.title": "EXPERIENCE",
    "exp.r2": "Web Development Tutor",
    "exp.r3": "IT Administrator",
    "exp.r4": "IT Specialist",
    "exp.p1":
      "Design and ship funnel experiences used by thousands of users - landing pages, forms, checkouts - focused on conversion. Integrate with external platforms and own customer accounts and projects end-to-end.",
    "exp.p2":
      "Answer student questions, review challenges and projects, run after-class tutoring sessions.",
    "exp.p3":
      "Installation, configuration and maintenance of Windows Server, VMs (Hyper-V, VMware, Proxmox, VirtualBox), routers (Ubiquiti, Cisco, MikroTik) and VPNs. Implemented and maintained the GLPI inventory/ticketing system. In charge of the company website (WordPress on cPanel hosting, including DNS records). Built an internal IT management app in React + Node. ~100 workstations.",
    "exp.p4":
      "Support across PCs, notebooks, Raspberry Pis, networking, CCTV, printers, labelers and mobiles. Installation and configuration of Windows Server, Active Directory, Hyper-V virtualization and backups. ~150 workstations.",

    "contact.title": "CONTACT",
    "contact.pitch":
      "Got a project in mind, a role to fill, or just want to say hi?",
    "contact.pitchSub": "Don't hesitate to reach out!",
    "contact.cv": "VIEW PDF",

    "form.name": "Your name",
    "form.msg": "Tell me about your project, role or idea…",
    "form.send": "SEND MESSAGE",
    "form.reset": "RESET",

    "footer.backTop": "BACK TO TOP",

    "404.msg":
      "The page you're trying to access is unavailable, was moved or never existed.",
    "404.cta1": "BACK HOME",
    "404.cta2": "CONTACT",

    "doom.loading": "BOOTING DOS // PLEASE WAIT",
    "doom.error":
      "COULD NOT LOAD DOOM // CHECK YOUR CONNECTION AND TRY AGAIN",
    "doom.k.move": "MOVE",
    "doom.k.fire": "FIRE",
    "doom.k.use": "USE",
    "doom.k.strafe": "STRAFE",
    "doom.k.run": "RUN",
    "doom.k.map": "MAP",
    "doom.k.weapon": "WEAPON",
    "doom.k.size": "SIZE",
    "doom.k.exit": "EXIT",
    "doom.k.vol": "VOL",
    "doom.k.sens": "SENS",
    "doom.k.reset": "RESET",
  },
  es: {
    "nav.skip": "OMITIR NAVEGACIÓN",
    "nav.about": "SOBRE",
    "nav.skills": "STACK",
    "nav.work": "TRABAJOS",
    "nav.exp": "EXPERIENCIA",
    "nav.contact": "CONTACTO",

    "boot.loading": "CARGANDO SISTEMA",

    "hero.location": "BUENOS AIRES, AR",
    "hero.l1": "HOLA, SOY",
    "hero.l2": "SANTI!",
    "hero.sub":
      "Desarrollador Web apasionado por la tecnología y el arte, construyendo aplicaciones responsive, de alto rendimiento y enfocadas en la conversión.",
    "hero.cta1": "VER TRABAJOS",
    "hero.cta2": "CONTACTAR",
    "hero.scroll": "SCROLL",

    "about.title": "SOBRE",
    "about.p1":
      "Mi nombre es <strong>Santiago</strong> y soy desarrollador web viviendo en Buenos Aires, Argentina.",
    "about.p2":
      "Tras casi una década en IT - manteniendo Windows Servers, redes, VMs y cientos de puestos de trabajo - encontré en el desarrollo web un lugar donde puedo combinar mis pasiones por la tecnología y el arte. Disfruto construir sitios responsive con foco en la conversión, y me entusiasma aprender en el proceso.",
    "about.p3":
      "Siempre buscando nuevos desafíos y abierto a colaborar en distintos proyectos.",
    "about.role": "ROL",
    "about.roleVal": "Desarrollador Web · Especialista IT",
    "about.based": "UBICACIÓN",
    "about.langs": "IDIOMAS",
    "about.exp": "EXPERIENCIA",
    "about.expVal": "8+ años IT · 4+ años web",
    "about.contact": "CONTACTAR",

    "skills.title": "STACK",
    "skills.lede": "Herramientas que uso.",

    "work.title": "TRABAJOS",
    "work.lede": "Una pequeña selección.",
    "work.gol":
      "Autómata celular interactivo. Reproducción, presets, grilla editable e historial.",
    "work.sandbox":
      "Playground HTML/CSS/JS con Monaco, preview en vivo, auth y snippets compartidos.",
    "work.taskboard":
      "Tablero Kanban con drag-and-drop, filtros, analítica y persistencia offline.",
    "work.itdash":
      "Hub IT interno - auth, equipos, contactos, tickets, admin y un chatbot IA a medida en un solo lugar.",
    "work.syncle":
      "Rhythm game 4K con tracks random, partidas solo y salas multiplayer en tiempo real.",
    "work.playground":
      "Sandbox multi-app en Expo/RN - todo, memo game, calculadora, clima y álbum.",
    "work.more": "VER MÁS EN GITHUB",

    "exp.title": "EXPERIENCIA",
    "exp.r2": "Tutor de Desarrollo Web",
    "exp.r3": "Administrador IT",
    "exp.r4": "Especialista IT",
    "exp.p1":
      "Diseño e implementación de experiencias de funnel usadas por miles de usuarios - landings, forms, checkouts - enfocadas en la conversión. Integraciones con plataformas externas y gestión end-to-end de cuentas y proyectos de clientes.",
    "exp.p2":
      "Resolver consultas de estudiantes, revisar desafíos y proyectos, dictar clases de apoyo.",
    "exp.p3":
      "Instalación, configuración y mantenimiento de Windows Server, VMs (Hyper-V, VMware, Proxmox, VirtualBox), routers (Ubiquiti, Cisco, MikroTik) y VPNs. Implementación y mantenimiento del sistema GLPI de inventario y ticketing. A cargo del sitio web de la empresa (WordPress sobre hosting cPanel, incluyendo registros DNS). Desarrollo de una app interna de gestión IT en React + Node. ~100 puestos.",
    "exp.p4":
      "Soporte sobre PCs, notebooks, Raspberry Pis, redes, CCTV, impresoras, etiquetadoras y móviles. Instalación y configuración de Windows Server, Active Directory, virtualización Hyper-V y backups. ~150 puestos.",

    "contact.title": "CONTACTO",
    "contact.pitch":
      "¿Tenés un proyecto en mente, una posición para cubrir o solo querés saludar?",
    "contact.pitchSub": "¡No dudes en escribirme!",
    "contact.cv": "VER PDF",

    "form.name": "Tu nombre",
    "form.msg": "Contame sobre tu proyecto, posición o idea…",
    "form.send": "ENVIAR MENSAJE",
    "form.reset": "RESETEAR",

    "footer.backTop": "VOLVER ARRIBA",

    "404.msg":
      "La página a la que intentás acceder no está disponible, fue movida o nunca existió.",
    "404.cta1": "VOLVER AL INICIO",
    "404.cta2": "CONTACTO",

    "doom.loading": "INICIANDO DOS // POR FAVOR ESPERA",
    "doom.error":
      "NO SE PUDO CARGAR DOOM // REVISA TU CONEXIÓN E INTENTA DE NUEVO",
    "doom.k.move": "MOVER",
    "doom.k.fire": "DISPARAR",
    "doom.k.use": "USAR",
    "doom.k.strafe": "STRAFE",
    "doom.k.run": "CORRER",
    "doom.k.map": "MAPA",
    "doom.k.weapon": "ARMA",
    "doom.k.size": "TAMAÑO",
    "doom.k.exit": "SALIR",
    "doom.k.vol": "VOL",
    "doom.k.sens": "SENS",
    "doom.k.reset": "RESET",
  },
};

let currentLang = "en";

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  root.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const attr = el.getAttribute("data-i18n-attr");
    if (!dict[key]) return;
    if (attr) {
      el.setAttribute(attr, dict[key]);
    } else {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-toggle__opt").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.lang === lang);
  });

  // sync hero title data-text (for any glitch effect overlays)
  document.querySelectorAll(".hero__title__line").forEach((line) => {
    const inner = line.querySelector("[data-i18n]");
    if (inner && dict[inner.getAttribute("data-i18n")]) {
      line.setAttribute("data-text", dict[inner.getAttribute("data-i18n")]);
    }
  });

  // Notify other modules (e.g. the header section badge in initHeader)
  // that the language has changed so they can re-render any text that
  // isn't bound through `data-i18n` directly.
  document.dispatchEvent(
    new CustomEvent("sw:langchange", { detail: { lang } })
  );
}

function initLang() {
  // English is the canonical default - we no longer auto-pick from
  // navigator.language, only from a previous explicit toggle stored in
  // localStorage. This matches how the lang toggle is treated as an
  // intentional user preference rather than a locale guess.
  const stored = localStorage.getItem("sw.lang");
  const lang = stored === "es" ? "es" : "en";
  applyLang(lang);

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = currentLang === "en" ? "es" : "en";
      applyLang(next);
      localStorage.setItem("sw.lang", next);
    });
  }
}

/* -------------------------------------------------------------
   THEME TOGGLE (dark / light)
   ------------------------------------------------------------- */
function initTheme() {
  // Brutalist site is dark-first; user can opt into light and we persist.
  const stored = localStorage.getItem("sw.theme");
  const theme = stored === "light" ? "light" : "dark";
  root.setAttribute("data-theme", theme);
  updateThemeColorMeta(theme);

  // Theme swap. We try the View Transitions API first because it does
  // a single GPU-composited cross-fade between an "old state" and a
  // "new state" snapshot of the page, instead of asking every element
  // to color-tween simultaneously. On engines that don't support it
  // (mostly Firefox right now) we simply apply the swap instantly -
  // a snappy repaint reads cleaner than the old global
  // `* { transition: background, color 380ms }` storm, which was the
  // very thing View Transitions were designed to replace. Skipped
  // entirely for users with reduced-motion preference.
  const apply = (next) => {
    root.setAttribute("data-theme", next);
    localStorage.setItem("sw.theme", next);
    updateThemeColorMeta(next);
  };
  const swapTheme = (next) => {
    if (prefersReducedMotion) {
      apply(next);
      return;
    }
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(() => apply(next));
      return;
    }
    apply(next);
  };

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("animationend", (e) => {
      if (e.animationName === "themeToggleSpin") {
        btn.classList.remove("is-spinning");
      }
    });
    btn.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      // restart spin animation cleanly even on rapid repeated clicks
      btn.classList.remove("is-spinning");
      void btn.offsetWidth;
      btn.classList.add("is-spinning");
      swapTheme(next);
    });
  }
}

function updateThemeColorMeta(theme) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#f9f8f5");
}

/* -------------------------------------------------------------
   BOOT LOADER
   ------------------------------------------------------------- */
function initBoot() {
  const boot = document.getElementById("boot");
  const bar = boot && boot.querySelector(".boot__bar span");
  const pct = document.getElementById("bootPct");
  if (!boot) return;

  /* The boot loader is a deliberate brutalist beat (brand + bar + `00N`
     counter reading out), not a gate we're trying to get rid of. Pacing
     intentionally kept close to the original feel - random increment is
     `6..20` per tick so the bar visibly jitters its way up over 5-17
     ticks, each tick is ~108ms (a hair under the old 110ms, imperceptible
     but shaves a tiny bit of total hold), and the post-100 hold + fade
     let the full bar + "100" read before the page appears. */
  let p = 0;
  const tick = () => {
    p += Math.random() * 14 + 6;
    if (p >= 100) p = 100;
    if (bar) bar.style.transform = `scaleX(${p / 100})`;
    if (pct) pct.textContent = String(Math.floor(p)).padStart(3, "0");
    if (p < 100) {
      setTimeout(tick, 108);
    } else {
      setTimeout(() => {
        boot.classList.add("is-done");
        setTimeout(() => boot.remove(), 600);
      }, 200);
    }
  };
  setTimeout(tick, 100);
}

/* -------------------------------------------------------------
   HEADER, NAV, SCROLL PROGRESS, ACTIVE LINKS
   ------------------------------------------------------------- */
/* Flip `data-resizing` on <html> whenever the window is being
   resized. CSS pairs with this to suppress transitions on elements
   whose *ruleset itself* is media-query-bound (.header__nav in
   particular), which otherwise animate their transform / background /
   height when the viewport crosses the mobile breakpoint - making the
   drawer briefly appear to "open and close" as the mobile styles
   activate. The attribute is cleared after a short debounce once
   resize settles, so normal transitions resume for user interactions
   (scroll condense, burger open/close, theme switch, etc). */
/* Central resize broker.
   - Registers a single native `resize` listener.
   - Coalesces bursts of native events into one `sw:resize` custom
     event per animation frame (the screen can't update faster than
     that anyway, so handling each raw event is wasted work).
   - Also maintains `data-resizing` on <html> for the CSS transition
     suppression rules (see main.css), cleared 160ms after the
     resize burst stops.
   Every downstream module (header, cursor, marquee, hero cells,
   etc.) subscribes to `sw:resize` instead of `resize` - so the page
   keeps one shared listener and a single rAF coalescer, not one per
   subsystem. */
function initResizeGuard() {
  const root = document.documentElement;
  let clearT = 0;
  let pending = false;
  const dispatch = () => {
    pending = false;
    root.setAttribute("data-resizing", "");
    window.dispatchEvent(new CustomEvent("sw:resize"));
    clearTimeout(clearT);
    clearT = setTimeout(
      () => root.removeAttribute("data-resizing"),
      160
    );
  };
  window.addEventListener(
    "resize",
    () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(dispatch);
    },
    { passive: true }
  );
}

function initHeader() {
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".header__nav");
  const progress = document.getElementById("scrollProgress");
  const links = document.querySelectorAll(".header__nav__link");
  const sectionBadge = document.querySelector(".header__section");
  const sectionBadgeName = document.getElementById("headerSectionName");

  /* Header condense behavior. Once the user has scrolled past most of
     the hero we collapse the chrome into a tighter HUD-style readout
     (height shrinks, glass background, accent underline, brackets slide
     in, "/WEB" label retracts, section badge reveals). The class lives
     on BOTH the header (so the header itself can react in CSS) and on
     the document root (so the scroll-progress bar and the mobile drawer
     can also follow the new height). The threshold is tied to the
     viewport so it always corresponds to "you've left the hero" rather
     than a hardcoded pixel value that breaks at small/large screens. */
  const condenseThreshold = () =>
    Math.min(Math.max(window.innerHeight * 0.55, 320), 560);

  let condensed = false;
  const updateCondensed = (next) => {
    if (next === condensed) return;
    condensed = next;
    if (header) header.classList.toggle("is-condensed", next);
    root.classList.toggle("is-header-condensed", next);
  };

  /* rAF-coalesced scroll handler. Native `scroll` fires up to
     ~100x/sec on a 120Hz trackpad flick, and each call here reads
     `scrollHeight` + `innerHeight` (forced layout for the progress
     ratio) on top of the class-toggle work. Coalescing to one update
     per animation frame caps the work at the display's refresh rate
     with zero visible difference - the browser only paints at the
     same rate anyway. */
  let scrollRaf = 0;
  const runScrollUpdate = () => {
    scrollRaf = 0;
    const y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 8);
    }
    /* Tiny hysteresis (~8px) keeps the state from flickering when the
       user parks near the threshold and the page settles. */
    if (!condensed && y > condenseThreshold()) updateCondensed(true);
    else if (condensed && y < condenseThreshold() - 8) updateCondensed(false);

    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? y / max : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    }
  };
  const onScroll = () => {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(runScrollUpdate);
  };
  runScrollUpdate();
  window.addEventListener("scroll", onScroll, { passive: true });
  // Re-check on resize because the threshold depends on viewport height.
  // Subscribes to the central broker - see initResizeGuard.
  window.addEventListener("sw:resize", onScroll);

  if (burger && nav) {
    // backdrop scrim that dims the page behind the open mobile menu and
    // also acts as a click-outside-to-close target.
    const scrim = document.createElement("div");
    scrim.className = "nav-scrim";
    scrim.setAttribute("aria-hidden", "true");
    document.body.appendChild(scrim);

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      scrim.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      // lock background scroll while the menu is open
      document.body.style.overflow = open ? "hidden" : "";
    };

    burger.addEventListener("click", () => {
      setOpen(!nav.classList.contains("is-open"));
    });
    scrim.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        burger.focus();
      }
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );

    /* Resize-out safety net: if the user opens the mobile drawer at a
       narrow width and then widens the viewport past the mobile
       breakpoint, the CSS hides the drawer + burger but the JS state
       (scroll lock, `is-open` classes) would otherwise persist - leaving
       the page un-scrollable. Watch the breakpoint and force-close
       whenever we cross into desktop. Mirrors the `max-width: 760px`
       media query in main.css. */
    const desktopMQ = window.matchMedia("(min-width: 761px)");
    const onBreakpointChange = (e) => {
      if (e.matches && nav.classList.contains("is-open")) {
        setOpen(false);
      }
    };
    if (desktopMQ.addEventListener) {
      desktopMQ.addEventListener("change", onBreakpointChange);
    } else if (desktopMQ.addListener) {
      desktopMQ.addListener(onBreakpointChange);
    }
  }

  // active section highlight + HUD section badge
  /* The hero is observed alongside the real content sections so that
     scrolling back up into it cleanly resets the active-link + badge
     state. Without this, the last active section's `.is-active` class
     and the badge label get stuck on the previous value (e.g. "ABOUT"
     stays highlighted even when the user has returned to the hero). */
  const sections = ["hero", "about", "skills", "work", "experience", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  /* Maps the DOM section id to the matching `data-i18n` key already
     used by the nav links so the badge auto-stays in sync with whatever
     localized label the rest of the chrome is showing. */
  const SECTION_I18N_KEY = {
    about: "nav.about",
    skills: "nav.skills",
    work: "nav.work",
    experience: "nav.exp",
    contact: "nav.contact",
  };

  let currentSectionId = "";
  let badgeChangeTimer = 0;
  const renderSectionBadge = () => {
    if (!sectionBadgeName) return;
    const key = SECTION_I18N_KEY[currentSectionId];
    const dict = I18N[currentLang] || I18N.en;
    const next = (key && dict[key]) || "";
    /* Toggle an `is-empty` flag on the badge so CSS can collapse the
       pill entirely when there's no active section (hero), rather than
       leaving a stray caret hanging in the condensed header. */
    if (sectionBadge) sectionBadge.classList.toggle("is-empty", next === "");
    if (sectionBadgeName.textContent === next) return;
    /* Quick fade-out -> swap text -> fade-in via the .is-changing class
       on the badge. Keeps the readout from flicker-popping when you
       cross from one section into the next. */
    if (sectionBadge) sectionBadge.classList.add("is-changing");
    clearTimeout(badgeChangeTimer);
    badgeChangeTimer = setTimeout(() => {
      sectionBadgeName.textContent = next;
      if (sectionBadge) sectionBadge.classList.remove("is-changing");
    }, 140);
  };

  // Initial state: no active section, badge collapsed.
  renderSectionBadge();

  // Re-render the badge text when the language toggle fires.
  document.addEventListener("sw:langchange", renderSectionBadge);

  if (sections.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        /* At the hero<->about crossover the observer can fire for both
           entries in the same batch. Processing entries in iteration
           order risks the hero clearing state AFTER about sets it
           (leaving the badge blank when we're actually in about).
           Instead, scan the batch once and prefer any content section
           over the hero. Only fall back to "clear" if the hero is the
           only thing entering the viewport band this tick. */
        let contentId = null;
        let heroEntering = false;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.id === "hero") {
            heroEntering = true;
          } else {
            contentId = entry.target.id;
          }
        });

        if (contentId) {
          links.forEach((l) =>
            l.classList.toggle(
              "is-active",
              l.getAttribute("href") === "#" + contentId
            )
          );
          currentSectionId = contentId;
          renderSectionBadge();
        } else if (heroEntering) {
          links.forEach((l) => l.classList.remove("is-active"));
          currentSectionId = "";
          renderSectionBadge();
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }
}

/* -------------------------------------------------------------
   REVEAL ON SCROLL
   ------------------------------------------------------------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  // Once the entrance animation finishes we mark the element with
  // .reveal-done so CSS can drop `transform` from its transition list.
  // Why: .reveal transitions both opacity AND transform for 700ms, and
  // any element that's also [data-tilt] would otherwise have its
  // JS-driven inline transform fighting that 700ms interpolation
  // forever (the symptom: skills/about/contact tilt feeling laggy or
  // sticking at weird angles). Allow up to 700ms transition + 160ms
  // stagger + a small buffer.
  const REVEAL_DONE_MS = 1000;
  const markDone = (el) => {
    setTimeout(() => el.classList.add("reveal-done"), REVEAL_DONE_MS);
  };

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => {
      el.classList.add("is-visible");
      markDone(el);
    });
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          markDone(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );
  els.forEach((el) => io.observe(el));
}

/* -------------------------------------------------------------
   3D TILT (subtle, on cards with [data-tilt])
   ------------------------------------------------------------- */
function initTilt() {
  if (prefersReducedMotion) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  // IMPORTANT: only attach to elements whose CSS does NOT also transition
  // `transform`. A CSS `transition: transform ...ms` rule fights the
  // per-frame inline `style.transform` writes below - the browser tries
  // to interpolate to each new value over the transition duration, but
  // the next rAF tick overwrites it, producing the laggy "sometimes
  // works, sometimes sticks" behaviour. The four selectors that opt in
  // (.about__card, .skills__col, .exp__item__body, .work__item__frame,
  // .contact__form) have all been audited to NOT transition transform.
  const max = 2; // degrees - kept low for a subtle, brutalist feel
  const ease = 0.18;

  const els = document.querySelectorAll("[data-tilt]");
  els.forEach((el) => {
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const animate = () => {
      curX += (targetX - curX) * ease;
      curY += (targetY - curY) * ease;
      el.style.transform = `perspective(1000px) rotateX(${curY}deg) rotateY(${curX}deg) translateZ(0)`;
      if (
        Math.abs(targetX - curX) > 0.01 ||
        Math.abs(targetY - curY) > 0.01
      ) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = 0;
      }
    };

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = px * max;
      targetY = -py * max;
      if (!raf) raf = requestAnimationFrame(animate);
    });
    el.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = requestAnimationFrame(animate);
    });
  });
}

/* -------------------------------------------------------------
   FRACTAL CURSOR - particle trail with physics
   - Velocity-driven core size + spawn count
   - Particles use chaotic/orbital motion (sin/cos curl-noise feel)
   - Bright cycling HSL palette + additive blending for color pop
   - Light recursion: aging particles spawn smaller children
   ------------------------------------------------------------- */
function initCursor() {
  const canvas = document.getElementById("cursorCanvas");
  const core = document.getElementById("cursorCore");
  if (!canvas || !core) return;
  if (window.matchMedia("(pointer: coarse)").matches || prefersReducedMotion) {
    canvas.remove();
    core.remove();
    return;
  }

  body.classList.add("has-custom-cursor");
  const ctx = canvas.getContext("2d", { alpha: true });
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0;
  let H = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("sw:resize", resize);

  // mouse / pointer
  const mouse = { x: W / 2, y: H / 2, prevX: W / 2, prevY: H / 2, vx: 0, vy: 0, speed: 0 };
  let down = false;
  let wasDown = false; // edge-detect for click burst

  const onMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("mousedown", (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    down = true;
  });
  window.addEventListener("mouseup", () => (down = false));
  window.addEventListener("blur", () => (down = false));

  // pointer-aware hover detection - make core bigger on interactive elements
  const interactiveSel = "a, button, input, textarea, [data-tilt], .work__item__frame, .marquee";
  let isHover = false;
  document.addEventListener(
    "mouseover",
    (e) => {
      isHover = !!(e.target && e.target.closest && e.target.closest(interactiveSel));
    },
    true
  );

  // core spring follow
  const corePos = { x: W / 2, y: H / 2 };
  let coreScale = 1;

  // particles
  const particles = [];
  const MAX_PARTICLES = 420;
  let canvasDirty = false;

  // warm "ember" palette - matches the brand orange / sunset bg
  // ~10 (red-orange) .. ~46 (amber-yellow). occasional hotter cores allowed.
  function emberHue() {
    return 10 + Math.random() * 36;
  }

  /* ---- Pre-baked outer-glow sprites ----
     At 420 particles * 60fps, the old code called `createRadialGradient`
     + 3x `addColorStop` + a large `arc`/`fill` **25 200 times/sec** just
     for the outer halo layer. Each of those allocated a fresh
     CanvasGradient object - huge GC churn on the main thread.

     Instead: pre-bake an offscreen sprite per (hue, light) bucket and
     `drawImage` it per particle, modulating opacity via `globalAlpha`.
     The sprite uses the **same 3-stop gradient recipe** as the original
     code (warm halo, slightly-cooler mid-stop, transparent rim), just
     computed once at load.

     We bucket on TWO axes:
       - hue (8 buckets across 10..46deg) - fresh particles start near
         amber-yellow and cool toward red-orange over their lifetime
       - light (3 buckets across 46..72%) - fast fresh "hot" particles
         render their halo brighter than slow dying ones, but the top
         bucket is capped at 72% (warm amber) instead of the old 78%
         (near cream-yellow) - three additive layers (outer halo +
         bright core + hot-peak) were piling up past pure white in
         `lighter` blend mode, blowing out the cluster center. Keeping
         the top halo bucket firmly in amber territory keeps the color
         story reading "hot orange ember" instead of "white flame".
     Quantizing to 8x3 = 24 sprites preserves the full dynamic look
     (heat still reads as hotter halo) while eliminating the per-frame
     gradient allocation. */
  const GLOW_SPRITE_RES = 64;
  const GLOW_HUE_BUCKETS = 8;
  const GLOW_LIGHT_BUCKETS = 3;
  const GLOW_HUE_MIN = 8;
  const GLOW_HUE_MAX = 46;
  const GLOW_LIGHT_MIN = 46;
  const GLOW_LIGHT_MAX = 72;
  const glowSprites = [];
  for (let h = 0; h < GLOW_HUE_BUCKETS; h++) {
    const hue =
      GLOW_HUE_MIN +
      (h / (GLOW_HUE_BUCKETS - 1)) * (GLOW_HUE_MAX - GLOW_HUE_MIN);
    const row = [];
    for (let l = 0; l < GLOW_LIGHT_BUCKETS; l++) {
      const light =
        GLOW_LIGHT_MIN +
        (l / (GLOW_LIGHT_BUCKETS - 1)) * (GLOW_LIGHT_MAX - GLOW_LIGHT_MIN);
      const s = document.createElement("canvas");
      s.width = GLOW_SPRITE_RES;
      s.height = GLOW_SPRITE_RES;
      const sc = s.getContext("2d");
      const mid = GLOW_SPRITE_RES / 2;
      const g = sc.createRadialGradient(mid, mid, 0, mid, mid, mid);
      g.addColorStop(0, `hsla(${hue}, 100%, ${light}%, 1)`);
      g.addColorStop(
        0.35,
        `hsla(${Math.max(0, hue - 6)}, 100%, ${Math.max(36, light - 14)}%, 0.55)`,
      );
      g.addColorStop(1, `hsla(${hue}, 100%, ${light}%, 0)`);
      sc.fillStyle = g;
      sc.fillRect(0, 0, GLOW_SPRITE_RES, GLOW_SPRITE_RES);
      row.push(s);
    }
    glowSprites.push(row);
  }
  function glowSpriteFor(hue, light) {
    const ht = (hue - GLOW_HUE_MIN) / (GLOW_HUE_MAX - GLOW_HUE_MIN);
    const lt = (light - GLOW_LIGHT_MIN) / (GLOW_LIGHT_MAX - GLOW_LIGHT_MIN);
    const hi = Math.max(
      0,
      Math.min(GLOW_HUE_BUCKETS - 1, Math.round(ht * (GLOW_HUE_BUCKETS - 1))),
    );
    const li = Math.max(
      0,
      Math.min(
        GLOW_LIGHT_BUCKETS - 1,
        Math.round(lt * (GLOW_LIGHT_BUCKETS - 1)),
      ),
    );
    return glowSprites[hi][li];
  }

  function spawn(x, y, _baseHue, life, gen, sizeMul, vx, vy) {
    if (particles.length >= MAX_PARTICLES) return;
    const angle = Math.random() * Math.PI * 2;
    const sp = (Math.random() * 1.6 + 0.6) * sizeMul;
    particles.push({
      x,
      y,
      vx: vx !== undefined ? vx : Math.cos(angle) * sp,
      vy: vy !== undefined ? vy : Math.sin(angle) * sp,
      // chaotic offsets
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      freqX: 0.02 + Math.random() * 0.05,
      freqY: 0.02 + Math.random() * 0.05,
      r: (Math.random() * 2.8 + 1.4) * sizeMul,
      hue: emberHue(),
      // tiny per-particle jitter for spark "crackle"
      jit: 0.04 + Math.random() * 0.06,
      life,
      max: life,
      gen,
    });
  }

  function step() {
    // velocity
    mouse.vx = mouse.x - mouse.prevX;
    mouse.vy = mouse.y - mouse.prevY;
    const speed = Math.hypot(mouse.vx, mouse.vy);
    // ease the speed reading so the core scales smoothly
    mouse.speed += (speed - mouse.speed) * 0.18;
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;

    // core spring follow + scale by velocity (with cap), grows on hover & click
    corePos.x += (mouse.x - corePos.x) * 0.22;
    corePos.y += (mouse.y - corePos.y) * 0.22;
    const targetScale =
      1 + Math.min(mouse.speed / 28, 1.6) + (isHover ? 0.5 : 0) + (down ? 0.7 : 0);
    coreScale += (targetScale - coreScale) * 0.18;
    core.style.transform = `translate3d(${corePos.x - 13}px, ${corePos.y - 13}px, 0) scale(${coreScale})`;
    const ring = core.firstElementChild;
    if (ring) {
      ring.style.transform = `rotate(${(performance.now() / 90) * (1 + mouse.speed / 220)}deg)`;
    }

    // ignite: radial burst on the exact click frame
    if (down && !wasDown) {
      const burst = 28;
      for (let i = 0; i < burst; i++) {
        const a = (i / burst) * Math.PI * 2 + Math.random() * 0.5;
        const sp = 2.4 + Math.random() * 4.2;
        spawn(
          mouse.x,
          mouse.y,
          0,
          90 + Math.random() * 60,
          0,
          1.35,
          Math.cos(a) * sp,
          Math.sin(a) * sp,
        );
      }
    }
    wasDown = down;

    // continuous trail - only while click is held
    if (down) {
      const count = Math.min(Math.floor(speed / 3) + 2, 9);
      // sparks inherit a slice of mouse velocity but in the *trailing*
      // direction (negative) so they fall behind the cursor naturally,
      // with a perpendicular fan-out for that "ember spray" feel
      const inheritFactor = 0.28;
      for (let i = 0; i < count; i++) {
        const t = (i + 1) / (count + 1);
        const x = mouse.prevX + (mouse.x - mouse.prevX) * t;
        const y = mouse.prevY + (mouse.y - mouse.prevY) * t;
        // perpendicular axis to mouse motion
        const vlen = Math.hypot(mouse.vx, mouse.vy) + 0.0001;
        const perpX = -mouse.vy / vlen;
        const perpY = mouse.vx / vlen;
        const fan = (Math.random() - 0.5) * 2.6;
        const vx = -mouse.vx * inheritFactor + perpX * fan + (Math.random() - 0.5) * 0.6;
        const vy = -mouse.vy * inheritFactor + perpY * fan + (Math.random() - 0.5) * 0.6;
        spawn(x, y, 0, 90 + Math.random() * 50, 0, 1, vx, vy);
      }
    }

    // when idle (no held click and no live particles) skip the heavy
    // particle loop - we still clearRect once if needed so any last frame
    // doesn't linger.
    if (particles.length === 0 && !down) {
      if (canvasDirty) {
        ctx.clearRect(0, 0, W, H);
        canvasDirty = false;
      }
      requestAnimationFrame(step);
      return;
    }
    canvasDirty = true;

    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    const t = performance.now() * 0.001;

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      // chaotic curl-noise-like force (stronger)
      const cx = Math.sin(p.x * 0.012 + t * 0.7 + p.phaseX) * 0.14;
      const cy = Math.cos(p.y * 0.012 + t * 0.7 + p.phaseY) * 0.14;
      // attraction to a faster orbiting point near the core (fractal feel)
      const ox = corePos.x + Math.cos(t * 1.8 + p.phaseX) * 38;
      const oy = corePos.y + Math.sin(t * 1.8 + p.phaseY) * 38;
      const dx = ox - p.x;
      const dy = oy - p.y;
      const d = Math.hypot(dx, dy) + 0.001;
      const pull = Math.min(0.028, 9 / (d * d));
      // perpendicular swirl component
      const swirl = 0.12 / d;
      p.vx += dx * pull + cx + -dy * swirl;
      p.vy += dy * pull + cy + dx * swirl;
      // tiny per-particle jitter for spark crackle
      p.vx += (Math.random() - 0.5) * p.jit;
      p.vy += (Math.random() - 0.5) * p.jit;
      // featherweight gravity - embers settle gently
      p.vy += 0.018;
      // damping (slightly stronger for cleaner trails)
      p.vx *= 0.952;
      p.vy *= 0.952;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;

      const lifeRatio = p.life / p.max;
      const alpha = Math.max(0, lifeRatio) * 0.95;
      const r = p.r * (0.45 + 0.65 * lifeRatio);

      // velocity-based "heat" - fast fresh particles burn brighter
      const v = Math.hypot(p.vx, p.vy);
      const heat = Math.min(1, lifeRatio * 0.7 + Math.min(v / 5, 0.45));
      // hue cools from amber-yellow toward deep red as the spark dies
      const hue = Math.max(0, p.hue - (1 - lifeRatio) * 16);
      const light = 46 + heat * 32; // 46..78

      // outer glow - pre-baked sprite, opacity modulated via globalAlpha.
      // Same visual recipe as the old 3-stop createRadialGradient call,
      // just drawn from an offscreen canvas instead of reconstructing
      // the gradient per frame. The (hue, light) bucket lookup keeps
      // the "hot particles burn brighter" look intact - see sprite
      // cache setup above.
      const glow = r * 6.5;
      const sprite = glowSpriteFor(hue, light);
      ctx.globalAlpha = alpha;
      ctx.drawImage(sprite, p.x - glow, p.y - glow, glow * 2, glow * 2);
      ctx.globalAlpha = 1;

      // bright same-hue core - warmer / slightly less bright than the
      // old `hue+8, light+16` recipe (that was reading as pale yellow
      // and, stacked additively with the hot peak below, blew the
      // cluster center past white). Keeping the core in proper warm-
      // amber territory gives good contrast against black while the
      // outer halo does the color-story work.
      ctx.fillStyle = `hsla(${Math.min(46, hue + 4)}, 100%, ${Math.min(78, light + 10)}%, ${Math.min(1, alpha + 0.12)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // warm peak - only for fresh, fast sparks. Previously this drew
      // a near-white dot (hsla(46,100%,96%,alpha*0.9)) which, overlaid
      // additively on the bright core + outer halo, stacked straight
      // past pure white when particles clustered. Swapped to a warm
      // cream-amber (hsla(38,100%,74%,...)) at lower alpha so the hot
      // centers still read as the brightest / hottest point of the
      // ember without washing out to white. Higher heat threshold
      // (0.6) also trims the pool of particles that get the extra
      // pass, keeping the effect feeling intentional.
      if (heat > 0.6) {
        ctx.fillStyle = `hsla(38, 100%, 74%, ${Math.min(1, alpha * 0.6 * heat)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // recursive fractal child spawn (limited to gen 0 -> gen 1)
      if (
        p.gen < 1 &&
        p.life === Math.floor(p.max * 0.5) &&
        Math.random() < 0.7 &&
        particles.length < MAX_PARTICLES - 4
      ) {
        for (let k = 0; k < 3; k++) {
          spawn(p.x, p.y, 0, 36, p.gen + 1, 0.5);
        }
      }

      if (p.life <= 0) {
        particles.splice(i, 1);
      }
    }

    ctx.globalCompositeOperation = "source-over";

    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  // hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    core.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    core.style.opacity = "1";
  });
}

/* -------------------------------------------------------------
   MARQUEE - infinite linear scroll (pure CSS) + drag/touch override

   Auto-scroll is a plain CSS `@keyframes` animation (defined in
   main.css), running on the compositor thread - zero per-frame JS,
   zero main-thread cost in the steady state. Items use
   `padding-inline` instead of flex `gap` so the cycle distance is
   exactly `scrollWidth/2` and the CSS `translateX(-50%)` loop is
   visually seamless.

   JS does three things:
   1. After webfonts are ready (so widths are final), set
      `--marquee-duration = scrollWidth / 2 / PX_PER_SEC` so the
      scroll speed stays constant regardless of viewport / content
      width. Then add `.is-ready` to start the animation.
   2. Re-measure on resize so the speed stays constant.
   3. Drag/touch: pause the CSS animation by adding `.is-paused`
      (which sets `animation: none`, letting the inline `transform`
      take effect), update the inline `transform` while the user is
      dragging, then on release compute the `animation-delay` that
      corresponds to the current visual offset and remove
      `.is-paused` to hand back to the compositor seamlessly.
   ------------------------------------------------------------- */
function initMarquee() {
  const PX_PER_SEC = 30;

  document.querySelectorAll(".marquee").forEach((m) => {
    const track = m.querySelector(".marquee__track");
    if (!track) return;

    // Reduced motion: a CSS media query already disables the keyframes
    // and we skip the drag plumbing too (nothing meaningful to drag).
    if (prefersReducedMotion) return;

    let durationS = 50; // kept in sync with the --marquee-duration var
    let halfWidth = 0; // scrollWidth / 2 (one full cycle distance)

    const apply = () => {
      const half = track.scrollWidth / 2;
      if (half <= 0) return;
      halfWidth = half;
      durationS = half / PX_PER_SEC;
      track.style.setProperty("--marquee-duration", `${durationS.toFixed(2)}s`);
    };

    if ("ResizeObserver" in window) {
      new ResizeObserver(apply).observe(track);
    } else {
      window.addEventListener("sw:resize", apply);
    }

    // Defer until webfonts are ready so our first measurement uses the
    // final widths. Safety timeout for missing/slow Fonts API.
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      apply();
      m.classList.add("is-ready");
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(start, start);
      setTimeout(start, 800);
    } else {
      start();
    }

    /* ---------- drag / touch ---------- */

    // Read the CURRENT visual translateX in CSS px from the live
    // computed style. Works whether the value is being driven by the
    // running CSS animation, by an inline `transform`, or by nothing.
    const readVisualOffset = () => {
      const t = getComputedStyle(track).transform;
      if (!t || t === "none") return 0;
      try {
        return new DOMMatrix(t).m41;
      } catch (_) {
        return 0;
      }
    };

    // Normalize any offset into the natural cycle range [-halfWidth, 0].
    // Because the markup duplicates its items, any value modulo halfWidth
    // is visually identical to the original - so wrapping during drag /
    // fling keeps the track visually continuous no matter how far the
    // user drags or flings past the boundary.
    const wrap = (off) => {
      if (halfWidth <= 0) return off;
      let v = off % halfWidth;
      if (v > 0) v -= halfWidth;
      return v;
    };

    // Hand control back to the CSS animation, picking up from
    // `visualOffset` (a negative pixel value in [-halfWidth, 0]). The
    // trick: a CSS animation with `animation-delay: -t` behaves as if
    // it has already been running for t seconds, so we can teleport
    // the animation's "current time" by setting the right negative
    // delay. Because the duplicated content makes 0 and -halfWidth
    // visually identical, looping is invisible regardless of where we
    // resume.
    const resumeCss = (visualOffset) => {
      if (halfWidth <= 0) {
        m.classList.remove("is-paused");
        return;
      }
      // Normalize to [-halfWidth, 0].
      let v = visualOffset % halfWidth;
      if (v > 0) v -= halfWidth;
      const fraction = -v / halfWidth; // [0, 1]
      const delay = -(fraction * durationS); // negative seconds
      // Set the delay BEFORE removing .is-paused so the animation
      // re-applies with the correct phase on its very first frame
      // (no flicker back to translateX(0)).
      track.style.animationDelay = `${delay.toFixed(3)}s`;
      track.style.removeProperty("transform");
      m.classList.remove("is-paused");
    };

    let dragging = false;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startOffset = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0; // px / 16ms - feel matches the previous fling tuning
    let axis = null; // "h" | "v" | null
    let flingRaf = 0;

    const cancelFling = () => {
      if (flingRaf) {
        cancelAnimationFrame(flingRaf);
        flingRaf = 0;
      }
    };

    m.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      cancelFling();
      // Snapshot where the animation visually is right now, then pin
      // the inline transform to that exact pixel and pause the CSS
      // animation. The hand-off is invisible because we set the inline
      // transform to the same value the animation was painting.
      const visual = readVisualOffset();
      track.style.transform = `translate3d(${visual}px, 0, 0)`;
      m.classList.add("is-paused");
      startOffset = visual;
      dragging = true;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      lastX = e.clientX;
      lastTime = performance.now();
      velocity = 0;
      axis = null;
      m.classList.add("is-dragging");
      try {
        m.setPointerCapture(e.pointerId);
      } catch (_) {}
    });

    m.addEventListener("pointermove", (e) => {
      if (!dragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // axis lock on first significant move
      if (axis === null) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        if (Math.abs(dx) >= Math.abs(dy)) {
          axis = "h";
        } else {
          // vertical intent - bow out, let the page scroll, restore CSS auto.
          axis = "v";
          dragging = false;
          pointerId = null;
          m.classList.remove("is-dragging");
          resumeCss(startOffset);
          return;
        }
      }

      track.style.transform = `translate3d(${wrap(startOffset + dx)}px, 0, 0)`;
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      velocity = -((e.clientX - lastX) / dt) * 16;
      lastX = e.clientX;
      lastTime = now;
      e.preventDefault();
    });

    const release = (e) => {
      if (!dragging) return;
      if (e && e.pointerId !== pointerId) return;
      dragging = false;
      pointerId = null;
      axis = null;
      m.classList.remove("is-dragging");

      let offsetNow = readVisualOffset();
      let v = velocity;

      // No meaningful flick - resume CSS auto-scroll immediately.
      if (Math.abs(v) < 0.05) {
        resumeCss(offsetNow);
        return;
      }

      // Brief JS-driven inertia phase: continue the user's flick with
      // exponential decay, then hand back to the CSS animation once
      // velocity dies. Real-time `dt` so the feel is identical at
      // 60 / 120 / 144 Hz.
      let lastT = performance.now();
      const flingTick = (now) => {
        const dt = Math.min(64, now - lastT);
        lastT = now;
        offsetNow = wrap(offsetNow - v * (dt / 16));
        v *= Math.pow(0.93, dt / 16);
        track.style.transform = `translate3d(${offsetNow}px, 0, 0)`;
        if (Math.abs(v) < 0.05) {
          flingRaf = 0;
          resumeCss(offsetNow);
        } else {
          flingRaf = requestAnimationFrame(flingTick);
        }
      };
      flingRaf = requestAnimationFrame(flingTick);
    };
    m.addEventListener("pointerup", release);
    m.addEventListener("pointercancel", release);
  });
}

/* -------------------------------------------------------------
   FOOTER YEAR
   ------------------------------------------------------------- */
function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

/* -------------------------------------------------------------
   FORM ENHANCEMENT - gentle confirmation when Netlify intercepts
   ------------------------------------------------------------- */
function initForm() {
  const form = document.querySelector(".contact__form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    // Netlify forms intercept on its own when data-netlify is present.
    // We still flash a subtle success state in case the page doesn't redirect.
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.style.transition = "background 200ms";
      const original = btn.innerHTML;
      setTimeout(() => {
        if (!form.isConnected) return;
        btn.innerHTML =
          currentLang === "es" ? "ENVIANDO…" : "SENDING…";
      }, 0);
      // restore after a moment in case form stays
      setTimeout(() => {
        if (form.isConnected && btn.isConnected) btn.innerHTML = original;
      }, 4000);
    }
  });
}

/* -------------------------------------------------------------
   NUCLEI
   Inject a small "nucleus" gradient cluster behind specific titles only:
   the hero accent line and every section heading. Each nucleus is a trio
   of orange/amber/red blurred orbs that orbit on different periods and
   slowly rotate together - a localized, elegant accent rather than a
   global background wash. Markup is injected from JS to keep index.html
   semantic and untouched.
   ------------------------------------------------------------- */
function initNuclei() {
  if (prefersReducedMotion) return;
  const targets = [
    document.querySelector(".hero__title"),
    ...document.querySelectorAll(".section__title"),
  ].filter(Boolean);

  targets.forEach((el, idx) => {
    const n = document.createElement("span");
    n.className = "nucleus";
    n.setAttribute("aria-hidden", "true");
    n.innerHTML = '<span class="nucleus__core"><i></i><i></i><i></i></span>';
    // negative delay -> orbits start mid-cycle, so adjacent nuclei never
    // sync up and the page never feels mechanical
    n.style.setProperty("--n-delay", `-${(idx * 1.7) % 5}s`);
    el.prepend(n);
  });
}

/* -------------------------------------------------------------
   ANIMATED HERO GRID CELLS
   Sprinkles brutalist micro-animations across random snapped grid cells
   so the background grid feels alive instead of static.
   ------------------------------------------------------------- */
function initHeroCells() {
  const layer = document.getElementById("heroCells");
  if (!layer) return;
  if (prefersReducedMotion) {
    layer.remove();
    return;
  }

  const CELL = 80;
  const TYPES = ["fill", "pulse", "spin", "flipy", "flipx"];
  const COUNT_BASE = 7;

  const populate = () => {
    layer.replaceChildren();
    const w = layer.clientWidth;
    const h = layer.clientHeight;
    if (w < CELL || h < CELL) return;

    const cols = Math.floor(w / CELL);
    const rows = Math.floor(h / CELL);
    if (!cols || !rows) return;

    // scale count with viewport so a wide hero gets more sparkle, mobile less
    const count = Math.min(
      COUNT_BASE,
      Math.max(3, Math.floor((cols * rows) / 14))
    );

    const used = new Set();
    let placed = 0;
    let attempts = 0;
    const offsetX = (w - cols * CELL) / 2;
    const offsetY = (h - rows * CELL) / 2;

    while (placed < count && attempts < count * 8) {
      attempts++;
      const c = Math.floor(Math.random() * cols);
      const r = Math.floor(Math.random() * rows);
      const key = `${c},${r}`;
      if (used.has(key)) continue;
      used.add(key);

      const type = TYPES[Math.floor(Math.random() * TYPES.length)];
      const el = document.createElement("div");
      el.className = `hero__cells__cell hero__cells__cell--${type}`;
      el.style.left = `${offsetX + c * CELL}px`;
      el.style.top = `${offsetY + r * CELL}px`;
      // CSS reads these via var() to drive the ::before animation timing
      // wide delay + long duration = sparse, asynchronous twinkles. First cell
      // gets a near-zero delay so something fires shortly after page load.
      const delay = placed === 0 ? Math.random() * 0.6 : Math.random() * 7;
      el.style.setProperty("--cell-delay", `${delay.toFixed(2)}s`);
      el.style.setProperty("--cell-dur", `${(8 + Math.random() * 8).toFixed(2)}s`);
      layer.appendChild(el);
      placed++;
    }
  };

  populate();

  // No periodic reshuffle. The sparse twinkle pattern already looks
  // randomized enough that a human eye can't tell which specific cells
  // are "lucky" over a long viewing session, and `replaceChildren()`
  // every 22s was re-creating 3-7 DOM nodes forever for a payoff nobody
  // could perceive. `populate()` runs once on load and again in the
  // resize-debounce below, which covers any viewport change.
  let resizeTimer = 0;
  window.addEventListener("sw:resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(populate, 220);
  });
}

/* -------------------------------------------------------------
   HERO RIFT  (easter-egg "tear in the grid")
   - Places a small suspicious <button> on a random 80px cell of the
     empty right-side area of the hero. Cell has a dashed brutalist
     outline that drifts on a slow multi-axis 2D+3D sway
     (rotateZ/Y/X, different sign combos on every keyframe so it
     never settles into a pattern), plus a subtle ambient halo fade
     on the button itself. Hover swaps the sway out for a stepped
     "hack glitch" burst - translate + skew + hue-rotate/invert at
     steps(8) timing so it reads as a corrupted signal. A small
     crosshair glyph fades in on hover so the cell reads as a hit
     target. The button is a real focusable control, so keyboard +
     screen-reader users can find it. The cell teleports to a fresh
     random grid position every IDLE_RELOCATE_MS with a smooth 3D
     flip-out / dwell / flip-in.
   - Clicking the hint (or typing the magic word "rift") triggers a
     ~2.5s canvas animation on a full-hero overlay:
       1. a 42-particle debris burst explodes outward from the hint
          center (sparks + rotating wireframe chunks + rare embers;
          4 hues matching the tear's chromatic-aberration palette)
       2. a jagged vertical rift opens — core is theme-inverse
          (white on dark / black on light), with an accent halo and
          a split-shadow ghost pass that reads as chromatic
          aberration. Fully theme-aware: the tear color is always
          opposite to --bg with an accent-color touch.
       3. continuous inverse-fg / accent sparks emit from the edges
          throughout the hold phase
       4. a small phosphor-glow hex readout ("0xFF TEAR / SIG::001")
          flickers during the hold phase
       5. rift seals from the ends inward
   - rAF loop only runs while active. Idle, the canvas is transparent
     and costs zero frames. Reduced-motion users get the effect
     removed entirely (both canvas + hint).
   - Hint respawns at a new random cell ~20s after each fire, so a
     long session can rediscover it a few times.
   ------------------------------------------------------------- */
function initHeroRift() {
  const canvas = document.getElementById("heroRift");
  const hint = document.getElementById("heroRiftHint");
  const hero = document.getElementById("hero");
  if (!canvas || !hint || !hero) return;

  // Reduced-motion users see neither the hint nor the rift. Remove
  // both so we don't leave an invisible clickable cell that would
  // trigger nothing on activation.
  if (prefersReducedMotion) {
    hint.remove();
    canvas.remove();
    return;
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  /* ---------- sizing / DPR ----------
     DPR capped at 2 (same rationale as cursor / nuclei): the effect
     is a low-frequency paint, not a pixel-perfect render, so paying
     for 3x pixel count on 3x displays buys nothing visible. */
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener("sw:resize", resize);

  /* ---------- suspicious hint placement + teleport lifecycle ----------
     Snap to the hero's 80px grid so the hint reads as "one of the grid
     cells, but different", not "a stray button". Prefer the right 40%
     of the hero horizontally + middle 60% vertically so it never
     collides with the SANTI title / CTAs / meta row.

     The hint doesn't just sit forever in one cell - every IDLE_RELOCATE_MS
     it performs a three-phase teleport: a slow accelerating dissolve
     (out), a beat of nothing (dwell), then a soft settle-in (in) at
     a new random cell. All three phases are CSS-driven via the
     .is-teleporting class + asymmetric transition easings; JS only
     owns the phase boundaries. After the rift fires, the hint stays
     hidden for POST_RIFT_MS and then reappears at a fresh cell. One
     DOM node is reused throughout, so there's never more than one
     hint at a time. */
  const CELL = 80;
  // Visible border is 80x80 but the button is 96x96 with the visible
  // cell centered via ::before inset:8px. HIT_INSET is how much the
  // hit box overhangs the visible border on every side - the JS
  // offsets left/top by -HIT_INSET so the visible cell still snaps
  // cleanly to the 80px grid. Keep in sync with CSS ::before inset.
  const HIT_INSET = 8;
  const IDLE_RELOCATE_MS = 16000; // quiet drift between teleports (user-clickable window)
  const POST_RIFT_MS = 8000;      // respawn after rift completes
  // Teleport phases. OUT (520ms, accelerating dissolve) + DWELL
  // (520ms, held invisible) + IN (860ms opacity fade + 720ms 3D
  // settle, from the default transition on .hero__rift__hint) =
  // ~1.9s total. The dwell is what sells "it's actually gone" -
  // no dwell and the cell just seems to jump across the grid. The
  // two setTimeout values below only cover the OUT + DWELL window
  // (CSS drives the IN); JS just needs to reposition the hint and
  // remove .is-teleporting by the 1040ms mark so the IN transition
  // can fire from the default state.
  const TELEPORT_OUT_MS = 520;
  const TELEPORT_DWELL_MS = 520;
  // Absolute upper bound on how long the is-teleporting class can
  // stay on the element. If something goes wrong (tab throttled,
  // timers starved, rAFs queued up, etc.) the safety watchdog forces
  // the class off at this deadline so the hint can never get stuck
  // unclickable. Only needs to cover OUT + DWELL + a little slack
  // (IN runs from the default-state transition once the class is
  // gone, so the IN duration isn't the watchdog's problem).
  const TELEPORT_SAFETY_MS = 2400;
  let relocateTimer = 0;
  let hintRespawn = 0;
  let teleportTimer = 0;   // tracks the in-flight teleport setTimeout so trigger() can cancel it
  let teleportWatchdog = 0; // safety net that force-clears .is-teleporting if a callback never does
  let lastCellKey = ""; // so we never teleport to the same cell twice

  const pickCell = () => {
    const heroRect = hero.getBoundingClientRect();
    if (heroRect.width < 1024) return null;
    const cols = Math.floor(heroRect.width / CELL);
    const rows = Math.floor(heroRect.height / CELL);
    const offsetX = (heroRect.width - cols * CELL) / 2;
    const offsetY = (heroRect.height - rows * CELL) / 2;
    // Retry a handful of times to avoid landing on the exact same
    // cell twice in a row (would read as "the hint didn't move").
    let col = 0, row = 0, key = lastCellKey;
    for (let i = 0; i < 6 && key === lastCellKey; i++) {
      col = Math.floor(cols * 0.6 + Math.random() * cols * 0.35);
      row = Math.floor(rows * 0.2 + Math.random() * rows * 0.6);
      key = `${col}:${row}`;
    }
    lastCellKey = key;
    return {
      left: offsetX + col * CELL,
      top: offsetY + row * CELL,
    };
  };

  const applyCell = (cell, fade = false) => {
    // Clear the safety watchdog FIRST (we may restart it below for
    // the fade-in path). The .is-teleporting class is handled per
    // branch below - the fade-in path deliberately LEAVES it on so
    // the IN transition can fire from opacity:0.
    clearTimeout(teleportWatchdog);
    teleportWatchdog = 0;
    if (!cell) {
      hint.classList.remove("is-teleporting");
      hint.hidden = true;
      return;
    }
    // Button is 96x96 but the VISIBLE border is 80x80 (::before at
    // inset:8px). Offset by -HIT_INSET so the visible cell still
    // snaps to the 80px grid while the hit box overhangs 8px on
    // every side - kills the "gotta click many times" bug.
    hint.style.left = `${cell.left - HIT_INSET}px`;
    hint.style.top = `${cell.top - HIT_INSET}px`;
    if (fade && hint.hidden) {
      // Post-rift respawn path. The element is currently
      // display:none (via [hidden]), which means flipping it
      // back to visible would normally pop in at full opacity -
      // CSS transitions can't run across a display:none -> block
      // boundary. Trick: plant .is-teleporting BEFORE making it
      // visible so the initial committed state is opacity:0 +
      // rotated 90°, force a reflow so that state is flushed,
      // then drop the class next frame so the default-state
      // transition (860ms opacity + 720ms transform settle)
      // plays from "invisible" back to "here". Watchdog guards
      // against the rAF callbacks never firing (tab throttling).
      hint.classList.add("is-teleporting");
      hint.hidden = false;
      // force the browser to commit the hidden->visible +
      // .is-teleporting state before we remove the class on the
      // next frame; without this the two changes coalesce and
      // no transition fires
      void hint.offsetHeight;
      teleportWatchdog = setTimeout(() => {
        hint.classList.remove("is-teleporting");
        teleportWatchdog = 0;
      }, TELEPORT_SAFETY_MS);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hint.classList.remove("is-teleporting");
          clearTimeout(teleportWatchdog);
          teleportWatchdog = 0;
        });
      });
    } else {
      // Idle path (or first placement). Element is already in
      // the DOM flow; just clear any lingering teleport state
      // and snap it into position.
      hint.classList.remove("is-teleporting");
      hint.hidden = false;
    }
  };

  // Try to respawn the hint at a valid cell. If layout isn't ready
  // yet (pickCell returns null because the hero rect measures too
  // narrow - can happen on the very first paint or during a
  // transient resize), retry on the next frame instead of giving up
  // and leaving the hint hidden forever. This is the "on load it's
  // not clickable" failure mode: initial measure happened too early.
  // `fade` propagates through to applyCell so post-rift respawns
  // fade in via the .is-teleporting trick instead of popping in.
  const tryApplyCell = (attempt = 0, fade = false) => {
    const c = pickCell();
    if (c) {
      applyCell(c, fade);
      return true;
    }
    if (attempt < 8) {
      requestAnimationFrame(() => tryApplyCell(attempt + 1, fade));
    }
    return false;
  };

  // Initial placement, deferred one frame so the hero layout has had
  // at least one paint pass. Without the defer, the very first call
  // to hero.getBoundingClientRect() can still be zeroed out on some
  // browsers, which made pickCell() return null and left the hint
  // permanently hidden on load.
  requestAnimationFrame(() => tryApplyCell());

  const teleportHint = () => {
    if (active) return;           // never teleport mid-rift
    if (hint.hidden) return;      // hidden = mid-rift cooldown
    const cell = pickCell();
    if (!cell) return;
    // Cancel any in-flight teleport (shouldn't happen given the
    // scheduleRelocate cadence, but defend against it anyway so we
    // can't ever double-schedule the flip-back).
    clearTimeout(teleportTimer);
    clearTimeout(teleportWatchdog);
    // Phase 1 (OUT): accelerating fade + 90° Y-flip + slight shrink,
    // driven by the .is-teleporting class on the hint. CSS handles
    // the actual transition; we just flip the class on.
    hint.classList.add("is-teleporting");
    // Safety watchdog: absolute deadline for the is-teleporting
    // class being present. If the callbacks below get starved
    // (tab throttled, timers backed up) this will force-clear the
    // class so the hint can never be stuck unclickable.
    teleportWatchdog = setTimeout(() => {
      if (!active) hint.classList.remove("is-teleporting");
      teleportWatchdog = 0;
    }, TELEPORT_SAFETY_MS);
    // Phase 2 (DWELL): held invisible for an extra beat, then
    // reposition (still invisible) and next frame drop the class to
    // start phase 3.
    teleportTimer = setTimeout(() => {
      teleportTimer = 0;
      if (active || hint.hidden) {
        hint.classList.remove("is-teleporting");
        clearTimeout(teleportWatchdog);
        teleportWatchdog = 0;
        return;
      }
      applyCell(cell); // note: applyCell() already clears is-teleporting + watchdog
      // Re-add the class immediately because applyCell just cleared
      // it - we need it ON for one more frame so the in-transition
      // has a starting point. Without this the flip-back snaps.
      hint.classList.add("is-teleporting");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          hint.classList.remove("is-teleporting");
        });
      });
    }, TELEPORT_OUT_MS + TELEPORT_DWELL_MS);
  };

  const scheduleRelocate = (delay) => {
    clearTimeout(relocateTimer);
    relocateTimer = setTimeout(() => {
      teleportHint();
      scheduleRelocate(IDLE_RELOCATE_MS);
    }, delay);
  };
  scheduleRelocate(IDLE_RELOCATE_MS);

  // Resize: reposition to a valid cell for the new viewport, but skip
  // the teleport animation - a resize is already a layout upheaval,
  // an animated flip on top of it would read as a glitch.
  window.addEventListener("sw:resize", () => {
    if (active) return;
    // Drop any in-flight teleport too - its stale position would
    // land the hint on the OLD viewport's grid after resize.
    clearTimeout(teleportTimer);
    teleportTimer = 0;
    tryApplyCell();
  });

  /* ---------- rift state ---------- */
  let active = false;
  let startT = 0;
  const DURATION = 2500;
  const MAX_LEN_RATIO = 0.38; // peak rift height as a fraction of canvas height
  const MAX_WIDTH = 11;       // peak rift width at its widest point (CSS px)
  const JAGGED_STEPS = 20;
  let tx = 0, ty = 0; // rift origin in canvas-local CSS px

  // Pre-computed jagged-edge offsets. Built once per trigger so the
  // silhouette is a stable "crack" that shimmers in flicker, not a
  // new random zigzag every frame (which would look like TV static).
  const jitterL = new Float32Array(JAGGED_STEPS + 1);
  const jitterR = new Float32Array(JAGGED_STEPS + 1);

  /* ---------- particle pool ----------
     Parallel Float32Arrays (same pattern as initCursor / initNuclei
     elsewhere) so the hot loop has predictable memory access and
     zero per-frame allocations. Pool wraps around at capacity so we
     never reallocate. */
  const MAX_PARTICLES = 140;
  const pX = new Float32Array(MAX_PARTICLES);
  const pY = new Float32Array(MAX_PARTICLES);
  const pVX = new Float32Array(MAX_PARTICLES);
  const pVY = new Float32Array(MAX_PARTICLES);
  const pAge = new Float32Array(MAX_PARTICLES);
  const pLife = new Float32Array(MAX_PARTICLES);
  const pSize = new Float32Array(MAX_PARTICLES);   // radius multiplier
  const pDrag = new Float32Array(MAX_PARTICLES);   // air drag per frame (0.90..0.97)
  const pGrav = new Float32Array(MAX_PARTICLES);   // signed gravity px/s^2 (negative = floats up)
  const pPhase = new Float32Array(MAX_PARTICLES);  // curl-noise phase offset
  const pRot = new Float32Array(MAX_PARTICLES);    // current rotation (debris)
  const pSpin = new Float32Array(MAX_PARTICLES);   // rotation velocity rad/s
  const pHue = new Uint8Array(MAX_PARTICLES);      // 0=fg 1=accent 2=cyan 3=magenta
  const pKind = new Uint8Array(MAX_PARTICLES);     // 0=spark 1=debris 2=ember
  let pCursor = 0; // ring-buffer write head
  let pAlive = 0;

  /* Four particle kinds, encoded here as constants so the spawn/
     update/draw code reads as a table rather than a grid of magic
     numbers:
       0 SPARK  - small glowing dot, gentle drift down, majority class
       1 DEBRIS - rotating wireframe square, falls hard, "chunk torn
                  out of reality" brutalist fragment
       2 EMBER  - larger particle with hot inverse-fg peak, floats
                  gently upward, rare "hero" particle
     Hue numbering matches the rift's own palette so all four layers
     compose cleanly in lighter mode without muddy mixing. */
  const KIND_SPARK = 0;
  const KIND_DEBRIS = 1;
  const KIND_EMBER = 2;

  const spawnParticle = (x, y, angle, speed, hue, life, kind, size) => {
    const i = pCursor;
    pCursor = (pCursor + 1) % MAX_PARTICLES;
    pX[i] = x;
    pY[i] = y;
    pVX[i] = Math.cos(angle) * speed;
    pVY[i] = Math.sin(angle) * speed;
    pAge[i] = 0;
    pLife[i] = life;
    pHue[i] = hue;
    pKind[i] = kind;
    pSize[i] = size;
    // Per-particle drag variance gives the cloud mixed masses - some
    // sparks decelerate fast (read as light dust), others stay lively
    // (read as hot debris). Small range but perceptibly heterogeneous.
    pDrag[i] = 0.90 + Math.random() * 0.07;
    // Gravity by kind: debris falls heavy, embers float up, sparks
    // drift down gently. The sign flip on embers is what makes them
    // read as "hot rising embers" vs "cooling debris falling off".
    pGrav[i] =
      kind === KIND_DEBRIS ? 90 + Math.random() * 60
      : kind === KIND_EMBER ? -22 + Math.random() * 14
      : 22 + Math.random() * 18;
    pPhase[i] = Math.random() * Math.PI * 2;
    pRot[i] = Math.random() * Math.PI * 2;
    pSpin[i] = (Math.random() - 0.5) * 7;
    if (pAlive < MAX_PARTICLES) pAlive++;
  };

  /* ---------- theme-aware color refs ----------
     Read fresh from CSS custom properties on every trigger so the
     tear always matches the CURRENT theme (user may have toggled
     dark/light between spawns). --fg-rgb is the inverse of --bg
     by definition: white in dark theme, black in light theme -
     exactly the "opposite of theme color" the tear should render
     as. --accent-rgb is the site's orange accent, used as the halo
     / highlight tint for the "touch of accent" layer. */
  let fgRgb = "245, 245, 245";
  let accentRgb = "245, 144, 28";
  // Cyan / magenta are the RGB-split colors used by the rift's
  // chromatic aberration elsewhere (border drop-shadows, ghost pass
  // in drawRift). Reusing them for two particle hues means the
  // particles visually belong to the tear - a viewer reads the
  // cloud as "shards of the same corruption signature".
  const CYAN_RGB = "70, 200, 255";
  const MAGENTA_RGB = "255, 80, 150";

  /* Pre-baked glow sprites (one per hue). Same performance pattern
     as initCursor - draw a radial gradient once into an offscreen
     canvas, then blit with drawImage each frame instead of
     reconstructing the gradient per particle. Wins:
       - zero per-frame createRadialGradient allocations
       - no per-draw shadowBlur (baked into the sprite alpha)
       - drawImage scales the same sprite to any size cheaply
     We rebake every trigger because fgRgb flips between themes. */
  const GLOW_SPRITE_SIZE = 48;
  const glowSprites = [null, null, null, null]; // index matches pHue
  const bakeGlowSprite = (rgb) => {
    const cv = document.createElement("canvas");
    cv.width = GLOW_SPRITE_SIZE;
    cv.height = GLOW_SPRITE_SIZE;
    const sctx = cv.getContext("2d");
    const c = GLOW_SPRITE_SIZE / 2;
    const grad = sctx.createRadialGradient(c, c, 0, c, c, c);
    // Three-stop falloff: hot tight core, soft halo body, alpha zero
    // at the edge so sprites can overlap in lighter mode without
    // hard seams. Core held at 1.0 so the particle's own ctx.
    // globalAlpha controls overall brightness per draw.
    grad.addColorStop(0, `rgba(${rgb}, 1)`);
    grad.addColorStop(0.2, `rgba(${rgb}, 0.75)`);
    grad.addColorStop(0.5, `rgba(${rgb}, 0.22)`);
    grad.addColorStop(1, `rgba(${rgb}, 0)`);
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, GLOW_SPRITE_SIZE, GLOW_SPRITE_SIZE);
    return cv;
  };
  const bakeAllGlowSprites = () => {
    glowSprites[0] = bakeGlowSprite(fgRgb);
    glowSprites[1] = bakeGlowSprite(accentRgb);
    glowSprites[2] = bakeGlowSprite(CYAN_RGB);
    glowSprites[3] = bakeGlowSprite(MAGENTA_RGB);
  };
  // Lookup: get the rgb triple for a hue code. Used when drawing the
  // bright core / stroke on top of the sprite glow.
  const rgbForHue = (h) =>
    h === 0 ? fgRgb : h === 1 ? accentRgb : h === 2 ? CYAN_RGB : MAGENTA_RGB;

  const refreshThemeColors = () => {
    const cs = getComputedStyle(document.documentElement);
    const f = cs.getPropertyValue("--fg-rgb").trim();
    const a = cs.getPropertyValue("--accent-rgb").trim();
    if (f) fgRgb = f;
    if (a) accentRgb = a;
    bakeAllGlowSprites();
  };

  /* ---------- trigger ---------- */
  const trigger = () => {
    if (active) return;
    active = true;
    startT = performance.now();
    // Snapshot theme colors at fire time. One read per trigger is
    // plenty - the animation is 2.5s and the theme can't change
    // mid-burst without a page interaction that would steal focus.
    refreshThemeColors();

    // Rift origin = center of the hint cell, translated to canvas-
    // local coordinates. Using the hint's own rect (not the click
    // event point) guarantees a grid-aligned origin even if the
    // click landed slightly off-center on the button's hit area.
    const cRect = canvas.getBoundingClientRect();
    const hRect = hint.getBoundingClientRect();
    tx = hRect.left + hRect.width / 2 - cRect.left;
    ty = hRect.top + hRect.height / 2 - cRect.top;

    for (let i = 0; i <= JAGGED_STEPS; i++) {
      jitterL[i] = (Math.random() - 0.5) * 7;
      jitterR[i] = (Math.random() - 0.5) * 7;
    }

    /* Initial burst - the "bang" when reality cracks open. Roughly
       distributed as:
         45%  fg sparks      (core tear color)
         22%  accent sparks  (warm on-brand highlight)
         10%  cyan sparks    (chromatic-aberration ghost)
         10%  magenta sparks (chromatic-aberration ghost)
         10%  debris chunks  (wireframe squares, mixed hues)
          3%  embers         (rare, big, rising, hot inverse-fg peak)
       Wide speed range (80..330 px/s) so the burst has a hot fast
       core + slower debris lingering at the edges, reading as a
       proper explosion rather than a uniform ring. */
    pCursor = 0;
    pAlive = 0;
    const BURST_COUNT = 42;
    for (let i = 0; i < BURST_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 250;
      const life = 0.6 + Math.random() * 1.1;
      const r = Math.random();
      let hue, kind, size;
      if (r < 0.03) {
        // rare ember
        kind = KIND_EMBER;
        hue = Math.random() < 0.7 ? 0 : 1;
        size = 2.2 + Math.random() * 0.9;
      } else if (r < 0.13) {
        // debris chunk
        kind = KIND_DEBRIS;
        hue = Math.random() < 0.55 ? 0 : Math.random() < 0.6 ? 1 : Math.random() < 0.5 ? 2 : 3;
        size = 1.6 + Math.random() * 0.9;
      } else {
        // regular spark - hue weighted toward fg + accent, cyan/
        // magenta are accent-rare so the palette doesn't tip away
        // from the tear's primary color story
        kind = KIND_SPARK;
        const h = Math.random();
        hue = h < 0.55 ? 0 : h < 0.78 ? 1 : h < 0.89 ? 2 : 3;
        size = 1.1 + Math.random() * 0.8;
      }
      spawnParticle(tx, ty, angle, speed, hue, life, kind, size);
    }

    hint.hidden = true;
    // Pause EVERY pending state-mutation timer for the hint so none
    // of them fire mid-rift and leave the element in a weird state
    // when we try to respawn it. Includes:
    //   - relocateTimer:   next teleport trigger
    //   - teleportTimer:   an in-flight teleport's reposition callback
    //   - teleportWatchdog: safety clear for .is-teleporting
    // Also force-clear the class itself so the respawn starts from
    // a known-clean state.
    clearTimeout(relocateTimer);
    clearTimeout(teleportTimer);
    clearTimeout(teleportWatchdog);
    teleportTimer = 0;
    teleportWatchdog = 0;
    hint.classList.remove("is-teleporting");
    canvas.classList.add("is-active");
    requestAnimationFrame(loop);

    // Respawn the hint at a new random cell POST_RIFT_MS after the
    // rift ends, then resume the idle teleport cycle from there.
    // Use tryApplyCell (the retry-on-next-frame version) so a
    // transient layout where the hero measures narrow doesn't leave
    // the hint hidden forever - it'll retry up to 8 frames until it
    // gets a valid cell or layout confirms it really is too narrow.
    clearTimeout(hintRespawn);
    hintRespawn = setTimeout(() => {
      // fade=true -> reappear uses the .is-teleporting fade-in
      // trick (opacity:0 + rotateY(90°) settles smoothly back to
      // here over 860ms) instead of a display:none -> block pop.
      tryApplyCell(0, true);
      scheduleRelocate(IDLE_RELOCATE_MS);
    }, DURATION + POST_RIFT_MS);
  };

  hint.addEventListener("click", trigger);

  // Keyboard easter egg: typing "rift" anywhere (outside of form
  // fields) also fires it, for users who never hover over the hint.
  let typed = "";
  window.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    if (e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-4);
    // Require a visible, settled hint - typing during the teleport
    // flip would read a collapsed bounding rect for tx/ty.
    if (
      typed === "rift" &&
      !hint.hidden &&
      !hint.classList.contains("is-teleporting")
    ) trigger();
  });

  /* ---------- easings ---------- */
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInCubic = (t) => t * t * t;

  /* ---------- drawing helpers ---------- */
  const buildRiftPath = (openness, length) => {
    // Diamond-ish jagged silhouette: taper goes 0 → 1 → 0 from top
    // to bottom so the rift is pointed at both ends and widest in
    // the middle, where the hot core is.
    const halfH = (length * h * MAX_LEN_RATIO) / 2;
    const halfW = (openness * MAX_WIDTH) / 2;
    ctx.beginPath();
    for (let i = 0; i <= JAGGED_STEPS; i++) {
      const t = i / JAGGED_STEPS;
      const y = ty - halfH + halfH * 2 * t;
      const taper = 1 - Math.abs(t - 0.5) * 2;
      const x = tx - halfW * taper + jitterL[i] * taper * 0.5;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    for (let i = JAGGED_STEPS; i >= 0; i--) {
      const t = i / JAGGED_STEPS;
      const y = ty - halfH + halfH * 2 * t;
      const taper = 1 - Math.abs(t - 0.5) * 2;
      const x = tx + halfW * taper + jitterR[i] * taper * 0.5;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
  };

  const drawRift = (openness, length, flicker) => {
    // 1. Theme-inverse core fill (white on dark / black on light).
    //    This is the tear's primary color - literally the opposite
    //    of --bg, so it reads as "a slice of the other side".
    buildRiftPath(openness, length);
    ctx.fillStyle = `rgba(${fgRgb}, ${0.92 * flicker})`;
    ctx.fill();

    // 2. Accent halo (the "touch of theme accent" layer). Shadow
    //    blur scales with openness so the glow blooms as the rift
    //    widens. Using additive composite so the accent tints the
    //    core without replacing it.
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.shadowColor = `rgba(${accentRgb}, 0.95)`;
    ctx.shadowBlur = 22 + openness * 22;
    ctx.strokeStyle = `rgba(${accentRgb}, ${0.55 * flicker})`;
    ctx.lineWidth = 1.8;
    buildRiftPath(openness, length);
    ctx.stroke();
    ctx.restore();

    // 3. Split-shadow ghost pass (fake chromatic aberration). Two
    //    offset strokes - accent on the left, fg-inverse on the
    //    right - so the eye reads a subtle RGB split along the
    //    silhouette without actually compositing three color
    //    channels. Sells "reality tearing" better than a single
    //    clean edge would.
    ctx.save();
    ctx.translate(-1.5, 0);
    ctx.strokeStyle = `rgba(${accentRgb}, ${0.45 * flicker})`;
    ctx.lineWidth = 1;
    buildRiftPath(openness, length);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(1.5, 0);
    ctx.strokeStyle = `rgba(${fgRgb}, ${0.5 * flicker})`;
    ctx.lineWidth = 0.8;
    buildRiftPath(openness, length);
    ctx.stroke();
    ctx.restore();

    // 4. Crisp inverse-fg edge on top for a hard brutalist silhouette.
    ctx.strokeStyle = `rgba(${fgRgb}, ${0.95 * flicker})`;
    ctx.lineWidth = 0.8;
    buildRiftPath(openness, length);
    ctx.stroke();
  };

  const updateParticles = (dt, elapsed) => {
    // `nt` drives the curl-noise time axis. Sub-Hz so the wander
    // reads as an organic flow field, not high-frequency jitter.
    const nt = elapsed * 0.0011;
    for (let i = 0; i < MAX_PARTICLES; i++) {
      if (pAge[i] >= pLife[i]) continue;
      pAge[i] += dt;
      // Curl-noise-ish wander: divergence-free-ish force sampled
      // from sin/cos of position + per-particle phase. Amplitude
      // is small compared to the initial fling speed, so particles
      // still fly mostly ballistically but trace a subtle swirling
      // path instead of a straight line - reads as "reality still
      // disturbed around the rift" rather than free-fall debris.
      const nx = Math.sin(pY[i] * 0.019 + nt + pPhase[i]) * 34;
      const ny = Math.cos(pX[i] * 0.019 + nt + pPhase[i]) * 34;
      pVX[i] += nx * dt;
      pVY[i] += ny * dt;
      // Integrate before damping so the wander contributes to this
      // frame's displacement.
      pX[i] += pVX[i] * dt;
      pY[i] += pVY[i] * dt;
      // Per-particle drag (mass variance) + per-particle gravity
      // (debris falls, embers rise, sparks drift).
      pVX[i] *= pDrag[i];
      pVY[i] *= pDrag[i];
      pVY[i] += pGrav[i] * dt;
      // Rotation for debris (sparks/embers render as circles, so
      // this read is only meaningful on kind==1, but updating all
      // of them is branchless and cheap).
      pRot[i] += pSpin[i] * dt;
    }
  };

  const drawParticles = () => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    for (let i = 0; i < MAX_PARTICLES; i++) {
      if (pAge[i] >= pLife[i]) continue;
      const lifeT = pAge[i] / pLife[i];
      const fade = 1 - lifeT;
      const alpha = fade * 0.92;
      const size = pSize[i] * (0.5 + 0.6 * fade); // shrink toward death
      const hue = pHue[i];
      const kind = pKind[i];
      const sprite = glowSprites[hue];
      const rgb = rgbForHue(hue);

      // 1) OUTER GLOW - blit pre-baked sprite, scaled to per-particle
      //    radius. sprite.width is GLOW_SPRITE_SIZE but we scale it
      //    via drawImage's w/h args - zero cost, full quality.
      const glowR = size * 6;
      ctx.globalAlpha = alpha;
      ctx.drawImage(sprite, pX[i] - glowR, pY[i] - glowR, glowR * 2, glowR * 2);

      // 2) KIND-SPECIFIC CORE drawn on top of the glow.
      if (kind === KIND_DEBRIS) {
        // Rotating wireframe square - reads as a "chunk torn out of
        // reality" with the glow sprite doing the halo behind it.
        // Stroke only (no fill) so it stays a clean outline rather
        // than a solid hot block that would lose its edge in the
        // additive glow behind it.
        ctx.save();
        ctx.globalAlpha = alpha * 0.95;
        ctx.translate(pX[i], pY[i]);
        ctx.rotate(pRot[i]);
        const s = size * 2.4;
        ctx.strokeStyle = `rgba(${rgb}, 1)`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-s / 2, -s / 2, s, s);
        ctx.restore();
      } else {
        // Spark / ember: bright solid core circle for a crisp hot
        // point inside the halo. Without this layer, pure sprite
        // blitting looks soft and hazy - the core is what gives
        // each particle a "pixel of pure light" read.
        ctx.globalAlpha = Math.min(1, alpha + 0.12);
        ctx.fillStyle = `rgba(${rgb}, 1)`;
        ctx.beginPath();
        ctx.arc(pX[i], pY[i], size * 0.7, 0, Math.PI * 2);
        ctx.fill();
        // Embers get an extra hot inverse-fg peak while they're
        // still young (fade > 0.55) - the "white-hot tip" layer
        // that makes them read as the hottest / rarest particle
        // in the cloud. Gated on fade so late-life embers cool to
        // their halo color instead of flashing white.
        if (kind === KIND_EMBER && fade > 0.55) {
          ctx.globalAlpha = alpha * 0.75;
          ctx.fillStyle = `rgba(${fgRgb}, 1)`;
          ctx.beginPath();
          ctx.arc(pX[i], pY[i], size * 0.34, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  };

  const drawHexLabel = (alpha) => {
    // Tiny phosphor-glow readout next to the rift: retro-terminal
    // vibe that sells the easter-egg without shouting. Two lines of
    // tech-looking hex so the eye reads "corruption / glitch" rather
    // than any specific reference. First line in inverse-fg (sharp
    // readable), second in accent (secondary signal).
    ctx.save();
    ctx.font = "10px ui-monospace, 'JetBrains Mono', 'Fira Code', monospace";
    ctx.textBaseline = "middle";
    ctx.shadowColor = `rgba(${accentRgb}, ${alpha * 0.9})`;
    ctx.shadowBlur = 8;
    ctx.fillStyle = `rgba(${fgRgb}, ${alpha})`;
    ctx.fillText("0xFF TEAR", tx + MAX_WIDTH + 10, ty - 8);
    ctx.fillStyle = `rgba(${accentRgb}, ${alpha * 0.85})`;
    ctx.fillText("SIG::001", tx + MAX_WIDTH + 10, ty + 6);
    ctx.restore();
  };

  /* ---------- the rAF loop ----------
     Only runs for DURATION ms. No IO, no idle ticking. */
  function loop(now) {
    const elapsed = now - startT;
    const progress = elapsed / DURATION;
    ctx.clearRect(0, 0, w, h);

    if (progress >= 1) {
      active = false;
      canvas.classList.remove("is-active");
      // Defensive: clear any lingering teleport state so the next
      // respawn is always a fresh, clickable hint. Covers the case
      // where a rift fired while a teleport was in flight - its
      // class + safety watchdog both get wiped here too.
      hint.classList.remove("is-teleporting");
      clearTimeout(teleportTimer);
      clearTimeout(teleportWatchdog);
      teleportTimer = 0;
      teleportWatchdog = 0;
      pAlive = 0;
      pCursor = 0;
      // zero out so a stale particle doesn't blink in on next fire
      pAge.fill(1);
      pLife.fill(0);
      return;
    }

    const dt = 1 / 60;

    /* Phase envelope:
         0.00-0.08  pre-beat  (particles fly first, faint tear forming)
         0.08-0.32  opening
         0.32-0.72  hold (flicker)
         0.72-1.00  closing
       The 0-0.08 window used to overlay a radial "flash" gradient on
       top - a perfect circular pulse that read as a too-clean
       shockwave and fought the brutalist / debris aesthetic of the
       particle cloud. Removed. The initial 42-particle burst already
       fires at trigger() (one frame before the first loop tick), so
       the "reality cracked" announcement is carried entirely by the
       debris explosion + the faint tear starting to form. */
    let openness = 0, length = 0;
    if (progress < 0.08) {
      openness = length = (progress / 0.08) * 0.1;
    } else if (progress < 0.32) {
      const t = (progress - 0.08) / 0.24;
      openness = length = easeOutCubic(t);
    } else if (progress < 0.72) {
      openness = length = 1;
    } else {
      const t = (progress - 0.72) / 0.28;
      openness = length = 1 - easeInCubic(t);
    }

    // Flicker = slow sine + step-jitter combined so the rift pulses
    // organically but occasionally does a hard digital stutter.
    const step = Math.floor(elapsed / 80) * 0.37;
    const flicker = 0.78 + 0.22 * Math.sin(elapsed * 0.055 + step);

    if (length > 0.001) drawRift(openness, length, flicker);

    /* Continuous edge sparks during open+hold. Emitted just outside
       the rift seam, mostly sideways so they fan out horizontally
       (reads as "reality shedding along the cut"). Emission rate
       bumped from 0.38 -> 0.55 now that the cloud supports more
       visual variety (4 hues, 3 kinds) - the extra density sells
       the "living tear" feel without crowding the canvas. */
    if (progress > 0.12 && progress < 0.8 && Math.random() < 0.55) {
      const halfH = (length * h * MAX_LEN_RATIO) / 2;
      const edgeY = ty - halfH + Math.random() * halfH * 2;
      const side = Math.random() < 0.5 ? -1 : 1;
      const base = side > 0 ? 0 : Math.PI;
      const angle = base + (Math.random() - 0.5) * 0.7;
      const speed = 40 + Math.random() * 90;
      const r = Math.random();
      // Edge emission skews spark-heavy (debris would crowd the
      // seam, embers are reserved for the initial burst). Hue mix
      // leans harder on fg + accent than the burst does so the
      // seam reads as primarily "tear color" with occasional
      // chromatic-aberration ghosts popping through.
      let hue, kind, size;
      if (r < 0.06) {
        kind = KIND_DEBRIS;
        hue = Math.random() < 0.7 ? 0 : 1;
        size = 1.3 + Math.random() * 0.7;
      } else {
        kind = KIND_SPARK;
        const h = Math.random();
        hue = h < 0.6 ? 0 : h < 0.84 ? 1 : h < 0.92 ? 2 : 3;
        size = 0.9 + Math.random() * 0.7;
      }
      spawnParticle(tx + side * 2, edgeY, angle, speed, hue, 0.45 + Math.random() * 0.55, kind, size);
    }

    updateParticles(dt, elapsed);
    drawParticles();

    // Hex label fades in/out during the hold phase only.
    if (progress > 0.34 && progress < 0.72) {
      const labelT = (progress - 0.34) / 0.38;
      const labelAlpha = Math.sin(labelT * Math.PI) * 0.7 * flicker;
      if (labelAlpha > 0.1) drawHexLabel(labelAlpha);
    }

    requestAnimationFrame(loop);
  }
}

/* -------------------------------------------------------------
   DOOM EASTER EGG (lazy)
   - The full implementation lives in js/doom.js (~520 lines: js-dos
     plumbing, srcdoc HTML, palettes, key remaps, slider wiring).
   - We dynamically import() that module the first time the user
     activates the trigger, so all of it stays out of the initial
     parse / network cost for the ~99% of visitors who never play.
   - I18N is injected as a getDict() callback so doom.js doesn't have
     to import the I18N table just for the "doom.error" string.
   ------------------------------------------------------------- */
function initDoomLazy() {
  const trigger = document.getElementById("doomTrigger");
  if (!trigger) return;

  let loading = false;

  /* Inject the modal stylesheet on first activation. Resolves when the
     CSS is parsed so the modal opens already laid out (no flash of
     unstyled modal). We ignore network errors here - the JS still runs
     and DOOM is playable even if the skin fails to load. */
  const loadDoomCss = () =>
    new Promise((resolve) => {
      if (document.querySelector('link[data-doom-css]')) {
        resolve();
        return;
      }
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "js/doom.css";
      link.setAttribute("data-doom-css", "");
      link.addEventListener("load", () => resolve(), { once: true });
      link.addEventListener("error", () => resolve(), { once: true });
      document.head.appendChild(link);
    });

  // { once: true } means the listener is removed before the await
  // settles - so doom.js's own click handler (registered inside
  // initDoom) takes over for every subsequent click without a relay.
  trigger.addEventListener(
    "click",
    async (e) => {
      if (loading) return;
      loading = true;
      e.preventDefault();
      try {
        /* Fire the CSS link and the JS import off in parallel - the
           browser fetches both concurrently instead of serially. By
           the time the JS module resolves, the stylesheet is usually
           already applied. */
        const [mod] = await Promise.all([
          import("./doom.js"),
          loadDoomCss(),
        ]);
        // openImmediately replays the click that triggered this load
        // so the user doesn't have to click twice on the cold path.
        mod.initDoom({
          getDict: () => I18N[currentLang] || I18N.en,
          openImmediately: true,
        });
      } catch (err) {
        console.error("[doom] failed to load module", err);
        loading = false;
      }
    },
    { once: true }
  );
}

/* -------------------------------------------------------------
   INIT
   ------------------------------------------------------------- */
function init() {
  initResizeGuard();
  initTheme();
  initLang();
  initBoot();
  initHeader();
  initReveal();
  initTilt();
  initCursor();
  initMarquee();
  initNuclei();
  initHeroCells();
  initHeroRift();
  initYear();
  initForm();
  initDoomLazy();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

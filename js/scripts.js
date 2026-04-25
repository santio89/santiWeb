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
    "nav.work": "WORK",
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
      "Internal IT hub - auth, devices, contacts, tickets and admin in one place.",
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
      "Hub IT interno - auth, equipos, contactos, tickets y admin en un solo lugar.",
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
  // to color-tween simultaneously. That removes two big sources of
  // jank: (a) the header's backdrop-filter doesn't have to re-blur
  // the underlying body once per frame while the body's background
  // is mid-tween, and (b) hundreds of elements aren't repainting at
  // the same time. Falls back to the legacy class-based tween on
  // Firefox / older Safari (and is skipped entirely for users with
  // reduced-motion preference).
  let swapTimer = 0;
  const TWEEN_MS = 380;
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
    root.classList.add("theme-transitioning");
    apply(next);
    clearTimeout(swapTimer);
    swapTimer = setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, TWEEN_MS);
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

  let p = 0;
  const tick = () => {
    p += Math.random() * 14 + 6;
    if (p >= 100) p = 100;
    if (bar) bar.style.transform = `scaleX(${p / 100})`;
    if (pct) pct.textContent = String(Math.floor(p)).padStart(3, "0");
    if (p < 100) {
      setTimeout(tick, 110);
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
function initHeader() {
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".header__nav");
  const progress = document.getElementById("scrollProgress");
  const links = document.querySelectorAll(".header__nav__link");

  const onScroll = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

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
  }

  // active section highlight
  const sections = ["about", "skills", "work", "experience", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((l) =>
              l.classList.toggle(
                "is-active",
                l.getAttribute("href") === "#" + id
              )
            );
          }
        });
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
  window.addEventListener("resize", resize);

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

      // outer glow - same warm hue, sharper falloff for a defined ember
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6.5);
      grad.addColorStop(0, `hsla(${hue}, 100%, ${light}%, ${alpha})`);
      grad.addColorStop(
        0.35,
        `hsla(${Math.max(0, hue - 6)}, 100%, ${Math.max(36, light - 14)}%, ${alpha * 0.55})`,
      );
      grad.addColorStop(1, `hsla(${hue}, 100%, ${light}%, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 6.5, 0, Math.PI * 2);
      ctx.fill();

      // bright same-hue core (yellow-shifted, no complementary tint)
      ctx.fillStyle = `hsla(${Math.min(50, hue + 8)}, 100%, ${Math.min(86, light + 16)}%, ${Math.min(1, alpha + 0.18)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // hot white center - only for fresh, fast sparks (true heat)
      if (heat > 0.55) {
        ctx.fillStyle = `hsla(46, 100%, 96%, ${Math.min(1, alpha * 0.9 * heat)})`;
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
   MARQUEE - drag/touch scrollable, with auto-scroll + inertia
   ------------------------------------------------------------- */
function initMarquee() {
  const marquees = document.querySelectorAll(".marquee");
  marquees.forEach((m) => {
    const track = m.querySelector(".marquee__track");
    if (!track) return;

    m.classList.add("is-js");

    let offset = 0;
    // time-based speed - immune to display refresh rate (60/120/144Hz) and
    // frame drops. 30 px/sec matches the previous "0.5 px/frame @ 60fps" feel.
    const PX_PER_SEC = prefersReducedMotion ? 0 : 30;
    let trackHalf = 0;

    let dragging = false;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startOffset = 0;
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0; // user-input fling, px / frame
    let axis = null; // "h" | "v" | null

    const measure = () => {
      // markup duplicates the content inside .marquee__track,
      // so half-width gives us a seamless wrap point
      trackHalf = track.scrollWidth / 2;
    };
    measure();

    if ("ResizeObserver" in window) {
      new ResizeObserver(measure).observe(track);
    } else {
      window.addEventListener("resize", measure);
    }
    // also re-measure once webfonts have loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    let lastFrame = 0;
    const tick = (now) => {
      // first frame: seed lastFrame so we don't get a huge dt jump
      if (lastFrame === 0) lastFrame = now;
      // cap dt so coming back from a hidden tab / long pause doesn't fling
      // the track halfway across the screen in a single frame
      const dt = Math.min(64, now - lastFrame);
      lastFrame = now;

      if (!dragging) {
        // perfectly linear auto-scroll, in real-time units
        offset -= (PX_PER_SEC * dt) / 1000;
        // residual fling from a user drag - decay is also time-based so the
        // inertia feels identical at 60Hz, 120Hz and 144Hz
        if (velocity !== 0) {
          offset -= velocity * (dt / 16);
          velocity *= Math.pow(0.93, dt / 16);
          if (Math.abs(velocity) < 0.02) velocity = 0;
        }
      }
      if (trackHalf > 0) {
        // wrap modulo, both directions
        if (offset <= -trackHalf) offset += trackHalf;
        else if (offset > 0) offset -= trackHalf;
      }
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    m.addEventListener("pointerdown", (e) => {
      // ignore secondary buttons
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      lastX = e.clientX;
      lastTime = performance.now();
      startOffset = offset;
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

      // axis lock: pick direction on first significant move
      if (axis === null) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        if (Math.abs(dx) >= Math.abs(dy)) {
          axis = "h";
        } else {
          // vertical intent - bow out and let the page scroll
          axis = "v";
          dragging = false;
          pointerId = null;
          m.classList.remove("is-dragging");
          return;
        }
      }

      offset = startOffset + dx;
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      // velocity in "px per frame" (assuming ~16ms / frame)
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

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(populate, 220);
  });

  // periodically reshuffle so the same cells aren't always the lucky ones
  setInterval(populate, 22000);
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
        const mod = await import("./doom.js");
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
  initYear();
  initForm();
  initDoomLazy();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

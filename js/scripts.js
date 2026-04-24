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
      "After almost a decade in IT - keeping Windows Servers, networks, VMs and 100+ workstations alive - I found in web development a place where I can combine my passions for both technology and art. I enjoy building responsive sites with an eye on conversion, and I thrive on continuous learning.",
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
      "Internal IT cockpit - auth, devices, contacts, tickets and admin in one place.",
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
      "Configuration and maintenance of Windows Server, VMs (Hyper-V, VMware, VirtualBox), routers (Ubiquiti, Cisco, MikroTik) and VPNs. Implemented and maintained the GLPI inventory/ticketing system. ~80 workstations.",
    "exp.p4":
      "Support across PCs, notebooks, Raspberry Pis, networking, CCTV, printers, labelers and mobiles. Installation and configuration of Windows Server, Active Directory, Hyper-V virtualization and backups. ~120 workstations.",

    "contact.title": "CONTACT",
    "contact.pitch":
      "Got a project in mind, a role to fill, or just want to say hi?",
    "contact.pitchSub": "Don't hesitate to reach out!",
    "contact.cv": "DOWNLOAD PDF",

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
      "Tras casi una década en IT - manteniendo Windows Servers, redes, VMs y más de 100 puestos de trabajo - encontré en el desarrollo web un lugar donde puedo combinar mis pasiones por la tecnología y el arte. Disfruto construir sitios responsive con foco en la conversión, y me entusiasma aprender en el proceso.",
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
      "Cockpit IT interno - auth, equipos, contactos, tickets y admin en un solo lugar.",
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
      "Configuración y mantenimiento de Windows Server, VMs (Hyper-V, VMware, VirtualBox), routers (Ubiquiti, Cisco, MikroTik) y VPNs. Implementación y mantenimiento del sistema GLPI de inventario y ticketing. ~80 puestos.",
    "exp.p4":
      "Soporte sobre PCs, notebooks, Raspberry Pis, redes, CCTV, impresoras, etiquetadoras y móviles. Instalación y configuración de Windows Server, Active Directory, virtualización Hyper-V y backups. ~120 puestos.",

    "contact.title": "CONTACTO",
    "contact.pitch":
      "¿Tenés un proyecto en mente, una posición para cubrir o solo querés saludar?",
    "contact.pitchSub": "¡No dudes en escribirme!",
    "contact.cv": "DESCARGAR PDF",

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

  // Briefly enable a global color/border/shadow transition only during a
  // user-driven theme swap, so the cross-fade is smooth without polluting
  // initial paint or per-element hover transitions.
  let swapTimer = 0;
  const TWEEN_MS = 420;
  const swapTheme = (next) => {
    root.classList.add("theme-transitioning");
    root.setAttribute("data-theme", next);
    localStorage.setItem("sw.theme", next);
    updateThemeColorMeta(next);
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
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#ebe7da");
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
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
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

  const els = document.querySelectorAll("[data-tilt]");
  els.forEach((el) => {
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const max = 6; // degrees

    const animate = () => {
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
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
   DOOM EASTER EGG
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

function initDoom() {
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
      const dict = I18N[currentLang] || I18N.en;
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
      const dict = I18N[currentLang] || I18N.en;
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
  const wireSliderPair = (sliderId, numberId, prop, fmt) => {
    const slider = document.getElementById(sliderId);
    const number = document.getElementById(numberId);
    if (!slider || !number) return;
    const min = Number(slider.min);
    const max = Number(slider.max);
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
    const apply = (raw, source) => {
      const n = Number(raw);
      if (!isFinite(n)) return;
      const v = clamp(n);
      if (source !== slider) slider.value = String(v);
      if (source !== number) number.value = fmt(v);
      post(v);
    };
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
  };
  wireSliderPair("doomVol", "doomVolVal", "volume", (v) => v.toFixed(2));
  wireSliderPair("doomSens", "doomSensVal", "mouseSensitivity", (v) =>
    v.toFixed(2)
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
  initDoom();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

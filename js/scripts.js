/* timeline polyfill */
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

let root = document.documentElement;

/* title animation - jquery y css*/
$(document).ready(function () {
  let header__logo = $(".heroPage__span");
  header__logo.on("mouseenter click", (e) => e.target.classList.add("textWobble"));
  header__logo.on("animationend webkitAnimationEnd", (e) => e.target.classList.remove("textWobble"));
});

function textWobbleOnce() {
  let header__logo = $(".heroPage__span");
  header__logo.addClass("textWobble");
  header__logo.on("mouseenter click", (e) => e.target.classList.add("textWobble"));
  header__logo.on("animationend webkitAnimationEnd", (e) => e.target.classList.remove("textWobble"));
}

$(document).ready(function () {
  let header__logo = $(".header__logo");
  header__logo.on("mouseenter click", (e) => e.target.classList.add("rubberBand"));
  header__logo.on("animationend webkitAnimationEnd", (e) => e.target.classList.remove("rubberBand"));
});

function rubberBandOnce() {
  let header__logo = $(".header__logo");
  header__logo.addClass("rubberBand");
  header__logo.on("mouseenter click", (e) => e.target.classList.add("rubberBand"));
  header__logo.on("animationend webkitAnimationEnd", (e) => e.target.classList.remove("rubberBand"));
}

$(document).ready(function () {
  let skills = document.querySelectorAll(".skills__wrapper__skill img");
  skills.forEach((skill) => {
    skill.addEventListener("click", (e) => e.target.classList.add("rubberBand"));
    skill.addEventListener("mouseenter", (e) => e.target.classList.add("rubberBand"));
    skill.addEventListener("animationend", (e) => e.target.classList.remove("rubberBand"));
    skill.addEventListener("webkitAnimationEnd", (e) => e.target.classList.remove("rubberBand"));
  })
});

/* inicio mouse trail */
//******************BUBBLES ON MOUSE TAIL*******************

let canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let c = canvas.getContext('2d');


let circleArray = [];

function initCanvas() {
  circleArray = [];
}

let colorArray = [
  '117, 255, 186',
  '95, 0, 185',
  '117, 255, 186'
]

window.addEventListener('resize', function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  initCanvas();
});
if ($(window).width() > 800) {
  let mouse = {
    x: undefined,
    y: undefined
  };
  window.addEventListener('mousemove',
    function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      drawCircles();
    }
  );
  window.addEventListener("touchmove",
    function (event) {
      let touch = event.touches[0];
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      drawCircles();
    }
  );

  function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.vx = vx;
    this.vy = vy;
    this.birth = birth;
    this.life = life;
    this.opacity = opacity;

    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      c.fillStyle = 'rgba(' + rgb + ',' + this.opacity + ')';
      c.fill();
    };

    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.vx = -this.vx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.vy = -this.vy;
      }

      this.x += this.vx;
      this.y += this.vy;

      this.opacity = 1 - (((frame - this.birth) * 1) / this.life);

      if (frame > this.birth + this.life) {
        for (let i = 0; i < circleArray.length; i++) {
          if (this.birth == circleArray[i].birth && this.life == circleArray[i].life) {
            circleArray.splice(i, 1);
            break;
          }
        }
      } else {
        this.draw();
      }
    }

  }

  function drawCircles() {
    for (let i = 0; i < 6; i++) {
      let radius = Math.floor(Math.random() * 4) + 2;
      let vx = (Math.random() * 2) - 1;
      let vy = (Math.random() * 2) - 1;
      let spawnFrame = frame;
      let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];
      let life = 100;
      circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));

    }
  }

  let frame = 0;

  function animate() {
    requestAnimationFrame(animate);
    frame += 1;
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }

  }

  initCanvas();
  animate();

}


/* fin mouse trail */

/* INICIO SCROLL TRACKER */
const scrollTracker = document.querySelector(".scrollTracker");
const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

scrollTracker.animate({
  transform: ["scaleX(0)", "scaleX(1)"]
},
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  })
/* FIN COLOR TRACKER */

/* INICIO COLOR PICKER */
let colorA = document.getElementById("colorA");
let colorB = document.getElementById("colorB");
/* let colorD = document.getElementById("colorD"); */
let footer = document.getElementById("footer");
let footer__hr = document.getElementById("footer__hr");
let landingImgA = document.getElementById("landingImgA");
let landingImgB = document.getElementById("landingImgB");
let landingImgC = document.getElementById("landingImgC");

if (localStorage.getItem("colorTheme")) {
  if (localStorage.getItem("colorTheme") == "B") {
    colorPickerB();
  } else {
    colorPickerA()
  }
} else {
  colorPickerA();
}

/* if (localStorage.getItem("colorMainTheme")) {
  if (localStorage.getItem("colorMainTheme") === "light") {
    colorPickerD("light");
  } else {
    localStorage.setItem("colorMainTheme", "dark");
    colorPickerD("dark");
  }
} */

colorA.onclick = colorPickerA;
colorB.onclick = colorPickerB;
/* colorD.addEventListener("click", () => colorPickerD()); */

function colorPickerA() {
  colorB.classList.remove("color--active");
  colorA.classList.add("color--active");
  root.style.setProperty("--color-primero", "rgb(95, 0, 185)");
  root.style.setProperty("--color-segundo", "rgb(117, 255, 186)");
  root.style.setProperty("--color-primero-rgb", "95, 0, 185");
  root.style.setProperty("--color-segundo-rgb", "117, 255, 186");
  landingImgA.style.setProperty("opacity", "1");
  landingImgB.style.setProperty("opacity", "0");
  landingImgC.style.setProperty("opacity", "0");
  footer.style.setProperty("background", "linear-gradient(45deg, #2b0053, #0fff87)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, #2b0053, #0fff87)");
  colorArray = [
    '117, 255, 186',
    '95, 0, 185',
    '117, 255, 186'
  ];

  localStorage.setItem("colorTheme", "A");
}

function colorPickerB() {
  colorA.classList.remove("color--active");
  colorB.classList.add("color--active");
  root.style.setProperty("--color-primero", "rgb(124, 47, 0)");
  root.style.setProperty("--color-segundo", "rgb(87, 216, 255)");
  root.style.setProperty("--color-primero-rgb", "124, 47, 0");
  root.style.setProperty("--color-segundo-rgb", "87, 216, 255");
  landingImgB.style.setProperty("opacity", "1");
  landingImgA.style.setProperty("opacity", "0");
  landingImgC.style.setProperty("opacity", "0");
  footer.style.setProperty("background", "linear-gradient(45deg, #160800, #00b8f0)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, #160800, #00b8f0)");
  colorArray = [
    '87, 216, 255',
    '124, 47, 0',
    '87, 216, 255'
  ]

  localStorage.setItem("colorTheme", "B");
}

/* function colorPickerD(theme) {
  if (!theme) {
    if (localStorage.getItem("colorMainTheme")) {
      if (localStorage.getItem("colorMainTheme") === "dark") {
        root.style.setProperty("--color-fondo", "rgb(220, 220, 220)");
        root.style.setProperty("--color-fondo-dark", "rgb(180, 180, 180)");
        localStorage.setItem("colorMainTheme", "light");
      } else {
        root.style.setProperty("--color-fondo", "rgb(30, 30, 30)");
        root.style.setProperty("--color-fondo-dark", "rgb(40, 40, 40)");
        localStorage.setItem("colorMainTheme", "dark");
      }
    } else {
      root.style.setProperty("--color-fondo", "rgb(220, 220, 220)");
      root.style.setProperty("--color-fondo-dark", "rgb(180, 180, 180)");
      localStorage.setItem("colorMainTheme", "light");
    }

  } else {
    if (theme === "light") {
      root.style.setProperty("--color-fondo", "rgb(220, 220, 220)");
      root.style.setProperty("--color-fondo-dark", "rgb(180, 180, 180)");
    } else {
      root.style.setProperty("--color-fondo", "rgb(30, 30, 30)");
      root.style.setProperty("--color-fondo-dark", "rgb(40, 40, 40)");
    }
  }
} */

/* FIN COLOR PICKER */


/* INICIO CAMBIAR IDIOMA */
/* localStorage lang */
let langArrayEn;
let langArrayEs;

if (localStorage.getItem("language") && localStorage.getItem("language") == "es") {
  document.documentElement.setAttribute("lang", "es");
  langArrayEn = $('[lang="en"]').detach()
  langArrayEs = null;
  $('.langSelect--es').addClass('langSelect--active');
  $('.langSelect--en').removeClass('langSelect--active');
} else {
  document.documentElement.setAttribute("lang", "en");
  langArrayEs = $('[lang="es"]').detach()
  langArrayEn = null;
  $('.langSelect--en').addClass('langSelect--active');
  $('.langSelect--es').removeClass('langSelect--active');
}

/* langSelect button */
$('.langSelect').click(() => {
  if (langArrayEs) {
    document.documentElement.setAttribute("lang", "es");
    langArrayEn = $('[lang="en"]').each(function (i) { $(this).replaceWith(langArrayEs[i]) })
    langArrayEs = null;
    $('.langSelect--es').addClass('langSelect--active');
    $('.langSelect--en').removeClass('langSelect--active');
    localStorage.setItem("language", "es");
  } else if (langArrayEn) {
    document.documentElement.setAttribute("lang", "en");
    langArrayEs = $('[lang="es"]').each(function (i) { $(this).replaceWith(langArrayEn[i]) })
    langArrayEn = null;
    $('.langSelect--en').addClass('langSelect--active');
    $('.langSelect--es').removeClass('langSelect--active');
    localStorage.setItem("language", "en");
  }
  textWobbleOnce();
  rubberBandOnce();
})
/* FIN CAMBIAR IDIOMA */


/* inicio loader */
let loader = document.getElementById("loaderWrapper");

root.style.setProperty("overflow", "hidden");
window.onload = setTimeout(function () {
  loader.style.setProperty("animation", "vis forwards");
  root.style.setProperty("overflow-y", "scroll");
}, 1100);
/* fin loader */


/* run animation one time when it loads */
window.onload = setTimeout(function () {
  textWobbleOnce();
  rubberBandOnce();
}, 1200);
/* fin run animation */

/* BURGER MENU */

let header__burgerButton = document.getElementById("header__burgerButton");
let nav = document.getElementById("nav");
let nav__anchor = document.getElementsByClassName("nav__anchor");

nav.style.visibility = "hidden"; /* nav oculto en tamaños chicos (a menos que se active con el button. de esta forma es mejor la navegacion con teclado (no se tabea a traves de items invisibles)). se muestra normal luego en tamaños mas grandes*/

header__burgerButton.onclick = function () {
  if (nav.classList.contains("nav--open")) {
    nav.style.animation = "vis 200ms forwards";
    nav.classList.remove("nav--open")
    header__burgerButton.style.setProperty("transform", "rotateY(0deg)")
  } else {
    nav.style.animation = "none";
    nav.style.visibility = "visible";
    nav.classList.add("nav--open");
    header__burgerButton.style.setProperty("transform", "rotateY(180deg)")
  }
}

/* cerrar nav burger al hacer click en un link (util para single page layouts) */
for (let i = 0; i < nav__anchor.length; i++) {
  nav__anchor[i].addEventListener("click", function () {
    nav.classList.remove("nav--open")
    header__burgerButton.style.setProperty("transform", "rotate(0deg)")
    nav.style.animation = "vis 200ms forwards"
  });
}
/* fin cerrar nav burger al hacer click en un link (util para single page layouts) */

/* FIN BURGER MENU */






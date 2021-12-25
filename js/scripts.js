/* inicio loader */
let root = document.documentElement;
let loader = document.getElementById("loaderWrapper");

root.style.setProperty("overflow", "hidden");
window.onload = setTimeout(function(){
  loader.style.setProperty("animation", "vis forwards");
  root.style.setProperty("overflow-y", "scroll");
}, 1800);
/* fin loader */


/* BURGER MENU */

let header__burgerButton = document.getElementById("header__burgerButton");
let nav = document.getElementById("nav");
let nav__anchor = document.getElementsByClassName("nav__anchor");

nav.style.visibility="hidden"; /* nav oculto en tamaños chicos (a menos que se active con el button. de esta forma es mejor la navegacion con teclado (no se tabea a traves de items invisibles)). se muestra normal luego en tamaños mas grandes*/

header__burgerButton.onclick=function(){
  if (nav.classList.contains("nav--open")){
    nav.style.animation="vis 200ms forwards";
    nav.classList.remove("nav--open")
    header__burgerButton.style.setProperty("transform","rotateY(0deg)")
  } else{
    nav.style.animation="none";
    nav.style.visibility="visible";
    nav.classList.add("nav--open");
    header__burgerButton.style.setProperty("transform","rotateY(180deg)")
  }
}

/* cerrar nav burger al hacer click en un link (util para single page layouts) */
for (let i=0; i < nav__anchor.length; i++)
{
    nav__anchor[i].addEventListener("click", function() {
      nav.classList.remove("nav--open")
      header__burgerButton.style.setProperty("transform","rotate(0deg)")
      nav.style.animation="vis 200ms forwards"
    });
}
/* fin cerrar nav burger al hacer click en un link (util para single page layouts) */

/* FIN BURGER MENU */


/* INICIO COLOR PICKER */

let colorA = document.getElementById("colorA");
let colorB = document.getElementById("colorB");
let colorC = document.getElementById("colorC");
let colorContainer = document.getElementById("colorContainer");
let footer = document.getElementById("footer");
let footer__hr = document.getElementById("footer__hr");
let particles = document.getElementById("particles-js");
let landingVidA = document.getElementById("landingVidA");
let landingVidB = document.getElementById("landingVidB");
let landingVidC = document.getElementById("landingVidC");

colorA.onclick = function(){
  colorC.classList.remove("color--active");
  colorB.classList.remove("color--active");
  colorA.classList.add("color--active");
  root.style.setProperty("--color-primero","rgb(95, 0, 185)");
  root.style.setProperty("--color-segundo","rgb(117, 255, 186)");
  root.style.setProperty("--color-primero-rgb","95, 0, 185");
  root.style.setProperty("--color-segundo-rgb","117, 255, 186"); 
  landingVidA.style.setProperty("opacity", "1");
  landingVidB.style.setProperty("opacity", "0");
  landingVidC.style.setProperty("opacity", "0");
  footer.style.setProperty("background", "linear-gradient(45deg, #2b0053, #0fff87)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, #2b0053, #0fff87)");
  /* root.style.setProperty("--background","url('/media/backgroundA.svg')"); */
  /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(43, 0, 83, .8), rgba(15, 255, 135, .8))");
  particles.style.setProperty("background-size", "400%"); */
}

colorA.onkeydown = function(e){
  if (e.keyCode === 13){
    colorC.classList.remove("color--active");
    colorB.classList.remove("color--active");
    colorA.classList.add("color--active");
    root.style.setProperty("--color-primero","rgb(95, 0, 185)");
    root.style.setProperty("--color-segundo","rgb(117, 255, 186)");
    root.style.setProperty("--color-primero-rgb","95, 0, 185");
    root.style.setProperty("--color-segundo-rgb","117, 255, 186");  
    landingVidA.style.setProperty("opacity", "1");
    landingVidB.style.setProperty("opacity", "0");
    landingVidC.style.setProperty("opacity", "0");
    footer.style.setProperty("background", "linear-gradient(45deg, #2b0053, #0fff87)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, #2b0053, #0fff87)");
    /* root.style.setProperty("--background","url('/media/backgroundA.svg')");   */
    /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(43, 0, 83, .8), rgba(15, 255, 135, .8))");
    particles.style.setProperty("background-size", "400%"); */
  }
}

colorB.onclick = function(){
    colorA.classList.remove("color--active");
    colorC.classList.remove("color--active");
    colorB.classList.add("color--active");
    root.style.setProperty("--color-primero","rgb(124, 47, 0)");
    root.style.setProperty("--color-segundo","rgb(87, 216, 255)");
    root.style.setProperty("--color-primero-rgb","124, 47, 0");
    root.style.setProperty("--color-segundo-rgb","87, 216, 255");
    landingVidB.style.setProperty("opacity", "1");
    landingVidA.style.setProperty("opacity", "0");
    landingVidC.style.setProperty("opacity", "0");
    footer.style.setProperty("background", "linear-gradient(45deg, #160800, #00b8f0)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, #160800, #00b8f0)");
    /* root.style.setProperty("--background","url('/media/backgroundB.svg')"); */
    /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(22, 8, 0, .8), rgba(0, 184, 240, .8))")
    particles.style.setProperty("background-size", "400%"); */
}

colorB.onkeydown = function(e){
  if (e.keyCode === 13){
    colorA.classList.remove("color--active");
    colorC.classList.remove("color--active");
    colorB.classList.add("color--active");
    root.style.setProperty("--color-primero","rgb(124, 47, 0)");
    root.style.setProperty("--color-segundo","rgb(87, 216, 255)");
    root.style.setProperty("--color-primero-rgb","124, 47, 0");
    root.style.setProperty("--color-segundo-rgb","87, 216, 255");
    landingVidB.style.setProperty("opacity", "1");
    landingVidA.style.setProperty("opacity", "0");
    landingVidC.style.setProperty("opacity", "0");
    footer.style.setProperty("background", "linear-gradient(45deg, #160800, #00b8f0)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, #160800, #00b8f0)");
    /* root.style.setProperty("--background","url('/media/backgroundB.svg')"); */
    /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(22, 8, 0, .8), rgba(0, 184, 240, .8))")
    particles.style.setProperty("background-size", "400%"); */
  }
}

colorC.onclick = function(){
  colorA.classList.remove("color--active");
  colorB.classList.remove("color--active");
  colorC.classList.add("color--active");
  root.style.setProperty("--color-primero","rgb(0, 0, 0)");
  root.style.setProperty("--color-segundo","rgb(255, 255, 255)");
  root.style.setProperty("--color-primero-rgb","0, 0, 0");
  root.style.setProperty("--color-segundo-rgb","255, 255, 255");
  landingVidC.style.setProperty("opacity", "1");
  landingVidA.style.setProperty("opacity", "0");
  landingVidB.style.setProperty("opacity", "0"); 
  footer.style.setProperty("background", "linear-gradient(45deg, rgb(0, 0, 0), rgb(255, 255, 255)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, rgb(0, 0, 0),rgb(255, 255, 255)");
  /* root.style.setProperty("--background","url('/media/backgroundC.svg')"); */
  /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(0, 0, 0, .8), rgba(255, 255, 255, .8))")
  particles.style.setProperty("background-size", "400%"); */
}

colorC.onkeydown = function(e){
  if (e.keyCode === 13){
    colorA.classList.remove("color--active");
    colorB.classList.remove("color--active");
    colorC.classList.add("color--active");
    root.style.setProperty("--color-primero","rgb(0, 0, 0)");
    root.style.setProperty("--color-segundo","rgb(255, 255, 255)");
    root.style.setProperty("--color-primero-rgb","0, 0, 0");
    root.style.setProperty("--color-segundo-rgb","255, 255, 255");
    landingVidC.style.setProperty("display", "block");
    landingVidA.style.setProperty("display", "none");
    landingVidB.style.setProperty("display", "none"); 
    footer.style.setProperty("background", "linear-gradient(45deg, rgb(0, 0, 0), rgb(255, 255, 255)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, rgb(0, 0, 0),rgb(255, 255, 255)");
    /* root.style.setProperty("--background","url('/media/backgroundC.svg')"); */
    /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(0, 0, 0, .8), rgba(255, 255, 255, .8))")
    particles.style.setProperty("background-size", "400%"); */
  }
}

/* FIN COLOR PICKER */


/* HIDE NAV BORDER ON TOP */

$(function () {
  var $win = $(window);

  $win.scroll(function () {
      if ($win.scrollTop() == 0)
          alert('Scrolled to Page Top');
      else if ($win.height() + $win.scrollTop()
                     == $(document).height()) {
          alert('Scrolled to Page Bottom');
      }
  });
});

/*FIN HIDE NAV BORDER ON TOP */

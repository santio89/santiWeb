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
let nav__button = document.getElementById("header__burgerButton");
let nav = document.getElementById("nav");
let nav__anchor = document.getElementsByClassName("nav__anchor");

nav.style.visibility="hidden"; /* nav oculto en tamaños chicos (a menos que se active con el button. de esta forma es mejor la navegacion con teclado). se muestra normal luego en desktop*/

nav__button.onclick=function(){
  if (nav.classList.contains("nav--open")){
    nav.style.animation="vis 200ms forwards";
    nav.classList.remove("nav--open")
    nav__button.style.setProperty("transform","rotate(0deg)")
    nav__button.style.setProperty("color","var(--color-cero)")
  } else{
    nav.style.animation="none";
    nav.style.visibility="visible";
    nav.classList.add("nav--open");
    nav__button.style.setProperty("transform","rotate(-90deg)")
    nav__button.style.setProperty("color","var(--color-primero)")
    document.addEventListener( 'click', listener ) 
  }
}


/* FIN BURGER MENU */

/* cerrar nav burger al hacer click en un link (util para single page layouts) */
for (let i=0; i < nav__anchor.length; i++)
{
    nav__anchor[i].addEventListener("click", function() {
      nav.classList.remove("nav--open")
      nav__button.style.setProperty("transform","rotate(0deg)")
      nav__button.style.setProperty("color","var(--color-cero)")
      nav.style.animation="vis 200ms forwards";
    });
}
/* fin cerrar nav burger al hacer click en un link (util para single page layouts) */


/* cerrar nav si hago click fuera del nav o del icono burger */

let listener = function( e ) {

  for (let i=0; i < nav__anchor.length; i++)
{
  let anchor = nav__anchor[i]
  if( (e.target != nav__button) && (e.target != anchor)){
    nav.style.animation="vis 200ms forwards";
    nav.classList.remove("nav--open")
    nav__button.style.setProperty("transform","rotate(0deg)")
    nav__button.style.setProperty("color","var(--color-cero)")
    document.removeEventListener( 'click', listener )
}
}

  
  };
  
  /* fin cerrar nav si hago click fuera del nav o del icono burger */



/* INICIO cerrar burger nav si estaba abierto y hago resize hasta un tamaño en el que ya no existe */

/* window.addEventListener('resize', function() {
  if (window.matchMedia('(min-width: 900px)').matches) {
    nav.classList.remove("nav--open");
  }
}, true); */

/* FIN cerrar burger nav si estaba abierto y hago resize hasta un tamaño en el que ya no existe */



/* INICIO COLOR PICKER */

let colorA = document.getElementById("colorA");
let colorB = document.getElementById("colorB");
let colorC = document.getElementById("colorC");
let colorContainer = document.getElementById("colorContainer");
let footer = document.getElementById("footer");
let footer__hr = document.getElementById("footer__hr")
let particles = document.getElementById("particles-js")
let vid = document.getElementById("landingVid");

colorA.onclick = function(){
  colorC.classList.remove("color--active");
  colorB.classList.remove("color--active");
  colorA.classList.add("color--active");
  root.style.setProperty("--color-primero","rgb(95, 0, 185)");
  root.style.setProperty("--color-segundo","rgb(117, 255, 186)");
  root.style.setProperty("--color-primero-rgb","95, 0, 185");
  root.style.setProperty("--color-segundo-rgb","117, 255, 186"); 
  footer.style.setProperty("background", "linear-gradient(45deg, #2b0053, #0fff87)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, #2b0053, #0fff87)");
  particles.style.setProperty("background", "linear-gradient(135deg, rgba(43, 0, 83, .8), rgba(15, 255, 135, .8))");
  particles.style.setProperty("background-size", "500%");
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
    footer.style.setProperty("background", "linear-gradient(45deg, #2b0053, #0fff87)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, #2b0053, #0fff87)");
    particles.style.setProperty("background", "linear-gradient(135deg, rgba(43, 0, 83, .8), rgba(15, 255, 135, .8))");
    particles.style.setProperty("background-size", "500%");
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
    footer.style.setProperty("background", "linear-gradient(45deg, #160800, #00b8f0)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, #160800, #00b8f0)");
    particles.style.setProperty("background", "linear-gradient(135deg, rgba(22, 8, 0, .8), rgba(0, 184, 240, .8))")
    particles.style.setProperty("background-size", "500%");
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
    footer.style.setProperty("background", "linear-gradient(45deg, #160800, #00b8f0)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, #160800, #00b8f0)");
    particles.style.setProperty("background", "linear-gradient(135deg, rgba(22, 8, 0, .8), rgba(0, 184, 240, .8))")
    particles.style.setProperty("background-size", "500%");
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
  footer.style.setProperty("background", "linear-gradient(45deg, rgb(0, 0, 0), rgb(255, 255, 255)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, rgb(0, 0, 0),rgb(255, 255, 255)");
  particles.style.setProperty("background", "linear-gradient(135deg, rgba(0, 0, 0, .8), rgba(255, 255, 255, .8))")
  particles.style.setProperty("background-size", "500%");
  landingVid.style.setProperty("filter", "grayscale(100%)");
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
    footer.style.setProperty("background", "linear-gradient(45deg, rgb(0, 0, 0), rgb(255, 255, 255)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, rgb(0, 0, 0),rgb(255, 255, 255)");
    particles.style.setProperty("background", "linear-gradient(135deg, rgba(0, 0, 0, .8), rgba(255, 255, 255, .8))")
    particles.style.setProperty("background-size", "500%");
    landingVid.style.setProperty("filter", "grayscale(100%)");
  }
}

/* FIN COLOR PICKER */

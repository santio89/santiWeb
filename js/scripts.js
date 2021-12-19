/* inicio loader */
let root = document.documentElement;
root.style.setProperty("overflow", "hidden");
window.onload = setTimeout(function(){
  loader.style.setProperty("animation", "vis forwards");
  root.style.setProperty("overflow-y", "scroll");
}, 1000);
/* fin loader */

/* INICIO cerrar nav burger si hago click fuera del area */

let nav__anchor = document.getElementsByClassName("nav__anchor");
let header__burgerMenu = document.getElementById("header__burgerMenu");

/* cerrar nav burger al hacer click en un link (util para single page layouts) */
for (let i=0; i < nav__anchor.length; i++)
{
    nav__anchor[i].addEventListener("click", function() {
        header__burgerMenu.checked = false;
    });
}
/* fin cerrar nav burger al hacer click en un link (util para single page layouts) */

/* agregar EventListener cuando el nav burger sea abierto */
let nav = document.getElementById("nav");
let header__burgerIcon__icon = document.getElementById("header__burgerIcon__icon");

header__burgerMenu.addEventListener( 'click', function(){
    if( this.checked ) {
      document.addEventListener( 'click', listener );
    } 
  });
/* fin agregar EventListener cuando el nav burger sea abierto */

/* cerrar nav si hago click fuera del nav o del icono burger */
let listener = function( e ) {
if( e.target != header__burgerMenu && e.target != nav && e.target != header__burgerIcon__icon) {
    header__burgerMenu.checked = false;
    document.removeEventListener( 'click', listener );
}
};
/* fin cerrar nav si hago click fuera del nav o del icono burger */

/* FIN cerrar nav burger si hago click fuera del area */

/* INICIO cerrar burger nav si estaba abierto y hago resize hasta un tamaño en el que ya no existe */
window.addEventListener('resize', function() {
  if (window.matchMedia('(min-width: 900px)').matches) {
      document.getElementById('header__burgerMenu').checked = false;
  }
}, true);
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
let loader = document.getElementById("loaderWrapper");

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

colorB.onkeydown = function(){
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

colorC.onkeydown = function(){
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


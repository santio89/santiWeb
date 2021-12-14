/* INICIO cerrar nav burger si hago click fuera del area */

var nav__anchor = document.getElementsByClassName("nav__anchor");
var header__burgerMenu = document.getElementById("header__burgerMenu");

/* cerrar nav burger al hacer click en un link (util para single page layouts) */
for (let i=0; i < nav__anchor.length; i++)
{
    nav__anchor[i].addEventListener("click", function() {
        header__burgerMenu.checked = false;
    });
}
/* fin cerrar nav burger al hacer click en un link (util para single page layouts) */

/* agregar EventListener cuando el nav burger sea abierto */
var nav = document.getElementById("nav");
var header__burgerIcon__icon = document.getElementById("header__burgerIcon__icon");

header__burgerMenu.addEventListener( 'click', function(){
    if( this.checked ) {
      document.addEventListener( 'click', listener );
    } 
  });
/* fin agregar EventListener cuando el nav burger sea abierto */

/* cerrar nav si hago click fuera del nav o del icono burger */
var listener = function( e ) {
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
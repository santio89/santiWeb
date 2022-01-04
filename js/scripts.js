/* inicio mouse trail */
const LINE_DURATION = 2;
const LINE_WIDTH_START = 10;

$(document).ready(function() {
  enableDrawingCanvas();
  resizeCanvas(window.innerWidth, window.innerHeight);
});

//////////////////////////
// Variable definitions //
//////////////////////////
var active = true;

var canvas;
var context;

var newWidth = 1000;
var newHeight = 800;

var spread = 2;

var lineColor = 'rgb(117, 255, 186)';
var lineDuration = LINE_DURATION;
var lineFadeLinger = 1;
var lineWidthStart = LINE_WIDTH_START;
var fadeDuration = 50;
var drawEveryFrame = 1; // Only adds a Point after these many 'mousemove' events

var clickCount = 0;
var frame = 0;

var flipNext = true;

var points = new Array();

///////////////////////
// Program functions //
///////////////////////

// Find canvas reference & enable listeners
function enableDrawingCanvas() {
  if (canvas === undefined) {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    enableListeners();
    init();
  }
}

// Initialize animation start
function init() {
  draw();
}

// Draw current state
function draw() {
  if (active) {
    animatePoints();
    window.requestAnimFrame(draw);
  }
}

// Update mouse positions
function animatePoints() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  var duration = lineDuration * 1000 / 60;
  var point, lastPoint;

  for (var i = 0; i < points.length; i++) {
    point = points[i];

    if (points[i - 1] !== undefined) {
      lastPoint = points[i - 1];
    } else {
      lastPoint = points[i];
    }

    point.lifetime += 1;

    if (point.lifetime > duration) {
      points.splice(i, 1);
      continue;
    }

    // Begin drawing stuff!
    var inc = (point.lifetime / duration); // 0 to 1 over lineDuration
    var dec = 1 - inc;

    var spreadRate;
    if (spread === 1) {
      spreadRate = lineWidthStart / (point.lifetime * 2);
    } // Lerp Decrease
    if (spread === 2) {
      spreadRate = lineWidthStart * (1 - inc);
    } // Linear Decrease

    var fadeRate = dec;

    context.strokeStyle = lineColor;
    context.lineJoin = "round";
    context.lineWidth = spreadRate;

    var distance = Point.distance(lastPoint, point);
    var midpoint = Point.midPoint(lastPoint, point);
    var angle = Point.angle(lastPoint, point);


    context.beginPath();


    context.moveTo(lastPoint.x, lastPoint.y);
    context.lineTo(point.x, point.y);
  
      context.stroke();
      context.closePath();

  }

  //if (points.length > 0) { console.log(spreadRate + "|" + points.length + " points alive."); }
}

function addPoint(x, y) {
  flipNext = !flipNext;
  var point = new Point(x, y, 0, flipNext);
  points.push(point);
}

//////////////////////////////
// Less Important functions //
//////////////////////////////

// RequestAnimFrame definition
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

// Update canvas dimensions based on input
function resizeCanvas(w, h) {
  if (context !== undefined) {
    context.canvas.width = w;
    context.canvas.height = h;

    newWidth = w;
    newHeight = h;
  }
}

// Listeners for mouse and touch events
function enableListeners() {

  //********* Mouse Listeners *********//
  $('#myCanvas').on('mousemove', function(e) {
    if (frame === drawEveryFrame) {
      addPoint(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
      frame = 0;
    }
    frame++;
  });

  $('#myCanvas').on('mouseover', function(e) {});
  $('#myCanvas').on('mouseleave', function(e) {});

  //********* Touch Listeners *********//
  $('#myCanvas').on('touchstart', function(e) {
    var touch = e.touches[0];
  });
  $('#myCanvas').on('touchmove', function(e) {
    var touch = e.touches[0];
  });
  $('#myCanvas').on('touchend', function(e) {});
}


// POINT CLASS
// Cartersian location of where mouse location
// was previously at. 
// Used to draw arcs between Points.
var Point = class Point {

  // Define class constructor
  constructor(x, y, lifetime, flip) {
    this.x = x;
    this.y = y;
    this.lifetime = lifetime;
    this.flip = flip;
  }

  // Get the distance between a & b
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }

  // Get the mid point between a & b
  static midPoint(a, b) {
    const mx = a.x + (b.x - a.x) * 0.5;
    const my = a.y + (b.y - a.y) * 0.5;

    return new Point(mx, my);
  }

  // Get the angle between a & b
  static angle(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.atan2(dy, dx);
  }

  // Simple getter for printing
  get pos() {
    return this.x + "," + this.y;
  }
}

/* fin mouse trail */


/* inicio loader */
let root = document.documentElement;
let loader = document.getElementById("loaderWrapper");

root.style.setProperty("overflow", "hidden");
window.onload = setTimeout(function(){
  loader.style.setProperty("animation", "vis forwards");
  root.style.setProperty("overflow-y", "scroll");
}, 1400);
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
let landingImgA = document.getElementById("landingImgA");
let landingImgB = document.getElementById("landingImgB");
let landingImgC = document.getElementById("landingImgC");

colorA.onclick = function(){
  colorC.classList.remove("color--active");
  colorB.classList.remove("color--active");
  colorA.classList.add("color--active");
  root.style.setProperty("--color-primero","rgb(95, 0, 185)");
  root.style.setProperty("--color-segundo","rgb(117, 255, 186)");
  root.style.setProperty("--color-primero-rgb","95, 0, 185");
  root.style.setProperty("--color-segundo-rgb","117, 255, 186"); 
  landingImgA.style.setProperty("opacity", "1");
  landingImgB.style.setProperty("opacity", "0");
  landingImgC.style.setProperty("opacity", "0");
  footer.style.setProperty("background", "linear-gradient(45deg, #2b0053, #0fff87)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, #2b0053, #0fff87)");
  /* root.style.setProperty("--background","url('/media/backgroundA.svg')"); */
  /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(43, 0, 83, .8), rgba(15, 255, 135, .8))");
  particles.style.setProperty("background-size", "400%"); */
  lineColor = 'rgb(117, 255, 186)';
}

colorB.onclick = function(){
    colorA.classList.remove("color--active");
    colorC.classList.remove("color--active");
    colorB.classList.add("color--active");
    root.style.setProperty("--color-primero","rgb(124, 47, 0)");
    root.style.setProperty("--color-segundo","rgb(87, 216, 255)");
    root.style.setProperty("--color-primero-rgb","124, 47, 0");
    root.style.setProperty("--color-segundo-rgb","87, 216, 255");
    landingImgB.style.setProperty("opacity", "1");
    landingImgA.style.setProperty("opacity", "0");
    landingImgC.style.setProperty("opacity", "0");
    footer.style.setProperty("background", "linear-gradient(45deg, #160800, #00b8f0)");
    footer.style.setProperty("background-size", "500%");
    footer__hr.style.setProperty("background", "linear-gradient(270deg, #160800, #00b8f0)");
    /* root.style.setProperty("--background","url('/media/backgroundB.svg')"); */
    /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(22, 8, 0, .8), rgba(0, 184, 240, .8))")
    particles.style.setProperty("background-size", "400%"); */
    lineColor = 'rgb(87, 216, 255)';
}

colorC.onclick = function(){
  colorA.classList.remove("color--active");
  colorB.classList.remove("color--active");
  colorC.classList.add("color--active");
  root.style.setProperty("--color-primero","rgb(0, 0, 0)");
  root.style.setProperty("--color-segundo","rgb(200, 200, 200)");
  root.style.setProperty("--color-primero-rgb","0, 0, 0");
  root.style.setProperty("--color-segundo-rgb","200, 200, 200");
  landingImgC.style.setProperty("opacity", "1");
  landingImgA.style.setProperty("opacity", "0");
  landingImgB.style.setProperty("opacity", "0"); 
  footer.style.setProperty("background", "linear-gradient(45deg, rgb(0, 0, 0), rgb(255, 255, 255)");
  footer.style.setProperty("background-size", "500%");
  footer__hr.style.setProperty("background", "linear-gradient(270deg, rgb(0, 0, 0),rgb(255, 255, 255)");
  /* root.style.setProperty("--background","url('/media/backgroundC.svg')"); */
  /* particles.style.setProperty("background", "linear-gradient(135deg, rgba(0, 0, 0, .8), rgba(255, 255, 255, .8))")
  particles.style.setProperty("background-size", "400%"); */
    lineColor = 'rgb(200, 200, 200)';
}

/* FIN COLOR PICKER */



/* hide nav */
/* let header = document.getElementById("header");

if (window.scrollY>0){
  header.style.setProperty("box-shadow", "0 .1rem 0rem 0 var(--color-primero)")
}
else{
  header.style.setProperty("box-shadow", "none")
} */
/* fin hide nav */

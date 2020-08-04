// globals
var canvas;
var canvasHeight = window.innerHeight;
var canvasWidth = window.innerWidth;
let mx = 1;
let my = 1;
let easing = 0.05;
let radius = 24;
let edge = 30;
let inner = edge + radius;
let player;
let enemy;


// setup function (called ONCE when the page first loads)
function setup() {
    // create canvas and append it to the page
    bg = loadImage('assets/background.jpg');
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('parent');

    ellipseMode(RADIUS);
    rectMode(CORNERS);
}

// called when the window is resized
function windowResized() {
    // redefine the width and heights
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
}
// draw function (called 60 times per second)
function draw() {
    resizeCanvas(canvasWidth, canvasHeight) // resized canvas
    background(bg) // Background

    if (abs(mouseX - mx) > 0.1) {
        mx = mx + (mouseX - mx) * easing;
    }
    if (abs(mouseY - my) > 0.1) {
        my = my + (mouseY - my) * easing;
    }

    mx = constrain(mx, inner, width - inner);
    my = constrain(my, inner, height - inner);
    fill(169,169,169);
    rect(edge, edge, width - edge, height - edge);
    fill(255);
    player = ellipse(mx, my, radius, radius);
    enemy = ellipse(150, 150, radius, radius); // 150, 150 is x, y. Radius, Radius is the size
}

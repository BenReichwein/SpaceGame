// globals
var canvas;
var canvasHeight = window.innerHeight;
var canvasWidth = window.innerWidth;
let mx = 1; // Starting position for player
let my = 1; // Starting position for player
let ex = 150; // starting position for enemy
let ey = 150; // Starting position for enemy
let easing = 0.05;
let radius = 24;
let eradius;
let edge = 30;
let inner = edge + radius;
let player;
let enemy;
// Sleep thread
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


// setup function (called ONCE when the page first loads)
function setup() {
    // create canvas and append it to the page
    bg = loadImage('assets/background.jpg');
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('parent');

    eradius = Math.floor(Math.random() * 69) + 21; // Size of enemy (random)

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
    // Border
    fill(169,169,169);
    rect(edge, edge, width - edge, height - edge);
    // Player
    fill(255);
    player = ellipse(mx, my, radius, radius);
    // Enemy
    fill(220,220,220);
    enemy = ellipse(ex, ey, eradius, eradius); // 150, 150 is x, y. Radius, Radius is the size
    collision();
    movement();
}

function collision() {
    mx = constrain(mx, inner, width - inner); // If Player touches border
    my = constrain(my, inner, height - inner); // If Player touches border
    // Player touches enemy
    if (mx+radius*2 > ex && mx < ex+eradius && my+radius*2 > ey && my < ey+eradius) {
        mx = 500;
    }
}

async function movement() {
    // Player
    if (abs(mouseX - mx) > 0.1) {
        mx = mx + (mouseX - mx) * easing;
    }
    if (abs(mouseY - my) > 0.1) {
        my = my + (mouseY - my) * easing;
    }
    // Enemy
    while (eradius > 20 && eradius < 30) {
        await sleep(1000);
        ey+=0.5;
        await sleep(1000);
        ex+=0.5;
    }
    while (eradius > 30 && eradius < 40) {
        await sleep(700);
        ey+=0.4;
        await sleep(700);
        ex+=0.4;
    }
    while (eradius > 40 && eradius < 50) {
        await sleep(600);
        ey+=0.3;
        await sleep(600);
        ex+=0.3;
    }
    while (eradius > 50 && eradius <= 69) {
        await sleep(500);
        ey+=0.2;
        await sleep(500);
        ex+=0.2;
    }
}

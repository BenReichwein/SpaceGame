// globals
var canvas;
var canvasHeight = window.innerHeight;
var canvasWidth = window.innerWidth;
let mx = 1; // Starting position for player
let my = 1; // Starting position for player
let ex = 150; // starting position for enemy
let ey = 150; // Starting position for enemy
let easing = 0.05;
let pRadius = 24;
let eRadius;
let edgeMargin = 30;
let innerBorder = edgeMargin + pRadius;
let player;
let enemy;
let playerImg;

// Sleep thread
const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function preload() {
    playerImg = loadImage("assets/player.png");
    bg = loadImage('assets/background.jpg');
}

// setup function (called ONCE when the page first loads)
function setup() {
    ellipseMode(RADIUS);
    rectMode(CORNERS);
    imageMode(CENTER);
    angleMode(DEGREES);

    // create canvas and append it to the page
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('parent');


    eRadius = Math.floor(Math.random() * 69) + 21; // Size of enemy (random)

    // create a player
    player = new Player(mx, my, easing, playerImg);
    enemy = new Enemy(ex, ey);
}

// called when the window is resized
function windowResized() {
    // redefine the width and heights
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
}
// draw function (called 60 times per second)
function draw() {

    resizeCanvas(canvasWidth, canvasHeight); // resized canvas

    // background
    push()
    translate(canvasWidth / 2, canvasHeight / 2)
    image(bg, 0, 0) // Background
    pop();

    // Border
    fill(169, 169, 169);
    rect(edgeMargin, edgeMargin, width - edgeMargin, height - edgeMargin);

    // draw the player
    player.draw();
    // player movement
    player.move();
    // draw the enemy
    enemy.draw();
    // enemy movement
    enemy.movement();

    collision();
}

function collision() {
    player.x = constrain(player.x, innerBorder, width - innerBorder); // If Player touches border
    player.y = constrain(player.y, innerBorder, height - innerBorder); // If Player touches border
    // Player touches enemy
    if (collideRectCircle(player.x - (player.width / 2), player.y - (player.height / 2), player.width, player.height, enemy.x, enemy.y, enemy.diameter)) {
        player.x = 100;
    }
}

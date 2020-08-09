// globals
var canvas;
var canvasHeight = window.innerHeight;
var canvasWidth = window.innerWidth;
let mx = 500; // Starting position for player
let my = 500; // Starting position for player
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
let score = 0;
let mode = 0;

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
    // Start button
    start = createButton("START");
    start.position(canvasWidth/2-50, canvasHeight/2);
    start.size(200,50);
    start.mousePressed(updatemode);


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
    push();
    translate(canvasWidth / 2, canvasHeight / 2);
    image(bg, 0, 0);
    pop();
    // Starting and Game over screen
    if (mode === 0) {
        // Title
        fill(236, 217, 43);
        textSize(64);
        text(`SPACE TRAVEL`, canvasWidth/2-200, canvasHeight/2-100);
        // Score
        fill(236, 217, 43);
        textSize(30);
        text(`SCORE: ${score}`, canvasWidth/2-50, canvasHeight/2+30);
    }
    // Game play screen
    if (mode === 1) {
        start.remove();
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

        // Score System
        score++;
        fill(236, 217, 43);
        textSize(24);
        text(`SCORE: ${score}`, 30, 25);

        collision();
    }
}

function collision() {
    player.x = constrain(player.x, innerBorder, width - innerBorder); // If Player touches border
    player.y = constrain(player.y, innerBorder, height - innerBorder); // If Player touches border
    // Player touches enemy
    if (collideRectCircle(player.x - (player.width / 2), player.y - (player.height / 2), player.width, player.height, enemy.x, enemy.y, enemy.diameter)) {
        updatemode();
    }
}

function updatemode() {
    if (mode === 0) {
        mode++;
    } else {
        mode--;
    }
}

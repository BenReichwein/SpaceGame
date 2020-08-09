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
let score = 0;
let enemies = [];
let drawEnemy = timer(score);

// Sleep thread
const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function timer(score) {
    // return true every 7 seconds
    switch (score) {
        case score > 50000:
            setTimeout(() => {
                return true;
            }, 7000)
            break;

        // every 5
        case score > 100000:
            setTimeout(() => {
                return true;
            }, 5000)
            break;

        // every 3
        case score > 200000:
            setTimeout(() => {
                return true;
            }, 3000)
            break;

        // every 10
        default:
            setTimeout(() => {
                return true;
            }, 10000);
            break;
    }
}

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

    // Score System
    score++;
    fill(236, 217, 43);
    textSize(24);
    text(`SCORE: ${score}`, 30, 25);

    console.log(drawEnemy);
    // draw the player
    player.draw();
    // player movement
    player.move();
    // draw the enemy
    if (drawEnemy) {
        console.log('here')
        enemies.push(new Enemy());
        drawEnemy = false;
    }
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
        enemies[i].movement();
    }
    // enemy movement


    collision();
}

function collision() {
    player.x = constrain(player.x, innerBorder, width - innerBorder); // If Player touches border
    player.y = constrain(player.y, innerBorder, height - innerBorder); // If Player touches border
    // Player touches enemy
    for (var i = 0; i < enemies.length; i++) {
        if (collideRectCircle(player.x - (player.width / 2), player.y - (player.height / 2), player.width, player.height, enemies[i].x, enemies[i].y, enemies[i].diameter)) {
            player.x = 100;
        }
    }
}

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
// Sleep thread
const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// setup function (called ONCE when the page first loads)
function setup() {
	// create canvas and append it to the page
	bg = loadImage('assets/background.jpg');
	canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent('parent');

	eRadius = Math.floor(Math.random() * 69) + 21; // Size of enemy (random)

	ellipseMode(RADIUS);
	rectMode(CORNERS);

	// create a player
	player = new Player(mx, my, pRadius, easing, innerBorder, width, height);
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
	background(bg); // Background
	// Border
	fill(169, 169, 169);
	rect(edgeMargin, edgeMargin, width - edgeMargin, height - edgeMargin);

	// Enemy
	fill(220, 220, 220);
	enemy = ellipse(ex, ey, eRadius, eRadius); // 150, 150 is x, y. Radius, Radius is the size

	// draw the player
	player.draw();
	// player movement
	player.move();

	collision();
	movement();
}

function collision() {
	// mx = constrain(mx, innerBorder, width - innerBorder); // If Player touches border
	// my = constrain(my, innerBorder, height - innerBorder); // If Player touches border
	// Player touches enemy
	if (mx + pRadius * 2 > ex && mx < ex + eRadius && my + pRadius * 2 > ey && my < ey + eRadius) {
		mx = 500;
	}
}

async function movement() {
	// Enemy
	while (eRadius > 20 && eRadius < 30) {
		await sleep(1000);
		ey += 0.5;
		await sleep(1000);
		ex += 0.5;
	}
	while (eRadius > 30 && eRadius < 40) {
		await sleep(700);
		ey += 0.4;
		await sleep(700);
		ex += 0.4;
	}
	while (eRadius > 40 && eRadius < 50) {
		await sleep(600);
		ey += 0.3;
		await sleep(600);
		ex += 0.3;
	}
	while (eRadius > 50 && eRadius <= 69) {
		await sleep(500);
		ey += 0.2;
		await sleep(500);
		ex += 0.2;
	}
}

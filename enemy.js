var midX = window.innerWidth / 2;
var midY = window.innerHeight / 2;

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function choose(num1, num2) {
    if (Math.random() > 0.5) {
        return num1;
    } else {
        return num2;
    }
}



class Enemy {
    constructor() {
        // spawns in corners
        this.x = choose(getRandomNum(10, 50), getRandomNum(window.innerWidth - 50, window.innerWidth - 10));
        this.y = choose(getRandomNum(10, 50), getRandomNum(window.innerHeight - 50, window.innerHeight - 10));
        this.moveX;
        this.moveY;
        this.radius = Math.floor(Math.random() * 69) + 21; // Size of enemy (random)
        this.diameter = this.radius * 2;
        this.ran = null;
    }

    checkDirection(playerX, playerY) {
        var min = 1;
        var max = 4;
        // top left
        if (this.x < midX && this.y < midY) {
            this.moveX = getRandomNum(min, max);
            this.moveY = getRandomNum(min, max);
        }

        // bottom left
        if (this.x < midX && this.y > midY) {
            this.moveX = getRandomNum(min, max);
            this.moveY = getRandomNum(-max, -min);
        }

        // top right
        if (this.x > midX && this.y < midY) {
            this.moveX = getRandomNum(-max, -min);
            this.moveY = getRandomNum(min, max);
        }

        // bottom right
        if (this.x > midX && this.y > midY) {
            this.moveX = getRandomNum(-max, -min);
            this.moveY = getRandomNum(-max, -min);
        }

    }

    draw() {
        fill(100);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    movement() {

        if (this.ran === null) {
            this.checkDirection(player.x, player.y)
            this.ran = true;
        }

        this.y += this.moveY;

        this.x += this.moveX;

        // remove enemies from array when the leave the scree
        if (this.x <= 0 ||
            this.x >= window.innerWidth ||
            this.y <= 0 ||
            this.y >= window.innerHeight) {

            enemies.splice(enemies.indexOf(this), 1);

        }
    }

}

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
        this.moveX = getRandomNum(-5, 5);
        this.moveY = getRandomNum(-5, 5);
        this.radius = Math.floor(Math.random() * 69) + 21; // Size of enemy (random)
        this.diameter = this.radius * 2;
        this.ran = null;
    }

    checkDirection(playerX, playerY) {
        // send enemy in general direction of player
        if (playerX < this.x) {
            if (this.moveX > 0) {
                this.moveX = -this.moveX;
            }
        }

        if (playerX > this.x) {
            this.moveX = Math.abs(this.moveX);
        }

        if (playerY > this.y) {
            this.moveY = Math.abs(this.moveY);
        }

        if (playerY < this.y) {
            if (this.moveY > 0) {
                this.movey = -this.moveY;
            }
        }
    }

    draw() {
        fill(100);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    movement() {
        console.log(player.x, player.y)

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
        console.log(enemies)
    }

}

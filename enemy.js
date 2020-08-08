class Enemy {
    constructor() {
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.radius = Math.floor(Math.random() * 69) + 21; // Size of enemy (random)
        this.diameter = this.radius * 2;
    }

    draw() {
        var windowCenterX = window.innerWidth / 2
        var windowCenterY = window.innerHeight / 2

        fill(100);

        // top left quad
        if (this.x < windowCenterX && this.y < windowCenterY) {
            // 50% chance of the enemy spawning on the x or y axis
            // if (Math.random() > 0.5) {
            //     this.x = 30;
            //     return;
            // } else {
            //     this.y = 30;
            //     return;
            // }
        }
        // top right quad
        if (this.x > windowCenterX && this.y < windowCenterY) {
        }
        // bottom left quad
        if (this.x < windowCenterX && this.y > windowCenterY) {
        }
        // bottom right quad
        if (this.x > windowCenterX && this.y > windowCenterY) {
        }

        ellipse(this.x, this.y, this.radius, this.radius);

    }

    async movement() {
        // Depending on the size it will change the speed
        while (this.radius > 20 && this.radius < 30) {
            await sleep(1000);
            this.y += 0.5;
            await sleep(1000);
            this.x += 0.5;
        }
        while (this.radius > 30 && this.radius < 40) {
            await sleep(700);
            this.y += 0.4;
            await sleep(700);
            this.x += 0.4;
        }
        while (this.radius > 40 && this.radius < 50) {
            await sleep(600);
            this.y += 0.3;
            await sleep(600);
            this.x += 0.3;
        }
        while (this.radius > 50) {
            await sleep(500);
            this.y += 0.2;
            await sleep(500);
            this.x += 0.2;
        }
    }

    generate() {
        var activeEnemies = [];

    }

}

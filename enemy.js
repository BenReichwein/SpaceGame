class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.floor(Math.random() * 69) + 21; // Size of enemy (random)
    }

    draw() {
        fill(100);
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
}

class Player {
    constructor(x, y, easing, img) {
        this.x = x,
        this.y = y,
        this.ease = easing,
        this.img = img,
        this.scaleFactor = (2/3) // not sure if scaleFactor is the right name for this variable
        this.width = img.width * this.scaleFactor,
        this.height = img.height * this.scaleFactor,
        this.angle = 0;
    }

    // customShape() {
    //     point(this.x, this.y);
    // 	beginShape();
    // 	vertex(this.x - 20, this.y + 20);
    // 	vertex(this.x - 10, this.y + 0);
    // 	vertex(this.x - 20, this.y - 20);
    // 	vertex(this.x + 20, this.y);
    // 	endShape(CLOSE);
    // 	beginShape();
    // 	stroke(255, 0, 0);
    // 	vertex(this.x - 15, this.y - 10);
    // 	vertex(this.x - 30, this.y);
    // 	vertex(this.x - 15, this.y + 10);
    // 	vertex(this.x - 10, this.y);
    // 	endShape(CLOSE);
    // }

    draw() {

        if (keyIsDown(65)) {
            this.angle = this.angle + 1;
            rotate(this.angle);
        }
        image(this.img, this.x, this.y)
        this.img.resize(this.width, this.height)

    }

    move() {
        // make player follow the mouse with some delay
        if (abs(mouseX - this.x) > 0.1) {
            this.x = this.x + (mouseX - this.x) * this.ease;
        }

        if (abs(mouseY - this.y) > 0.1) {
            this.y = this.y + (mouseY - this.y) * this.ease;
        }
    }
}

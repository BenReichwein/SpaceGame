class Player {
	constructor(x, y, radius, easing, inner, width, height) {
		(this.x = constrain(x, inner, width - inner)),
			(this.y = constrain(y, inner, height - inner)),
			(this.radius = radius),
			(this.ease = easing);
	}

	draw() {
		strokeWeight(2);
		noFill();
		point(this.x, this.y);
		beginShape();
		vertex(this.x - 20, this.y + 20);
		vertex(this.x - 10, this.y + 0);
		vertex(this.x - 20, this.y - 20);
		vertex(this.x + 20, this.y);
		endShape(CLOSE);
		beginShape();
		stroke(255, 0, 0);
		vertex(this.x - 15, this.y - 10);
		vertex(this.x - 30, this.y);
		vertex(this.x - 15, this.y + 10);
		vertex(this.x - 10, this.y);
		endShape(CLOSE);
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

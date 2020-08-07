class Wormhole{

    constructor() {
        this.x = Math.floor(Math.random()*window.innerWidth);
        this.y = Math.floor(Math.random()*window.innerHeight);
        this.radius = 15; 
        this.diameter = this.radius * 2;
    }

    draw() {
        var c=color(51,255,253);
        fill(c);
        ellipse(this.x, this.y, this.radius, this.radius);
    }
}
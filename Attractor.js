class Attractor {
    constructor() {
        this.x = Math.floor(Math.random() * SCREEN_WIDTH);
        this.y = Math.floor(Math.random() * SCREEN_HEIGHT);
        this.g = Math.floor((Math.random() * 8) + 2) *0.1;

        if(this.g > 0.6) {
            this.g *= 4;
        }
        else {
            this.g *= -8;
        }

        this.r = Math.floor(Math.abs(this.g)* 4);
        this.c = (this.g > 0 ? color('#ff3333') : color('#3333ff'));
    }

    draw() {
        fill(this.c);
        ellipse(this.x, this.y, this.r, this.r);
    }
}
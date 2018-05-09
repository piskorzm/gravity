const a_radius = 11;

class Attractor {
    constructor() {
        this.x = Math.floor(Math.random() * SCREEN_WIDTH);
        this.y = Math.floor(Math.random() * SCREEN_HEIGHT);
        this.g = Math.floor(Math.random() * 10) *0.1;

        if(this.g > 0.5) {
            this.g *= 4;
        }
        else {
            this.g *= -4;
        }
    }

    draw() {
        let a_color = color('#ff3333');
        let r_color = color('#3333ff');

        if(this.g < 0) {
            fill(r_color);
        } else {
            fill(a_color);
        }

        noStroke();
        ellipse(this.x, this.y, a_radius, a_radius);
    }
}
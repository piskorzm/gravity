class Attractor {
    constructor() {
        this.x = Math.floor(Math.random() * SCREEN_WIDTH);
        this.y = Math.floor(Math.random() * SCREEN_HEIGHT);
        this.g = Math.floor(Math.random() * 100) *0.01;

        if(this.g > 0.5) {
            this.g *= 4;
        }
        else {
            this.g *= -3;
        }
    }
}

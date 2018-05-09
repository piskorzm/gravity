class Particle {
    constructor() {
        this.x = Math.floor(Math.random() * SCREEN_WIDTH);
        this.y = Math.floor(Math.random() * SCREEN_HEIGHT);
        this.vx = 0;
        this.vy = 0;
    }
}
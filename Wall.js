class Wall {
    constructor() {
        this.x1 = Math.floor(Math.random() * SCREEN_WIDTH) - 200;
        this.y1 = Math.floor(Math.random() * SCREEN_HEIGHT) - 200;
        this.x2 = this.x1 + Math.floor((Math.random() * 200));
        this.y2 = this.y1 + Math.floor((Math.random() * 200));

        if(this.g > 0.6) {
            this.g *= 4;
        }
        else {
            this.g *= -8;
        }

        this.r = Math.floor(Math.abs(this.g)* 4);
        this.c = color('#fff544');
    }

    draw() {
        fill(this.c);
        rect  (this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
    }

    isInside(e) {
        let inside = false;
        if (e.x >= this.x1 && e.x <= this.x2 && e.y >= this.y1 && e.y <= this.y2) inside = true;

        return inside;
    }

    setParticleToClosestEdge(p) {
        let dx1 = p.x - this.x1;
        let dx2 = this.x2 - p.x;
        let dy1 = p.y - this.y1;
        let dy2 = this.y2 - p.y;

        if(dx1 <= dx2 && dx1 <= dy1 && dx1 <= dy2) {
            p.x = this.x1;
            p.vx *= -0.6;
        } else if(dx2 <= dx1 && dx2 <= dy1 && dx2 <= dy2) {
            p.x = this.x2;
            p.vx *= -0.6;
        } else if(dy1 <= dx1 && dy1 <= dy2 && dy1 <= dx2) {
            p.y = this.y1;
            p.vy *= -0.6;
        } else if(dy2 <= dx1 && dy2 <= dy1 && dy2 <= dx2) {
            p.y = this.y2;
            p.vy *= -0.6;
        }
    }
}
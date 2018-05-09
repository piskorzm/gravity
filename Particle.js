class Particle {
    constructor() {
        this.x = Math.floor(Math.random() * SCREEN_WIDTH);
        this.y = Math.floor(Math.random() * SCREEN_HEIGHT);
        this.vx = 0;
        this.vy = 0;
        this.r = 4;
        this.c = color('#eeeeee');
    }

    draw() {
        fill(this.c);
        ellipse(this.x, this.y, this.r, this.r);
    }

    update(attractors) {
        this.x += this.vx;
        this.y += this.vy;

        if(this.x > SCREEN_WIDTH) {
            this.x = SCREEN_WIDTH;
            this.vx *= -0.6;
        } else if (this.x < 0) {
            this.x = 0;
            this.vx *= -0.6;
        }

        if(this.y > SCREEN_HEIGHT) {
            this.y = SCREEN_HEIGHT;
            this.vy *= -0.6;
        } else if (this.y < 0) {
            this.y = 0;
            this.vy *= -0.6;
        }

        attractors.forEach((a) => {
            let dx = a.x - this.x;
            let dy = a.y - this.y;

            let d = dx*dx + dy*dy;

            if(d < 640000) {
                d = sqrtEstimate(d);

                let x_norm = dx / d;
                let y_norm = dy / d;

                if (d < 1) {
                    x_norm *= a.g;
                    y_norm *= a.g;
                } else {
                    x_norm *= a.g / d;
                    y_norm *= a.g / d;
                }

                this.vx += x_norm;
                this.vy += y_norm;
            }
        });
    }
}


function sqrtEstimate(n) {
    let x1 = 400;
    let x2 = (x1 + (n / x1)) / 2;
    let i;

    for(i = 0; i < 5; i++) {
        x1 = x2;
        x2 = (x1 + (n / x1)) / 2;
    }

    return x2;
}
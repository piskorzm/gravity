var particle_no = 1000;
var attractor_no = 10;

var particles = [];
var attractors = [];

function setup() {
    createCanvas(SCREEN_WIDTH,SCREEN_HEIGHT);

    for(var i = 0; i < particle_no; i++) {
        particles.push(new Particle());
    }

    for(var i = 0; i < attractor_no; i++) {
        attractors.push(new Attractor());
    }
}

function draw() {
    background(51);
    drawAttractors();
    drawParticles();
    updatePositions();
}

function drawParticles() {
    particles.forEach((p) => {
        var c = color('#ffffff');
        fill(c);
        ellipse(p.x, p.y, PARTICLE_RADIUS, PARTICLE_RADIUS);
    });
}

function drawAttractors() {
    attractors.forEach((a) => {
        var c;
        if(a.g < 0) {
            c = color('#3333ff');
        } else {
            c = color('#ff3333');
        }
        fill(c);
        ellipse(a.x, a.y, ATTRACTOR_RADIUS, ATTRACTOR_RADIUS);
    });
}

function updatePositions() {
    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if(p.x > SCREEN_WIDTH) {
            p.x = SCREEN_WIDTH;
            p.vx = 0;
        } else if (p.x < 0) {
            p.x = 0;
            p.vx = 0;
        }

        if(p.y > SCREEN_HEIGHT) {
            p.y = SCREEN_HEIGHT;
            p.vy = 0;
        } else if (p.y < 0) {
            p.y = 0;
            p.vy = 0;
        }

        attractors.forEach((a) => {
            var dx = a.x - p.x;
            var dy = a.y - p.y;

            var d = Math.sqrt(dx*dx + dy*dy);

            if(d > 500) {
                var x_norm = dx / d;
                var y_norm = dy / d;

                if (d < 1) {
                    x_norm *= a.g;
                    y_norm *= a.g;
                } else {
                    x_norm *= (1 / d) * a.g;
                    y_norm *= (1 / d) * a.g;
                }

                p.vx += x_norm;
                p.vy += y_norm;
            }
        });

    });
}

































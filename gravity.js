const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;

let particle_no = 750;
let attractor_no = 20;

let particles = [];
let attractors = [];

function setup() {
    createCanvas(SCREEN_WIDTH,SCREEN_HEIGHT);
    noStroke();

    for(let i = 0; i < particle_no; i++) {
        particles.push(new Particle());
    }

    for(let i = 0; i < attractor_no; i++) {
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
        p.draw();
    });
}

function drawAttractors() {
    attractors.forEach((a) => {
        a.draw();
    });
}

function updatePositions() {
    particles.forEach((p) => {
        p.update(attractors);
    });
}
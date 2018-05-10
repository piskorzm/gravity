const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 720;

let particle_no = 800;
let attractor_no = 20;
let wall_no = 10;

let particles = [];
let attractors = [];
let walls = [];

function setup() {
    createCanvas(SCREEN_WIDTH,SCREEN_HEIGHT);
    noStroke();

    for(let i = 0; i < particle_no; i++) {
        particles.push(new Particle());
    }

    for(let i = 0; i < attractor_no; i++) {
        attractors.push(new Attractor());
    }

    for(let i = 0; i < wall_no; i++) {
        walls.push(new Wall());
    }
}

function draw() {
    background(51);
    updatePositions();
    drawWalls();
    drawAttractors();
    drawParticles();
}

function drawWalls() {
    walls.forEach((w) => {
        w.draw();
    });
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
        p.update(attractors, walls);
    });
}
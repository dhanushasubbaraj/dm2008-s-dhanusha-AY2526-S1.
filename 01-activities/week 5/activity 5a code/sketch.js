// DM2008 – Activity 5a
// Colliding Circles (30 min)

let pos, vel;
let rMoving = 100;
let rStationary = 40;

let balls = [];

function setup() {
  createCanvas(400, 400);

  // Step 1: create two Ball objects
  balls.push(new Ball(100, 200));
  balls.push(new Ball(300, 200));
}

function draw() {
  background(230);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();
    balls[i].checkCollision(balls);
  // Step 3: check collisions
  // Use dist() between ball centers
  // Trigger feedback (color, bounce, etc.)
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 30;
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.col = color(random(255), random(255), random(255)); // random starting color
  }

  move() {
    this.pos.add(this.vel);
    // wrap around edges
    if (this.pos.x < -this.r) {this.pos.x = width + this.r;}
    if (this.pos.x > width + this.r) {this.pos.x = -this.r;}
    if (this.pos.y < -this.r) {this.pos.y = height + this.r;}
    if (this.pos.y > height + this.r) {this.pos.y = -this.r;}
  }

    show() {
    fill(this.col);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
    
    checkCollision(others){
      for (let i = 0; i < others.length; i++) {
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          this.col = color(random(255), random(255), random(255));
          other.col = color(random(255), random(255), random(255));
        }
      }
    }
  }
}    

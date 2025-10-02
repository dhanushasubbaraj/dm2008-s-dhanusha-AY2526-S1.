// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;
let value = 0;

function setup() {
  createCanvas(800, 800)
  background(255,255,0);
}

function draw() {
  
  x = random(width);
  y = random(height);
  w = random(10, 80);
  
  
  stroke(0,0,0);
  strokeWeight(random(0.5, 2));
  noFill();
  ellipse(x, y, w, w);
}

function mousePressed() {

  value += 50;   
  if (value > 255) {
    value = 0;
  }

  // Change only the background colour
  background(value, 255 - value, 200); 
}

function keyPressed() {
  saveCanvas("activity1b-image", "jpg");
}
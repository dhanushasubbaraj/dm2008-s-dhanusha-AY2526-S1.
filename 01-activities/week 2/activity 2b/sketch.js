// DDM2008 — Activity 2b
// (Pattern Making, 40 min)
let x = 0;
let size = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(253, 253, 150);
  
  x += 2;
    
  if (x > width + size / 2) {
    x = 0;
  }
  
  // Horizontal row of shapes
  for (let i = 0; i < width; i += 50) {
    
    // Alternate colors using % (modulo)
    if (mouseIsPressed) {
      if (i % 100 == 0) {
        fill(195, 15, 22); 
        rect(i + 25, height/4, size);
      } 
      else {
        rect(i + 25, height/2, size);
    }
      fill(34, 139, 34);
    }

    // TODO: change ellipse to rect, triangle, or something else
    // TODO: try varying size instead of color
  }

  // TODO: add one interaction (mouse or key) to change the rule
  // Example: if (mouseIsPressed) { fill(255, 0, 0); }
}
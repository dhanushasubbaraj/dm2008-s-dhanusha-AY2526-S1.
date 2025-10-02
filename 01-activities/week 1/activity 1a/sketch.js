// DDM2008
// Activity 1a

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature in the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225, 197, 192);
  
  fill(149, 185, 219);
  rect(100, 200, 200, 50);
  rect(150, 250, 50);
  rect(250, 250, 50);
  rect(300, 175, 25);
  
  fill(0, 191, 0);
  triangle(150, 175, 150, 200, 175, 200);
  triangle(175, 200, 200, 200, 175, 175);
  triangle(200, 200, 225, 200, 200, 175);
  triangle(225, 200, 250, 200, 225, 175);
  
  line(100, 230, 115, 240);
  line(115, 240, 130, 230);
  line(130, 230, 145, 240);
  
  fill(0, 0, 0);
  ellipse(150, 210, 7); 
  
  // YOUR CODE HERE
  
  // YOUR CODE HERE
  
  helperGrid(); // do not edit or remove this line
}
//function setup() {
  //createCanvas(400, 400);
//}

//function draw() {
  //background(220);
  //top left coordinates are (0,0) bottom right coordinates are (400,400)
  
  //fill(157, 200, 150);
  //stroke(255, 0, 0);
  
  //line(100, 200, 400, 400);
  //rect n ellipse (x, y, w, h); x n y is top left for rectangle while its middle for ellipse or circle
  //rect(50, 100, 50, 150);
  //noStroke();
  //rect(50, 100, 50); 
  
  //fill(0, 0, 255);
  //noFill();
  //ellipse(250, 150, 75, 50);
  //ellipse(250, 150, 75); 
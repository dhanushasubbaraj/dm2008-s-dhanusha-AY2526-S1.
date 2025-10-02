// DM2008 — Activity 3b
// (One Function Wonder, 15 min)

  // TODO 3:
  // (Challenge) Call your function inside a for loop
  // to create a repeating pattern or variation.

// Example starter function:
// function myShape(x, y, s) {
//   ellipse(x, y, s, s);
// }
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);

  let gap = width / (11); 
  
  for (let i = 0; i < 10; i++) {
    let x = gap * (i + 1); 

    if (i % 2 === 0) {
      drawFace(x, 200, 30);       
    } else {
      rectangle(x, 200, 30, 30);   
    }
  }
}


// Define a composite graphic using relative values
function drawFace(x, y, size) {
  // head
  fill(" #FF70E9");
  ellipse(x, y, size, size);
}

function rectangle(w, h, l, y) {
  // head
  fill(" #70E7FF");
  rect(w, h, l, y);
}

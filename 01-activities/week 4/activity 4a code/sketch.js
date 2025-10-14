// DM2008 – Activity 4a
// Bake a Cookie (30 min)

let cookie;
let showMatcha = false;
let showRed = false;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Step 3: make one cookie object
  mCookie = new Cookie("matcha", 100, width/2, height/2);
  rCookie = new Cookie("red velvet", 70, width/3, height/3);
}

function draw() {
  background(230);
  if(showMatcha){
    mCookie.show();
  }
  if(showRed){
    rCookie.show()
  }
  // Step 4: call the cookie’s show() method
}


// Step 1: define the Cookie class
class Cookie {
  constructor(flavor, sz, x, y) {
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  // Step 2: display the cookie
  show() {
    if (this.flavor == "matcha") {
      fill(116, 161, 46);
    } else {
      fill(154, 24, 0);
    }
    ellipse(this.x, this.y, this.sz);

    // a few "chips" placed relative to size
    const s = this.sz * 0.1;
    fill(237, 230, 214);
    ellipse(this.x - this.sz*0.22, this.y - this.sz*0.15, s);
    ellipse(this.x + this.sz*0.18, this.y - this.sz*0.10, s);
    ellipse(this.x - this.sz*0.05, this.y + this.sz*0.12, s);
    ellipse(this.x + this.sz*0.20, this.y + this.sz*0.18, s);
  }
}

// Step 5: add movement (keyboard arrows)
// function keyPressed() {}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    showMatcha = true;
  }
  if (keyCode == DOWN_ARROW) {
    showRed = true;
  }
}

// Step 6: add flavor randomizer (mouse click)
// function mousePressed() {}
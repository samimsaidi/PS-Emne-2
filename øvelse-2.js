function setup() {
  createCanvas(windowWidth, windowHeight)
  fill(0);
  background(255);
}

function start() {
  console.log("Started!");
}

function draw() {
  noStroke();
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      fill(255,0,0);
      ellipse(pmouseX, pmouseY, 80);
    }
    else if (mouseButton == RIGHT) {
      fill(0,100,200);
      rect(pmouseX, pmouseY, 80, 80)
    }
  }
}

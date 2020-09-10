function setup() {
  createCanvas(windowWidth, windowHeight)
  fill(0);
  background(255);
}

function start() {
  console.log("Started!");
}

function draw() {
  stroke(0);
  strokeWeight(5)
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

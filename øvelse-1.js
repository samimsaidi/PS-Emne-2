function setup() {
  createCanvas(windowWidth, windowHeight)
  stroke(225,20,0);
  strokeWeight(2)
  background(255);
}

function draw() {

  ellipse(pmouseX, pmouseY, 80);
  ellipse(mouseX, mouseY, 80);
  fill(255,0,0);
}

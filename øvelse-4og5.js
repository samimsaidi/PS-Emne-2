function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255);
}

function start() {
  console.log("Started!");
}


function draw() {
  textSize(32);
  text('Tryk F for firkant', 40, 30);
  text('Tryk C for cirkel', 40, 70);
  text('Tryk E for ellipse', 40, 110);
  fill(0);
  noStroke();
}

function keyPressed() {
  if (keyCode === 70) {
    fill(255,0,0);
    rect(mouseX, mouseY, 80, 80);
  }
  if (keyCode === 67) {
    fill(0,255,0);
    circle(mouseX, mouseY, 80);
  }
  if (keyCode === 69) {
    fill(0,0,255);
    ellipse(mouseX, mouseY, 120, 80);
  }
}
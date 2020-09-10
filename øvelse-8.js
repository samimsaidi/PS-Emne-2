let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(300, 300);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 

function draw() { 
  background(255);
  noStroke();
  fill(255,0,0);
  ellipse(x, y, 50, 50); 
  if(x == 0+25 || x == width-25) {
    xspeed*=-1;
  } 
  if(y == 0+25 || y == height-25) {
    yspeed*=-1;
  } 
    x+=xspeed; 
    y+=yspeed; 
}

function mousePressed() {
  x=mouseX;
  y=mouseY;
}
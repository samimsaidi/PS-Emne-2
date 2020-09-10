var y = 0;
var x = 0;
speed = 3;

function setup() { 
  createCanvas(300, 300);
} 

function draw() { 

  background(255);

  if (y > height || y < 0) {
  	speed = speed * -1;
  }
  
  if (x < 0 || x > width) {
    speed = speed * +1;
  }
    
  y = y + speed;
  x = x + speed;

  strokeWeight(4)
  stroke(255,0,0);

  line(0, x, width, y);

  line(x, 0, y, width);

}
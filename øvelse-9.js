/*

Ja, de kollider med hinanden, og når de gør det opfør de sig
meget sære, og nogen gange går den uden for "canvasen", selvom 
den er kodet til ikke at forlade den.

*/

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

  x2 = width/2
  y2 = height/2
  x2speed = -1; 
  y2speed = 0.5*x2speed; 
} 

function draw() { 
  background(255);
  noStroke();
  fill(255,0,0);
  ellipse(x, y, 50, 50); 
  fill(0,255,0);
  ellipse(x2, y2, 50, 50); 
  if(x == 0+25 || x == width-25) {
    xspeed*=-1;
  } 
  if(y == 0+25 || y == height-25) {
    yspeed*=-1;
  } 
    x+=xspeed; 
    y+=yspeed; 

  if(x == x2+25) {
    yspeed = 1*xspeed; 
  } 
    
  if(x2 == 0+25 || x2 == width-25) {
    x2speed*=-1;
  } 
  if(y2 == 0+25 || y2 == height-25) {
    y2speed*=-1;
  } 
    x2-=x2speed; 
    y2-=y2speed; 
}
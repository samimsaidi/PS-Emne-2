let x; // Definere X
let y; // Definere Y
let xspeed; // Definere xspeed
let yspeed; // Definere yspeed

function setup() { 
  createCanvas(400, 400); // Opretter en cavas med størrelsen 400x400
  x = width/2 // Sætter x i positionen "width/2" som er midten x aksen
  y = height/2// Sætter y i positionen "height/2" som er midten y aksen
  xspeed = -1; // Sætter "xspeed" til at være "-1"
  yspeed = 0.5*xspeed;  // Sætter "yspeed" til blive "xspeed" ganget med "0,5"
} 

function draw() { 
  background(220); // Opretter baggrund med en RGB farve "220,220,220"
  ellipse(x, y, 50, 50); // Laver en cirkel med koordinaterne x og y, som vi definerede før med "width/2" og "height/2" som er midten af "canvasen" og cirklens størrese er 50x50
  x+=xspeed; // "x" bliver plusset og lig med "xspeed"
  y+=yspeed; // "y" bliver plusset og lig med "yspeed"
}

/*
Koden laver en cirkel der går skævt til venstre og bliver ved at gå den
retning uden at stoppe, det gør den, fordi den er I draw og hele tiden bare opdatere
den stopper ikke ved kanten af canvasen, men forstætter bare.

*/
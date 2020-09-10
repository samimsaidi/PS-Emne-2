var x = 200; // X er defineret som "200"
var y = 200; // Y er defineret som "200"
function setup() { 
  createCanvas(400, 400); // Opretter en cavas med størrelsen 400x400
} 

function draw() { 
  background(220); // Opretter baggrund med en RGB farve "220,220,220"
  fill(0); // Udfylder cirklen med sort farve (RGB: 0,0,0)
  ellipse(x,y,50,50); // Laver en cirkel med koordinaterne x og y, som vi definerede før med 200x200 og cirklens størrese er 50x50
  if (x >= 400){ // Hvis x er/er større end 400
   x = 0; // Så bliver x 0
  } 
  if (keyCode === UP_ARROW) { // Hvis man klikker på knappen "op pil"
    y = y - 1; // Y bliver minusset med 1 (Cirklen går 1 op)
  } else if (keyCode === DOWN_ARROW) { // Hvis man klikker på knappen "ned pil"
   y = y + 1; // Y bliver plusset med 1 (Cirklen går 1 ned)
  }
  if (keyCode === LEFT_ARROW) {  // Hvis man klikker på knappen "venstre pil"
    x = x - 1; // X bliver minusset med 1 (Cirklen går 1 til venstre)
  } else if (keyCode === RIGHT_ARROW) { // Hvis man klikker på knappen "højre pil"
    x = x + 1; // X bliver plusset med 1 (Cirklen går 1 til højre)
  }
}

/*
Koden laver I en cirkel midt på skærmen og med piltasterne på tastaturet
kan man styre cirklens position ved f.eks. at klikke på "pil op", går 
cirklen en op, og hvis man klikker "pil ned", går cirklen en ned.

Cirklen kan gå over det hele, også ud af canvas, da det ikke er blevet
oprettet en "barrier" der udelukker den fra at gå andre steder.
*/
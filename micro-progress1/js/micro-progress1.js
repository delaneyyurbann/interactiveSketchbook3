let currentFact = "";

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);

  
  fill(200, 0, 0);
  rect(100, 150, 50, 50);   // Paris

  fill(0, 100, 200);
  rect(200, 150, 50, 50);   // Tokyo

  fill(0, 150, 100);
  rect(300, 150, 50, 50);   // Cairo

  fill(200, 150, 0);
  rect(400, 150, 50, 50);   // Rio

  fill(150, 0, 200);
  rect(500, 150, 50, 50);   // Sydney

  // show fact
  fill(0);
  textSize(16);
  text(currentFact, 50, 350);
}

function mousePressed() {

  // Paris
  if (mouseX > 100 && mouseX < 150 &&
      mouseY > 150 && mouseY < 200) {

    currentFact = "The Eiffel Tower grows about 6 inches in summer heat.";

  }

  // Tokyo
  else if (mouseX > 200 && mouseX < 250 &&
           mouseY > 150 && mouseY < 200) {

    currentFact = "Tokyo is the most populous metropolitan area in the world.";

  }

  // Cairo
  else if (mouseX > 300 && mouseX < 350 &&
           mouseY > 150 && mouseY < 200) {

    currentFact = "The Great Pyramid was once the tallest structure on Earth.";

  }

  // Rio
  else if (mouseX > 400 && mouseX < 450 &&
           mouseY > 150 && mouseY < 200) {

    currentFact = "Christ the Redeemer stands 98 feet tall.";

  }

  // Sydney
  else if (mouseX > 500 && mouseX < 550 &&
           mouseY > 150 && mouseY < 200) {

    currentFact = "The Sydney Opera House has over one million tiles.";

  }

  else {
    currentFact = "";
  }

}
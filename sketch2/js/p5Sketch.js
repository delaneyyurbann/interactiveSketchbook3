function setup() {
createCanvas(600,400);
background(74, 19, 40);
}

function draw() {
    

   let shakeX = random(-10, 10);
    let shakeY = random(-15, 15);

    fill (0,0,0);
    noStroke()
    ellipse(mouseX + shakeX, mouseY + shakeY, 150);

    cursor(CROSS);
}

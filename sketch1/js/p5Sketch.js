function setup() {
createCanvas(600,400);
}

function draw() {
    background(180, 201, 173);

    let wobbleX = sin(frameCount * 0.005) * 50;
    let wobbleY = cos(frameCount * 0.002) * 50;

    fill (207, 209, 205);
    noStroke()
    ellipse(mouseX + wobbleX, mouseY + wobbleY, 60);

    cursor(CROSS);


    
}

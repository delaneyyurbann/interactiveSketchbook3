function setup() {
createCanvas(600,400);
background(43, 107, 60);
}

function draw() {
    

    let wobbleX = sin(frameCount * 0.03) * 20;
    let wobbleY = cos(frameCount * 0.02) * 20;

    fill (92, 138, 52);
    stroke(65, 128, 82)
    ellipse(mouseX + wobbleX, mouseY + wobbleY, 100);



    
}
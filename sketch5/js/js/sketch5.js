let steps=0;
let maxSteps=16;

function setup (){
    createCanvas(600,200);
}

function draw (){
    background(220);
    stroke(255, 0, 0); 

  
  for (let i = 0; i < steps; i++) {
    line(40 + i * 40, 40, 80 + i * 40, 80);
  }

let sectionWidth = width / maxSteps;

// sections
noStroke();
fill ("#7777788f")
for (let i=0; i<steps; i++){
    rect (i * sectionWidth, 0, sectionWidth, height);

}


if (steps>= maxSteps){
    textSize(16);
    fill(0);
    text("RUN: Complete!!!!", width  -150, height -20);
}else{
    textSize(38);
    fill(0);
    text("KEEP RUNNING", width -300, height -20)
    }


}

function mousePressed(){
    if (steps <maxSteps){
        steps+= 1;
    }
}

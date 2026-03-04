

let steps = 0;
let maxSteps = 16;

let alarmOff = false;
let circleX = 80;

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(220);

  //Bed
  fill(0);
  rect(20, 100, 350, 80);

  // Circle
  fill(255);
  ellipse(circleX, 140, 30);

  // Alarm
  fill(255, 0, 0);
  rect(500, 140, 60, 30);
  fill(255);
  textSize(12);
  text("ALARM", 505, 160);

  // If else wakeup
  if (alarmOff) {
    circleX += 2;
    steps++;
  } else {
    circleX = constrain(circleX, 40, 360); 
  }


 
  if (steps >= maxSteps) {
    textSize(16);
    text("AWAKE!", width - 120, height - 20);
  } else {
    textSize(20);
    text("ALARM RINGING", width - 230, height - 20);
  }
}

function mousePressed() {
  if (mouseX > 500 && mouseX < 560 && mouseY > 140 && mouseY < 170) {
    alarmOff = true;
  }
}

let effort = [0, 0];
let privileged = [true, false];
let maxEffort = 22;

function setup() {
  createCanvas(600, 200);
  textSize(16);
}

function draw() {
  background(230);

  let barWidth = width / 2;

  for (let i = 0; i < 2; i++) {
    // color based on privileged
    if (privileged[i]) {
      fill(60, 160, 80);
    } else {
      fill(180, 80, 80);
    }

    // map effort from 0..maxEffort to 0..(height-60)
    let h = map(effort[i], 0, maxEffort, 0, height - 60);

    rect(i * barWidth + 40, height - h - 30, barWidth - 80, h);

    fill(0);

    if (effort[i] >= maxEffort) {
      text("DONE", i * barWidth + 40, 25);
    } else {
      text("miles: " + effort[i], i * barWidth + 40, 25);
    }
  } // end for

  text("green=car, red=bus", 10, height - 10);
}

function mousePressed() {
  for (let i = 0; i < 2; i++) {
    if (privileged[i]) {
      effort[i] = effort[i] + 1;
    } else {
      if (random() < 0.4) {
        effort[i] = effort[i] + 1;
      }
    }
  }
}

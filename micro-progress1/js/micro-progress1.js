let planeImg;
let globeImg;
let currentFact = "Click on locations on the globe to begin your adventure!";
let unlockedCount = 0;

const dots = [
  { name: "Paris",  x: -5, y: -195, fact: "The Eiffel Tower expands slightly in summer heat.", unlocked: false },
  { name: "Tangier",  x:  -10,  y: -140, fact: "On a clear day in Tangier, you can see Europe from Africa, Spain is only 9 miles away across the Strait of Gibraltar.", unlocked: false },
  { name: "Cairo",  x:  100,  y: -120, fact: "The pyramids near Cairo were already ancient when Cleopatra was alive.", unlocked: false },
  { name: "Rio",    x: -80,  y:  120, fact: "Rio’s Christ the Redeemer statue is struck by lightning several times a year.", unlocked: false },
  { name: "Mumbai", x: 240,  y:  -70, fact: "Mumbai is home to Bollywood, the largest film industry in the world by number of films produced.", unlocked: false },
  { name: "Bogotá", x: -220, y: 10, fact: "Bogotá sits over 8,600 feet above sea level, making it one of the highest capital cities in the world.", unlocked: false },
];

function preload() {
  globeImg = loadImage("img/full-globe.png");
  planeImg = loadImage("img/plane.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("futura");
}

function draw() {
  background(255);

  // Instructions
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Click locations on the globe to unlock travel facts!", width / 2, 40);
  textAlign(LEFT);

  // Globe setup
  let gx = width / 2;
  let gy = height / 2 + 20;
  let size = min(width, height) * 0.75;
  let r = size / 2;

  // Draw globe
  imageMode(CORNER);
image(globeImg, 0, 0, width, height);
  // Draw clickable dots
  for (let d of dots) {
    let px = gx + d.x;
    let py = gy + d.y;

    if (dist(px, py, gx, gy) < r) {
      noStroke();
      fill(d.unlocked ? 180 : 255);
      circle(px, py, 14);
    }
  }
  fill(255);
  textAlign(CENTER);
  textSize(48);
  text("Soaring Around the World", width / 2, 60);
  textAlign(LEFT);

  // Star when complete
  if (unlockedCount === dots.length) {
    drawStar(gx, gy - r - 40, 15, 30, 5);
    fill(255);
    textAlign(CENTER);
    text("Adventure Complete!", gx, gy - r - 15);
    textAlign(LEFT);
  }

  // Fact box
  drawFactBox(currentFact);

  imageMode(CENTER);
image(planeImg, mouseX, mouseY, 50, 50);
}

function mousePressed() {
  let gx = width / 2;
  let gy = height / 2 + 20;
  let size = min(width, height) * 0.75;
  let r = size / 2;

  if (dist(mouseX, mouseY, gx, gy) > r) return;

  for (let d of dots) {
    let px = gx + d.x;
    let py = gy + d.y;

    if (dist(mouseX, mouseY, px, py) < 14) {

      // unlock if new
      if (!d.unlocked) {
        d.unlocked = true;
        unlockedCount++;
      }

      // show fact first
      currentFact = d.name + ": " + d.fact;

      // if that click completed everything, append the congrats
      if (unlockedCount === dots.length) {
        currentFact += "\n\nAll cities unlocked — you became a star! ⭐";
      }

      return;
    }
  }
}

function drawFactBox(msg) {
  fill(255);
  stroke(0, 40);
  rect(40, height - 110, width - 80, 80, 12);

  noStroke();
  fill(0);
  textSize(16);
  text(msg, 60, height - 65, width - 120);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawStar(x, y, innerR, outerR, points) {
  push();
  translate(x, y);
  fill(255, 204, 0);
  noStroke();
  beginShape();
  let angle = TWO_PI / points;
  let half = angle / 2;
  for (let a = -HALF_PI; a < TWO_PI - HALF_PI + 0.001; a += angle) {
    vertex(cos(a) * outerR, sin(a) * outerR);
    vertex(cos(a + half) * innerR, sin(a + half) * innerR);
  }
  endShape(CLOSE);
  pop();
}
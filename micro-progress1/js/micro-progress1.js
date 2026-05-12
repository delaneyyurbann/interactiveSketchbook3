let planeImg;
let globeImg;
let currentFact = "Click on locations on the globe to begin your adventure!";
let unlockedCount = 0;

const dots = [
  { name: "Paris",  x: -5, y: -195, fact: "The Eiffel Tower expands slightly in summer heat.", unlocked: false },
  { name: "Tangier",  x: -10,  y: -140, fact: "On a clear day in Tangier, you can see Europe from Africa, Spain is only 9 miles away across the Strait of Gibraltar.", unlocked: false },
  { name: "Cairo",  x:  100,  y: -120, fact: "The pyramids near Cairo were already ancient when Cleopatra was alive.", unlocked: false },
  { name: "Rio",    x: -80,  y:  120, fact: "Rio’s Christ the Redeemer statue is struck by lightning several times a year.", unlocked: false },
  { name: "Mumbai", x: 240,  y:  -70, fact: "Mumbai is home to Bollywood, the largest film industry in the world by number of films produced.", unlocked: false },
  { name: "Bogotá", x: -220, y: 10, fact: "Bogotá sits over 8,600 feet above sea level, making it one of the highest capital cities in the world.", unlocked: false },
  { name: "Ghana",  x:  -10,  y: -10, fact: "Ghana was formerly known as the Gold Coast, and it remains one of Africa’s top gold producers.", unlocked: false },
  { name: "Istanbul",  x: 80,  y: -160, fact: "Istanbul is the only city in the world located on two continents.", unlocked: false },
  { name: "Cape Town",  x: 80,  y: 150, fact: "Cape Town is historically known as a premier global Great White Shark hotspot, but in recent years these apex predators have largely vanished from the area.", unlocked: false },
];

function preload() {
  globeImg = loadImage("img/full-globe.png");
  planeImg = loadImage("img/plane.png");
}

function setup() {
  let canvas = createCanvas(600, 400); // fixed size for layout
  canvas.parent("game-container");     // attach to your HTML div
  textFont("futura");
}

function draw() {
  background(255);

  // Title
  fill(0);
  textAlign(CENTER);
  textSize(24);
  text("Soaring Around the World", width / 2, 30);

  // Instructions
  textSize(14);
  text("Click locations on the globe to unlock travel facts!", width / 2, 50);

  textAlign(LEFT);

  // Globe setup
  let gx = width / 2;
  let gy = height / 2 + 10;
  let size = min(width, height) * 0.8;
  let r = size / 2;

  // Draw globe
  imageMode(CORNER);
  image(globeImg, 0, 0, width, height);

  // Draw clickable dots
  for (let d of dots) {
    let px = gx + d.x * 0.5; // scaled slightly to fit smaller canvas
    let py = gy + d.y * 0.5;

    if (dist(px, py, gx, gy) < r) {
      noStroke();
      fill(d.unlocked ? 150 : 0);
      circle(px, py, 10);
    }
  }

  // Completion star
  if (unlockedCount === dots.length) {
    drawStar(gx, 60, 8, 16, 5);
    fill(0);
    textAlign(CENTER);
    text("Adventure Complete!", gx, 85);
    textAlign(LEFT);
  }

  // Fact box
  drawFactBox(currentFact);

  // Plane cursor
  imageMode(CENTER);
  image(planeImg, mouseX, mouseY, 30, 30);
}

function mousePressed() {
  let gx = width / 2;
  let gy = height / 2 + 10;
  let size = min(width, height) * 0.8;
  let r = size / 2;

  if (dist(mouseX, mouseY, gx, gy) > r) return;

  for (let d of dots) {
    let px = gx + d.x * 0.5;
    let py = gy + d.y * 0.5;

    if (dist(mouseX, mouseY, px, py) < 10) {

      if (!d.unlocked) {
        d.unlocked = true;
        unlockedCount++;
      }

      currentFact = d.name + ": " + d.fact;

      if (unlockedCount === dots.length) {
        currentFact += "\n\nAll cities unlocked — you became a star! ⭐";
      }

      return;
    }
  }
}

function drawFactBox(msg) {
  fill(240);
  stroke(0, 50);
  rect(20, height - 80, width - 40, 60, 10);

  noStroke();
  fill(0);
  textSize(12);
  text(msg, 30, height - 50, width - 60);
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
function restartGame() {
  unlockedCount = 0;
  currentFact = "Click on locations on the globe to begin your adventure!";

  // reset all dots
  for (let d of dots) {
    d.unlocked = false;
  }
}
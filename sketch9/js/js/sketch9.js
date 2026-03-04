let images=[];
let currentIndex=0;

// let message="";
// let messageTimer=0; // frames remaining to show message

function preload(){
  images[0] = loadImage("img/img1.jpg");
  images[1] = loadImage("img/img2.jpg");
  images[2] = loadImage("img/img3.jpg");
  images[3] = loadImage("img/img4.jpg");
  images[4] = loadImage("img/img5.jpg");
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(16);
}
function draw(){
  background(0);

  let img = images[currentIndex];
  image(img,0,0);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(24);
  text("stage " + (currentIndex +1) + "/" + images.length, width/2, 20);

  textSize(16);
  text("Use the left and right arrow keys to scroll through the images.", width/2, height -40);
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW ){
    currentIndex++;

  if(currentIndex >= images.length){
    currentIndex=0;
  }
  }

  if (keyCode === LEFT_ARROW)
    currentIndex--;

  if (currentIndex<0){
    currentIndex = images.length -1;
  }
  
}
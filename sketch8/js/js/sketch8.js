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
  createCanvas(900,900);
}
function draw(){
  background(0);

  let img = images[currentIndex];
  image(img,0,0);
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
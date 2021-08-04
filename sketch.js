var sea,ship;
var seaImg,shipImg;

function preload() {
seaImage = loadImage("sea.png");

shipImage = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

//create a ship sprite
ship = createSprite(200,200)
ship.addImage("abc",shipImage);


 //create a ground sprite
 sea = createSprite(100,100);
 sea.addImage(seaImage);
 sea.x =sea.width /2;
 sea.velocityX = -2;
}

function draw() {
  background(0);
  
  ship.velocityY = ship.velocityY + 0.8

  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  drawSprites();
}
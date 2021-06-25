function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
}
function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);
  space = createSprite(630,400);
  space.addImage(bg);
  space.scale = 0.25;
  astronaut = createSprite(630,400);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.125;
  iw1 = createSprite(150, 400, 20, 800);
  iw2 = createSprite(1175, 400, 20, 800);
  iw3 = createSprite(650, 50, 1300, 20);
  iw4 = createSprite(650, 750, 1300, 20);
}

function draw() {
  background(255,255,255);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 430;
    astronaut.y = 750;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x = 630;
    astronaut.y = 550;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 330;
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 750
    astronaut.y = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("KEY_M")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.x = 630;
    astronaut.y = 400;
    astronaut.velocityX = -1;
    astronaut.velocityY = 1;
  }
  createEdgeSprites();
  astronaut.bounceOff(iw1);
  astronaut.bounceOff(iw2);
  astronaut.bounceOff(iw3);
  astronaut.bounceOff(iw4);
  iw1.visible = false
  iw2.visible = false
  iw3.visible = false
  iw4.visible = false
  drawSprites();
}
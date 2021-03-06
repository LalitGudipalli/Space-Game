var player;
var bulletGroup,enmiesGroup;
var score;
var enmies;
var backgroundImg,playerImg,enemy1,enemy2,enemy3,enemy4,enemy5;

function preload(){
  backgroundImg=loadImage("alien/background.jpg");
  playerImg=loadImage("alien/player.png");
  enemy1=loadImage("enemy1.png");
  enemy2=loadImage("enemy2.png");
  enemy3=loadImage("enemy3.png");
  enemy4=loadImage("enemy4.png");
  enemy5=loadImage("enemy5.png");
 
}

function setup(){
  createCanvas(1200,650);
  player=createSprite(500,400);
  player.addImage(playerImg);
  player.scale=0.7;
  bulletGroup = new Group();
  enmiesGroup = new Group();
  score=0;
}



function draw() {
  
 background(backgroundImg);
 player.x=mouseX;
 player.y=mouseY;
  
  if (keyDown("space")) {
    createBullet();
  }
  createEmies();
  if (bulletGroup.isTouching(enmiesGroup)){
    bulletGroup.destroyEach();
    enmiesGroup.destroyEach();
    score=score+1;
    
  }
  drawSprites();
   textSize(30);
   fill("white");
  text("Score:"+score,900,30);
}
function createBullet() {
  var laser=createSprite(player.x,player.y,5,20);
  laser.velocityY=-5;
  laser.shapeColor="red";
  bulletGroup.add(laser);
  
}

function createEmies() {
  if (frameCount%100===0) {
  enemy=createSprite(1200,300,50,50);
  var rand=Math.random(1,5);
  switch(rand){
    case 1:enemy1.addImage("enemy1.png");
    break;
    case 2:enemy.addImage("enemy2.png");
    break;
    case 3:enemy.addImage("enemy3.png");
    break;
    case 4:enemy.addImage("enemy4.png");
    break;
    case 5:enemy.addImage("enemy5.png");
    break;
    default: break;
  }
  enemy.scale=0.5;
  enemy.velocityX=-(5+score/10);
  enemy.depth=player.depth;
  player.depth=player.depth+1;
  enemyGroup.add(enmies);
  }
  
}

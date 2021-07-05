var backImage,backgr;
var player, player_running;
var ground,ground_img;
var banana,stone;
var END =0;
var PLAY =1;
var score=0;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaImage=loadImage("banana.png");
stoneImage=loadImage("stone.png");
gameoverImg=loadImage("gameOver.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
bananaGroup=new Group();
  obstacleGroup=new Group();
}

function draw() { 
  background(0);
  textSize(20)
    fill(225,240,150)
  text("score:"+score,200,200)

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
  if(bananaGroup.isTouching(player)){
    bananaGroup.destroyEach();
    score=score+2;
    player.sacle+= +0.1;
  }
  if(obstacleGroup.isTouching(player)){
    ground.velocityX=0
    player.addImage("gameoverImg")
  }
spawnFood();
spawnobstacle();
  drawSprites();
}
function spawnFood(){
  if(frameCount % 80===0){
     banana=createSprite(600,225,40,10)
    banana.y=random(120,200);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-4;
    banana.lifetime=300;
    player.depth=banana.depth +1;
    bananaGroup.add(banana);
  }
}
function spawnobstacle(){
  if(frameCount % 130===0){
     stone=createSprite(600,225,40,40)
   stone.y=random(300,400);
  stone.addImage(stoneImage);
    stone.scale=0.1;
    stone.velocityX=-7;
    stone.lifetime=300;
    player.depth=stone.depth +1;
    obstacleGroup.add(stone);
  }}

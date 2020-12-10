var human,humanroll,humanrun,humanjump;
var virus,virusImg1,virusImg2,virusGrp;

function preload(){
  humanrun = loadAnimation("images/run/run1.png","images/run/run2.png","images/run/run3.png","images/run/run4.png");
  humanroll = loadAnimation("images/roll/roll1.png","images/roll/roll2.png","images/roll/roll3.png","images/roll/roll4.png","images/roll/roll5.png","images/roll/roll6.png","images/roll/roll7.png","images/roll/roll8.png","images/roll/roll9.png","images/roll/roll10.png","images/roll/roll11.png");
  humanjump = loadAnimation("images/jump/jump1.png","images/jump/jump2.png","images/jump/jump3.png","images/jump/jump4.png","images/jump/jump5.png","images/jump/jump6.png","images/jump/jump7.png","images/jump/jump8.png","images/jump/jump9.png","images/jump/jump10.png","images/jump/jump11.png","images/jump/jump12.png");
  virusImg1 = loadImage("images/virus/virus1.png");

}
function setup(){
createCanvas(windowWidth,windowHeight);
human = createSprite(100,height/2,100,100);
human.addAnimation("run",humanrun);
human.addAnimation("jump",humanjump);
human.addAnimation("roll",humanroll);
human.scale= 2;
}
function draw(){
background("yellow");
human.changeAnimation("run",humanrun);
if(keyDown(UP_ARROW)){
human.y -= 5;
human.changeAnimation("jump",humanjump);
}
if(keyDown(DOWN_ARROW)){
  human.y += 5;
  human.changeAnimation("roll",humanroll);
}
drawSprites();
}

function spwanVirus(){
  
}



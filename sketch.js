var canvas, bg;
var together;
var tom, tomimg1, tomimg2;
var jerry, jerryimg1, jerryimg2;

function preload() {
    bg = loadImage("images/garden.png");

    tomimg1=loadAnimation("images/cat1.png");
    tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomimg3=loadAnimation("images/cat4.png");

    jerryimg1=loadAnimation("images/mouse1.png");
    jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryimg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    tom=createSprite(870,600);
    tom.addAnimation("tomsleeping",tomimg1);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerrysitting",jerryimg1);
    jerry.scale=0.15;
}

function draw() {
    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x <(tom.width-jerry.width)/2){
tom.velocityX=0;
tom.addAnimation("tomLastimage",tomimg3);
tom.x=300;
tom.scale=0.2;
tom.changeAnimation("tomLastimage");

jerry.addAnimation("jerryLastimage",jerryimg3);
jerry.scale=0.15;
jerry.changeAnimation("jerryLastimage");
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){ 
      tom.velocityX = -5;
    tom.addAnimation("tomRunning", tomimg2);
    tom.changeAnimation("tomRunning"); 
    
    jerry.addAnimation("jerryTeasing", jerryimg2); 
    jerry.frameDelay = 25; 
    jerry.changeAnimation("jerryTeasing"); 
}

}
var freeGuy,freeguyImg,backgroundImg,bg
var invisibleGround 

function preload(){
  backgroundImg=loadImage("Images/SVbg.png")
  freeGuy_running=loadAnimation("Images/1.png","Images/2.png","Images/3.png")
  freeGuy_jumping=loadAnimation("Images/4.png","Images/5.png","Images/6.png","Images/7.png")

}

function setup() {
  
  createCanvas(1500,700);
  

  bg=createSprite(750, 350, 50, 50);
  bg.addImage("bg",backgroundImg)
  bg.scale=3
  bg.velocityX=-3

freeGuy=createSprite(100,460)
freeGuy.addAnimation ("Guy",freeGuy_running)
freeGuy.addAnimation ("Guy",freeGuy_jumping)
freeGuy.scale=3

invisibleGround=createSprite(120,510,250,5)

}

function draw() {
  background(255,255,255);  

  if (bg.x<0){ 
  bg.x=bg.width/2

}

if(keyDown(UP_ARROW)){
freeGuy.changeAnimation("Guy",freeGuy_jumping)
freeGuy.velocityY=-14
}
freeGuy.velocityY=freeGuy.velocityY+0.5
freeGuy.collide(invisibleGround)
  drawSprites();
}
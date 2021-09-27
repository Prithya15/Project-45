var sky
var monkey,monkeyImg
var bananaImg,banana,bananaGroup
var score=0
var rock,rockImg,rockGroup
var music;

function preload(){
 sky=loadImage("1.jpg")
 monkeyImg=loadImage("monkey.png")
 bananaImg=loadImage("banana.png")
 rockImg=loadImage("rock.png")
}



function setup() {
  createCanvas(800,400);
  monkey=createSprite(400, 350, 50, 50);
  monkey.addImage(monkeyImg)
  monkey.scale=0.35
  bananaGroup=new Group();
  rockGroup=new Group();
}

function draw() {
  background(sky); 
  
  fill("white")
  textSize(20)
  text("Score:"+score,700,50)
  
 if(keyDown("right")){
  monkey.x=monkey.x+2
 }
 if(keyDown("left")){
  monkey.x=monkey.x-2
 }
   
if(frameCount%80===0){
  banana=createSprite(0,100,20,20);
  banana.x=random(50,750)
  banana.addImage(bananaImg)
  banana.velocityY=3
  banana.scale=0.2
  bananaGroup.add(banana);
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
}
if(bananaGroup.isTouching(monkey)){
  banana.lifetime=0
  score=score+1;
}
if(frameCount%70===0){
  rock=createSprite(0,100,20,20);
  rock.x=random(50,750)
  rock.addImage(rockImg)
  rock.velocityY=4
  rock.scale=0.3;
  rockGroup.add(rock);
  rock.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
}
if(rockGroup.isTouching(monkey)){
  rock.lifetime=0;
  score=score-2
  fill("red")
  textSize(20)
  text("Negative points",400,200)
} 
  drawSprites();

  
  
   
  
}

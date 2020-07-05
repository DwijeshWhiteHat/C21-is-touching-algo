var fixedRect;
var movingRect;
var gameObject1;
var gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,50);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(700,100,50,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(isTouching(gameObject1,movingRect)){
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x < object1.width/2+object2.width/2 &&
    object2.x-object1.x < object1.width/2+object2.width/2 && 
    object1.y-object2.y < object1.height/2+object2.height/2 &&
    object2.y-object1.y < object1.height/2+object2.height/2){
    return  true;
  }else{
    return false;
  }

}
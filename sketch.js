var fixedRect, movingRect;
var ob1,ob2,ob3,ob4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  ob1= createSprite(50, 500, 50, 50);
  ob1.shapeColor = "green";
 ob1.debug = true;

  ob2 = createSprite(120, 500, 50, 50);
  ob2.shapeColor = "green";
  ob2.debug = true;

  ob3 = createSprite(190, 500, 50, 50);
  ob3.shapeColor = "green";
  ob3.debug = true;

  ob4 = createSprite(270, 500, 50, 50);
 ob4.shapeColor = "green";
 ob4.debug = true; 

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(  isTouching(movingRect,ob2)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  drawSprites();
}


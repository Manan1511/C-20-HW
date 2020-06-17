var car,wall;
var speed,weight;
var collision

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor="white";
  wall = createSprite(1500,200,60,height/2);
  collision=0.5*weight*speed*speed/22500;
  wall.shapeColor=80,80,80;
  car.velocityX=speed;
}

function draw() {
  background("black"); 

  car.collide(wall);

  
  text(collision,1500,50);
  if(collision<100){
   car.shapeColor="green";
  }
  if(collision>100 && collision<180){
   car.shapeColor="yellow";
  }
  if(collision>180){
   car.shapeColor="red";
  }
  
  drawSprites();
}
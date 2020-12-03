var car,wall;
var speed;
var weight;
var deformation

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 20, 20);
  wall = createSprite(750, 200, 20, 70);
weight = random(55,90);
speed = random(400,1500);
deformation = 0.5 * weight * speed * speed/22509;

car.velocityX =speed;

}

function draw() {
  background(0,0,0);  
  drawSprites();
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX = 0;
    

    if (deformation>180){
      car.shapeColor=('green');

    }
    if (deformation<180 && deformation >100){
      car.shapeColor=('yellow');

    } 
    if (deformation<180){
      car.shapeColor=('red');
    }
  }
}
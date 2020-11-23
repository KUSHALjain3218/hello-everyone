var movrec,fixrec,weight,speed;


function setup() {
  createCanvas(1600,400);
  movrec=createSprite(50, 200, 50, 50);
  fixrec=createSprite(1500, 200, 60, height/2);
  movrec.shapeColor="black";
  fixrec.shapeColor="purple";
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);
  movrec.velocityX=speed;  
  if(fixrec.x - movrec.x < (movrec.width/2 + fixrec.width/2)){
movrec.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
  }
  if(deformation>180){
    movrec.shapeColor=color(255,0,0);
  }
  if(deformation<100){
    movrec.shapeColor=color(0,255,0);
  }
  if(deformation<180 && deformation>100){
    movrec.shapeColor=color(230,230,0);
  }
  drawSprites();
}
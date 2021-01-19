
var mr,fr


function setup() {
  createCanvas(800,400);
 mr=createSprite(500,200,60,80);
 fr=createSprite(400,300,50,90);

 mr.shapeColor="red";
 fr.shapeColor="blue";
}

function draw() {
  background("black"); 
  
  mr.x= World.mouseX;
  mr.y= World.mouseY;

  if (mr.x-fr.x < mr.width/2 +fr.width/2
    &&fr.x-mr.x < mr.width/2 +fr.width/2
    &&mr.y-fr.y < mr.height/2 +fr.height/2
    &&fr.y-mr.y < mr.height/2 +fr.height/2) {
    mr.shapeColor="yellow";
    fr.shapeColor="yellow" ;
  } 
  else {
    mr.shapeColor="red";
 fr.shapeColor="blue";
  }








  drawSprites();
}
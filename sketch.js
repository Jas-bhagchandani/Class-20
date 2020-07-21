var movingRect, fixedRect

function setup() { 
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 40, 40);
  movingRect= createSprite(200,200,40,40);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
  movingRect.debug=true;
  fixedRect.debug=true;
  movingRect.velocityX=2;
  fixedRect.velocityX=-2;

}

function draw() {
 // movingRect.y=mouseY;
  //movingRect.x=mouseX;

  background(100,170,80);  

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
      fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
      movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
      fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 ){
movingRect.shapeColor="red";
fixedRect.shapeColor="red";

  }
  else{

    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";

  }


  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 ){
      movingRect.velocityX=movingRect.velocityX*-1;
      fixedRect.velocityX=fixedRect.velocityX*-1;
    

      
    }

    if(movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
      fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 ){

        movingRect.velocityY=movingRect.velocityY*-1;
        fixedRect.velocityY=movingRect.velocityY*-1;


      }
  drawSprites();
}
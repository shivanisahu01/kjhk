var movingRect,fixedRect;
function setup()
{
  createCanvas(400,400)
  movingRect=createSprite(200,200,90,30)
  movingRect.shapeColor="green"
  fixedRect=createSprite(200,200,30,80)
  fixedRect.shapeColor="green"
}
function draw()
{
  background("purple")
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.shapeColor="lightblue"
    fixedRect.shapeColor="lightblue"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
  drawSprites()
}
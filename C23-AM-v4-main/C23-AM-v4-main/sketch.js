const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var ball
function setup() {
    createCanvas(400,400);
 engine = Engine.create()
 world = engine.world
   ball = Bodies.circle (100,50,30)
   World.add(world,ball)
   
   groun = Bodies.rectangle(200,300,400,20)
   World.add(world,groun)
   ellipseMode(RADIUS)
   rectMode(CENTER)
}

function draw() 
{
  background("black")
  Engine.update(engine)
  ellipse(ball.position.x , ball.position.y , 20)
  rect(groun.position.x , groun.position.y ,400,20)
}


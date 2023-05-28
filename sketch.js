var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	var ball_options={
		isStatic:false,
		restution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Matter.Bodies.circle(450, 450, 10, ball_options)
	World.add(world, ball);
	Engine.run(engine);
	
	ground = new Ground(450, 670, width*2, 10)

	groundObj = new Ground(1350, 600, 20, 120);

	leftSide = new Ground(1100, 600, 20, 120)


}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ellipse(ball.position.x, ball.position.y, 10, 10)

  ground.display()
  groundObj.display()
  leftSide.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, -10)
	}
}


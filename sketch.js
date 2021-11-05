
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g1 , g2 , g3 ;
var paper ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
g1 = new Ground(400,680,800,20);
g2 = new Ground(600,640,10,100);
g3 = new Ground(680,640,10,100);

paper= Bodies.circle(50,640,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  g1.show() ;
  g2.show();
  g3.show();
  circle(paper.position.x, paper.position.y,20);
  drawSprites();
 
}




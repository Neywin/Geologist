
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var object;
var hammer1, plane1, stone1, rubber1, sand1, iron1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new hammer(700,200,150,20);
	plane1 = new plane(600,380,1200,15);
	stone1 = new stone(920,200,100,100);
	rubber1 = new rubber(400,200,50,50);
	sand1 = new sand(800,200,10,10);
	iron1 = new iron(500,200,80,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  hammer1.display();
  plane1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  iron1.display();
  
  drawSprites();
 
}




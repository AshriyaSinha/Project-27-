
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	top = new Box(180,350,100,20); 
	bob1=new Bob (10,10,30);
	bob2=new Bob (10,10,30);
	bob3=new Bob (10,10,30);
	bob4=new Bob (10,10,30);
	s1=new String (boob1, roof1, -100);
	s2=new String (boob2, roof1, -50);
	s3=new String (boob3, roof1, 0);
	s4=new String (boob4, roof1, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  top.display();
 
}




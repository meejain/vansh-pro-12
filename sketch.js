
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,100,100,20)
   bobObject1 = new BOB(170,200,20)
   bobObject2 = new BOB(190,200,20)
   bobObject3 = new BOB(210,200,20)
   bobObject4 = new BOB(230,200,20)
   bobObject5 = new BOB(250,200,20)
rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}




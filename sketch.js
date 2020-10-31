
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rop4,rope5;
var bobDiameter = 20; 

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Roof = new roof(300,330,100,20);
	bobObject1 = new bob(260,550,20);
	bobObject2 = new bob(280,550,20);
	bobObject3 = new bob(300,550,20)
	bobObject4 = new bob(320,550,20);
	bobObject5 = new bob(340,550,20);
	rope1 = new rope(bobObject1.body,Roof.body,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,Roof.body,-bobDiameter*1,0);
	rope3 = new rope(bobObject3.body,Roof.body,-bobDiameter*1+20,0);
	rope4 = new rope(bobObject4.body,Roof.body,-bobDiameter*1+40,0);
	rope5 = new rope(bobObject5.body,Roof.body,-bobDiameter*1+60,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  Roof.display();
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

  drawSprites();
 
  
}

function keyPressed()
{
	if(keyCode === 32)
	{
	  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x: -2, y: -4});
	}
	
}

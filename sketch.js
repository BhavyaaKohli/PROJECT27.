
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var rope1 , rope2
var bob1,bob2,bob3,bob4,bob5;
var roofObject
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob (400,450,30)
	bob2 = new Bob (460,450,30)
	bob3 = new Bob (340,450,30)
	bob4 = new Bob (500,450,30)
	bob5 = new Bob (300,450,30)

	roofObject = new Roof( 400,150,600,40)
	rope1 = new Rope(bob1.body , roofObject.body,0,0)
    rope2 = new Rope(bob2.body , roofObject.body,60,0)
	rope3 = new Rope(bob3.body , roofObject.body,-60,0)
	rope4 = new Rope(bob4.body , roofObject.body,120,0)
	rope5 = new Rope(bob5.body , roofObject.body,-120,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
   
  //rope1.display()
  rope1.display();
  rope2.display();
  rope3.display()
  rope4.display()
  rope5.display()

  roofObject.display();
  
  bob1.display()	  
  bob2.display() 
  bob3.display()
  bob4.display()
  bob5.display()
}




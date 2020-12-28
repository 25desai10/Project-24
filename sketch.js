
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, dustbin, paper;

function setup() {
	createCanvas(800, 400);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
Engine.run(engine);
	//Create the Bodies Here.

	dustbin1 = new Dustbin(650,350,125,20);

	dustbin2 = new Dustbin(597,323,20,75)

	dustbin3 = new Dustbin(722,323,20,75);

	dustbin4 = new Dustbin(400,367,800,10);



paper = new Paper(100,350,10);

ground = Bodies.rectangle(width/2,400,width,10);
	
{
	isStatic : true
};
World.add(world,ground);

  
}


function draw() {
  background(0);
  Engine.update(engine);
rectMode(CENTER);


dustbin1.display();
dustbin2.display();
dustbin3.display();
dustbin4.display();

  paper.display();
 
}



function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x:12,
			y:-18
		});
			
		}
	
	}

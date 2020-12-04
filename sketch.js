
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4;
var paper;
function preload()
{function keyPressed(){
	if( keyCode===UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position)
	}
  }
	
  }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground1=new Ground(400,640,20,80)
	ground2=new Ground(400,680,800,20)
	ground3=new Ground(540,635,20,70)
	ground4=new Ground(470,660,120,20)

	paper=new Paper(100,100,10)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  paper.display();

  drawSprites();
  keyPressed();
}


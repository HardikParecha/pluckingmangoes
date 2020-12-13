
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,tree,boy,rope,stone;
var mango1, mango2, mango3, mango4, mango5, mango6,mango7,mango8;
var backgroundImg

function preload()
{
	backgroundImg = loadImage("park.png.jpg");
}

function setup() {
	createCanvas(1600, 730);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);

	 ground = new Ground(width/2,700,width,20)
	 tree = new Tree(1300,360,500,680)
	 boy = new Boy(300,600,200,380)
	 stone = new Stone(200,500,20,20)
	 rope = new Target(stone.body,{x:240,y:510})
	 mango1 = new Mango(1300,300,40)
	 mango2 = new Mango(1450,300,40)
	 mango3 = new Mango(1100,300,40)
	 mango4 = new Mango(1200,250,40)
	 mango5 = new Mango(1300,180,40)
	 mango6 = new Mango(1400,200,40)
	 mango7 = new Mango(1350,100,40)
	 mango8 = new Mango(1220,140,40)



  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  
  
 textSize(40);
 text("Press Space to throw again",150,80);
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    rope.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:240,y:510})
		rope.attach(stone.body)
	}

}

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
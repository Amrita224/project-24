var ground, groundBody,dust,Ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(900, 500);


	ground = createSprite(width / 2, height - 50, width, 10);
	ground.shapeColor = "brown";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.




	groundBody = Bodies.rectangle(width / 2, height - 50, width, 10, { isStatic: true });
	World.add(world, groundBody);







	Ball= new ball(width - 850, height - 50);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	

	ground.x = groundBody.position.x;
	ground.y = groundBody.position.y;

	console.log(Ball)


	drawSprites();
	Engine.update(engine);
	Ball.display();


}




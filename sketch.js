const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball, blocks = [];
var slingShot1;
var polygon_img,polygon1;

function preload() {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 225, 10);
  polygon1 = new polygon(100,310,10,PI/2);
  slingshot1 = new SlingShot(polygon1.body,{x:175,y:200})

  //level one 
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);

  //level two
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);
  //level three
  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);
  //top
  block16 = new Block(390, 155, 30, 40);


  //LEVEL one 
  let x = 610
  block17 = new Block(x, 175, 30, 40);
  block18 = new Block(x + 30, 175, 30, 40);
  block19 = new Block(x + 30 * 2, 175, 30, 40);
  block20 = new Block(x + 30 * 3, 175, 30, 40);
  block21 = new Block(x + 30 * 4, 175, 30, 40);
  block22 = new Block(x + 30 * 5, 175, 30, 40);
  block23 = new Block(x + 30 * 6, 175, 30, 40);

  //LEVEL two
  // let x = 610
  block24 = new Block(x+30, 145, 30, 40);
  block25 = new Block(x + 30*2, 145, 30, 40);
  block26 = new Block(x + 30 * 3, 145, 30, 40);
  block27 = new Block(x + 30 * 4, 145, 30, 40);
  block28 = new Block(x + 30 * 5, 145, 30, 40);
  
  //LEVEL 3
  
  block29 = new Block(x + 30*2 , 55, 30, 40);
  block30 = new Block(x + 30 * 3, 55, 30, 40);
  block31 = new Block(x + 30 * 4, 55, 30, 40);

  // TOP

  block32 = new Block(x + 30 *3, 55-90, 30, 40);


}

function draw() {
  background(56, 44, 44);

  textSize(20);
  fill("lightyellow");


  ground.display();
  stand1.display();
  stand2.display();
  polygon1.display();
  slingshot1.display();
  // level 1
  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //  */ // level 2
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  // level 3
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  // level 4
  fill("grey");
  block16.display();

//LEVEL 1
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
//LEVEL 2
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  // LEVEL  3
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();
 // TOP
 fill("grey");
block32.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

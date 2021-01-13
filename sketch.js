const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

function preload() {
//preload the images here
superheroImg = loadImage("images/Superhero-01.png");
monsterfire = loadImage("images/Monster-01.png");
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(2000, 800);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  hero = new Hero(200, 200, 400);
  
  ground = new Ground(1000, 630, 2000, 20);

  //1st set of blocks
  //1st column
  block1 = new Block(550, 200, 70, 70);
  block2 = new Block(550, 200, 70, 70);
  block3 = new Block(550, 200, 70, 70);
  block4 = new Block(550, 200, 70, 70);
  block5 = new Block(550, 200, 70, 70);
  block6 = new Block(550, 200, 70, 70);

  //2nd column
  block7 = new Block(650, 200, 70, 70);
  block8 = new Block(650, 200, 70, 70);
  block9 = new Block(650, 200, 70, 70);
  block10 = new Block(650, 200, 70, 70);
  block11 = new Block(650, 200, 70, 70);
  block12 = new Block(650, 200, 70, 70);
  block13 = new Block(650, 200, 70, 70);
  block14 = new Block(650, 200, 70, 70);

  //3rd column
  block15 = new Block(750, 200, 70, 70);
  block16 = new Block(750, 200, 70, 70);
  block17 = new Block(750, 200, 70, 70);
  block18 = new Block(750, 200, 70, 70);
  block19 = new Block(750, 200, 70, 70);
  block20 = new Block(750, 200, 70, 70);
  block21 = new Block(750, 200, 70, 70);

  //4th column
  block22 = new Block(850, 200, 70, 70);
  block23 = new Block(850, 200, 70, 70);
  block24 = new Block(850, 200, 70, 70);
  block25 = new Block(850, 200, 70, 70);
  block26 = new Block(850, 200, 70, 70);
  block27 = new Block(850, 200, 70, 70);

  rope1 = new Fly(hero.body, {x:200, y:100});

  monster = new Monster(1050, 200, 190);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  hero.display();

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();

  rope1.display();

  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform;
var box, box1, box2, box3, box4, box5, box5, box6, box7, box8, box9, box10;
var polygon,launcher;

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, 395, width, 20);
  platform = new Ground(390, 250, 145, 10);

  box1 = new Box(345, 225, 30, 40, PI/2);
  box2 = new Box(375, 225, 30, 40, PI/2);
  box3 = new Box(405, 225, 30, 40, PI / 2);
  box3 = new Box(405, 225, 30, 40, PI / 2);
  box4 = new Box(435, 225, 30, 40, PI / 2);
  box5 = new Box(360, 185, 30, 40, PI / 2);
  box6 = new Box(390, 185, 30, 40, PI / 2);
  box7 = new Box(420, 185, 30, 40, PI / 2);
  box8 = new Box(375, 145, 30, 40, PI / 2);
  box9 = new Box(405, 145, 30, 40, PI / 2);
  box10 = new Box(390, 105, 30, 40, PI / 2);

  polygon = new Polygon();
  launcher = new Launcher(polygon.body,{x:100,y:170});
}

function draw() {
  background(195,235,160);
  Engine.update(engine);

  //console.log(Engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ground.display();
  platform.display()
  launcher.display();
  polygon.display();

}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcher.fly ();
}
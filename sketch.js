const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var door;

function setup() {
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  door = new Rect(400,295,100,200);
  pillarRight = new Rect(500,270,75,250);
  pillarLeft = new Rect(300,270,75,250);
  towerRight = new Rect(590,245,80,300);
  towerLeft = new Rect(210,245,80,300);
  towerStandRight = new Rect(590,110,120,30);
  towerStandLeft = new Rect(210,110,120,30);
  towerGuardRight1_completelyright = new Rect(635,100,30,50);
  towerGuardRight2_middle = new Rect(590,100,30,50);
  towerGuardRight3_completelyleft= new Rect(545,100,30,50);
  towerGuardLeft1_completelyleft = new Rect(165,100,30,50);
  towerGuardLeft2_middle = new Rect(210,100,30,50)
  towerGuardLeft3_completelyright = new Rect(255,100,30,50);
  PillarRightWindow = new Rect(500,270,50,75);
  PillarLeftWindow = new Rect(300,270,50,75);

  //ground = new Ground(400,370,800,50);
}

function draw() {
  background("lightblue"); 
   
  Engine.update(engine);

  //ground.display();
  
  //door.color("red")
  door.display();

  pillarRight.display();
  //pillarRight.color("blue");

  pillarLeft.display();
  //pillarLeft.color("blue");

  towerRight.display();
  //towerRight.color("pink");

  towerLeft.display();
  //towerLeft.color("pink");

  towerStandRight.display();
  //towerStandRight.color("white");

  towerStandLeft.display();
  //towerStandLeft.color("white");

  towerGuardRight1_completelyright.display();

  towerGuardRight2_middle.display();

  towerGuardRight3_completelyleft.display();

  towerGuardLeft1_completelyleft.display();

  towerGuardLeft2_middle.display();

  towerGuardLeft3_completelyright.display();

  PillarRightWindow.display();

  PillarLeftWindow.display();
}
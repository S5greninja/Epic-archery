const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compBase
var playbase
var pogplayer
var computer


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   compBase = new Computerbase(700,random(120,height -300),180,150) 
   playbase = new Playerbase(300,random(450,height -300),180,150) 
   pogplayer = new Player(285,playbase.playerBase.position.y-153,50,180) 
  


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   compBase.display()
   playbase.display()
   pogplayer.display()
   


   //display Player and computerplayer


}

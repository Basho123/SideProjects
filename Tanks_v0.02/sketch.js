let collision = false;
let sine;

let sky1;
let sand1;
let brick;

let walls = [];

let camX = 0;
let camXSpeed = 0;

let camY = 0;
let camYSpeed = 0;

let camZ = 0;
let camZSpeed = 0;


let rotX = 0;
let rotXSpeed = 5;

let rotY = 0;
let rotYSpeed = 5;

let brickSlices = 200;

let tankModel;
let t34Texture;
let playerT34 = [];

let tank = [];

let dirX;
let dirY;

let moveX;
let moveY;

let tankRadius;

//const gravity = createVector (0,1,0);


function preload() {

  sky1 = loadImage("files/background/sky1.jpg");
  sand1 = loadImage("files/background/sand1.jpg");
  brick = loadImage("files/background/brick.jpg");
  tankModel = loadModel("files/models/t34.obj");
  t34Texture = loadImage("files/textures/t34Texture.jpg");

}



function setup() {


  createCanvas(windowWidth, windowHeight, WEBGL);
  pTank = new Tank(0,-100,0);
  // w = new Walls();
  wallX(7, 0);

}

function draw() {

background(150);
  
  const gravity = createVector (0,0.981,0);
  
  gameCamera();
  terrain();
  //wallX(6, 0);
  keyCommands();
 
  
  pTank.applyForce(gravity);
  
   if(mouseIsPressed){
  let wind = createVector(0.01,0,0);
  pTank.applyForce(wind);
     
  }


  
  
  
  playerT34.push(pTank);

  
  pTank.update();
  pTank.show();
  pTank.edges();

  // for (let a = walls.length - 1; a >= 0; a--) {
for (let a of walls){
   
  
  //asteroid[a].move();
   
   
 }
  


  
 






}
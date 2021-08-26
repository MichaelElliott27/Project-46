var database;
var backgroundImg,backgroundImg2;
var gameState = 0;
var patientregistrations;
var patientCount;
var allpatients;
var patient, game;
var first;
var doctorImg,doctorImg1,doctorImg2,doctorImg3,patientImg,patientImg1,patientImg2,patientImg3;
var doctors,doctor1,doctor2,doctor3,doctor4,patient1;
function preload(){
backgroundImg = loadImage("images/HospitalRoom2.png"); 
backgroundImg2 = loadImage("images/frontdesk.jpg"); 
doctorImg = loadImage("images/Doctor1.png");
doctorImg1 = loadImage("images/Doctor2.png");
doctorImg2 = loadImage("images/Doctor3.png");
doctorImg3 = loadImage("images/Doctor4.png");
patientImg = loadImage("images/Patient1.png");
patientImg1 = loadImage("images/Patient2.png");
patientImg2 = loadImage("images/Patient3.png");
patientImg3 = loadImage("images/Patient4.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start()
}

function draw() {
  background(backgroundImg2);
  if(patientCount === 4){
    game.update(1);

  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
 
var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairySound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairySound.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(130,520);
	fairy.addAnimation("flying",fairyImg);
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.debug = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x;
  star.y= starBody.position.y;

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(fairy.y > 485 && starBody.position.y > 485){
	Matter.Body.setStatic(starBody,true); 
  }

  fairy.debug = false;

  drawSprites();

}

function keyPressed() {

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairy.x=fairy.x+20;
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x=fairy.x-20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
}

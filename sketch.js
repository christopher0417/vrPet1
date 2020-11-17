//Create variables here
var dog,happyDog,dogImg
var database
var foodS,foodStock

function preload()
{
  //load images here
  dogImg = loadImage(images/dogImg.png);
  happyDog = loadImage(images/dogImg1.png);
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,100,20,20);
  dog. addImage(dogImg);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }




  drawSprites();
  //add styles here
  textSize = 10
  fill(255);
  stroke(51);
  Text("food:"+foodStock,200,300);



}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if (x<=0){
x = 0
  }else{
    x = x-1
  }
}




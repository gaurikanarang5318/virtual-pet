var dog, dogImg, happyDog, foodS, foodStock;
var database;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", (readStock) => {
    foodStock = data.val();
  });
  foodStock.set(20);

  dog = createSprite(300, 220, 150, 150);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {
  background(46, 139, 87);
  if(foodS !== undefined){
    textSize(20);
    fill(255);
    text("Note press UP ARROW to feed milk to the dog", 50,50);
    text("Food remaining: "+ foodS, 150, 150);

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDog);
    }

    if(food === 0){
      foodS = 20;
    }
  }

  drawSprites();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x+1;
  }

  database.ref('/').update({
    Food: x
  }); 

 readStock (data)
    foodS = data.val(); 

}

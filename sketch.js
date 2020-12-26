var dog,database,happy,happyDog,position;

function preload() {
happydog=loadImage("doglmg.png")
img=loadImage("doglmg.png")
}

function setup(){
    database=firebase.database()
    
    createCanvas(500,500);

    dog = createSprite(250,250,10,10);
    dog.addImage()
    

    var dogPosition=database.ref("food")
    dogPosition.on("value",readPosition)
}

function draw(){
    background(46,139,87);
    if (position !== undefined) {
        if(keyDown(LEFT_ARROW)){
            writePosition(position);
            dog.addImage(happyDog)
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(position);
            dog.addImage(happyDog)
        }
        else if(keyDown(UP_ARROW)){
            writePosition(position);
            dog.addImage(happyDog)
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(position);
            dog.addImage(happyDog)
        }
        drawSprites();
    }
   
}
function readPosition(data) {
    position=data.val()
  
}
function writePosition(x){
    database.ref("food").set({
        "food":x
    })

}

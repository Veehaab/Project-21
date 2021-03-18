var canvas;
var music;
var square1
var square2
var square3
var square4
var squareBall
var edges
var music

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
square1=createSprite(130,580,150,20);
square2=createSprite(290,580,150,20);                     
square3=createSprite(450,580,150,20);                       
square4=createSprite(610,580,150,20);                 
squareBall=createSprite(100,100,30,30);
square1.shapeColor="red";
square2.shapeColor="blue";
square3.shapeColor="yellow";
square4.shapeColor="green";

    //create box sprite and give velocity
squareBall.velocityX=4;
squareBall.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgesprite
    edges=createEdgeSprites();
    squareBall.bounceOff(edges)
    
////squareBall.bounceOff(square1)
//squareBall.bounceOff(square2)
//squareBall.bounceOff(square3)
//squareBall.bounceOff(square4)

if(square1.isTouching(squareBall)&&squareBall.bounceOff(square1)){
    squareBall.shapeColor="red"
}


if(square3.isTouching(squareBall)&&squareBall.bounceOff(square3)){
    squareBall.shapeColor="yellow"
}

if(square4.isTouching(squareBall)&&squareBall.bounceOff(square4)){
    squareBall.shapeColor="green"
}

if(square2.isTouching(squareBall)){
    squareBall.Shapecolor= rgb(255,128,0)
    squareBall.velocityX=0;
    squareBall.velocityY=0;
    music.stop();

}

    drawSprites();
}

function setup(){
camera=createCapture(VIDEO);
camera.size(550,550);
canvas=createCanvas(500,450);
canvas.position(600,250);
library=ml5.poseNet(camera,modelloaded);
library.on("pose",hi);
}
function draw(){
background("white");
}
function modelloaded(){
    console.log("Model is Loaded");
}
function hi(results){
if(results){
    console.log(results);
}
}

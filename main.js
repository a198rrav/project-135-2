status=""
video="";
function preload(){
    
}
function setup(){
    canvas =createCanvas(550,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function start(){
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML ="status: detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status =true;

}

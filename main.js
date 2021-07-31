noseX=0; 
noseY=0; 
function preload() { 
mustache = loadImage('https://i.postimg.cc/PqgQF9cW/m.png');
} 

function setup() 
{ 
 canvas = createCanvas(300, 300); 
 canvas.center(); 
 video = createCapture(VIDEO); 
 video.size(300, 300); 
 video.hide(); 
 poseNet = ml5.poseNet(video, modelLoaded); 
 poseNet.on('pose', gotPoses); 
 }; 
 function modelLoaded() 
 { console.log('PoseNet Is Initialized'); 
 }

function gotPoses(results) 
{ if (results.length > 0) { 
 console.log(results); 
 noseX = results[0].pose.nose.x; 
 noseY = results[0].pose.nose.y; 
 console.log("moustache x = " + noseX); 
 console.log("moustache y = " + noseY); 
 } }

function draw() 
{ 
 image(video, 0, 0, 300, 300); 
image(mustache,noseX-10,noseY+5,30,30);

} 
function take_snapshot(){ 
 save('myFilterImage.png'); 
  }
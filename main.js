moustacheX=0; 
moustacheY=0; 
function preload() { 
mustache = loadImage('https://media.istockphoto.com/vectors/black-hipster-vector-mustache-vector-id485318064?k=6&m=485318064&s=170667a&w=0&h=GnKnhEjSZB3_I8CxygnvP7x7AHQcTqLQDXyQYdMTjb4=');
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
 noseX = results[0].pose.moustache.x; 
 noseY = results[0].pose.moustache.y; 
 console.log("moustache x = " + moustacheX); 
 console.log("moustache y = " + moustacheY); 
 } }

function draw() 
{ 
 image(video, 0, 0, 300, 300); 
 fill(255,0,0); 
 stroke(255,0,0); 
 circle(moustacheX, moustacheY, 20);
} 
function take_snapshot(){ 
 save('myFilterImage.png'); 
  }
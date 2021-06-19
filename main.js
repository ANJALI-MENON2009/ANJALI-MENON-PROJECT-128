song = "" ;
rightWristX = 0 ;
leftWristX = 0 ;
rightWristy = 0 ;
leftWristY = 0 ;
scoreRightWrist = 0 ;
scoreLeftWrist = 0 ;

function preload() {
  song1 = loadSound("peter_pan.mp3") ;
  // song2 = loadSound("peter_pan.mp3") ;
}

function setup() {
  canvas = createCanvas(400, 300) ;
  video = createCapture(VIDEO);
  video.hide();

  posenet = ml5.poseNet(video, modelLoaded) ;
  posenet.on('pose', gotResult) ;
}
function gotResult(results) {
  console.log(results) ;
  scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
  console.log("Right wrist score = " + scoreRightWrist) ;
  rightWristX = results[0].pose.rightWrist.x ;
  console.log("Right wrist x = " + rightWristX) ;
  rightWristY = results[0].pose.rightWrist.y ;
  console.log("Right wrist y = " + rightWristY) ;
  console.log("Left wrist score = " + scoreLeftWrist) ;
  leftWristX = results[0].pose.leftWrist.x ;
  console.log("Left wrist x = " + leftWristX) ;
  leftWristY = results[0].pose.leftWrist.y ;
  console.log("Left wrist y = " + leftWristY) ;
}
function draw() {
  image(video, 0, 0, 400, 300) ;
  fill("#FF0000");
	stroke("#FF0000");
}

function modelLoaded() {
  console.log("Model is ready to use...") ;
}

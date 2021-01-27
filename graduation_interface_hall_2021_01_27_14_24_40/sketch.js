var video;
let mask;
let cafesound;
//let naturesound;

function preload(){
  soundFormats('mp3','wav');
  cafesound = loadSound('music/cafe_music');
  //naturesound = loadSound('music/nature');
  
}

function setup() {
  createCanvas(1024,1024);
  background(0);
  video = createCapture(VIDEO);
  video.size(100,100);
  video.hide();
  
  cursor('pointer');
  
  //let cafe = rect(700,30,300,500);
  // cafesound.play();
  // cafesound.setVolume(0.5);
  // cafe.mousePressed(cafePressed);
}

function draw() {
  background(255);
  rect(30,30,500,500);
  rect(700,30,300,500);
  rect(30,700,970,300);
  //rect(600,260,400,270);
  mask = createGraphics(video.width,video.height);
  
  mask.noStroke();
  mask.fill(255);
  mask.circle(mask.width/2, mask.height/2, 80);
  video.mask(mask);
  //imageMode(CENTER);
  
  image(video,mouseX,mouseY); 


  if (mouseX >= 30 && mouseY >= 600){  
  
    if (!cafesound.isPlaying()){
   cafesound.play();
   cafesound.setVolume(0.2);
   }
  }  
   else 
  {
    cafesound.stop();
  }
}


// function togglePlaying(){
//   if (!cafesound.isPlaying()){
//    cafesound.play();
//    cafesound.setVolume(0.5);
//  }
//   else{
//     cafe.sound.pause();
//   }
// }

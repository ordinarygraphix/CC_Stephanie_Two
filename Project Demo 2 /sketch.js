var video1, video2, video3;
var mouse_clicked = false;
var video1_playing = false;
var video2_playing = false;
var video3_playing = false;

//next step: try to compress videos into smaller files 
//figure out interface, how user interacts with computer
//put in story footage 

function setup() {
  canvas = createCanvas(1000, 800);

  video1 = createVideo("nicole.MOV"); //sets up video1 
  video1.size(1000, 800);
  video1.loop();
  video1.hide();

  video2 = createVideo("mags.MOV"); //sets up video2
  video2.size(1000, 800);
  video2.hide();

  video3 = createVideo("lily.MOV"); //sets up video3 
  video3.size(1000, 800);
  video3.hide();
}

function draw() { 
  background(0);
  //drawing the videos as images onto canvas 
  if (mouse_clicked == false) { 
    image(video1, 0, 0);
    fill(244, 55, 0);
    rect(300, 300, 100, 100);
  } else if (mouse_clicked && video1_playing) {
    video1.pause();
    video2.loop(); 
    image(video2, 0, 0);
  } else if (mouse_clicked && video2_playing) {
    video2.pause();
    video3.loop();
    image(video3, 0, 0);
  }

}

function mousePressed() { 
  //checks what is clicked to change to next video. 
  if (mouse_clicked == false && mouseX >=300 && mouseX <=400) {
    mouse_clicked = true;
    video1_playing = true;
  } else if (mouse_clicked && video1_playing) {
    mouse_clicked = false;
    video1_playing = false;
    video2_playing = true;
    mouse_clicked = true;
  } else if (mouse_clicked && video2_playing) {
    mouse_clicked = false;
    video2_playing = false;
    video3_playing = true;
  }

}
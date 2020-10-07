/**************************************************
Activity 5: Looking for love
Sharon Ku

Here is a description of this template p5 project.
**************************************************/

let state = `title`; //Possible states are: title, animation, loveTriumph, deepSadness

let bg = {
  r: 0,
  g: 0,
  b: 0,
};

// FOR THE INTRO -------------------------------------------------------------
// title text
let titleText = `lookingForLove`;
let titleFont;

// start
let start = {
  text: `START`,
  font: `Arial`,
  x: 100,
  y: 100,
  size: 35,
  sizeBigger: 50,
  sizeSmaller: 35,
  // horAlign: `CENTER`,
  // verAlign: `CENTER`,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  }
};

// start button
let startButton = {
  size: 200,
  sizeBigger: 250,
  sizeSmaller: 200,
  x: 100,
  y: 100,
  fill: {
    r: 125,
    g: 125,
    b: 125,
  }
};

// FOR THE ANIMATION -------------------------------------------------------------
let circle1 = {
  size: 100,
  x: 200,
  y: 200,
  vx: 0,
  vy: 0,
  speed: 4,
  tx: 0,
  ty: 10,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  }
};

let circle2 = {
  size: 100,
  x: 500,
  y: 500,
  vx: 0,
  vy: 0,
  speed: 4,
  tx: 0,
  ty: 10,
  fill: {
    r: 0,
    g: 255,
    b: 0,
  }
};



// loading font
function preload(){
  titleFont = loadFont(`assets/fonts/CinzelDecorative-Bold.ttf`);
}



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Initial position for circle 1
  circle1.x = windowWidth / 3;
  circle1.y = windowHeight / 3;
}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(bg.r, bg.g, bg.b);

  if (state === `title`) {
    title();
  }

  if (state === `animation`) {
    animation();
  }

}

function title() {
  displayTitle(); // Display "Looking for Love"

  displayStartButton(); // Drawing the start button
  displayStart(); // Drawing the start text

  enlargeStartButton(); // Start button and Start text enlarge if mouse's position is on start button
}

function animation(){
  // Circle 1 movement and display


  circle1.tx += 0.025;
  circle1.ty += 0.025;

  let noiseX = noise(circle1.tx);
  let noiseY = noise(circle1.ty);

  fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);
  circle1.vx = map(noiseX, 0, 1, -circle1.speed, circle1.speed);
  circle1.vy = map(noiseY, 0, 1, -circle1.speed, circle1.speed);

  circle1.x += circle1.vx;
  circle1.y += circle1.vy;

  ellipse(circle1.x,circle1.y,circle1.size);


  // Cue deepSadness if either circle goes off canvas




}


// The Start button and Start text enlarge if mouse's position is on start button
function enlargeStartButton() {
  if (mouseIsInStartButton()) {
    startButton.size = startButton.sizeBigger;
    start.size = start.sizeBigger;
  }
  else {
    startButton.size = startButton.sizeSmaller;
    start.size = start.sizeSmaller;
  }
}

function mouseClicked() {
  if (mouseIsInStartButton()) {
    startButton.fill.r = 70;
    state = `animation`;
  }
}

// Checks if mouse's position is inside the start button
function mouseIsInStartButton() {
  if (mouseX < startButton.x+(startButton.size/2) && mouseX > startButton.x-(startButton.size/2)) {
    if (mouseY < startButton.y+(startButton.size/2) && mouseY > startButton.y-(startButton.size/2)) {
      return true;
    }
  }
  else{
    return false;
  }
}

// Display title "Looking for Love"
function displayTitle() {
  push();
  fill(255);
  textSize(windowHeight/7);
  textAlign(CENTER,CENTER);

  textFont(titleFont);
  text(`Looking`, windowWidth/3, windowHeight/3);
  text(`for`, windowWidth/2, windowHeight/2);
  text(`Love`, windowWidth*2/3, windowHeight*2/3);
  pop();
}

// Display the circular Start button
function displayStartButton() {
  push();
  startButton.x = start.x;
  startButton.y = start.y;

  fill(startButton.fill.r, startButton.fill.g, startButton.fill.b);
  ellipse(startButton.x, startButton.y, startButton.size);
  pop();
}

// Display the Start text
function displayStart() {
  push();
  fill(start.fill.r, start.fill.g, start.fill.b);
  textSize(start.size);
  textAlign(CENTER, CENTER);

  start.x = windowWidth*1/5;
  start.y = windowHeight*4/5;

  textFont(start.font);
  text(start.text, start.x, start.y);
  pop();
}
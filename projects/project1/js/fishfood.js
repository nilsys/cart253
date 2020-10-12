class Fishfood {
  constructor() {
    this.x = random(fishtank.border, width - fishtank.border);
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.speed = 1.5; //0.5
    this.ax = 0;
    this.ay = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.accelerationMax = 3;
    this.size = 15;
    this.fillR = 255;  // beige
    this.fillG = 221;
    this.fillB = 185;
    this.fillAlpha = 255;
  }

  show() {
    push();
    fill(this.fillR, this.fillG, this.fillB, this.fillAlpha);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x = constrain(this.x, fishtank.border, width - fishtank.border);

    this.ax = this.accelerationX;
    this.ay = this.accelerationY;

    this.accelerationX = constrain(this.accelerationX, -this.accelerationMax, this.accelerationMax);

    let chance = random();

    if (chance < 0.05) {
    this.vx = random(-this.speed,this.speed);
    }
    this.vy = this.speed;

    this.x += this.vx + this.ax;
    this.y += this.vy + this.ay;

    // Change current
    if (keyIsDown(LEFT_ARROW)) {
      this.accelerationX -= 0.05;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.accelerationX += 0.05;
    }

    // test if food returns to top once it reaches the bottom
    // if (this.y > height) {
    //   this.y = 0;
    // }
  }

  // checks if food is off screen
  offScreen() {
    if (this.y > height) {
      return true;
    }
    else {
      return false;
    }
  }

  // checks if food has been eaten by fish
  foodEaten() {
    let distToFishMouth;
    let fishMouthLocation;

    if (firefish.scale.x > 0) {
      fishMouthLocation = firefish.x - (firefish.length/3);
    }
    else if (firefish.scale.x < 0) {
      fishMouthLocation = firefish.x + (firefish.length/3);
    }

    distToFishMouth = dist(this.x, this.y, fishMouthLocation, firefish.y);

    if (distToFishMouth < firefish.length/6) {
      return true;
    }
    else {
      return false;
    }
  }
}

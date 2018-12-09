let ratio;
let backgroundImg;
let crossPoint;
let originPoint;
let snapSpeed = 0.2; // 0.1 - 1

window.onresize = () => {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
	let canvas = document.getElementById("defaultCanvas0");
	let container = document.getElementById("canvasContainer");
  container.appendChild(canvas);
  
  originPoint = createVector(width/6, height/2);
  crossPoint = originPoint.copy();
  ratio = width / height;

  fill(53, 138, 207);
  noStroke();
}

function draw() {
  background(255);
  beginShape();

  if (frameCount % 250 === 0) 
    originPoint = createVector(random(width), random(height));

  let mouse = createVector(mouseX, mouseY);
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    lerpVector(crossPoint, mouse);
  } else {
    lerpVector(crossPoint, originPoint);
  }

  if (crossPoint.x > crossPoint.y * ratio) {
    if (crossPoint.x > (height - crossPoint.y) * ratio) {
      //Right
      topLeft();
      topRight();
    } else {
      //Top
      topLeft();
      bottomLeft();
    }
  } else {
    if (crossPoint.x > (height - crossPoint.y) * ratio) {
      //Bottom
      topRight();
      bottomRight();
    } else {
      //Left
      bottomRight();
      bottomLeft();
    }
  }  
  endShape();
}

function topLeft() {
  vertex(0, 0);
  vertex(crossPoint.x * width, crossPoint.y * width);
  vertex(width, height);
}

function topRight() {
  vertex(0, height);
  vertex((crossPoint.x - width) * width, crossPoint.y * width);
  vertex(width, 0);
}

function bottomLeft() {
  vertex(0, height);
  vertex(crossPoint.x * width, (crossPoint.y - height) * width);
  vertex(width, 0);
}

function bottomRight() {
  vertex(0, 0);
  vertex((crossPoint.x - width) * width, (crossPoint.y - height) * width);
  vertex(width, height);
}

function lerpVector(a, b) {
  a.x = lerp(a.x, b.x, snapSpeed);
  a.y = lerp(a.y, b.y, snapSpeed);
}
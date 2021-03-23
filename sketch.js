var h, m, s;
var hAngle, mAngle, sAngle;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("Cyan");  

  translate(200,200);
  rotate(-90);

  h = hour();
  m = minute();
  s = second();

  sAngle = map(s, 0, 60, 0, 360);
  mAngle = map(m, 0, 60, 0, 360);
  hAngle = map(h % 12,0,12,0,360);

  push();
  rotate(hAngle);
  stroke("Black");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke("Black");
  arc(0,0,260,260,0,hAngle);

  push();
  rotate(mAngle);
  stroke("Green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke("Green");
  arc(0,0,280,280,0,mAngle);

  push();
  rotate(sAngle); 
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
    
  strokeWeight(10);
  noFill();

  stroke("Red");
  arc(0,0,300,300,0,sAngle);

  drawSprites();
  }
  

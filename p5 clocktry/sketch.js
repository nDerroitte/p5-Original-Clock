function setup()
{
  //  createCanvas (767,677);
    createCanvas(window.innerWidth,window.innerHeight);
    angleMode(DEGREES);
    //console.log(window.innerWidth,window.innerHeight);
}

function draw()
{
  background(51);

  var sec = second() - 15;
  var min = (minute() - 15)*60 + sec;
  var hr = ((hour() -3)%12)*60*60 + min;

  var diamEllHr = 175;
  noFill();
  stroke(255);
  ellipse(width/2,height/2,diamEllHr);
  push();
  strokeWeight(5);
  point(width/2,height/2);
  pop();

  translate(width/2,height/2);
  var angleMin = map(hr, 0, 12*60*60,0,359);
  var xMin = (diamEllHr/2) * cos(angleMin);
  var yMin = (diamEllHr/2) * sin(angleMin);
  var diamEllMin = diamEllHr/2;
  ellipse(xMin,yMin,diamEllMin);
  push();
  strokeWeight(5);
  point(xMin,yMin);
  pop();

  translate(xMin,yMin);
  var angleSec = map(min,0,60*60,0,359);
  var xSec = (diamEllMin/2) * cos(angleSec);
  var ySec = (diamEllMin/2) * sin(angleSec);
  var diamEllSec = diamEllMin/2;
  ellipse(xSec,ySec,diamEllSec);
  push();
  strokeWeight(5);
  point(xSec,ySec);
  pop();

  translate(xSec,ySec);
  var angleMx = map(sec,0,60,0,359);
  var xM = (diamEllSec/2) * cos(angleMx);
  var yM = (diamEllSec/2) * sin(angleMx);
  var diamEllMx = diamEllSec/2;
  ellipse(xM,yM,diamEllMx);
  push();
  strokeWeight(5);
  point(xM,yM);
  pop();
}

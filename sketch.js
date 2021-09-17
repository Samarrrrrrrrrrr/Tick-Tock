var hr, min, sec
var line, line2, line3

function setup() {
  createCanvas(800,400);

//second =  new line(400, 200, 150, 10)
//minute =  new line(400, 200, 150, 10)
//hour =  new line(400, 200, 150, 10)


  angleMode(DEGREES)


}

function draw() {
  background("black");  
  drawSprites();

  hr = hour()
  min = minute()
  sec = second()

  scAngle = map(sec, 0, 60, 0, 360)
  mnAngle = map(min, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360)

translate(200,200)
noFill()

push()
rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
pop()

push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
pop()

push()
  stroke(255,0,0)
  strokeWeight(7)
  arc(0,0,300,300,0,scAngle)
  pop()

  push()
  stroke(0,255,0)
  strokeWeight(7)
  arc(0,0,280,280,0,mnAngle)
  pop()

  push()
  stroke(0,0,255)
  strokeWeight(7)
  arc(0,0,260,260,0,hrAngle)
  pop()

}
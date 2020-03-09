let brush = 0

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(1800,800).parent('p5')
    print("ayyyyy lmao")
      background(255)
}
//defining what each "brush" makes
function draw() {

if (mouseIsPressed) {
  if (brush == 0) {
    stroke(0)
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
//Sunrise

  //Sky
  if (brush == 30) {
    noStroke()
    fill("#FFCD69")
    rect(0,0,1800,450)
  }
  //Ground
  if (brush == 1) {
    noStroke()
    fill("#b0a47d")
    rect(0,450,1800,150)
  }
  //Buildings
  if (brush == 2) {
    fill(0)
    rect(mouseX,mouseY,(random(40,70)),(random(0,200)))
  }
  //Grass
  if (brush == 3) {
    stroke(50, 110, 44)
    line(pmouseX,(random(400,mouseY)),mouseX,mouseY)
  }
  //Clouds
  if (brush == 4) {
    noStroke()
    fill(235,235,235,15)
    ellipse(mouseX,mouseY,100,50)
  }
  //Sun for set and rise
  if (brush == 5) {
    noStroke()
    fill("#FFF3A8")
    circle(mouseX,mouseY,100)
  }
//Midday
  //Sun midday
  if (brush == 6) {
    noStroke()
    fill(253, 255, 201)
    circle(mouseX,mouseY,100)
  }
  //Sky
  if (brush == 7) {
    noStroke()
    fill("#9ae4fc")
    rect(0,0,1800,450)
  }
  //Ground
  if (brush == 8) {
    noStroke()
    fill("#e0d09d")
    rect(0,450,1800,150)
  }

//Sunset
  if (brush == 11){
    noStroke()
    fill("#FFB92E")
    rect(0,0,1800,450)
  }
  if (brush == 12){
    noStroke()
    fill("#b0a47d")
    rect(0,450,1800,150)
  }

//Nighttime
  //Sky
  if (brush == 18){
    noStroke()
    fill("#0A0D40")
    rect(0,0,1800,450)
  }
  //Ground
  if (brush == 19){
    noStroke()
    fill("#3b372d")
    rect(0,450,1800,150)
  }
  //Moon
  if (brush == 20){
    noStroke()
    fill(245,245,245)
    circle(mouseX,mouseY,100)
  }
  //Grass
  if (brush == 21){
    stroke(25, 61, 30)
    line(pmouseX,(random(400,mouseY)),mouseX,mouseY)
  }
  //Clouds
  if (brush == 22){
    noStroke()
    fill(75,15)
    ellipse(mouseX,mouseY,100,50)
  }
  if (brush == 23){

  }
  if (brush == 24){

  }
//The Far-Right
  if (brush == 25){

  }
  if (brush == 29){

  }

}


noStroke()
//toolbar
fill(175)
rect(0,600,1800,200)
let r = random(0,255)

//1
fill("#FFCD69")
square(220,615,70)
fill("#FFB92E")
square(220,715,70)
fill("#9ae4fc")
square(1070,615,70)
fill("#0A0D40")
square(1070,715,70)

//2
fill("#b0a47d")
square(310,615,70)
square(310,715,70)
fill("#e0d09d")
square(1160,615,70)
fill("#3b372d")
square(1160,715,70)

//3
fill(0)
square(400,615,70)
square(400,715,70)
square(1250,615,70)
square(1250,715,70)

//4
fill(50, 110, 44)
square(490,615,70)
square(490,715,70)
square(1340,615,70)
square(1340,715,70)

//5
fill(235, 235, 235)
square(580,615,70)
square(580,715,70)
square(1430,615,70)
square(1430,715,70)

//6
fill("#FFF3A8")
square(670,615,70)
square(670,715,70)
fill(253, 255, 201)
square(1520,615,70)
fill(245,245,245)
square(1520,715,70)



fill(255)
square(1708,610,80)
square(1708,710,80)

stroke(0)
strokeWeight(2)
line(0,700,1695,700)
line(0,600,1800,600)
line(845,600,845,800)
line(1695,600,1695,800)


fill(0)
//Sunrise
beginShape()
vertex(20,615)
vertex(20,650)
vertex(30,650)
vertex(30,675)
vertex(20,675)
vertex(20,680)
vertex(35,680)
vertex(35,645)
vertex(25,645)
vertex(25,620)
vertex(35,620)
vertex(35,615)
endShape(CLOSE)

beginShape()
vertex(40,650)
vertex(40,680)
vertex(60,680)
vertex(60,650)
vertex(55,650)
vertex(55,675)
vertex(45,675)
vertex(45,650)
endShape(CLOSE)

beginShape()
vertex(65,650)
vertex(65,680)
vertex(70,680)
vertex(70,655)
vertex(80,655)
vertex(80,680)
vertex(85,680)
vertex(85,650)
endShape(CLOSE)

beginShape()
vertex(90, 650)
vertex(90,680)
vertex(95,680)
vertex(95,660)
vertex(105,660)
vertex(105,670)
vertex(110,670)
vertex(110,655)
vertex(95,655)
vertex(95,650)
endShape(CLOSE)

beginShape()
vertex(115,650)
vertex(115,680)
vertex(120,680)
vertex(120,650)
endShape(CLOSE)

beginShape()
vertex(115, 640)
vertex(115, 645)
vertex(120,645)
vertex(120,640)
endShape(CLOSE)

beginShape()
vertex(135,650)
vertex(125,650)
vertex(125,665)
vertex(130,665)
vertex(130,675)
vertex(125,675)
vertex(125,680)
vertex(135,680)
vertex(135,660)
vertex(130,660)
vertex(130,660)
vertex(130,655)
vertex(135,655)
endShape(CLOSE)

beginShape()
vertex(160,650)
vertex(140,650)
vertex(140,680)
vertex(160,680)
vertex(160,670)
vertex(155,670)
vertex(155,675)
vertex(145,675)
vertex(145,665)
vertex(160,665)
endShape(CLOSE)

fill(175)
beginShape()
vertex(145,660)
vertex(155,660)
vertex(155,655)
vertex(145,655)
endShape(CLOSE)

//Sunset
fill(0)
beginShape()
vertex(20,715)
vertex(20,750)
vertex(30,750)
vertex(30,775)
vertex(20,775)
vertex(20,780)
vertex(35,780)
vertex(35,745)
vertex(25,745)
vertex(25,720)
vertex(35,720)
vertex(35,715)
endShape(CLOSE)

beginShape()
vertex(40,750)
vertex(40,780)
vertex(60,780)
vertex(60,750)
vertex(55,750)
vertex(55,775)
vertex(45,775)
vertex(45,750)
endShape(CLOSE)

beginShape()
vertex(65,750)
vertex(65,780)
vertex(70,780)
vertex(70,755)
vertex(80,755)
vertex(80,780)
vertex(85,780)
vertex(85,750)
endShape(CLOSE)

beginShape()
vertex(125,750)
vertex(105,750)
vertex(105,780)
vertex(125,780)
vertex(125,770)
vertex(120,770)
vertex(120,775)
vertex(110,775)
vertex(110,765)
vertex(125,765)
endShape(CLOSE)

fill(175)
beginShape()
vertex(110,760)
vertex(120,760)
vertex(120,755)
vertex(110,755)
endShape(CLOSE)

fill(0)
beginShape()
vertex(100,750)
vertex(90,750)
vertex(90,765)
vertex(95,765)
vertex(95,775)
vertex(90,775)
vertex(90,780)
vertex(100,780)
vertex(100,760)
vertex(95,760)
vertex(95,760)
vertex(95,755)
vertex(100,755)
endShape(CLOSE)

beginShape()
vertex(130,780)
vertex(130,745)
vertex(120,745)
vertex(120,740)
vertex(130,740)
vertex(130,730)
vertex(135,730)
vertex(135,740)
vertex(145,740)
vertex(145,745)
vertex(135,745)
vertex(135,780)
endShape(CLOSE)

//Mid-day
beginShape()
vertex(870,620)
vertex(870,680)
vertex(875,680)
vertex(875,640)
vertex(880,650)
vertex(885,640)
vertex(885,680)
vertex(890,680)
vertex(890,620)
vertex(885,620)
vertex(880,637.5)
vertex(875,620)
endShape(CLOSE)

beginShape()
vertex(895,680)
vertex(895,650)
vertex(900,650)
vertex(900,680)
endShape(CLOSE)

beginShape()
vertex(895, 645)
vertex(895, 640)
vertex(900, 640)
vertex(900,645)
endShape(CLOSE)

beginShape()
vertex(905,650)
vertex(905,680)
vertex(925,680)
vertex(925,620)
vertex(920,620)
vertex(920,650)
endShape(CLOSE)

fill(175)
beginShape()
vertex(910,675)
vertex(910,655)
vertex(920,655)
vertex(920,675)
endShape(CLOSE)

fill(0)
beginShape()
vertex(930,650)
vertex(930,655)
vertex(940,655)
vertex(940,650)
endShape(CLOSE)

beginShape()
vertex(945,650)
vertex(945,680)
vertex(965,680)
vertex(965,620)
vertex(960,620)
vertex(960,650)
endShape(CLOSE)

fill(175)
beginShape()
vertex(950,675)
vertex(950,655)
vertex(960,655)
vertex(960,675)
endShape(CLOSE)

fill(0)
beginShape()
vertex(970,650)
vertex(970,680)
vertex(990,680)
vertex(990,645)
vertex(985,645)
vertex(985,650)
endShape(CLOSE)

fill(175)
beginShape()
vertex(975,675)
vertex(975,655)
vertex(985,655)
vertex(985,675)
endShape(CLOSE)

fill(0)
beginShape()
vertex(995, 645)
vertex(1000,645)
vertex(1000,655)
vertex(1010,655)
vertex(1010,645)
vertex(1015,645)
vertex(1015,680)
vertex(995,680)
vertex(995,670)
vertex(1000,670)
vertex(1000,675)
vertex(1010,675)
vertex(1010,660)
vertex(995,660)
endShape(CLOSE)

//Night
beginShape()
vertex(870,720)
vertex(870,780)
vertex(875,780)
vertex(875,745)
vertex(885,780)
vertex(890,780)
vertex(890,720)
vertex(885,720)
vertex(885,760)
vertex(875,720)
endShape(CLOSE)

beginShape()
vertex(895,780)
vertex(895,750)
vertex(900,750)
vertex(900,780)
endShape(CLOSE)

beginShape()
vertex(895,745)
vertex(895,740)
vertex(900,740)
vertex(900,745)
endShape(CLOSE)

beginShape()
vertex(905, 745)
vertex(925,745)
vertex(925,780)
vertex(905,780)
vertex(905,770)
vertex(910,770)
vertex(910,775)
vertex(920,775)
vertex(920,760)
vertex(905,760)
endShape(CLOSE)

fill(175)
beginShape()
vertex(910,750)
vertex(920,750)
vertex(920,755)
vertex(910,755)
endShape(CLOSE)

fill(0)
beginShape()
vertex(930,780)
vertex(930,720)
vertex(935,720)
vertex(935,750)
vertex(945,750)
vertex(945,780)
vertex(940,780)
vertex(940,755)
vertex(935,755)
vertex(935,780)
endShape(CLOSE)

beginShape()
vertex(950,780)
vertex(950,745)
vertex(940,745)
vertex(940,740)
vertex(950,740)
vertex(950,730)
vertex(955,730)
vertex(955,740)
vertex(965,740)
vertex(965,745)
vertex(955,745)
vertex(955,780)
endShape(CLOSE)
noFill()
//Numbers
  //1
  beginShape()
  vertex(225,620)
  vertex(235,620)
  vertex(235,645)
  vertex(240,645)
  vertex(240,650)
  vertex(225,650)
  vertex(225,645)
  vertex(230,645)
  vertex(230,625)
  vertex(225,625)
  endShape(CLOSE)

  beginShape()
  vertex(225,720)
  vertex(235,720)
  vertex(235,745)
  vertex(240,745)
  vertex(240,750)
  vertex(225,750)
  vertex(225,745)
  vertex(230,745)
  vertex(230,725)
  vertex(225,725)
  endShape(CLOSE)

  beginShape()
  vertex(1075,620)
  vertex(1085,620)
  vertex(1085,645)
  vertex(1090,645)
  vertex(1090,650)
  vertex(1075,650)
  vertex(1075,645)
  vertex(1080,645)
  vertex(1080,625)
  vertex(1075,625)
  endShape(CLOSE)

  stroke(255)
  fill(255)
  beginShape()
  vertex(1075,720)
  vertex(1085,720)
  vertex(1085,745)
  vertex(1090,745)
  vertex(1090,750)
  vertex(1075,750)
  vertex(1075,745)
  vertex(1080,745)
  vertex(1080,725)
  vertex(1075,725)
  endShape(CLOSE)

  //2
  stroke(0)
  noFill()
  beginShape()
  vertex(330,620)
  vertex(315,620)
  vertex(315,630)
  vertex(320,630)
  vertex(320,625)
  vertex(325,625)
  vertex(325,635)
  vertex(315,635)
  vertex(315,650)
  vertex(330,650)
  vertex(330,645)
  vertex(320,645)
  vertex(320,640)
  vertex(330,640)
  endShape(CLOSE)

  beginShape()
  vertex(330,720)
  vertex(315,720)
  vertex(315,730)
  vertex(320,730)
  vertex(320,725)
  vertex(325,725)
  vertex(325,735)
  vertex(315,735)
  vertex(315,750)
  vertex(330,750)
  vertex(330,745)
  vertex(320,745)
  vertex(320,740)
  vertex(330,740)
  endShape(CLOSE)

  beginShape()
  vertex(1180,620)
  vertex(1165,620)
  vertex(1165,630)
  vertex(1170,630)
  vertex(1170,625)
  vertex(1175,625)
  vertex(1175,635)
  vertex(1165,635)
  vertex(1165,650)
  vertex(1180,650)
  vertex(1180,645)
  vertex(1170,645)
  vertex(1170,640)
  vertex(1180,640)
  endShape(CLOSE)

  fill(255)
  stroke(255)
  beginShape()
  vertex(1180,720)
  vertex(1165,720)
  vertex(1165,730)
  vertex(1170,730)
  vertex(1170,725)
  vertex(1175,725)
  vertex(1175,735)
  vertex(1165,735)
  vertex(1165,750)
  vertex(1180,750)
  vertex(1180,745)
  vertex(1170,745)
  vertex(1170,740)
  vertex(1180,740)
  endShape(CLOSE)

  //3
  beginShape()
  vertex(425,650)
  vertex(425,620)
  vertex(405,620)
  vertex(405,627.5)
  vertex(420,627.5)
  vertex(420,632.5)
  vertex(410,632.5)
  vertex(410,637.5)
  vertex(420,637.5)
  vertex(420,642.5)
  vertex(405,642.5)
  vertex(405,650)
  endShape(CLOSE)

  beginShape()
  vertex(425,750)
  vertex(425,720)
  vertex(405,720)
  vertex(405,727.5)
  vertex(420,727.5)
  vertex(420,732.5)
  vertex(410,732.5)
  vertex(410,737.5)
  vertex(420,737.5)
  vertex(420,742.5)
  vertex(405,742.5)
  vertex(405,750)
  endShape(CLOSE)

  beginShape()
  vertex(1275,650)
  vertex(1275,620)
  vertex(1255,620)
  vertex(1255,627.5)
  vertex(1270,627.5)
  vertex(1270,632.5)
  vertex(1260,632.5)
  vertex(1260,637.5)
  vertex(1270,637.5)
  vertex(1270,642.5)
  vertex(1255,642.5)
  vertex(1255,650)
  endShape(CLOSE)

  beginShape()
  vertex(1275,750)
  vertex(1275,720)
  vertex(1255,720)
  vertex(1255,727.5)
  vertex(1270,727.5)
  vertex(1270,732.5)
  vertex(1260,732.5)
  vertex(1260,737.5)
  vertex(1270,737.5)
  vertex(1270,742.5)
  vertex(1255,742.5)
  vertex(1255,750)
  endShape(CLOSE)

  //4
  noFill()
  stroke(0)
  beginShape()
  vertex(520,620)
  vertex(520,650)
  vertex(515,650)
  vertex(515,635)
  vertex(495,635)
  vertex(495,620)
  vertex(500,620)
  vertex(500,630)
  vertex(515,630)
  vertex(515,620)
  endShape(CLOSE)

  beginShape()
  vertex(520,720)
  vertex(520,750)
  vertex(515,750)
  vertex(515,735)
  vertex(495,735)
  vertex(495,720)
  vertex(500,720)
  vertex(500,730)
  vertex(515,730)
  vertex(515,720)
  endShape(CLOSE)

  beginShape()
  vertex(1370,620)
  vertex(1370,650)
  vertex(1365,650)
  vertex(1365,635)
  vertex(1345,635)
  vertex(1345,620)
  vertex(1350,620)
  vertex(1350,630)
  vertex(1365,630)
  vertex(1365,620)
  endShape(CLOSE)

  beginShape()
  vertex(1370,720)
  vertex(1370,750)
  vertex(1365,750)
  vertex(1365,735)
  vertex(1345,735)
  vertex(1345,720)
  vertex(1350,720)
  vertex(1350,730)
  vertex(1365,730)
  vertex(1365,720)
  endShape(CLOSE)

  beginShape()
  vertex(600,620)
  vertex(585,620)
  vertex(585,640)
  vertex(595,640)
  vertex(595,645)
  vertex(585,645)
  vertex(585,650)
  vertex(600,650)
  vertex(600,635)
  vertex(590,635)
  vertex(590,625)
  vertex(600,625)
  endShape(CLOSE)

  beginShape()
  vertex(600,720)
  vertex(585,720)
  vertex(585,740)
  vertex(595,740)
  vertex(595,745)
  vertex(585,745)
  vertex(585,750)
  vertex(600,750)
  vertex(600,735)
  vertex(590,735)
  vertex(590,725)
  vertex(600,725)
  endShape(CLOSE)

  beginShape()
  vertex(1450,620)
  vertex(1435,620)
  vertex(1435,640)
  vertex(1445,640)
  vertex(1445,645)
  vertex(1435,645)
  vertex(1435,650)
  vertex(1450,650)
  vertex(1450,635)
  vertex(1440,635)
  vertex(1440,625)
  vertex(1450,625)
  endShape(CLOSE)

  beginShape()
  vertex(1450,720)
  vertex(1435,720)
  vertex(1435,740)
  vertex(1445,740)
  vertex(1445,745)
  vertex(1435,745)
  vertex(1435,750)
  vertex(1450,750)
  vertex(1450,735)
  vertex(1440,735)
  vertex(1440,725)
  vertex(1450,725)
  endShape(CLOSE)

  //6
  beginShape()
  vertex(690,620)
  vertex(675,620)
  vertex(675,650)
  vertex(690,650)
  vertex(690,635)
  vertex(680,635)
  vertex(680,625)
  vertex(690,625)
  endShape(CLOSE)

  beginShape()
  vertex(680,640)
  vertex(680,645)
  vertex(685,645)
  vertex(685,640)
  endShape(CLOSE)

  beginShape()
  vertex(690,720)
  vertex(675,720)
  vertex(675,750)
  vertex(690,750)
  vertex(690,735)
  vertex(680,735)
  vertex(680,725)
  vertex(690,725)
  endShape(CLOSE)

  beginShape()
  vertex(680,740)
  vertex(680,745)
  vertex(685,745)
  vertex(685,740)
  endShape(CLOSE)

  beginShape()
  vertex(1540,620)
  vertex(1525,620)
  vertex(1525,650)
  vertex(1540,650)
  vertex(1540,635)
  vertex(1530,635)
  vertex(1530,625)
  vertex(1540,625)
  endShape(CLOSE)

  beginShape()
  vertex(1530,640)
  vertex(1530,645)
  vertex(1535,645)
  vertex(1535,640)
  endShape(CLOSE)

  beginShape()
  vertex(1540,720)
  vertex(1525,720)
  vertex(1525,750)
  vertex(1540,750)
  vertex(1540,735)
  vertex(1530,735)
  vertex(1530,725)
  vertex(1540,725)
  endShape(CLOSE)

  beginShape()
  vertex(1530,740)
  vertex(1530,745)
  vertex(1535,745)
  vertex(1535,740)
  endShape(CLOSE)
  //Clear

  stroke(163, 25, 15)
  fill(163, 25, 15)
  beginShape()
  vertex(1775,620)
  vertex(1720,620)
  vertex(1720,680)
  vertex(1775,680)
  vertex(1775,660)
  vertex(1765,660)
  vertex(1765,670)
  vertex(1730,670)
  vertex(1730,630)
  vertex(1765,630)
  vertex(1765,640)
  vertex(1775,640)
  endShape(CLOSE)

  strokeWeight(5)
  stroke(51, 69, 130)
  fill(64, 85, 156)
  beginShape()
  vertex(1720,720)
  vertex(1720,780)
  vertex(1775,780)
  vertex(1775,730)
  vertex(1765,720)
  endShape(CLOSE)

  stroke(220)
  fill(220)
  beginShape()
  vertex(1732.5,720)
  vertex(1755,720)
  vertex(1755,735)
  vertex(1732.5,735)
  endShape(CLOSE)

  fill(255)
  beginShape()
  vertex(1727.5,780)
  vertex(1727.5,750)
  vertex(1765,750)
  vertex(1765,780)
  endShape(CLOSE)


  strokeWeight(1)
  stroke(0)
}




//buttons on the bottom of canvas
function mouseClicked() {

    print(int(mouseX), int(mouseY))

    if (mouseX > 220 && mouseX < 290 && mouseY > 615 && mouseY < 685) {
      print("SunriseSky")
      brush = 30
    } else if (mouseX > 310 && mouseX < 380 && mouseY > 615 && mouseY < 685) {
      print("SunriseGround")
      brush = 1
    } else if (mouseX > 400 && mouseX < 470 && mouseY > 615 && mouseY < 685) {
      print("SunriseBuildings")
      brush = 2
    } else if (mouseX > 490 && mouseX < 560 && mouseY > 615 && mouseY < 685) {
      print("SunriseTrees")
      brush = 3
    } else if (mouseX > 580 && mouseX < 650 && mouseY > 615 && mouseY < 685) {
      print("SunriseClouds")
      brush = 4
    } else if (mouseX > 670 && mouseX < 740 && mouseY > 615 && mouseY < 685) {
      print("SunriseSun")
      brush = 5
    } else if (mouseX > 760 && mouseX < 830 && mouseY > 615 && mouseY < 685) {
      print("Sunrise")
      brush = 6
    } else if (mouseX > 1070 && mouseX < 1140 && mouseY > 615 && mouseY < 685) {
      print("MiddaySky")
      brush = 7
    } else if (mouseX > 1160 && mouseX < 1230 && mouseY > 615 && mouseY < 685) {
      print("MiddayGround")
      brush = 8
    } else if (mouseX > 1250 && mouseX < 1320 && mouseY > 615 && mouseY < 685) {
      print("MiddayBuildings")
      brush = 2
    } else if (mouseX > 1340 && mouseX < 1410 && mouseY > 615 && mouseY < 685) {
      print("MiddayTrees")
      brush = 3
    } else if (mouseX > 220 && mouseX < 290 && mouseY > 715 && mouseY < 785) {
      print("SunsetSky")
      brush = 11
    } else if (mouseX > 310 && mouseX < 380 && mouseY > 715 && mouseY < 785) {
      print("SunsetGround")
      brush = 12
    } else if (mouseX > 400 && mouseX < 470 && mouseY > 715 && mouseY < 785) {
      print("SunsetBuildings")
      brush = 2
    } else if (mouseX > 490 && mouseX < 560 && mouseY > 715 && mouseY < 785) {
      print("SunsetTrees")
      brush = 3
    } else if (mouseX > 580 && mouseX < 650 && mouseY > 715 && mouseY < 785) {
      print("SunsetClouds")
      brush = 4
    } else if (mouseX > 670 && mouseX < 740 && mouseY > 715 && mouseY < 785) {
      print("SunsetSun")
      brush = 5
    } else if (mouseX > 760 && mouseX < 830 && mouseY > 715 && mouseY < 785) {
      print("Sunset")
      brush = 17
    } else if (mouseX > 1070 && mouseX < 1140 && mouseY > 715 && mouseY < 785) {
      print("NighttimeSky")
      brush = 18
    } else if (mouseX > 1160 && mouseX < 1230 && mouseY > 715 && mouseY < 785) {
      print("NighttimeGround")
      brush = 19
    } else if (mouseX > 1250 && mouseX < 1320 && mouseY > 715 && mouseY < 785) {
      print("NighttimeBuildings")
      brush = 2
    } else if (mouseX > 1340 && mouseX < 1410 && mouseY > 715 && mouseY < 785) {
      print("NighttimeTrees")
      brush = 21
    } else if (mouseX > 1430 && mouseX < 1500 && mouseY > 715 && mouseY < 785) {
      print("NighttimeClouds")
      brush = 22
    } else if (mouseX > 1520 && mouseX < 1590 && mouseY > 715 && mouseY < 785) {
      print("NighttimeMoon")
      brush = 20
    } else if (mouseX > 1610 && mouseX < 1680 && mouseY > 715 && mouseY < 785) {
      print("Nighttime")
      brush = 24
    } else if (mouseX > 1710 && mouseX < 1790 && mouseY > 610 && mouseY < 690) {
      print("clean canvas")
      background(255)
      brush = 25
    } else if (mouseX > 1430 && mouseX < 1500 && mouseY > 615 && mouseY < 685) {
      print("MiddayClouds")
      brush = 4
    } else if (mouseX > 1520 && mouseX < 1590 && mouseY > 615 && mouseY < 685) {
      print("MiddaySun")
      brush = 6
    } else if (mouseX > 1610 && mouseX < 1680 && mouseY > 615 && mouseY < 685) {
      print("Midday")
      brush = 28
    } else if (mouseX > 1710 && mouseX < 1790 && mouseY > 710 && mouseY < 790) {
      print("Save that shit")
      save()
      brush = 29
    } else {
      print("wow dude you fucked it up")
    }

}


function keyPressed() {

}

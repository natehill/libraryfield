let windAngle
let angle = Math.PI / 9
let turtleString = "aF";  //axiom
let branchLength = 3;
let paused = false;

function setup() {
let div = createDiv('').id('hello-container');
div.html('<uL><li><h1>TEST</h1></li></ul>');
let cnv = createCanvas(windowWidth, windowHeight);
cnv.id("algae");

  for(let i = 0; i < 5; i++){
    turtleString = turtleString.replaceAll("a", "FFFFFy[++++n][----t]fb");
    turtleString = turtleString.replaceAll("b", "+FFFFFy[++++n][----t]fc");
    turtleString = turtleString.replaceAll("c", "FFFFFy[++++n][----t]fd");
    turtleString = turtleString.replaceAll("d", "-FFFFFy[++++n][----t]fe");
    turtleString = turtleString.replaceAll("e", "FFFFFy[++++n][----t]fg");
    turtleString = turtleString.replaceAll("g", "FFFFFy[+++fa]fh");
    turtleString = turtleString.replaceAll("h", "FFFFFy[++++n][----t]fi");
    turtleString = turtleString.replaceAll("i", "+FFFFFy[++++n][----t]fj");
    turtleString = turtleString.replaceAll("j", " FFFFFy[++++n][----t]fk");
    turtleString = turtleString.replaceAll("k", "-FFFFFy[++++n][----t]fl");
    turtleString = turtleString.replaceAll("l", "FFFFFy[++++n][----t]fm");
    turtleString = turtleString.replaceAll("m", "FFFFFy[---fa]fa");
    turtleString = turtleString.replaceAll("n", "ofFFF");
    turtleString = turtleString.replaceAll("o", "fFFFp");
    turtleString = turtleString.replaceAll("p", "fFFF[-s]q");
    turtleString = turtleString.replaceAll("q", "fFFF[-s]r");
    turtleString = turtleString.replaceAll("r", "fFFF[-s]");
    turtleString = turtleString.replaceAll("s", "fFfF");
    turtleString = turtleString.replaceAll("t", "ufFFF");
    turtleString = turtleString.replaceAll("u", "fFFFv");
    turtleString = turtleString.replaceAll("v", "fFFF[+s]w");
    turtleString = turtleString.replaceAll("w", "fFFF[+s]x");
    turtleString = turtleString.replaceAll("x", "fFFF[+s]");
    turtleString = turtleString.replaceAll("y", "Fy");
  }
  
}

function draw(){
  clear();
  background(255, 229, 186);
  stroke(85, 140, 52);
  strokeWeight(1);
  translate(width / 2, height);  
  //print(turtleString);
  windAngle = cos(frameCount * 0.01) * 0.02
  biasAngle = 0.03
  renderString(turtleString);
  if (paused) {
  	frameCount = 0;
  }
}

function mousePressed() {
  paused = !paused;
}

function renderString(string) {
  for (let character of string) {
    if (character == 'F') {
      strokeWeight(1.3);
      line(0, 0, 0, -branchLength);
      translate(0, -branchLength);
    }
    else if (character == '[') {
      push();
    }
    else if (character == ']') {
      pop();
    }
    else if (character == '+') {
      //rotate(angle);
      rotate(angle + windAngle + biasAngle*angle);
    } else if (character == '-') {
      //rotate(-angle);
      rotate(-angle + windAngle + biasAngle*angle);
    }         
  }
}
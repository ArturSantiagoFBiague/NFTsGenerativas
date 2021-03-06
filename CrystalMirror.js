//Arte feita com P5
//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())


let no0fStars, sizeDiff, majorAxisMinLen = 500, widthHeightRatio = 0.3, rotationGradient, rotationGradientSlider, stars =[], part, tam, dist, dist2, r, g, b, dist3, seed;



function setup() {
  no0fStars = int(random(200, 3200));
  sizeDiff = float(random(.1, 1));

  dist = int(random(800, 2900));
  dist2 = float(random(.00001, .0000009));
  dist3 = float(random(.09, .1));
  r = int(random(255));
  g = int(random(255));
  b = int(random(255));
  opac = float(random(2.5, 3.5));
  r2 = int(random(255));
  g2 = int(random(255));
  b2 = int(random(255));



  createCanvas(windowWidth, windowHeight, WEBGL);
  rotationGradient = PI/no0fStars;
  rotationGradientSlider = createSlider(0,rotationGradient*5, rotationGradient, .002);





  for(let i=0;i<no0fStars;i++) {
    const majorAxisLen = majorAxisMinLen + i*sizeDiff;
    stars.push( new Star(majorAxisLen) )
 }

}

function draw() {
  background('black');



  noFill();
  stroke('red');

  translate(width/20, height/20)

  for(let i=0;i<no0fStars;i++) {
    // const majorAxisLen = majorAxisMinLen + i*sizeDiff;
    // const minorAxisLen = majorAxisLen * widthHeightRatio;

    rotate(PI/dist)

    stars[i].display();
    stars[i].update();

    rotateX(frameCount * dist2)


    // ellipse(0, 0, majorAxisLen, minorAxisLen);
  }

}

class Star{
 constructor(majorAxisLen) {
   this.majorAxisLen = majorAxisLen;
   this.minorAxisLen = majorAxisLen * widthHeightRatio;
   this.theta = random(2*PI)
   this.deltaTheta = 0.01;
 }

  display() {

  const x = (this.majorAxisLen/2)*cos(this.theta);
  const y = (this.minorAxisLen/2)*sin(this.theta);

    noStroke();
    fill(r, g, b, 10000);

    rotateX(radians(dist3))
    rotateY(radians(-0.000091))
    rotateZ(radians(0.00000005))

    circle(x,y,opac)
  }

  update() {
    this.theta = this.theta + this.deltaTheta;
  }
}

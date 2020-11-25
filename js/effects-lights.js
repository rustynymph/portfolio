let t = 0;
var c;
var header;
var row;
var inits;
var centerX, centerY;
var centerInitsX, centerInitsY;
var rext;

function setup() {
    canvas_width = windowWidth;
    c = document.getElementById("canvascontainer");
    canvas_height = c.clientHeight;

    centerInitsX = 250;
    centerInitsY = 250;

    if  (canvas_width <= 575) {
        centerInitsX = 155;
    } else if  (canvas_width > 575 && canvas_width <= 767) {
        centerInitsX = 200;
    } else if  (canvas_width > 767 && canvas_width <= 991) {
        centerInitsX = 200;
    } else {
        centerInitsX = 250;
    }

    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '0');
    cnv.parent('canvascontainer');
	background('rgba(250,250,250, 0)');
}

function draw() {
    noStroke();
    clear();
    //blendMode(NORMAL);
    //background(0);
    //blendMode(ADD);
	background('rgba(250,250,250, 0)');
    //background('rgba(250,250,250, 1)');
    blendMode(ADD);
  
    fill(0, 0, 255);
    //fill(0, 255, 255);
    //blob(100, width/6 + noise(t/2) * 200 - 100, height/2 + noise(t/2 + 1) * 200 - 100, 0.75, t);
    blob(100, centerInitsX+ noise(t/2) * 200 - 100, centerInitsY + noise(t/2 + 1) * 200 - 100, 0.75, t);
    
    fill(255, 0, 0);
    //fill(255, 0, 255);
    //blob(100, width/6 + noise(t/2 + 2) * 200 - 100, height/2 + noise(t/2 + 3) * 200 - 100, 0.75, t + 1);
    blob(100, centerInitsX + noise(t/2 + 2) * 200 - 100, centerInitsY + noise(t/2 + 3) * 200 - 100, 0.75, t + 1);
    
    fill(0, 255, 0);
    //fill(255, 255, 0);
    //blob(100, width/6 + noise(t/2 + 4) * 200 - 100, height/2 + noise(t/2 + 5) * 200 - 100, 0.75, t + 2);
    blob(100, centerInitsX + noise(t/2 + 4) * 200 - 100, centerInitsY + noise(t/2 + 5) * 200 - 100, 0.75, t + 2);
    
    t += 0.005;

}

// Draw a blob of approximate radius size,
// center (xCenter, yCenter),
// tightness k > 0 (0 being perfect circle),
// at time t (for evolution)

function blob(size, xCenter, yCenter, k, t) {
  //var dist = distance(mouseX, mouseY, xCenter, yCenter);
  //var multXY = map(dist, 0, 500, .8, 1);

  beginShape();
  for (let theta = 0; theta < 2 * PI; theta += 0.01) {
    let r1, r2;
    if (theta < PI/2) {
      r1 = cos(theta);
      r2 = 1;
    } else if (theta < PI) {
      r1 = 0;
      r2 = sin(theta);
    } else if (theta < 3 * PI/2) {
      r1 = sin(theta);
      r2 = 0;
    } else {
      r1 = 1;
      r2 = cos(theta);
    }
    let r = size + noise(k * r1, k * r2, t) * (2/3) * size;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}

function windowResized() {
    canvas_width = windowWidth;
    canvas_height = c.clientHeight;

    if  (canvas_width <= 575) {
        centerInitsX = 155;
    } else if  (canvas_width > 575 && canvas_width <= 767) {
        centerInitsX = 200;
    } else if  (canvas_width > 767 && canvas_width <= 991) {
        centerInitsX = 200;
    } else {
        centerInitsX = 250;
    }

    resizeCanvas(canvas_width, canvas_height);
	background('rgba(250,250,250, 0)');
}


function distance(x1, y1, x2, y2) {
    return Math.sqrt((Math.pow((x2-x1), 2))-(Math.pow((y2-y1), 2)));
}
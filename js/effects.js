var noiseMax = .5;
var zoff = 0;
var count = 0;
var ca, cb, cc;
var ox, oy;
var MAX;
var c;

function setup() {
    canvas_width = windowWidth;
    c = document.getElementById("portfolio");
    canvas_height = c.clientHeight;

    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '-1');
    cnv.parent('portfolio');
    
    count = 0;

	angleMode(DEGREES);

	ca = color("#0CCBCF22");
    cb = color("#6963d422");
    cc = color("#A7F54222");

	ox = width / 6;
	oy = height;

	MAX = width > height ? width : height;

	noFill();
	background('rgba(255,255,255, 1)');
}

function draw() {
    stroke(lerpColor(ca, cb, abs(sin(zoff * 100))));
    push();
    translate(ox, oy);
    beginShape();
    for (var t = 0; t < 360; t++) {
        var xoff = map(cos(t), -1, 1, 0, noiseMax);
        var yoff = map(sin(t), -1, 1, 0, noiseMax);

        var n = noise(xoff, yoff, zoff);
        var r = map(n, 0, 1, 0, height * 1);
        var x = r * cos(t);
        var y = r * sin(t);
        vertex(x, y);
    }
    endShape(CLOSE);

    //zoff += 0.015;
    zoff += 0.009;
    count = count + .5;

    /*if (count >= 500) {
        noLoop();
    }*/
    background('rgba(255,255,255, .09)');
}

function windowResized() {
    canvas_width = windowWidth;
    //canvas_height = windowHeight;
    //canvas_height = 350;
    canvas_height = c.clientHeight;
    resizeCanvas(canvas_width, canvas_height);

	ox = width / 2;
	oy = height;
	MAX = width > height ? width : height;    

	background(29, 29, 29);
    count = 0;
    loop();
}
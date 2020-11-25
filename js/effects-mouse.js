var noiseMax = .5;
var zoff = 0;
var count = 0;
var ca, cb, cc;
var ox, oy;
var MAX;
var c;

function setup() {
    canvas_width = windowWidth;
    c = document.getElementById("canvascontainer");
    canvas_height = c.clientHeight;

    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '-1');
    cnv.parent('canvascontainer');

	background('rgba(250,250,250, 1)');
}

function draw() {
}

function mouseMoved() {
    var amount = int(random(5,15));
	var r = random(5, 50);
	var gitt = int(random(3,10));
	//for(var i =0; i<amount; i++){
        noStroke();
        var rColor = 99;
        var gColor = parseInt(random(110, 200));
        var bColor = parseInt(random(182, 212));
        var colorString = 'rgba(' + rColor + ',' + gColor + ',' + bColor + ', .9)';
        console.log(colorString);
		fill(colorString);
		//ellipse(mouseX+random(-50,50), mouseY+random(-50,50), r);
		ellipse(mouseX, mouseY, r);
		r*=0.9;
	//}
}

function windowResized() {
    canvas_width = windowWidth;
    canvas_height = c.clientHeight;
    resizeCanvas(canvas_width, canvas_height);
	background('rgba(250,250,250, 1)');
}
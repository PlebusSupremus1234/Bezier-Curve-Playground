let linePoints = [];
let points = [];
let dotSize;
let dragging = false;

function setup() {
    createCanvas(windowWidth, windowHeight);

    dotSize = width / 100;

    linePoints = [
        { x: width / 5, y: height / 2 },
        { x: 4 * width / 5, y: height / 2 },
    ];

    points = [
        { x: width / 3, y: height / 3 },
        { x: 2 * width / 3, y: 2 * height / 3 },
    ];
}

function draw() {
    background(0);

    noFill();
    strokeWeight(4);
    stroke(255);

    beginShape();
    vertex(linePoints[0].x, linePoints[0].y);
    bezierVertex(points[0].x, points[0].y, points[1].x, points[1].y, linePoints[1].x, linePoints[1].y);
    endShape();
    
    stroke(255, 150);
    line(linePoints[0].x, linePoints[0].y, points[0].x, points[0].y);
    line(linePoints[1].x, linePoints[1].y, points[1].x, points[1].y);

    noStroke();

    fill("#039dfc");
    for (let i of points) ellipse(i.x, i.y, dotSize, dotSize);

    fill("#ff0000");
    for (let i of linePoints) ellipse(i.x, i.y, dotSize, dotSize);

    if (mouseIsPressed) {
        if (!dragging) {
            for (let i = 0; i < linePoints.length; i++) {
                if (inRange(mouseX, linePoints[i].x, 3 * dotSize) && inRange(mouseY, linePoints[i].y, 3 * dotSize)) dragging = linePoints[i];
            }

            for (let i = 0; i < points.length; i++) {
                if (inRange(mouseX, points[i].x, 3 * dotSize) && inRange(mouseY, points[i].y, 3 * dotSize)) dragging = points[i];
            }
        }

        if (dragging) {
            dragging.x = mouseX;
            dragging.y = mouseY;
        }
    } else if (dragging) dragging = false;
}
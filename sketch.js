/// <reference path="./util/p5.global-mode.d.ts" />
let windowSize = 800;
let origin;
let point;
let nearness;
let matches;

function setup() {
  let cnv = createCanvas(windowSize, windowSize);
  cnv.position(0, 0);
  origin = createVector(200, 200);
  point = createVector(400, 400);
  matches = new Set()
}

function draw() {
    background(50)
    drawGrid()
    renderDots()
    if (mouseIsPressed) {
      for (let i = 0; i < quad_t.length; i++) {
        for (let j = 0; j < quad_t.length; j++) {
          if (matches.has(quad_t[j][i])) {
            fill(0,0,255,50)
            rect(i * 100, j * 100, 100, 100) 
          }
        } 
      }
    }
}

function region(radii) {
  matches = get_locality(get_hash(origin), radii)
  console.log(matches)
}

function get_hash(vec) {
  let col = int(vec.x / 100)
  let row = int(vec.y / 100)
  return quad_t[row][col]
}

function drawGrid() {
  for (let i = 0; i < 8; i++) {
    line(0, i * 100, windowSize, i * 100);
    line(i * 100, 0, i * 100, windowSize);
  }

  for (let i = 0; i < quad_t.length; i++) {
    for (let j = 0; j < quad_t.length; j++) {
      noStroke()
      fill(255)
      text(quad_t[j][i], (i * 100) + 50, (j * 100) + 75)
    } 
  }
}

function renderDots() {
  noStroke()
  fill(0,255,0, 50)
  text(origin, 10, 30)
  text(point, 10, 50)
  fill(0,255,0)
  text(nearness, origin.x + 20, origin.y)
  circle(origin.x, origin.y, 20)
  fill(255,0,0)
  circle(point.x, point.y, 20)
  stroke(255)
  line(origin.x, origin.y, point.x, point.y)
}

function mousePressed() {
  mouseX = Math.min(windowSize, Math.max(0, mouseX))
  mouseY = Math.min(windowSize, Math.max(0, mouseY))
  origin = createVector(mouseX, mouseY);
  point = createVector(mouseX, mouseY);
}

function mouseDragged() {
  point = createVector(mouseX, mouseY);
  nearness = get_nearness(get_hash(origin), get_hash(point))
  region(nearness)
}
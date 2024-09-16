let circleX, circleY;
let circleSize = 200;
let eyeSize = 20;
let isHovered = false;
let circleColor;

 function setup() {
  createCanvas(600, 400);
  circleX = width / 2;
  circleY = height / 2;
  circleColor = color(255, 0, 0);
  
}


  function draw() {
  background(9);
  let d = dist(mouseX, mouseY , circleX, circleY);
  if (d < circleSize / 2) {
  if (!isHovered) {
  circleColor = color(random(255), random(255), random(255));
  isHovered = true;
 }
} else {
  isHovered = false;
  circleColor = color(255, 0, 0);
  
}
    
    
  fill(circleColor);
  noStroke();
  ellipse(circleX, circleY , circleSize);
  let eyeDirectionX = mouseX - circleX;
  let eyeDirectionY = mouseY - circleY;
  fill(255);
  let eyeX = circleX + eyeDirectionX;
  let eyeY = circleY + eyeDirectionY;
  ellipse(eyeX, eyeY , eyeSize);
  fill(0);
  ellipse(eyeX, eyeY , eyeSize / 2);
}


 function mousePressed() {
  let d = dist(mouseX, mouseY , circleX, circleY);
  if (d < circleSize / 2) {
  circleSize *= 0.8;
   }
}
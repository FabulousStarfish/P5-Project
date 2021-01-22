function setup(){
    canvas=createCanvas(350,275);
    canvas.position(590,225);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    background('#fae');
    image(video,75,60,200,150);
    fill(3, 152, 252);
    stroke(3, 152, 252);
    circle(0,0,150);
    circle(0,275,150);
    circle(350,275,150);
    circle(350,0,150);
    rect(0,0,20,275);
    rect(0,0,350,20);
    rect(330,0,20,275);
    rect(0,255,350,20);
}
function snap(){
    save('Birthday_Pic');
}
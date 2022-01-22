function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw()
{
    image(video,230,150,220,200);
    fill("#ADD8E6");
    circle(50,50,60);
    circle(50,430,60);
    circle(590,50,60);
    circle(590,430,60);
    fill("#FFFF00");
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
    tint(tint_color);
}

function Filter_tint()
{
    tint_color=document.getElementById("colorName").value;
}

function take_snapshot(){
    save("MyImage.jpeg");
}
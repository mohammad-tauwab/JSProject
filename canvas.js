
let canvas = document.getElementById("c1");
let ctx = canvas.getContext("2d");
canvas.width = 500; //px
canvas.height = 500; //px
ctx.fillStyle = "red";

//ctx.fillRect(50, 50, 380, 380);
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(225, 150, 50, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();
let x=0;

setInterval(() => {
    if(x%2==0){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(200, 140, 10, 0, Math.PI * 2);
        ctx.arc(250, 140, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(225, 165, 20, 0, Math.PI * 1);
        ctx.fill();
        ctx.closePath();
    }
    else {
        ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(200, 140, 10, -Math.PI * 1, 0);
            ctx.arc(250, 140, 10, -Math.PI * 1, 0);
            ctx.fill();
        ctx.closePath();

    }
   x++;

}, 300);

ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.moveTo(225, 141);
    ctx.lineTo(225, 157);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(160, 100);
    ctx.lineTo(290, 100);
    ctx.lineTo(225, 50);
    ctx.lineTo(160, 100);
    ctx.fill();
ctx.closePath();

ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(225, 200);
    ctx.lineTo(225, 400);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(180, 250);
    ctx.lineTo(270, 250);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(225, 350);
    ctx.lineTo(180, 390);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.moveTo(225, 350);
    ctx.lineTo(265, 390);
    ctx.stroke();
ctx.closePath();


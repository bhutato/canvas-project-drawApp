    const canvas = document.getElementById("canvas");

    //drawing object
    //getContext() is has properties and methods for drawing
    const ctx = canvas.getContext('2d'); 
    
    canvas.height = 600;
    canvas.width = 800;

window.addEventListener("resize", resizeCanvas ); 

//set fill style of drawing object (default black)
ctx.rect(0,0,canvas.width, canvas.height)
ctx.fillStyle = '#c8d1de';
ctx.fill()
ctx.strokeStyle = "white";

let isDrawing = false;

function startPos() {
    isDrawing = true;
    console.log("🚀 ~ file: index.js ~ line 23 ~ startPos ~ isDrawing", isDrawing)
    ctx.beginPath()
} 

function stopPos() {
    isDrawing = false;
    console.log("🚀 ~ file: index.js ~ line 29 ~ stopPos ~ isDrawing", isDrawing)
}

addEventListener('mousedown', startPos);
addEventListener('mouseup', stopPos);
addEventListener('mousemove', draw);

function draw(e) {
    if (!isDrawing) {
        return;
    }
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}
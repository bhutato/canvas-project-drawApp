    const canvas = document.getElementById("canvas");

    //drawing object
    //getContext() has properties and methods for drawing
    const ctx = canvas.getContext('2d'); 
    
    canvas.height = 600;
    canvas.width = 800;
    
    const canvasBg = '#c8d1de';
    const currentColor = 'black';

// window.addEventListener("resize", resizeCanvas ); 

//set fill style of drawing object (default black)

function defaultCanvasState() {
    ctx.rect(0,0,canvas.width, canvas.height)
    ctx.fillStyle = canvasBg;
    ctx.fill()
    console.log("inside default color func")
}

defaultCanvasState()

ctx.strokeStyle = currentColor;

let isDrawing = false;

function startPos() {
    isDrawing = true;
    // console.log("🚀 ~ file: index.js ~ line 23 ~ startPos ~ isDrawing", isDrawing)
    ctx.beginPath()
} 

function stopPos() {
    isDrawing = false;
    // console.log("🚀 ~ file: index.js ~ line 29 ~ stopPos ~ isDrawing", isDrawing)
}

addEventListener('mousedown', startPos);
addEventListener('mouseup', stopPos);
addEventListener('mousemove', draw);

function draw(e) {
    if (!isDrawing) {
        return;
    }
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}

document.querySelector("#clear-btn").addEventListener("click", clearCanvas);

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    console.log("clicked clear button");
    defaultCanvasState();
}

document.querySelector('#erase-btn').addEventListener("click",() => {
    ctx.strokeStyle = canvasBg;
})

document.querySelector('#pen-btn').addEventListener("click", () => {
    ctx.strokeStyle = currentColor;
})

    

 



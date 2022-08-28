const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';// color a dibujar
ctx.lineJoin = 'round';     //cuando 2 lineas chocan, para que su bordes sean redondos
ctx.lineCap = 'round';      //para que las puntas de una linea sean redondas
//ctx.lineWidth = 10;        //grosor de un linea

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = 0;

function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    // ctx.beginPath();
    //empieza de
    ctx.moveTo(lastX, lastY);
    //hasta
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    color ++;
    if (ctx.lineWidth>=50)
        ctx.lineWidth=5;
    else    
        ctx.lineWidth++;

    if (color >= 360) {
        color = 0;
    }


}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
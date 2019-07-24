const canvas = document.getElementById("tetris-canvas");
const context = canvas.getContext("2d");

const requestAnimationFrame = (window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || function (callback) {
        setTimeout(callback, 1000/30);
    });

canvas.width = 800;
canvas.height = 600;

let x = 10;
let y = 10;

function update() {
    x += 1;
}

let count = 0;

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillRect(x, y, 20, 20);
    count += 1;

    window.requestAnimationFrame(draw);
}

draw()

setInterval(update, 10);

setTimeout(function () {
    console.log("FPS: " + count / 5);
}, 5000);
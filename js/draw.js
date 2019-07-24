(function() {
    const canvas = document.getElementById("tetris-canvas");
    const context = canvas.getContext("2d");
    
    const requestAnimationFrame = (window.requestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || function (callback) {
            setTimeout(callback, 1000 / 30);
        });
    
    canvas.width = 800;
    canvas.height = 600;
    
    function drawGrid() {
        for (let i = 0; i <= TETRIS_ROWS; i += 1) {
            context.moveTo(0, TETRIS_CELL_SIZE * i);
            context.lineTo(TETRIS_COLS * TETRIS_CELL_SIZE, TETRIS_CELL_SIZE * i);
            context.stroke();
        }
    
        for (let i = 0; i <= TETRIS_COLS; i += 1) {
            context.moveTo(TETRIS_CELL_SIZE * i, 0)
            context.lineTo(TETRIS_CELL_SIZE * i, TETRIS_ROWS * TETRIS_CELL_SIZE)
            context.stroke();
        }
    }
    
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    
        drawGrid();
    
        window.requestAnimationFrame(draw);
    }
    
    draw()
})();

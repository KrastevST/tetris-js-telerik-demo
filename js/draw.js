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
    canvas.height = getCellY(TETRIS_ROWS);

    // canvas.style.width = canvas.width + "px";
    // canvas.style.height = canvas.height + "px";

    function drawFigure() {
        const {row, col, obj: {color, cells}} = currentFigure;

        context.fillStyle = color;

        for(let i = 0; i < cells.length; i += 1) {
            for( let j = 0; j < cells[i].length; j += 1) {
                if(!cells[i][j]) {
                    continue;
                }

                context.fillRect(getCellX(col + j), getCellY(row + i), TETRIS_CELL_SIZE, TETRIS_CELL_SIZE);
            }
        }
    }

    function drawTable() {
        for(let i = 0; i < TETRIS_ROWS; i += 1){
            for(let j = 0; j < TETRIS_COLS; j += 1) {
                if(!tetrisTable[i][j]) {
                    continue;
                }

                const color = tetrisTable[i][j];
                context.fillStyle = color;
                context.fillRect(getCellX(j), getCellY(i), TETRIS_CELL_SIZE, TETRIS_CELL_SIZE);
            }
        }
    }
    
    function drawGrid() {
        context.strokeStyle = "white";
        
        for (let i = 0; i <= TETRIS_ROWS; i += 1) {
            context.moveTo(0, getCellY(i));
            context.lineTo(getCellX(TETRIS_COLS), getCellY(i));
            context.stroke();
        }
    
        for (let i = 0; i <= TETRIS_COLS; i += 1) {
            context.moveTo(getCellX(i), 0)
            context.lineTo(getCellX(i), getCellY(TETRIS_ROWS))
            context.stroke();
        }
    }
    
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        context.fillStyle = "black";
        context.fillRect(0, 0, getCellX(TETRIS_COLS), getCellY(TETRIS_ROWS));

        drawFigure();
        drawTable();
        drawGrid();
        
        context.fillStyle = "black";
        context.font = "18pt Arial";
        context.fillText(`Score: ${gameScore}`, getCellX(TETRIS_COLS) + 30, 60);
        context.fillText(`Speed: ${gameSpeed}`, getCellX(TETRIS_COLS) + 30, 90);

        window.requestAnimationFrame(draw);
    }
    
    draw()
})();

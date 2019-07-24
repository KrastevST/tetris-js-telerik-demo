const TETRIS_ROWS = 18;
const TETRIS_COLS = 10;
const TETRIS_CELL_SIZE = 32;

const tetrisTable = Array.from({length: TETRIS_ROWS})
    .map(() => Array.from({length: TETRIS_COLS}).map(() => false));

let x = 10;
let y = 10;

function update() {
    x += 1;
}

setInterval(update, 10);

function getCellX(row) {
    return TETRIS_CELL_SIZE * row;
}

function getCellY(col) {
    return TETRIS_CELL_SIZE * col;
}
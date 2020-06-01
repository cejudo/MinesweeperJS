var DIMENSION = 9;
var MINES = 10;
var board = new Array(DIMENSION);

function initBoard() {
    for (var i = 0; i < DIMENSION; i++) {
        board[i] = new Array(9);
    }
}

function setUpBoard() {
    //Get and add the mines to the board
    for (var i = 0; i < MINES; i++) {
        var minePosition = getMineXY();
        board[minePosition.x][minePosition.y] = -1;
    }
    //Add the clues

}

function getMineXY() {
    return {
        x: getRandomInt(),
        y: getRandomInt()
    };
}

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(DIMENSION);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBoard() {

}
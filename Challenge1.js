/*jshint esversion: 6 */

'use-strict';

let initial_state = [
    [8, 0, 0, 0],
    [4, 2, 0, 0],
    [4, 0, 4, 0],
    [2, 0, 0, 0],
];

console.log("========initial_state=============", initial_state);

let new_tile = Math.random() < 0.9 ? 2 : 4;

let placeNew = (board) => {
    console.log("===========new_tile==========", new_tile);

    let tiles = [];
    let availableTiles = function () {
        board.forEach(function(row, x_index) {
            board.forEach(function(column, y_index){
                if (! board[x_index][y_index]) {
                    tiles.push({x_index : x_index, y_index: y_index});
                }
            });
        });
    };
    availableTiles();

    if (tiles.length === 0) {
        return -1;
    }
    else {
        let random_tile = [];
        let randomAvailableTile = function () {
            random_tile = tiles[Math.floor(Math.random() * tiles.length)];
            board[random_tile.x_index][random_tile.y_index] = new_tile;
            return board;
        };
        return randomAvailableTile();
    }
};

let new_state = placeNew(initial_state);

if (new_state === -1)
    console.log("====No tiles available====", initial_state);
else
    console.log("===new_state===", new_state);
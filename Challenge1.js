/*jshint esversion: 6 */

'use-strict';

let initial_state = [
    [8, 0, 0, 0],
    [4, 2, 0, 0],
    [4, 0, 4, 0],
    [2, 0, 0, 0],
];

console.log("========initial_state=============", initial_state);

let newtile = Math.random() < 0.9 ? 2 : 4;

let placenew = (board) => {
    console.log("===========newtile==========", newtile);

    let tiles = [];
    let availableTiles = function () {
        board.forEach(function(row, xindex) {
            board.forEach(function(column, yindex){
                if (! board[xindex][yindex]) {
                    tiles.push({xindex : xindex, yindex: yindex});
                }
            });
        });
    };
    availableTiles();

    if (tiles.length === 0) {
        return -1;
    }
    else {
        let randomTile = [];
        let randomAvailableTile = function () {
            randomTile = tiles[Math.floor(Math.random() * tiles.length)];
            board[randomTile.xindex][randomTile.yindex] = newtile;
            return board;
        };
        return randomAvailableTile();
    }
};

let new_state = placenew(initial_state);

if (new_state === -1)
    console.log("====No tiles available====", initial_state);
else
    console.log("===new_state===", new_state);
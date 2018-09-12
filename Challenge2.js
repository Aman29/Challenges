/*jshint esversion: 6 */

'use-strict';

let initial_state = [
    [8, 0, 0, 0],
    [4, 2, 0, 0],
    [4, 0, 4, 0],
    [2, 0, 4, 0],
];
let direction = "UP";

console.log("=========initial_state==========", initial_state);

let swipe = (board, direction) => {

    let doUp = function() {
        for (let increment = 0; increment < board.length; increment++) {
            for (let xindex = 0; xindex < board.length; xindex++) {
                for (let yindex = increment; yindex == increment; yindex++) {
                    let nextIndex = (xindex + 1) >= board.length ? xindex : (xindex+1);
                    if (0 !== board[xindex][yindex]) {
                        if (xindex !== nextIndex) {
                            if (board[xindex][yindex] === board[nextIndex][yindex]) {
                                board[xindex][yindex] = board[xindex][yindex] * 2;
                                board[nextIndex][yindex] = 0;
                            }
                        }
                    }
                }
            }
            arrangeTiles();
        }
        return board;
    };

    let arrangeTiles =  function () {
        for (let increment = 0; increment < board.length; increment++) {
            for (let xindex = 0; xindex < board.length; xindex++) {
                for (let yindex = increment; yindex == increment; yindex++) {
                    let nextIndex = (xindex + 1) >= board.length ? xindex : (xindex+1);
                    if (0 === board[xindex][yindex]) {
                        if (0 !== board[nextIndex][yindex]) {
                            board[xindex][yindex] = board[nextIndex][yindex];
                            board[nextIndex][yindex] = 0;
                        }
                    }
                }
            }
        }
    };

    if ("UP" === direction) {
        let afterUpMove = doUp();
        return afterUpMove;
    }
};

let updated_state = swipe(initial_state, direction);
console.log("=========updated_state==========", updated_state);
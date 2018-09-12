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
            for (let x_index = 0; x_index < board.length; x_index++) {
                for (let y_index = increment; y_index == increment; y_index++) {
                    let next_index = (x_index + 1) >= board.length ? x_index : (x_index+1);
                    if (0 !== board[x_index][y_index]) {
                        if (x_index !== next_index) {
                            if (board[x_index][y_index] === board[next_index][y_index]) {
                                board[x_index][y_index] = board[x_index][y_index] * 2;
                                board[next_index][y_index] = 0;
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
            for (let x_index = 0; x_index < board.length; x_index++) {
                for (let y_index = increment; y_index == increment; y_index++) {
                    let next_index = (x_index + 1) >= board.length ? x_index : (x_index+1);
                    if (0 === board[x_index][y_index]) {
                        if (0 !== board[next_index][y_index]) {
                            board[x_index][y_index] = board[next_index][y_index];
                            board[next_index][y_index] = 0;
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
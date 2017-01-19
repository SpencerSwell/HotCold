// guess number
// submit number
//
export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    magicNum: Math.floor(Math.random() * 100) + 1
})


export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = num => ({
    type: ADD_GUESS,
    num: num
});


var TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
var toggleInfoModal = function() {
    console.log("Toggleinfo called");
    return {
        type: TOGGLE_INFO_MODAL,
    };
};

module.exports = {NEW_GAME, newGame, ADD_GUESS, addGuess, TOGGLE_INFO_MODAL, toggleInfoModal};
// exports.NEW_GAME = NEW_GAME;
// exports.newGame = newGame;
// exports.MAKE_GUESS = MAKE_GUESS;
// exports.makeGuess = makeGuess;
// exports.TOGGLE_INFO_MODAL = TOGGLE_INFO_MODAL;
// exports.toggleInfoModal = toggleInfoModal;

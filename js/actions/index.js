// guess number
// submit number
//


export const FEWEST_GUESSES = 'FEWEST_GUESSES';
export const fewestGuesses = (number) => ({
	type: FEWEST_GUESSES,
	num: number

});

let buildPost =(function() {
	const options = {
		method: 'POST',
	    headers: {'Content-Type': 'application/json'},
	};

	return function (body) {
	// return {body: JSON.parse({guessCount}), ...options}
		return Object.assign(
			{},
			options,
		 	{ 
		 		body: JSON.stringify(body)
		 	}
		);

	}

}())

export const fetchFewestGuesses = guessCount => dispatch => {
//	var myRequest = new Request('http://localhost:8081/fewest-guesses', {method: 'POST', body: {"guessCount":"\""+ guessNumber+"\""}});
	const url = new URL ('http://localhost:8081/fewest-guesses');

	return fetch(url, buildPost({guessCount})).then(response => {

		return response.json();
	}).then(data => {
		console.log(data);
	})

}
 

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    magicNum: Math.floor(Math.random() * 100) + 1
});


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

module.exports = {NEW_GAME, newGame, ADD_GUESS, addGuess, FEWEST_GUESSES, fewestGuesses, fetchFewestGuesses, TOGGLE_INFO_MODAL, toggleInfoModal};
// exports.NEW_GAME = NEW_GAME;
// exports.newGame = newGame;
// exports.MAKE_GUESS = MAKE_GUESS;
// exports.makeGuess = makeGuess;
// exports.TOGGLE_INFO_MODAL = TOGGLE_INFO_MODAL;
// exports.toggleInfoModal = toggleInfoModal;

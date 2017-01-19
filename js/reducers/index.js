
import * as actions from '../actions/index';

const emptyState = {
    guessedNumbers: [],
    answer: 34,
    feedback: 'make a guess',
    count: 0,
    fewestGuesses: 0
}

export const mainReducer = (state = emptyState, action) => {
    if (action.type === actions.ADD_GUESS) {
        var response = '';
        var ln = state.answer;
        var un = action.num;
        var diff = Math.abs(ln - un)
        var count = state.count;

        if (diff === 0) {
            response += 'eureka!'
        } else if (diff <= 10) {
            response += 'hot'
        } else if (diff <= 20) {
            response += 'warm'
        } else if (diff <= 30) {
            response += 'coolish'
        } else if (diff <= 40) {
            response += 'cool'
        } else if(diff <= 50) {
            response += 'ice'       
        } else {
            response += 'frozen'
        }
        count++

        return { ...state,
            guessedNumbers: [...state.guessedNumbers, action.num],
            feedback: response,
            count: count,
            fewestGuesses: count
            }
    }

    if(action.type === actions.NEW_GAME) {
        return { ...state,
            answer: action.magicNum,
            count: 0,
            feedback: 'welcome to guess a number',
            guessedNumbers: []
            }
    }

    if (action.type === actions.FEWEST_GUESSES) {
        console.log('Reducer Called');
        return { ...state,
            guessedNumbers: [...state.guessedNumbers],
            feedback: state.feedback,
            count: count,
            fewestGuesses: count
            }
    }

    return state;
};
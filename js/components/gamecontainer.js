import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import Feedback from './feedback'
import Form from './form'
import GuessCount from './guess-count'
import Guesses from './guesses'

const GameContainer = props => {
	const newGuess = (guess) => {
    	props.dispatch(actions.addGuess(guess));
  	};
	return (
		
		<div className="gameContainer">
			<Feedback 
			text={ props.feedback }
			/>
			<hr/>
			<Form 
			onSubmit={newGuess}
			/>
			<GuessCount 
			text={ props.count } 
			/>
			<hr/>
			<Guesses 
			text={ props.guessedNumbers }
			/>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	feedback: state.feedback ,
	count: state.count,
	guessedNumbers: state.guessedNumbers
});


export default connect(mapStateToProps)(GameContainer);
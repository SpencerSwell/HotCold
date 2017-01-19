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

  	
  	const getFewestGuesses = () => {
  		if (props.feedback === "eureka!") {
  			console.log(props.count);
 			props.dispatch(actions.fetchFewestGuesses(props.count));
 			console.log(props.fewestGuesses)

 		}
  	}


  	// if  (props.feedback === "eureka!") {
  		
  	// 		props.dispatch(actions.fewestGuesses(props.count));
  	// 		console.log(props.fewestGuesses);
  	// 		console.log('IT WORKS');
  	// }

	return (
		
		<div className="gameContainer">
			<Feedback 
			text={ props.feedback } 
			onClick = {getFewestGuesses}
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
	guessedNumbers: state.guessedNumbers,
	fewestGuesses: state.fewestGuesses
});


export default connect(mapStateToProps)(GameContainer);
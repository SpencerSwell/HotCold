import React from 'react'
import HelpNew from './help-new'
import GameContainer from './gamecontainer'
import { connect } from 'react-redux'
import * as actions from '../actions'

const MainContainer = (props) => {
  const resetGame = () => {
    props.dispatch(actions.newGame());
  };

	return (
		<div className="MainContainer">
			<HelpNew newGame={resetGame} />
			<GameContainer />
		</div>
	);
}

export default connect()(MainContainer);
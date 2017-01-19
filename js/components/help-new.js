import React from 'react'

const HelpNew = props => {

	return (
		<div className="navbar">
      <button 
      type="submit" 
      onClick={() => window.alert("Type your guess in the box and press the Submit button.")}>
        Help
      </button>
      <button 
      type="submit" 
      onClick={props.newGame}>
        New
      </button>
		</div>
	);
}

export default HelpNew;
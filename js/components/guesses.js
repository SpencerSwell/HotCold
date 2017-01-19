import React from 'react'

const Guesses = props => {

	return (
		<div className="guessbox">
				{props.text.map(n => 
   					<li 
   					key={n}>{n}
   					</li>
   					)}	
		</div>
		)
}

export default Guesses;
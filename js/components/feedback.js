import React from 'react'

const Feedback = props => {



	return (
		<div onClick={props.onClick} 
		className="feedback">
      		{props.text}
		</div>
	);
}

export default Feedback;
import React from 'react'
import './SelectionContainer.css'

const selectionContainer = props => {
	return (
		<div className="selectionContainer">
			<div>
				<h1>Mobilitetsball</h1>
				<h2>350 KR</h2>
				<div className="selectionSection">
					<div>
						<select>
							<option value="White">White</option>
							<option value="Blue">Blue</option>
							<option value="Red">Red</option>
							<option value="Yellow">Yellow</option>
						</select>
					</div>
					<div className="counter">
						<button onClick={props.decrement}>-</button>
						<p>{props.numberOfProducts}</p>
						<button onClick={props.increment}>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default selectionContainer

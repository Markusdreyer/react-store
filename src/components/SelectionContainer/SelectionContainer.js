import React from 'react'
import './SelectionContainer.scss'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import mobilityBall from '../../assets/images/mobility-ball.png'

const selectionContainer = props => {
	return (
		<div className="selection">
			<Image src={mobilityBall} />
			<div className="selection__container">
				<div className="selection__container--header">
					<Link to="/Poop">
						<h1>Mobilitetsball</h1>
					</Link>
					<h2>350 KR</h2>
				</div>
				<div className="selection__section">
					<div>
						<select>
							<option value="White">White</option>
							<option value="Blue">Blue</option>
							<option value="Red">Red</option>
							<option value="Yellow">Yellow</option>
						</select>
					</div>
					<div className="selection__counter">
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

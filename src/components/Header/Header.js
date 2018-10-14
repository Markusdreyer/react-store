import React from 'react'
import App from '../../containers/App'
import { Link } from 'react-router-dom'


const header = props => {
	return (
		<div className="header">
			<Link to="/">
				<p style={{ fontFamily: 'Snell Roundhand' }}>
					mobilitetsball.no
				</p>
			</Link>
			<Link to="/checkout">
				<p>
					<span style={{ fontWeight: 'bold' }}>
						{props.numberOfProducts} {props.conditionalString}
					</span>
					<span> i handlekurven</span>
				</p>
			</Link>
		</div>
	)
}

export default header

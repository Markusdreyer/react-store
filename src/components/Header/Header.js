import React from 'react'
import './Header.css'

const header = props => {
	return (
		<div className="header">
			<p style={{ fontFamily: 'Snell Roundhand' }}>mobilitetsball.no</p>
			<p>
				<span style={{ fontWeight: 'bold' }}>
					{props.numberOfProducts} {props.conditionalString}
				</span>
				<span> i handlekurven</span>
			</p>
		</div>
	)
}

export default header

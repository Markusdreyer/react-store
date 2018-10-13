import React from 'react'
import './Header.css'

const header = () => {
	return (
		<div className="header">
			<p style={{ fontFamily: 'Snell Roundhand' }}>mobilitetsball.no</p>
			<p>
				<span style={{ fontWeight: 'bold' }}>1 ball </span>
				<span>i handlekurven</span>
			</p>
		</div>
	)
}

export default header

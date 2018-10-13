import React from 'react'
import './VideoContainer.css'

const videoContainer = () => {
	return (
		<div className="videoContainer">
			<video width="640" controls>
				<source src="https://staging.coverr.co/s3/mp4/Concerting.mp4" type="video/mp4" />
			</video>
		</div>
	)
}

export default videoContainer

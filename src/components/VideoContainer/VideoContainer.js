import React from 'react'
import './VideoContainer.scss'
import styleVariables from '../../utils/styleVariables';

const videoContainer = () => {

	return (
		<div className="video">
			<video width={`${styleVariables.maxWidth}px`} controls>
				<source src="https://staging.coverr.co/s3/mp4/Concerting.mp4" type="video/mp4" />
			</video>
		</div>
	)
}

export default videoContainer

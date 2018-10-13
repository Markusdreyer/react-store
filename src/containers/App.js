import React, { Component } from 'react'
import './App.css'
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import VideoContainer from '../components/VideoContainer/VideoContainer'
import SelectionContainer from '../components/SelectionContainer/SelectionContainer'
//import axios from 'axios'

class App extends Component {
	state = {
		accesstoken: []
	}

	/*
	fetchAccessToken = () => {
		const url = 'https://apitest.vipps.no/accesstoken/get'
		const config = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				client_id: '9348ff20-29dd-4c91-83f4-48fded1a29f6',
				client_secret: 'eUg0akhoMFc4Sm9Ub3FOaUIwaEM=',
				'ocp-apim-subscription-key': '9b09514fd44141ba9a6d01c4b6a085a8'
			}
		}
		return axios.post(url, config).then((res, rej) => {
			console.log('res', res.data)
			this.setState({
				accesstoken: res.data
			})
		})
    }*/

	render() {
		return (
			<div className="App">
				<Header />
				<PageTitle />
				<VideoContainer />
				<SelectionContainer />
			</div>
		)
	}
}

export default App

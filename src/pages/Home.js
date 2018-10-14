import React, { Component } from 'react'
import axios from 'axios'

import ProductPreview from '../containers/ProductPreview'

import './Home.scss'

const client = axios.create({
	baseURL: 'https://apitest.vipps.no',
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json;charset=UTF-8',
		client_id: '9348ff20-29dd-4c91-83f4-48fded1a29f6',
		client_secret: 'eUg0akhoMFc4Sm9Ub3FOaUIwaEM=',
		'ocp-apim-subscription-key': '9b09514fd44141ba9a6d01c4b6a085a8'
	}
})

class Home extends Component {
	state = {
		accesstoken: [],
		numberOfProducts: 0,
		conditionalString: 'baller'
	}

	componentWillMount = () => {
		this.fetchAccessToken();
	}

	fetchAccessToken = () => {
		return client.post('/accesstoken/get').then((res, rej) => {
			console.log('res', res.data)
			this.setState({
				accesstoken: res.data
			})
		})
	}

	decrement = () => {
		if (!this.state.numberOfProducts <= 0) {
			this.setState({
				numberOfProducts: this.state.numberOfProducts - 1
			}, () => {
				this.numberOfProductsCheck()
				console.log(this.state.numberOfProducts)
			})
		}

	}

	increment = () => {
		this.setState({
			numberOfProducts: this.state.numberOfProducts + 1
		}, () => {
			this.numberOfProductsCheck()
			console.log(this.state.numberOfProducts)
		})

	}

	numberOfProductsCheck = numberOfProducts => {
		if (this.state.numberOfProducts === 1) {
			this.setState({
				conditionalString: 'ball'
			})
		} else {
			this.setState({
				conditionalString: 'baller'
			})
		}
	}

	render() {
		return (
			<div className="App">
				<ProductPreview
					increment={this.increment}
					decrement={this.decrement}
					numberOfProducts={this.state.numberOfProducts} />
			</div>
		)
	}
}
export default Home

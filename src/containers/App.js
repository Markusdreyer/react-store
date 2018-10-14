import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Poop from '../pages/Poop'

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Header conditionalString="1" />
					<PageTitle />
					<Route exact path="/" component={Home} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/poop" component={Poop} />
				</div>
			</Router>
		)
	}
}

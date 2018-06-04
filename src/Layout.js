'use strict';

import React from "react";
import ReactDOM from "react-dom";
import './main.scss';

import Header from "./components/Header"
import Footer from "./components/Footer"

import Navigation from './components/Navigation'
import Main from './components/Main'


export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {title: "Welcome"};
	}

	changeTitle(title) {
		this.setState({title})
	}

	render () {

		return (
				<div>
					<Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title}/>
					<Navigation />
					<Main />
					<Footer />
				</div>
			);

	}
}

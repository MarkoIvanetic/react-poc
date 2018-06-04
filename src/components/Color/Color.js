import React from 'react'

import Slider from './Slider'
import './color.scss';

export default class Color extends React.Component {
		constructor() {
		    super();
		    this.state = {'color':{'R':128,'B':128,'G':128}};
		}

		changeColorComponent(color, component) {
			let temp = this.state.color;
			temp[component] = color;
		    this.setState({temp})
		}

	render () {
		let background = `rgb(${this.state.color.R}, ${this.state.color.B}, ${this.state.color.G})`;
		return (
			  <div style={{background : background}}>
			    <Slider changeColorComponent={this.changeColorComponent.bind(this)} colorComponent="R" />
			    <Slider changeColorComponent={this.changeColorComponent.bind(this)} colorComponent="B" />
			    <Slider changeColorComponent={this.changeColorComponent.bind(this)} colorComponent="G" />

			    <span>{JSON.stringify(this.state.color)}</span>

			  </div>
			);
	}
}
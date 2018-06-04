import React from 'react'

export default class Slider extends React.Component {
	handleChange(e){
		const colorValue = e.target.value;
		this.props.changeColorComponent(colorValue, this.props.colorComponent);
	}

	render () {
		return (
				<div className="slider-container">
				  {this.props.colorComponent}: <input className="slider" type="range" min="0" max="255" value={this.props.value} onChange={this.handleChange.bind(this)}/>
				</div>
			);
	}
}
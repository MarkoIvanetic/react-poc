import React from 'react'

import './names.scss';
import name_list from './name_list';

export default class Names extends React.Component {
		constructor() {
		    super();
		    this.state = {filter: ''}
		}

	handleChange(e){
		this.setState({
			filter: e.target.value
		});
	}
	// componentWillMount() {
	// 	console.log("Component will mount");
	// }
	// componentDidMount() {
	// 	console.log("Component did mount");
	// }
	// componentWillReceiveProps() {
	// 	console.log("Component will recieve props");
	// }
	// componentDidUpdate() {
	// 	console.log("Component did update");
	// }
	// shouldComponentUpdate() {
	// 	console.log("Component should update?");
	// 	return true;
	// }
	// componentWillUpdate() {
	// 	console.log("Component will update");
	// }
	// componentDidUpdate() {
	// 	console.log("Component did update");
	// }
	// componentWillUnmount() {
	// 	console.log("Component will unmount");
	// }
	render () {

		let filtered_list = name_list
			.filter((item) => item.includes(this.state.filter))
			.map((item) => {return <li key={item}>{ item }</li>})

		return (
			  <div>
			  	<input onChange={this.handleChange.bind(this)} value={this.state.filter}/>
		    	<ul>
				  {filtered_list}
				</ul>
			  </div>

			);
	}
}
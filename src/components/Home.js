import React from 'react'

export default class Home extends React.Component {
	// constructor (){
	// 	super();
	// 	this.name = "Will";
	// }

	// getVal(val) {
	// 	return "Value " + val;
	// }

	render () {
		const list = [1,2,3,4];
		return (
				<div>
					Home
					<ul>
					  { list.map((item) => <li key={item}>{ item }</li> )}
					</ul>
				</div>
			);
	}
}
'use strict';

import React from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

	render () {
		return (
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/names">Names</Link></li>
						<li><Link to="/color">Color</Link></li>
						<li><Link to="/remoting">Remoting</Link></li>
					</ul>
				</nav>	
			);
	}
}

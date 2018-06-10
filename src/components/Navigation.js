'use strict';

import React from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

	render () {
		return (
				<nav>
					<ul className="nav nav-tabs">
						<li className="uib-tab nav-item"><Link to="/console">Console</Link></li>
						<li className="uib-tab nav-item"><Link to="/linter">Linter</Link></li>
						<li className="uib-tab nav-item"><Link to="/recreate">Re-create Object Graph Handlers</Link></li>
						<li className="uib-tab nav-item"><Link to="/remoting">Remoting</Link></li>
					</ul>
				</nav>	
			);
	}
}

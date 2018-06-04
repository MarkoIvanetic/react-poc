import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Names from './Names/Names'
import Color from './Color/Color'
import Remoting from './Remoting/Remoting'

export default class Main extends React.Component {

	render () {
		return (
			    <Switch>
			      <Route exact path='/' component={Home} />
			      <Route path='/names' component={Names} />
			      <Route path='/color' component={Color} />
			      <Route path='/remoting' component={Remoting} />
			    </Switch>
			);
	}
}



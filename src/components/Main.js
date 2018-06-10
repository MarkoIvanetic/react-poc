import React from 'react'
import { Switch, Route, IndexRoute } from 'react-router-dom'
import Console from './Console/Console'
import Linter from './Linter/Linter'
import Recreate from './Recreate/Recreate'
import Remoting from './Remoting/Remoting'

export default class Main extends React.Component {

	render () {
		return (
			    <Switch>
			      <Route exact path="/" component={Console}/>
			      <Route path='/console' component={Console} />
			      <Route path='/linter' component={Linter} />
			      <Route path='/recreate' component={Recreate} />
			      <Route path='/remoting' component={Remoting} />
			    </Switch>
			);
	}
}



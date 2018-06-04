import React from 'react'
import remoteActions from '../../utils/remoting-service'


export default class Remoting extends React.Component {

    callRemoteAction(e) {
        console.log("Requesting...");
        remoteActions.getObjectGraphHandlers()
	        .then(function(response) {
	                console.log(response);
	            });
    }

	render () {
		return (
			  <div>
			  	<button onClick={this.callRemoteAction.bind(this)}>Remote</button>
			  </div>
			);
	}
}
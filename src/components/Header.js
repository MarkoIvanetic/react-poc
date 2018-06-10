"use strict";

import React from "react";
import remoteActions from "../utils/remoting-service";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { headerInfo: [] };


    remoteActions.getHeaderInformation().then(response => {
      let formattedResponse = [];
      for (var key in response) {
        formattedResponse.push({ name: key, value: response[key] });
      }
      this.setState({ headerInfo: formattedResponse });
    });
  }

  componentDidMount() {
    remoteActions.getHeaderInformation()
    .then(response => {
      let formattedResponse = [];
      for (var key in response) {
        formattedResponse.push({ name: key, value: response[key] });
      }
      this.setState({ headerInfo: formattedResponse });
    });
    remoteActions.getObjectGraphInitiators()
    .then(indicators => {
    	// this.props.changeTitle(title);
    });



  }

  render() {
    return (
      <header>
        <h1>Elastic Console</h1>
        <div className="section offer-details">
          <div className="secion-body section-info">
            {this.state.headerInfo.map(item => (
              <div key={item.name}>
                <span className="offer-detail-label">{item.name}: </span>{" "}
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>
    );
  }
}

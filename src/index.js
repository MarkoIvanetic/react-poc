'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';

import Layout from "./Layout";
import './main.scss';


// ReactDOM.render(<Index />, document.getElementById("index"));
// ReactDOM.render(<Layout />, document.getElementById("app-container"));

const app = document.getElementById("app-container");

ReactDOM.render(
	  <HashRouter>
	     <Layout />
	  </HashRouter>,  app)
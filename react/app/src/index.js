import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter, Route, Link } from 'react-router-dom'


import Home from './routes/Home.js'
import Store from './routes/Store.js'





const app = document.getElementById('app');
ReactDOM.render(
	<BrowserRouter>
		<Route path="/" component={ Home } />
		<Route path="/Store" component={ Store }/>
	</BrowserRouter>
	,app)

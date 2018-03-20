//require('./modulo1.js');
//require('./modulo2.js');
import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
	render(){
		return(
			<h1>hola muperroo</h1>
			);
	}
}


const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app)
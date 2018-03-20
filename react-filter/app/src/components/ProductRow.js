import React from "react"

export default class ProductRow extends React.Component{

	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<h6>gg {this.props.product}</h6>
			</div>
			);
	}
}
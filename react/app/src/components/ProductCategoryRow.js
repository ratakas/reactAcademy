import React from "react"

export default class ProductCategoryRow extends React.Component{

	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<h4>pp {this.props.category}</h4>
			</div>
			);
	}
}
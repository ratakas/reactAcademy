import React from "react"

import ProductCategoryRow from "./ProductCategoryRow.js"
import ProductRow from "./ProductRow.js"

export default class ProductTable extends React.Component{

	constructor(){
		super()
	}

	render(){
	let row=[]
	let last_category=null

	if (this.props.filter != null &&  this.props.products != null) {
		this.props.products.forEach( (product) => {
			let filter= this.props.filter
			if (product.name.indexOf(filter) > -1) {
				if (product.category!= last_category) {
					row.push(<ProductCategoryRow category={product.category} key={product.category} />);
				}	
				row.push(<ProductRow product={product.name} key={product.name} />);
				last_category=product.category;
			}
		})
	}else if ( this.props.products != null) {
		console.log(this.props.products)
		
		this.props.products.forEach( (product) => {
			console.log(product);
			if (product.category!= last_category) {
				row.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}	
			row.push(<ProductRow product={product.name} key={product.name} />);
			last_category=product.category;
			
		})

	}else {
		<h1>loading</h1>
	}
		return(
			<div>
				{row}
			</div>
			);
	}
}
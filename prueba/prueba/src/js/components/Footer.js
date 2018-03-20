import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <div>
      <div>
      	<div class="boxResultado">
		  <h2>Resultado</h2>
		  <h3>{this.props.state.nombre}  {this.props.state.apellido}</h3>
      	<strong>{this.props.state.email}</strong>
		  <hr/>
		  <p> 
		  <label>Tamaño: </label>{this.props.state.ancho} x {this.props.state.largo} mm. <br/>
		  <label>cantidad de tintas: </label>{this.props.state.numTintas} <br/>
		  <label>costo mínimo de impresión:</label> $ {parseInt(this.props.state.costoTotal)}<br/>
		   <label>precio cotizado por cada cantidad de etiquetas solicitada:</label> $ {parseInt(this.props.state.precio)}<br/>
		  </p>
		 </div>
      </div>
      </div>
    );
  }
}

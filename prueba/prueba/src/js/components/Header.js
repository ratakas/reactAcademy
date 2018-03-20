import React from "react";
export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div class="row">

      <div class="col-md-12">
      <div class="panel panel-primary">
        <div class="panel-body">
         <h1>Cotización de impresión de etiquetas</h1>
        </div>
      </div>
      </div>
     
      </div>
    );
  }
}

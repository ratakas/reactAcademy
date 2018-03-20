/*No tenia mucho tiempo y me faltaron muchos datos...*/
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      value: 'Please write an essay about your favorite DOM element.',
      nombre: 'Roberto',
      apellido: 'Castillo',
      email:'Roberto6m@hotmail.com',
      numTintas:1,
      ancho:10,
      largo:10,
      tipoImp:'0',
      tipoPapel:'0',
      maquinaImp:'0',
      pDesperdicioPapel:40,
      pUtilidad:40,
      numEtiquetas:2,
      valueMaquinaImp:[[10,2000,5],[6,1000,10],[2,100,20]],
      'costo':0,
      'costoTotal':0,
      'precio':0
    };
    
  }
  changeTitle(title) {
    this.setState({title});
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    this.handleSubmit(event);
  }
  handleChangeSelect(event){
    const name = event.target.name;
    this.setState({ [name]: event.target.value});
    this.handleSubmit(event);
  }
  handleSubmit(event) {
       let area= this.getArea();
      let costoPapel= this.getCostoPapel();
      let tiempoImp= this.getTiempoImp();
      let costoOperador= this.getcostoOperador(tiempoImp);
    if (this.state.tipoImp== '0') {
      console.log('pasa1');
      this.state.costoTotal=(area* this.state.numEtiquetas*costoPapel)+(tiempoImp*costoOperador);
      this.state.costo=this.state.costoTotal/this.state.numEtiquetas;
      this.state.precio=this.state.costoTotal+(this.state.pUtilidad*100)
    }else if (this.state.tipoImp== '1') {
      this.state.costoTotal=((area+(this.state.pDesperdicioPapel*100))*this.state.numEtiquetas* costoPapel)+ (((this.state.valueMaquinaImp[parseInt(this.state.maquinaImp)][0]*60)*this.state.numTintas))*costoOperador ;
      this.state.costo=this.state.costoTotal/this.state.numEtiquetas;
      this.state.precio=this.state.costoTotal+(this.state.pUtilidad*100)
    }else if (this.state.tipoImp== '2') {
      this.state.costoTotal=(area* this.state.numEtiquetas*costoPapel)+((this.state.valueMaquinaImp[parseInt(this.state.maquinaImp)][0]*60)*costoOperador)+(tiempoImp*costoOperador)
      this.state.costo=this.state.costoTotal/this.state.numEtiquetas;
      this.state.precio=this.state.costoTotal+(this.state.pUtilidad*100)
    }
    event.preventDefault();
  }
  getArea(){
    return (this.state.ancho*0.0393701)*(this.state.largo*0.0393701);
  }
  getCostoPapel(){
    /*costo de papel
    area * tipo de papel
    tipo de papel = 
      normal= 2
      periodico= 5
      fotografia=10
    */
    let costoPapel=0;
    if (this.state.tipoPapel=='0') {
      costoPapel= 2* this.getArea();
    }else if (this.state.tipoPapel=='1') {
      costoPapel= 5* this.getArea();
    }else if (this.state.tipoPapel=='2') {
      costoPapel= 10* this.getArea();  
    }
    return costoPapel;
  }
  getTiempoImp(){
    /* 
    tiempo imp= tiempo preparacion maquina+ (alto/velocidad)
    pasar a minutos
    */
    let tiempoImp=(this.state.valueMaquinaImp[parseInt(this.state.maquinaImp)][0]*60)+((this.state.largo*0.0393701)/this.state.valueMaquinaImp[parseInt(this.state.maquinaImp)][2]);
    return tiempoImp;
  }
  getcostoOperador(tiempoImp){
    //return (this.state.pUtilidad*100)/tiempoImp;
    return 10*60;
  }
  render() {
    return (
      <div>
      <Header/>
      <div class="row">
      <div class="col-md-6">
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div class="col-md-6">
              <div class="form-group">
                <label for="nombre"> Nombres</label>
                <input type="text" class="form-control" name="nombre" onChange={this.handleInputChange.bind(this)} value={this.state.nombre}/>
              </div>
              <div class="form-group">
                <label for="apellido"> Apellidos</label>
                <input type="text" class="form-control"  name="apellido" onChange={this.handleInputChange.bind(this)} value={this.state.apellido} />
              </div>
              <div class="form-group">
                <label for="email">Correo Electronico:</label>
                <input type="email" class="form-control" name="email" onChange={this.handleInputChange.bind(this)} value={this.state.email}/>
              </div>
            {/*Cotización*/}
            <div class="form-group">
                <label for="numTintas"> Cantidad de Tintas</label>
                <input type="number" class="form-control" name="numTintas" onChange={this.handleInputChange.bind(this)} value={this.state.numTintas}/>
            </div>
            <div class="form-group">
                <label for="ancho"> Ancho</label>
                <input type="number" class="form-control" name="ancho" onChange={this.handleInputChange.bind(this)} value={this.state.ancho}/>
            </div>
            <div class="form-group">
                <label for="largo"> Largo</label>
                <input type="number" class="form-control" name="largo" onChange={this.handleInputChange.bind(this)} value={this.state.largo}/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
                <label for="tipoImp"> Tipo de Impresion</label>
                <select class="form-control" value={this.state.tipoImp} onChange={this.handleChangeSelect.bind(this)} name="tipoImp">
                  <option value="0">digital</option>
                  <option value="1">flexográfica</option>
                  <option value="2">formas continuas</option>
              </select>
            </div>
            <div class="form-group">
                <label for="tipoPapel"> Tipo de papel</label>
                <select class="form-control" value={this.state.tipoPapel} onChange={this.handleChangeSelect.bind(this)} name="tipoPapel">
                  <option value="0">Normal</option>
                  <option value="1">Periodico</option>
                  <option value="2">Fotografia</option>
              </select>
            </div>
            <div class="form-group">
                <label for="maquinaImp">Maquina Impresion</label>
                <select class="form-control" value={this.state.maquinaImp} onChange={this.handleChangeSelect.bind(this)} name="maquinaImp">
                  <option value="0">Maquina Grande</option>
                  <option value="1">Maquina Mediana</option>
                  <option value="2">Maquina Pequeña</option>
              </select>
            </div>
            <div class="form-group">
                <label for="pDesperdicioPapel"> Porcentae Desperdicio de Papel</label>
                <input type="number" class="form-control" name="pDesperdicioPapel" onChange={this.handleInputChange.bind(this)} value={this.state.pDesperdicioPapel}/>
            </div>
            <div class="form-group">
                <label for="pUtilidad"> Porcentaje utilidad</label>
                <input type="number" class="form-control" name="pUtilidad" onChange={this.handleInputChange.bind(this)} value={this.state.pUtilidad}/>
            </div>
            <div class="form-group">
                <label for="numEtiquetas"> Cantidad Etiquetas</label>
                <input type="number" class="form-control" name="numEtiquetas" onChange={this.handleInputChange.bind(this)} value={this.state.numEtiquetas}/>
            </div>
          </div>
        <button type="submit" class="btn btn-default">Cotizar</button>
        </form>
      </div>
      <div class="col-md-6">
        <Footer state={this.state}/>
      </div>
      </div>
      </div>  
      );
  }
}

import React from "react";
import Formulario from "../Formulario/formulario";
import Tarjeta from "../Tarjeta/tarjeta";
class Registro extends React.Component {
  state={
    form:{
      pabellon:'',
      encargado:'',
      area:''
    }
  }

  manejarCambios=(e)=>
  {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })
  }
  render() {
    return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6"><Formulario onChange={this.manejarCambios} formValues={this.state.form}></Formulario></div>
          <div className="col-6"><Tarjeta  pabellon={this.state.form.pabellon}
                  encargado={this.state.form.encargado}
                  area={this.state.form.area}></Tarjeta> </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Registro;

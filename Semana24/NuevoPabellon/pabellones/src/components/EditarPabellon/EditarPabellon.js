import React, { Component } from "react";
import axios from "axios";
import { URL_BACKEND } from "../../enviroments/enviroment";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
class EditarPabellon extends Component {
  state = {
    loading: true,
    error: null,
    pabellons:{}
  };
  manejarSubmit = (e) => {
    e.preventDefault();
    if(this.state.pabellons.pab_nom.trim() ==='')
    {
        this.setState({
            error:true
        })
    }
    else{
        let misHeaders={
            "Content-Type":"application/json"
        };
        let data = {
            pabellon:{
                ...this.state.pabellons
            }
        }
        console.log(this.state.pabellons);
        axios.put(`${URL_BACKEND}api/pabellon`,data,{misHeaders}).then((rpta)=>{
            if(rpta.status===200)
            {
                Swal.fire(
                    'Actualizado',
                    'Pabellon actualizado',
                    'success'
                )
            }
            else{
                console.log("Error al actualziar");
            }
        })
    }
  };
  manejarCambio = e => {
    this.setState({
      pabellons: {
          ...this.state.pabellons,
          [e.target.name]:e.target.value
      }
    });
  };
  componentDidMount() {
    this.obtenerData();
  }
  obtenerData() {
    this.setState({ loading: true, error: null });
    const id = this.props.match.params.pabId;
    axios
      .get(`${URL_BACKEND}api/pabellon/${id}`)
      .then(rpta => {
        this.setState({ loading: false,pabellons:rpta.data.pabellon});
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  }
  render() {
    if (this.state.loading) {
      return "Cargando...";
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.manejarSubmit}>
              <div className="form-group">
                <label>Nombre Pabellon</label>
                <input
                  type="text"
                  name="pab_nom"
                  onChange={this.manejarCambio}
                  value={this.state.pabellons.pab_nom}
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(EditarPabellon);

import React, { Component } from "react";
import { URL_BACKEND } from "../../enviroments/enviroment";
import { MDBDataTable } from "mdbreact";
import {Link} from 'react-router-dom'

export default class Pabellon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pabellones: null,
      cargando: false,
      data: {}
    };
  }
  async cargarPabellones() {
    let response = await fetch(`${URL_BACKEND}api/pabellon`);
    let pabellonesJSON = await response.json();
    let filas = [];
    pabellonesJSON.content.forEach((pabellon, i) => {
      let objFila = {
        nro: i + 1,
        pab_id: pabellon.pab_id,
        pab_nom: pabellon.pab_nom,
        createdAt: pabellon.createdAt,
        updatedAt: pabellon.updatedAt,
        actions: (
          <Link className="btn btn-info" to={`/pabellones/${pabellon.pab_id}/edit`}>
            Editar
          </Link>
        )
      };
      filas.push(objFila);
    });
    let data = {
      columns: [
        {
          label: "#",
          field: "nro",
          sort: "asc"
        },
        {
          label: "Id",
          field: "pab_id",
          sort: "asc"
        },
        {
          label: "Name",
          field: "pab_nom",
          sort: "asc"
        },
        {
          label: "Fecha de Creacion",
          field: "createdAt",
          sort: "asc"
        },
        {
          label: "Fecha de Actualizacion",
          field: "updatedAt",
          sort: "asc"
        },
        {
          label: "Acciones",
          field: "actions",
          sort: "asc"
        }
      ],
      rows: filas
    };
    console.log(pabellonesJSON);
    this.setState({
      pabellones: pabellonesJSON,
      cargando: false,
      data: data
    });
  }
  componentDidMount() {
    this.cargarPabellones();
  }
  render() {
    if (this.state.cargando === true) {
      return <div> cargando.... </div>;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {" "}
            {this.state.data.length === 0 ? (
              <div> No hat datos </div>
            ) : (
              <MDBDataTable striped bordered hover data={this.state.data} />
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

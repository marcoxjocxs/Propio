import React, { Component } from "react";

export default class Tarjeta extends Component {
  render() {
    return (
        <div>
        <label>
            Nombre Pabellon: {this.props.pabellon}
        </label>
        <br/>
        <label>
            Encargado: {this.props.encargado}
        </label>
        <br/>
        <label>
            Area: {this.props.area}
        </label>
    </div>
    );
  }
}

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Productos from "./Components/Productos"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { id: 1, nombre: "leche", precio: 4.2 },
        { id: 2, nombre: "arroz", precio: 2.2 },
        { id: 3, nombre: "manjar", precio: 5.2 }
      ],
      producto: {}
    };
  }

  render() {
    return (
      <div>
        <Navbar marca={"Codigo"} />
        <Productos productos={this.state.productos}/>
      </div>
    );
  }
}

export default App;

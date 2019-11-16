//Snippet  para crear toda la clase => rcc
import React, { Component } from "react";
export default class Productos extends Component {
  //Snippet para crear el construcctor => con
  constructor(props) {
    super(props);
    console.log("Constructor de los productos");
    this.state = {
      productos: props.productos,
      producto: {}
    };
  }
  seleccionarProducto = prod => {
    console.log(prod);
    this.setState({
      producto: prod
    });
  };
  componentDidMount() {
    console.log("Productos ComponentDidMount");
  }
  generarAleatorio=()=>
  {
    let productoTemporal={
        id:Math.floor(Math.random()*(50-5))+5,
        nombre:"Producto Aleatorio",
        precio:Math.random()*(10000-1000)+1000
    };
    this.setState({
        //Estamos sobreescribiendo los productos pero antes guardamos lo que teniamos con "....this.atate.productos"
        // y lo que va despues de la coma es lo que se va a insertar, en este caso el objeto aleatorio productoo
        productos:[...this.state.productos,productoTemporal]
    })
  }
  render() {
    console.log("Productos Render");
    let { productos } = this.state;
    return (
      <div>
        {" "}
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod, indice) => (
              <tr key={indice}>
                <td>{prod.id}</td>
                <td>{prod.nombre}</td>
                <td>{prod.precio}</td>
                <td>
                  <button className="btn btn-block btn-danger"
                    onClick={() => {
                      this.seleccionarProducto(prod);
                    }}
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
        this.state.producto.nombre ? (<p>Producto Seleccionado:{this.state.producto.nombre}</p>):(<p>Productos no seleciconado</p>)
        }
        <button onClick={this.generarAleatorio}>Generar un producto aleatorio</button>
      </div>
    );
  }
}

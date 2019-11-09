import React, { Fragment } from "react";
const Tabla = props => {
    console.log(props);
    let llamarAlPadre=(e)=>{
        props.funcion();
    }
  return (
    <Fragment>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((mascota, indice) => (
              <tr key={indice}>
                <td>{mascota.nombre}</td>
                <td>{mascota.tipo}</td>
                <td><button onClick={
                    ()=>{
                        props.funcion(mascota.nombre)
                    }
                }>Enviar {mascota.nombre}</button></td>
              </tr>
            )
            )
            }
        </tbody>
      </table>
      <button onClick={llamarAlPadre}>Referencia a una funcion</button>
      <button onClick={()=>{
          props.funcion("Marco");
      }}>Click al padre | enviar datos a una funcion padre</button>
    </Fragment>
  );
};

export default Tabla;

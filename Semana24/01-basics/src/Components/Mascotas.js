//imrc
import React from "react";
import Mascota from './/Mascota';
//sfc
const Mascotas = (props) => {
  console.log(props);
  props.mascotas.map((m, indice) => {
    console.log(indice);
    console.log(m);
  })
  return (
    <div>
      {props.mascotas.map((m,indice) => {
        return (<Mascota objMascota={m} key={indice}/>);
      })
      }
    </div>
  );
};

export default Mascotas;

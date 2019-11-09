import React from 'react';
import Formulario from './Components/Formulario'
import Mascotas from './Components/Mascotas';
import Tabla from './Components/tabla'
function App() {
  let mascotas = [
    {
      nombre:'Scooby',
      tipo:'Perro'
    },
    {
      nombre:'Garfield',
      tipo:'Gato'
    }
  ]
  let respuesta = "No hay respuesta";
  let padre = (nombre)=>{
    console.log('Imprimiendo el padre');
    console.log(nombre);
    respuesta=nombre;
  }
  return (
    <div className="App">
      <p>{respuesta}</p>
      <Formulario Subtitulo={'Formulario del Registro de Usuario'}
      descripcion={'Descripcion del Formulario'}/>
      <Mascotas mascotas={mascotas}></Mascotas>
      <Tabla data={mascotas} funcion={padre} />
    </div>
  );
}

export default App;

window.onload = function(){
    let btnObtenerDatos = document.getElementById("obtenerDatos");
    let inputNombre = document.getElementById("nombre");
    let inputDireccion = document.getElementById("direccion");
    let btnEnviarDatos = document.getElementById("enviarDatos");
    btnObtenerDatos.onclick = function(){
        //con una peticion de tipo GET

        fetch("https://prueba-14736.firebaseio.com/restaurantes.json").then((respuesta) => {
            return respuesta.json();
        }).then((respuestaJson) => {
            console.log(respuestaJson);
        }).catch((error) => {
            console.log(error);
        });
    }
    // btnEnviarDatos.onclick = function(){}
    btnEnviarDatos.onclick = () =>{
        let nombre=inputNombre.value;
        let direccion = inputDireccion.value;
        let objRestaurante = {
            nombre:nombre,
            direccion:direccion
        }
        let configuracion = {
            method: 'POST',
            //body = los datos que vamos a enviar al servidor
            body: JSON.stringify(objRestaurante),
            //recordemos que indicamos que tipo de datos estamos enviando
            headers:{'Content-Type':'application/json'}

        }
        //para la peticion POST me esta recibiendo la direccion donde hara la peticion y la configuracion de esa peticion
        fetch("https://prueba-14736.firebaseio.com/restaurantes.json",configuracion).then((respuesta)=>{
            return respuesta.json();
        }).then((respuestaJSON)=>{console.log(respuestaJSON)});
    }

}
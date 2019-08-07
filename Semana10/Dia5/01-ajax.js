window.onload=function()
{
    var btnTraerDatos = document.getElementById("btnTraerDatos");

    var tabla = document.getElementById("tabla");
    // xhr = XMLHttpRequest , solicitudHTTPXML



    function ponerDatos(personas){
        tabla.innerHTML=`<thead>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Foto</th>
        </thead>`
        var tbody=document.createElement("tbody");
        tabla.appendChild(tbody);
        personas.forEach(function(persona){
            var tr=document.createElement("tr");
            var tdId=document.createElement("td");
            tdId.innerHTML=persona.id;
            tr.appendChild(tdId);
            var tdNombre=document.createElement("td");
            tdNombre.innerHTML=persona.first_name;
            tr.appendChild(tdNombre);

            var tdApellido=document.createElement("td");
            tdApellido.innerHTML=persona.last_name;
            tr.appendChild(tdApellido);

            var tdCorreo=document.createElement("td");
            tdCorreo.innerHTML=persona.email;
            tr.appendChild(tdCorreo);

            var avatar=document.createElement("img");
            avatar.setAttribute("src",persona.avatar);

            var tdImagen = document.createElement("td");
            tdImagen.appendChild(avatar);
            tr.appendChild(tdImagen);
            tbody.appendChild(tr);
        })
    }

    btnTraerDatos.onclick = function(){

        //cREANDO MI OBJETO xhr
        var xhr = new XMLHttpRequest();
        //console.log(xhr);
        //readystatedevolvera el estado actual del objeto (de la comunicacion que esta tenniendo )
        //(va de 0 a 4 dependendo de que evento haya ocuriido)
         
        console.log("readyState",xhr.readyState);
        //onreadystatechange estara pendiente del readyState

        xhr.onreadystatechange = function()
        {
            switch(xhr.readyState)
            {
                case 1:
                    console.log("Se ha ejecutado la funcion open()");
                    break;
                case 2:
                    console.log("Se ha disparado la peticion http");
                    break;
                case 3:
                    console.log("Ya estamos descargando los datos");
                    break;
                case 4:
                    console.log("Ya tenemos los datos, la operacion termino");
                    console.log("el codigo de estaod es : "+xhr.status);
                    var json=JSON.parse(xhr.responseText)
                    console.log("el contenido solictud es :", json.data);
                    ponerDatos(json.data);
                    break;
                default:
                    console.log("Ha ocurrido un error inesperado");
            }
        }
        //.open recibira como variable el tipo de peticion (GET,POST) y la direccion URL de la API que nos dara  Los datos
        //Llegara hasta 1 (readystate)
        xhr.open("GET","https://reqres.in/api/users?page=4");
        //Segun lo que hayamos configurado en. open ejecutara la solicitud http
        xhr.send(null);



    }
}
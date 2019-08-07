window.onload = function () {
    var inputNombre = document.getElementById("inputNombre");
    var inputTrabajo = document.getElementById("inputTrabajo");
    var btnCrear = document.getElementById("btnCrear");
    var divAlertas = document.getElementById("alertas");

    btnCrear.onclick = function (evt) {
        evt.preventDefault();
        var trabajador = {
            name: inputNombre.value.trim(),
            job: inputTrabajo.value.trim()
        }

        var xhr = new XMLHttpRequest();


        //console.log(xhr)
        //Limitamos el tiempo de respuesta de nuestra peticion cambiando la propiedad timeout de xhr , el tiempo es :

        xhr.timeout = 1500;

        xhr.ontimeout = function () {
            console.log("Tiempo de espera superado");
        }

        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 1:
                    {
                        console.log("Configurando");
                        break;
                    }
                case 2:
                    {
                        console.log("Enviando los datos....");
                        break;
                    }
                case 3:
                    {
                        console.log("ñeeee cargando");
                        break;
                    }
                case 4:
                    {
                        // evaluamos el estado de nuestro objeto xhr, y si obtenemos el status correcto 201 --  
                        // -- convertimos la respuesta a un objeto
                        // 201 significa que el estado creado
                        if (xhr.status == 201) {
                            var json = JSON.parse(xhr.responseText);
                            console.log(json);
                            console.log("Hecho");
                            divAlertas.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Que paso Wey Acaso me llamaste : ${json.name}</strong> Pues igual te aviso que vamos por unos tacos y tortas de chuleta entrele WEY! Acepta :<strong> ${json.job} </strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>`
                        }
                        else {
                            console.log("Respues obtenida pero status extraño");
                        }

                        break;
                    }
                default:
                    {
                        console.log("Algo inesperado ha pasado");
                        break;
                    }
            }
        }
        // .open() pedira dos parametros,  el tipo de peticion (GET / POST) y la direccion donde se hara la peticion 
        xhr.open("POST", "https://reqres.in/api/users");

        //El setRequestHeader nos pide 2 parametros
        //Cuando se hace una peticion POST
        //tenemos que indicar que tipos de datos estan viajando y esta informacion se configura en las cabeceras ("Headers") de nuestra peticion

        xhr.setRequestHeader("Content-Type", "application/json");

        //Convertimos nuestro onjetito a Texto para que pueda ser enviado
        xhr.send(JSON.stringify(trabajador));
    }
}
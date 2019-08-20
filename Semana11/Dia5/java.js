window.onload = function () {
    var inputBuscar = document.getElementById("buscar");
    var btnBuscar = document.getElementById("btnbuscar");
    var formBusqueda = document.getElementById("formBusqueda");
    var divcargar = document.getElementById("cargar")
    var divVacio = document.getElementById("divVacio");
    var cuerpo = document.getElementById("tbody");
    var contenedorTabla = document.getElementById("contenedorTabla");
    var map;

    formBusqueda.onsubmit = function (evento) {
        evento.preventDefault();

        divVacio.setAttribute("hidden", "true");
        cuerpo.innerHTML = "";
        contenedorTabla.setAttribute("hidden", "true")
        var busqueda = inputBuscar.value;
        buscarLugar(busqueda);
        /* console.log("Haciendo submit"); */
    }

    //Funcion para hacer la busqueda del lugar en la API de lugares
    function buscarLugar(busqueda) {
        /* console.log("Cargando..."); */
        divcargar.removeAttribute("hidden");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                divcargar.setAttribute("hidden", "true");
                var gata = JSON.parse(xhr.responseText).Results;
                console.log(gata);
                dibujarTabla(gata);

            }
        }
        xhr.open("GET", `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busqueda}`);
        xhr.setRequestHeader("x-rapidapi-host", "devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "6755d8ae0fmsh447735a8e4903fdp1fd31djsn9a0e060c13d0");

        xhr.send();


    }

    function dibujarTabla(gata) {
        if (gata.lenght == 0) {
            divVacio.removeAttribute("hidden");
            //no hay resultados
        } else {
            //Si hay resultados

            gata.forEach(function (elemento, i) {
                var tr = document.createElement("tr");
                var tdNro = document.createElement("td");
                tdNro.innerHTML = (i + 1);
                tr.appendChild(tdNro);
                var tdNombre = document.createElement("td");
                tdNombre.innerHTML = elemento.name;
                tr.appendChild(tdNombre);
                var tdTipo = document.createElement("td");
                tdTipo.innerHTML = elemento.type;
                tr.appendChild(tdTipo);
                var tdPais = document.createElement("td");
                tdPais.innerHTML = elemento.c;
                tr.appendChild(tdPais);
                var tdLongitud = document.createElement("td");
                tdLongitud.innerHTML = elemento.lon;
                tr.appendChild(tdLongitud);
                var tdLatitud = document.createElement("td");
                tdLatitud.innerHTML = elemento.lat;
                tr.appendChild(tdLatitud);

                var btnVer = document.createElement("button");
                btnVer.innerHTML = "<i class='fas fa-eye'></i>"
                btnVer.setAttribute("class", "btn btn-secondary");

                btnVer.onclick = function () {
                    $('#modalMapa').modal('show');

                    //Centrar el mapa en una coordenada especifica
                    map.setCenter(new google.maps.LatLng(elemento.lat,elemento.lon));
                };
                tr.appendChild(btnVer);

                cuerpo.appendChild(tr);

            })
            contenedorTabla.removeAttribute("hidden");
        }   
    }

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 15
        });
    }
    initMap();
}
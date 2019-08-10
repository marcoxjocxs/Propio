window.onload=function()
{
    var inputBuscar=document.getElementById("buscar");
    var btnBuscar=document.getElementById("btnbuscar");
    var formFormulario=document.getElementById("formBusqueda");


    formBusqueda.onsubmit = function(evento)
    {
        evento.preventDefault();
        var busqueda = inputBuscar.value;
        buscarLugar(busqueda);
        /* console.log("Haciendo submit"); */
    }

    //Funcion para hacer la busqueda del lugar en la API de lugares
    function buscarLugar(busqueda)
    {
        console.log("Cargando...");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState==4) {
                        console.log("Hecho")
                        console.log(JSON.parse(xhr.responseText));
            }
        }
        xhr.open("GET",`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busqueda}`);
        xhr.setRequestHeader("x-rapidapi-host","devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key","6755d8ae0fmsh447735a8e4903fdp1fd31djsn9a0e060c13d0");
        xhr.send();


    }
}
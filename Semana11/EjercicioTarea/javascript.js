window.onload = function(){

    var menu = document.getElementById("sectiontienda");
    var xhr = new XMLHttpRequest();

    function traerDatos(cosas)
    {
        var row = document.createElement("row");
        var divcol=document.createElement("div");
        divcol.className("col-3");
        var divcard=document.createElement("div");
        divcard.className("card");
        var img=document.createElement("img")
        var 
    }
    xhr.onreadystatechange = function(){
        switch (xhr.readyState){
            case 1:
                console.log("se ha ejecutado la función open()");
                break;
            case 2:
                console.log("se ha disparado una petición http");
                break;
            case 3:
                console.log("ya estamos descargando los datos");
                break;
            case 4:
                console.log("ya tenemos los datos, la operación terminó");
                console.log(xhr.responseText);
                break;
            default:
                console.log("Ha ocurrido un error inesperado");
        }
    }

    xhr.open("GET","https://5d4a3b285c331e00148eaed5.mockapi.io/tienda");
    
    xhr.send(null);
}
window.onload = function () {
    var divProductos = document.getElementById("divProductos");
    var detalleProducto = document.getElementById("detalleProducto");
    var nombreProducto = document.getElementById("nombreProducto");
    var descProducto = document.getElementById("descProducto");
    var precioProducto = document.getElementById("precioProducto");
    var stockProducto = document.getElementById("stockProducto");
    var eliminar = document.getElementById("eliminar");

    function eliminarProducto(id) {
        var xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 4:
                    console.log("Se ha eliminado Correctamente");
                    obtenerProductos();
            }
        }
        xhr.open("DELETE", "https://5d4a3b285c331e00148eaed5.mockapi.io/tienda/" + id);
        xhr.send(null);
    }


    function imprimirDetalle(id) {
        var xhr = new XMLHttpRequest;

        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 4:
                    console.log(xhr.responseText);
                    let objProducto = JSON.parse(xhr.responseText);
                    console.log(objProducto);

                    nombreProducto.innerHTML = objProducto.prod_nom;

                    descProducto.innerHTML = objProducto.prod_desc;

                    precioProducto.innerHTML = objProducto.prod_prec;

                    stockProducto.innerHTML = objProducto.prod_stock ? "Hay Stock" : "No hay Stock";

                    eliminar.onclick = function () {
                        eliminarProducto(objProducto.prod_id);
                    }
                    break;
            }
        }
        xhr.open("GET", "https://5d4a3b285c331e00148eaed5.mockapi.io/tienda/" + id);
        xhr.send(null);
    }

    function imprimirProductos(arregloProductos) {
        divProductos.innerHTML = "";
        divFila = document.createElement("div");
        divFila.setAttribute("class", "row");
        divProductos.appendChild(divFila);
        for (let i = 0; i < arregloProductos.length; i++) {
            var divColumna = document.createElement("div");
            divColumna.setAttribute("class", "col-md-4");
            divColumna.style.height = "300px";
            divColumna.style.background = `url(${arregloProductos[i].prod_img})`;
            divColumna.style.margin = "2px";
            if (arregloProductos[i].prod_stock == false) {
                divColumna.style.border = "2px solid red";
            }
            divColumna.innerHTML = arregloProductos[i].prod_nom;
            divColumna.style.padding = "5px";
            //agregamos nuestro div que representa el producto al row que esta dentro de nuestro divProductos

            divFila.appendChild(divColumna);


            divColumna.onclick = function () {
                imprimirDetalle(arregloProductos[i].prod_id);
            }

        }
    }


    function obtenerProductos() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 2:
                    {
                        console.log("Enviando datos");
                        break;
                    }
                case 3:
                    {
                        console.log("Cargando ......");
                        break;
                    }
                case 4:
                    {
                        console.log("Hecho ");
                        var jsonProductos = JSON.parse(xhr.responseText);
                        imprimirProductos(jsonProductos);
                        break;
                    }
            }

        }
        xhr.open("GET", "https://5d4a3b285c331e00148eaed5.mockapi.io/tienda");

        xhr.send(null);
    }
    obtenerProductos();
}
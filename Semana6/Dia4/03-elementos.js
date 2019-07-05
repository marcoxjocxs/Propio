var productos = [{
    codigo: "0001",
    description: "laptop Toshiba",
    precio: 4500.00,
    imagen: "http://placehold.it/100x100/",
    existencias: 45,
    estado: "activo"
},
{
    codigo: "0002",
    description: "Mouse Razer",
    precio: 400.00,
    imagen: "http://placehold.it/100x100/",
    existencias: 10,
    estado: "inactivo"
},
{
    codigo: "0003",
    description: "Tablet Lenobo",
    precio: 100.00,
    imagen: "http://placehold.it/100x100/",
    existencias: 900,
    estado: "activo"
}
]

var principal = document.getElementById("principal");
var mitable = document.createElement("table");
mitable.setAttribute("border","1");
mitable.innerHTML = `<tr>
<th>Codigo</th>
<th>Descripcion</th>
<th>Precio</th>
<th>Imagen</th>
<th>Existencias</th>
<th>Estado</th>
</tr>`;
principal.appendChild(mitable);

for(var i = 0; i < productos.length; i++){
    //Creando fila por cada vuelta
    
    var trFila=document.createElement("tr");
    //Creando 6columna por cada vuelta
    var tdCodigo=document.createElement("td");
    var tdDescripcion=document.createElement("td");
    var tdPrecio=document.createElement("td");
    var tdImagen=document.createElement("td");
    var tdExistencia=document.createElement("td");
    var tdEstado=document.createElement("td");
    ///////////////////////////////////
    var imagen=document.createElement("img");
    /////////////////////////////////
    imagen.setAttribute("src",productos[i].imagen);
    /////////////////////////////////////
    //Colocando el contenido de cada td
    tdCodigo.innerHTML=productos[i].codigo;
    tdDescripcion.innerHTML=productos[i].description;
    tdPrecio.innerHTML=productos[i].precio;
    //////////////////////////////////////////////////////
    tdImagen.appendChild(imagen);
    /////////////////////////////////////////////////////
    ///////////////////////Forma 2///////////////////////
    tdImagen.innerHTML=`<img src=${productos[i].imagen}/>`
    /////////////////////////////////////////////////////
    tdExistencia.innerHTML=productos[i].existencias;
    tdEstado.innerHTML=productos[i].estado;
    tdEstado.style.color=productos[i].estado ==="inactivo" ? "red": "green";
    if(productos[i].estado=="activo")
    {
        tdEstado.style.color="green";
    }
    else{
        tdEstado.style.color="red";
    }

    
    //Inyextando los TD's dentro del tr o FILA
    
    trFila.appendChild(tdCodigo);
    trFila.appendChild(tdDescripcion);
    trFila.appendChild(tdPrecio);
    trFila.appendChild(tdImagen);
    trFila.appendChild(tdExistencia);
    trFila.appendChild(tdEstado);
    
    //inyecta todo el tr o fila en la tabla
    mitable.appendChild(trFila);
}
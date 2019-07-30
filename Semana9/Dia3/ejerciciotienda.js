window.onload=function(){
    var main = document.getElementById("contenedor");
    var modalTitulo =document.getElementById("modalTitulo");
    var modalImagen=document.getElementById("modalImagen");
    var modalDescripcion = document.getElementById("modalDescripcion");

    var productos =[
        {
            id:10,
            nombre:'Xiaomi Redmi 7',
            precio:'150',
            descripcion:'Smartphone de 6 pulgadas con bateria de 4000 mAh Buen rendimiento de gama media',
            imagen:'https://picsum.photos/200/300'
        },
        {
            id:20,
            nombre:'Razer Smartphone',
            precio:'300',
            descripcion:'Bonito con pantalla 4k, bateria de alto rendimiento y excelente acabado',
            imagen:'https://picsum.photos/200/300'
        },
        {
            id:30,
            nombre:'Huawei P10',
            precio:'700',
            descripcion:'El huawei P10 Plus es un Smartphone que redefine la forma en que el mundo te ve ',
            imagen:'https://picsum.photos/200/300'
        },
        {
            id:40,
            nombre:'Sony Xperia  Z20',
            precio:'600',
            descripcion:'Pantalla deficiente pero excelente rendimimento y proteccio contra liquidos ',
            imagen:'https://picsum.photos/200/300'
        }
    ];

    var row=document.createElement("div");
    row.className="row";
    main.appendChild(row);

    var divProducto="";
    productos.forEach(function(item){
        divProducto = divProducto+`<div class="col-md-4 mb-2">
                                    <div class="card">
                                        <img src="${item.imagen}" class="card-img-top"/>
                                        <div class="card-body">
                                            <h4 class="card-title">
                                                ${item.nombre}
                                            </h4>
                                            <p class="card-text">
                                                Precio:${item.precio}
                                            </p>
                                            <button class="btn btn-primary click" idProducto="${item.id}">Detalles... </button>
                                        </div>
                                    </div>
                                   </div>`;    
                                
    });

    row.innerHTML=divProducto;
}
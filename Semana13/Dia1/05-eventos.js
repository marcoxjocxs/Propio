window.onload = function () {

    function reset() {
        $("#listaWhisky, #listaRon").hide();
        $("#btnWhisky, #btnRon").removeClass("activo");
    }

    $("#btnWhisky").click(function () {
        reset();
        $("#listaWhisky").show();
        $(this).addClass("activo");
    });
    var btnRon = $("#btnRon");
    btnRon.click(function () {
        reset();
        $("#listaRon").show();
        $(this).addClass("activo");
    });

    $("li").dblclick(function () {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000

        })

        Toast.fire({
            type: 'success',

            title: "Agregado al Carrito " + $(this).text()
        })
    });

    //cUANDO EL MOUSE ESTE ENCIMA DEL ELEMENTO
    /* $("#imagen").mouseover(function () {
        $(this).addClass("rounded-circle");
    });
    //Cando el mouse salga del elemento
    $("#imagen").mouseout(function () {
        $(this).removeClass("rounded-circle");
    }); */

    //funcion hover > conbina mouseover y mouseout

    $("#imagen").hover(function () { $(this).addClass("rounded-circle"); }, function () { $(this).removeClass("rounded-circle"); })


    $("#inputBuscar").focus(function () {
        $(this).removeClass("form-control");
        $(this).addClass("barra-activa");
    });

    $("#inputBuscar").blur(function () {
        $(this).removeClass("barra-activa");
        $(this).addClass("form-control");
    });
    $("html").click(function(){
        $("#miMenu").remove();
    });

    
    $("#btnRon").contextmenu(function (e) {
        e.preventDefault();
        //remove => quita un elemento del DOM
        $("#miMenu").remove();
        var X = e.clientX;
        var Y = e.clientY;
        //fORMA DE CREAR  fACIL
        /* $(`<ul class="list-group">
                        <li class="list-group-item">Active item</li>
                        <li class="list-group-item">Item</li>
                        <li class="list-group-item ">Disabled item</li>
                      </ul>`); */

        // creando el elemento ul que sera el menu
        var menu = $(`<ul></ul>`);
        //attr => asigna el valor de un atributo
        menu.attr("id","miMenu");
        menu.addClass("list-group");

        // creando una opcion (li) para el elemento ul
        var opcion1 = $(`<li></li>`);
        opcion1.addClass("list-group-item");
        opcion1.html("OCULTAR");
        opcion1.click(function(){
            $("#btnRon").hide();
        });
        //creando una opcion(li) para el elemento ul
        var opcionImprimir = $(`<li><</li>`);
        opcionImprimir.addClass("list-group-item");
        opcionImprimir.html("IMPRIMIR");
        opcionImprimir.click(function(){
            $("#miMenu").remove();
            window.print();
        })
        
        // inyectando el elemento li al elemento ul
        menu.append(opcion1);
        menu.append(opcionImprimir);
        menu.css("position", "absolute")
            .css("top", `${Y}px`)
            .css("left", `${X}px`);

        $("body").append(menu);

        console.log("Se hizo un click derecho");

    })


    reset();
}


/* Revisar los siguientes Links */
/* https://sweetalert2.github.io/ */
/* https://www.jsdelivr.com/package/npm/sweetalert2?path=dist&tab=collection */
/* https://cdnjs.com/libraries/font-awesome/4.7.0 */
/* https://bootswatch.com/ */
/* Instalar colorpic */
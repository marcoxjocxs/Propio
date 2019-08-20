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
    $("#imagen").mouseover(function () {
        $(this).addClass("rounded-circle");
    });
    //Cando el mouse salga del elemento
    $("#imagen").mouseout(function () {
        $(this).removeClass("rounded-circle");
    });

    //funcion hover > conbina mouseover y mouseout

    $("#imagen").hover(function(){ $(this).addClass("rounded-circle");},function(){ $(this).removeClass("rounded-circle");})
    
    
    reset();
}


/* Revisar los siguientes Links */
/* https://sweetalert2.github.io/ */
/* https://www.jsdelivr.com/package/npm/sweetalert2?path=dist&tab=collection */
/* https://cdnjs.com/libraries/font-awesome/4.7.0 */
/* https://bootswatch.com/ */

$(".cuadrado").draggable();
$(".cuadrado").resizable();
$(".bandas").sortable();

$('.banda').sortable({
    update:function () {
        console.log("se ha reordenado las tablitas");
        
        
    }
});
$(".cajita").draggable();
$(".cajota").droppable({
    drop:function (evento) {
        console.log("ha caido alguien o algo!");
        console.log(evento);
        $(this).css("background-color","yellow");
        $(this).css("border-radius","50%");
                
    }
});

$("#btnAnimar1").click(function(){
    $(".efecto1").toggle("shake",100);
})

$
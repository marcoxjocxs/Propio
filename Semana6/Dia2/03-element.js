var divcuadrado=document.getElementById("cuadrado");
//get ancho de un elemento
//devuelve un valor en pixeles
console.log(divcuadrado.clientWidth);
//setteando el ancho
divcuadrado.style.width="250px";
console.log(divcuadrado.clientWidth);
///////////////////////////////////////////////////
// Para colocar estilos
//cuando el estilo es de una sola palabra 
//Por ejemplo:width,height,margin,padding,border,etc
//la asignacion sera[elemento].style.[el mismo atributo];
//Cuando el estilo es deuna palabra compuesta
//Por ejemplo:background-color,border-radius,margin-top,etc.
//la asigncacion sera cuando Camel Case
//Ejemplo :backgrounColor,borderRadius,marginTop
///////////////////////////////////////////////////
//get alto de un elemento
//devuelve un valor en pixeles

console.log(divcuadrado.clientHeight);
//seteando la altura
divcuadrado.style.height="250px";
console.log(divcuadrado.clientHeight);

//Nos devuelve el ancho con Bordes
console.log(divcuadrado.offsetWidth);

//Nos va a devolver el desplazamiento segun la parte superior a partir del contenedor en el que se encuentre
console.log(divcuadrado.offsetTop);

//Nos devolvera el desplazamiento del lado izquierdo a parte del contendor en el que se encuentre
console.log(divcuadrado.offsetLeft);
//la posicion del elemento en referencia al top,hace referencia al contenido
//hace referencia al contenido
//obtendra el numero de pixeles del elemento que sido desplazado
//con la bara de desplazamiento vertical
console.log(divcuadrado.scrollTop);
//esta devolvera la posicion del elemento con referencia a left
console.log(divcuadrado.scrollLeft);
function deslizar(){
    var micaja=document.getElementById("miDiv");
    micaja.scrollTop=micaja.scrollTop+20;
    micaja.scrollLeft=micaja.scrollLeft+10;
}
//=> y con la console llamamos a esto funcion para
// ver que hace scrollTop

//como asignar una funcion a un determinado evento
//que en este caso va a ser el evento"click"
var boton = document.getElementById("botoncito");
//addEventListener va a recibir 2 cosas
//1ra.  va a recibir el evento que hayq eu estudiar
//2da. una funcion , algo que ejecutar
boton.addEventListener("click",function(){
    //alert("Me has dado click");
    divcuadrado.style.height=`${divcuadrado.clientHeight+5}px`
    divcuadrado.style.left=`${divcuadrado.offsetLeft+6}px`
});
var btnCambiarClase=document.getElementById("cambiarClase");
btnCambiarClase.addEventListener("click",function(){
    //className=>obtine la clase de un elemento
    //console.log(divcuadrado.className);

    if(divcuadrado.className=="redondo"){
        divcuadrado.className="cuadrado";
    }
    else{
        divcuadrado.className="redondo";
    }
});

var multiclase=document.querySelector("#multiclase");
//classlist que nos va a dar un arreglo con todas 
//clases que tiene nuestro elemento

//Obtenemos el boton
var btnAgregarClase=document.getElementById("agregarClase");
btnAgregarClase.addEventListener("click",function(){
    //multiclase.classList.remove("fondo");
    multiclase.classList.add("margen");
});

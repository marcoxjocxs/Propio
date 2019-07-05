
//Window es un objeto que se crea junta con nuestra pagina web
//Me dara la direccion de donde nos encontramos
console.log(window.location.href);
//Me va a dar la altura y ancho de mi ventana respectivamamente
console.log("Alto de mi ventana" + window.outerHeight);
console.log("Ancho de mi Ventana" + window.outerWidth);

///////////////////////////////////////////////////////////////////7
//Ancho y alto pero sin scrollbar
console.log("Alto sin ScrollBar "+ window.innerHeight);
console.log("Ancho sin ScrollBar "+ window.innerWidth);
//Posicion del ScrollBar
console.log("Posicion Scroll EjeX" + window.pageXOffset);
console.log("Posicion ScroollBar Vertical"+window.pageYOffset);

//prompt alert y confirm en realidad pertenecen al objeto window, al invocarlos su comportamiento es identico
// como si los llamaran de forma directa 
var Mensaje=window.prompt("Hola Chicos");
console.log(Mensaje);
window.alert("Desea BORRAR SU DISCO DURO?");

var ganamos = window.confirm("Le ganamos a chile");
console.log(ganamos);

var Ventanita;
//.open es una propiedad(function) de window que nos permite abrir una nueva ventana
function abrirVentana(){
    Ventanita=window.open("http://www.youtube.com" ,"_blank","width=1000 ,height=400");
}
abrirVentana();
function cerrarVentana(){
    Ventanita.close();
}
function incrementarTamano(){
    Ventanita.resizeBy(600,600);
}

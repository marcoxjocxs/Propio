//Document
//Me va a hacer referencia al DOM

var miTitulo=document.getElementById("titulo");
var Caja=document.getElementById("cajita");
var Parrafos=document.getElementsByClassName("texto");
var Titulos=document.getElementsByTagName("h2")
console.log(miTitulo);
console.log(Caja);
console.log(Parrafos);
//otra forma de poner en el caso de las clases
console.log(Parrafos[0],Parrafos[1]);
console.log(Titulos);
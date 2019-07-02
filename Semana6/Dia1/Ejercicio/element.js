var Titulo=document.getElementById("title");
//ya al tener la etiqueta en una variable podemos cambiar 
//su estilo  desde javascript usando la propiedad style.css
console.log(Titulo);
Titulo.style.color="red";
var hojaestilo=document.getElementById("css");
function cambiarEstilo(){
    hojaestilo.setAttribute("href","./dark.css")
}
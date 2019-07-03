//document
//representa al DOM => Document Object Model
//manipulando al dom
//1. referenciar a un elemento del dom
//mediante su id o identificador
var miTitulo=document.getElementById("titulo");
console.log(miTitulo);
//2. referenciar a un conjunmto de elementos del dom dado el nombre de la clase que compartan
var miParrafo=document.getElementsByClassName("descripcion");
console.log(miParrafo);
//3.referenciar a un conjunto de elementos del dom
//dado el nombre de su pregunta 
var misLis=document.getElementsByTagName("li");
console.log(misLis);
//4.referenciar a un conjunto de elementos del dom dado un selector como en CSS
var misUls=document.querySelectorAll("section article ul");
console.log(misUls);
//5.referemciar a la primera coincidencia dado un selector como en CSS 
//OJO> Solo devulve un elemnto,asi exista mas de uno que coincida con la seleccion
var unParrafo=document.querySelector("p");
console.log(unParrafo);
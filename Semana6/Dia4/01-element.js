var principal=document.getElementById("principal");
var footer=document.getElementById("pie");
//Crear un elemento
//createElement("[nombre de la etiqueta]")
var nuevodiv=document.createElement("div");
//colocar contenido dentro de un elemento HTML
//[elemento].innerHTML
nuevodiv.innerHTML="Este es un texto de prueba utilizando innetHTML";
nuevodiv.style.backgroundColor="rgba(200,200,200,05)";

//seteando o colocando un atributo en un elemento
//[elemento].setAtribute("[nombre_del_atributo]","[valor_del_atributo]")
nuevodiv.setAttribute("id","nuevodiv");
//tambien se puede asignar atributos no validos por html
nuevodiv.setAttribute("nombre","unaSeccion");  

//agregando un elemento dentro de otro
//[elemento].appendChild([elemento]);
principal.appendChild(nuevodiv);


//[elemento].prepend([elemento])
//inyecta un elemento hijo dentro de otro,como primer 
//elemento hijo
footer.prepent(nuevodiv);

//forma de crear un elemento dentor de otro
//mediante  texto con el atributo innerHTML
footer.innerHTML="<h1>Que tal my cuate</h1>";

//forma de crear un elemento dentro de otro mediante 
//la creacion de oro elemento
var miH1=document.createElement("h1");
miH1.innerHTML = "Titulo de Pie";
footer.appendChild(miH1);




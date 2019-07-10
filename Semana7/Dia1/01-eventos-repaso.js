var liDark=document.getElementById("liDark");
var liLight=document.getElementById("liLight");
var link=document.getElementById("estilo");
var btnCentral=document.getElementById("btn_Central");
var principal=document.getElementById("principal");
//Forma1 de asignar un elemento
//[elemento].onclick = funcion anonima
liDark.onclick = function(){
    link.setAttribute("href","./eventos-repaso-dark.css");
}
liLight.onclick=function(){
    link.setAttribute("href","./eventos-repaso-light.css");
}
/////////////////////////////////////////////////////////////////////////////
//FORMA2 se asignar un evento
//[elemento].addEventListener(["evento_sin_prefijo_on"],function anonimo)

btnCentral.addEventListener("click",function(evento){
    var alto=window.innerHeight;
    var ancho=window.innerWidth;

    var nuevodiv =document.createElement("div");
    nuevodiv.style.height="15px";
    nuevodiv.style.width="15px";
    nuevodiv.style.border="1px solid black";
    nuevodiv.style.borderRadius="50%";
    nuevodiv.style.backgroundColor="yellow";

    var randomX = Math.random()*(ancho-0)+0;
    var randomY = Math.random()*(alto-0)+0;
    nuevodiv.style.position="absolute";
    nuevodiv.style.top=randomY+"px";
    nuevodiv.style.left=randomX+"px";
    principal.appendChild(nuevodiv);
});


//window.onload
//evento que se ejecuta pero cuando ya se cargue todos
//los elmentos del HTML(DOM)
window.onload = function(){
    //va todo nuestro codigo que queramos ejecutar
    var body=document.querySelector("body");
    //var lapicero =document.getElementById("lapicero");
    //onmousemove va a ser el evento cuando nostros ,movamos el mouse
    body.style.cursor="url('./pen.png') 0 100, auto";
    body.onmousemove=function(e){
        console.log(`la posicion en x =${e.offsetX}`);
        console.log(`la posicon en y=${e.offsetY}`);
       //lapicero.style.left=`${e.offsetX}px`;
       //lapicero.style.top=`${e.offsetY-50}px`;
        
        var punto=document.createElement("div");
        punto.style.width="2px";
        punto.style.height="2px";
        punto.style.borderRadius="50%";
        punto.style.backgroundColor="lightblue";
        punto.style.position="absolute";
        punto.style.left=`${e.offsetX}px`;
        punto.style.top=`${e.offsetY}px`;
        punto.style.boxShadow="0 0 6px #fff";

        this.appendChild(punto);
    }
}
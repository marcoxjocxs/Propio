window.onload=function(){
    var input = document.getElementById("inputCorreo");


    var captcha = document.getElementById("captcha");
    var imagen = document.getElementById("imagen");

    //
    input.onkeyup = function(e){
        console.log("una tecla ha sido pulsada"),
        console.log("tecla pulsada: " + e.key);
        console.log("codigo de tecla: "+ e.keyCode);
        console.log("keyCode transformado: "+String.fromCharCode(e.keyCode));
    }
    input.onkeypress=function(){
        console.log("onKeypress: "+ this.value);
    }
    captcha.ondblclick=function(){
        imagen.style.filter="grayscale(100%)";
        imagen.style.border="2px solid red";
    }
}
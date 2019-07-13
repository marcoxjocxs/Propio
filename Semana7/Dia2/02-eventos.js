window.onload=function(){
    var input = document.getElementById("inputCorreo");
    var captcha = document.getElementById("captcha");
    var imagen = document.getElementById("imagen");

    //Es preferible que usemos onKeyup
    input.onkeyup = function(e){
        console.log("una tecla ha sido pulsada"),
        console.log("tecla pulsada: " + e.key);
        console.log("codigo de tecla: "+ e.keyCode);
        console.log("keyCode transformado: "+String.fromCharCode(e.keyCode));
        console.log(this.value);
    }
    input.onkeypress=function(){
        console.log("onKeypress: "+ this.value);
    }
    captcha.ondblclick=function(){
        imagen.style.filter="grayscale(100%)";
        imagen.style.border="2px solid red";
    }
    var comidaCasera=['Lentejita','cordero','saltado'];
    var comidaRapida=['Salchipapa','Empanada','papa rellena','Burguer'];
    var Piqueos=['Papitas','Chocolates','Galletas'];
    
    var selectComida=document.getElementById("comida");
    var selectTipo=document.getElementById("tipocomida");
    selectComida.onchange=function(){
        selectTipo.removeAttribute("disabled");
        //if(selectComida.value)
        //Con esta evaluamos el valor de selectComida para asegurarnos que de verdad haya una opcion seleccionada
        if(this.value!=0)
        {
            switch(this.value)
            {
                case 'ff':
                    for(var i=0;i<comidaRapida.length;i++)
                    {
                        //creamos un elemtno para las iteraciones
                        var opcion=document.createElement("option");
                        //como contenido tendra el valor del arreglo en el que este
                        opcion.innerHTML=`${comidaRapida[i]}`;
                        //con charAt setearemos su valor con la primera letra del valor del arrelo segun la iteracion
                        opcion.setAttribute("value",comidaRapida[i].charAt(0));
                        //y lo añadimos como hijo del select
                        selectTipo.appendChild(opcion);
                    }
                    break;
                case 'cc':
                    for(var i=0;i<comidaCasera.length;i++)
                    {
                        var opcion2=document.createElement("option");
                        opcion2.innerHTML=`${comidaCasera[i]}`;
                        opcion2.setAttribute("value",comidaCasera[i].charAt(0));
                        selectTipo.appendChild(opcion2);
                    }
                    break;
                case 'p':
                    for(var i=0;i<Piqueos.length;i++)
                    {
                        var opcion3=document.createElement("option");
                        opcion3.innerHTML=`${Piqueos[i]}`;
                        opcion3.setAttribute("value",Piqueos[i].charAt(0));
                        selectTipo.appendChild(opcion3);
                    }
                    break;
            }
        }

    }
}
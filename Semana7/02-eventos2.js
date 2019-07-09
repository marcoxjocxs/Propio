var inputCorreo = document.getElementById("inputcorreo");
var span1=document.getElementById("span1");
var personas=[
    {nombre:"Marco",
    correo:"marco@gmail.com", 
},
    {nombre:"Jose",
    correo:"jose@gmail.com",  
}
];
//onfocus => evento que sedencadena cuando el cursor se encuentra sobre un elemento
inputCorreo.onfocus=function(){
    inputCorreo.style.backgroundColor='#42FF9D';
    inputCorreo.style.borderBottom="4px solid white";
    inputCorreo.style.borderRadius="8px";
    
    //console.log("focus");
}

//onblur => evento que se desencadena cuando el cursor 
//deja, sale o abandona a un elemento

inputCorreo.onblur=function(){
    inputCorreo.style.backgroundColor="transparente";
    inputCorreo.style.borderBottom="4px solid #999999";
    inputCorreo.style.borderRadius="0px";
    var palabra=inputCorreo.value;
    span1.setAttribute("hidden","true");
    for(var i=0;i<personas.length;i++)
    {
        if(palabra===personas[i].correo)
        {
            span1.removeAttribute("hidden");
            console.log("El correo existe");
            break;
        }
    }
    for(var i=0;i<personas.length;i++)
    {
        if(palabra!==personas[i].correo)
        {
            console.log("El correo disponible");
            break;
        }
    }
}


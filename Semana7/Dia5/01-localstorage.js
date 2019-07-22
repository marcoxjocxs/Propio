window.onload = function(){
    var body = document.getElementById("cuerpo");
    var nombre = document.getElementById("inputNombre");
    var apellido = document.getElementById("inputApellidos");
    var color = document.getElementById("inputColor");
    var guardar = document.getElementById("inputGuardar");
    var borrar = document.getElementById("btnBorrar");


    function obtener(){
        var nombreGuardado = localStorage.getItem("nombre");
        var apellidoGuardado= localStorage.getItem("apellido");
        var colorGuardado = localStorage.getItem("color");

        if(nombreGuardado && apellidoGuardado && colorGuardado)
        {
            body.style.backgroundColor = colorGuardado;
            color.value = colorGuardado;
            nombre.value=nombreGuardado;
            apellido.value=apellidoGuardado;
        }
        else{
            console.log("no hay nada guardado");
        }
    }
    obtener();
    function obtenerPorObjeto(){
        var objPreferenciasString=localStorage.getItem("objPreferencias");
        var objPreferenciasJSON = JSON.parse(objPreferenciasString);
        console.log("objeto convertido",objPreferenciasJSON);

        if(objPreferenciasJSON)
        {
            body.style.backgroundColor=objPreferenciasJSON.color;
            color.value=objPreferenciasJSON.color;
            nombre.value=objPreferenciasJSON.nombre;
            apellido.value=objPreferenciasJSON.apellido;
        }
        else{
            console.log("cuak ha ocurrido un error");
        }
    }
    obtenerPorObjeto();
    
    borrar.onclick=function()
    {
        //Para borrar un elemnto o clave del localStorage , utilizamos:
        //localStorage.removeItem("nombreItem");
        
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("color");
        localStorage.removeItem("objPreferencias");
        
       //localStorage.clear(); borrara todo! no como Thanos
        //localStorage.clear();
    }

    guardar.addEventListener("click",function(e){
        e.preventDefault();
        //Guardar datos en local storage
        //Localstorage.setItem("nombreguardar",elcontenido);
        localStorage.setItem("nombre",nombre.value);
        localStorage.setItem("apellido",apellido.value);
        localStorage.setItem("color",color.value);

        var objPreferencias ={
            nombre:nombre.value,
            apellido:apellido.value,
            color:color.value
        }
        // JSON => Javascript Object Notation
        //JSON.stringify([objeto]);  -> Nos devuleve el objeto, pero en string

        console.log(objPreferencias);
        var preferenciasTexto = JSON.stringify(objPreferencias);
        //guardamos el objeto ya convertido a textov
        localStorage.setItem("objPreferencias",preferenciasTexto);
        console.log(preferenciasTexto);
    })
    

}


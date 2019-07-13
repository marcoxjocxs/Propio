window.onload = function(){
    var form=document.getElementById("formulario");
    var input=document.getElementById("inputTarea");
    var list=document.getElementById("lista");

    function guardar()
    {
        //En vez de utilizar setItem("nombreItem","contenido"),
        //guardaremos de lo siguiente manera
        //localstorage.nombreItem="contenidoItem"
        //Otra forma de ponerlo
        //localStorage.setItem("misTareas",list.innerHTML);
        localStorage.misTareas=list.innerHTML;
    }
    function obtener()
    {
        //obtenemos misTareas desde el localStorage
        var tareasObtenidas=localStorage.getItem("misTareas");
        //y el contenido lo incrustamos dentro liste que es nuestro <ul></ul>
        list.innerHTML=tareasObtenidas;
    }
    obtener();
    form.addEventListener("submit",function(e){
        e.preventDefault();
        var tarea=input.value;
        //console.log(tarea);
        var li=document.createElement("li");
        li.innerHTML=tarea;
        list.appendChild(li);
        //input.value="" para que deje vacio el campo cuando quieras volver a escribir
        input.value="";
        guardar();
    })
    list.addEventListener("dblclick",function(e){
        //e.target nos imprimira el elemento al que hemos hecho doble click
        var tarea=e.target;
        //console.log(tarea);
        //console.log(tarea.parentNode);
        tarea.parentNode.removeChild(tarea);
        guardar();
    })
}
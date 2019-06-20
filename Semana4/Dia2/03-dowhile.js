var contador=0;

do{

    console.log("Saludo");
    contador++;
}while(contador<5);



////////////////////////

var i=0;
alert("Ingrese numeros del 1 al 7 para dias de la semana y 10 si quiere salir");
do{
    
    var opc=+prompt("Ingrese un numero");
    switch(opc){
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4 :
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Domingo");
            break;
        case 10:
            console.log("Salir");
    }
    
}while(opc!=10);
console.log("Fin");

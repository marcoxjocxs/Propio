var dia=5;
switch(dia){
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
    default:
        console.log("Este no es un dia valido");
}

// 0-10 = en proceso de aprendizaje
//10-15 = regular
//16-20 = aceptable
var calificacion = 21;
switch(true)
{
    case calificacion >=0 && calificacion<=10:
        console.log("En proceso de aprendizaje");
        break;
    case calificacion >=11 && calificacion <=15:
        console.log("Regular");
        break;
    case calificacion >=16 && calificacion <=20:
        console.log("Aceptable");
        break;
    default:
        console.log("Error, la nota no es correcta");
}


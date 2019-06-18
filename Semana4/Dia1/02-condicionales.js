var sueldo = 3600.00;

if (sueldo>3400)
{
    console.log("Se retiene el 13%");
    console.log(`Total a pagar ${sueldo - sueldo*0.13} soles.`);
}
else{
    console.log("No se retiene el 13%");
    console.log("El sueldo es: "+ sueldo);
}

console.log("Fin del programa")

////////
var horastrabajadas=parseInt(prompt("Ingrese las horas trabajadas"));
var sueldoporhora= parseInt(prompt("Ingrese el pago por hora"));
var total;
console.log("HORAS TRABAJADAS : "+horastrabajadas);
console.log("SUELDO POR HORA : "+ sueldoporhora);
if(horastrabajadas>40)
{
    console.log(`Sueldo total = ${((((horastrabajadas%40) + (40*(((horastrabajadas-(horastrabajadas%40))/40)-1)))*(sueldoporhora*2))+ (sueldoporhora *40))} ` );
}
else{
    console.log(`El sueldo total es  : ${horastrabajadas*sueldoporhora}`)
}


 /////////////////////////////////

var anio=prompt("Ingrese el año donde verifique si un año es bisiesto");
if((anio%4==0 && anio%100!=0) || anio%400==0 )
{
    console.log("Es un año bisiesto");
}
else
{
    console.log("No es un año bisiesto");
}


////////////////////////////////////////////////////////////////////////////////



var estacion = +prompt("Ingrese un numero entre 1 y 4");
var rpta="";
if(estacion==1)
{
    rpta="Verano";
}
else{
    if(estacion==2)
    {
        rpta="Invierno";
    }
    else{
        if (estacion==3)
        {
            rpta="Primavera";
        }
        else{
            if(estacion==4)
            {
                rpta="Otonio";
            }
            else{
                rpta="error";
            }
        }
    }
}
console.log(`Estamos en ${rpta}`);


//////////////////////////////////////////////////////////////////////////////

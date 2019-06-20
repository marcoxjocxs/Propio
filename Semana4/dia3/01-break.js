for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

//////////////////////////////////////
var cont = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
        console.log("Numero " + i + " es multiplo de 3")
        cont++;
        if (cont >= 5) {
            break;
        }
    }
}

//////////////////////////////////////
//continue => sentencia que omite las operacion que debe hacer el 
// ciclo for, hasta su proxumo ciclo
// esto depende de una ubicacion de la sentencia continue
//Se omiten las operacion desde donde encuentran la sentencias 
// `Continue` en adelante.


//Suma acumulada de los numeros entre 0 y 500 excepto los multiplos de 5
var total = 0;

for (var i = 0; i < 1000; i++) {
    if (i % 5 == 0) {
        continue;
    }
    total=total + i;
}
console.log(total);

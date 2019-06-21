'use strict';
function funcionSinVariables() {
    //No hay nada
}
funcionSinVariables();
function Saludo(nombre) {
    console.log(`Hola ${nombre} como estas `);
}
Saludo("Marco");

//// num1 es la base y el num2 es el exponente
function potencia(num1, num2) {
    let resultado = num1 ** num2;
    console.log("El resultado es " + resultado);
}
potencia(2, 3);

function arreglo(array) {
    console.log(array);
}

var otroarreglo = [2, 3, 4, 5];
arreglo(otroarreglo);

var mifuncion = function (masTexto) {
    console.log("Texto Aleatorio " + masTexto);
}

mifuncion("QWERTY");
//...elementos recibira variables extra y creara un arreglo con esas variables , si no pasamos nada para elementos creara un arreglo vacio
function muchasVariables(a, b, ...elementos) {
    console.log(elementos);
    console.log(a);
    console.log(b);
}

muchasVariables(2, 4);
muchasVariables(3, 4, 5, 6, 10, 20000, 1986);

//Creara una funcionpara una tienda que me acepte
//El monto a pagar , la cantidad recibida , y me imprima esas dos variables mas de vuelto

/* => el recibo es por __________ el cliente pago con ________ y su vuelto es __________
NT : en el caso de una prompt , recuerde que se debe convertir a float con parsefloat (variable) para que no lo reconozca como texto 
 */

function operacion(monto, cant) {
    let vuelto = Math.abs(monto - cant);
    console.log(`La cantidad a pagar es de ${monto}`);
    console.log(`Usted pago con una cantidad de ${cant}`);
    console.log(`El vuelto es de ${vuelto}`);
}
operacion(100, 120);

// => Reañoze eñ ,os,p ekercocop de ña àrte superior pero que reciva em vez de un solo monto  a pagar un arreglo con el consto desglozado , el resultado deberia ser identico

function operacion() {
    let espacio = +prompt("Ingrese la cantidad de productos");
    let arreconejo = []
    let pago = [];
    for (let i = 0; i < espacio; i++) {
        arreconejo[i] = +prompt("Ingrese el precio del producto: " + i);
    }
    do {
        let valor = +("Ingrese  1 si desea pagar")
        if (valor == 1) {
            for (let i = 0; i < espacio; i++) {
                pago[i] = +prompt("Ingrese el billete con el que paga el producto: " + i);
            }
        }
    } while (valor1 == 1)
}

operacion();


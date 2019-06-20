//Algoritmo para iMPRIMIR LOS NUMERO PARES
//Comprendidos entre 0 y 9
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) { console.log(i); }
}

//algoritmo para imprimir la suma acumalada
//de los umeros impares comprendidos entre entre 0  y 100
//debugger;
//El debugger interrumpe el ciclo regular de la apicacion y el programa empieza a depurarse manualmente linea a linea
var sumatoria = 0;
var i = 0;
for (i = 1; i < 101; i = i + 2) {
    sumatoria = sumatoria + i;
}
console.log("La suma es de " + sumatoria);

//Algoritmo para contar la cantidad de numeros pares 
//y contar la cnatidad de numeros impares
//entre 2 numeros  dados por el usuario

var i=0;
var numeroin=+prompt("Ingresa tu numero Inicial");
var numerofi=+prompt("Ingrese numero final");
var pares=0;
var impares=0;
for(i=numeroin;i<=numerofi;i++)
{
    if (i % 2 == 0) 
    {
        pares++;
    }
    else{
        impares++;
    }
}
console.log("Numero pares son"+pares);
console.log("Numero impares son"+impares);

//////////////////////////////
//////////////////////////////
var i=0;
var numeroin=+prompt("Ingresa tu numero Inicial");
var numerofi=+prompt("Ingrese numero final");
for(i=numerofi;i>=numeroin;i--)
{
    if (i % 5 == 0) 
    {
        console.log(i);
    }
}




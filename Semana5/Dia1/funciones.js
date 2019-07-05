

function multiplicar(...numeros){
    var resultado = 1;
    for(let i=0; i<numeros.length;i++)
    {
        resultado=resultado*numeros[i];
    }
/*     console.log("El resultado de la multiplicacion sera:" + resultado); */
    return resultado;
}

var multiplicacion =multiplicar(1,2,3,4);
console.log(multiplicacion);
console.log(multiplicacion*1000);
console.log(`${multiplicar(9,10,1,2,3)}`);
console.log(`${multiplicar(9*9)}`);

function alerta(){
    var texto="este es el mensaje de alerta,Chile ha perdido";
    return texto;
}
function alerta2(){
    return "Peru se salvo";
}
console.log(alerta());
console.log(alerta2());

function menu()
{
    // alert=Sirve para hacer alertas en la pestaña como spanmmmmmm 
    alert(`//Opciones
            1.- Suma
            2.- Resta
            3.- Multiplicar
            4.- Dividir
            5.- Salir`);
}
function calculadora(operacion){
   var a=+prompt("Ingrese el primer numero");
   var b=+prompt("Ingrese el segundo numero");
   switch(operacion)
    {
        case `suma`:{
            alert(`La suma de los valores sera ${a+b}`);
            break;
        }
        case "resta":{
            alert(`La resta de los valores sera ${a-b}`);
            break;
        }
        case "multiplicar":{
                alert(`La multiplicacion de los valores sera ${a*b}`);
        }
        case "dividir":{
                alert(`La division de los valores sera ${a/b}`);
        }
    }
   
}
do{
    menu();
    var opc=+prompt("Elija una opcion de las indicadas anteriormente");
    switch (opc)
    {
        case 1:
            calculadora("sumar");
            break;
        case 2:
            calculadora("restar");
            break;
        case 3:
            calculadora("multiplicar");
            break;
        case 4:
            calculadora("dividir");
            break;
    }
}while(opc!=5);

///////////Ejercicicio 4.10
console.log("Ejercicio 4.10");
console.log("Nuestros viajes son en Mexico ,PV,Acapulco y Cancun");
var destino = prompt("Ingrese destino");
var ida=prompt("Ingrese el costo por km de ida");
var regreso=prompt("Ingrese costo por km de regreso");
var km=0;

switch (true)
{
    case destino=="mexico" || destino=="Mexico":
        console.log("Sudestino es :" + destino);
        km=750;
        break;
    case destino=="PV"|| destino=="pv"|| destino=="Pv" || destino=="pV":
        console.log("Sudestino es :" + destino);
        km=800;
        break;
    case destino=="Acapulco" || destino=="acapulco":
        console.log("Sudestino es :" + destino);
        km=1200;
        break;
    case destino=="Cancun" || destino=="cancun":
        console.log("Sudestino es :" + destino);
        km=1800;
        break;
    default:
            console.log("Este destino no existe");    
}

console.log(`El costo de ida por km con el destino de : ${destino} es  de  ${km*ida}`);
console.log(`El costo de regreso por km con el destino de : ${destino} es  de  ${km*ida}`);

/////////////////////////////////
////////Ejercicio 3
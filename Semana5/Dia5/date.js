var fecha= new Date();
//Imprimir la fecha actual completa
console.log(fecha);

//imprimir el anio de la fecha en 4 digitos
console.log(fecha.getFullYear());

//imprimir el mes de la fecha en un numero entero[0-11]
console.log(fecha.getMonth());

//imprimir el numero del dia de la fecha
console.log(fecha.getDate());

//imprimir el numero del dia en la semana de la fecha[1-7]
console.log(fecha.getDay());

//imprimir la hora de la fecha
console.log(fecha.getHours());

//imprimir los minutos de la fecha actual
console.log(fecha.getMinutes());

//imprimi rlos segundos de la fecha actual
console.log(fecha.getSeconds());

//imprimir los milisegundos
console.log(fecha.getMilliseconds());

console.log("modificando año a 2030");
fecha.setFullYear(2030);
console.log("nueva fecha");
console.log(fecha);

//setMonth([0-11])=>cambia el mes de la fecha 
// setDtae([1-31])=>cambua el numero del dia de la fecha 
//setHour ([0-23])=>cambia la hora de la fecha
//setMinutes ([0-59])=>cambia los minutos de la fecha 
//seSeconds([0-59])=>cambia los segundos de la fceha 
//setMilliseconds([0-999])=>cambia los milisengudos de la fecha 

//Formas de instanciar un objeto de tipo fecha
//Devuelve la fecha actual del ordenador(FRONT END)
var miFecha=new Date();
console.log(miFecha);
//Devuelve la fecha indicando el anio,mes,dia
var miFecha2=new Date(2018,09,08);
//Devuelve la fecha indicando el anio , mes,dia,horas,minutosy segundos
var Fecha3= new Date(1991,09,08,02,10,45);
//5  es junio por que los meses inician en 0
var ayer=new Date(2019,05,27);
console.log(miFecha-ayer);

//Cuantas semanas 

var navidad= new Date(2019,11,25);
console.log((((((navidad-miFecha)/1000)/60)/60)/24)/7);
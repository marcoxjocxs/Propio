// funcion flecha
 function suma(a,b){
     return a+b;
 }
 //console.log(suma(10,20));
 // la declaracion es identica a la de una funcion anonima
 // let nombreFunc = (parametros) => {codigo a ejecutar}
 let sumaFlecha = (a,b) =>{
     return a+b;
 }

 console.log(sumaFlecha(10,20));

 // si el codigo es corto y voy a retornar una sola cosa
 //conviene evitar las llaves y poner directamente lo que se va a retornar
/*  let hola = (nombre)=> {console.log(`Hola ${nombre}`);} */
/*  hola("Marco"); */
let hola = (nombre)=> console.log(`Hola ${nombre}`)
 hola("Marco");


 //Puedo evitar los aprentesis al momento de recibir las variables de mi funcion siempre y cuando solo reciba uno
 //Math.pow eleva un numero a su potencia X donde el segundo paramentre que  recibe  es x

 let cuadrado = numero => Math.pow(numero,2);
 console.log(cuadrado(6));
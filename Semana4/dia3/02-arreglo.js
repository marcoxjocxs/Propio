
//Creando un arreglo con elementos iniciales;
var marcas=["Hyundai","Toyota","Kia","Audi","Nissan"];
//Creando un arreglo vacio
var equipos =[];
//Imprimiendo un elemento del arreglo marcas
console.log(marcas[2]);
console.log(`${marcas[0]} - ${marcas[3]}`);
//imprimiendo todo el arreglo
console.log(marcas);
//asignando el valor en una posiciion del arreglo
marcas[3]="Daewoo";
console.log(marcas);

//Propiedades basicas de los arreglos
//Obtener la cantidad de  elementos de un arreglo
//length =>retorna la cantidad de los elementos de un arreglo
// arreglo
var elementos=marcas.length;
console.log(elementos);
console.log(marcas.length);

//Recorriendo un arreglo
for (let i = 0; i < marcas.length; i++) {
  console.log(marcas[i]);
  console.log(`Posion ${i} => ${marcas[i]}`);
    
}

var num=[1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < num.length; i++) {
    console.log(`Posion ${i} => ${num[i]}`);  
}
console.log("Numeros multiplos");
for (let i = 0; i < num.length; i++) {
    num[i]=num[i]**2;
    console.log(`Al cuadrado posicion ${i+1} => ${num[i]}`);  
}





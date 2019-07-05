var nombre="Asociacion Tecsup Arequipa";
//Obtener un texto en minusculas
console.log(nombre.toLowerCase());
//Obtener un texto en mayuscula
console.log(nombre.toUpperCase());
//Obtener el tamño de una cadena
console.log(nombre.length);
//Obtener una porcion de la cadena
console.log(nombre.substring(11,17));
//Obtener una porcion de la cadena dada, una posicion  inicial hasta el final
console.log(nombre.substring(11));
//Obtener un arreglo de subcadenas a partir de un caracter separado
console.log(nombre.split("e"));
//Obtener un caracter de la cadena dada su posicion
//forma1=> tratar a la cadena como un arreglo
console.log(nombre[11]);
//forma2 => usando la funcion charAt([posicion])
console.log(nombre.charAt(11));

//Obtener la posicion desde donde incia un caracter o subcadena
console.log(nombre.indexOf("e"));
//obtener una cadena sin los espacion en blanco en los extremos
console.log(nombre.trim());

for(let i=0;i<nombre.length;i++)
{
    console.log(nombre.charAt(i));
}
//1.obtener la cantidad de vocales mayusculas o minusculas de una cadena de texto
var vocales=0;
for(let i=0;i<nombre.length;i++)
{
    if(nombre[i]=='A'||nombre[i]=='E'||nombre[i]=='I'||nombre[i]=='O'||nombre[i]=='U'||nombre[i]=='a'||nombre[i]=='e'||nombre[i]=='i'||nombre[i]=='o'||nombre[i]=='u')
        vocales++;
}
console.log(vocales);

var texto = 'Vos queres un taco mexicano my cuate';
var buscar='queres';
for(let i=0;i<texto.length;i++)
{
    if(texto.substr(i,buscar.length)==buscar)
    {
        console.log("Se encontro la palabra");
    }
    else
    {
        console.log("No se encontro");
    }
}





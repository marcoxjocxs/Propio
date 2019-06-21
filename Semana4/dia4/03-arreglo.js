var paises = ['Peru', 'Venezuela', 'Brasil', 'Bolivia', 1, 4, 2, 3, true];

console.log(paises[0]);

var palabra = "Pizza ";
console.log(palabra[1]);
console.log(`La longitud de ${palabra} es ${palabra.length}`);
for (i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
}

var grupoA = ['Bolivia', 'Brasil', 'Peru', 'Venezuela','Chile'];
var goles = [1, 3, 3, 0,-10];
var estrella = ['Chumacero', 'Neymar', 'Guerrero', 'Maduro','Sanchez'];

///Bolivia metio 1 goles(s) y su mejor jugador es Chumacero

for (i = 0; i < grupoA.length; i++) {
    console.log(`${grupoA[i]} metio  ${goles[i]} gol(es) y su mejor jugador es ${estrella[i]} `)
}

////////////////////////////////////////


var personas=['El Sr. Garnica','El Sr. Rodriguez','La Sr. Azucena'];
var carrera=['ingeniero', 'ingeniero','psicologa'];
var edad=[27,26,40]


for (i = 0; i < personas.length; i++) {
    console.log(`${personas[i]} tiene ${edad[i]} y es ${carrera[i]}`);
}


/////////////////////////////////////////

var num=[9,8,2,15,8,7,6,7,8,2,1];
var cant;
do{
    cant=+prompt("Ingrese la cantidad de numeros finales que quiere");
    if(cant>num.length)
    {
       console.log("No mamees wey ingresa una cantidad mas pequeña al arreglo");
    }
    else{
        console.log("Aceptado");
    }
    
}while(cant==0);

for(let i=num.length-1;i>=num.length-cant;i--)
{
        console.log("."+num[i]);
}

/////////////////////////////////////////////

var comida="Pizza";
for(let i=comida;i>=0;i--)
{
    console.log(comida[i]);
}

///////////////////////////////////////////


var matriz=[[1,8,4],[3,2,5],[8,1,9]];
var matriz2=[[3,1,2],[4,3,1],[0,2,1]];
var matriz3=[];
for(let i=0;i<matriz.length;i++)
{
    matriz3[i]=[];
    for(let j=0;j<matriz[i].length;j++)
    {
        matriz3[i][j]=matriz[i][j] + matriz2[i][j];
    }
}
console.log(matriz3);




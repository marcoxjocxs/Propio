var objPerro = {
    raza:'Chihuahua',
    tamaño:'chiquito',
    color:'Blanquito',
    caracter:'Bullicioso',
    edad:11,
    hobbies:['masticarzapatos','perseguir gatos','jugar','dormir'],
}

var objPerro2 ={
    raza:'Pastor Aleman',
    tamaño:'Grande',
    color:'Negro con cafe',
    genero:'Hembra'
}
console.log(objPerro);
console.log(objPerro2);
console.log(objPerro.edad);

console.log(objPerro2.hobbies);

var jauria = [objPerro , objPerro2];
console.log(jauria);

var objPersona1={
    nombre:'Marco',
    apellido:'Villanueva',
    edad:22,
    dni:771237418,
    domicilio:'Sachaca',
    profesion: 'Sistemas',
    telefono:993712382,
} 
var objPersona2={
    nombre:'Lia',
    apellido:'Velasquez',
    edad:22,
    dni:771237481,
    domicilio:'Tahuaycani',
    profesion: 'Administracion',
    telefono:993712382,
}

var personas =[];
personas.push(objPersona1);
personas.push(objPersona2);
for(i=0;i<personas.length;i++)
{
    alert(`${personas[i].nombre} tiene el siguiente dni ${personas[i].dni}`);
    var nuevoDni = prompt("Ingrese su nuevo DNI");
    personas[i].dni = nuevoDni;
    var Genero = prompt("El genero de la persona es ?");
    personas[i].genero=Genero;

}
console.log(personas);


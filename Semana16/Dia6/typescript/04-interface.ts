interface iPersona
{
    nombre:string,
    apellido:string,
    dni:number,
    talla?:number 
}
let persona2:iPersona = {
    nombre:"Marco",
    apellido:"Villanueva",
    dni:1234565
}

let mostrarDatos = (persona:iPersona)=>{
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if(persona.talla)
    {
        console.log(persona.talla);
    }
}

let objPersona:iPersona = {
    nombre:"Patricio",
    apellido:"Rodriguez",
    dni:1234566,
    talla:12343
}

mostrarDatos(objPersona);
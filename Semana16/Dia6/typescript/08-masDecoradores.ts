//tambien sera un decorador en una clase;

function loCorrecto(target)
{
    return class extends target{
        nombre = "James";
        apellido = "Bond";

        saludo()
        {
            return `Buen dia yo soy el ${this.nombre} ${this.apellido}`;
        }
    }
    
}
@loCorrecto
class Persona{
    nombre:string
    apellido:string
    //Seleccionas el metodo le pones f1 y add coment
    constructor(nombre:string,apellido:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludo()
    {
        return `Hola me llamo ${this.nombre} ${this.apellido} xD que tal`;
    }
}

let Personita:Persona = new Persona("Patrick","Rodriguez");
console.log(Personita.saludo());
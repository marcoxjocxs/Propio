function patrick(target,key)
{
    console.log("Ya pero despues me llavas a comer " + key);
}
// key viene a ser la funcion y target seria persona 
class Persona
{
    private nombre:string;
    private apellido:string;
    constructor(nombre:string,apellido:string)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }  
    @patrick
    Saludar()
    {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y me voy a consumir unas chelas`);
    }

}

let alumnoCodigo:Persona = new Persona("Jorge","Garnica");
alumnoCodigo.Saludar();
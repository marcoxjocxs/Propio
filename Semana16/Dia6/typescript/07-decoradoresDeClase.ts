function decorador(texto:string)
{
    return function(target){
        target.prototype.saludar = function(){
            console.log("holi " +texto);
        }
        target.prototype.anio = new Date().getFullYear();
    }
}

@decorador("Como estan :D")
class Promocion
{
    integrantes:Array<string>;
    nombre:string;

    constructor(integrantes:Array<string>,nombre:string)
    {
        this.integrantes=integrantes;
        this.nombre=nombre;
    }

    //saludar()
    //{
    //  
    //}
    imprimirIntegrantes(){
        this.integrantes.forEach((integrante:string)=>{
            console.log(integrante);
        })
    }
}

let codigo6:Promocion = new Promocion(["Marco","Lia","Luca","Nicole","Willy","Jannet","Sofia"],"TheTeamRetard");
codigo6.saludar();
console.log(codigo6.anio);
codigo6.imprimirIntegrantes();
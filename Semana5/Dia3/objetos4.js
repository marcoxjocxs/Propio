var palabra='agua';

console.log(palabra.length);
console.log(palabra.toUpperCase());


function Persona(nombreInicial,edadInicial,dniIncial,sueldoIncial)
{
    var objPersona={
        nombre:nombreInicial,
        edad:edadInicial,
        dni:dniIncial,
        genero:'No especifica',
        email:'No dice',
        sueldo:sueldoIncial,
        verPersona: function(){
            console.log(`Nombre: ${this.nombre}
                        Edad: ${this.edad}
                        DNI: ${this.dni}
                        Genero: ${this.genero}
                        Email: ${this.email}
                        Sueldo: ${this.sueldo}`);
        },
        cambiarGenero:function(nuevoGenero){
            this.genero=nuevoGenero;
        } ,
        cambiarNombre:function(nuevoNomre){
            this.nombre=nuevoNomre;
        } 
    }
    return objPersona;
    

}

var Maria=Persona('Maria','22','51515156151',100);
var Paolo=Persona('Paolo','35','61616161616',100000);

Maria.verPersona();
Paolo.verPersona();

Maria.cambiarGenero("Mujer");
Maria.verPersona();
Maria.cambiarNombre("Mario");
Maria.verPersona();
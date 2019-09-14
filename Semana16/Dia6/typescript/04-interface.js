var persona2 = {
    nombre: "Marco",
    apellido: "Villanueva",
    dni: 1234565
};
var mostrarDatos = function (persona) {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if (persona.talla) {
        console.log(persona.talla);
    }
};
var objPersona = {
    nombre: "Patricio",
    apellido: "Rodriguez",
    dni: 1234566,
    talla: 12343
};
mostrarDatos(objPersona);

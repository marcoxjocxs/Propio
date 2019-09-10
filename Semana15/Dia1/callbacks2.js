let BDalumnos = [
    {
        id: 1,
        nombre: "Lia",
        edad: 22
    },
    {
        id: 2,
        nombre: "Marco",
        edad: 22
    },
    {
        id: 3,
        nombre: "Jannet",
        edad: 22
    },
    {
        id: 4,
        nombre: "Luca",
        edad: 21
    }
];

//id = id a buscar ,caliback = mi funcion callback
let getAlumnoById = (id, callback) => {
    for (let i = 0; i < BDalumnos.length; i++) {
        if (BDalumnos[i].id === id) {
            callback(null, BDalumnos[i]);
            //cortamos la ejecucion del codigo con return
            return;
        }
    }
    callback("No se encontro el alumno",null);
}
getAlumnoById(2, (error, objAlumno) => {
    if(error){
        console.log(error);
    }
    else
    {
        console.log(objAlumno);
    }
});


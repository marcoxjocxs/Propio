let alumnos =[
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
let cursos = [
    {
        alumnoId:1,
        cursos:["Animacion","Diseño"]
    },
    {
        alumnoId:2,
        cursos:["Python","Diseño"]
    }
];
let getAlumnoById = (id,callback) =>{
    for(let i =0;i<alumnos.length;i++)
    {
        if(alumnos[i].id== id){
            callback(null,alumnos[i]);
            return;
        }
    }
    callback("No se encontro el alumno");
}

let getCursosByAlumnoId = (id,callback) =>{
    for(let i =0;i<cursos.length;i++)
    {
        if(cursos[i].alumnoId==id)
        {
            callback(null,cursos[i]);
            return;
        }
    }
    callback("No exixste cursos para el alumno");
}
let idalu = +prompt("Ingrese el id del Alumno")
getAlumnoById(idalu, (error, objAlumno) => {
    if(error){
        console.log(error);
    }
    else
    {
        //Quiero buscar el curso segun el id
        console.log("Alumn@ "+objAlumno.nombre+": ")
        console.log(objAlumno);
        getCursosByAlumnoId(1, (error, objCursos) => {
            if(error){
                console.log(error);
            }
            else
            {
                console.log("Se han encontrado los siguientes cursos  : " + objAlumno.nombre)
                console.log(objCursos);
            }
        });   
    }
});

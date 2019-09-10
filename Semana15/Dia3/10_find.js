let alumnitos = 
[
    {id:1,nombre:"Marco",edad:22},
    {id:2,nombre:"Suam",edad:22},
    {id:3,nombre:"Jose",edad:25},
]

let  encontrado =alumnitos.find((alumno) =>{
    return alumno.edad === 25;
})

console.log(encontrado);
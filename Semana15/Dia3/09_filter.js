let alumnitos = 
[
    {id:1,nombre:"Marco",edad:22},
    {id:2,nombre:"Suam",edad:22},
    {id:3,nombre:"Jose",edad:22},
]
let mayoresA20 = alumnitos.filter(alumno=>{
    return alumno.edad > 20;
});
mayoresA20.forEach(function(elemento){
    console.log(elemento);
})

mayoresA20.forEach(elemento => console.log(elemento));
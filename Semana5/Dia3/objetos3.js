var cafe="Late";

var jugo={
    ingredientes1:'Papaya',
    ingredientes2:'agua',
    ingredientes3:'azucar',
    ingredientes4:null
}
delete cafe;
delete jugo.ingredientes4;
console.log(jugo);

//copiar objetos
var gato={
    nombre:'Salem',
    color:'Negro'
}
var gato2=gato;
console.log(gato);
console.log(gato2);

gato2.color='Blanco';
console.log(gato);
console.log(gato2);

// el gato tres va a tomar todas las propiedades del gato solo con una diferencia
/* var gato3 = Object.assign(gato);
 */
var gato3={...gato};
gato3.color='Verde';

console.log(gato);
console.log(gato2);
console.log(gato3);
console.log("Comparando gatos pinches gatos");
console.log(gato==gato2);
console.log(gato==gato3);

var auto = {
    motor :'6 cilindros',
    cambios:'manual',
    suspension:'Hidraulica',
    asientos:'tela'
}
console.log(Object.keys(auto));
/* function retornarAuto(auto){
    return{...auto,asientos:'cuero'};
} */
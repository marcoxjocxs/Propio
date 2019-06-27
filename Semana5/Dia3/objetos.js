/*  SINTAXIS
    var objCelular = {
    pantalla: '6 pulgadas';
    marca: 'Huawei';
    memoria: '4 GB',
    sensorHuellla:true 
}
*/

//De un pequeño sistema de mantenimientos de autos
//arreglos para agrupar una cantidad de propiedades
//que en este caso son mantenumientos
//Y tambien vamos a añadir en las propiedades del vehiculo
//funciones que permitan obtener datos del vehiculo

var objVehiculo1 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Rojo',
    anio: 2019,
    mantenimientos: [
        {
            fecha: '01-01-2019',
            observaciones: 'Sin observaciones',
            kilometraje: 9000
        },
        {
            fecha: '02-05-2019',
            observaciones: 'Se observo un raspon',
            kilometraje: 10000
        }
    ],
    verVehiculo: function () {
        console.log(this);
    },
    mostrarMantenimientos: function () {
        for (i = 0; i < this.mantenimientos.length; i++) {
            console.log(`Èl mantenumiento ${[i]} se llevo acabo el ${this.mantenimientos[i].fecha} con un kilometraje de ${this.mantenimientos[i].kilometraje} y tiene las siguientes observaciones ${this.mantenimientos[i].observaciones}`);
        }
    }
}
objVehiculo1.verVehiculo();
var mantenimientoAdicional = {
    fecha: '26-06-2019',
    observaciones: 'Estaba sucio , no lo lavan',
    kilometraje: 11000
}
objVehiculo1.mantenimientos.push(mantenimientoAdicional);
objVehiculo1.mostrarMantenimientos();
/* C ree un carrito de conmpras que tenga NombredeUsuario y una propiedad Producto que sea un arreglo donde guarde todos los productos
 con NombreProducto , Canntidad y precio y una funcion que me devuelva todos los 
 */
var objPersona1={
    nombre:'Marco',
    apellido:'Villanueva',
    edad:22,
    dni:771237481,
    domicilio:'Tahuaycani',
    telefono:993712382
}
var carrito={ 
    Nombre:objPersona1.nombre,
    direcciondelpedido: objPersona1.domicilio,
    carrito:[
        {
            idproducto:0001,
            NombreProducto: 'Cereal',
            marca: 'Corn Flakes',
            precio: '16 soles',
            peso:'500 gr'

        },
        {
            idproducto:0002,
            NombreProducto: 'Yogurd',
            marca: 'Gloria',
            precio: '10 soles',
            peso:'1.5 litros'

        },
        {
            idproducto:0003,
            NombreProducto: 'Leche',
            marca: 'Gloria',
            precio: '8 soles',
            peso:'500 mltrs'

        },
        {
            idproducto:0004,
            NombreProducto: 'mantequilla',
            marca: 'Laive',
            precio: '9 soles',
            peso:'150 gr'

        }

    ],
    verproductos: function(){
        for (i = 0; i < this.carrito.length; i++) {
            console.log(`Èl id del prducto es ${this.carrito[i].idproducto} el nombre del producto es ${this.carrito[i].NombreProducto} con una Marca de ${this.carrito[i].marca} y tiene un precio de  ${this.carrito[i].precio} El produto contiene un peso de ${this.carrito[i].peso}`);
        }
    }

}
console.log(carrito);
carrito.verproductos();



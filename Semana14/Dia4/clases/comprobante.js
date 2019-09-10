/*  
function Auto(placa,color,marca){
    this.placa = placa;
    this.color = color;
    this.marca = marca;
}
var camioneta = new Auto("EH-4548","Rojo","Hyundai");
Auto.prototype.resumen = function(){
    console.log("Este auto de marca: "+this.marca + " de color " + this.color);
}
console.log(camioneta);
*/

//Creacion de una clase
class Comprobante{
    comprobante_id = 0;
    comprobante_fecha = new Date();
    comprobante_total = 0;
    comprobante_detalle = [];
    constructor(comp_id,comp_fecha)
    {
        this.comprobante_id=comp_id;
        this.comprobante_fecha=comp_fecha;
    }
    añadirDetalle(objProducto){
        // ObjDetalle sera un objeto , por que puede contener varios camps,id,nombre_pro , precio_unitario , descripcion
        this.comprobante_detalle.push(objProducto);
    }
    mostrarFechaComprobante()
    {
        console.log(this.comprobante_fecha);
    }

    mostrarComprobante(){
        console.log(this);
    }

    calcularSubTotal(cantidad,prec_unit)
    {
        return cantidad*prec_unit;
    }
}

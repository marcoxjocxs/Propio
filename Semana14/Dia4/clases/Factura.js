class Factura extends Comprobante {
    factura_igv_porcentaje = 0;
    factura_igv_total = 0;

    constructor(comp_id, comp_fecha, fact_igv) {   //accedemos al constructor de Comprobante y seteamos sus propiedades
        super(comp_id, comp_fecha);
        this.factura_igv_porcentaje = fact_igv;
    }

    recalculo() {
        let total = 0;
        console.log(this.comprobante_detalle);
        for (let i = 0; i < this.comprobante_detalle.length; i++) {
            let cantidad=this.comprobante_detalle[i].detalle_cant;
            let precio_unitario=this.comprobante_detalle[i].detalle_p_unit;
            total += this.calcularSubTotal(cantidad, precio_unitario);
        }
        this.factura_igv_total = total*this.factura_igv_total/100;
        this.comprobante_total =total;
    }
}
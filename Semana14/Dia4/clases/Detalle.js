class Detalle{
    // Seteando las propiedades de detalle y el tipo de esas propiedades
    detalle_id = 0;
    detalle_cant = 0;
    detalle_desc = "";
    detalle_p_unit = 0;
    
    constructor(det_id,det_cant,det_desc,det_p_unit){
        this.detalle_id = det_id;
        this.detalle_cant=det_cant;
        this.detalle_desc=det_desc;
        this.detalle_p_unit=det_p_unit;
    }
}
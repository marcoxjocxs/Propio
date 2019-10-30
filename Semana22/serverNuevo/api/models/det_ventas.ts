import { Sequelize, Model } from "sequelize";


export var det_ventas_model = (sequelize: Sequelize, type: any) => {

    class det_ventas_model extends Model{};

    /* var producto_model = sequelize.define('t_producto', { */
        det_ventas_model.init({
           dv_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
       dv_cant: {
            type: type.INTEGER
        },
       dv_punit:{
            type:type.FLOAT
        },
       dv_importe:{
            type:type.FLOAT
        },
    },
    {
        sequelize,
        modelName:'t_det_ventas',
        timestamps:false
    });
    return det_ventas_model;

}
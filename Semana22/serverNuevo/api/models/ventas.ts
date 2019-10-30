import { Sequelize, Model } from "sequelize";


export var ventas_model = (sequelize: Sequelize, type: any) => {

    class ventas_model extends Model{};

    /* var producto_model = sequelize.define('t_producto', { */
        ventas_model.init({
           vent_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
       vent_fecha: {
            type: type.STRING(45)
        },
       vent_subTotal:{
            type:type.FLOAT
        },
       vent_montoigv:{
            type:type.FLOAT
        },
        vent_total:{
            type:type.FLOAT
        }
    },
    {
        sequelize,
        modelName:'t_ventas',
        timestamps:false
    });
    return ventas_model;

}
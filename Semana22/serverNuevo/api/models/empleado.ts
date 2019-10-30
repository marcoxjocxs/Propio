import { Sequelize, Model } from "sequelize";


export var empleado = (sequelize: Sequelize, type: any) => {

    class empleado_model extends Model{};

    /* var producto_model = sequelize.define('t_producto', { */
        empleado_model.init({
        prop_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        prod_nom: {
            type: type.STRING(100)
        },
        prod_descr:{
            type:type.STRING(1000)
        },
        prod_price:{
            type:type.DECIMAL(5,2)
        }

    },
    {
        sequelize,
        modelName:'t_empleado',
        timestamps:false
    });
    return empleado_model;

}
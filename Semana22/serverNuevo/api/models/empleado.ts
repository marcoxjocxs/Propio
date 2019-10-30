import { Sequelize, Model } from "sequelize";


export var empleado_model = (sequelize: Sequelize, type: any) => {

    class empleado_model extends Model{};

    /* var producto_model = sequelize.define('t_producto', { */
        empleado_model.init({
            emp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        emp_nom: {
            type: type.STRING(100)
        },
        emp_ape:{
            type:type.STRING(100)
        },
        emp_dni:{
            type:type.STRING(11)
        }

    },
    {
        sequelize,
        modelName:'t_empleado',
        timestamps:false
    });
    return empleado_model;

}
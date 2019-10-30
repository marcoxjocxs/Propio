import { Sequelize, Model } from "sequelize";


/* export interface iProducto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock?: number;
} */

export var producto_model = (sequelize: Sequelize, type: any) => {

    class producto_model extends Model{};

    /* var producto_model = sequelize.define('t_producto', { */
        producto_model.init({
        prop_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        prod_nom: {
            type: type.STRING(45)
        },
        prod_descr:{
            type:type.STRING(100)
        },
        prod_price:{
            type:type.DECIMAL(5,2)
        }

    },
    {
        sequelize,
        modelName:'t_productos',
        timestamps:false
    });
    return producto_model;

}
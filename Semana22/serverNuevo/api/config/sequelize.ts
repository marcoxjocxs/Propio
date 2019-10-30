import { Sequelize } from 'sequelize';
import { producto_model } from '../models/iProducto';
import { empleado_model } from '../models/empleado';
import { ventas_model } from '../models/ventas';
import { det_ventas_model } from '../models/det_ventas';
//Sequelize necesito para conectarse a la  base de datos:('base de datos','usuaruio','contraseña','{opciones adicionales}')
export const sequelize = new Sequelize('tienda2','root','root',{
    host:'localhost',
    dialect:"mysql",
    timezone:'-06:00',
    logging:console.log
});
export const pruebaConexion =()=>{
    sequelize.authenticate().then(()=>{
        console.log("Nos hemos conectado a la Bd de la forma correcta! :D ");
    }).catch((error:any) => {
        console.log("No se pudo conectar a la BD :(  que sad ");
    })
}
export const Producto=producto_model(sequelize,Sequelize);
export const Empleado=empleado_model(sequelize,Sequelize);
export const Ventas=ventas_model(sequelize,Sequelize);
export const DetVentas=det_ventas_model(sequelize,Sequelize);


Ventas.belongsTo(Empleado,{foreignKey:'emp_id'});
Empleado.hasMany(Ventas,{foreignKey:'emp_id'})
DetVentas.belongsTo(Producto,{foreignKey:'prop_id'});
Producto.hasMany(DetVentas,{foreignKey:'prop_id'});
DetVentas.belongsTo(Ventas,{foreignKey:'vent_id'});
Ventas.hasMany(DetVentas,{foreignKey:'vent_id'});

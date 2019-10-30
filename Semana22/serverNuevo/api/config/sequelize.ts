import { Sequelize } from 'sequelize';
import { producto_model } from '../models/iProducto';


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
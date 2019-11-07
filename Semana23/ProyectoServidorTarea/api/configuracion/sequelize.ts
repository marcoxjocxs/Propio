import { aula_model } from './../modelos/aula';
import { pabellon_model } from './../modelos/pabellon';
import { tipoaula_model } from '../modelos/tipoAula';
import { reserva_model } from '../modelos/reserva';
import { usuario_model } from '../modelos/usuario';
const Sequelize = require("sequelize");

export const conexion = new Sequelize('aulas', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-06:00',
  // configuración para lectura de fechas en la base de datos
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  }
});
//export const conexion2= new Sequelize('mysql://root:root@localhost:3306/aulas');

export const Pabellon = pabellon_model(conexion);
export const Aula = aula_model(conexion);
export const TipoAula= tipoaula_model(conexion);
export const Usuario = usuario_model(conexion);
export const Reserva= reserva_model(conexion);

Pabellon.hasMany(Aula, { foreignKey: "pab_id" });
Aula.belongsTo(Pabellon, { foreignKey: "pab_id" });

Aula.hasMany(Reserva,{foreignKey:'aula_id'});
Reserva.belongsTo(Aula,{foreignKey:'aula_id'});

Usuario.hasMany(Reserva,{foreignKey:'usu_id'});
Reserva.belongsTo(Usuario,{foreignKey:'usu_id'});

TipoAula.hasMany(Aula,{foreignKey:'taula_id'});
Aula.belongsTo(TipoAula,{foreignKey:'taula_id'});
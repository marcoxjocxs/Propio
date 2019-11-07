import { DataTypes } from 'sequelize';
const crypto=require('crypto');

export let usuario_model = (sequelize: any) => {
    let usuario = sequelize.define('t_usuario',
        {
            usu_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            usu_nom: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            usu_ape: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            usu_email: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            usu_hash: {
                type: DataTypes.TEXT,
            },
            usu_salt: {
                type: DataTypes.TEXT,
            }
        },
        {
            tabla_name: 't_usuario',
            timestamps: false
        });

        usuario.prototype.setSaltYHash = function(password:any)
        {
            this.usu_salt = crypto.randomBytes(16).toString('hex');
            this.usu_hash = crypto.pbkdf2Sync(password,this.usu_salt,1000,64,'sha512').toString('hex');
        }
    return usuario;
}
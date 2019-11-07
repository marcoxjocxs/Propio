import { DataTypes } from 'sequelize';


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
    return usuario;
}
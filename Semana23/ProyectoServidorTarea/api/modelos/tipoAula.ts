import { DataTypes } from 'sequelize';

export let tipoaula_model = (sequelize: any) => {
    let tipoAula = sequelize.define('t_TipoAula', {
        taula_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        taula_descripcion:
        {
            type:DataTypes.STRING(45),
            allowNull:true
        }
    },
    {
            tabla_name:'t_TipoAula',
            timestamps:false
    });

    return  tipoAula;
}
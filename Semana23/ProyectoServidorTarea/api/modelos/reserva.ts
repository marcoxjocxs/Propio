import { DataTypes } from 'sequelize';


export let reserva_model = (sequelize: any) => {
    let reserva = sequelize.define('t_reserva',
        {
            res_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            res_fechIn: {
                type: DataTypes.DATE,
            },
            res_fechFin: {
                type: DataTypes.DATE,
            },
            res_est: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            res_observacion: {
                type: DataTypes.TEXT,
            }
        },
        {
            tabla_name: 't_reserva',
            timestamps: false
        });
    return reserva;
}
import { DataTypes } from 'sequelize';

export let Categorias_model = (sequelize: any) => {

  let Categorias = sequelize.define('t_categorias', {
    cat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cat_nom: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 't_categorias',
    timestamps: true
  });

  return Categorias;

}
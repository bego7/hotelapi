'use strict';
module.exports = (sequelize, DataTypes) => {
  const habitacion = sequelize.define('habitacion', {
    numero_habitacion: DataTypes.INTEGER
  }, {});
  habitacion.associate = function(models) {
    habitacion.belongsTo(models.tipo,{
        foreignKey: 'tipo_id',
        as:'tipo_id',
        onDelete: 'CASCADE',
      });
  };
  return habitacion;
};
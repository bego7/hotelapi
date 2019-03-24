'use strict';
module.exports = (sequelize, DataTypes) => {
  const reserva_habitacion = sequelize.define('reserva_habitacion', {
    reserva_id: DataTypes.INTEGER,
    habitacion_id: DataTypes.INTEGER
  }, {});
  reserva_habitacion.associate = function(models) {

    // associations can be defined here
    reserva_habitacion.belongsTo(models.reserva, {
      foreignKey: 'reserva_id',
      as: 'reserva_id',
      onDelete: 'CASCADE',
    });
   reserva_habitacion.belongsTo(models.habitacion, {
      foreignKey: 'habitacion_id',
      as: 'habitacion_id',
      onDelete: 'CASCADE',
    });
  
  reserva.belongsToMany(models.reserva, {
      as: 'habitacion_id',
      through: models.reserva_habitacion,
    });
  };
  return reserva_habitacion;
};
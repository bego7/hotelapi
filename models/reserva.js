'use strict';
module.exports = (sequelize, DataTypes) => {
  const reserva = sequelize.define('reserva', {
    fecha_ingreso: DataTypes.DATEONLY,
    fecha_salida: DataTypes.DATEONLY,
    cantidad_personas: DataTypes.INTEGER,
    codigo_reserva: DataTypes.STRING
  }, {});
  reserva.associate = function(models) {
    // associations can be defined here
    // reserva.belongsTo(models.cliente);
  };
  return reserva;
};
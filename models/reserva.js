'use strict';
module.exports = (sequelize, DataTypes) => {
  const reserva = sequelize.define('reserva', {
    fecha_ingreso: DataTypes.DATEONLY,
    fecha_salida: DataTypes.DATEONLY,
    cantidad_personas: DataTypes.INTEGER,
    codigo_reserva: DataTypes.STRING
  }, {});
  reserva.associate = function(models) {
    reserva.belongsTo(models.cliente,{
      foreignKey: 'cliente_id',
      as:'cliente_id',
      onDelete: 'CASCADE',
    });
  };
  return reserva;
};
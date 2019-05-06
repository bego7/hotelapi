'use strict';
module.exports = (sequelize, DataTypes) => {
  const pago = sequelize.define('pago', {
    total: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    url_imagen: DataTypes.TEXT
  }, {});
  pago.associate = function(models) {
    // associations can be defined here
    pago.hasOne(models.reserva,{
      foreignKey: 'pago_id',
      as:'pago_id',
      onDelete: 'CASCADE',
    });
  };
  return pago;
};
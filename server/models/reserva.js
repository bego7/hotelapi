const sequelize = require('sequelize')
'use strict';
module.exports = (sequelize, DataTypes) => {
  const reserva = sequelize.define('reserva', {
    fecha_ingreso: DataTypes.DATEONLY,
    fecha_salida: DataTypes.DATEONLY,
    cantidad_personas: DataTypes.INTEGER,
    codigo_reserva: DataTypes.STRING
  }, {});
  const reservahabitacion = sequelize.define('reservahabitacion');
  reserva.associate = function(models) {
    reserva.belongsTo(models.cliente,{
      foreignKey: 'cliente_id',
      as:'idCliente',
      onDelete: 'CASCADE',
    });

    reserva.belongsTo(models.pago,{
      foreignKey: 'pago_id',
      as:'idPago',
      onDelete: 'CASCADE',
    });

    reserva.belongsToMany(models.habitacion, {
      through: 'reservahabitacion',
    });
    sequelize.sync()
  };
  return reserva;
};


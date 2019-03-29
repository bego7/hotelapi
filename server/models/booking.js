'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    fecha_ingreso: DataTypes.DATEONLY,
    fecha_salida: DataTypes.DATEONLY,
    cantidad_personas: DataTypes.INTEGER,
    codigo_reserva: DataTypes.STRING,
    total: DataTypes.INTEGER,
    tipo_pago: DataTypes.STRING,
    url_imagen: DataTypes.STRING,
    numero_habitacion: DataTypes.INTEGER,
    tipo_habitacion: DataTypes.STRING
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
  };
  return booking;
};
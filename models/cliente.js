'use strict';
module.exports = (sequelize, DataTypes) => {
  const cliente = sequelize.define('cliente', {
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {});
  cliente.associate = function(models) {
    // client has many reservas
    // cliente.hasMany(models.reserva);
  };
  return cliente;
};
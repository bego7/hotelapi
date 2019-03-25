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
    cliente.hasMany(models.reserva,{
      foreignKey: 'cliente_id',
      as:'reserva',
    });
  };
  return cliente;
};
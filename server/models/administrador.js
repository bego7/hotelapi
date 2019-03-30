'use strict';
module.exports = (sequelize, DataTypes) => {
  const administrador = sequelize.define('administrador', {
    nombre_usuario: DataTypes.STRING,
    contra: DataTypes.STRING
  }, {});
  administrador.associate = function(models) {
    // associations can be defined here
  };
  return administrador;
};
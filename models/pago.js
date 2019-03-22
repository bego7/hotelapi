'use strict';
module.exports = (sequelize, DataTypes) => {
  const pago = sequelize.define('pago', {
    total: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    url_imagen: DataTypes.STRING
  }, {});
  pago.associate = function(models) {
    // associations can be defined here
  };
  return pago;
};
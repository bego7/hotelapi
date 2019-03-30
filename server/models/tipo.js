'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipo = sequelize.define('tipo', {
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER
  }, {});
  tipo.associate = function(models) {
    tipo.hasMany(models.habitacion,{
      foreignKey: 'tipo_id',
      as:'habitacion',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return tipo;
};
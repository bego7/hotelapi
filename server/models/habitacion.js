'use strict';

module.exports = (sequelize, DataTypes) => {
  const habitacion = sequelize.define('habitacion', {
    numero_habitacion: DataTypes.INTEGER
  }, {});
  const reservahabitacion = sequelize.define('reservahabitacion');
  habitacion.associate = function(models) {
    habitacion.belongsTo(models.tipo,{
        foreignKey: 'tipo_id',
        as:'idTipo',
        onDelete: 'CASCADE',
      });

      // habitacion.hasMany(models.reserva,{
      //   foreignKey: 'tipo_id',
      //   as:'habitacion',
      //   onDelete: 'CASCADE',
      //   hooks: true
      // });
      habitacion.belongsToMany(models.reserva, {
        through: 'reservahabitacion'
      });
  };
  return habitacion;
};
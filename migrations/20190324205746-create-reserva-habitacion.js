'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reserva_habitacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reserva_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'reservas',
          key: 'id',
        },
      },
      habitacion_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'habitacions',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reserva_habitacions');
  }
};
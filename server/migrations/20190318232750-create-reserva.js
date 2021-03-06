'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_ingreso: {
        type: Sequelize.DATEONLY
      },
      fecha_salida: {
        type: Sequelize.DATEONLY
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clientes',
          key: 'id',
          as: 'idCliente'
        }
      },
      pago_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pagos',
          key: 'id',
          as: 'idPago'
        }
      },
      cantidad_personas: {
        type: Sequelize.INTEGER
      },
      codigo_reserva: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('reservas');
  }
};
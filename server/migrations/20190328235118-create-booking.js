'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      fecha_ingreso: {
        type: Sequelize.DATEONLY
      },
      fecha_salida: {
        type: Sequelize.DATEONLY
      },
      cantidad_personas: {
        type: Sequelize.INTEGER
      },
      codigo_reserva: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      },
      tipo_pago: {
        type: Sequelize.STRING
      },
      url_imagen: {
        type: Sequelize.STRING
      },
      numero_habitacion: {
        type: Sequelize.INTEGER
      },
      tipo_habitacion: {
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
    return queryInterface.dropTable('bookings');
  }
};
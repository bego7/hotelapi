'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('reservas', [{
    fecha_ingreso:"2019-04-02",
    fecha_salida:"2019-04-05",
    cantidad_personas:4,
    codigo_reserva:"GZ567898",
    cliente_id:1,
    pago_id:1,
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    fecha_ingreso:"2019-05-10",
    fecha_salida:"2019-05-12",
    cantidad_personas:4,
    codigo_reserva:"GZ567898",
    cliente_id:1,
    pago_id:1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fecha_ingreso:"2019-06-18",
    fecha_salida:"2019-06-21",
    cantidad_personas:2,
    codigo_reserva:"GZ567899",
    cliente_id:2,
    pago_id:2,
    createdAt: new Date(),
    updatedAt: new Date()
    
  },{
    fecha_ingreso:"2019-06-18",
    fecha_salida:"2019-06-21",
    cantidad_personas:8,
    codigo_reserva:"",
    cliente_id:2,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('reservas', null, {})
  }
};

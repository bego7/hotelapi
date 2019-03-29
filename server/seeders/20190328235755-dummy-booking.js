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

   return queryInterface.bulkInsert('bookings', [{
    nombre:"Ramon",
    correo:"ramon@gmail.com",
    telefono:"9512287161",
    fecha_ingreso:"2019-08-02",
    fecha_salida:"2019-08-05",
    cantidad_personas:2,
    total:3450,
    codigo_reserva:"GZ567898",
    tipo_pago:"Depósito",
    url_imagen:"https://www.malware-traffic-analysis.net/2015/01/20/2015-01-20-phishing-email-screenshot.jpg",
    numero_habitacion:2,
    tipo_habitacion:"Suite",
    createdAt: new Date(),
    updatedAt: new Date(),
   
  }, {
    nombre:"Ana",
    correo:"ana@gmail.com",
    telefono:"9514561618",
    fecha_ingreso:"2019-12-02",
    fecha_salida:"2019-12-05",
    cantidad_personas:4,
    total:1200,
    codigo_reserva:"GZ567889",
    tipo_pago:"AirBnB",
    url_imagen:"https://www.malware-traffic-analysis.net/2015/01/20/2015-01-20-phishing-email-screenshot.jpg",
    numero_habitacion:4,
    tipo_habitacion:"Suite",
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
   return queryInterface.bulkDelete('bookings', null, {})
  }
};

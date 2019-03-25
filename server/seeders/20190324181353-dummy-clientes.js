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
   return queryInterface.bulkInsert('clientes', [{
    nombre:"Ramon",
    apellido_paterno:"Montes",
    apellido_materno:"Gómez",
    correo:"ramon@gmail.com",
    telefono:"9512287161",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    nombre:"Ana",
    apellido_paterno:"Galguera",
    apellido_materno:"López",
    correo:"ana@gmail.com",
    telefono:"9514561618",
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
   return queryInterface.bulkDelete('clientes', null, {});
  }
};

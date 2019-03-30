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

   return queryInterface.bulkInsert('administradors', [{
    nombre_usuario: "Grecia",
    contra: "777777",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    nombre_usuario: "María",
    contra: "1799",
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('administradors', null, {})
  }
};

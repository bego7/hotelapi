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
    return queryInterface.bulkInsert('tipos', [{
        nombre: "Sencilla",
        precio: 1499,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: "Doble",
        precio: 1799,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: "Suite",
        precio: 2399,
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
    return queryInterface.bulkDelete('tipos', null, {});
  }
};

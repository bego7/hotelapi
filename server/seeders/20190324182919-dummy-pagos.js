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

   return queryInterface.bulkInsert('pagos', [{
    total:1500,
    tipo:"Depósito",
    url_imagen:"https://www.malware-traffic-analysis.net/2015/01/20/2015-01-20-phishing-email-screenshot.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    total:5500,
    tipo:"Airbnb",
    url_imagen:"https://boletiahelp.zendesk.com/hc/article_attachments/360007916231/mceclip5.png",
    createdAt: new Date(),
    updatedAt: new Date()
  }],{});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('pagos', null, {})
  }
};

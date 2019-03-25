// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

// stuff that was created for me

const clienteController = require('../controllers').cliente;
const pagoController = require('../controllers').pago;
const tipoController = require('../controllers').tipo;
const habitacionController = require('../controllers').habitacion;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hotel boutique Ex-hacienda de San Antonio Api!',
  }));

  // Routes for clients
  app.post('/api/clientes', clienteController.create);

   // Routes for payments
   app.post('/api/pagos', pagoController.create);

  // Routes for types
  app.post('/api/tipos', tipoController.create);

  // Routes for rooms
  app.post('/api/habitaciones', habitacionController.create);

};

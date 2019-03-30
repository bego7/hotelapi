const clienteController = require('../controllers').cliente;
const pagoController = require('../controllers').pago;
const tipoController = require('../controllers').tipo;
const habitacionController = require('../controllers').habitacion;
const reservaController = require('../controllers').reserva;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hotel boutique Ex-hacienda de San Antonio Api!',
  }));

  // Routes for clientes
  app.post('/api/clientes', clienteController.create);
  app.get('/api/clientes', clienteController.list);
  app.get('/api/clientes/:id', clienteController.retrieve);
  app.put('/api/clientes/update/:id', clienteController.update);

   // Routes for pagos
  app.post('/api/pagos', pagoController.create);
  app.get('/api/pagos', pagoController.list);

  // Routes for tipos
  app.post('/api/tipos', tipoController.create);
  app.get('/api/tipos', tipoController.list);
  app.get('/api/tipos/:id', tipoController.retrieve);
  app.put('/api/tipos/update/:id', tipoController.update);
  app.delete('/api/tipos/delete/:id', tipoController.delete);

  // Routes for habitaciones
  app.post('/api/habitaciones', habitacionController.create);
  app.get('/api/habitaciones', habitacionController.list);

// Routes for reservas
  app.post('/api/reservas', reservaController.create);
  app.get('/api/reservas', reservaController.list);


};

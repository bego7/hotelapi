const clienteController = require('../controllers').cliente;
const pagoController = require('../controllers').pago;
const tipoController = require('../controllers').tipo;
const habitacionController = require('../controllers').habitacion;
const reservaController = require('../controllers').reserva;
const administradorController = require('../controllers').administrador;
const authenticationController = require('../controllers').authentication;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hotel boutique Ex-hacienda de San Antonio Api!',
  }));

  // authentication routes
  app.post('/api/login', authenticationController.login);

  // Routes for clientes
  app.post('/api/clientes', clienteController.create);
  app.get('/api/clientes', clienteController.list);
  app.get('/api/clientes/:id', clienteController.retrieve);
  app.put('/api/clientes/update/:id', clienteController.update);

   // Routes for pagos
  app.post('/api/pagos', pagoController.create);
  app.get('/api/pagos', pagoController.list);
  app.get('/api/pagos/:id', pagoController.retrieve);

  // Routes for tipos
  app.post('/api/tipos', tipoController.create);
  app.get('/api/tipos', tipoController.list);
  app.get('/api/tipos/:id', tipoController.retrieve);
  app.put('/api/tipos/update/:id', tipoController.update);
  app.delete('/api/tipos/delete/:id', tipoController.delete);

  // Routes for habitaciones
  app.post('/api/habitaciones', habitacionController.create);
  app.get('/api/habitaciones', habitacionController.list);
  app.get('/api/habitaciones/:id', habitacionController.retrieve);
  app.put('/api/habitaciones/update/:id', habitacionController.update);
  app.delete('/api/habitaciones/delete/:id', habitacionController.delete);
  app.get('/api/habitaciones/disponibles/:date', habitacionController.available);


// Routes for reservas
  app.post('/api/reservas', reservaController.create);
  app.get('/api/reservas', reservaController.list);
  app.post('/api/reservas/disponibles2', reservaController.disponibles2);
  app.get('/api/reservas/actuales', reservaController.actuales);
  app.get('/api/reservas/habitacions', reservaController.obtenerHabitaciones);
  app.get('/api/reservas/clientes', reservaController.obtenercliente);

  app.delete('/api/reservas/delete/:id', reservaController.delete);
  // app.get('/api/reservas/:id', reservaController.retrieve);
  // app.put('/api/reservas/update/:id', reservaController.update);

  
// Routes for admins
app.post('/api/administradores', administradorController.create);
app.get('/api/administradores', administradorController.list);
app.get('/api/administradores/:id', administradorController.retrieve);
app.put('/api/administradores/update/:id', administradorController.update);
app.delete('/api/administradores/delete/:id', administradorController.delete);


};

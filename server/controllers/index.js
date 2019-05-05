const cliente = require('./cliente');
const pago = require('./pago');
const tipo = require('./tipo');
const habitacion = require('./habitacion');
const reserva = require('./reserva');
const administrador = require('./administrador');
const authentication = require('./authentication');
module.exports = {
  cliente,
  pago,
  tipo,
  habitacion,
  reserva,
  administrador,
  authentication
};
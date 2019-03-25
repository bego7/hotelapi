const { reserva, pago,cliente } = require('../models');

module.exports = {
  create(req, res) {
    return reserva
      .create({
        fecha_ingreso: req.body.fecha_ingreso,
        fecha_salida:req.body.fecha_salida,
        cantidad_personas:req.body.cantidad_personas,
        codigo_reserva:req.body.codigo_reserva,
        cliente_id:req.body.cliente_id,
        pago_id:req.body.pago_id
      })
      .then(reserva => res.status(201).send(reserva))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return reserva
      .findAll({
        include: [
          {
            model: pago,
            as: 'idPago',
            required: false,
          },
          {
            model: cliente,
            as: 'idCliente',
            required: false,
          },
        ],
      })
      .then(reserva => res.status(200).send(reserva))
      .catch(error => res.status(400).send(error));
  },

};
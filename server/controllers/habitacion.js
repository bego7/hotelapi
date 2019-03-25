const habitacion = require('../models').habitacion;

module.exports = {
  create(req, res) {
    return habitacion
      .create({
        numero_habitacion: req.body.numero_habitacion,
        tipo_id:req.body.tipo_id
      })
      .then(habitacion => res.status(201).send(habitacion))
      .catch(error => res.status(400).send(error));
  },
};
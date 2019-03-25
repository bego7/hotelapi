const cliente = require('../models').cliente;

module.exports = {
  create(req, res) {
    return cliente
      .create({
        nombre: req.body.nombre,
        apellido_paterno:req.body.apellido_paterno,
        apellido_materno:req.body.apellido_materno,
        correo:req.body.correo,
        telefono:req.body.telefono
      })
      .then(cliente => res.status(201).send(cliente))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return cliente
      .findAll()
      .then(cliente => res.status(200).send(cliente))
      .catch(error => res.status(400).send(error));
  },
};
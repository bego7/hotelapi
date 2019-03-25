const tipo = require('../models').tipo;

module.exports = {
  create(req, res) {
    return tipo
      .create({
        nombre:req.body.nombre,
        precio:req.body.precio
      })
      .then(tipo => res.status(201).send(tipo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return tipo
      .findAll()
      .then(tipo => res.status(200).send(tipo))
      .catch(error => res.status(400).send(error));
  },
};
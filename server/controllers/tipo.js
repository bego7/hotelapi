const tipo = require('../models').tipo;

module.exports = {
  create(req, res) {
    return tipo
      .create({
        nombre:req.body.nombre,
        precio:req.body.precio
      })
      .then(nombre => res.status(201).send(nombre))
      .catch(error => res.status(400).send(error));
  },
};
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


  retrieve(req, res) {
    // check that question id is not null, undefined. Check that the id is not zero.
    if (!req.body.id && req.body.id === parseInt(req.body.id, 10)) {
      return res.status(400).send({
        message: 'The question ID must be an integer bigger than 0',
      });
    }

    return cliente
      .findByPk(req.params.id, {
        attributes: ['id', 'nombre','apellido_paterno','apellido_materno','correo','telefono', 'createdAt', 'updatedAt'],
      })
      .then((cliente) => {
        if (!cliente) {
          return res.status(400).send({
            status: 400,
            message: 'No client with that ID was found.',
          });
        }
        return res.status(200).send(cliente);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return cliente
      .findByPk(req.params.id, {
        attributes: ['id', 'nombre','apellido_paterno','apellido_materno','correo','telefono', 'createdAt', 'updatedAt'],
      })
      .then((cliente) => {
        if (!cliente) {
          return res.status(400).send({

            status: 400,
            message: 'No client with that ID was found.',
          });
        }

        return cliente
          .update({
            nombre: req.body.nombre || cliente.nombre,
            apellido_paterno: req.body.apellido_paterno ||cliente.apellido_paterno,
            apellido_materno: req.body.apellido_materno ||cliente.apellido_materno,
            correo: req.body.correo || cliente.correo,
            telefono: req.body.telefono || cliente.telefono,
          })
          .then(cliente => res.status(200).send(cliente))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
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
    return cliente
      .findById(req.params.id, {
        
      })
      .then((cliente) => {
        if (!cliente) {
          return res.status(404).send({
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
      .findById(req.params.id, {
        attributes: ['id', 'nombre','apellido_paterno','apellido_materno','correo','telefono', 'createdAt', 'updatedAt'],
      })
      .then((clienter) => {
        if (!cliente) {
          return res.status(400).send({

            status: 400,
            message: 'No client with that ID was found.',
          });
        }

        return cliente
          .update({

            // Don't let it update the email that corresponds to the user id and the username
            nombre: req.body.nombre || cliente.nombre,
            apellido_paterno: req.body.apellido_paterno ||cliente.apellido_paterno,
            apellido_materno: req.body.apellido_materno ||cliente.apellido_materno,
            correo: req.body.correo || cliente.correo,
            telefono: req.body.telefono || cliente.telefono,
          })
          .then(updatedUser => res.status(200).send(updatedUser))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
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

  // update(req, res) {
  //   return User
  //     .findById(req.params.id, {
  //       attributes: ['id', 'nombre','apellido_' 'createdAt', 'updatedAt'],
  //     })
  //     .then((user) => {
  //       if (!user) {
  //         return res.status(400).send({

  //           status: 400,
  //           message: 'No user with that ID was found.',
  //         });
  //       }

  //       return user
  //         .update({

  //           // Don't let it update the email that corresponds to the user id and the username
  //           firstName: req.body.firstName || user.firstName,
  //           lastName: req.body.lastName || user.lastName,
  //           password: req.body.password || user.password,
  //         })
  //         .then(updatedUser => res.status(200).send(updatedUser))
  //         .catch(error => res.status(400).send(error));
  //     })
  //     .catch(error => res.status(400).send(error));
  // },
};
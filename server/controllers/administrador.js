const administrador = require('../models').administrador;

module.exports = {
  create(req, res) {
    return administrador
      .create({
        nombre_usuario:req.body.nombre_usuario,
        contra:req.body.contra
      })
      .then(administrador => res.status(201).send(administrador))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return administrador
      .findAll()
      .then(administrador => res.status(200).send(administrador))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    // check that question id is not null, undefined. Check that the id is not zero.
    if (!req.body.id && req.body.id === parseInt(req.body.id, 10)) {
      return res.status(400).send({
        message: 'The question ID must be an integer bigger than 0',
      });
    }

    return administrador
      .findByPk(req.params.id, {
        attributes: ['id', 'nombre_usuario','contra', 'createdAt', 'updatedAt'],
      })
      .then((administrador) => {
        if (!administrador) {
          return res.status(400).send({
            status: 400,
            message: 'No administrador with that ID was found.',
          });
        }
        return res.status(200).send(administrador);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return administrador
      .findByPk(req.params.id, {
        attributes: ['id', 'nombre_usuario','contra', 'createdAt', 'updatedAt'],
      })
      .then((administrador) => {
        if (!administrador) {
          return res.status(400).send({

            status: 400,
            message: 'No administrador with that ID was found.',
          });
        }

        return administrador
          .update({
            nombre_usuario: req.body.nombre_usuario || administrador.nombre_usuario,
            contra: req.body.contra || administrador.contra
           
          })
          .then(administrador => res.status(200).send(administrador))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    return administrador
    .findByPk(req.params.id)
    .then((administrador) => {
      if(!administrador) {
        return res.status(404).json({
          message: 'administrador not found'
        });
      }
      return administrador
      .destroy()
      .then(() => {
        res.status(204).send();
      })
      .catch((error) => {
        res.status(400).send(error);
      });
    }).catch((error) => {
      res.status(400).send(error);
    });
  }
};
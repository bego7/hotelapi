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

  retrieve(req, res) {
    // check that question id is not null, undefined. Check that the id is not zero.
    if (!req.body.id && req.body.id === parseInt(req.body.id, 10)) {
      return res.status(400).send({
        message: 'The question ID must be an integer bigger than 0',
      });
    }

    return tipo
      .findByPk(req.params.id, {
        attributes: ['id', 'nombre','precio', 'createdAt', 'updatedAt'],
      })
      .then((tipo) => {
        if (!tipo) {
          return res.status(400).send({
            status: 400,
            message: 'No tipo with that ID was found.',
          });
        }
        return res.status(200).send(tipo);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return tipo
      .findByPk(req.params.id, {
        attributes: ['id', 'nombre','precio', 'createdAt', 'updatedAt'],
      })
      .then((tipo) => {
        if (!tipo) {
          return res.status(400).send({

            status: 400,
            message: 'No tipo with that ID was found.',
          });
        }

        return tipo
          .update({
            nombre: req.body.nombre || tipo.nombre,
            precio: req.body.precio || tipo.precio
           
          })
          .then(tipo => res.status(200).send(tipo))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
		return tipo
		.findByPk(req.params.id)
		.then((tipo) => {
			if(!tipo) {
				return res.status(404).json({
					message: 'Tipo not found'
				});
			}
			return tipo
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
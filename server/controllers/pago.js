const pago = require('../models').pago;

module.exports = {
  create(req, res) {
    return pago
      .create({
        total: req.body.total,
        tipo:req.body.tipo,
        url_imagen:req.body.url_imagen
      })
      .then(pago => res.status(201).send(pago))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return pago
      .findAll()
      .then(pago => res.status(200).send(pago))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    // check that question id is not null, undefined. Check that the id is not zero.
    if (!req.body.id && req.body.id === parseInt(req.body.id, 10)) {
      return res.status(400).send({
        message: 'The pago ID must be an integer bigger than 0',
      });
    }

    return pago
      .findByPk(req.params.id, {
        attributes: ['id', 'total','tipo','url_imagen','createdAt', 'updatedAt'],
      })
      .then((pago) => {
        if (!pago) {
          return res.status(400).send({
            status: 400,
            message: 'No pago with that ID was found.',
          });
        }
        return res.status(200).send(pago);
      })
      .catch(error => res.status(400).send(error));
  },
};
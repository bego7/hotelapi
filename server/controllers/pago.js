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
};
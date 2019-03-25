// const habitacion = require('../models').habitacion;
const { habitacion, tipo } = require('../models');

module.exports = {
  create(req, res) {
    return habitacion
      .create({
        numero_habitacion: req.body.numero_habitacion,
        tipo_id:req.body.tipo_id
      })
      .then(habitacion => res.status(201).send(habitacion))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return habitacion
      .findAll({
        include: [
          {
            model: tipo,
            as: 'idTipo',
            required: false,
          },
        ],
      })
      .then(habitacion => res.status(200).send(habitacion))
      .catch(error => res.status(400).send(error));
  },

};
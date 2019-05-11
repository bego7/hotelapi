// const habitacion = require('../models').habitacion;
const { habitacion, tipo,reserva, reserva_habitacion } = require('../models');

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

  retrieve(req, res) {
    // check that question id is not null, undefined. Check that the id is not zero.
    if (!req.body.id && req.body.id === parseInt(req.body.id, 10)) {
      return res.status(400).send({
        message: 'The question ID must be an integer bigger than 0',
      });
    }

    return habitacion
      .findByPk(req.params.id, {
        attributes: ['id', 'numero_habitacion','tipo_id', 'createdAt', 'updatedAt'],
      })
      .then((habitacion) => {
        if (!habitacion) {
          return res.status(400).send({
            status: 400,
            message: 'No habitacion with that ID was found.',
          });
        }
        return res.status(200).send(habitacion);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return habitacion
      .findByPk(req.params.id, {
        attributes:  ['id', 'numero_habitacion','tipo_id', 'createdAt', 'updatedAt'],
      })
      .then((habitacion) => {
        if (!habitacion) {
          return res.status(400).send({

            status: 400,
            message: 'No habitacion with that ID was found.',
          });
        }

        return habitacion
          .update({
            numero_habitacion: req.body.numero_habitacion || habitacion.numero_habitacion,
            tipo_id: req.body.tipo_id || habitacion.tipo_id
           
          })
          .then(habitacion => res.status(200).send(habitacion))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
  return habitacion
  .findByPk(req.params.id)
  .then((habitacion) => {
    if(!habitacion) {
      return res.status(404).json({
          message: 'habitacion not found'
      });
    }
    return habitacion
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
  },

  available(req, res) {
    return reserva.findAll(({
      // reservaciones que ocurren dentro de la fecha consultada
      include: [
        {
          model: habitacion,
          as: 'habitacion_id'
        }
      ],
      where: {
        fecha_ingreso: {
          [Op.lte]: req.params.date
        },
        fecha_salida: {
          [Op.gte]: req.params.date
        }
      }
    }).then((reservas) => {
      // "reservas" contiene las reservas que ocurren en la fecha req.params.date
      // si no hay reservas en esa fecha, devolver todas las habitaciones
      if (!reservas) {
        return habitacion.findAll({
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
      }
      else {
        // devolver las habitaciones que NO estan reservadas para esa fecha
        return habitacion.findAll({
          include: [
            {
              model: tipo,
              as: 'idTipo',
              required: false,
            },
          ],
          where: {
            habitacion_id: {
              //revisar si "reservas.habitacion_id" es un arreglo con los "habitacion_id" de "reservas" 
              [Op.notIn]: reservas.habitacion_id
            }
          }
        })
        .then(habitacion => res.status(200).send(habitacion))
        .catch(error => res.status(400).send(error));
      }
    })
    .catch(error => res.status(400).send(error)))
  }
};


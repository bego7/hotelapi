const { reserva, pago, cliente, habitacion, tipo } = require('../models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

// var datetime = new Date(year, month, day);
// moment().format('YYYY MM DD');

var today = new Date();

module.exports = {
    create(req, res) {
        return reserva
            .create({
                fecha_ingreso: req.body.fecha_ingreso,
                fecha_salida: req.body.fecha_salida,
                cantidad_personas: req.body.cantidad_personas,
                codigo_reserva: req.body.codigo_reserva,
                cliente_id: req.body.cliente_id,
                pago_id: req.body.pago_id,
                habitacion_id: req.body.habitacion_id
            })
            .then(reserva => res.status(201).send(reserva))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {

        return reserva
            .findAll({
                include: [{
                        model: pago,
                        as: 'idPago',
                        required: false,
                    },
                    {
                        model: cliente,
                        as: 'idCliente',
                        required: false,
                    },
                    {
                        model: habitacion,
                        as: 'idHabitacion',
                        required: false,

                    }

                ],
            })
            .then(reserva => res.status(200).send(reserva))
            .catch(error => res.status(400).send(error));
    },

    obtenerHabitaciones(req, res) {
        return reserva.findAll({
                include: [{
                    model: habitacion,

                }],


            })
            .then(reserva => res.status(200).send(reserva))
            .catch(error => res.status(400).send(error));


    },

    disponibles2(req, res) {
        // check that params are not null, undefined or empty string
        if (!req.body.fecha_ingreso || !req.body.fecha_salida) {
            return res.status(400).send({ message: 'Falta fecha de entrada y fecha de salida' });
        }

        let fecha_ingreso = req.body.fecha_ingreso;
        let fecha_salida = req.body.fecha_salida;

        reserva.findAll({
                include: [{
                        model: pago,
                        as: 'idPago',
                        required: false,
                    },
                    {
                        model: cliente,
                        as: 'idCliente',
                        required: false,
                    },
                    {
                        model: habitacion,
                        as: 'idHabitacion',
                        required: false,

                    },
                ],
                where: {
                    fecha_ingreso: {
                        [Op.notBetween]: [fecha_ingreso, fecha_salida]
                    },
                    fecha_salida: {
                        [Op.notBetween]: [fecha_ingreso, fecha_salida]
                    }
                }
            })
            .then(reserva => {
                if (!reserva) {
                    return res.status(400).send({ message: 'No se encontró reserva para esa fecha' });
                } else {
                    res.status(200).send(reserva);
                }

                // if(!user.confirmed){
                //     return res.status(400).send({ message: 'Authentication failed. The account is not confirmed, check your email to confirm your account.'});
                // }

            })
            .catch(error => res.status(400).send({ message: 'Request error.' }));
    },

    disponibles3(req, res) {
        // check that params are not null, undefined or empty string
        if (!req.body.fecha_ingreso || !req.body.fecha_salida) {
            return res.status(400).send({ message: 'Falta fecha de entrada y fecha de salida' });
        }

        let fecha_ingreso = req.body.fecha_ingreso;
        let fecha_salida = req.body.fecha_salida;

        reserva.findAll({
                include: [{
                    model: habitacion,
                    as: 'idHabitacion',
                    required: false,

                }, ],
                where: {
                    fecha_ingreso: {
                        [Op.between]: [fecha_ingreso, fecha_salida]
                    },
                    fecha_salida: {
                        [Op.between]: [fecha_ingreso, fecha_salida]
                    }
                }
            })
            .then(reserva => {
                if (!reserva) {
                    return habitacion.findAll({
                            include: [{
                                model: tipo,
                                as: 'idTipo',
                                required: false,
                            }, ],
                        })
                        .then(habitacion => res.status(200).send(habitacion))
                        .catch(error => res.status(400).send(error));
                } else {
                    return habitacion.findAll({
                            include: [{
                                model: tipo,
                                as: 'idTipo',
                                required: false,
                            }, ],
                        })
                        .then(habitacion => res.status(200).send(habitacion))
                        .catch(error => res.status(400).send(error));
                }

            })
            .catch(error => res.status(400).send({ message: 'Request error.' }));
    },

    actuales(req, res) {
        reserva.findAll({
                include: [{
                        model: pago,
                        as: 'idPago',
                        required: false,
                    },
                    {
                        model: cliente,
                        as: 'idCliente',
                        required: false,
                    },
                    {
                        model: habitacion,
                        as: 'idHabitacion',
                        required: false,

                    },
                ],
                where: {
                    fecha_ingreso: {
                        [Op.eq]: today
                    }
                }

            })
            .then(reserva => {
                if (!reserva) {
                    return res.status(400).send({ message: 'No se encontró reserva para esa fecha' });
                } else {
                    res.status(200).send(reserva);
                }

                // if(!user.confirmed){
                //     return res.status(400).send({ message: 'Authentication failed. The account is not confirmed, check your email to confirm your account.'});
                // }

            })
            .catch(error => res.status(400).send({ message: 'Request error.' }));

    },

    obtenercliente(req, res) {
        reserva.findAll({
                include: [{
                        model: pago,
                        as: 'idPago',
                        required: false,
                    },
                    {
                        model: cliente,
                        as: 'idCliente',
                        required: false,
                    },
                ],
                where: {
                    fecha_ingreso: {
                        [Op.eq]: today
                    }
                }
            })
            .then(reserva => {
                if (!reserva) {
                    return res.status(400).send({ message: 'No se encontró reserva para esa fecha' });
                } else {
                    return res.status(200).send(reserva);
                }

            })
            .catch(error => res.status(400).send({ message: 'Request error.' }));

    },

    delete(req, res) {
        return reserva
            .findByPk(req.params.id)
            .then((reserva) => {
                if (!reserva) {
                    return res.status(404).json({
                        message: 'reserva not found'
                    });
                }
                return reserva
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


    update(req, res) {
        return reserva
            .findByPk(req.params.id, {
                attributes: ['id', 'fecha_ingreso', 'fecha_salida', 'cantidad_personas', 'codigo_reserva', 'cliente_id', 'pago_id', 'habitacion_id'],
            })
            .then((reserva) => {
                if (!reserva) {
                    return res.status(400).send({

                        status: 400,
                        message: 'No reserva with that ID was found.',
                    });
                }

                return reserva
                    .update({
                        fecha_ingreso: req.body.fecha_ingreso,
                        fecha_salida: req.body.fecha_salida,
                        cantidad_personas: req.body.cantidad_personas,
                        codigo_reserva: req.body.codigo_reserva,
                        cliente_id: req.body.cliente_id,
                        pago_id: req.body.pago_id,
                        habitacion_id: req.body.habitacion_id
                    })
                    .then(reserva => res.status(200).send(reserva))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },




};

// reserva.findByPk(1).then(reserva=>{
//   reserva.sethabitacions([1,2]).then(sc=>{
//       console.log(sc);
//   });
// });
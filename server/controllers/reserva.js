const { reserva, pago,cliente } = require('../models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

// var datetime = new Date(year, month, day);
// moment().format('YYYY MM DD');

 var today =new Date();

module.exports = {
  create(req, res) {
    return reserva
      .create({
        fecha_ingreso: req.body.fecha_ingreso,
        fecha_salida:req.body.fecha_salida,
        cantidad_personas:req.body.cantidad_personas,
        codigo_reserva:req.body.codigo_reserva,
        cliente_id:req.body.cliente_id,
        pago_id:req.body.pago_id
      })
      .then(reserva => res.status(201).send(reserva))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return reserva
      .findAll({
        include: [
          {
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
      })
      .then(reserva => res.status(200).send(reserva))
      .catch(error => res.status(400).send(error));
  },

    disponibles(req, res) {
      
    
    let fecha_ingreso = req.body.fecha_ingreso;
    let fecha_salida = req.body.fecha_salida;

    reserva.findAll({
        include: [
          {
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

        where: {$notBetween:[fecha_ingreso,fecha_salida] }
      })
      .then(reserva => res.status(200).send(reserva))
      .catch(error => res.status(400).send(error));
  },

  disponibles2(req, res) {
    // check that params are not null, undefined or empty string
    if(!req.body.fecha_ingreso || !req.body.fecha_salida){ 
        return res.status(400).send({message: 'Falta fecha de entrada y fecha de salida'});
    }
    
    let fecha_ingreso = req.body.fecha_ingreso;
    let fecha_salida = req.body.fecha_salida;

    reserva.findAll({where:{
      fecha_ingreso:{
        [Op.notBetween]:[fecha_ingreso,fecha_salida]}
      }
     
    })
    .then(reserva => {
        if(!reserva){
            return res.status(400).send({ message: 'No se encontró reserva para esa fecha'});
        }
        else{
          res.status(200).send(reserva);
        }

        // if(!user.confirmed){
        //     return res.status(400).send({ message: 'Authentication failed. The account is not confirmed, check your email to confirm your account.'});
        // }
       
    })
    .catch( error => res.status(400).send({ message: 'Request error.' }));
},

actuales(req,res){
 
reserva.findAll({where:{
  fecha_ingreso:{
    [Op.eq]:today}
  }
 
})
.then(reserva => {
    if(!reserva){
        return res.status(400).send({ message: 'No se encontró reserva para esa fecha'});
    }
    else{
      res.status(200).send(reserva);
    }

    // if(!user.confirmed){
    //     return res.status(400).send({ message: 'Authentication failed. The account is not confirmed, check your email to confirm your account.'});
    // }
   
})
.catch( error => res.status(400).send({ message: 'Request error.' }));

}

// disponibles3(req, res){
//   reserva.findAll({
//     include: [{
//       model: habitacion,
//       through: {
//         attributes: ['createdAt', 'startedAt', 'finishedAt'],
//         where: {completed: true}
//       }
//     }]
//   });
// }


};

// reserva.findAll({ where: {$notBetween:[fecha_ingreso,fecha_salida] } }).
//   then(reserva => {
//   // projects will be an array of Projects having the id 1, 2 or 3
//   // this is actually doing an IN query
// })

// list (req,res)reserva.findAll({
  
//       where: {$notBetween:[req.body.fecha_ingreso,req.body.fecha_salida] }
    
//   .then(reserva => res.status(200).send(reserva))
//   .catch(error => res.status(400).send(error))
// });



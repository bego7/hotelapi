const administrador = require('../models').administrador;
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt');

module.exports = {
    login(req, res) {
        // check that params are not null, undefined or empty string
        if(!req.body.nombre_usuario || !req.body.contra){ 
            return res.status(400).send({message: 'The post body must contain a user_id and password field.'});
        }
        
        let nombre_usuario = req.body.nombre_usuario;
        let password = req.body.contra;

        administrador.findOne({where:{nombre_usuario:req.body.nombre_usuario}})
        .then(administrador => {
            if(!administrador){
                return res.status(400).send({ message: 'Authentication failed. User not found.'});
            }

            // if(!user.confirmed){
            //     return res.status(400).send({ message: 'Authentication failed. The account is not confirmed, check your email to confirm your account.'});
            // }
            console.log(administrador.contra);
            bcrypt.compare(password, administrador.contra,(error, check) => {
                if(check){
                    // devolver miembro y token
                    let data = jwt.createToken(administrador);
                    administrador.contra = '';
                    
                    return res.status(200).send({
                        token: data.token,
                        administrador: administrador,
                        expirationTime: data.expirationTime
                    });
                }
                else{
                    return res.status(400).send({ message: 'Incorrect password.'});
                }
            });
        })
        .catch( error => res.status(400).send({ message: 'Request error.' }));
    }
};
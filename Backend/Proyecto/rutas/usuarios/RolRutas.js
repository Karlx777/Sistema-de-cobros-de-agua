const express = require('express');
const router = express.Router();
const Rol = require('../../models/users/Rol');


router.route('/')
    .get(function(req,res) {
        Rol.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});        
    })
    .post(function(req,res) {
        Rol.create(req.body)
        .then((result) => { res.send(result); res.json("success")})
        .catch(error => console.error(error))       
    })
    


module.exports = router;

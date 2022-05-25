const express = require('express');
const router = express.Router();
const Usuario = require('../../models/users/Usuario');


router.get('/',function(req,res) {
        Usuario.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});        
});
router.post('/',function(req,res) {
        Usuario.create(req.body)
        .then((result) => { res.send(result); res.json("success")})
        .catch(error => console.error(error))       
});
router.put('/:id',function(req,res) {
    Usuario.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                rolID : req.body.rolID,
                nombre: req.body.nombre,
                apellido : req.body.apellido,
                telefono: req.body.telefono
            }
        },
        {
            upsert: true
        }
    ).then((result) => {res.json('Updated') })
        .catch(error => console.error(error))     
});

router.delete('/:id', (req, res) => {
    Usuario.deleteOne(
        { _id: req.params.id }
    )
        .then((result) => {
            res.json('Deleted')
        })
        .catch(error => console.error(error))
})

module.exports = router;

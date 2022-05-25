const express = require('express');
const router = express.Router();
const Propiedad = require('../../models/propiedad/Propiedad');

router.get('/',function(req,res) {
        Propiedad.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});        
});
router.post('/',function(req,res) {
        
        Propiedad.create(req.body)
        .then((result) => { res.send(result); res.json("success")})
        .catch(error => console.error(error))       
});
router.put('/:id',function(req,res) {
    Propiedad.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                usuarioID : req.body.usuarioID,
                latitud: req.body.latitud,
                longitud : req.body.longitud,
                direccion: req.body.direccion,
                descripcion: req.body.descripcion
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

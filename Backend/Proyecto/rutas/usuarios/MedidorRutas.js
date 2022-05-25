const express = require('express');
const router = express.Router();
const Medidor = require('../../models/medidor/Medidor');


router.get('/',function(req,res) {
        Medidor.find({})
        .then((list) => {res.send(list); console.log(list)})
        .catch( (error) => {console.log(error)});        
});
router.post('/',function(req,res) {
        Medidor.create(req.body)
        .then((result) => { res.send(result); res.json("success")})
        .catch(error => console.error(error))       
});
router.put('/:id',function(req,res) {
    Medidor.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                propiedadID : req.body.propiedadID,
                tarifaID : req.body.tarifaID,
                codigo_medidor: req.body.codigo_medidor,
                estado : req.body.estado
            }
        },
        {
            upsert: true
        }
    ).then((result) => {res.json('Updated') })
        .catch(error => console.error(error))     
});

router.delete('/:id', (req, res) => {
    Medidor.deleteOne(
        { _id: req.params.id }
    )
        .then((result) => {
            res.json('Deleted')
        })
        .catch(error => console.error(error))
})

module.exports = router;

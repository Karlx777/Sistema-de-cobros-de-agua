const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const medidorSchema = new mongoose.Schema({
    propiedadID: { type: Schema.ObjectId, ref: "propiedad" },
    tarifaID: { type: Schema.ObjectId, ref: "tarifa" },
    codigo_medidor: { type: String },
    estado: { type: String }
})
const Medidor = mongoose.model('medidor', medidorSchema);
module.exports = Medidor;
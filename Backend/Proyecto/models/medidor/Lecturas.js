const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const medidorSchema = new mongoose.Schema({
    medidorID: { type: Schema.ObjectId, ref: "propiedad" },
    fecha_lec_actual: { type: String },
    lec_actual: { type: String },
    periodo_consumo: { type: String },
    fecha_lec_ant: { type: String },
    lec_anterior: { type: String }, //para las lecturas anteriores hacer una consulta donde se saca la ultima fecha y lectura registrada
    metros3: { type: String },
})
const Medidor = mongoose.model('medidor', medidorSchema);
module.exports = Medidor;
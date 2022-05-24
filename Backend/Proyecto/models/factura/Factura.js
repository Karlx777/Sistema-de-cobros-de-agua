const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const facturaSchema = new mongoose.Schema({
    conceptoID: { type: Schema.ObjectId, ref: "concepto" },
    medidorID: { type: Schema.ObjectId, ref: "medidor" },
    lecturaID: { type: Schema.ObjectId, ref: "lectura" },
    usuarioID: { type: Schema.ObjectId, ref: "usuario" },
    precio_unitario: { type: String },
    precio_total: { type: String }
})
const Factura = mongoose.model('factura', facturaSchema);
module.exports = Factura;
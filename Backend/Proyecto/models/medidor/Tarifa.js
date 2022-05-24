const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const tarifaSchema = new mongoose.Schema({
    tarifa: { type: String },
    valorm3: { type: String }
})
const Tarifa = mongoose.model('tarifa', tarifaSchema);
module.exports = Tarifa;
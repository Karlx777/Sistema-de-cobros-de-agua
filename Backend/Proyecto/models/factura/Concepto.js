const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const conceptoSchema = new mongoose.Schema({
    concepto: { type: String },
    valor: { type: String }
})
const concepto = mongoose.model('concepto', conceptoSchema);
module.exports = concepto;
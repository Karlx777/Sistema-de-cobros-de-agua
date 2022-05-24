const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const rolSchema = new mongoose.Schema({
    nombre: { type: String }
})
const Rol = mongoose.model('rol', rolSchema);
module.exports = Rol;

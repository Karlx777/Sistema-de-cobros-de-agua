const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const usuarioSchema = new mongoose.Schema({
    rolID: { type: Schema.ObjectId, ref: "rol" },
    nombre: { type: String },
    apellido: { type: String },
    telefono: { type: String }

})
const Usuario = mongoose.model('usuario', usuarioSchema);
module.exports = Usuario;
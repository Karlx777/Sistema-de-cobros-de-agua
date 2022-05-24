const mongoose = require('mongoose');
const { Schema } = require('../db/mongoose');

const propiedadSchema = new mongoose.Schema({
    usuarioID: { type: Schema.ObjectId, ref: "usuario" },
    latitud: { type: String },
    longitud: { type: String },
    direccion: { type: String },
    descripcion: { type: String }
})
const Propiedad = mongoose.model('propiedad', propiedadSchema);
module.exports = Propiedad;
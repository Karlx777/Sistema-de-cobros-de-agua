const express = require('express');
const app = express();
const mongoose = require('./models/db/mongoose');
var bodyParser = require('body-parser');
const RolRutas = require('./rutas/usuarios/RolRutas');
const UsuarioRutas = require('./rutas/usuarios/UsuarioRutas');

//routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use('/rol',RolRutas);
app.use('/usuario',UsuarioRutas);


app.listen(3000)

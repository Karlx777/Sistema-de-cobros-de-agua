const express = require('express');
const aplicacion = express();
aplicacion.listen(5500, () => {
    console.log("el puerto esta iniciando en 5500 fff");
});
const express = require('express');
const app = express();
const mongoose = require('./models/db/mongoose');
var bodyParser = require('body-parser');
const { Schema } = require('./models/db/mongoose');

//routes
app.get('/',(req,res)=>{
    res.send('we are on home');
})

app.listen(3000)

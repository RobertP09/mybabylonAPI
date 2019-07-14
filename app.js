//Server setup
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const universeRoute = require('./routes/universes');

//Middleware
app.use('/universes', universeRoute);

//index Route
app.get('/', ( req , res ) => {
    res.send('index');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
     { useNewUrlParser: true } ,
     () => {
    console.log('Connected to DB');
});

app.listen(3000);
//Server setup
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

//Middleware
app.use(bodyParser.json());

// Import routes
const universeRoute = require( './routes/universes' );
app.use('/universes', universeRoute );

//index Route
app.get( '/' , ( req , res ) => {
    res.send('index');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
     { useNewUrlParser: true } ,
     () => {
    console.log('Connected to DB');
});

app.listen(3000);
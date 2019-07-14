//Server setup
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }));

//index Route
app.get('/' , ( req , res ) => {
    res.send('index');
});
// Import routes
const universeRoute = require('./routes/universes');
app.use('/universes', universeRoute );

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
     { useNewUrlParser: true } ,
     () => {
    console.log('Connected to DB');
});

app.listen(process.env.PORT || 5000);
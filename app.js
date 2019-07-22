//Server setup
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true } ,
    () => {
   console.log('Connected to DB');
});
mongoose.connection.on('error', err => {
   console.error('MongoDB connection error: ' + err)
   process.exit(-1)
});
/******************************************/ 

//Middleware
app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }));

/******************************************/ 
//Routes
//index Route
app.get('/' , ( req , res ) => {
    res.send('index');
});
// Import routes
//Universe routes
const authRoute = require('./routes/auth');
const universeRoute = require('./routes/universes');

//Route Middleware
app.use('/api/user', authRoute);
app.use('/universes', universeRoute );

/******************************************/ 
//App listening to API calls
app.listen(process.env.PORT || 5000);
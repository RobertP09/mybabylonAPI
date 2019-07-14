const mongoose = require('mongoose');

const UniverseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date : {
        type:  Date,
        default: Date.now
    }
});

//export the route ---------------------Name in db , schema that it should use
module.exports = mongoose.model('Universes', UniverseSchema);

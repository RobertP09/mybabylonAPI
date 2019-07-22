const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        min: 6,
        max: 255
    }, 
    password: {
        type: String,
        min: 6,
        max: 1024,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    image: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "can't be blank"], 
        index: true,
        unique: true
    }, 
    password: {
        type: String,
        required: [true, "can't be blank"], 
    },
    email: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    image: String,
    date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken'});

module.exports = mongoose.model('User', UserSchema);
const router = require('express').Router();
const User = require('../models/User');
const { registerValidation , loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
    // Data Validation - links to validation.js
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    // Check if user already exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists')

    // Hash user password

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;
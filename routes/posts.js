const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({ 
        posts: {
            title: 'my first post', 
            description: 'Must be logged in'
        }
    });
});

module.exports = router;
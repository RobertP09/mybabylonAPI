const express = require('express');

const router = express();

router.get('/' , (req , res) => {
    res.send('Universe');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Universe = require('../models/Universe');

// Initial route that will render our universes page
router.get('/' , async (req , res) => {
            try {
                const universes = await Universe.find();
                res.json(universes);
            } catch (error) {
                res.json({ message: error });
            }
});

// Route use to create a universe
// Create async our post 
router.post('/' ,  async (req, res) => {
    // Create an instance of the Universe model
    const universe = new Universe({
        name : req.body.name,
        description : req.body.description
    });
    //  Attempt to save our new universe with a try catch
    try {
        const savedUniverse  = await universe.save()
        res.json(savedUniverse);
    } catch (error) {
        res.json({ message: error});
    }
});

module.exports = router;
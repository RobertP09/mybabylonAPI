const router = require('express').Router();
const Universe = require('../models/Universe');
const verify = require('./verifyToken');


// Initial route that will render our universes page
router.get('/', verify , async (req , res) => {
    try {
        const universes = await Universe.find();
        res.json(universes);
    } catch (error) {
        res.json({ message: error });
    }
});

// Route use to create a universe
// Create async our post 
router.post('/', verify , async (req, res) => {
    // Create an instance of the Universe model
    const universe = new Universe({
        name : req.body.name,
        description : req.body.description
    });
    //  Attempt to save our new universe with a try catch
    try {
        const savedUniverse  = await universe.save()
        console.log(savedUniverse);
        res.json(savedUniverse);
        console.log('saved');
    } catch (error) {
        res.json({ message: error});
        console.log('Not saved');
    }
});
//Find specific universe
router.get('/:universeId' , verify , async (req, res) => {
    try {
        const post = await Universe.findById(req.params.universeId);
        res.json(post);   
    } catch (error) {
        res.json({ message: error });
    }
});
//Delete specific universe
router.delete('/:universeId',verify , async (req , res) => {
    try {
    const removeUniverse = await Universe.deleteOne({ _id: req.params.universeId });
    res.json(removeUniverse);
    } catch (error) {
        res.json({ message: error });
    }
});
//Update universe
router.patch('/:universeId', verify , async (req, res) => {
    try {
        const updatedUniverse = await Universe.update(
            {_id: req.params.universeId}, 
            { $set : {  name: req.body.name, 
                        description: req.body.description}}
        );
        res.json(updatedUniverse);
    } catch(error) {
        res.json({message: error});
    }
});


module.exports = router;
/**
 *  This is where all HTTP requests will recieved and authenticate for the path '/api/pets'. 
 *  All non-client augmentation, and data will be sent to the handler in '../handlers/pet_handler'
 * 
 */
const express = require('express');
// This is what creates and exports the routing to '/api/pets'
const router = express.Router();

// Establish handler
const petHandler = require('../handlers/pet_handler');

/*      PET ENDPOINTS       */

// Get all pets (Keep in mind this is still using the path /api/pets, however it is sent as a route to app.js)
router.get('/', async (req, res) => {

    // Takes the query param for the type if you want to filter by type
    const { type } = req.query;

    var content = [];

    try{
        if(type){
        
            content = await petHandler.getPetType(type);
            res.send(content);

            // If the type isnt available then return 4040
            if (!content){
                return res.status(404).json({ error: `Type :${type} not found`});
            }

        } else{
            content = await petHandler.getPets();
            //console.log(content); 
            res.send(await petHandler.getPets());
        } 
    }catch(error){
            console.error(error);
            return res.status(404).json({error: 'Pets not found'});
    }
    
});

// Creates a new pet
router.post('/', async (req, res) => {
    
    const pet = req.body;

    //console.log(pet);

    try {
        await petHandler.createPet(pet);
        res.status(201).json(pet);
    } catch(error){
        console.log(error);
        res.status(500).json({ error : 'Error creating pet'});
    }
});

// Updates a current pet
router.put('/:id', async (req, res) => {

    // Sends the updated pet 
    const pet = req.body;

    console.log(pet);

    const { id } = req.params.id;

    console.log(req.params.id);

    // just validating the id, might be redundant
    if(pet.id !== req.params.id){
        console.log("id's do not match");
        res.status(400).json({error: "ID in url and from request body do not match"});
        return;
    }

    try{
        await petHandler.editPet(pet);

        res.json(pet);

    }catch(error){
        console.error(`Error editing pet with id: ${pet.id}` + error);
        res.status(500).json({ error: "Error editing pet"});
    }

});

// Deletes a pet
router.delete('/:id', async (req, res) =>{

    console.log(req.params.id);

    try{
        await petHandler.deletePet(req.params.id);
        res.status(204).json({ success: "Deleted pet" });

    }catch(error){
        console.error(`Error deleting pet with id: ${req.params.id}\n` + error);
        res.status(500).json({ error: "Error deleting pet"});
    }

});

// Gets the pet by id, since ids are unique
router.get('/:id', async (req, res) => {

    console.log(req.params.id);
    try{
        let pet = await petHandler.getPetById(req.params.id);
        res.status.json(pet);
    } catch (error){
        res.status(500).json({error : 'Failed to get pet'});
    }
});

// Sends router to '../app.js'
module.exports = router;
/* This literally creates a route tied to the api endpoint 
    that is defined inside of ../app.js. This means any endpoint
    with 'api/pets' will be sent here.
*/
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

    // Takes the query param for the type
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
            return res.status(404).json(error `Pets not found`);
    }
    
});

// Creates a new pet
router.post('/', async (req, res) => {
    
    const pet = req.body;

    try {
       
        await petHandler.createPet(pet);

    } catch(error){
        console.log(error);
        res.status(500).json({ error : 'Error creating pet'});
    }

    //console.log(pet);

    res.send(pet);
});

// Updates a current pet
router.put('/', async (req, res) => {

    // TODO: get user updates and add to pets 
    res.send("Put a new thing in here");

});

// Deletes a pet
router.delete('/', async (req, res) =>{

    // TODO: get pet user wants to delete and update pets.json
    res.send("Delete Pet")
})

// Gets the pet by id, since ids are unique
router.get('/:id', async (req, res) => {

    console.log(req.params.id);

    let pet = await petHandler.getPetById(req.params.id);

    res.send(pet);
})

// Sends router to '../app.js'
module.exports = router;
/* This literally creates a route tied to the api endpoint 
    that is defined inside of ../app.js. This means any endpoint
    with api/pets will be sent here.
*/
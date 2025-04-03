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
router.get('/', /*async*/ (req, res) => {
    res.send("At pets!")
});




// Sends router to '../app.js'
module.exports = router;
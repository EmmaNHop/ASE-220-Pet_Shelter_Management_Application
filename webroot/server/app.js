/**
 *  This defines the express module. Will be exported to server. Will also take routes from pets
 */

const express = require('express');
const app = express();

//      Define routes

const petRoute = require('./routes/pets.js');

// Will send all HTTP requests will this path to pets.js
app.use('/api/pets', petRoute);

/* HTML ENDPOINTS */

app.get('/', (req, res) => {
    res.send("The index page");
});


// Exports app to other files for them to use require()
module.exports = app;
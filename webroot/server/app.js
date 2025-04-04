/**
 *  This defines the express module. Will be exported to server. Will also take routes from pets
 */

const express = require('express');
const app = express();

const fs = require('fs');

//      JSON Requests
app.use(express.json());

//      Static Routes
app.use(express.static('public'));


//      Define routes

const petRoute = require('./routes/pets');

// Will send all HTTP requests will this path to pets.js
app.use('/api/pets', petRoute);

/* HTML ENDPOINTS */

app.get('/', (req, res) => {
    try{    
        res.send(fs.readFileSync('./public/index.html','utf-8'));
    } catch(error){
       return res.status(404).json({ error: "Page not found"});
    }
}); 


// Exports app to other files for them to use require()
module.exports = app;
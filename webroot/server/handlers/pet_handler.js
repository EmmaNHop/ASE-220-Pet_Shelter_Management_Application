/*
    Handles data coming from '../routes/pets.js'. All CRUD operations are done here
*/

const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'pets.json');

exports.getPets = async () => {
    try{
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch(error){
        console.error(error);
    }
}

exports.createPet = async (newPet) => {

    
    const oldPets = await exports.getPets();

    oldPets.push(newPet);
    console.log(oldPets[oldPets.length-1]);
    // TODO: write to pets.json

}

exports.editPet = async (updatedPet) => {
    // TODO: retrieve pet and update info then write to pet
}

exports.deletePet = async(pet) => {
    // TODO Retreive pets, find pet to delete, update json
}

// Gets a pet type
exports.getPetType = async (type) => {

    const petArr = await exports.getPets();

    let parsedType = [];

    petArr.forEach(pet => {
        let petType = pet.type;
        let petTypeLower = petType.toLowerCase();
        if(petTypeLower === type){
            console.log(true);
            parsedType.push(pet);
        }
    });

    return parsedType;
    
}

// Gets a pet type
exports.getPetById = async (id) => {

    const petArr = await exports.getPets();

    let parsedId = [];
    console.log(id)

    petArr.forEach(pet => {
        console.log(pet);
        if(pet.id === id){
            console.log(true);
            parsedId.push(pet);
            return parsedType;
        }
    });

    returns;
    
}
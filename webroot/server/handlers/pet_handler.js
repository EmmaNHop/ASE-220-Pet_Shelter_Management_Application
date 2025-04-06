/*
    Handles data coming from '../routes/pets.js'. All CRUD operations are done here
*/

const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'pets.json');

exports.fileWriter = async (content) => {
    try{
        fs.writeFile(filePath, JSON.stringify(content, null, 2));
    } catch(error){
        console.error('Error writing to file' + error);
        throw new Error('Failed to write to file');
    }
}

exports.getPets = async () => {
    try{
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch(error){
        console.error('Error getting pets' + error);
        throw new error('Error retrieving pets');
    }
}

exports.createPet = async (newPet) => {

    try{
        const oldPets = await exports.getPets();
        oldPets.push(newPet);
        //console.log(oldPets[oldPets.length-1]);
        // TODO: write to pets.json
        exports.fileWriter(oldPets);
    } catch (error) {
        console.error('Error creating pet' + error);
        throw new error('Error creating pet');
    }

}

exports.editPet = async (updatedPet, petId) => {

    try{
        const oldPets = await exports.getPets();
        
        oldPets.forEach((oldPet, index) => {

            if(updatedPet.id === oldPet.id){

                oldPets[index] = updatedPet;
            
                exports.fileWriter(oldPets);
            }
        });

        //console.log(oldPets[oldPets.length-1]);
    } catch (error) {
        console.log(`Error editing pet with id${petId}` + error);
        throw new error('Error creating pet');
    }
}

exports.deletePet = async(petId) => {
    // TODO Retreive pets, find pet to delete, update json
    try{
        const oldPets = await exports.getPets();
        //console.log(oldPets[oldPets.length-1]);
        oldPets.forEach((oldPet, index) => {

            if(petId === oldPet.id){

                oldPets.splice(index, 1);
            
                exports.fileWriter(oldPets);

            }

        });
        
    } catch (error) {
        console.log(`Error editing pet with id${petId}` + error);
        throw new error('Error creating pet');
    }
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
    
}
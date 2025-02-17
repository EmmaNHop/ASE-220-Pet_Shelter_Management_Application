# ASE-220-Pet_Shelter_Management_Application
The core objective is to create a digital platform that streamlines the process of tracking and maintaining records of the pets for an animal shelter, including details such as breed, age, health status, and adoption status. 

# Pet Shelter Management Application

This is a Pet Shelter Management Application designed to help manage and facilitate the adoption of pets. The application allows users to view available pets, add new pets, and delete pets from the list. The application is built using HTML, CSS, and JavaScript, and leverages Bootstrap for styling and responsive design.

## Features

- **View Pets**: Users can view a list of pets available for adoption, including details such as name, breed, age, and a picture of the pet.
- **Add New Pets**: Users can add new pets to the list by filling out a form with the pet's details.
- **Delete Pets**: Users can delete pets from the list, which removes them from the displayed list and the underlying data.

## Special Functions

### Displaying Pets

The pets are displayed in a grid layout on the main page. Each pet is represented by a card that includes the pet's picture, name, type, and age. Clicking on a pet card opens a modal with more detailed information about the pet.

### Adding New Pets

To add a new pet, click the "Create" button on the main page. This opens a modal with a form where you can enter the pet's details, including name, picture URL, breed, type, gender, color, spayed/neutered status, age, microchip number, status, and bio. After filling out the form, click the "Submit" button to add the pet to the list.

### Deleting Pets

To delete a pet, click on the pet card to open the detailed view modal. In the modal, click the "Delete" button to remove the pet from the list and the underlying data.

### Loading More Pets

The main page initially loads a limited number of pets. To load more pets, click the "Load more" button at the bottom of the page. This will load additional pets and append them to the existing list.

## How to Run

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to view the application.

## Authors

- Nate Brewer
- Danny Poff
- Emma Hopkins

# Team Members

  Nate Brewer: index logic
  
  Danny Poff: Json structure, handling json in the index
  
  Emma Hopkins: detail logic

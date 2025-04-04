//code to read form content and send it to the json file

const form = document.getElementById('myForm');

const inputName = form.elements.name;
const inputPic = form.elements.picture;
const inputBreed = form.elements.breed;
const inputAnimal = form.elements.animal;
const inputGender = form.elements.gender;
const inputColor = form.elements.color;
const inputFixed = form.elements.fixed;
const inputAge = form.elements.age;
const inputMicrochip = form.elements.microchip;
const inputStatus = form.elements.status;
const inputBio = form.elements.bio;


const name = inputName.value;
const picture = inputPic.value;
const breed = inputBreed.value;
const animal = inputAnimal.value;
const gender = inputGender.value;
const color = inputColor.value;
const fixed = inputFixed.value;
const age = inputAge.value;
const microchip = inputMicrochip.value;
const status = inputStatus.value;
const bio = inputBio.value;


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Access and process form data here
    const name = form.elements.name.value;
    console.log('Name:', name);
  });





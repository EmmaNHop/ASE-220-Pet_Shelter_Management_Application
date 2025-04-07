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
    
    const name = form.elements.name.value;
    console.log('Name:', name);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    const formData = {
      name: form.elements.name.value,
      picture: form.elements.picture.value,
      breed: form.elements.breed.value,
      animal: form.elements.animal.value,
      gender: form.elements.gender.value,
      color: form.elements.color.value,
      fixed: form.elements.fixed.value,
      age: form.elements.age.value,
      microchip: form.elements.microchip.value,
      status: form.elements.status.value,
      bio: form.elements.bio.value
    };
  
    fetch('/pethandler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Data successfully sent to pethandler.js');
      } else {
        console.error('Failed to send data to pethandler.js');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });



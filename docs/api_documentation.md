# Pet Shelter Management API Documentation

This API allows users to manage pets in a shelter. It provides endpoints for creating, retrieving, updating, and deleting pet records.

## Base URL
http://127.0.0.1:3000/

---

## Endpoints

### 1. Get All Pets
**GET** `/api/pets`

- **Description**: Retrieves a list of all pets. Optionally, you can filter pets by type.
- **Query Parameters**:
  - `type` (optional): Filter pets by their type (e.g., `dog`, `cat`).
- **Response**:
  - `200 OK`: Returns an array of pet objects.
  - `404 Not Found`: If no pets are found.
- **Example**:

GET /api/pets

---

### 2. Group Pets by type
**GET** `/api/pets/?type=dog`

- **Description**: Retrieves a group of pets by their type.
- **Query Parameters**:
- `?type=`: The type of pet. Eg. Dog
- **Response**:
- `200 OK`: Returns the pet object.
- `500 Internal Server Error`: If the type of pet cannot be retrieved.
- **Example**:

GET /api/pets/?type=dog

---

### 2. Get Pet by ID
**GET** `/api/pets/:id`

- **Description**: Retrieves a specific pet by its unique ID.
- **Path Parameters**:
- `id`: The unique ID of the pet.
- **Response**:
- `200 OK`: Returns the pet object.
- `500 Internal Server Error`: If the pet cannot be retrieved.
- **Example**:

GET /api/pets/123

---

### 3. Create a New Pet
**POST** `/api/pets`

- **Description**: Adds a new pet to the shelter.
- **Request Body**:
- A JSON object representing the pet. Example:
  ```json
  {
    "name": "Oliver",
    "pic": "img/path/here",
    "breed": "Siamese",
    "type": "Cat",
    "sex": "Male",
    "color": "Seal Point",
    "sprayedNeutered": "Yes",
    "age": "2",
    "id": "59821",
    "microchiapNumber": "982000364789642",
    "datePosted": "2024-02-01",
    "status": [
      "Health checked",
      "Vaccinations up "
    ],
    "bio": "Hello"
  }
  ```
- **Response**:
- `201 Created`: Returns the created pet object.
- `500 Internal Server Error`: If the pet cannot be created.
- **Example**:

POST /api/pets

---

### 4. Update a Pet
**PUT** `/api/pets/:id`

- **Description**: Updates an existing pet's information.
- **Path Parameters**:
- `id`: The unique ID of the pet.
- **Request Body**:
- A JSON object representing the updated pet. Example:
  ```json
  {
    "name": "Oliver",
    "pic": "img/path/here",
    "breed": "Siamese",
    "type": "Cat",
    "sex": "Male",
    "color": "Seal Point",
    "sprayedNeutered": "Yes",
    "age": "2",
    "id": "59821",
    "microchiapNumber": "982000364789642",
    "datePosted": "2024-02-01",
    "status": [
      "Health checked",
      "Vaccinations up "
    ],
    "bio": "Hello"
  }
  ```
- **Response**:
- `200 OK`: Returns the updated pet object.
- `400 Bad Request`: If the ID in the URL and the request body do not match.
- `500 Internal Server Error`: If the pet cannot be updated.
- **Example**:

PUT /api/pets/123


---

### 5. Delete a Pet
**DELETE** `/api/pets/:id`

- **Description**: Deletes a pet by its unique ID.
- **Path Parameters**:
- `id`: The unique ID of the pet.
- **Response**:
- `204 No Content`: If the pet is successfully deleted.
- `500 Internal Server Error`: If the pet cannot be deleted.
- **Example**:

DELETE /api/pets/123

---
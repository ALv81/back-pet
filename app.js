const express = require('express')
const cors = require('cors')
const { createUser, loginUser } = require('./controllers/user-controller')
const { getAllPets, createPet, updatePet, deletePet } = require('./controllers/pet-controller')


const app = express()

app.use(cors())
app.use(express.json())



app.post('/user/register', createUser)
app.post('/user/login', loginUser)

// Pets
app.get('/pet/all', getAllPets)
app.post('/pet/create', createPet)
app.put("/pet/update/:id", updatePet)
app.delete("/pet/delete/:id", deletePet)


module.exports = {app}


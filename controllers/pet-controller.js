const Pet = require("../models/petModel")

const getAllPets = async (req,res) => {

    try {

        const allPets = await Pet.findAll()

        res.status(200).json({ allPets })
    } catch (error) {
        console.log(error)
    }


    

}

const createPet = async (req,res) => {

    try {
        const pet = await Pet.create(req.body)

        res.status(200).json({ status: 'sucess', pet })
    } catch (error) {
        console.log(error)
    }
    
}

const updatePet = async(req,res) =>{
    try {

        const {id} = req.params

         const pet = await Pet.findByPk(id)

         if(!pet){
            return res.status(404).json({ message: "Pet not found" })
         }

         await pet.update(req.body)

        
        res.status(200).json({ status: 'succes', pet })
    } catch (error) {
        console.log(error)
    }
}

const deletePet = async  (req,res) => {
    try {

        const {id} = req.params

         const pet = await Pet.findByPk(id)

         if(!pet){
            return res.status(404).json({ message: "Pet not found" })
         }

         await pet.destroy()

        
        res.status(200).json({ status: 'succes', message:"Pet delete" })
    } catch (error) {
        console.log(error)
    }

}

module.exports = { getAllPets, createPet, updatePet, deletePet }
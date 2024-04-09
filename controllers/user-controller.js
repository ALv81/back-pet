const bcrypt = require('bcrypt')

const User = require("../models/userModel")

const createUser = async (req,res) => {

    const { email, password  } = req.body

   const existUser = await User.findOne({ where:{email} })


   if(existUser){
       return res.status(401).json({ message: "User exist" })
   }

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)


    req.body.password = hashPassword


   const user = await User.create(req.body)

   res.status(200).json({ user  })

}

const loginUser = async (req,res) => {
   const { email, password } = req.body

   console.log(password)

   const user = await User.findOne({ where: {email} })

   if(!user){
    return res.status(404).json({ message: 'Credenciales invalidas' })
   }

   const matchPassword = await bcrypt.compare(password, user.password )

   if(!matchPassword){
    return res.status(404).json({ message: 'Credenciales invalidas' })
   }


   res.status(200).json({ message: "Login Exitoso", user })


}


module.exports = {createUser, loginUser}
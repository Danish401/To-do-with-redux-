const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')
const User=require('../modal/usermodal')
const register=async(req,res) => {
    try {
        const {name,email,password} = req.body
        const userExists = await User.findOne({email})

        if(userExists){
            return res.status(400).json({msg: 'User already exists'})
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newuser= await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.status(200).json({
            newuser,
            msg: 'User created successfully'
        })

        
    } catch (error) {
        console.error(error)
        
    }
}

const login=async(req,res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        
        if(!user){
            return res.status(400).json({msg: 'User does not exist'})
        }
        
        const isMatch = await bcrypt.compare(password, user.password)
        
        if(!isMatch){
            return res.status(400).json({msg: 'Invalid credentials'})
        }
        const token =jwt.sign({id: user.id},process.env.JWT_SECRET_KEY,{expiresIn:"1h"})
        res.status(200).json({token,
            msg:"user logged in successfully"
        })

        
    } catch (error) {
        console.error(error)
        
    }
}

module.exports={
    register,
    login
}
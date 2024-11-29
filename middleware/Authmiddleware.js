const jwt = require('jsonwebtoken')
const User= require('../modal/usermodal')
const Auth=async(req,res,next) => {
    try {
        const token=req.headers.authorization.split(' ')[1]
        if(!token) return res.status(401).json({msg:'Token not provided'})
            const decoded=await jwt.verify(token,process.env.SECRET_KEY)
        const id=decoded.id
        req.user=id
        
        const user= await User.findById(id)
        if(!user) return res.status(401).json({msg:'User not found'})

        next()
}catch(err) {
    return res.status(500).json({msg:err.message})
}
}

module.exports=Auth
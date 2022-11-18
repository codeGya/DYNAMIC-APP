const user=require('../MODELS/user.js')
const jwt=require('jsonwebtoken')

exports.decode=async (req,res,next)=>{
   const encode=jwt.verify(req.headers.header1,'indreshsingh')
      


    const findParticularUser=await user.findByPk(encode.userId)
    req.user=findParticularUser
    console.log(req.user)
    next()
}




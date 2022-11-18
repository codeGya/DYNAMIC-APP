const user=require('../MODELS/user.js')

const jwt=require('jsonwebtoken')
const todo=require('../MODELS/todo.js')
exports.signUpNewUser=async (req,res,next)=>{
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name
    const mobilenumber=req.body.mnumber
    
    const waitForSearchingDatabase=await user.findAll({where:{email:email}})
    if(waitForSearchingDatabase.length===0)
    {
       
        user.create({name:name,email:email,password:password,mobilenumber:mobilenumber})
        
        res.send({})
    }
    else{
        res.send('User Already Registered')
    }
}

exports.signInAlreadyPresentUser=async (req,res,next)=>{
    const email=req.body.email
    const password=req.body.password
    // console.log(password,'password')
    // console.log(email,'email')

    const getOneParticularUser=await user.findAll({where:{email:email}})
    //console.log(getOneParticularUser)
    if(getOneParticularUser.length===0)
    {
        res.status(400).send('No such email Id exist')
    }
    if(getOneParticularUser.length>0)
    {
        
             if(getOneParticularUser[0].password===password)
             {
              const encryptData=jwt.sign({userId:getOneParticularUser[0].id},'indreshsingh')
              //console.log(encryptData)
              res.status(200).send(encryptData)
             }

            
           else{
                res.status(400).send('Password is incorrect')
            }
    }
        
    
}
exports.addParticularToDoList=async (req,res,next)=>{
    const task=req.body.task
    const date=req.body.date
    console.log(date)
    const list=req.body.list
    console.log(req.user.id)
    console.log(req.user.id)

    const waitForUpdatingToDoList=await todo.create({task:task,date:date,list:list,userId:req.user.id})
    res.send(waitForUpdatingToDoList)

}
exports.deleteOneUser=async (req,res,next)=>{
    const deleteId=req.params.deleteId
    console.log(req.user.id)

    await todo.destroy({where:{id:deleteId,userId:req.user.id}})
    res.send({})

}
exports.getAllUserDataAtOnce=async (req,res,next)=>{
    
    const waitForGettingAllData=await todo.findAll({where:{userId:req.user.id}})
    console.log(waitForGettingAllData,'wait for getting all data')
    res.send(waitForGettingAllData)
}
const express=require('express')
const router=express.Router()
const controller=require('./controller.js')
const authenticate=require('./authenticate.js')

router.post('/signup/user',controller.signUpNewUser)
router.post('/signin/user',controller.signInAlreadyPresentUser)
router.post('/add/todo',authenticate.decode,controller.addParticularToDoList)
router.delete('/delete/user/:deleteId',authenticate.decode,controller.deleteOneUser)
router.get('/get/all/data',authenticate.decode,controller.getAllUserDataAtOnce)

module.exports=router
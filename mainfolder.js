const express=require('express')
const app=express()
const cors=require('cors')
const user=require('./MODELS/user.js')
const todo=require('./MODELS/todo.js')
const router=require('./BACKEND/router.js')
const sequelize=require('./MODELS/database.js')
app.use(cors())

user.hasMany(todo)
todo.belongsTo(user)
synchronizing()
async function synchronizing()
{
    await sequelize.sync()
}

app.use(express.json())
app.use(router)

app.listen(3800)
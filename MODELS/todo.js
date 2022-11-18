const sequelize=require('./database.js')
const Sequelize=require('sequelize')

const todo=sequelize.define('todo',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        primaryKey:true
    },
    task:Sequelize.STRING,
    date:Sequelize.STRING,
    list:Sequelize.STRING
})

module.exports=todo
const sequelize=require('./database.js')
const Sequelize=require('sequelize')

const user=sequelize.define('user',{
    id:{type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
        primaryKey:true

    },
    name:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING,
    unique:true},
    password:Sequelize.STRING,
    mobilenumber:Sequelize.STRING
})

module.exports=user


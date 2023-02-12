const mongoose=require('mongoose')

const validator=require('express-validator')

const USERS=mongoose.Schema({

    userMail:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    budget:{
        type:Number
    }

})

const USERSModel=mongoose.model('users',USERS)

module.exports=USERSModel
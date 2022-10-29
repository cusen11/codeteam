const mongoose = require('mongoose'); 

const UsersChema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    level:{
        type:Number,
        default: 2
    },
    avatar:{ 
        type: String
    }
},{ timestamps: true })

module.exports = User = mongoose.model('user', UsersChema);
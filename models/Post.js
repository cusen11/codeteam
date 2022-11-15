const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    customer: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    likes:[
        {
            user:{
                type:  mongoose.Schema.Types.ObjectId,
                ref:'user'
            }
        }
    ],
    angrys:[
        {
            user:{
                type:  mongoose.Schema.Types.ObjectId,
                ref:'user'
            }
        }
    ],
    normals:[
        {
            user:{
                type:  mongoose.Schema.Types.ObjectId,
                ref:'user'
            }
        }
    ],
    comment:[
        {
            user:{
                type:  mongoose.Schema.Types.ObjectId,
                ref:'user'
            },
            text:{
                type:String
            },
            lastname:{
                type: String, 
            },
            firstname: {
                type: String, 
            },
            username:{
                type:String
            },
            avatar:{
                type:String
            },
            date:{
                type:Date,
                default: Date.now
            }
        }
    ]

},{ timestamps: true })

module.exports = Post = mongoose.model('post', PostSchema)
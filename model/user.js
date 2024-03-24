const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    role:{type:String},
    experiance:{type:String},
    comments:{type:Array},
    arrayOfObj:{type:Array},
    cmtAndReply: [
        {id: mongoose.Schema.Types.ObjectId,
            comment: String,
            reply: [String]
        }
    ],
    createdAt:{type:Date,default:Date.now()}
},{versionKey:false})

userSchema.index({name:1})

module.exports = mongoose.model('userSchema',userSchema,"userSchema")

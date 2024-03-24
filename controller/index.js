const userModel = require("../model/user")
const mongoose = require('mongoose');


exports.createUser = (req,res) => {
    try{
        const data = {
            name:"gokul",
            age:10,
            role:"tester",
            experience:3,
            comments:["nice","bad","poor","great","awesome"],
            arrayOfObj:[
                {comments1:"good"},
                {comments2:"poor"},
                {comments3:"bad"},
                {comments7:"awesome"},
                {comments4:"greateWork"},
                {comments6:"keepRocking"},
                {comments5:"NiceTry"},
            ]

        }
        const createRec = userModel.create(data)
        res.json({createRec})
    }catch(e){
        console.log(e,"error")
    }

}

exports.updateArrayOfString = async (req,res) => {
    try{
        const id = "65ffc64d74974a9cb8b7e3bb"

        //Add data to an array of strings: *** add same value again and again *****
        //const data = "poor";
        //const update =  await userModel.updateOne({_id: new mongoose.Types.ObjectId(id)},{ $push: {comments:data} })

        // Add data to array only if it not available 
        //const update = await userModel.updateOne({_id: new mongoose.Types.ObjectId(id)},{$addToSet:{comments:data}})


        //Remove data from an array of strings:
        // const data = "poor";
        //const update =  await userModel.updateOne({_id: new mongoose.Types.ObjectId(id)},{ $pull: {comments:data} })

        //Update data in an array of strings:
        //const stringToUpdate = "poor";
        //const updatedString = "gooddd";
        //const update =  await userModel.updateOne({_id: new mongoose.Types.ObjectId(id),comments:stringToUpdate},{ $set: {"comments.$":updatedString} })

        //fetch based on key
        //const data = await userModel.findOne({_id:new mongoose.Types.ObjectId(id)},{"comments":1})
        
        
        //res.json({data})
    }catch(e){
        console.log(e,"error")
    }

}

exports.updateArrayOfObjects = async(req,res) => {
    try{
        const id  = "65ffd20a9f5e9f002370c5d6";

        //To push new value to array of object
        //const update = await userModel.updateOne({_id:new mongoose.Types.ObjectId(id)},{$push:{arrayOfObj:{comments9:"pushComment"}}})
        
        //To push array of object 
        //const update = await userModel.updateOne({_id:new mongoose.Types.ObjectId(id)},{$push:{arrayOfObj:[{comments9890:"testNew"}]}})

        //Update particular key value --- this match only first element
        //const updata = await userModel.updateOne({_id:new mongoose.Types.ObjectId(id),"arrayOfObj.comments9890" : "update 9"},{"$set":{"arrayOfObj.$.comments9890":"update 90"}})
        
        //update particular element with elem match -- this match all element 
        //const update = await userModel.updateOne({_id: new mongoose.Types.ObjectId(id),arrayOfObj:{$elemMatch:{comments9890:"update 10"}}},{"$set":{"arrayOfObj.$.comments9890":"update 90"}})
        res.json({update})


    }catch(e){
        console.log(e,"error")
    }

}


exports.addComments = async(req,res) => {
    try{
        const id = "65ffe468f618e22de0b8e6f7";

        const data ={
            comment:"hope you are doing good"
        }
        const updateFn = await(userModel.updateOne({_id:new mongoose.Types.ObjectId(id)},
        { $push: { cmtAndReply: data } }
        ))
        res.json({updateFn})
    }catch(e){
        console.log(e,"error")
    }

}

//normal schema
// exports.addReply = async(req,res) => {
//     try{
//         const id = "65ffe468f618e22de0b8e6f7";

//         const data ={
//             commentId: new mongoose.Types.ObjectId("65ffec886e5537629b94a7f5"),
//             reply:"good"
//         }

//         //const updateFn = await userModel.updateOne({_id:new mongoose.Types.ObjectId(id),"cmtAndReply.commentId":data.commentId},{$push:{'cmtAndReply.$.reply':data.reply}})
        
//         //with ele match
//         const update = await userModel.updateOne({_id:new mongoose.Types.ObjectId(id),cmtAndReply:{$elemMatch:{commentId:data.commentId}}},{$push:{'cmtAndReply.$.reply':data.reply}})
//         res.json({update})

//     }catch(e){
//         console.log(e,"error")
//     }

// }

//array of object schema

exports.addReply = async(req,res) => {
    try{
        const id = "65ffe468f618e22de0b8e6f7";

        const data ={
            commentId: new mongoose.Types.ObjectId("65fff51da74bc1afc9080627"),
            reply:"good"
        }


        const update = await userModel.updateOne({
            _id:new mongoose.Types.ObjectId(id),cmtAndReply:{$elemMatch:{_id:data.commentId}}},
            {$push:{'cmtAndReply.$.reply':data.reply}}
        )
        res.json({update})

    }catch(e){
        console.log(e,"error")
    }

}
exports.editReply = async(req,res)=>{
    try{
        const id = "65ffe468f618e22de0b8e6f7";

        const data ={
            id: new mongoose.Types.ObjectId("65fff51da74bc1afc9080627"),
            oldReply:"poor",
            newReply:"test"
        }

        
        const result = await userModel.updateOne(
            { _id: id },
            { $set: { "cmtAndReply.$[outer].reply.$[inner]": data.newReply } },
            { arrayFilters: [{ "outer._id": data.id }, { "inner": data.oldReply }] }
        );
        
        
        res.json({result})
    }catch(e){
        console.log(e)
    }
}
exports.viewCommentsAndReply = (req,res) => {
    try{

    }catch(e){
        console.log(e,"error")
    }

}



exports.aggrigation = (req,res) => {
    try{

    }catch(e){
        console.log(e,"error")
    }

}
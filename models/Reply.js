const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
    body:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

module.exports = mongoose.model("Reply",replySchema);
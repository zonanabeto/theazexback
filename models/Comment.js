const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    entry:{
        type:Schema.Types.ObjectId,
        ref:"Entry"
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:"Quote"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

module.exports = mongoose.model("Comment",commentSchema);
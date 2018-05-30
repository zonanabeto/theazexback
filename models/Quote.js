const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    
    published:{
        type:Boolean,
        required:true,
        default:false
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    daily:{
        type:String,
        enum:["Monday","Tuesday","Wednesday", "Thursday", "Friday" , "Saturday","Sunday"],
        required:true
    },
    img:String,

    body:String,

    tags:[String],

    source:String,
    
    comments:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    }
},{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})

module.exports = mongoose.model("Quote",quoteSchema);
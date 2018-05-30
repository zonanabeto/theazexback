const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    
    published:{
        type:Boolean,
        default:false
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    img:String,
    body:String,
    tags:[String],
    category:{
        type:String,
        enum:["Place","Quote","Book"]
    },
    comments:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    },
    views:{
        type:Number,
        default:0
    }
},{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})
module.exports = mongoose.model("Entry",entrySchema);
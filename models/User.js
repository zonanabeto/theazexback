const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type:String,
        required:true,
        index: true,
        unique: true

    },
    avatar:String,
    bio:String,
    name:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }],
    role:{
        type:String,
        enum:["User","Admin","Writer"],
        default:"User"
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
    
})

userSchema.plugin(passportLocalMongoose , {usernameField:'email'});
module.exports = mongoose.model("User",userSchema);
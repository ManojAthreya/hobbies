const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const UserSchema = new Schema({
    googleID:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    firstName:String,
    lastname:String,
    image:String
});

mongoose.model('users',UserSchema);
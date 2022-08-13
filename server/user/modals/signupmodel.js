const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },

    password : {
        type:String,
        requred: true,
        minLength:3
    },
    confirm_password:{
        type:String,
        requred: true,
        minLength:3

    }
});

const signupModel = mongoose.model("usersignup",signupSchema);
module.exports=signupModel
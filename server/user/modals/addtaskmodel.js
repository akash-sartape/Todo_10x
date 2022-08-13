const mongoose = require("mongoose");

const addtaskSchema = new mongoose.Schema({
    activity : {
        type : String,
        required : true
    },

    status : {
        type:String

    },
    Time:{
        type:String
    },
    Action:{
        type:String
    }
});

const addtaskModel = mongoose.model("task",addtaskSchema);
module.exports=addtaskModel
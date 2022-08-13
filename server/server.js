const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const usercontroller = require("./user/routes/user");
const addtaskModel = require('./user/modals/addtaskmodel')

require("dotenv").config();

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors());

mongoose.connect("mongodb://localhost/TodoApp" , (data)=>{
   console.log("Connected to database")
},(err)=>{
    console.log(err)
})

app.listen(process.env.PORT || 3001,(err,res)=>{

    if(err){
     console.log(err.message)
    }
    else{
     console.log("Server started at port 3001 ")
    }
 });

 app.get("/",(req,res)=>{
    res.send("Todoapp backend")
});

app.post('/addactivity',(req,res)=>{
    addtaskModel.create({activity:req.body.activity,status:"Pending",Time:"",Action:"Start"}).then(()=>{
        res.status(200).send("added successfully")
    }).catch((err)=>(res.status(400).send(err)))
})

app.get('/getactivity',(req,res)=>{
    addtaskModel.find().then((activitydata)=>{
        // console.log(activitydata)
        res.status(200).send(activitydata)
    }).catch((err)=>(res.status(400).send(err)))
})
app.use("/user",usercontroller);

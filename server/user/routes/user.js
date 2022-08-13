const express = require("express");
const router = express.Router();
const signupModel = require("../modals/signupmodel");
const {CheckExistingUser,CreateHashPassword} = require("../utility");
const bcrypt = require('bcrypt')

const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const salt=10;

router.post('/register',async(req,res)=>{

  if(await CheckExistingUser(req.body.username)){
    console.log("inside if")
   res.send(req.body.username +" username already exist")
         } else{
           
        bcrypt.genSalt(salt).then((salthash)=>{
                    bcrypt.hash(req.body.password,salthash).then((hashpassword)=>{
                     signupModel.create({username:req.body.username , confirm_password:req.body.confirm_password , password:hashpassword})
                     .then(()=>{res.status(200).send( req.body.username+" created susucessfully")})
                     .catch((err)=>{res.status(400).send(err.message+"It should be 10 digit")})
                              }).catch((err)=>{
                               console.log(err)
                              })
                                  }).catch((err)=>{
                                        console.log(err)
                                                })
              
 }
});

router.post("/login",(req,res)=>{
  
  
  signupModel.find({username:req.body.username}).then((userdata)=>{
    
    if(userdata.length){
       bcrypt.compare(req.body.password,userdata[0].password).then((value)=>{
        if(value){
        
          const authtoken = jwt.sign(userdata[0].username,process.env.Secret_Key);
          res.status(200).send({authtoken});

        }else{
          res.status(401).send("invalid password")

        }
       })
    }
    else{
      res.status(400).send("unautorise User need to login first")
    }

  }).catch((err)=>{
    console.log(err.message)
     res.send("Unauthirize user")
  })
});

router.post("/getuserdata",async(req,res)=>{
  const decoded = await jwt.verify(req.body.authtoken,process.env.Secret_Key ); 
  signupModel.find({username:decoded}).then((userdata)=>{
    // console.log(userdata[0])
    res.status(200).send(userdata[0].username)
  }).catch((err)=>{res.status(400).send(err)})
})


  module.exports=router
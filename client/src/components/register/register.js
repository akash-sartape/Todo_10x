import React from "react";
import './register.css'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = ()=>{
    const Navigate = useNavigate()

    const[Registerdata,setRegisterdata]=useState({});

    const HandleRegister = ()=>{
        axios.post('http://localhost:3001/user/register',Registerdata).then((data)=>{
            console.log(data);
            Navigate('/')
        }).catch((err)=>{console.log(err)})
    }
  

    return(
        <>
        <div className="Container">
            <div className="Registerheading">Register</div>
            <div className="username">
                <input type="text" placeholder="username" onChange={(e)=>{setRegisterdata({...Registerdata,  username:e.target.value})}} />
            </div>
            <div className="password">
                <input type="password" placeholder="password" onChange={(e)=>{setRegisterdata({...Registerdata, password:e.target.value})}}/>
            </div>
            <div className="confirmpassword">
                <input type="password" placeholder="confirmpassword" onChange={(e)=>{setRegisterdata({...Registerdata, confirm_password:e.target.value})}}/>
            </div>
            <button onClick={()=>{HandleRegister() }}>Register</button>
        </div>
        </>
    )
}
export default Register
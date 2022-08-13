import  { useState } from 'react'
import './login.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

const [Logindata,SetLoginData] = useState({});
const Navigate=useNavigate()

const HanleLogin=()=>{
    axios.post('http://localhost:3001/user/login',Logindata)
    .then((res)=>{
        localStorage.setItem('token',res.data.authtoken);
        console.log(res)
        Navigate('/todo')})
      
    .catch((err)=>{
        console.log(err.response.data)
        alert(err.response.data)
    })
    
}

    return (<>
        <div className='logincontainer'>
            <h1>Login</h1>
            <div className='username'>
                <input type='text' placeholder='username' onChange={(e)=>{SetLoginData({...Logindata,username:e.target.value})}} />
            </div>
            <div className='password'>
                <input type='password' placeholder='password' onChange={(e)=>{SetLoginData({...Logindata,password:e.target.value})}}/>
            </div>
            <button onClick={()=>{HanleLogin()}}>Login</button>
           <Link to='/register'> <p>Dont have account signup..</p> </Link>
        </div>
    </>)
}
export default Login
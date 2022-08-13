import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Addactivity = ()=>{
    const Navigate= useNavigate()

    const [activity,setactivity]=useState({});
  
   const HandleAddlist = ()=>{
    axios.post('http://localhost:3001/addactivity',activity)
   }

    return(<div className="activitycontainer">

        <label for="activity">Add Activity</label>
        <input type="text" onChange={(e)=>{setactivity({...activity,activity:e.target.value})}}>

        </input>
        <button onClick={()=>{HandleAddlist();Navigate('/todo')}}>Add in Todolist</button>
    </div>)


}
export default Addactivity
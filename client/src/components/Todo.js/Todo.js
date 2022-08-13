import './todo.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Todolist = () => {
    const Nevigate = useNavigate()
    
    const Authtoken = { authtoken: localStorage.getItem('token') };
    const [userdata, setuserdata] = useState("");
    const[activitydata,setactivitydata]=useState([])


    useEffect(() => {
        axios.post('http://localhost:3001/user/getuserdata', Authtoken).then((res) => {
            setuserdata(res.data);
   }).catch((err) => { console.log(err) })

   axios.get('http://localhost:3001/getactivity').then((acti)=>{
   let rawdata=acti.data;
   for(let i=0;i<rawdata.length;i++){
    setactivitydata([...activitydata,rawdata])
     
   }
    // console.log(rawdata)
  
})
    }, [])
console.log("Activitydata  "+activitydata)
    return (<>
        <div className='maincontainer'>
            <div className='navbar'>
                <div>{userdata}</div>
            </div>
            <div className='sidebar'>
                <h3>To Do List</h3>
                <h4>History</h4>
                <button >Logout</button>
            </div>
            <div className='maindata'>
                <div>
                    <button onClick={()=>{Nevigate('/addactivity')}}>Add Activity</button>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr> <th> Activity</th>
                                <th>Status</th>
                                <th>Time Taken (Hr:Min:Sec) </th>
                                <th>Action</th>
                             </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>


    </>)
}

export default Todolist
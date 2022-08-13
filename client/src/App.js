
import './App.css';
import Register from "./components/register/register.js";
import Login from './components/login/login';
import Todolist from './components/Todo.js/Todo.js';
import Addactivity from './components/addactivity';
import { BrowserRouter, Routes,Route} from "react-router-dom";


function App() {

 
  return (
    <div className="appcontainer">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/todo' element={<Todolist/>}></Route>
        <Route exact path='/addactivity' element={<Addactivity/>}></Route>
      
      </Routes>


      </BrowserRouter>


 </div>
  );
}

export default App;

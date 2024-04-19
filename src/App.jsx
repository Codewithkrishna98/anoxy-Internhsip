
import './App.css'
import Profile from './components/createprofile/Profile'
import Home from './components/homepage/Home'
import Login from './components/loginpage/Login'
import Selection from './components/selectingpage/Selection'
import Startingpage from './components/startingPage/Startingpage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import {useState ,useRef} from "react"
function App() {
  // const inputElement= useRef(null);
  // const [userimage,setUserimage]= useState("")


  // const  handleOnclick =()=>{
  //   inputElement.current.click();
  // }
  // const  handleOnChange =(e)=>{
  //   const file = e.target.files[0];
  //   console.log(file)
  //   setUserimage(e.target.files[0])
   
 
   
  // }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Startingpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile /> }/>
        <Route path='/selection' element={<Selection/>}/>
        <Route path='/home' element={<Home  />}/>
      </Routes>
    </Router>
      
      
    </>
  )
}

export default App

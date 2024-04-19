/* eslint-disable react/prop-types */
import styles from "./Profile.module.css"
import { MdOutlineCameraEnhance } from "react-icons/md";
import {useState ,useRef} from "react"


import {Link, useNavigate} from "react-router-dom"
  const Profile = () => {
const navgiate=useNavigate()
const handleOnNext=()=>{
navgiate("/selection")
}
    const inputElement= useRef(null);
    const [userimage,setUserimage]= useState("")


    const  handleOnclick =()=>{
      inputElement.current.click();
    }
    const  handleOnChange =(e)=>{
      const file = e.target.files[0];
      console.log(file)
      setUserimage(e.target.files[0])
    }



    return (
      <>
      <div className=" lg:w-full  flex justify-start text-center p-8 ">
<div className=" text-3xl    header text-pink-600">
 <Link to="/">
  dribbble
 </Link>

</div>
      </div>

<div className=" lg:w-full h-fit flex justify-center  ">
<div className=" lg:w-[70%]  sm:w-[100%] h-fit flex justify-center  gap-5 flex-col">
  <div className="lg:w-full   lg:pl-28  ">

  <h1 className=" lg:text-4xl font-extrabold  text-gray-800">Welcome! Let&#39;s create your profile</h1>
  </div>

  <div className="lg:w-full lg:flex-row sm:flex sm:w-8  sm:flex-col  lg:pl-28  text-gray-500  ">
<div  className="  sm:flex   ">

  Lets others get to know you better! 
</div>

<span>
You can do these later
</span>
  </div>

  <div className="lg:w-full lg:pl-28 text-xl text-gray-800 font-bold">
Add an avatar
  </div>


  <div className=" lg:w-full  sm:border-black lg:flex lg:flex-row  lg:pl-28">
  <div className="w-[150px] h-[150px] border-gray-800 border rounded-full flex justify-start       text-center border-dashed   cursor-pointer"
  onClick={handleOnclick}
  >
    {userimage ? <img src={URL.createObjectURL(userimage)} alt="userImage"
    className="w-[100%] h-[100%]  rounded-full   bg-cover "
    /> : 
    <MdOutlineCameraEnhance  className="w-[30px]  p-1  ml-14 mt-14 cursor-pointer text-gray-600 h-[30px]"/>
    }
    
  
  </div>
  <div className=" sm:border-black m-11 bg-white">
      <input type="file"  className="    text-xs text-gray-500 " 
      ref={inputElement}
      onChange={handleOnChange }
      
      />
  </div>
  
  </div>


  <div className=" lg:w-full lg:pl-28 ">
<div className=" text-xl font-extrabold text-gray-800 ">
  Add your location
</div>
<div className=" mt-16 lg:w-[100%] ">
  <input type="search"  className={styles.input} placeholder="Enter a location"
  
  />
</div>
  </div>


  <div className="w-full lg:pl-28  mt-9 ">
    <div>
     <span className=" text-lg text-red-800">
     
      </span> 
    </div>
  <button className=" hover:bg-rose-700 w-40 bg-rose-600 pl-4 pr-4 text-white pt-1 pb-1 rounded-lg"
  onClick={handleOnNext}
  >
    Next
    </button>
  </div>
</div>
</div>
</>
    )
  }
  
  export default Profile
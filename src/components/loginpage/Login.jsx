import styles from "./Login.module.css"
 import avatar from "../../../public/avatar.png"
 import { useState } from "react";
 import { Link ,useNavigate} from "react-router-dom"
 import { signInWithEmailAndPassword } from "firebase/auth";
 import {auth} from "../../firebase"
 const Login = () => {

  const navigate=useNavigate()
  const [value, setValue] = useState({
    
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");
  const handleOnsubmission = () => {
    if ( !value.email || !value.pass) {
      setError("Please fill all fields!");
      return;
    } else {
      setError("");
    }
    console.log(value);
//     step-1 
    signInWithEmailAndPassword(auth,value.email,value.pass).then(()=>{
     // step-2 
     
      
     //  step-3 
     navigate("/profile")
     
    }).catch((err)=>setError(err.message))
  };


   return (
   <>
    <div className={styles.parent}>

    <div  className={styles.container}>
<img src={avatar} alt="backgound-image" className={styles.avatar} />
     
    </div>
    
    <div className={styles.container2}>
<nav className={styles.nav}>
 <span className={styles.span1}>

 Don&#39;t have an account ? 
 </span>
 <span className={styles.span2}>
<Link to="/">

  Create 
</Link>
 </span>
</nav>
<div className={styles.title}>
<span  className="  text-3xl   font-bold" >
 Sign In to Dribbble
</span>
 <div>
  <span className=" text-red-700 font-bold">
    {error}
  </span>
 </div>
<br />
 <label htmlFor="name" className=" mt-2 text-lg font-semibold">Email</label>
<span  className="  w-[100%]  rounded-lg  border mt-2 " >
 <input type="text"  placeholder=" @gmail" id="name" className=" w-[100%] bg-slate-200 p-1"
 onChange={(e) => {
  setValue((prev) => ({ ...prev, email: e.target.value }));
}}
 />
</span>
<br />
 <label htmlFor="name" className=" mt-2 text-lg font-semibold">Password</label>
<span  className=" w-[100%]  rounded-lg  border mt-2 " >
 <input type="text"  placeholder=" 6+characters" id="name" className=" w-[100%] bg-slate-200 p-1"
 
 onChange={(e) => {
  setValue((prev) => ({ ...prev, pass: e.target.value }));
}}
 />
</span>
<div className= " flex justify-start gap-3 mt-4 ">

<div>

</div>
</div>

<button className=" w-[30%] font-bold hover:bg-red-500 mt-5  text-sm p-2 btn    cursor-pointer rounded-lg text-white"
onClick={handleOnsubmission}
>
 Sign In
</button>
</div>
    </div>


   </div>
    </>

   )
 }
 
 export default Login
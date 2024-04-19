import styles from "./Startingpage.module.css"
 import avatar from "../../../public/avatar.png"
 import {useState} from "react"
 import { Link,useNavigate } from "react-router-dom"
 import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
 import {auth} from "../../firebase"
 const Startingpage = () => {

  const navigate=useNavigate()
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
    checkbox:false,
  });
  const [error, setError] = useState("");

  const handleOnsubmission = () => {
    if (!value.name || !value.email || !value.pass || !value.checkbox) {
      setError("Please fill all fields!");
      return;
    } else {
      setError("");
    }
    console.log(value);
//     step-1 
    createUserWithEmailAndPassword(auth,value.email,value.pass).then((res)=>{
     // step-2 
     const user = res.user;
       updateProfile(user,{displayName:value.name})
     //  step-3 
     navigate("/profile")
     console.log(user)
    }).catch((err)=>setError(err.message))
  };

   return (
    <>
    <div className={styles.parent}   >

     <div  className={styles.container}>
<img src={avatar} alt="backgound-image" className={styles.avatar} />
      
     </div>
     
     <div className={styles.container2}>
<nav className={styles.nav}>
  <span className={styles.span1}>

  Already a member ? 
  </span>
  <span className={styles.span2}>

   <Link to='/login'>Sign In</Link>
  </span>
</nav>
<div className={styles.title}>

<span className=" w-[100%] ">
  <h1 className=" text-3xl font-bold">Sign up to Dribbble</h1>
</span>
<div>
  <span className=" text-red-700 font-bold">{error}</span>
</div>
  <label htmlFor="name" className=" mt-2 text-lg font-semibold">Name</label>
<span  className=" w-[100%]  rounded-lg  border mt-2 " >
  <input type="text"  placeholder=" username" id="name" className=" w-[100%] bg-slate-200 p-1"
  onChange={(e) => {
    setValue((prev) => ({ ...prev, name: e.target.value }));
  }}
  />
</span>
<br />
  <label htmlFor="name" className=" mt-2 text-lg font-semibold">Email</label>
<span  className=" w-[100%]  rounded-lg  border mt-2 " >
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
<div>

</div>
<div>

<span  className="  w-fit text-teal-800">
<input type="checkbox" className="w-4 mt-2 p-1" value={value.checkbox} 
// onSubmit={setValue(!value.checkbox)}
onChange={(e) => {
  setValue((prev)=>({...prev, checkbox: e.target.checked}));
}}
/>
Creating an account means you’re okay with our 

</span>
<span className="  w-fit text-blue-900">
  Terms of Services,Privacy Policy,
</span>
<span className=" m-1  w-fit text-teal-800">
  and our default
</span>
<span className="  w-fit text-blue-900">
  Notification  settings
</span>
</div>

{/* <div className=" w-full flex justify-center">
<button type="button" className="btn btn-primary">Primary</button>
</div> */}


</div>
<div className=" mediabtn sm:w-full  flex  ">

<button className=" lg:w-[20%]  lg:ml-[190px]  mediabtn mt-5 btn text-sm  bg-rose-700    cursor-pointer rounded-lg text-white" onClick={handleOnsubmission}>
  <span  >create account</span>
</button>
</div>

<div className=" w-fit flex justify-start text-start  ml-9 mt-2 lg:ml-[190px] text-xs flex-col">
  <p>This site is protected by reCAPTCHA and Google</p>
  <div className=" w-fit flex flex-row gap-2 ">

  <p className=" text-blue-900">Privacy Policy</p>
  <p>and</p>
  <p className=" text-blue-900">Terms of Service</p>
  <p>apply</p>
  </div>
</div>
</div>

     </div>


    
     </>
   )
 }
 
 export default Startingpage
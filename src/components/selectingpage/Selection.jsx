 import { Link } from "react-router-dom"
 import poster1 from "../../../public/1.jpg"
 import poster2 from "../../../public/2.jpg"
 import poster3 from "../../../public/3.jpg"
// import { useState } from "react"
 

 const Selection = () => {
 
   return (
    <>
    <div className=" lg:w-full  flex justify-start text-center p-8 ">
    <div className=" text-3xl    header text-pink-500">
     <Link to="/profile">
      dribbble
     </Link>
    
    </div>
          </div>

<div className=" w-full flex justify-center  ">
<h1 className=" text-3xl font-bold text-center text-gray-800">Whats brings you to Dribbble ?</h1>
</div>
<div className=" w-full flex justify-center  ">
<h1 className=" text-xm  text-center text-gray-400">Select the option that best describe you. Don&#39;t worry, you can explore other option later</h1>
</div>
<div className=" lg:w-full sm:w-full  lg:flex-row lg:flex lg:justify-center  sm:m-4   sm:flex-col sm:flex    lg:gap-14 lg:mt-20   sm:pl-10  lg:p-6">
<div className="lg:w-[200px] sm:w-[100px]   h-fit border flex justify-center effectformob zoom  rounded-lg flex-col  ">
  <div className=" flex justify-center  ">

<img src={poster1} alt="poster" width={150} height={80}   className="  " />
  </div>
<div className=" w-full  p-3  mb-5 textformob">
  <span className=" font-bold text-sm text-gray-800 textformob">
    I&#39;m a designer looking to share my work
  </span>
  <div className=" flex justify-center ">
  
  <div className=" w-5 h-5 border rounded-full">

  <input type="checkbox"  className=" w-[100%] h-[100%] " 
  
  
  />
  </div>
  </div>
</div>
</div>
<div className="lg:w-[200px] h-fit border flex justify-center effectformob zoom rounded-lg flex-col  ">
  <div className=" flex justify-center  ">

<img src={poster2} alt="poster" width={200} height={100}   className="  p-3 " />
  </div>
<div className=" w-full  p-3  mb-8 textformob">
  <span className=" font-bold text-sm text-gray-800">
    I&#39;m looking to hire a designer
  </span>
  <div className=" flex justify-center ">

  <div className=" w-5 h-5 border rounded-full">

<input type="checkbox"  className=" w-[100%] h-[100%] "

/>
</div>
  </div>
</div>
</div>
<div className="lg:w-[200px] h-fit border  flex justify-center effectformob zoom  rounded-lg flex-col  ">
  <div className=" flex justify-center">

<img src={poster3} alt="poster" width={150} height={80}    />
  </div>
<div className={ `w-full  p-3  mb-5 textformob`}>
  <span className=" font-bold text-sm text-gray-800">
    I&#39;m looking for design inspiration
  </span>
  <div className=" flex justify-center ">

  <div className=" w-5 h-5 border rounded-full">

  <input type="checkbox"  className=" w-[100%] h-[100%] " />
  </div>
  </div>
</div>
</div>
</div>
<div className=" w-full flex justify-center ">
<div className=" w-fit ">
  
  <div className=" flex justify-center mb-2 btnformob">
    <p className=" text-gray-800 text-sm">You can select multiple option ):</p>
  </div>
  <Link to='/home' className="btnformob">
<button className=" bg-rose-400 hover:bg-rose-500  text-white  pl-16 pr-16 rounded-xl pt-1 pb-1">
Finish
</button>
  </Link>
</div>
</div>
</>

   )
 }
 
 export default Selection
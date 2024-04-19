/* eslint-disable react/prop-types */
import { MdLogout,    MdSearch, MdShoppingBag, } from "react-icons/md"
// import { TbShoppingBagX } from "react-icons/tb";
 import { Link } from "react-router-dom"
 import avatar from "../../../public/avatar.png"
//  import pic from "../../../public/4.png"
 import { FaTwitter } from "react-icons/fa";
 import { RiFacebookBoxFill } from "react-icons/ri";
 import { FaInstagram } from "react-icons/fa";
 import { FaPinterest } from "react-icons/fa6";
 import { MdOutlineMarkEmailRead } from "react-icons/md";

//  import { IoIosMenu } from "react-icons/io";
 const Home = () => {
  

   return (
    <>
     <div  className="   lg:w-full flex justify-between text-center border  p-4 " >

<div className=" w-fit flex text-center  p-3 gap-3  ">
<span className=" lg:text-xl header phoneheader   font-bold text-gray-800">
  dribbble
</span>
<div className=" ml-4 flex p-2  phonenav  text-center    gap-5">


<span className=" text-sm  font-bold  text-gray-400">
  Inspiration
</span>
<span className=" text-sm  font-bold  text-gray-400">
  Find Work
</span>
<span className=" text-sm      font-bold  text-gray-400">
  Learn Design
</span>
<span className="text-sm   font-bold  text-gray-400">
  Go Pro
</span>
<span className=" text-sm   font-bold  text-gray-400">
  Hire Designers
</span>
</div>
</div>


<div className=" lg:w-[40%]   p-2 flex   justify-end ">
  <div className=" flex justify-end media1   mt-2 lg:ml-12  h-11">


  <span className=" flex justify-center  phonesearchbar  bg-slate-100  pl-1 searchdiv   ">

  <MdSearch className=" mt-3  h-fit bg-slate-100"/>
  </span >
<span  className="   bg-slate-100  inputdiv  phonesearchbar ">
<input type="text" className="  mt-2 outline-none lg:w-[100px]  bg-slate-100"  placeholder="Search" />

</span>

<span className=" p-2    ">
  <MdShoppingBag  className=" size-6 text-gray-500"/>
</span>
  </div>


<div className="  w-full flex  lg:ml-2 mb-4 justify-evenly flex-row">
<div className=" border w-10 h-10 rounded-full  bg-cover mt-2 " >
  <img src={avatar}  className=" bg-cover rounded-full w-full h-full" />
</div>
<div className="   w-full text-center  mobilemedia justify-evenly flex lg:gap-5 ">
  <button className=" mt-2 phonebtn lg:pl-7 lg:pr-7  text-sm lg:pt-3 lg:pb-3 bg-rose-500 text-white rounded-lg">Upload</button>
<span className=" pt-4">
<Link to="/">
<MdLogout className="  text-teal-900  cursor-pointer lg:size-5 "/>
</Link>
</span>


</div>
</div>
</div>
     </div>
     {/* <div className=" w-full flex justify-end  lg:hidden ">
     
   <MdMenu className=" text-2xl font-bold "/>
  



     </div> */}

<div className="w-full flex  justify-center p-8 ">
<div className="lg:w-[50%] flex flex-col   lg:gap-8 ">











<div className=" w-full text-center text-3xl  flex justify-center font-bold">
Please verify your email...
</div>
<div className=" w-full text-center  flex justify-center">
<MdOutlineMarkEmailRead  className=" text-gray-400   text-8xl"/>
</div>
<div className="  lg:gap-5 flex justify-center text-center flex-col p-6">



<span className=" text-sm text-gray-400">
  Please verify your email address. We&#39;ve sent a confirmation email to:
</span>
<span className=" text-sm font-extrabold text-gray-900">
 account@refero.design
</span>
<span className=" text-sm text-gray-400">
  Click the information link in that email to begin using Dribbble.
</span>
<span className=" text-sm  text-gray-400">
Don&#39;t recieve the email ? Check your spam folder,it may have been caught by a filter.if
</span>
<div className=" flex flex-row justify-center ">

<span className=" text-sm text-gray-400">
  you still don&#39;t see it, you can
</span>
<span className=" text-sm text-gray-600 font-semibold">
  resend the confermation email.
</span>
</div>
<div className=" flex flex-row gap-1 justify-center">

<span className=" text-sm text-gray-400">
  Wrong email address ?
</span>
<span className=" text-sm text-gray-600 font-semibold">
  Change it.
</span>
</div>
</div>
</div>
</div>

<div className=" w-full  bg-gray-100 flex  phonefooter p-3 gap-10">
<div className="w-[70%]   flex lg:gap-4 ">
<div className=" flex flex-col w-fit  lg:p-8  phonefooter1">
<span className=" text-pink-500 header text-2xl">
  dribbble
</span>
<span className=" text-black  text-sm">
  Dribbble is the world&#39;s leading
</span>
<span className=" text-black  text-sm">
  community for creatives to share work,grow,
</span>
<span className=" text-black  text-sm">
  and get hired.
</span>
<div className=" phoneicon flex lg:flex-row gap-4 pt-10 justify-start">

<span className="  text-2xl">
<FaTwitter className=" cursor-pointer" />
</span>
<span className="  text-2xl">
<RiFacebookBoxFill className=" cursor-pointer" />
</span>
<span className=" text-2xl">
<FaInstagram className=" cursor-pointer" />
</span>
<span className=" text-2xl">
<FaPinterest className=" cursor-pointer" />
</span>
</div>
</div>

<div className=" phonefooter2 flex flex-col justify-start gap-3 w-fit mr-5">
<span  className=" text-lg font-semibold">
For designers
</span>
<span className=" text-sm text-gray-600 ">
  Go pro!
</span>
<span className=" text-sm text-gray-600 ">
  Explore design work
</span>
<span className=" text-sm text-gray-600 ">
  Design blog
</span>
<span className=" text-sm text-gray-600 ">
  Overtime podcast
</span>
<span className=" text-sm text-gray-600 ">
  Playsoffs
</span>
<span className=" text-sm text-gray-600 ">
  Weekly Warm-Up
</span>
<span className=" text-sm text-gray-600 ">
  Refer a freind
  </span>
<span className=" text-sm text-gray-600 ">
  Code of conduct
  </span>
</div>


<div className=" flex flex-col justify-start gap-3 w-fit">
<span  className=" text-lg font-semibold">
Hire designers
</span>
<span className=" text-sm text-gray-600 ">
  Post a job opening
</span>
<span className=" text-sm text-gray-600 ">
  Post a freelance
  <br />
  project
</span>
<span className=" text-sm text-gray-600 ">
  Search for designers
</span>
<span className=" text-lg font-semibold text-gray-900 ">
  Brands
</span>
<span className=" text-sm text-gray-600 ">
  Advertise with us
</span>

</div>


</div>


<div className="w-[50%]  mobilefooterdivlast lg:gap-5 flex flex-row">


<div className=" flex flex-col justify-start gap-3 w-fit mr-5">
<span  className=" text-lg font-semibold">
Company
</span>
<span className=" text-sm text-gray-600 ">
  About 
</span>
<span className=" text-sm text-gray-600 ">
  Careers
</span>
<span className=" text-sm text-gray-600 ">
  Support
</span>
<span className=" text-sm text-gray-600 ">
  Media kit
</span>
<span className=" text-sm text-gray-600 ">
 Testimonals
</span>
<span className=" text-sm text-gray-600 ">
  Api
</span>
<span className=" text-sm text-gray-600 ">
  Terms of service
  </span>
<span className=" text-sm text-gray-600 ">
  Privacy policy
  </span>
<span className=" text-sm text-gray-600 ">
  Cookie policy
  </span>
</div>



<div className=" flex flex-col justify-start gap-3 w-fit mr-5">
<span  className=" text-lg font-semibold">
Directories
</span>
<span className=" text-sm text-gray-600 ">
  Design jobs
</span>
<span className=" text-sm text-gray-600 ">
  Designers for hire
</span>
<span className=" text-sm text-gray-600 ">
 freelance designers
 <br />
  for hire
</span>
<span className=" text-sm text-gray-600 ">
 Tags
</span>
<span className=" text-sm text-gray-600 ">
  Places
</span>
<span className="  font-bold  ">
  Design assets
</span>
<span className=" text-sm text-gray-600 ">
  Dribbble Marketplace
  </span>
<span className=" text-sm text-gray-600 ">
  Creative Market
  </span>
<span className=" text-sm text-gray-600 ">
  Fontspring
  </span>
<span className=" text-sm text-gray-600 ">
  Font Squirrel
  </span>
</div>




<div className=" flex flex-col justify-start gap-3 w-fit mr-5">
<span  className=" text-lg font-semibold">
Design Resource
</span>
<span className=" text-sm text-gray-600 ">
 Freelancing
</span>
<span className=" text-sm text-gray-600 ">
  Design Hiring
</span>
<span className=" text-sm text-gray-600 ">
  Design Portfolio
</span>
<span className=" text-sm text-gray-600 ">
  Design  Education
</span>
<span className=" text-sm text-gray-600 ">
  Creative Process
</span>
<span className=" text-sm text-gray-600 ">
  Design Industry
  <br />
  Trends
</span>

</div>



</div>
</div>

</>

   )
 }
 
 export default Home
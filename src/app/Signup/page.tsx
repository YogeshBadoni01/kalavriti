"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {AiFillMail,AiFillEyeInvisible} from 'react-icons/ai'

const Signup = () => {

  const[ Name,setName]=useState("");
  const[ Email,setEmail]=useState("");
  const[ Password,setPassword]=useState("");

  const fromSingupHangler=(e:any)=>{
    e.preventDefault()
    console.log("your enter Name id is",Name)
    console.log("your enter Email id is",Email)
    console.log("your enter Password id is",Password)
  }
  return (
    <>

        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex items-center justify-center  mx-auto h-screen lg:py-0 bg-[#FF6B00] ">
   <div className=" lg:w-1/2 w-0 h-full  flex justify-between items-center flex-col ">
        <div className="flex  items-center flex-col h-full justify-between">
            <div></div>
              <div className="relative w-0  md:w-[70%]  ">
              {/* <Image src={"/Signin/img_1.png"} alt="img_1" width={270} height={150} className="absolute m-auto left-[0px] bottom-[80px] xl:w-[350px] xl:h-[255px] w-[300px] h-[200px] "/>
                <Image src={"/Signin/img_2.png"} alt="img_2" width={270} height={150} className="absolute m-auto left-[150px] bottom-[-70px]  xl:w-[444px] xl:h-[288px]"/>
                <Image src={"/Signin/img_3.png"} alt="img_3" width={270} height={150} className="absolute m-auto  left-[0] top-[-100px] xl:w-[360px] xl:h-[259px]" /> */}
                <Image src={"/Signgraphic.png"} alt="Side image" width={750} height={750}/>
              </div>


                 <p>© 2023 Copyright reserved by KalaVriti Private Limited </p> 
            </div>
        </div>
     
      {/* <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"> */}
      <div className={"lg:w-1/2 w-full h-screen bg-white rounded-lg shadow dark:border md:mt-0  md:p-[80px] dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center"}>
              
      <div className="signin-menu mx-auto mb-[50px]">
              <div className="logo ">
                <Image src={"/logo/logo.png"} alt="logo" width={300} height={100}/>
              </div>
          </div>

          <div className="heading ">
            <h2 className=" text-xl font-semibold  tracking-tight text-gray-900 md:text-[32px] dark:text-white text-center pb-2  leading-[53px]">
              Sign Up</h2>
          </div>

          <div className="subheading first-letter">
            <p className="text-gray-900 text-center leading-[26px]">Please provide your details to <strong> Create Free Account</strong> </p>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={fromSingupHangler}>
                  <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium capitalize text-[#090914] ">Name</label>
                      <input type="text" name="name" id="name" className=" text-gray-900  rounded-lg block w-full border-gray-300  capitalize h-[50px] placeholder-[#ACACAC]  px-[20px] " placeholder="enter full Name"  value={Name} onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white capitalize text-[#090914] " >email</label>
                      <div className=" rounded-lg flex justify-center items-center bg-gray-50 border border-gray-300 text-black h-[50px] px-[20px]">
                        <input type="email" name="email" id="email" className="border-transparent outline-none border-none text-gray-900   w-full p-0    placeholder-[#ACACAC] bg-gray-50 h-[30px] " placeholder="Enter your email address "  value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                        <AiFillMail/>
                      </div>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm dark:text-white font-medium capitalize text-[#090914]">Password</label>
                      <div className=" rounded-lg flex justify-center items-center bg-gray-50 border border-gray-300 text-black h-[50px] px-[20px]">
                        <input type="password" name="password" id="email" className="border-transparent outline-none border-none text-gray-900   w-full p-0    placeholder-[#ACACAC] bg-gray-50 h-[30px] " placeholder="Enter your password"  value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                        
                        
                        <AiFillEyeInvisible/>
                      </div>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-[20px] h-[50px] text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#FF6B00]">Sign up</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                  Already have an account?  <Link href={"/Signin"} className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-[#2563EB]">Sign in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

    </>
  )
}

export default Signup
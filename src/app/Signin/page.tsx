"use client"
import Image from "next/image"
import Link from "next/link"
import {useState} from 'react';
// import {FaMailchimp,FaEyeLowVision} from 'react-icons/fa6'
import {AiFillMail,AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
const Signin = () => {
  // temp function 
  const eyeflag=true;

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const fromSinginHangler=(e:any)=>{
    e.preventDefault();
    console.log("your enter email id is",email)
    console.log("your enter password id is",password)

  }
  return (
    <>

        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex items-center justify-center  mx-auto h-screen lg:py-0 bg-[#FF6B00] ">
        <div className=" lg:w-1/2 w-0 h-full flex justify-center items-center ">
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

          <div className="heading">
            <h2 className=" text-xl font-semibold  tracking-tight text-gray-900 md:text-[32px] dark:text-white text-center leading-[53px]">
              Welcome Back!</h2>
          </div>

          <div className="subheading first-letter">
            <p className="text-gray-900 text-center leading-[26px]">Please Fill your Details to Get access to Your Account</p>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" onSubmit={fromSinginHangler}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white capitalize text-[#090914] " >email</label>
                      <div className=" rounded-lg flex justify-center items-center bg-gray-50 border border-gray-300 text-black h-[50px] px-[20px]">
                        <input type="email" name="email" id="email" className="border-transparent outline-none border-none text-gray-900   w-full p-0    placeholder-[#ACACAC] bg-gray-50 h-[30px] " placeholder="Enter your email address"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <AiFillMail  />
                      </div>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm dark:text-white font-medium capitalize text-[#090914]">Password</label>
                      <div className=" rounded-lg flex justify-center items-center bg-gray-50 border border-gray-300 text-black h-[50px] px-[20px]">
                        <input type="password" name="password" id="password" className="border-transparent outline-none border-none text-gray-900   w-full p-0 placeholder-[#ACACAC] bg-gray-50 h-[30px] " placeholder="Enter your password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        {/* <button onClick={()=>{const  eye={!eyeflag?"AiFillEyeInvisible":"AiFillEye"} }}>{eye}</button> */}
                        {/* <Link href={""} placeholder={!eyeflag ?"<AiFillEyeInvisible/>":"<AiFillEye/>"}/> */}
                        <AiFillEyeInvisible/>
                      </div>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-[20px] h-[50px] text-center  bg-[#FF6B00]">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                      Don’t have an account yet? <Link href="/Signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-[#2563EB]">Signup</Link>
                      {/* Don’t have an account yet? <Link href="/Signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-[#2563EB]"><Suspense fallback={<Component/Loading}>Signup</Suspense></Link> */}
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

    </>
  )
}

export default Signin
"use client"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import {HiMiniBars3CenterLeft} from "react-icons/hi2"
import { Work_Sans } from "next/font/google"
import { useState } from "react"


const work_sans=Work_Sans({
    subsets:['latin'],
    display:'swap',
    weight: ["100","200","300","400","500","600","700","800","900"],
})
const Header = () => {
    const [navbar, setNavbar]=useState(false)
  return (
    <>
        
<nav className="bg-white border-gray-200 relative lg:static">
  <div className="max-w-full-xl h-full flex flex-wrap items-center justify-between mx-auto py-4 px-2 md:px-[50px] xl:px-[80px]  text-xl">
    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden  " aria-controls="navbar-default" aria-expanded="false">
       
        <HiMiniBars3CenterLeft className="text-[#0054B7] h-[28px] w-[40px]"  />
    </button> */}

                    <button className=" text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border lg:hidden" onClick={() => setNavbar(!navbar)}
                    >
                    {navbar ? (
                         <AiOutlineClose/>
                    ) : ( <HiMiniBars3CenterLeft className="text-[#0054B7] h-[28px] w-[40px] z-50" /> )}
                    </button>

            <Link href={"/"} className="flex items-center ">
                <Image src={"/logo/logo.png"} className=" mr-3 xl:w-[250px] xxl:w-[300px] md:w-full w-[118px] " alt="Logo"  width={300} height={100}/>
            </Link>
        <div className="leftmenu flex justify-evenly items-center w-1/4 lg:w-auto" >    


            <div className={` w-full lg:block md:w-auto" id="navbar-default ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
               <div className="absolute lg:static z-[9999] left-0 top-0 w-full md:h-auto h-screen justify-evenly bg-white">
                <div className="mx-2 md:hidden flex justify-between mt-12">
                    <h2 className="font-bold text-2xl ml-3">Menu</h2>
                    <button  onClick={() => setNavbar(!navbar)}>{!navbar ? (
                         <HiMiniBars3CenterLeft  />
                    ) : (<AiOutlineClose className="text-[#0054B7] h-[28px] w-[40px] z-50"/>  )}</button>
                </div>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-md md:text-lg  h-fit justify-evenly divide-y-2 gap-y-5  md:divide-none">
                        <li>
                        <Link href="#" className="block  xl:px-2  md:bg-transparent text-[#000]" aria-current="page">Home</Link>
                        </li>
                        <li>
                        <Link href="#" className="block  xl:px-2  md:bg-transparent text-[#000]">Paintings</Link>
                        </li>
                        <li>
                        <Link href="#" className="block  xl:px-2  md:bg-transparent text-[#000]">Accessories</Link>
                        </li>
                        <li>
                        <Link href="#" className="block  xl:px-2  md:bg-transparent text-[#000]">Decors</Link>
                        </li>
                        <li>
                        <Link href="#" className="block  xl:px-2  md:bg-transparent text-[#000]">Handicrafts </Link>
                        </li>
                        <li className="md:hidden">
                        <Link href="#" className="block  xl:px-2  md:bg-transparent text-[#E53535]">Setting </Link>
                        </li>
                    </ul>
               </div>
            </div>
    
            <div className="lg:hidden">
                <Link href={"/Signin"} className="text-black  text-xs md:text-xl">Login</Link>
            </div>
            <div className="xl:px-9 lg:px-5 px-4 ">
                
            <Link href={"/cart"} className="text-black relative"><HiShoppingCart className="text-2xl "/> <span className="absolute right-0 top-0 rounded-full text-xs bg-red-700 text-white p-i inline-block">0</span></Link>
            </div>
            <div className="  lg:block hidden text-lg md:text-xl">
                <button  className="bg-[#001246] py-1.5 px-6 text-white rounded-lg">SignUp</button>
                {/* <Link href={"/Signin"} className="text-black">Login</Link> */}
            </div>
            
            {/* <div className="">
        <ul className=" flex justify-between items-center w-[85px] md:w-full ">
            <li className="lg:hidden">
                <Link href={"/Signin"} className="text-black text-lg md:text-xl">Login</Link>
            </li>

            <li>
                <div className="xl:px-9 lg:px-5 px-4 ">
                    
                <Link href={"/cart"} className="text-black relative"><HiShoppingCart className="text-2xl "/> <span className="absolute right-0 top-0 rounded-full text-xs bg-red-700 text-white p-i inline-block">0</span></Link>
                </div>
            </li>
            <li className="  lg:block hidden text-lg md:text-xl">
                <button  className="bg-[#001246] py-1.5 px-6 text-white rounded-lg">SignUp</button>
                 <Link href={"/Signin"} className="text-black">Login</Link>
            </li>
        </ul>
            </div>  */}
        </div>

  </div>
</nav>

    </>
  )
}

export default Header
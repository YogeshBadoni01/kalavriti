"use client"
import Link from "next/link"
import Image from "next/image"
import { FaCcVisa,FaCcMastercard,FaLinkedin,FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa6";
import {LiaPinterest} from "react-icons/lia"
import {BsGoogle,BsYoutube} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"

const footer =()=>{
    return(

        <>
            <div className="main-footer  bg-gray-900 text-white md:px-[80px] p-3 ">
                
                
                {/* TopLinks */}
                    <h4 className=" mb-3 text-left text-sm lg:text-lg xl:text-2xl"> Top links</h4>
                   
                            <div className="flex justify-stretch ">

                                    <div className="flex flex-wrap divide-x-2 text-center ">
                                        <p className="text-sm lg:text-lg xl:text-2xl mr-2.5">State <span>:</span></p>
                                        <div className="text-xs lg:text-lg px-2 ">Mdhubani</div>
                                        <div className="text-xs lg:text-lg px-2">mithila</div>
                                        <div className="text-xs lg:text-lg px-2">warli</div>
                                        <div className="text-xs lg:text-lg px-2">kalighat</div>
                                    </div>
                            </div>
                            <div className="flex justify-stretch ">

                                    <div className="flex flex-wrap divide-x-2 text-center ">
                                        <p className="text-sm lg:text-lg xl:text-2xl mr-2.5">State <span>:</span></p>
                                        <div className="text-xs lg:text-lg px-2 ">Mdhubani</div>
                                        <div className="text-xs lg:text-lg px-2">mithila</div>
                                        <div className="text-xs lg:text-lg px-2">warli</div>
                                        <div className="text-xs lg:text-lg px-2">kalighat</div>
                                        <div className="text-xs lg:text-lg px-2 ">Mdhubani</div>
                                        <div className="text-xs lg:text-lg px-2">mithila</div>
                                        <div className="text-xs lg:text-lg px-2">warli</div>
                                        <div className="text-xs lg:text-lg px-2">kalighat</div>
                                        <div className="text-xs lg:text-lg px-2 ">Mdhubani</div>
                                        <div className="text-xs lg:text-lg px-2">mithila</div>
                                        <div className="text-xs lg:text-lg px-2">warli</div>
                                        <div className="text-xs lg:text-lg px-2">kalighat</div>
                                        <div className="text-xs lg:text-lg px-2 ">Mdhubani</div>
                                        <div className="text-xs lg:text-lg px-2">mithila</div>
                                        <div className="text-xs lg:text-lg px-2">warli</div>
                                        <div className="text-xs lg:text-lg px-2">kalighat</div>
                                    </div>
                            </div>
                            {/* <div className="flex box-border">
                                <div className="flex flex-wrap  text-center">
                                <p className="text-sm lg:text-lg xl:text-2xl mr-2.5 border-none ">Paintings <span>:</span></p>
                                <div className="flex flex-row  divide-x-2 h-4 w-full">
                                    <div className="text-xs lg:text-lg ">Mdhubani</div>
                                    <div className="text-xs lg:text-lg ">mithila</div>
                                    <div className="text-xs lg:text-lg ">warli</div>
                                    <div className="text-xs lg:text-lg ">kalighat</div>
                                    <div className="text-xs lg:text-lg ">Mdhubani</div>
                                    <div className="text-xs lg:text-lg ">mithila</div>
                                    <div className="text-xs lg:text-lg ">warli</div>
                                    <div className="text-xs lg:text-lg ">kalighat</div>
                                    <div className="text-xs lg:text-lg ">Mdhubani</div>
                                    <div className="text-xs lg:text-lg ">mithila</div>
                                    <div className="text-xs lg:text-lg ">warli</div>
                                    <div className="text-xs lg:text-lg ">kalighat</div>
                                    <div className="text-xs lg:text-lg ">Mdhubani</div>
                                    <div className="text-xs lg:text-lg ">mithila</div>
                                    <div className="text-xs lg:text-lg ">warli</div>
                                </div>
                            </div>
                       
                </div> */}
                {/* topfooter */}
                <div className="topfooter lg:flex justify-between  place-items-center mt-[70px]  gap-8 text-left">

                    <div className="right flex justify-between w-full mb-5 lg:m-auto">

                        <div className="about basis-1/2  ">
                            <ul className="flex flex-col justify-start gap-2 text-sm lg:text-lg ">
                                <h4 className="text-sm lg:text-2xl mb-3 ">About</h4>
                            
                                <li  >
                                    <Link className="m-0  leading-8" href={"./about"}>About</Link>
                                </li>
                                <li  >
                                    <Link className="m-0  leading-8" href={"./contact"}>Contact us</Link>
                                </li>
                                <li >
                                    <Link className="m-0  leading-8" href={"./"}>Career</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="policy basis-1/2 ">
                            <ul className="flex flex-col justify-start gap-2 capitalize text-sm lg:text-lg ">
                                <h4 className="text-sm lg:text-2xl mb-3">Policy</h4>
                                <li >
                                    <Link className="m-0  leading-8" href={"./"} >Privacy Policy</Link>
                                </li>
                                <li  >
                                    <Link className="m-0  leading-8" href={"./about"}>Shipping and returns</Link>
                                </li>
                                <li  >
                                    <Link className="m-0  leading-8" href={"./Product"}>Cancellation and Refunds</Link>
                                </li>
                                <li  >
                                    <Link className="m-0  leading-8" href={"./"}>Teams of service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right flex justify-between w-full mb-5 md:m-auto">
                        <div className="quickLinks basis-1/2 ">
                            <ul className="flex flex-col justify-start gap-2 capitalize text-sm lg:text-lg">
                                <h4 className="text-sm lg:text-2xl mb-3">Quick Links</h4>
                                <li >
                                    <Link className="m-0 leading-8" href={"./"} > Blog</Link>
                                </li>
                                <li  >
                                    <Link className="m-0 leading-8" href={"./about"}> Partner With us </Link>
                                </li>
                                <li  >
                                    <Link className="m-0 leading-8" href={"./Product"}> FAQS </Link>
                                </li>
                                <li  >
                                    <Link className="m-0 leading-8" href={"./"}>Sitemap</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="Address md:block md:basis-3/5 basis-1/2 ">
                            <ul className="flex flex-col justify-start gap-2  text-sm lg:text-lg">
                                <h4 className="text-sm lg:text-2xl mb-3"> Address</h4>
                                <li >
                                    <Link className="m-0  leading-8" href={"./"}>KalaVriti Private Limited GC-52, 5th Floor, Aditya Gold Crest Tower Vaibhav Khand, Indirapuram, Ghaziabad Uttar Pradesh 201014</Link>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>

                {/* bottom footer */}
                <div className="bottomfooter md:flex justify-between  items-center  block ">
                    
                    <div className="payment-link  basis-full md:basis-2/4 text-center lg:text-left ">
                            <h2 className="text-sm lg:text-2xl mb-3">Payments</h2>
                        <ul className="flex justify-center lg:justify-start items-center w-full gap-3.5 text-sm lg:text-4xl">
                            <li>
                                <Link className="m-0 " href={"https://www.google.com"}>
                                    <Image src={"/Payments/visa.png"} alt="visa" width={100} height={100} className="lg:w-full w-auto"/>
                                </Link>
                            </li>
                            <li>
                                <Link className="m-0 " href={"https://www.google.com"}>
                                    <Image src={"/Payments/master.png"} alt="master" width={100} height={100} className="lg:w-full w-auto"/>
                                </Link>
                            </li>
                            <li>
                                <Link className="m-0 " href={"https://www.google.com"}>
                                    <Image src={"/Payments/maestro.png"} alt="maestro" width={100} height={100} className="lg:w-full w-auto"/>
                                </Link>
                            </li>
                            <li>
                                <Link className="m-0 " href={"https://www.google.com"}>
                                    <Image src={"/Payments/rupay.png"} alt="rupay" width={100} height={100} className="lg:w-full w-auto"/>
                                </Link>
                            </li>
                            <li>
                                <Link className="m-0 " href={"https://www.google.com"}>
                                    <Image src={"/Payments/american_Express.png"} alt="american_Express" width={100} height={100} className="lg:w-full w-auto"/>
                                </Link>
                            </li>
                            <li>
                                <Link className="m-0 " href={"https://www.google.com"}>
                                    <Image src={"/Payments/netBanking.png"} alt="netBanking" width={100} height={100} className="lg:w-full w-auto"/>
                                </Link>
                            </li>
                            <li>
                                <Link className="m-0 " href={"https://www.google.com"}>
                                    <Image src={"/Payments/upi.png"} alt="upi" width={100} height={100} className="lg:w-full w-auto"/>
                                </Link>
                            </li>
                           
                        
                        </ul>
                    </div>
                    <div className="socials-link basis-full md:basis-1/4 w-full text-center lg:text-left">
                        <h2 className="text-sm lg:text-2xl   mb-3">Socials</h2>
                        <ul className="flex  justify-center lg:justify-start gap-4 text-sm lg:text-4xl">
                            <li>
                                <Link className="m-0  " href={"https://www.facebook.com"}><FaFacebook/></Link>
                            </li>
                            <li>
                                <Link className="m-0  " href={"https://www.instagram.com"}><FaInstagram/></Link>
                            </li>
                            <li>
                                <Link className="m-0  " href={"https://www.twitter.com"}><FaTwitter/></Link>
                            </li>
                            <li>
                                <Link className="m-0  " href={"https://www.twitter.com"}><LiaPinterest/></Link>
                            </li>
                            <li>
                                <Link className="m-0  " href={"https://www.twitter.com"}><BsGoogle/></Link>
                            </li>
                            <li>
                                <Link className="m-0  " href={"https://www.twitter.com"}><IoLogoWhatsapp/></Link>
                            </li>
                            <li>
                                <Link className="m-0  " href={"https://www.twitter.com"}><BsYoutube/></Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
                    <div className="copyright  ">
                        <hr className="my-10"/>
                        <p className="pb-10 text-sm lg:text-2xl lg:text-left text-center">© 2023 Copyright reserved by KalaVriti Private Limited </p>
                    </div>
            </div>
        </>
    
    )
}
export default footer;
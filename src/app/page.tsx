"use client"
import { useState } from 'react'
import Swiper from './Components/Swiper';
import Art from './Components/Art';
import Product from './Components/product';
import Category from "./Components/category";
import State from "./Components/state"
// import "tw-elements/dist/css/tw-elements.min.css";

export default function Home() {
  const [currentFrom,setCurrentFrom]=useState('login');

  // const toggleFrom = (formName)=>{
  //   setCurrentFrom(formName)
  // }
  return (
    <>
    {/* {
    currentFrom ==="login" ? <Signin onFromSwitch={toggleFrom}/> : <Signup/>
    } */}

    {/* //Home */}
    <Swiper/>
    <div className=" max-w-[1650px] m-auto  md:px-20 text-center ">

      <Art/>
      <Product/>
      <Category/>
      <State/>
    </div>
    </>
  )
}

import Image from "next/image"
import Link from "next/link"
import {AiOutlineArrowRight} from 'react-icons/ai'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Art = () => {

    const Responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
    const myData =[
        {
            Name:"Sikkit Art",
            Image:"/Art/Sikki.png"
        },
        {
            Name:"Gond Art",
            Image:"/Art/gond.png"
        },
        {
            Name:"Madhubani Art",
            Image:"/Art/tikuli.png"
        },
        {
            Name:"Warli",
            Image:"/Art/minniature.png"
        },
        {
            Name:"Meenakari Art",
            Image:"/Art/meenakari.png"
        },
        {
            Name:"Phad Art",
            Image:"/Art/Phad.png"
        },
        {
            Name:"Bidri Art",
            Image:"/Art/Bidri.png"
        },
        {
            Name:"Chikankari Art",
            Image:"/Art/Chikankari.png"
        },
        {
            Name:"Kalamkari Art",
            Image:"/Art/Kalamkari.png"
        },
        {
            Name:"Kerala murals Art",
            Image:"/Art/Kerala_murals.png"
        },
        {
            Name:"Pichwai Art",
            Image:"/Art/Pichwai.png"
        },
        {
            Name:"Lippan Art",
            Image:"/Art/Lippan.png"
        }
    ]

    // console.log(myData)
    return (
    <>
        <div className="Art   justify-center items-center m-auto">


                    <div className="  hidden xl:grid   grid-cols-6  gap-[70px]">
                        {
                            myData.map((items,index)=>(
                                <Link href={"./"}>
                                        <div key={index} className="Art_data flex flex-col justify-center items-center mt-12  ">
                                            <Image src={items.Image} alt={items.Name} width={150} height={150} className="w-14  lg:w-40 "/>
                                            <h1 className="mt-6 text-xs font-semibold lg:text-xl">{items.Name}</h1>
                                        </div>
                                    </Link>
                            ))
                        }
                    </div>
                    <div className="  xl:hidden block w-full">
                    <Carousel responsive={Responsive} dotListClass="custom-dot-list-style">
                            {
                                myData.map((items,index)=>(
                                    <Link href={"./"}>
                                        <div key={index} className="Art_data flex flex-col justify-center items-center mt-12 w-full">
                                            <Image src={items.Image} alt={items.Name} width={150} height={150} className="w-14 lg:w-fit  h-14 lg:h-fit"/>
                                            <h1 className="mt-6 font-semibold text-xs lg:text-xl ">{items.Name}</h1>
                                        </div>
                                    </Link>
                                ))
                            }

                    </Carousel>;
                        
                    </div>  

        </div>
                <Link href={""} className="m-auto pt-[17px] lg:pt-11 block text-xs lg:text-xl text-[#2E68FF] ">Explore More <AiOutlineArrowRight className="inline-block"/></Link>
    </>
  )
}

export default Art
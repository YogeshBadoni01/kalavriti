import Link from "next/link";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const state = () => {

        const State =[
        
        {
            Name:"Bihar",
            Image:"/state/image1.png",

        },
        {
             Name:"Uttar pardesh",
            Image:"/state/image2.png"
        },
        {
             Name:"Rajashthan",
            Image:"/state/image3.png"
        },
        {
             Name:"Maharashtra",
            Image:"/state/image4.png"
        },
        {
             Name:"Madhya Pardesh",
            Image:"/state/image5.png"
        },
        {
             Name:"Assam",
            Image:"/state/image6.png"
        },
        {
             Name:"Gujrat",
            Image:"/state/image7.png"
        },
        {
             Name:"Karnataka",
            Image:"/state/image8.png"
        },
       
    ]

    const subState =[
        
        {
            Name:"subState",
            Image:"/state/subState/subState1.png",

        },
        {
             Name:"subState",
            Image:"/state/subState/subState2.png"
        },
        {
             Name:"subState",
            Image:"/state/subState/subState3.png"
        },
        {
             Name:"subState",
            Image:"/state/subState/subState4.png"
        },
    ]

    const Responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (

    <section className=" my-16 md:my-[100px]">
                <div className="flex justify-between items-center lg:mb-16">
                    <h2 className="text-xl md:text-4xl font-semibold">Shop by State</h2>
                    <Link href={"/"} className="text-[#2E68FF]">View all</Link>
                </div>
            <div className="flex justify-between">

                <div className="flex w-full">

                    <div className="basis-1/4 lg:inline hidden bg-gradient-to-r from-[#D9B39D] to-[#F5E7DC] p-7">
                        <h4 className="text-[#0D520D] text-xl font-semibold text-left">Explore the folk arts and crafts of the different regions of the country</h4>

                        <div className="grid grid-cols-2">
                            {
                                subState.map((items,index)=>(
                                    <Link href={"./"}>
                                        <div key={index} className=" grid  justify-center items-center mt-12 ">
                                            <Image src={items.Image} alt={items.Name} width={95} height={95}  />
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="basis-4/5  hidden lg:grid grid-cols-4 gap-x-[50px] ">
                        {
                            State.map((items,index)=>(
                                <Link href={"./"}>
                                    <div key={index} className=" flex flex-col  justify-center items-center   border lg:mx-6 mb-6 lg:py-4 lg:px-5   border-[#0F0F0F] rounded-md min-w-full min-h-[80%]">
                                        <Image src={items.Image} alt={items.Name} width={196} height={176} className="w-28 lg:w-full  h-28 lg:h-full "  />
                                        <div className="description mt-6">
                                            <h2 className="font-semibold text-md ">{items.Name}</h2>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className=" basis-5/5 lg:hidden block w-full">
                    <Carousel responsive={Responsive} dotListClass="custom-dot-list-style gap-10">
                            {
                                State.map((items,index)=>(
                                        <Link href={"./"}>
                                            <div key={index} className=" flex flex-col   justify-center items-center mt-2 lg:mt-12 w-fit border border-1 border-[#0F0F0F] rounded-sm px-5 py-2.5">
                                                <Image src={items.Image} alt={items.Name} width={196} height={176}  className="w-28 lg:w-fit  h-28 lg:h-fit object-contain" />
                                                <div className="description mt-6">
                                                    <h2 className="font-semibold text-xs lg:text-xl">{items.Name}</h2>
                                                </div>
                                            </div>
                                        </Link>
                                        ))
                            }
                    </Carousel>;
                        
                    </div>  
                </div>
            </div>


    </section>
  )
}

export default state
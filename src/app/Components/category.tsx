import Link from "next/link";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const category = () => {

        const Category =[
        
        {
            Name:"Accessories",
            Image:"/category/Accessories.png",

        },
        {
             Name:"Decor",
            Image:"/category/decor.png"
        },
        {
             Name:"Show pieces",
            Image:"/category/Showpieces.png"
        },
        {
             Name:"Handicrafts",
            Image:"/category/Handicrafts.png"
        },
        {
             Name:"Clothing",
            Image:"/category/Clothing.png"
        },
        {
             Name:"Artifacts",
            Image:"/category/Artifacts.png"
        },
        {
             Name:"Paintings",
            Image:"/category/Paintings.png"
        },
       
    ]

    const subCategory =[
        
        {
            Name:"subCategory",
            Image:"/category/subCategory/subCategory1.png",

        },
        {
             Name:"subCategory",
            Image:"/category/subCategory/subCategory2.png"
        },
        {
             Name:"subCategory",
            Image:"/category/subCategory/subCategory3.png"
        },
        {
             Name:"subCategory",
            Image:"/category/subCategory/subCategory4.png"
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
  return (

    <section className=" my-16 md:my-[100px]">
                <div className="flex justify-between items-center ">
                    <h2 className="text-xl md:text-4xl font-semibold ">Shop by Category</h2>
                    <Link href={"/"} className="text-[#2E68FF]">View all</Link>
                </div>
            <div className="flex justify-between mt-2 lg:mt-16">

                <div className="flex w-full">

                    <div className="basis-1/5 lg:inline hidden bg-gradient-to-r from-[#BAD3B8] to-[#DCF5E2] p-7">
                        <h4 className="text-[#0D520D] text-xl font-semibold">Shop for wide range of unique collections of handmade products</h4>

                        <div className="grid grid-cols-2">
                            {
                                subCategory.map((items,index)=>(
                                    <Link href={"./"}>
                                        <div key={index} className=" grid  justify-center items-center mt-12 w-full">
                                            <Image src={items.Image} alt={items.Name} width={95} height={95}  />
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="basis-4/5  hidden lg:grid grid-cols-4 gap-[25px] ">
                        {
                            Category.map((items,index)=>(
                                <Link href={"./"}>
                                    <div key={index} className=" grid  justify-center items-center w-full">
                                        <Image src={items.Image} alt={items.Name} width={196} height={176}  />
                                        <div className="description mt-6 text-sm lg:text-xl">
                                            <h2 className="font-semibold text-xl">{items.Name}</h2>
                                            <h4 className="text-sm text-[#A1A1A1]">16 Product</h4>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className=" basis-5/5 lg:hidden block w-full h-fit">
                    <Carousel responsive={Responsive} dotListClass="custom-dot-list-style">
                            {
                                Category.map((items,index)=>(
                                        <Link href={"./"}>
                                            <div key={index} className="flex  flex-col items-center mx-3 ">
                                                <Image src={items.Image} alt={items.Name} width={196} height={176} className="w-28 lg:w-fit  h-28 lg:h-fit object-cover" />
                                                <div className="description mt-6">
                                                    <h2 className="font-semibold text-xs lg:text-xl ">{items.Name}</h2>
                                                    <h4 className="text-sm text-[#A1A1A1] hidden lg:block">16 Product</h4>
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

export default category
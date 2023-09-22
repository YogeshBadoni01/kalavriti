import Link from "next/link"
import Image from "next/image"
import {HiShoppingCart} from "react-icons/hi"

const product = () => {

    const myData =[
        
        {
            Name:"Winter Sweater green",
            Image:"/products/image1.png",

        },
        {
             Name:"Winter Sweater green",
            Image:"/products/image2.png"
        },
        {
             Name:"Winter Sweater green",
            Image:"/products/image3.png"
        },
        {
             Name:"Winter Sweater green",
            Image:"/products/image4.png"
        },
    ]
  return (
    <>
        <section className="mt-[70px] m-auto hover:bg-['url(products/bg.png)']">
            <div className="heading"><h2 className="text-2xl lg:text-4xl font-bold" >Featured Products</h2></div>
            <div className=" grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 text-left gap-5 ">
                {
                    myData.map((items,index)=>(
                        <Link href={"./"}>
                            <div key={index} className="Art_data flex flex-col justify-center items-center  mt-12 border border-[#BDCCF5] p-2.5 rounded-xl">
                                <Image src={items.Image} alt={items.Name} width={290} height={210} className="w-fit lg:w-full" />
                                <div className="w-full  text-left">

                                    <h5 className="mt-6 font-extrabold text-sm ">{items.Name}</h5>
                                    <div className="flex md:order-none">
                                        <h4 className="mr-5  line-through text-md  font  text-[#8B94B2]"><span className="md:hidden inline lg:inline">INR</span> 50.00 </h4>
                                        <span className="bg-[#ABD6FF] p-1 hidden lg:inline text-[10px]">-12%</span>
                                    </div>
                                    <div className="flex md:justify-between items-center md:order-1 ">
                                        <h3 className="text-[#3C8A3C] font-extrabold  text-xl"><span className="md:hidden inline lg:inline">INR</span> 44.00</h3>
                                        <button className="flex justify-center items-center ml-2 bg-[#0054B7] text-white  px-4 py-1 rounded-sm"><HiShoppingCart className=" mx-0 md:mr-2"/><span className="hidden lg:inline md:inline">Add to cart</span > </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default product
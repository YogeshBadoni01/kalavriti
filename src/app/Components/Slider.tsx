"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Initialization for ES Users
import { Carousel,initTE} from "tw-elements";

initTE({ Carousel });

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Image from 'next/image';

const Slider = () => {
  return (
    <>
    {/* <div className="w-full h-fit"> */}
         <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-auto hau">
        <SwiperSlide >
            <picture className="w-full h-full object-none " >
                <source media="(min-width:650px)" srcSet="/homeSlider/Handicrafts.png" type="image/png" />
                <Image
                src={"/homeSlider/Handicrafts.png"}
                alt="Handicrafts"
                width={100}
                height={100}
                className=''
                />
            </picture>

        </SwiperSlide>
        <SwiperSlide>
        <picture className="w-full h-full object-none">
        <source media="(min-width:650px)" srcSet="/homeSlider/Home decor.png" type="image/png" />
        <Image
          src={"/homeSlider/Home decor.png"}
          alt="Home decor"
          width={100}
          height={100}
          className=''
        />
      </picture>
        </SwiperSlide>
        <SwiperSlide >
        <picture className="w-full h-full object-none">
        <source media="(min-width:650px)" srcSet="/homeSlider/Paintings.png" type="image/png" />
        <Image
          src={"/homeSlider/Paintings.png"}
          alt="Paintings"
          width={100}
          height={100}
          className=''
        />
      </picture>
        </SwiperSlide>
     
      </Swiper>
    {/* </div> */}
    </>
  )
}

export default Slider
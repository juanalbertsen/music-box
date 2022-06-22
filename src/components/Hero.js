import React, { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Hero = () => {

  return (
<>
    <div className="mobile lg:hidden">
    <Swiper className='w-full lg:w-4/5'
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide >
      <img className="w-full mt-4 mx-auto" src="././img/herosm.svg"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full mt-4 mx-auto" src="././img/herosm2.svg"></img>
      </SwiperSlide>
    </Swiper>

    </div>

    <div className="hidden lg:block">
    <Swiper className='w-full lg:w-4/5'
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide >
      <img className="w-full mt-4 mx-auto" src="./img/hero.svg"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full mt-4 mx-auto" src="./img/hero2.svg"></img>
      </SwiperSlide>
    </Swiper>

    </div>
    


    </>    
  );
}

export default Hero
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <Swiper className='w-full md:w-4/5'
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <img className="w-full mt-4 mx-auto" src="./img/hero.svg"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full mt-4 mx-auto" src="./img/hero2.svg"></img>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

// import image
import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import HeadingTitle from '../../components/shared/headingTitle/HeadingTitle';

const Category = () => {
  return (
    <div className='my-20'>
      <HeadingTitle subHeading="---From 11:00am to 10:00pm---" heading="ORDER ONLINE"></HeadingTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true}}
        modules={[FreeMode, Pagination]}
        className="mySwiper container mx-auto"
      >
        <SwiperSlide>
            <img className='w-full' src={slider1} alt="Slider" />
            <h3 className='text-4xl font-normal -mt-16 text-center text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full'  src={slider2} alt="Slider" />
            <h3 className='text-4xl font-normal -mt-16 text-center text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full'  src={slider3} alt="Slider" />
            <h3 className='text-4xl font-normal -mt-16 text-center text-white'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full'  src={slider4} alt="Slider" />
            <h3 className='text-4xl font-normal -mt-16 text-center text-white'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full'  src={slider5} alt="Slider" />
            <h3 className='text-4xl font-normal -mt-16 text-center text-white'>Salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category
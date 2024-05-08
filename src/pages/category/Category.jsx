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
import slider5 from '../../assets/home/slide5.png'
import slider6 from '../../assets/home/slide6.png'
import HeadingTitle from '../../components/shared/headingTitle/HeadingTitle';

const Category = () => {
  return (
    <div className='my-20'>
      <HeadingTitle subHeading="---From 11:00am to 10:00pm---" heading="ORDER ONLINE"></HeadingTitle>
      <div className='mt-5 px-5 md:px-0'>
        <Swiper
          breakpoints={{
            376: {
              width: 376,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            1180: {
              width: 1180,
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true}}
          modules={[FreeMode, Pagination]}
          className="mySwiper container mx-auto"
        >
          <SwiperSlide>
              <div className='relative'>
                <img className='w-full rounded-xl' src={slider1} alt="Slider" />
                <h3 className='text-4xl absolute left-[40%] md:left-[30%] bottom-2 font-normal text-center text-white'>Salads</h3>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative'>
                <img className='w-full rounded-xl'  src={slider2} alt="Slider" />
                <h3 className='text-4xl absolute left-[40%] md:left-[30%] bottom-2 font-normal text-center text-white'>Pizzas</h3>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative'>
                <img className='w-full rounded-xl'  src={slider3} alt="Slider" />
                <h3 className='text-4xl absolute left-[40%] md:left-[30%] bottom-2 font-normal text-center text-white'>Soups</h3>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative'>
                <img className='w-full rounded-xl'  src={slider4} alt="Slider" />
                <h3 className='text-4xl absolute left-[40%] md:left-[30%] bottom-2 font-normal text-center text-white'>Desserts</h3>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative'>
                <img className='w-full rounded-xl'  src={slider5} alt="Slider" />
                <h3 className='text-4xl absolute left-[40%] md:left-[30%] bottom-2 font-normal text-center text-white'>Drink</h3>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative'>
                <img className='w-full rounded-xl'  src={slider6} alt="Slider" />
                <h3 className='text-4xl absolute left-[40%] md:left-[30%] bottom-2 font-normal text-center text-white'>Burger </h3>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Category
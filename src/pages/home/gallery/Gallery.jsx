import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";


import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle'


const galleryImages = [
    "https://i.ibb.co/JyGymQL/food-1.jpg",
    "https://i.ibb.co/HHcGCSk/food-6.jpg",
    "https://i.ibb.co/vX4Z0Fd/food-5.jpg",
    "https://i.ibb.co/B2ZFmVd/food-2.jpg",
    "https://i.ibb.co/hV4wwvg/food-4.jpg",
    "https://i.ibb.co/wKTM1ts/food-3.jpg",
];


const Gallery = () => {
  return (
    <div>
        <div>
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
                  slidesPerView: 3,
                },
                1280: {
                  width: 1280,
                  slidesPerView: 3,
                },
                1536: {
                  width: 1536,
                  slidesPerView: 3,
                },
              }}
              loop={true}
              spaceBetween={0}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper mx-auto"
            >
              {
                galleryImages.map((image, index) => (
                  <SwiperSlide className='' key={index}>
                    <img className='w-full h-96 object-cover' src={image} alt="Slider" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
        </div>
    </div>
  )
}

export default Gallery
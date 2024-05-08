import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";


import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle'


const galleryImages = [
    "https://img.freepik.com/free-photo/baked-quails-pan-dark-surface_2829-5596.jpg?t=st=1715158745~exp=1715162345~hmac=d7471fe15c9064f453a55d21b77e455c2a068ace9d892404abcc0910bacb9b78&w=1380",
    "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?t=st=1715159433~exp=1715163033~hmac=20c094de6ebb151fa1064718d56d7d07b87541fc0ab3c2077d8fcc3d554e1cba&w=1380",
    "https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37782.jpg?t=st=1715159419~exp=1715163019~hmac=fdbf963c4ec5ed4f0f9bc614b0460bbb20009579fc62d88f5cff146ebd9b787b&w=1380",
    "https://img.freepik.com/free-photo/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view_141793-15488.jpg?t=st=1715159411~exp=1715163011~hmac=3b5023bdf3c7485c8dce9c52291a5eefb004cbcf37c6ababeaccbc2c8dccb1f0&w=1380",
    "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg?t=st=1715159402~exp=1715163002~hmac=4c31e732be3538c246f3e47a95e24f849141552521b392b8e076d85039d7412d&w=1380",
    "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-14389.jpg?t=st=1715159550~exp=1715163150~hmac=2b70d4bdc87407de6b039a77f0c61642d64899d5f7eb961fe605e3e52da3fb32&w=1380",
];


const Gallery = () => {
  return (
    <div className=''>
        <div className='mt-10'>
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
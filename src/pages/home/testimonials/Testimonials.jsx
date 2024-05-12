import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle'

const Testimonials = () => {
    
    const [testimonials,setTestimonials] =useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then((res)=>res.json())
        .then((data)=>setTestimonials(data))
        .catch((error)=>{
            console.log(error.message)
        })
    },[])

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <HeadingTitle subHeading="What Our Clients Say" heading="TESTIMONIALS"></HeadingTitle>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper w-full px-5 text-center mt-16">
                    {testimonials.map((testimonial, index)=><SwiperSlide className='px-20' key={index}>
                        <div className='border-2 mx-auto border-slate-100 rounded-xl p-10 mt-3 hover:shadow-lg transition duration-150 w-1/2'>
                            <img className='w-20 mx-auto' src="https://i.ibb.co/cyhqwhz/quote.png" alt="quote" />
                            <p className='text-lg text-[#777] text-center italic mt-8 mb-8'>{testimonial.details}</p>
                            <h3 className='text-2xl text-black italic font-semibold text-center mb-10'>- {testimonial.name} -</h3>
                        </div>
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials
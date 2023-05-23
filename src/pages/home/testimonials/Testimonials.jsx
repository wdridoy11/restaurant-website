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
    const [rating, setRating] = useState(0)
    const [testimonials,setTestimonials] =useState([]);
    useEffect(()=>{
        fetch(`reviews.json`)
        .then((res)=>res.json())
        .then((data)=>setTestimonials(data))
        .catch((error)=>{
            console.log(error.message)
        })
    },[])

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <HeadingTitle subHeading="---What Our Clients Say---" heading="TESTIMONIALS"></HeadingTitle>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper w-1/2 px-5 text-center">
                    {testimonials.map((testimonial)=><SwiperSlide className='px-20'>
                          <Rating
                          style={{ maxWidth: 180 }}
                          value={testimonial.rating}
                          className='mx-auto'
                          readOnly
                        />
                        <p className='text-center my-5'>{testimonial.details}</p>
                        <h3 className='text-3xl font-semibold text-center mb-10'>{testimonial.name}</h3>
                    </SwiperSlide>)}
            </Swiper>
            {/* <div>
                {testimonials.map((testimonial)=>)}
            </div> */}
        </div>
    </div>
  )
}

export default Testimonials
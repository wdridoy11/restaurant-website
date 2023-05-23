import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// image import
import slider1 from '../../../assets/home/01.jpg'
import slider2 from '../../../assets/home/02.jpg'
import slider3 from '../../../assets/home/03.png'
import slider4 from '../../../assets/home/04.jpg'
import slider5 from '../../../assets/home/05.png'
import slider6 from '../../../assets/home/06.png'

const Banner = () => {
  return (
    <Carousel className='text-center'>
        <div>
            <img src={slider1} alt='Slider'/>
        </div>
        <div>
            <img src={slider2} alt='Slider'/>
        </div>
        <div>
            <img src={slider3} alt='Slider'/>
        </div>
        <div>
            <img src={slider4} alt='Slider'/>
        </div>
        <div>
            <img src={slider5} alt='Slider'/>
        </div>
        <div>
            <img src={slider6} alt='Slider'/>
        </div>
    </Carousel>
  )
}

export default Banner
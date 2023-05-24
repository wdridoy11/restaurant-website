import React from 'react'
import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle'
import featuredImage from '../../../assets/home/featured.jpg';
import "./Featured.css"

const Featured = () => {
  return (
    <div className='py-20 featured-item text-white'>
        <div className='container mx-auto px-5'>
             <HeadingTitle subHeading="---Check it out---" heading="FROM OUR MENU"></HeadingTitle>
             <div className='grid md:grid-cols-2 gap-10 items-center mt-20'>
                <div>
                    <img className='rounded-md' src={featuredImage} alt="featured-Image" />
                </div>
                <div>
                    <p className='text-2xl font-normal'>March 20, 2023</p>
                    <h3 className='text-2xl font-normal'>WHERE CAN I GET SOME?</h3>
                    <p className='text-base mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt 
                        dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore 
                        consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn glass mt-4">Glass button</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Featured
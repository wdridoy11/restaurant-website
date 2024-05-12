import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HeadingTitle from '../../components/shared/headingTitle/HeadingTitle';
const Blogs = () => {
    const [blogs, setBlogs] = useState();
    useEffect(()=>{
        fetch(`blog.json`)
        .then((res)=>res.json())
        .then((data)=>setBlogs(data))
        .catch((error)=>{
             console.log(error.message)
         })
    })

  return (
    <div>
        <HeadingTitle subHeading="From Our Blog" heading="OUR LATEST NEWS"></HeadingTitle>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-10 pt-10 py-20'>
                <div>
                    {blogs?.slice(0,1)?.map((blog, i)=><div>
                        <div>
                            <div className='mb-5'>
                                <img className='rounded-3xl h-[435px] w-full object-cover' src={blog.image} alt="" />
                            </div>
                            <div>
                                <p className='text-base text-[#777] mb-3'>{blog.date}</p>
                                <h3 className='text-2xl font-medium mb-5'>{blog.title}</h3>
                                <Link className='text-red-500 text-base font-medium flex items-center gap-3'>Read More <FaArrowRight /></Link>

                            </div>
                            {/* <div className='flex items-center justify-between mt-8'>
                                <div className='flex items-center gap-5'>
                                    <div>
                                        <img className='w-14 h-14 rounded-full' src={blog.authorImage} alt="" />
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-medium'>{blog.author}</h4>
                                        <p className='text-base'>Rangpur, Bangladesh</p>
                                    </div>
                                </div>
                                <Link className='text-red-500 text-base font-medium flex items-center gap-3'>Read More <FaArrowRight /></Link>
                            </div> */}
                        </div>
                    </div>)}
                </div>

                <div>
                    {blogs?.slice(0,2)?.map((blog, i)=><div className='grid grid-cols-2 items-center gap-10 mb-10'>
                        <div>
                            <img className='rounded-3xl h-60 w-full object-cover' src={blog.image} alt="" />
                        </div>
                        <div>
                            <p className='text-base text-[#777] mb-3'>{blog.date}</p>
                            <h3 className='text-xl font-medium mb-5'>{blog.title}</h3>
                            <Link className='text-red-500 text-base font-medium flex items-center gap-3'>Read More <FaArrowRight /></Link>
                        </div>
                    </div>
                    )}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs
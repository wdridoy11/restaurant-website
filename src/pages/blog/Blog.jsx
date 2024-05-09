import React from 'react'

const blog = ({blog}) => {
  console.log(blog)
  const {image,title,date}=blog
  return (
    <div>
        <div>
            <div>
                <img className='rounded-3xl h-96 w-full object-cover' src={image} alt="" />
            </div>
            <div>
                <p className='text-base text-[#777] mb-3'>{date}</p>
                <h3 className='text-xl font-medium'>{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default blog
import React from 'react'

const HeadingTitle = ({topheading,heading}) => {
  return (
    <div>
        <div className='text-center mb-12 mt-20'>
          <h4 className='text-xl font-normal text-[#D99904]'>{topheading}</h4>
          <h1 className='text-4xl font-semibold text-black border-b-2 border-t-2 inline-block py-5 mt-5'>{heading}</h1>
      </div>
    </div>
  )
}

export default HeadingTitle
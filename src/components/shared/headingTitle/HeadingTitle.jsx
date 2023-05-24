import React from 'react'

const HeadingTitle = ({subHeading,heading}) => {
  return (
    <div>
        <div className='text-center'>
          <h4 className='text-xl font-normal text-[#D99904]'>{subHeading}</h4>
          <h1 className='text-4xl font-semibold border-b-2 border-t-2 inline-block py-5 mt-5'>{heading}</h1>
      </div>
    </div>
  )
}

export default HeadingTitle
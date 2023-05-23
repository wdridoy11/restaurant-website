import React from 'react'

const MenuItem = ({item}) => {
    const {image, price,name,recipe} =item;
  return (
    <div>
        <div className='flex items-start justify-between gap-5'>
            <div>
                <img className='rounded-r-full rounded-b-full w-[120px]' src={image} alt={`${name}`} />
            </div>
            <div>
                <h3 className='text-xl font-medium text-black uppercase'>{name}------------------</h3>
                <p className='text-base font-normal text-slate-600 mt-2'>{recipe}</p>
            </div>
            <div>
                <p className='text-xl font-normal text-[#BB8506]'>${price}</p>
            </div>
        </div>
    </div>
  )
}

export default MenuItem
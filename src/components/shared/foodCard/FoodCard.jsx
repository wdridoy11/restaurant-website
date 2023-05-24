import React from 'react'

const FoodCard = ({item}) => {
    const {image,name, recipe} =item;
  return (
    <div>
        <img className='w-full h-[330px] object-cover rounded-t-lg' src={image} alt={name}/>
        <div className='p-5 bg-[#F3F3F3] rounded-b-lg'>
            <h3 className='text-2xl font-semibold mb-2'>{name}</h3>
            <p className='text-base text-slate-700'>{recipe.length>60 ? <>{recipe.slice(0,60)}...</>:<>{recipe}</>}</p>
            <button className='uppercase py-3 px-5 bg-orange-500 text-white rounded-md font-semibold mt-5 hover:bg-black duration-500'>add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard
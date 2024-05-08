import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import services from '../../../assets/home/services.jpg';


const MenuItem = ({item}) => {
  const {image, price,name,recipe} =item;
  return (
        <div class="border-2 border-slate-100 rounded-lg p-4 mt-3 hover:shadow-lg transition duration-150">
           <div>
                <img class="w-full h-52 mx-auto rounded-t-md object-cover" src={image} alt="popular" />
           </div>
           <div class="flex justify-between mt-3 gap-5">
              <div>
                 <h4 class="text-xl font-semibold text-black mb-2">{name}</h4>
                 <p class="text-base text-slate-400 font-normal">{recipe}</p>
                 <div className='flex justify-between'>
                    <h4 class="text-xl text-red-500 font-semibold mt-3">${price}</h4>
                    <div className='flex items-start gap-3'>
                        <div>
                            <button class="bg-red-500 py-1 px-2 rounded-md">
                               <FaHeart className='text-xl' />
                            </button>
                         </div>
                         <div>
                            <button class="bg-red-500 py-1 px-2 rounded-md">
                               <FaShoppingCart className='text-xl' />
                            </button>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    )
}

export default MenuItem
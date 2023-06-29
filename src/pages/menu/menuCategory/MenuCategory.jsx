import React from 'react'
import MenuItem from '../../../components/shared/menuItem/MenuItem'
import Cover from '../../../components/shared/cover/Cover'
import { Link } from 'react-router-dom'

const MenuCategory = ({menu,btnText,title,coverImg}) => {
  return (
    <div>
        {title &&<Cover coverImg={coverImg} coverTitle={title}></Cover>}
        <div className='container mx-auto px-5 py-20'>
            <div className='grid lg:grid-cols-2 gap-10'>
                {
                    menu.map((item)=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link className='border-b-2 flex justify-center w-[150px] mx-auto border-black text-black text-base font-medium py-2 px-5 rounded-lg mt-10'  to={`/order/${title}`}>Order Now</Link>
        </div>
    </div>
  )
}

export default MenuCategory
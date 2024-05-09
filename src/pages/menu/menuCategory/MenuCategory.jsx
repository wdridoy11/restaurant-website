import React from 'react'
import MenuItem from '../../../components/shared/menuItem/MenuItem'
import Cover from '../../../components/shared/cover/Cover'
import { Link } from 'react-router-dom'

const MenuCategory = ({menu,btnText,title,coverImg}) => {
  return (
    <div>
        {title &&<Cover coverImg={coverImg} coverTitle={title}></Cover>}
        <div className='container mx-auto px-5 pb-20 pt-5'>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    menu.map((item)=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link className='border-b-2 flex justify-center w-[150px] mx-auto text-white text-base font-medium py-2 px-5 rounded-lg mt-10 bg-orange-400'  to={`/order/${title}`}>View More</Link>
        </div>
    </div>
  )
}

export default MenuCategory
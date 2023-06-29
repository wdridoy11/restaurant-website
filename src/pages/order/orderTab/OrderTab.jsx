import React from 'react'
import FoodCard from '../../../components/shared/foodCard/FoodCard'
// TODO: implement pagination here on this page
function OrderTab({item}){
  return (
    <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {item.map((item)=><FoodCard key={item._id} item={item}></FoodCard>)}
        </div>
    </div>
  )
}

export default OrderTab;
import React from 'react'
import FoodCard from '../../../components/shared/foodCard/FoodCard'

function OrderTab({item}){
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {item.map((item)=><FoodCard key={item.id} item={item}></FoodCard>)}
    </div>
  )
}

export default OrderTab
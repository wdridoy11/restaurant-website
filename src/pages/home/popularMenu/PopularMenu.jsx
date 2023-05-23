import React, { useEffect, useState } from 'react';
// page import
import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle'
import MenuItem from '../../../components/shared/menuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch(`menu.json`)
        .then((res)=>res.json())
        .then((data)=>{
            const popularItems = data.filter((item)=>item.category === "popular");
            setMenu(popularItems)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    },[])

  return (
    <div>
        <div className='container mx-auto px-5 pb-20'>
            <HeadingTitle subHeading="---Check it out---" heading="FROM OUR MENU"></HeadingTitle>   
            <div className='grid lg:grid-cols-2 gap-10'>
                {
                    menu.map((item)=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    </div>
  )
}

export default PopularMenu
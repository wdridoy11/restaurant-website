import React from 'react';
// page import
import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../../menu/menuCategory/MenuCategory';
import Cover from '../../../components/shared/cover/Cover';
import service from '../../../assets/home/services.jpg'

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter((item)=>item.category === "popular");

  return (
    <div>
        <Cover coverImg={service} coverTitle="Best Services"></Cover>
        <div className='container mx-auto px-5 mt-20'>
            <HeadingTitle subHeading="---Check it out---" heading="FROM OUR MENU"></HeadingTitle>   
            <MenuCategory menu={popular} btnText="View Full  Menu"></MenuCategory>
        </div>
    </div>
  )
}

export default PopularMenu
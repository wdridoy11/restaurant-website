import React from 'react'
import { Helmet} from "react-helmet-async";

// import page
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../menuCategory/MenuCategory';
import Cover from '../../../components/shared/cover/Cover';
import HeadingTitle from '../../../components/shared/headingTitle/HeadingTitle';

// imgage import
import menuBanner from '../../../assets/menu/banner3.jpg'
import soupBanner from '../../../assets/menu/soup-bg.jpg'
import pizzaBanner from '../../../assets/menu/pizza-bg.jpg'
import saladBanner from '../../../assets/menu/salad-bg.jpg'
import dessertBanner from '../../../assets/menu/dessert-bg.jpeg'

const Menu = () => {

  const [menu] = useMenu();
  const soup = menu.filter((item)=>item.category === 'soup');
  const pizza = menu.filter((item)=>item.category === 'pizza');
  const salad = menu.filter((item)=>item.category === 'salad');
  const offered = menu.filter((item)=>item.category === 'offered');
  const desserts = menu.filter((item)=>item.category === 'dessert');

  return (
    <div>
        <div>
            <Helmet><title>Bistro | Menu</title></Helmet>
            <Cover coverImg={menuBanner} coverTitle="Our Menu"></Cover>
            <div className='mt-20'><HeadingTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></HeadingTitle></div>
            <MenuCategory menu={offered} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            {/* cover image, title and menu send */}
            <MenuCategory title="desserts" coverImg={dessertBanner} menu={desserts} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            <MenuCategory title="pizza" coverImg={pizzaBanner} menu={pizza} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            <MenuCategory title="salad" coverImg={saladBanner} menu={salad} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            <MenuCategory title="soup" coverImg={soupBanner} menu={soup} btnText="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
        </div>
    </div>
  )
}

export default Menu
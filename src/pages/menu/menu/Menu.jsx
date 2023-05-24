import React from 'react'
import { Helmet} from "react-helmet-async";
import Cover from '../../../components/shared/cover/Cover';
import menu from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../home/popularMenu/PopularMenu';
const Menu = () => {
  return (
    <div>
        <div>
            <Helmet><title>Bistro | Menu</title></Helmet>
            <Cover coverImg={menu} coverTitle="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover coverImg={menu} coverTitle="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover coverImg={menu} coverTitle="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Menu
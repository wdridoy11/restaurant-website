import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// page import
import useMenu from '../../../hooks/useMenu';
import Cover from '../../../components/shared/cover/Cover'
import FoodCard from '../../../components/shared/foodCard/FoodCard';

import order from '../../../assets/shop/banner2.jpg'
import OrderTab from '../orderTab/OrderTab';
const Order = () => {
  const [tabIndex,setTabIndex] = useState(0);
  const [menu] = useMenu();
  const soup = menu.filter((item)=>item.category === 'soup');
  const pizza = menu.filter((item)=>item.category === 'pizza');
  const salad = menu.filter((item)=>item.category === 'salad');
  const drinks = menu.filter((item)=>item.category === 'drinks');
  const desserts = menu.filter((item)=>item.category === 'dessert');

  return (
    <div>
      <Cover coverImg={order} coverTitle="OUR FOOD"></Cover>
      <div className='container mx-auto px-5 py-20'>
        <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
              <OrderTab item={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
              <OrderTab item={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
              <OrderTab item={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
              <OrderTab item={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
              <OrderTab item={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Order
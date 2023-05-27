import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Order.css"
// page import
import useMenu from '../../../hooks/useMenu';
import Cover from '../../../components/shared/cover/Cover'

import order from '../../../assets/shop/banner2.jpg'
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {

  const categorys = ['salad','pizza','soup','desserts','drinks']
  const {category} = useParams()
  const initialIndex = categorys.indexOf(category)
  const [tabIndex,setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  //  menu data filter by category
  const soup = menu.filter((item)=>item.category === 'soup');
  const pizza = menu.filter((item)=>item.category === 'pizza');
  const salad = menu.filter((item)=>item.category === 'salad');
  const drinks = menu.filter((item)=>item.category === 'drinks');
  const desserts = menu.filter((item)=>item.category === 'dessert');

  return (
    <div>
      <Helmet><title>Bistro | Order Food</title></Helmet>
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
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../components/shared/cover/Cover'
import order from '../../../assets/shop/banner2.jpg'
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/shared/foodCard/FoodCard';
const Order = () => {
  const [tabIndex,setTabIndex] = useState(0);
  const [menu] = useMenu();
  const soup = menu.filter((item)=>item.category === 'soup');
  const pizza = menu.filter((item)=>item.category === 'pizza');
  const salad = menu.filter((item)=>item.category === 'salad');
  const offered = menu.filter((item)=>item.category === 'offered');
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
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {salad.map((item)=><FoodCard key={item.id} item={item}></FoodCard>)}
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Order
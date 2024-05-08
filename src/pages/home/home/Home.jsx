import React from 'react'
import { Helmet} from "react-helmet-async";
import Banner from '../banner/Banner'
import Category from '../../category/Category'
import PopularMenu from '../popularMenu/PopularMenu'
import Featured from '../featured/Featured'
import Testimonials from '../testimonials/Testimonials'
import Gallery from '../gallery/Gallery';
import Open from '../open/Open';

const Home = () => {
  return (
    <div>
      <Helmet><title>Bistro | Home</title></Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      {/* <Featured></Featured> */}
      <Gallery />
      <Open />
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
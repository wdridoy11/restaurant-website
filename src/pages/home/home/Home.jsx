import React from 'react'
import { Helmet} from "react-helmet-async";
import Banner from '../banner/Banner'
import Category from '../../category/Category'
import PopularMenu from '../popularMenu/PopularMenu'
import Featured from '../featured/Featured'
import Testimonials from '../testimonials/Testimonials'
import Gallery from '../gallery/Gallery';
import Open from '../open/Open';
import Blogs from '../../blog/Blogs';

const Home = () => {
  return (
    <div>
      <Helmet><title>Bistro | Home</title></Helmet>
      <Banner></Banner>
      <Category></Category>
      <Featured />
      <PopularMenu></PopularMenu>
      <Gallery />
      <Open />
      <Testimonials></Testimonials>
      <Blogs />
    </div>
  )
}

export default Home
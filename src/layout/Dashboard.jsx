import React from 'react'
import { Helmet } from 'react-helmet-async';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBars,FaShoppingBag, FaEnvelope } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';


const Dashboard = () => {
  const [cart] = useCart();
  return (
    <>
    <Helmet><title>Bistro | Dashboard</title></Helmet>
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          <li className='text-base font-medium'><NavLink to={'/dashboard/home'}><FaHome></FaHome>User Home</NavLink></li>
          <li className='text-base font-medium'><NavLink to={'/dashboard/reservation'}><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
          <li className='text-base font-medium'>
            <NavLink to={'/dashboard/mycart'}>
              <FaShoppingCart></FaShoppingCart>My Cart
              <span className="badge">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li className='text-base font-medium'><NavLink to={'/dashboard/history'}><FaWallet></FaWallet>Payment History</NavLink></li>
          <div className="divider"></div> 
          <li className='text-base font-medium'><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
          <li className='text-base font-medium'><NavLink to={'/menu'}><FaBars></FaBars>Menu</NavLink></li>
          <li className='text-base font-medium'><NavLink to={'/order/salad'}><FaShoppingBag></FaShoppingBag>Shop</NavLink></li>
          <li className='text-base font-medium'><NavLink to={'/contact'}><FaEnvelope></FaEnvelope>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default Dashboard
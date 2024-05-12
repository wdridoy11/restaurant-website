import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContetxt } from '../../../context/AuthProvider'
import { FaCartArrowDown, FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import Account from './Account';

const Header = () => {

  const {user , userLogout} = useContext(AuthContetxt);

  const [cart] = useCart();
  // landle user logout
  const userLogOut=()=>{
    userLogout()
    .then((res)=>{
      const user = res.user;
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  const navMenu =<>
      <li className='list-none'><Link className='text-base font-medium text-white' to={`/`}>Home</Link></li>
      <li className='list-none'><Link className='text-base font-medium text-white' to={`/menu`}>Our Menu</Link></li>
      <li className='list-none'><Link className='text-base font-medium text-white' to={`/order/salad`}>Our Shop</Link></li>
      <li className='list-none'><Link className='text-base font-medium text-white' to={`/secret`}>Secret</Link></li>
      <li className='list-none'><Link className='text-base font-medium text-white' to={`/`}>Contact Us</Link></li>
      <li className='list-none'>
        <div className="indicator">
            <span className="indicator-item badge badge-sm badge-secondary -mt-1">{cart?.length || 0}</span> 
            <Link to={'/dashboard/mycart'}><FaCartArrowDown className='text-xl text-white' /></Link>
        </div>
      </li>
      <li className='list-none'>
          <Account />
      </li>
  </>

  return (
    <div className='bg-black py-2 fixed z-10 bg-opacity-30 w-full backdrop-blur-sm'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <div>
                <Link to={'/'}>logo</Link>
            </div>
            <div className='flex gap-6 items-center'>
                  {navMenu}
            </div>
        </div>
    </div>
  </div>
  )
}

export default Header;
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContetxt } from '../../../context/AuthProvider'
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

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
      <li><Link className='text-lg font-medium' to={`/`}>Home</Link></li>
      <li><Link className='text-lg font-medium' to={`/menu`}>Our Menu</Link></li>
      <li><Link className='text-lg font-medium' to={`/order/salad`}>Our Shop</Link></li>
      <li><Link className='text-lg font-medium' to={`/secret`}>Secret</Link></li>
      <li><Link className='text-lg font-medium' to={`/`}>Contact Us</Link></li>
      <li>
          <Link to={'/dashboard/mycart'}>
                <button className="btn gap-2"><FaShoppingCart></FaShoppingCart><div className="badge">+{cart?.length || 0}</div></button>
          </Link>
      </li>
      <li className='flex items-center'>
          {
            user ? <Link className='btn bg-orange-500 text-white border-0 px-7 rounded-md font-semibold hover:bg-black duration-500' onClick={userLogOut}>LogOut</Link>:
            <Link className='btn bg-orange-500 text-white border-0 px-7 rounded-md font-semibold hover:bg-black duration-500' to={`/login`}>Login</Link>
          }
      </li>
  </>

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 text-white px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {navMenu}
              </ul>
            </div>
            <Link>
                <h3 className='text-3xl font-semibold'>BISTRO BOSS</h3>
                <p className='text-2xl font-medium'>Restaurant</p>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  {navMenu}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Header
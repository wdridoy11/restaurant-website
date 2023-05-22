import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className='grid md:grid-cols-2 text-white text-center text-xl font-medium'>
            <div className='bg-gray-800 py-24'>
                <h3 className='text-3xl font-semibold mb-6'>CONTACT US</h3>
                <ul>
                  <li className='mb-2'>123 ABS Street, Uni 21, Bangladesh</li>
                  <li className='mb-2'>+88 123456789</li>
                  <li className='mb-2'>Mon - Fri: 08:00 - 22:00</li>
                  <li className='mb-2'>Sat - Sun: 10:00 - 23:00</li>
                </ul>
            </div>
            <div className='bg-gray-900  py-24'>
                <h3 className='text-3xl font-semibold mb-6'>CONTACT US</h3>
                <p>Join us on social media</p>
                <div className='flex items-center justify-center gap-3 text-3xl mt-5'>
                    <Link to={`https://web.facebook.com/wdridoy11`} target='_blank'><FaFacebookF /></Link>
                    <Link to={`https://twitter.com/wdridoy11`} target='_blank'><FaTwitter /></Link>
                    <Link to={`https://www.instagram.com/wdridoy11/`} target='_blank'><FaInstagram /></Link>
                </div>
            </div>
        </div>
        <div className='bg-black py-5 text-center'>
            <p className='text-xl font-medium text-white'>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
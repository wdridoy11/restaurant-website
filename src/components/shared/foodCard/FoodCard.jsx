import React from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContetxt } from '../../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import { useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const FoodCard = ({item}) => {

    const {image,name, recipe,price,_id} =item;
    const {user} = useContext(AuthContetxt);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const [axiosSecure] = useAxiosSecure();
    const {data:users=[]} = useQuery(["users"],async()=>{
        const res= await axiosSecure.get('/users')
        const resutl = res.data;
        const filter = resutl.find((userEmail)=>userEmail.email === user?.email);
        return filter
    })

    // when admin click add to card btn it's not work 
    const handleAdminCardDisable=()=>{
        console.log("Admin can't be card this food")
    }

    const handleAddToCart = item => {
      if(user && user.email){
          const cartItem = {menuItemId: _id, name, image, price, email: user.email}
          fetch('http://localhost:5000/carts', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(cartItem)
          })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                  refetch(); // refetch cart to update the number of items in the cart
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Food added on the cart.',
                      showConfirmButton: false,
                      timer: 1500
                  })
              }
          })
      }
      else{
          Swal.fire({
              title: 'Please login to order the food',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
              }
            })
      }
  }

  return (
    <div className='relative'>
        <img className='w-full h-[330px] object-cover rounded-t-lg' src={image} alt={name}/>
        <div className='p-5 bg-[#F3F3F3] rounded-b-lg'>
            <h3 className='text-2xl font-semibold mb-2'>{name}</h3>
            <p className='absolute top-2 right-2 bg-orange-400 p-2 rounded-lg text-white font-semibold'>$: {price}</p>
            <p className='text-base text-slate-700'>{recipe.length>60 ? <>{recipe.slice(0,60)}...</>:<>{recipe}</>}</p>
            {/* <button onClick={()=>handleAddToCart(item)} className='uppercase py-3 px-5 bg-orange-500 text-white rounded-md font-semibold mt-5 hover:bg-black duration-500'>add to cart</button> */}
            <button 
                onClick={users?.role === "admin" ? handleAdminCardDisable:()=>handleAddToCart(item)} 
                className={users.role === "admin"?
                "uppercase py-3 px-5 bg-orange-500 opacity-50 text-white rounded-md font-semibold mt-5 cursor-not-allowed":
                "uppercase py-3 px-5 bg-orange-500 text-white rounded-md font-semibold mt-5 hover:bg-black duration-500"}>
                add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard
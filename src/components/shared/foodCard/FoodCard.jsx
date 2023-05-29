import React from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContetxt } from '../../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const FoodCard = ({item}) => {

    const {image,name, recipe,price,_id} =item;
    const {user} = useContext(AuthContetxt);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCard =(menuItem)=>{
      // console.log(menuItem)
      if(user && user.email){
        const orderItem ={image,name, recipe,price,menuItem:_id,email:user.email}
        fetch(`http://localhost:5000/carts`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(orderItem)
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              position:"top-end",
              icon:"success",
              title: 'Food added on the cart.',
              showConfirmButton: false,
              timer: 1500
            })
          }else{
            Swal.fire({
              title: 'Please login to add',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login Now'
            }).then((result) => {
              if (result.isConfirmed) {
               navigate("/login",{state:{from:location}})
              }
            })
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
            <button onClick={()=>handleAddToCard(item)} className='uppercase py-3 px-5 bg-orange-500 text-white rounded-md font-semibold mt-5 hover:bg-black duration-500'>add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard
import React from 'react'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async'
import useCart from '../../../hooks/useCart'
import { FaTrash } from 'react-icons/fa';

const MyCard = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum,item)=>item.price + sum,0);

const handleDelete=()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/carts/${item._id}`,{
        method:"DELETE",
        headers:{
          "content-type":"application/json"
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.deletedCount>0){
          refetch();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  })
}


  return (
    <div className='w-full'>
      <Helmet><title>Bistro | My Card</title></Helmet>
      <div className='flex items-center justify-between'>
        <h3>Total Orders: {cart.length || 0}</h3>
        <h3>Total Price: {total}</h3>
        <button className='btn'>Pay</button>
      </div>
      <div className="overflow-x-auto w-full lg:px-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
                {cart &&  cart.map((item,index)=><tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}
                    </td>
                    <td>{item.price}</td>
                    <th>
                      <button onClick={handleDelete} className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                    </th>
                  </tr>)}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default MyCard
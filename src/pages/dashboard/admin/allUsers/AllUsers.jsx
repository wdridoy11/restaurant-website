import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FaTrash, FaUserShield } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data:users=[],refetch}=useQuery(["users"],async()=>{
        const res = await  axiosSecure.get(`/users`)
        return res.data;
    })

    const handleMakeAdmin = (user)=>{
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:"PATCH"
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        if(data.modifiedCount){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:`${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  // handle delete user from database
    const handleDelete = (user)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You will delete user",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/${user._id}`,{
            method:"DELETE"
          })
          .then((res)=>res.json())
          .then((data)=>{
              refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
          })
        }
      })
    }

  return (
    <div className='w-full h-screen pt-10 lg:px-10'>
        <Helmet><title>Bistro Boss | All Users</title></Helmet>
        <div>
            <h1 className='text-3xl font-semibold'>Total Users:{users.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Roll</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((user,index)=><tr key={user._id}>
                      <th>{index+1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                          {user.role === "admin" ?"admin":
                              <button onClick={()=>handleMakeAdmin(user)} className="btn text-lg border-0 bg-orange-400 text-white">
                                  <FaUserShield></FaUserShield>
                              </button>
                          }
                      </td>
                      <td><button onClick={()=>handleDelete(user)} className="btn text-lg border-0 bg-orange-400 text-white"><FaTrash></FaTrash></button></td>
                    </tr>)}
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AllUsers
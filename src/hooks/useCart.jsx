import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContetxt } from '../context/AuthProvider';


const useCart = () => {
    const  {user} = useContext(AuthContetxt);
    const { refetch, isError, data:cart=[], error } = useQuery({
      queryKey: ['cart',user?.email],
      queryFn: async ()=>{
        const res = await fetch(`localhost:5000/carts?email=${user?.email}`)
        return res.json();
      },
    })
  return [cart,refetch]
}

export default useCart
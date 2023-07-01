import {useQuery} from '@tanstack/react-query'
import useAxioSecure from './useAxiosSecure';
import { useContext } from 'react'
import { AuthContetxt } from '../context/AuthProvider'

const useCart = () => {

  const {user , loading} = useContext(AuthContetxt);
  // const token = localStorage.getItem("access_token");
  const [axiosSecure] = useAxioSecure();

  const {refetch, data:cart=[] }= useQuery({
    queryKey:["carts",user?.email],
    enabled:!loading,
    queryFn:async ()=>{
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      return res.data;
    },
    // queryFn:async ()=>{
    //   const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
    //     headers:{
    //       authorization:`bearer ${token}`
    //     }
    //   })
    //   return res.json()
    // },
  })
  return [cart,refetch]
}

export default useCart;
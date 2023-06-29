import { useContext, useState } from "react"
import { AuthContetxt } from "../context/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import { useSubmit } from "react-router-dom";

const useAdmin =()=>{
    const {user} = useContext(AuthContetxt);
    const [admindata,setAdmindata] = useState([])
    fetch(`http://localhost:5000/users/admin/${user?.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        setAdmindata(data)
    })
    const {data:isAdmin,isLoading:isAdminLoading}= useQuery({
        queryKey:["isAdmin" ? user?.email],
        queryFn: async()=>{
            const res = await admindata;
            return res.data.admin
        }
    
    })
    return [isAdmin,isAdminLoading]
}
export default useAdmin
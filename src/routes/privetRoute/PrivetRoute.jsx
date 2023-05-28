import React, { useContext } from 'react'
import { AuthContetxt } from '../../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loading} =useContext(AuthContetxt);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
  return <Navigate to={'/login'} state={{from:location}} replace ></Navigate>
}

export default PrivetRoute
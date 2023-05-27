import React, { useContext } from 'react'
import { AuthContetxt } from '../../context/AuthProvider'

const PrivetRoute = () => {
    const {user, loading} =useContext(AuthContetxt);
  return (
    <div>PrivetRoute</div>
  )
}

export default PrivetRoute
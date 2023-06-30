import React from 'react'
import { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContetxt } from '../../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {createUserUsingGoogle,createUserUsingGithub} = useContext(AuthContetxt);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGooginLogIn=()=>{
        createUserUsingGoogle()
        .then((res)=>{
            const loginedUser = res.user;
            const saveUser = {name:loginedUser.displayName,email:loginedUser.email}
            // user data send database
            fetch(`http://localhost:5000/users`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(saveUser)
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                if(data.insertedId){
                    console.log("from",from)
                    // navigate("/")
                    navigate(from,{replace:true})
                }
            })
        })
    }


  return (
    <div>
        <p className='text-xl text-black my-2'>Or sign in with</p>
        <div className='flex justify-center items-center gap-5 mt-3'>
            <button className='border border-black p-3 rounded-full'><FaFacebookF></FaFacebookF></button>
            <button className='border border-black p-3 rounded-full' onClick={handleGooginLogIn}><FaGoogle></FaGoogle></button>
            <button className='border border-black p-3 rounded-full' onClick={createUserUsingGithub}><FaGithub></FaGithub></button>
        </div>
    </div>
  )
}

export default SocialLogin
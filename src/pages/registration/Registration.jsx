import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

import authentication from '../../assets/others/authentication.png';
import authentication1 from '../../assets/others/authentication2.png';
import SocialLogin from '../../components/shared/socialLogin/SocialLogin';
import { AuthContetxt } from '../../context/AuthProvider';

const Registration = () => {
  // import AuthProvider firebase
  const {userProfileUpdate,createUserUsingEmail} = useContext(AuthContetxt)
  // import useForm
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  // handle Registration
  const onSubmit = data =>{
      createUserUsingEmail(data.email, data.password)
      .then((res)=>{
        const user = res.user;
        // user Profile Update start
        userProfileUpdate(data.name, data.photoURL)
        .then((res)=>{
          const saveUser ={name: data.name,email: data.email}
          fetch(`http://localhost:5000/users`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(saveUser)
          })
          .then((res)=>res.json())
          .then((userData)=>{
            if(userData.insertedId){
              Swal.fire({
                title: 'account create successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate('/')
            }
          })
        })
        .catch((error)=>{
          console.log(error.message)
        })
        // user Profile Update end
      })
      .catch((error)=>{
        console.log(error)
      })
  };


  return (
    <>
    <Helmet><title>Bistro Boss | Registration</title></Helmet>
      <div className='min-h-screen pt-28' style={{ backgroundImage:`url(${authentication})`}}>
          <div className='container mx-auto px-5' >
            <div className='grid md:grid-cols-2 items-center gap-10'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-3xl font-bold text-center mb-8'>Sign Up</h1>
                        <div className="form-control w-ful">
                            <label className="label">
                              <span className="label-text text-base font-medium">Name</span>
                            </label>
                            <input type="text" id='name' {...register("name")} name='name' placeholder="Enter your name" className="outline-none p-4 rounded-lg input-bordered w-full"required />
                            {errors.name && <span>This name field is required</span>}
                        </div>
                        <div className="form-control w-ful">
                            <label className="label">
                              <span className="label-text text-base font-medium">Photo URL</span>
                            </label>
                            <input type="text" id='photoURL' {...register("photoURL")} name='photoURL' placeholder="Photo URL" className="outline-none p-4 rounded-lg input-bordered w-full"required />
                            {errors.photoURL && <span>This name field is required</span>}
                        </div>
                        <div className="form-control w-ful">
                            <label className="label">
                              <span className="label-text text-base font-medium">Email</span>
                            </label>
                            <input type="email" id='email'{...register("email")} name='email' placeholder="Enter your Email" className="outline-none p-4 rounded-lg input-bordered w-full"required />
                            {errors.email && <span>This email field is required</span>}
                        </div>
                        <div className="form-control w-ful mt-4">
                            <label className="label">
                              <span className="label-text text-base font-medium">Password</span>
                            </label>
                            <input type="password" id='password'{...register("password",
                            { 
                              required: true,
                              minLength: 8,
                              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            },
                            )} name='password' placeholder="Enter your password" className="outline-none p-4 rounded-lg input-bordered w-full"required />
                            {errors.password?.type === 'required' && <p className='text-red-600'>This password field is required</p>}
                            {errors.password?.type === 'minLength' && <p role="alert" className='text-red-600'>Password must be 8 characters</p>}
                            {errors.password?.type === 'pattern' && <p role="alert" className='text-red-600'>Password must have one Uppercase one lowercase one number one special characters </p>}
                        </div>
                        <input type="submit" className='py-4 w-full bg-[#D1A054] text-white cursor-pointer font-semibold mt-5 rounded-lg hover:bg-black duration-500' value="Sign Up" />
                    </form>
                    <div className='text-center mt-5'>
                        <p className='font-semibold text-[#D1A054] text-xl'>Already registered? <Link to={'/login'}>Go to log in</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
                <div>
                    <img src={authentication1} alt="authentication" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Registration
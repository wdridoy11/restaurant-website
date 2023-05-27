import React, { useContext } from 'react'
import { AuthContetxt } from '../../context/AuthProvider'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

import authentication from '../../assets/others/authentication.png';
import authentication1 from '../../assets/others/authentication2.png';
import { useForm } from 'react-hook-form';

const Registration = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
      createUserUsingEmail(data)
      .then((res)=>{
        const user = res.user;
        console.log(user)
      })
      .catch((error)=>{
        console.log(error.message)
      })
  };

  const {createUserUsingGoogle, createUserUsingGithub,createUserUsingEmail} = useContext(AuthContetxt);
  // handle Registration
  // const handleRegistration =(event)=>{
  //     event.preventDefault();
  //     const form = event.target;
  //     const email = form.target.value;
  //     const password = form.target.value;
  //     // user create using email
  //     createUserUsingEmail(email,password)
  //     .then((res)=>{
  //       const user = res.user;
  //       console.log(user)
  //     })
  //     .catch((error)=>{
  //       console.log(error.message)
  //     })
  // }

  return (
    <div className='min-h-screen pt-72' style={{ backgroundImage:`url(${authentication})`}}>
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
                        <input type="submit" className='py-4 w-full bg-[#D1A054] text-white cursor-pointer font-semibold mt-5 rounded-lg hover:bg-black duration-500' value="Sign In" />
                    </form>
                    <div className='text-center mt-5'>
                        <p className='font-semibold text-[#D1A054] text-xl'>Already registered? <Link to={'/login'}>Go to log in</Link></p>
                        <p className='text-xl text-black my-2'>Or sign in with</p>
                        <div className='flex justify-center items-center gap-5 mt-3'>
                            <button className='border border-black p-3 rounded-full'><FaFacebookF></FaFacebookF></button>
                            <button className='border border-black p-3 rounded-full' onClick={createUserUsingGoogle}><FaGoogle></FaGoogle></button>
                            <button className='border border-black p-3 rounded-full' onClick={createUserUsingGithub}><FaGithub></FaGithub></button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={authentication1} alt="authentication" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration
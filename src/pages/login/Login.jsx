import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

import authentication from '../../assets/others/authentication.png';
import authentication1 from '../../assets/others/authentication2.png';
import { AuthContetxt } from '../../context/AuthProvider';

const Login = () => {

    const {createUserUsingGoogle, createUserUsingGithub, userLogin} = useContext(AuthContetxt);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handle login
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.target.value;
        const password = form.target.value;
        userLogin(email,password)
        .then((res)=>{
            const user = res.user;
            Swal.fire({
                title: 'User login successful',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from,{replace:true})
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

  return (
    <div className='min-h-screen pt-72' style={{ backgroundImage:`url(${authentication})`}}>
        <div className='container mx-auto px-5' >
            <div className='grid md:grid-cols-2 items-center gap-10'>
                <div>
                    <img src={authentication1} alt="authentication" />
                </div>
                <div>
                    <form onSubmit={handleLogin}>
                        <h1 className='text-3xl font-bold text-center mb-8'>Login</h1>
                        <div className="form-control w-ful">
                            <label className="label">
                              <span className="label-text text-base font-medium">Email</span>
                            </label>
                            <input type="email" id='email' name='email' placeholder="Enter your Email" className="outline-none p-4 rounded-lg input-bordered w-full"required />
                        </div>
                        <div className="form-control w-ful mt-4">
                            <label className="label">
                              <span className="label-text text-base font-medium">Password</span>
                            </label>
                            <input type="password" id='password' name='password' placeholder="Enter your password" className="outline-none p-4 rounded-lg input-bordered w-full"required />
                        </div>
                        <input type="submit" className='py-4 w-full bg-[#D1A054] text-white cursor-pointer font-semibold mt-5 rounded-lg hover:bg-black duration-500' value="Sign In" />
                    </form>
                    <div className='text-center mt-5'>
                        <p className='font-normal text-[#D1A054] text-xl'>New here? <Link to={'/Registration'}>Create a New Account</Link></p>
                        <p className='text-xl text-black my-2'>Or sign in with</p>
                        <div className='flex justify-center items-center gap-5 mt-3'>
                            <button className='border border-black p-3 rounded-full'><FaFacebookF></FaFacebookF></button>
                            <button className='border border-black p-3 rounded-full' onClick={createUserUsingGoogle}><FaGoogle></FaGoogle></button>
                            <button className='border border-black p-3 rounded-full' onClick={createUserUsingGithub}><FaGithub></FaGithub></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
// import image
import authentication from '../../assets/others/authentication.png';
import authentication1 from '../../assets/others/authentication2.png';

const Login = () => {
  return (
    <div className='min-h-screen' style={{ backgroundImage:`url(${authentication})`}}>
        <div className='container mx-auto px-5' >
            <div className='grid md:grid-cols-2 items-center'>
                <div>
                    <img src={authentication1} alt="authentication" />
                </div>
                <div>
                    <form>
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
                    <div className='text-center'>
                        <p className='font-semibold text-[#D1A054] text-xl'>New here? <Link to={'/Registration'}>Create a New Account</Link></p>
                        <p className='text-xl text-black'>Or sign in with</p>
                        <div className='flex justify-center items-center'>
                            <button><FaFacebookF></FaFacebookF></button>
                            <button><FaGithub></FaGithub></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
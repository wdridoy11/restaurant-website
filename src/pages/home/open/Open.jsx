import React from 'react';
import second from '../../../assets/home/services.jpg';

const dayTime =['Sunday', 'Monday', 'Tueday', 'Wednesday','Thursday', 'Friday', 'Saturday'];

const Open = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 items-center'>
                <div>
                    <img className='rounded-lg' src={second} alt="" />
                </div>
                <div className='px-10'>
                    <div className='text-center mb-10'>
                        <h1 className='text-4xl font-semibold mb-2'>Opening Hours</h1>
                        <p className='text-base text-slate-400 font-normal w-full md:w-11/12'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo assumenda
                             vel corporis laborum et quo veritatis alias nulla quidem sunt?
                        </p>
                    </div>
                    <div className=''>
                        <div>
                            {dayTime.map((day,index)=><div  key={index} className='flex justify-between'>
                                <h3 className='text-lg font-medium mb-1'>{day}</h3>
                                <p>----------------------------</p>
                                <p className='text-lg font-medium mb-1'>8:00 AM - 9:00 PM</p>
                            </div>
                            )}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Open
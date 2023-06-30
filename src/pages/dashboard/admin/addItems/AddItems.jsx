import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form';
import HeadingTitle from '../../../../components/shared/headingTitle/HeadingTitle';

const AddItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit= data =>{
        console.log(data)
    }
  return (
    <>
        <Helmet><title>Bistro Boss | Add Items</title></Helmet>
        <div className='w-full md:w-1/2 border p-10 rounded-md bg-[#F3F3F3]'>
            <div>
                <HeadingTitle subHeading="---What's new?---" heading="ADD AN ITEM"></HeadingTitle>
                <form className='pt-10' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <input type="text" id='name' {...register("name")} name='name' placeholder="Recipe name" className="w-full input input-bordered mb-3 hover:outline-none"required />
                        {errors.name && <span>This name field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <input type="number" id='price' {...register("price")} name='price' placeholder="Price" className="w-full input input-bordered mb-3 hover:outline-none"required />
                        {errors.price && <span>This name field is required</span>}
                    </div>
                    <div className="form-control w-full mb-3">
                        <select className="select select-bordered w-full">
                            <option disabled selected>Category</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <input type="text" id='details' {...register("details")} name='details' placeholder="Recipe Details" className="w-full input input-bordered mb-3 hover:outline-none"required />
                        {errors.price && <span>This name field is required</span>}
                    </div>
                    <input type="submit" className='py-4 w-full bg-[#D1A054] text-white cursor-pointer font-semibold mt-5 rounded-lg hover:bg-black duration-500' value="Add Item" />
                </form>
             </div>
        </div>
    </>
  )
}

export default AddItems
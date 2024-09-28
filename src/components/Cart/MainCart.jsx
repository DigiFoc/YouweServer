import React from 'react'
import { FaTrash } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainCart = () => {
    

    return (
        <>
            <div className=' h-40 md:h-24 w-full my-4 grid grid-flow-col justify-between items-center shadow-md'>
                <div className='w-20'>
                    <LazyLoadImage effect='blur' src="" className='w-20 h-[6rem]' alt="" />
                </div>

                <div className='flex items-center w-20 justify-center pl-10 '>
                    <button className='text-3xl px-4 h-8 flex items-center cursor-pointer font-bold hover:bg-red-300 hover:text-white border-2'>-</button>

                    <span className='text-xl border-2 px-3 border-gray-600'>1</span>

                    <button className='text-3xl px-4 h-8 flex items-center cursor-pointer font-bold hover:bg-green-300 hover:text-white border-2'>+</button>
                </div>
                <div>&#8377; 700</div>
                <div>&#8377; 800</div>
                <div className='text-red-500 hover:text-red-800 hover:cursor-pointer items-center pr-3'>
                    <FaTrash />
                </div>
            </div>
        </>
    )
}

export default MainCart

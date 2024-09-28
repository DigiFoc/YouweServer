import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from '../../../Utils/Context'


function SearchBar() {
    const { SearchBarHendle } = useContext(Context);

    return (
        <>
            <div className='bg-cyan-950 h-full w-full flex justify-center items-center py-2 md:gap-40 gap-4'>
                <form >
                    <div className='flex'>
                        <input className='h-12 rounded-l-full pl-5 md:w-96' type="text" placeholder='Search product here...' />
                        <div className='bg-white rounded-r-full flex items-center border-l-2 px-3 hover:bg-red-600 hover:text-white cursor-pointer text-base'>Search</div>
                    </div>
                </form >
                <div className='text-white hover:bg-red-600 float-right text-2xl' onClick={SearchBarHendle}>
                    <FaTimes />
                </div>

            </div>
        </>
    )
}

export default SearchBar;
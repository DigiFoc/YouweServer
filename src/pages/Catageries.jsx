import React, { useContext } from 'react'
import { Context } from '../Utils/Context'
import { useNavigate } from 'react-router-dom';
import CatagresCard from '../components/CatagrresCard/CatagresCard';

const Catageries = () => {
    const { getAllCategory } = useContext(Context)
    const navigate = useNavigate();

    return (
        <>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:w-[85%] mx-auto">
                {Array.isArray(getAllCategory) ? (
                    getAllCategory.map((item) => (
                        <div onClick={() => navigate(`/product-category/${item.name}`)} key={item.id} className='hover:scale-105 w-fit h-fit md:my-4 cursor-pointer'>
                            <CatagresCard thum={item.image} />
                        </div>
                    ))) : (
                    <div className='mx-auto '>
                        Loading..
                    </div>
                )}
            </div>
        </>
    )
}

export default Catageries
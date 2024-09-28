import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../Utils/Context';
import FlaseDeal from '../components/FlaseDealCard/FlaseDeal';

const ProductByCategory = () => {
    const { str } = useParams();

    const { getCategoryData, setCategoryData } = useContext(Context)

    const getCategory = async () => {
        const res = await fetch(`http://localhost:8000/api/productsbycategory/${str}`);
        const resData = await res?.json();
        setCategoryData(resData);
    }


    useEffect(() => {
        getCategory();
    }, [getCategoryData])

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:w-[85%] mx-auto">
                {Array?.isArray(getCategoryData) ? (
                    getCategoryData?.map((item) => (
                        <Link to={`/product/${item?.id}`} key={item?.id} className='hover:scale-105 w-fit h-fit md:my-4'>
                            <FlaseDeal thum={item?.image} titles={item?.Title} price={item?.price} />
                        </Link>
                    ))) : (
                    <div className='my-auto w-52 mx-auto items-center bg-red-500 mt-10'>
                        loading...
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductByCategory

import React, { useEffect, useState } from 'react'
// import FlaseDeal from '../components/FlaseDealCard/FlaseDeal'
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from 'react-slick';


function ProductDetailCard() {

    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    // product details
    const { str } = useParams();

    const [ProductDetail, setProductDetail] = useState();
    // const [ReletedProduct, SetReletedProduct] = useState();
    const [thum, setThum] = useState();
    const [ptitle, setPtitle] = useState();
    const [Prices, setPrices] = useState();
    const [orignalPrices, setOrignalPrices] = useState();


    // const Goto = () => {
    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    // }


    // const GetProductByCategory = async (categorie) => {
    //     const res = await fetch(`http://localhost:8000/api/productsbycategory/${categorie}`);
    //     const resData = await res.json();
    //     SetReletedProduct(resData);
    // }


    const GetProductDetail = async () => {
        // const res = await fetch(`http://localhost:8000/api/products/${id}/`);
        const res = await fetch(`http://localhost:1337/api/listings?filters[slug][$eq]=${str}&populate=*`);
        const resData = await res.json();
        setProductDetail(resData);
        setThum(resData?.data[0]?.attributes?.Thumbnail?.data?.attributes?.formats?.thumbnail?.url);

        setPtitle(resData?.data[0]?.attributes?.Title);
        setPrices(resData?.data[0]?.attributes?.Price);
        setOrignalPrices(resData?.data[0]?.attributes?.orignal_price);



        // GetProductByCategory(resData.category)
    }



    // const addToCarts = () => {
    //     // SetCartProduct((prevCart) => [...prevCart, product]);
    // };


    useEffect(() => {
        GetProductDetail();
        // console.log(ReletedProduct);
    // }, [ReletedProduct])
    })

    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden">
                <div className="container px-5 my-10 md:py-2 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap border bg-white shadow-xl p-3 rounded-sm ">

                        <div className='w-80 md:h-[25rem] object-cover object-center rounded-md mx-auto'>
                            <Slider {...settings}>
                                <LazyLoadImage effect='blur' alt="ecommerce" className="w-full h-full mx-auto object-cover object-center rounded-sm border border-gray-200 " src={thum} />
                                <LazyLoadImage effect='blur' alt="ecommerce" className="w-full h-full mx-auto object-cover object-center rounded-sm border border-gray-200 " src={``} />
                                <LazyLoadImage effect='blur' alt="ecommerce" className="w-full h-full mx-auto object-cover object-center rounded-sm border border-gray-200 " src={``} />
                                <LazyLoadImage effect='blur' alt="ecommerce" className="w-full h-full mx-auto object-cover object-center rounded-sm border border-gray-200 " src={``} />
                            </Slider>
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1">{ProductDetail?.Title}</h1>

                            <div className="flex mb-4">

                                {/* ************************************************************************************* */}
                                {/* Rating Stars */}
                                {/* ************************************************************************************* */}
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin='round' strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                {/* ************************************************************************************* */}


                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <div className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-2 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-2 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </div>
                                </span>
                            </div>

                            {/* Product detail  */}
                            <span className='text-2xl'>Product details:</span>
                            <h3 className="leading-relaxed">{ptitle}</h3>
                            {/* <p className="leading-relaxed">{ProductDetail?.data[0]?.attributes?.Description}</p> */}
                            {/* ****************************************************************************************** */}

                            {/*Cloth colors */}
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>

                                {/* cloth sizes  */}
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">

                                <div className='flex gap-3'>
                                    <span className="title-font font-medium text-2xl text-red-600">
                                        <del>
                                            &#x20b9;
                                            {orignalPrices}
                                        </del>
                                    </span>
                                    <span className="title-font font-medium text-2xl text-gray-900">&#x20b9;{Prices}</span>
                                </div>
                                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => { alert("") }}>Add to cart</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className='md:text-2xl md:p-5 font-bold'>
                Related products
            </div>

{/*             <div className="grid grid-cols-2 sm:w-[95%] md:w-[90%] mx-auto sm:grid-cols-3 md:grid-cols-5">

                {Array.isArray(ReletedProduct) ? (
                    ReletedProduct.map((item) => (
                        <Link to={`/product/${item.id}`} key={item.id} className='hover:scale-105 w-fit h-fit md:my-4' onClick={Goto}>
                            <FlaseDeal thum={item.image} titles={item.Title} price={item.price} lessPrice={"878"} />
                        </Link>
                    ))) : (
                    <div className='mx-auto'>
                        Loading..
                    </div>
                )}
            </div> */}
        </>
    )
}

export default ProductDetailCard

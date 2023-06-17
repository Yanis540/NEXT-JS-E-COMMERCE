/* eslint-disable @next/next/no-img-element */
'use client'
import HorizontalCategoryScroll from '@/components/Category/HorizontalCategoryScroll';
import FavoriteButton from '@/components/Favorite/FavoriteButton';
import { useStoreBasket } from '@/context/store/use-store-basket';
import { useCategories } from '@/hooks/use-categories';
import { FullProduct } from '@/types';
import React from 'react';
import {SlBasket} from "react-icons/sl"

interface ProductDetailsProps {
    product : FullProduct
};

function ProductDetails({product}:ProductDetailsProps) {
    const {categories,isLoading:isLoadingCategories} = useCategories()
    const {add} = useStoreBasket()||{};
    const handleAddProductToBasket = ()=>{
        if(add)
            add(product)
    }
    return (
        <div className="flex-1 flex flex-col items-center justify-start gap-4 h-full  overflow-y-scroll scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-white scrollbar-rounded-md">
            <div className="flex flex-col lg:flex-row  gap-[20px] bg-light-gray-transparent rounded-xl py-6  border border-gray-300 w-[70%] max-w-[1200px] " >
                {/* iMAGE */}
                <img className='w-96 h-96 rounded-lg flex flex-col items-center justify-center mx-auto object-contain ' src={product?.image??''} alt="" /> 
                {/* Details */}
                <div className="flex-1 flex flex-col items-start justify-around h-full gap-[20px] lg:gap-[0px] py-3 px-6 lg:px-2   ml-5 lg:ml-0 mt-5"> 
                    {/* General Infos */}
                    <div className='flex flex-col items-between  justify-start gap-[12px] w-full'>

                        <h2 className='font-extrabold text-xl md:text-2xl lg:text-3xl'>{product?.name}</h2>
                        <span className='font-bold'> Categories : <span className='font-medium'> {product?.categories?.map((category)=>category.name).join(', ')}</span></span>
                        {/* adding to basket */}
                        <div className='flex flex-row items-center justify-between relative '>
                            <h3 className='font-bold '>Quantity: {product.quantity}</h3>
                            <div className='group duration-300 transition-all ease-in-out'>
                                <h2 className="
                                    flex flex-row items-center justify-center gap-[5px]  font-100
                                    transform translate-y-0 opacity-100 delay-200 font-bold
                                    group-hover:-translate-y-10 group-hover:opacity-0 group-hover:delay-200
                                    transition-all cursor-pointer
                                ">
                                    Price : {product.price}
                                    <span className="text-xs text-gray-500 font-medium ">$</span>
                                </h2>
                                <div 
                                    onClick={handleAddProductToBasket}
                                    className="
                                        flex flex-row items-center justify-end  gap-[5px]  
                                        absolute -bottom-8 right-0 opacity-0 delay-200
                                        group-hover:bottom-2 group-hover:opacity-100 group-hover:delay-200
                                        transition-all pointer-events-none group-hover:pointer-events-auto
                                        
                                    "
                                >
                                    <SlBasket className='cursor-pointer' size={16} /> 
                                    <span className="text-sm mr-2 font-bold cursor-pointer">Add To Basket</span>
                                    
                                </div>
                            </div>
                        </div>
                        <FavoriteButton productId={product?.id??''} /> 
                    </div>
                    {/* Description */}
                    <div className="flex flex-col gap-[20px]">
                        <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl'>Description : </h1>
                        <h2 className=''>{product?.description}</h2>
                    </div>
                
                </div>
            </div>
            
            {/* More  */}
            <HorizontalCategoryScroll categories={categories} isLoading={isLoadingCategories} label="Checkout Categories" /> 
           
        </div>
    );
};

export default ProductDetails;
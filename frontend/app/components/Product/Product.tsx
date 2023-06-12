'use client'
import { useBasket } from '@/context/store/use-basket';
import { FullProduct } from '@/types';
import { Product as ProductType } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {SlBasket} from "react-icons/sl"
interface ProductProps {
    product : FullProduct
};

function Product({product}:ProductProps) {
    const {name} =product||{}
    const {add} = useBasket();
    const handleAddProductToBasket = ()=>{
        add(product)
    }
    return (
        <div key={product.id} className="inline-block px-3">
            <div className="
                flex flex-col
                py-5
                w-96 h-96 max-w-xs overflow-hidden border-[0.05px] border-[#dddddd] rounded-lg shadow-xs bg-white hover:shadow-md transition-shadow duration-300 ease-in-out"
            >
                <div className='flex-1 flex flex-col items-center justify-center rounded-lg px-5'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={product.image??''} 
                        alt="product" 
                        className="rounded-lg w-64 h-64 object-contain  " 
                    />  
                </div>

                <div className="flex flex-row items-center justify-between pt-5 w-full  px-5 relative">

                    {/* description */}
                    <Link href={`/products/${product.id}`} className="font-600  text-gray-500 text-sm cursor-pointer">{`${name.slice(0,20)}${name.slice(0,20).length<20?'':'...'}`}</Link>
                    <div className='group duration-300 transition-all ease-in-out'>
                        <h2 className="
                            flex flex-row items-center justify-center gap-[5px]  font-100
                            transform translate-y-0 opacity-100 delay-200
                            group-hover:-translate-y-10 group-hover:opacity-0 group-hover:delay-200
                            transition-all 
                        ">
                            Price : {product.price}
                            <span className="text-xs text-gray-500  ">$</span>
                        </h2>
                        <div 
                            onClick={handleAddProductToBasket}
                            className="
                                flex flex-row items-center justify-end gap-[5px] w-full
                                absolute -bottom-8 left-0 opacity-0 delay-200
                                group-hover:bottom-0 group-hover:opacity-100 group-hover:delay-200
                                transition-all cursor-pointer
                                
                            "
                        >
                            <SlBasket size={16} /> 
                            <span className="text-sm mr-2">Add To Basket</span>
                            
                        </div>
                        {/* add some stuff for for hover to add */}
                    </div>
                    
                </div>

            </div>
           
        </div>
    );
};

export default Product;
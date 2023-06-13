'use client'
import { useStoreBasket } from '@/context/store/use-store-basket';
import { BasketProduct, FullProduct } from '@/types';
import Link from 'next/link';
import React from 'react';
import {IoIosAddCircleOutline,IoMdRemoveCircleOutline} from 'react-icons/io'
import {MdDeleteOutline} from "react-icons/md";
interface NavbarProductProps {
    product : BasketProduct
};

function NavbarProduct({product}:NavbarProductProps) {
    const {name}= product||{}
    const full_product :FullProduct= product;
    const {add,remove,remove_all} = useStoreBasket()
    const handleAddProductToBasket = ()=> add(full_product)
    const handleRemoveOneProductFromBasket = ()=> remove(full_product)
    const handleRemoveProductFromBasket = ()=> remove_all(full_product.id)
    return (
        <div key={product.id} className="flex flex-row items-center justify-center w-full p-2 px-3 border-b-[0.1px] border-gray-300">
            <div className='flex flex-col items-center justify-center rounded-lg '>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={product.image??''} 
                    alt="product" 
                    className="rounded-lg w-16 h-16 object-contain  " 
                />  
            </div>

            <div className="flex-1 flex flex-col items-start justify-start w-full  px-5 relative">

                {/* description */}
                <Link href={`/products/${product.id}`} className="font-600  text-gray-500 text-sm cursor-pointer">{`${name.slice(0,20)}${name.slice(0,20).length<20?'':'...'}`}</Link>
                <div className=''>
                    <h2 className="
                        flex flex-row items-center justify-start gap-[5px]  font-100
                    ">
                        Price : {product.price}
                        <span className="text-xs text-gray-500  ">$</span>
                    </h2>
                    
                    {/* add some stuff for for hover to add */}
                </div>
            </div>
            <div className="flex flex-col items-center ">
                <div className="flex flex-row items-center justify-between gap-[15px] relative">
                    <IoMdRemoveCircleOutline 
                        onClick={handleRemoveOneProductFromBasket} 
                        className="cursor-pointer " 
                        size={24} 
                    /> 
                        <span className="font-100">{product.qte}</span>
                    <IoIosAddCircleOutline 
                        onClick={handleAddProductToBasket} 
                        className="cursor-pointer " 
                        size={24} 
                    /> 
                </div>
                <MdDeleteOutline 
                    onClick={handleRemoveProductFromBasket} 
                    className={"text-red-500 cursor-pointer"} 
                    size={26} 
                /> 
            </div>
           
        </div>
    );
};

export default NavbarProduct;
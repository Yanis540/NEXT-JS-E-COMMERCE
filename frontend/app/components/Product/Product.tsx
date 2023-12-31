'use client'
import { useStoreBasket } from '@/context/store/use-store-basket';
import { FullProduct } from '@/types';
import Link from 'next/link';
import {SlBasket} from "react-icons/sl"
import FavoriteButton from '../Favorite/FavoriteButton';
import clsx from 'clsx';
interface ProductProps {
    product : FullProduct
};

function Product({product}:ProductProps) {
    const {name} =product||{}
    const {add}= useStoreBasket()||{};
    const handleAddProductToBasket = ()=>{
        if(add)
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
                    <div className="flex flex-row items-center justify-center ">
                        <Link 
                            href={`/products/${product.id}`} 
                            className="font-600  text-gray-500 text-sm cursor-pointer"
                        >
                            {`${name.slice(0,20)}${name.slice(0,20).length<20?'':'...'}`}
                        </Link>
                        <FavoriteButton productId={product?.id??''} /> 
                    </div>
                    {/* add some stuff for for hover to add */}
                    <div className='group duration-300 transition-all ease-in-out'>
                        <h2 className="
                            flex flex-row items-center justify-center gap-[5px]  font-100
                            transform translate-y-0 opacity-100 delay-200 font-bold
                            group-hover:-translate-y-10 group-hover:opacity-0 group-hover:delay-200
                            transition-all 
                        ">
                            Price : {product.price}
                            <span className="text-xs text-gray-500 font-medium ">$</span>
                        </h2>
                        <div 
                            onClick={handleAddProductToBasket}
                            className={clsx(`
                                flex flex-row items-center justify-end gap-[5px] 
                                absolute -bottom-8 right-0 opacity-0 delay-200
                                group-hover:bottom-2 group-hover:opacity-100 group-hover:delay-200
                                transition-all pointer-events-none group-hover:pointer-events-auto
                            `)}
                        >
                            <SlBasket className='cursor-pointer' size={16} /> 
                            <span className="text-sm mr-2 font-bold cursor-pointer">Add To Basket</span>
                            
                        </div>
                    </div>
                    
                </div>

            </div>
           
        </div>
    );
};

export default Product;
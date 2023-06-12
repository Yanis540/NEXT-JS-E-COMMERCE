import { FullProduct } from '@/types';
import React from 'react';
import Product from '../Product/Product';

interface HorizontalScrollProps {
    label : string 
    products : FullProduct[]
};

function HorizontalScroll({label,products}:HorizontalScrollProps) {
    return (
        <div className="flex flex-col py-5  px-5 mb-3 h-full w-[70%] mx-auto max-w-[1200px] bg-[#c8c8c810] rounded-xl">
            <h1 className="text-left py-5 pr-5 md:pr-10 lg:pr-20    font-bold text-4xl text-dark-blue ">
                {label} : 
            </h1>
            <div
                className="flex overflow-x-scroll  pb-10 scrollbar-hide "
            >
                <div className="flex flex-nowrap pr-5 md:pr-10 lg:pr-20 ">

                    {
                        products?.map((product,index)=>(
                            <Product key={product.id} product={product} /> 
                        ))
                    }
                   

                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
import { FullProduct } from '@/types';
import React from 'react';
import Product from './Product';
import ProductSkeleton from './ProductSkeleton';
import clsx from 'clsx';

interface HorizontalProductScrollProps {
    label : string 
    products : FullProduct[]
    isLoading : boolean 
    className ? : string
};

function HorizontalProductScroll({label,products,isLoading,className}:HorizontalProductScrollProps) {

    return (
        <div className={clsx(className," flex flex-col py-5  px-5 mb-3 h-full w-[70%] mx-auto max-w-[1200px] bg-light-gray-transparent rounded-xl")}>
            <h1 className="text-left py-5 pr-5 md:pr-10 lg:pr-20    font-bold text-4xl text-dark-blue ">
                {label} : 
            </h1>
            <div
                className="flex overflow-x-scroll  pb-10 scrollbar "
            >
                <div className="flex flex-nowrap pr-5 md:pr-10 lg:pr-20 ">
                    
                    {
                        isLoading
                        ?   Array.from({length:50})?.map((_,index)=>(
                                <ProductSkeleton key={index} /> 
                            ))
                        :   products?.map((product,index)=>(
                                <Product key={product.id} product={product} /> 
                            ))
                    }
                   

                </div>
            </div>
        </div>
    );
};

export default HorizontalProductScroll;
import React from 'react';
import clsx from 'clsx';
import Category from './Category';
import { Category as CategoryType } from '@prisma/client';
import ProductSkeleton from '../Product/ProductSkeleton';
interface HorizontalCategoryScrollProps {
    label : string 
    categories : CategoryType[]
    isLoading : boolean 
    className ? : string
};

function HorizontalCategoryScroll({label,categories,isLoading,className}:HorizontalCategoryScrollProps) {

    return (
        <div className={clsx(className," flex flex-col py-5  px-5 mb-3 h-full w-[70%] mx-auto max-w-[1200px] bg-light-gray-transparent rounded-xl")}>
            <h1 className="text-left py-5 pr-5 md:pr-10 lg:pr-20    font-bold text-4xl text-dark-blue ">
                {label} : 
            </h1>
            <div
                className="flex overflow-x-scroll  pb-10  "
            >
                <div className="flex flex-nowrap pr-5 md:pr-10 lg:pr-20 ">
                    
                    {
                        isLoading
                        ?   Array.from({length:50})?.map((_,index)=>(
                                <ProductSkeleton key={index} /> 
                            ))
                        :   categories?.map((category,index)=>(
                                <Category key={category.id} category={category} /> 
                            ))
                    }
                   

                </div>
            </div>
        </div>
    );
};

export default HorizontalCategoryScroll;
import HorizontalCategoryScroll from '@/components/Category/HorizontalCategoryScroll';
import HorizontalProductScroll from '@/components/Product/HorizontalProductScroll';
import { useCategories } from '@/hooks/use-categories';
import { useProducts } from '@/hooks/use-products';
import clsx from 'clsx';
import React from 'react';
import {SlBasket} from "react-icons/sl";
interface EmptyBasketProps {

};

function EmptyBasket({}:EmptyBasketProps) {
    const {categories , isLoading: isLoadingCategories} = useCategories();
    const {products,isLoading:isLoadingProducts} = useProducts();
    return (
        <div className={clsx(
            "flex-1  flex flex-col p-5 border border-gray-300 rounded-lg", 
            )}
        >
            <div className="flex flex-col overflow-y-scroll scrollbar-hide ">
                <div className='flex flex-col items-center justify-center max-w-[1200px] mx-auto py-6 md:py-8 lg:py-12 w-[70%]  hover:scale-y-[102%] transition-all duration-300 ease-in-out    bg-dark-gray rounded-lg font-bold   text-white'>
                    <h2 className='text-xl md:text-2xl lg:text-4xl'>Your basket is empty ! </h2>
                    <SlBasket size={42} /> 
                    <span className=''>But you can check out some of our products</span>
                </div>

                <HorizontalCategoryScroll categories={categories} isLoading={isLoadingCategories} label="Categories" /> 
                <HorizontalProductScroll products={products} isLoading={isLoadingProducts} label="Products" /> 
            </div>
        </div>
    );
};

export default EmptyBasket;
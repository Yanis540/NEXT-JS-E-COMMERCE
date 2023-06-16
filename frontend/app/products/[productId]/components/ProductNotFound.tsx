'use client'
import HorizontalCategoryScroll from '@/components/Category/HorizontalCategoryScroll';
import HorizontalProductScroll from '@/components/Product/HorizontalProductScroll';
import { useCategories } from '@/hooks/use-categories';
import { useProducts } from '@/hooks/use-products';
import React from 'react';
import {CgSearchFound} from "react-icons/cg";
interface ProductNotFoundProps {

};

function ProductNotFound({}:ProductNotFoundProps) {
    const {categories,isLoading:isLoadingCategories} = useCategories();
    const {products,isLoading: isLoadingProducts} = useProducts();
    return (
        <div className="flex flex-col  items-center  w-full border border-green-500 ">
           <div className= "flex flex-col items-center justify-center rounded-lg py-12 h-[500px]   bg-dark-gray mt-5 mb-4 w-[70%] max-w-[1200px]  font-bold   text-white">
                <h2 className='text-xl md:text-2xl lg:text-4xl '>Product You are looking for is not found </h2>
                <CgSearchFound size={32} /> 
           </div>

            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold'>Check out </h2>
            <HorizontalProductScroll label="Our products" products = {products} isLoading={isLoadingCategories} /> 
            <HorizontalCategoryScroll label="Our categories" categories={categories} isLoading={isLoadingCategories} /> 

        </div>
    );
};

export default ProductNotFound;
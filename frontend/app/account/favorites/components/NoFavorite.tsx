import HorizontalCategoryScroll from '@/components/Category/HorizontalCategoryScroll';
import HorizontalProductScroll from '@/components/Product/HorizontalProductScroll';
import { useCategories } from '@/hooks/use-categories';
import { useProducts } from '@/hooks/use-products';
import React from 'react';
import {TbBasket} from "react-icons/tb";

interface NoFavoriteProps {

};

function NoFavorite({}:NoFavoriteProps) {
    const {products,isLoading} = useProducts();
    const {categories,isLoading:isLoadingCategories} = useCategories()
    return (
        <div className="flex flex-col w-full  overflow-y-scroll">
            <div className="flex flex-col items-center my-4 mx-auto rounded-lg p-4 w-[80%] max-w-[1200px] font-medium">

                <h2 className="w-full text-center text-xl md:text-4xl mt-4 ">You do not have any favorite </h2>
                <TbBasket  size={32} /> 

           </div>
           {/* Some of Our products */}
            <HorizontalProductScroll isLoading={isLoading} label={"Check Our Products"} products={products} /> 
            <HorizontalCategoryScroll isLoading={isLoadingCategories} label={"Our Categories"} categories={categories} /> 
           
        </div>
    );
};

export default NoFavorite;
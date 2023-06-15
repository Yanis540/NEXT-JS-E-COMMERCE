import Products from '@/components/Product/Products';
import { FullProduct } from '@/types';
import React from 'react';

interface ResultsShopProps {
    products : FullProduct[]
    isLoading : boolean 

};

function ResultsShop({products,isLoading}:ResultsShopProps) {
    return (
        <div className="flex-1 border border-gray-300 rounded py-4 overflow-y-scroll ">
            <h2 className='px-4'>Results :  </h2>
           <Products products={products} isLoading={isLoading}  /> 
        </div>
    );
};

export default ResultsShop;
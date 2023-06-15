import Products from '@/components/Product/Products';
import { FullProduct } from '@/types';
import React from 'react';
import { TbBasket } from 'react-icons/tb';

interface ThereFavoritesProps {
    products : FullProduct[]
    isLoading : boolean
};

function ThereFavorites({products,isLoading}:ThereFavoritesProps) {
    return (
        <div className="flex flex-col w-full  overflow-y-scroll">
            <div className="flex flex-col items-center my-4 mx-auto rounded-lg p-4 w-[80%] max-w-[1200px] font-medium">

                <h2 className="w-full text-center text-xl md:text-4xl mt-4 ">Your favorite products :   </h2>
                <TbBasket  size={32} /> 

           </div>
            <Products isLoading={isLoading} products={products} /> 
           
        </div>
    );
};

export default ThereFavorites;
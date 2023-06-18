'use client'
import { useStoreBasket } from '@/context/store/use-store-basket';
import React, { useMemo } from 'react';
import clsx from 'clsx';
import ProductBasket from '@/components/Product/ProductBasket';
import { useCategories } from '@/hooks/use-categories';
import { useProducts } from '@/hooks/use-products';
import HorizontalCategoryScroll from '@/components/Category/HorizontalCategoryScroll';
import HorizontalProductScroll from '@/components/Product/HorizontalProductScroll';
import { calculateTotal } from '../../util/calculate-total';
import StripeCheckoutForm from './components/StripeCheckoutForm';
interface BasketProps {

};

function Basket({}:BasketProps) {
    const {basket} = useStoreBasket()||{};
    const total = calculateTotal(basket??[]);
 
    return (
        <div className={clsx(
            "flex-1 flex flex-col gap-[10px] p-5 border border-gray-300 rounded-lg", 
            )}
        >
            <h2 className='font-bold  text-center mb-3 '>Your Basket </h2>
            <div className="flex-1 flex flex-col w-full gap-2 md:gap-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-white scrollbar-rounded-md">
            {
                basket?.map((product)=>(
                    <ProductBasket key={product.id} product={product}  checkout/>
                ))
            }
            </div>
            <div className=' flex flex-col items-between border border-gray-300 rounded-lg'>
                <h2 className='font-bold p-3 text-md'>Total to pay : {total} <span className='font-medium'>$</span></h2> 
                <StripeCheckoutForm /> 
                
            </div>

        </div>
    );
};

export default Basket;
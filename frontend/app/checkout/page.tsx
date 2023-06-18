'use client'
import React from 'react';
import Basket from './components/Basket/Basket';
import { useStoreBasket } from '@/context/store/use-store-basket';
import useGetUser from '@/hooks/use-get-user';
import EmptyBasket from './components/Basket/EmptyBasket';
import { CircularProgress } from '@mui/material';

interface CheckoutProps {

};

function Checkout({}:CheckoutProps) {
    const {basket}= useStoreBasket()||{};
    useGetUser();
    if(!basket)
        return <div className="flex-1 flex flex-col items-center justify-center"><CircularProgress /> ;</div>
    return (
        <div className="text-dark-gray pt-[64px] h-[calc( 100% - 64px )] h-full  md:h-screen md:max-h-screen w-full px-5 overflow-y-scroll scrollbar-hide">
            <div className='flex-1 flex flex-col  md:flex-row gap-4  p-4 h-full w-full'>
                {
                    basket&& basket?.length !=0 ? (
                    <>
                        <Basket />
                    </>
                    ):(
                        <EmptyBasket />
                    )
                } 
           </div>
        </div>
    );
};

export default Checkout;
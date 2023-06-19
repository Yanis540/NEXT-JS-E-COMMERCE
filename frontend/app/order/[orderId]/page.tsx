'use client'
import React, { useEffect } from 'react';
import { useOrder } from './hooks/use-order';
import { useParams } from 'next/navigation';
import { CircularProgress } from '@mui/material';
import OrderError from './components/OrderError';
import OrderDetails from './components/OrderDetails';
import useGetUser from '@/hooks/use-get-user';

interface OrderProps {

};

function Order({}:OrderProps) {
    const params = useParams()
    const {orderId} = params ||{};
    const {order,isLoading,error} = useOrder(orderId as string);
    useGetUser()
    if(isLoading)
        return(
        <div className="flex-1 flex flex-col text-dark-gray pt-[64px] max-h-screen w-full px-5 overflow-y-hidden ">
            <div className='flex-1 flex flex-col items-center justify-center  gap-4 p-4  h-full w-full overflow-y-scroll scrollbar-hide '>
                <CircularProgress /> 
            </div>
        </div>
        )
    if(!!error)
        return (
        <div className="flex-1 flex flex-col text-dark-gray pt-[64px] max-h-screen w-full px-5 overflow-y-hidden ">
            <div className='flex-1 flex flex-col  gap-4 p-4  h-full w-full overflow-y-scroll scrollbar-hide '>
                <OrderError error={error} /> 
            </div>
        </div>
        )
    return (
        <div className="flex-1 flex flex-col text-dark-gray pt-[64px] max-h-screen w-full px-5 overflow-y-hidden ">
            <div className='flex-1 flex flex-col  gap-4 p-4  h-full w-full lg:w-[70%] max-w-[1200px] mx-auto overflow-y-scroll  scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-white scrollbar-rounded-md '>
                <OrderDetails order={order} /> 
            </div>
        </div>
    );
};

export default Order;
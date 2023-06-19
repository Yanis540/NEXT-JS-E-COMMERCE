'use client'
import { FullOrder } from '@/types';
import Link from 'next/link';
import React, { useMemo } from 'react';

interface OrderInformationsProps {
    order: FullOrder
};

function OrderInformations({order}:OrderInformationsProps) {
    const number_products = useMemo(()=>{
        return order?.basket?.length??0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[order?.id])
    return (
        <div className="flex-1 flex flex-col items-start justify-start  gap-4 px-5 relative">
                {/* Top order */}
                <div className="flex flex-col lg:flex-row items-start justify-between w-full relative">
                    {/* Id */}
                    <Link scroll={false} href={`/order/${order.id}`} className="inline font-600  text-gray-500  text-sm cursor-pointer w-full">
                        {order?.id}
                    </Link>
                    <div className=''>
                        <h2 className="
                            flex flex-row items-center justify-start gap-[5px]  font-100
                        ">
                            {new Date(order.date).toDateString()} 
                        </h2>
                    </div>
                </div>
                {/* Order related  */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between w-full gap-2">
                    <h2 className="text-gray-500 leading-6 flex flex-row items-center gap-2 ">
                        Checkout Status :  
                        <span className={`
                            p-1 rounded-lg bg-opacity-60 ${
                                order?.checkout_status =='complete'
                                ? 'bg-green-500 text-white  '
                                : order?.checkout_status =="open" 
                                    ? 'bg-gray-400 text-gray-600'
                                    : 'bg-red-400 text-red-800'
                            }`
                        }> 
                            {order?.checkout_status}
                        </span>
                    </h2>
                    <h2 className="text-gray-500 leading-6 flex flex-row items-center gap-2">
                        Payment Status : 
                        <span className={`
                            p-1 rounded-lg bg-opacity-60 ${
                                order?.payment_status =='paid'
                                ? 'bg-green-500 text-white  '
                                : order?.payment_status =="no_payment_required" 
                                    ? 'bg-gray-400 text-gray-600'
                                    : 'bg-red-400 text-red-800'
                            }`
                        }>
                            {order?.payment_status}
                        </span>
                    </h2>
                    <h2 className="text-gray-500 leading-6 flex flex-row items-center gap-2">
                        Order Status :
                        <span className={`
                            p-1 rounded-lg bg-opacity-60 ${
                                order?.status =='delivered'
                                ? 'bg-green-500 text-white  '
                                : order?.status =="progress" 
                                    ? 'bg-gray-400 text-gray-600'
                                    : 'bg-red-400 text-red-800'
                            }`
                        }> 
                            {order?.status}
                        </span> 
                    </h2>
                </div>
                {/* Payment */}
                <div className='flex flex-col md:flex-row items-start  md:items-center justify-between gap-2 w-full'>
                    <h2 className="
                        flex flex-row items-center justify-start gap-[5px]  font-100 text-gray-500
                    ">
                        Amount : <span className="text-dark-gray"> {order.amount}</span> 
                        <span className="text-xs text-gray-500">$</span>
                    </h2>
                    <h2 className="
                        flex flex-row items-center justify-start gap-[5px]  font-100 text-gray-500
                    ">
                        Number Of Products : <span className="text-dark-gray"> {number_products}</span> 
                    </h2>
                </div>
               
            </div>
    );
};

export default OrderInformations;
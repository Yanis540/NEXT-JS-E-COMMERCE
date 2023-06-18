import { FullOrder } from '@/types';
import Link from 'next/link';
import React from 'react';

interface OrderProps {
    order: FullOrder
};

function Order({order}:OrderProps) {
    return (
        <div className="
            flex flex-row items-center justify-center w-full  p-2 md:px-3 border 
            border-gray-100 rounded-lg bg-white hover:bg-gray-200 transition-all duration-200  
        ">
            {/*  */}
            <div className='flex flex-col items-center justify-center rounded-lg '>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={order?.products[0]?.image??''} 
                    alt="product" 
                    className="rounded-lg w-16 h-16 object-contain  " 
                />  
            </div>

            <div className="flex-1 flex flex-col items-start justify-start  gap-4 px-5 relative">
                {/* Top order */}
                <div className="flex flex-row items-start justify-between w-full relative">
                    {/* Id */}
                    <Link href={`/order/${order.id}`} className="flex flex-row items-center gap-[10px] font-600  text-gray-500 text-sm cursor-pointer">
                        {order?.id}
                    </Link>
                    <div className=''>
                        <h2 className="
                            flex flex-row items-center justify-start gap-[5px]  font-100
                        ">
                            {new Date(order.date).toISOString()} 
                        </h2>
                    </div>
                </div>
                {/* Order related  */}
                <div className="flex flex-row items-center justify-between w-full">
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
                <div className=''>
                    <h2 className="
                        flex flex-row items-center justify-start gap-[5px]  font-100 text-gray-500
                    ">
                        Amount : <span className="text-dark-gray"> {order.amount}</span> 
                        <span className="text-xs text-gray-500">$</span>
                    </h2>
                </div>
               
            </div>
         
        </div>
    );
};

export default Order;
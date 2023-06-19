import Button from '@/components/Button/Button';
import Link from 'next/link';
import React from 'react';
import {AiOutlineShopping} from "react-icons/ai";
interface OrderErrorProps {
    error: unknown
};

function OrderError({error}:OrderErrorProps) {
    const isNotFound = ((error as any)?.response?.data as string)?.includes('No Order')
    return (
        <div className="flex-1 flex flex-col items-center justify-start md:justify-center gap-[30px] h-full w-full">
           <h2 className="text-xl md:text-2xl lg:text-4xl">{isNotFound?"Order Not Found":"An unexpected error happened!"}</h2>
           <Button className="w-[70%] max-w-[400px]  text-white " >
                <Link href="/account/orders" className="flex flex-col items-center  text-xl">
                    See your orders
                    <AiOutlineShopping size={32} /> 
                </Link>
            </Button>
        </div>
    );
};

export default OrderError;
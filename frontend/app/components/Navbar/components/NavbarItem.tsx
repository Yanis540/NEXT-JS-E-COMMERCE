'use client'
import React, { useMemo } from 'react';
import { IconType } from 'react-icons/lib';
import { useRouter } from 'next/navigation';
import { useStoreBasket } from '@/context/store/use-store-basket';
interface NavbarItemProps {
    href: string 
    onClick?: (() => void) | undefined
    label: String;
    Icon?: IconType | undefined
    isMobile ? : boolean
};

function NavbarItem({href,onClick,label,Icon,isMobile}:NavbarItemProps) {
    const {basket}= useStoreBasket()||{};
    const router=useRouter()
    const isCheckout = href.includes('checkout');

    const handleOnClick = ()=>{
        if(onClick && (!isMobile ||isCheckout))
            onClick()
                
        else 
            if(isMobile)
                router.push('/'+label.toLowerCase())
            else 
                router.push(href??"#")

    }
    const number_items_per_basket = useMemo(()=>{
        return basket?.length??0
    },[basket?.length])
    return (
        <div onClick={handleOnClick} className='flex flex-row items-center gap-2 font-bold cursor-pointer'>
            {Icon && (
                !isCheckout ? (
                    <Icon className='' size={24} /> 
                ):(
                    <div className="relative">
                        <Icon className='' size={24} /> 
                        <span className="flex flex-col items-center justify-center absolute bottom-0 -right-2 bg-blue-600 text-white p-[5px] rounded-full w-[15px] h-[15px] text-[10px] ">{number_items_per_basket}</span>
                    </div>
                )
            )}
    
            <p
                className="bg-transparent ml-1 "
            >
                {
                    (!Icon|| isMobile) && (
                        label
                    )
                }
            </p>
        </div>
    );
};

export default NavbarItem;
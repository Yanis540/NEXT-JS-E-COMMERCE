'use client'
import React from 'react';
import { IconType } from 'react-icons/lib';
import { useRouter } from 'next/navigation';
interface NavbarItemProps {
    href: string 
    onClick?: (() => void) | undefined
    label: String;
    Icon?: IconType | undefined
    isMobile ? : boolean
};

function NavbarItem({href,onClick,label,Icon,isMobile}:NavbarItemProps) {
    const router=useRouter()
    const handleOnClick = ()=>{
        if(onClick && !isMobile)            
            onClick()
        else 
            if(isMobile)
                router.push('/'+label.toLowerCase())
            else 
                router.push(href??"#")

    }
    return (
        <div onClick={handleOnClick} className='flex flex-row items-center gap-2 cursor-pointer'>
            {Icon && <Icon className='' size={24} /> }
    
            <p
                className="bg-transparent "
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
'use client'
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface AccountMenuProps {
    visible: boolean 
};

function AccountMenu({visible}:AccountMenuProps) {
    if(!visible)
        return null;
    return (
        <div className={clsx(
                "bg-dark-gray w-56 absolute top-5 right-0  py-5 flex-col border-2 border-gray-800 rounded duration-100 transition-all ease-out", 
            )}
        >
          <div className="flex flex-col gap-3">
            <Link href="/account" className="px-3 text-center text-white  text-sm hover:underline ">
                UserName
            </Link> 
            <hr className="bg-gray-600 border-0 h-px my-4" /> 
            <div onClick={()=>{}} className="px-3 text-center text-white  text-sm hover:underline">
                Sign Out
            </div>
          </div>
       </div>
    );
};

export default AccountMenu;
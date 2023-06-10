'use client'
import clsx from 'clsx';
import React from 'react';

interface AccountMenuProps {
    visible: boolean 
};

function AccountMenu({visible}:AccountMenuProps) {
        
    return (
        <div className={clsx(
                "bg-dark-gray w-56 absolute top-5 right-0  py-5 flex-col border-2 border-gray-800 rounded duration-100 transition-all ease-out", 
                visible?"flex ":"hidden"
            )}
        >
          <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <p className="text-white text-sm group-hover/item:underline">
                    UserName
                </p>
            </div> 
            <hr className="bg-gray-600 border-0 h-px my-4" /> 
            <div onClick={()=>{}} className="px-3 text-center text-white  text-sm hover:underline">
                Sign Out
            </div>
          </div>
       </div>
    );
};

export default AccountMenu;
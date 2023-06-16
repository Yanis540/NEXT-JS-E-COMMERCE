

import React, { ReactNode } from 'react';
import SidebarAccount from './components/Sidebar/SidebarAccount';

interface AccountLayoutProps {
    children : ReactNode
};

function AccountLayout({children}:AccountLayoutProps) {
   
    return (
        <div className="flex-1 flex flex-col text-dark-gray pt-[64px] max-h-screen w-full px-5 overflow-y-hidden ">
            <div className='flex-1 flex flex-row gap-4 p-4  h-full w-full overflow-y-scroll scrollbar-hide '>
                <SidebarAccount /> 
                {children}
           </div>
        </div>
    );
};

export default AccountLayout;
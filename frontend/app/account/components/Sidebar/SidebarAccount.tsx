'use client'
import React, { useState } from 'react';
import {useAccountRoutes } from './hooks/use-account-routes';
import SidebarAccountDesktop from './components/SidebarAccountDesktop';
import { RxHamburgerMenu } from 'react-icons/rx';
import SidebarAccountMobile from './components/SidebarAccountMobile';
import {CgSidebarOpen} from "react-icons/cg"
interface SidebarAccountProps {

};



function SidebarAccount({}:SidebarAccountProps) {
    const routes = useAccountRoutes()
    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);
    const toggleMobileMenu = ()=>setShowMobileMenu(!showMobileMenu);
    
    return (
        <>
            {/* Desktop is hidden in the lg  */}
            <SidebarAccountDesktop routes={routes} />
            <div
                onClick={toggleMobileMenu}
                className='flex-[0.05] flex lg:hidden flex-row items-start justify-center cursor-pointer '
            >   
                <CgSidebarOpen className="text-dark-gray " size={30} /> 
            </div>
            <SidebarAccountMobile  
                onClose={()=>setShowMobileMenu(false)}
                visible={showMobileMenu}
                routes={routes}
            />
        </>
    );
};




export default SidebarAccount;
'use client'
import React, { useState } from 'react';
import { Item } from '../Navbar';
import Drawer from '@/components/Drawer/Drawer';
import NavbarItem from './NavbarItem';

interface NavbarMobileMenuProps {
    items:Item[]
    visible : boolean
    onClose : ()=>void
};

function NavbarMobileMenu({items,visible,onClose}:NavbarMobileMenuProps) {

    return (
        
        <Drawer
            onClose={onClose}
            isOpen={visible}
        >
            <div className="flex flex-col h-full gap-4 items-start">
                {
                    items?.map((item,index)=>(
                        <div key={index} className='px-3 textcenter text-dark-gray hover:underline'>
                            <NavbarItem 
                                label={item.label}
                                href={item.href}
                                Icon={item.Icon}
                                isMobile={true}
                            /> 
                        </div>
                    ))
                }
                
            </div>
        </Drawer>
       
    );
};

export default NavbarMobileMenu;
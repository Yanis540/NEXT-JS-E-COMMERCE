'use client'
import Avatar from '@/components/Avatar/Avatar';
import { Transition , Dialog } from '@headlessui/react';

import { format } from 'date-fns';
import React, { useMemo, useState } from 'react';
import { IoClose, IoTrash } from 'react-icons/io5';

import AvatarGroup from '@/components/Avatar/AvatarGroup';
import {ReactNode} from "react"
import clsx from 'clsx';
interface DrawerProps {
  isOpen : boolean 
  onClose : ()=>void
  children: ReactNode
  left ?: boolean
};

function Drawer({children,isOpen,onClose,left}:DrawerProps) {
    
    
    return (
        <>
            
            <Transition.Root show ={isOpen}as={React.Fragment}>
                <Dialog as="div"className="relative z-[100]  " onClose={onClose}>
                    <Transition.Child 
                        as={React.Fragment} 
                        enter ="ease-out duration-500"
                        enterFrom = "opacity-0"
                        enterTo = "opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo ="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40"/> 

                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className={clsx(
                                "pointer-events-none fixed inset-y-0 flex max-w-full", 
                                left?'left-0 pr-10': 'right-0 pl-10'
                                )}
                            >
                                <Transition.Child
                                    as ={React.Fragment}
                                    enter="transform transition ease-in-out duration-500"
                                    enterFrom={left?"-translate-x-full":"translate-x-full"}
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500"
                                    leaveTo={left?"-translate-x-full":"translate-x-full"}
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col  bg-white py-6 shadow-xl scrollbar-thin overflow-y-scroll scrollbar-thumb-dark-gray scrollbar-track-white scrollbar-rounded-md">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-end">
                                                    <div className="ml-3 h-7 flex items-center">
                                                        <button 
                                                            type="button" 
                                                            onClick={onClose}
                                                            className="
                                                                rounded-md bg-white text-gray-400 hover:text-gray-500 
                                                                focus:outline-none focus:ring-0 focus:ring-dark-gray 
                                                                focus:ring-offset-0
                                                            "
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <IoClose size={24} /> 
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> 
                                            {children}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Drawer;
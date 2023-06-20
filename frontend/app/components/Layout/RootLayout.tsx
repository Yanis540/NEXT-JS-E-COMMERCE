'use client'
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import ToastContext from '@/context/ToasterContext';
import AuthContext from '@/context/AuthContext';
interface RootLayoutProps {
    children : ReactNode
};

function RootLayout({children}:RootLayoutProps) {
    const pathname = usePathname();
    const queryClient = new QueryClient()
    return (
        <AuthContext>
       
            <QueryClientProvider client={queryClient}>
                <ToastContext />
                {
                    !pathname?.includes('auth') && (
                        <Navbar />
                    )
                }
                {children}
            </QueryClientProvider>
        </AuthContext>
    );
};

export default RootLayout;
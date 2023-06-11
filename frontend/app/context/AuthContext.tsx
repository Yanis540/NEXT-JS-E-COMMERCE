'use client'
import {ReactNode} from 'react';
import { SessionProvider } from "next-auth/react"
interface AuthContextProps {
    children : ReactNode
};

function AuthContext({children}:AuthContextProps) {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    );
};

export default AuthContext;
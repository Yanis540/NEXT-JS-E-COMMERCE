import {ReactNode} from 'react';

interface AuthLayoutProps {
    children : ReactNode
};

function AuthLayout({children}:AuthLayoutProps) {
    return (
        <div className="flex flex-col h-screen w-full border border-red-500 items-center justify-center">
            {children}
        </div>
    );
};

export default AuthLayout;
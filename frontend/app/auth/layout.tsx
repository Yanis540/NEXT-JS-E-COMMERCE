import {ReactNode} from 'react';

interface AuthLayoutProps {
    children : ReactNode
};

function AuthLayout({children}:AuthLayoutProps) {
    return (
        <div className="flex flex-col h-screen w-full items-center justify-center">
            {children}
        </div>
    );
};

export default AuthLayout;
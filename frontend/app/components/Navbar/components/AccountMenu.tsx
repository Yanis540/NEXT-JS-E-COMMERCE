'use client'
import useGetUser from '@/hooks/use-get-user';
import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

interface AccountMenuProps {
    visible: boolean 
};

function AccountMenu({visible}:AccountMenuProps) {
    const session = useSession();
    const router = useRouter();
    const onClick = useMemo(()=>()=>{
        if(session.status === "authenticated")
            signOut()
        else 
            router.push('/auth')
    },[session?.status,router])
    if(!visible)
        return null;
    return (
        <div className="hidden md:flex flex-row items-center gap-2 cursor-pointer relative ">
            <div className={clsx( "bg-dark-gray w-56 absolute top-5 right-0  py-5 flex-col border-2 border-dark-gray rounded duration-100 transition-all ease-out", )}>
                <div className="flex flex-col gap-3">
                    {
                        session.status === "authenticated"&& (
                            <>                        
                            <Link href="/account" className="px-3 text-center text-white  text-sm hover:underline ">
                                {session.data?.user?.name}
                            </Link> 
                            <hr className="bg-gray-600 border-0 h-px my-4" /> 
                        </>

                        )
                    }
                    <div onClick={onClick} className="px-3 text-center text-white  text-sm hover:underline">
                        {session.status === "authenticated"?<>Sign Out</>:<>Login/register</>}
                    </div>
                </div>
            </div>
       </div>
    );
};

export default AccountMenu;
import { SidebarAccountRoute } from '../hooks/use-account-routes';
import Link from 'next/link';
import clsx from 'clsx';

interface SidebarAccountDesktopProps {
    routes:SidebarAccountRoute[]
};

function SidebarAccountDesktop({routes}:SidebarAccountDesktopProps) {
    return (
        <div className="flex-[0.2] hidden lg:flex flex-col items-start  overflow-y-scroll rounded-lg scrollbar-hide  border-[0.05px] border-gray-300 bg-light-gray-transparent max-w-[500px]">
        {
            routes?.map((route,index)=>(
                <Link href={route.href} key={route.href} className={clsx(
                    "flex flex-row items-center  w-full gap-[4px] py-4 px-2  font-bold border-b-[1px] border-b-gray-300 rounded-lg cursor-pointer ", 
                    route.isActive && "bg-dark-gray text-white ",
                    !route.isActive && "hover:bg-gray-300 transition-all duration-200  ",
                )}>
                    <route.Icon className="" size={26} /> 
                    <h2 >{route.label}</h2>
                </Link>
            ))
        }
        </div>
    );
};

export default SidebarAccountDesktop;
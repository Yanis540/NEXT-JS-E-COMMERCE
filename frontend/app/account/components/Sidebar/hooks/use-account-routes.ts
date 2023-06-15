import { usePathname } from "next/navigation"
import { IconType } from "react-icons"

import {VscAccount} from "react-icons/vsc";
import {AiFillShopping} from "react-icons/ai"
import {MdFavorite} from "react-icons/md"
export interface SidebarAccountRoute{
    href:string 
    label: string 
    isActive : boolean 
    Icon : IconType
}
const useAccountRoutes = ()=>{
    const pathName = usePathname();
    const routes:SidebarAccountRoute[] = [
        {
            href:"/account",
            label:"Account",
            isActive:  pathName == '/account', 
            Icon : VscAccount
        },
        {
            href:"/account/orders",
            label:"Orders",
            isActive:  pathName == '/account/orders', 
            Icon : AiFillShopping
        },
        {
            href:"/account/favorites",
            label:"Favorites",
            isActive:  pathName == '/account/favorites', 
            Icon : MdFavorite
        },

    ]


    return routes
}

export {
    useAccountRoutes
}
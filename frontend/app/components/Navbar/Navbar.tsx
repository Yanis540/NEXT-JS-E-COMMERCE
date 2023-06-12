'use client'
import {BsChevronDown } from 'react-icons/bs';
import {CgProfile} from "react-icons/cg"
import { IconType } from 'react-icons/lib';
import Link from 'next/link';
import NavbarItem from './components/NavbarItem';
import {useEffect, useState} from "react"
import NavbarMobileMenu from './components/NavbarMobileMenu';
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdOutlineBookmarkBorder} from "react-icons/md"
import AccountMenu from './components/AccountMenu';
import { useBasket } from '@/context/store/use-basket';
import NavbarBasket from './components/NavbarBasket/NavbarBasket';
import useScroll from './hooks/use-scroll';
interface NavbarProps {

};
export type Item = {
    href : string 
    onClick ? : ()=>void 
    label : String , 
    Icon ?: IconType
}
function Navbar({}:NavbarProps) {
    const [showAccountMenu,setShowAccountMenu] = useState<boolean>(false);
    const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false)
    const [showBasket, setShowBasket] = useState<boolean>(false);
    const [showBackground,_] = useScroll();
    const toggleAccountMenu = ()=>setShowAccountMenu(!showAccountMenu)
    const toggleMobileMenu = ()=>setShowMobileMenu(!showMobileMenu)
    const toggleBasket = ()=>setShowBasket(!showBasket)
    const {basket} = useBasket()
    const items:Item[] = [
        {
            href:'/shop',
            label:'Shop', 
        }, 
        {
            href:'/checkout',
            label:'Card', 
            Icon : AiOutlineShoppingCart,
            onClick:toggleBasket
        }, 
        {
            href:'/favorites',
            label:'Favorites', 
            Icon : MdOutlineBookmarkBorder 
        }, 
        {
            href:"",
            label:'Account',
            Icon:CgProfile, 
            onClick:toggleAccountMenu, 
            // Orders 
            // Logout /login/register 
        },
       

    ]
   
    return (
        <>
            <NavbarBasket 
                visible={showBasket}
                onClose={()=>{setShowBasket(false)}}
            /> 
            <NavbarMobileMenu 
                items={items} 
                visible={showMobileMenu} 
                onClose={()=>{setShowMobileMenu(false)}}
            />
            <nav className='w-full z-40 fixed '>
                <div className={`flex flex-row items-center px-5 py-5 h-[64px] transition-all duration-300 ease-in-out  ${showBackground? 'bg-dark-gray text-white bg-opacity-90 ' : '' }`}>
                    <Link href='/' className="flex-1 text-xl md:text-2xl lg:text-4xl ">Yanis Shop</Link>
                    <div  className='hidden md:flex flex-row '>
                        {/* Logo from the left */}
                        <div className='flex flex-row items-center gap-4 '>
                            {
                                items.map((item,index)=>(
                                    <NavbarItem 
                                        key={index} 
                                        href={item.href}
                                        label={item.label}
                                        Icon={item.Icon}
                                        onClick={item.onClick}
                                    /> 
                                ))
                            }
                        </div>
                    </div>
                    <div
                        onClick={toggleMobileMenu}
                        className='flex md:hidden flex-row items-center gap-2 cursor-pointer '
                    >   
                        <RxHamburgerMenu className="text-dark-gray " size={30} /> 
                        <BsChevronDown className={`text-white w-4 trasnition ${showMobileMenu ? 'rotate-180':'rotate-0'} duration-500`}/> 
                    </div>
                
                    <AccountMenu 
                        visible ={showAccountMenu }
                    /> 
                </div>
            </nav>
        </>
    );
};

export default Navbar;
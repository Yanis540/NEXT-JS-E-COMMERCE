'use client'
import {BsChevronDown } from 'react-icons/bs';
import {CgProfile} from "react-icons/cg"
import { IconType } from 'react-icons/lib';
import Link from 'next/link';
import NavbarItem from './components/NavbarItem';
import {useState} from "react"
import NavbarMobileMenu from './components/NavbarMobileMenu';
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdOutlineBookmarkBorder} from "react-icons/md"
import AccountMenu from './components/AccountMenu';
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
    const toggleAccountMenu = ()=>setShowAccountMenu(!showAccountMenu)
    const toggleMobileMenu = ()=>setShowMobileMenu(!showMobileMenu)
    const items:Item[] = [
        {
            href:'/shop',
            label:'Shop', 
            Icon : AiOutlineShoppingCart 
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
            <NavbarMobileMenu 
                items={items} 
                visible={showMobileMenu} 
                onClose={()=>{setShowMobileMenu(false)}}
            />
            <nav className='w-full z-40 fixed '>
                <div className="
                    flex flex-row items-center border  border-red-500  px-5 py-5 h-[64px] ">
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
                <div 
                    className="flex flex-row items-center gap-2 cursor-pointer relative border border-blue-500 "
                >
                   
                    <AccountMenu 
                        visible ={showAccountMenu }
                    /> 
                </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
'use client'

import { useEffect, useState } from "react";

const TOP_OFFSET = 33 ; 

const useScroll =()=>{
    const [showBackground, setShowBackground] = useState<boolean>(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY >= TOP_OFFSET)
                setShowBackground(true)
            else    
                setShowBackground(false)
        }
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    return [showBackground,setShowBackground]
}

export default useScroll;
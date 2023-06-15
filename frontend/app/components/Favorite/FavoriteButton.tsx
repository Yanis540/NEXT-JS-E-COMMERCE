import { useFavorite } from '@/hooks/use-favorite';
import React, { useCallback, useMemo } from 'react';
import {GrFavorite as EmptyHeart} from "react-icons/gr";
import {MdFavorite as FilledHeart} from "react-icons/md";
import { find } from 'lodash';
import { useStoreUser } from '@/context/store/use-store-user';
import { toast } from 'react-hot-toast';
interface FavoriteButtonProps {
    productId: string
};

function FavoriteButton({productId}:FavoriteButtonProps) {

    const {adding:{add,error:errorAdd},removing:{remove,error:errorRemove}} = useFavorite(productId);
    
    const {user,refetch_user} = useStoreUser();

    const isFavorite = useMemo(()=>{
        const favorite_products = user?.favorite_products?user?.favorite_products:[]
        if(find(favorite_products,{id:productId}))
            return true; 
        return false
    },[user?.favorite_products,productId])

    const Icon = isFavorite?FilledHeart : EmptyHeart;

    const toggleFavorites = useCallback(async ()=>{
        try{
            if(!isFavorite){
                await add();
            }
            else 
                await remove();
            refetch_user()
        }
        catch(err:any){
            toast.error("An error occured")
        }
       
    },[add,isFavorite,remove,refetch_user])
    if(!user)
        return null;
    
    return (
        <div 
            onClick={toggleFavorites}
            className="
                cursor-pointer group/item w-6 h-6 lg:w-10 
                lg:h-10 border-white border-2 rounded-full 
                flex justify-center items-center transition 
                hover:border-neutral-300
            ">
            <Icon className="text-dark-gray group-hover/item:text-neutral-300 w-4 lg:w-6"size={25}/> 
       </div>
    );
};

export default FavoriteButton;
'use client'
import Products from '@/components/Product/Products';
import { useFavorites } from '@/hooks/use-favorites';
import useGetUser from '@/hooks/use-get-user';
import clsx from 'clsx';
import React from 'react';
import FavoriteError from './components/FavoriteError';
import NoFavorite from './components/NoFavorite';
import ThereFavorites from './components/ThereFavorites';

interface FavoritesProps {

};

function Favorites({}:FavoritesProps) {
    const {favorite_products,isLoading,error} = useFavorites();
    useGetUser() 
    return (
        <div className="flex-1 w-full overflow-y-scroll rounded-lg  border-[0.05px] border-gray-300 bg-light-gray-transparent">

            <div className={clsx('flex-1 flex flex-col md:flex-row  h-full w-full', !!error && 'items-center justify-center')}>
                {
                    !! error && (
                        <FavoriteError /> 
                    )
                }
                {
                    isLoading && !error && (<Products isLoading={isLoading} products={[]} />)
                }
                {
                    !isLoading && !error && (
                        favorite_products?.length== 0?(
                            <NoFavorite/>  
                        ):(
                            <ThereFavorites isLoading={isLoading} products={favorite_products} /> 
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Favorites;
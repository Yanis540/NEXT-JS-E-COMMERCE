"use client"
import Products from '@/components/Product/Products';
import { useFavorites } from '@/hooks/use-favorites';
import React from 'react';
import NoFavorite from './components/NoFavorite';
import ThereFavorites from './components/ThereFavorites';
import FavoriteError from './components/FavoriteError';
import clsx from 'clsx';
import Footer from '@/components/Footer/Footer';
import useGetUser from '@/hooks/use-get-user';

interface FavoritesProps {

};

function Favorites({}:FavoritesProps) {
    const {favorite_products,isLoading,error} = useFavorites();
    useGetUser() 
    return (
        <>
            <div className="text-dark-gray pt-[64px] h-[calc( 100% - 64px )] h-screen max-h-screen w-full px-5 overflow-y-scroll scrollbar-hide">
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
        </>
   
    );
};

export default Favorites;
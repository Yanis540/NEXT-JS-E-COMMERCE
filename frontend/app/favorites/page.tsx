"use client"
import { useFavorites } from '@/hooks/use-favorites';
import React from 'react';

interface FavoritesProps {

};

function Favorites({}:FavoritesProps) {
    const {data,isLoading,error} = useFavorites(); 
    return (
        <div className="text-dark-gray pt-[64px] h-[calc( 100% - 64px )] w-full px-5 overflow-y-scroll scrollbar-hide">
           Favorites
        </div>
    );
};

export default Favorites;
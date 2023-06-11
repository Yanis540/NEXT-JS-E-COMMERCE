import React from 'react';

interface FavoritesProps {

};

function Favorites({}:FavoritesProps) {
    return (
        <div className="text-dark-gray pt-[64px] h-[calc( 100% - 64px )] w-full px-5 overflow-y-scroll scrollbar-hide">
           Favorites
        </div>
    );
};

export default Favorites;